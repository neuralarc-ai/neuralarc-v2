import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, workMail, organization, reason } = await request.json();

    // Validate required fields
    if (!name || !workMail || !reason) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate work email (basic check)
    const personalDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
      'icloud.com', 'aol.com', 'live.com', 'msn.com'
    ];
    
    const domain = workMail.split('@')[1]?.toLowerCase();
    if (!domain || personalDomains.includes(domain)) {
      return NextResponse.json(
        { error: 'Please use your work email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email to dev@neuralarc.ai (notification)
    const notificationEmail = {
      from: `${process.env.SENDER_NAME || 'Team Helium'} <${process.env.SENDER_EMAIL || process.env.EMAIL_USER}>`,
      to: 'dev@neuralarc.ai',
      subject: `New Contact Submission on Neural Arc`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #fef9e6; padding: 30px; border-radius: 12px; text-align: left; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <p style="font-size: 18px; line-height: 1.6; margin-bottom: 20px; font-weight: bold;">Hi Team,</p>
            
            <p style="font-size: 20px; font-weight: bold; color: #fc5e37; margin-bottom: 20px;">Contact Information:</p>
            
            <p style="font-size: 16px; line-height: 1.8; margin-bottom: 10px;">
              <span style="color: #001146; font-weight: bold;">Name:</span> ${name}
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; margin-bottom: 10px;">
              <span style="color: #001146; font-weight: bold;">Email:</span> ${workMail}
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
              <span style="color: #001146; font-weight: bold;">Company/Organization:</span> ${organization || 'Not Mentioned'}
            </p>
            
            <p style="font-size: 20px; font-weight: bold; color: #fc5e37; margin-bottom: 15px;">Reason for Contact:</p>
            
            <p style="font-size: 16px; line-height: 1.8; margin-bottom: 20px;">${reason.replace(/\n/g, '<br>')}</p>
            
            <div style="border-top: 1px solid #ddd; padding-top: 15px; margin-top: 20px;">
              <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                <strong>Submission Date & Time:</strong> ${new Date().toLocaleString('en-GB', { 
                  hour: '2-digit', 
                  minute: '2-digit', 
                  day: '2-digit', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </p>
              
              <p style="font-size: 14px; line-height: 1.6;">
                This email was automatically generated from the Neural Arc contact form.
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: workMail, // So you can reply directly to the sender
    };

    // Thank you email to user
    const thankYouEmail = {
      from: `${process.env.SENDER_NAME || 'Team Helium'} <${process.env.SENDER_EMAIL || process.env.EMAIL_USER}>`,
      to: workMail,
      subject: 'Thank you for contacting Neural Arc',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #d4eb9d; padding: 30px; border-radius: 12px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <p style="font-size: 16px; line-height: 1.6;"><strong>Thank you for reaching out to Neural Arc!</strong> We've received your inquiry and our team will review it carefully.</p>
            
            <p style="font-size: 16px; line-height: 1.6;">We'll reach out to you soon to discuss your project requirements.</p>
            
            <p style="font-size: 16px; line-height: 1.6;">In the meantime, feel free to <a href="https://he2.ai" style="text-decoration: underline; color: #059669;">Explore Helium AI</a> to see how we're transforming enterprise intelligence.</p>
            
            <p style="font-size: 16px; line-height: 1.6;"><strong>Best regards,<br>Team Helium</strong></p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationEmail),
      transporter.sendMail(thankYouEmail)
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
