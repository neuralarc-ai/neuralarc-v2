"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface TermsDialogProps {
  children: React.ReactNode
}

export function TermsDialog({ children }: TermsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-neural-dark">
            Terms of Use
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-sm text-neural-text">
          <div>
            <h3 className="font-semibold text-neural-dark mb-2">1. Eligibility and Account Responsibility</h3>
            <p>You must be at least 18 years of age and capable of entering into a legally binding contract to access or use the Services. You are responsible for maintaining the confidentiality of your account credentials and for all activities occurring under your account.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">2. License to Use Services</h3>
            <p>Subject to your compliance with these Terms, NeuralArc grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for your internal business purposes. You shall not use the Services to develop competing products or reverse engineer any aspect of the platform.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">3. Prohibited Conduct</h3>
            <p>You shall not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Use the Services in any manner that infringes any intellectual property or proprietary rights of any party;</li>
              <li>Use or access the Services to violate any applicable law or regulation;</li>
              <li>Introduce malware or harmful code, scrape data, or interfere with service functionality;</li>
              <li>Misrepresent your identity or affiliation.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">4. Ownership and Intellectual Property</h3>
            <p>All content, trademarks, and software associated with the Services are the exclusive property of NeuralArc or its licensors. No rights are granted except as explicitly set forth herein.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">5. Third-Party Integrations</h3>
            <p>The Services may contain links or integrations with third-party platforms. NeuralArc is not responsible for the content, functionality, or privacy practices of such third parties.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">6. Disclaimers</h3>
            <p>The Services are provided "as is" and "as available." NeuralArc makes no warranties or representations, express or implied, regarding the Services, including but not limited to merchantability, fitness for a particular purpose, accuracy, or non-infringement.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">7. Limitation of Liability</h3>
            <p>To the maximum extent permitted by applicable law, NeuralArc shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits or revenue, arising from or related to your use of the Services.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">8. Indemnification</h3>
            <p>You agree to indemnify, defend, and hold harmless NeuralArc, its officers, directors, employees, and affiliates from any claim, demand, liability, or expense arising out of your breach of these Terms or violation of applicable law.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">9. Governing Law and Jurisdiction</h3>
            <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">10. Changes</h3>
            <p>We reserve the right to modify these Terms at any time. Continued use after changes constitutes acceptance of the updated Terms.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
