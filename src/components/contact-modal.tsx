"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    workMail: "",
    organization: "",
    reason: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store original overflow style
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      
      // Cleanup function to restore scroll
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  const validateWorkEmail = (email: string): boolean => {
    // Check if email contains common work domains or is not a personal email
    const personalDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
      'icloud.com', 'aol.com', 'live.com', 'msn.com'
    ];
    
    const domain = email.split('@')[1]?.toLowerCase();
    return Boolean(domain && !personalDomains.includes(domain));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate work email
    if (!formData.workMail.trim()) {
      newErrors.workMail = "Work email is required";
    } else if (!validateWorkEmail(formData.workMail)) {
      newErrors.workMail = "Please use your work email address";
    }

    // Validate reason
    if (!formData.reason.trim()) {
      newErrors.reason = "Reason is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form
        setFormData({ name: "", workMail: "", organization: "", reason: "" });
        setShowSuccessPopup(true);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to send message'}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {/* Contact Form Modal */}
      {isOpen && (
        <motion.div
          key="contact-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close Button - Positioned over image */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Two Column Layout */}
            <div className="flex flex-col lg:flex-row h-full">
              {/* Left Column - Form */}
              <div className="w-full lg:w-1/2 p-6 overflow-y-auto">
                {/* Title */}
                <h2 className="text-2xl font-bold text-neural-green mb-6">
                  Get in Touch
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neural-text mb-2">
                  Name: *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neural-orange focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Work Email Field */}
              <div>
                <label htmlFor="workMail" className="block text-sm font-medium text-neural-text mb-2">
                  Work Email: *
                </label>
                <input
                  type="email"
                  id="workMail"
                  name="workMail"
                  value={formData.workMail}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neural-orange focus:border-transparent transition-colors ${
                    errors.workMail ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.name@company.com"
                />
                {errors.workMail && (
                  <p className="mt-1 text-sm text-red-500">{errors.workMail}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Please use your work email address
                </p>
              </div>

              {/* Organization Name Field */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-neural-text mb-2">
                  Organization Name:
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neural-orange focus:border-transparent transition-colors"
                  placeholder="Your company or organization name"
                />
              </div>

              {/* Reason Field */}
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-neural-text mb-2">
                  Reason to Reach Us: *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neural-orange focus:border-transparent transition-colors resize-none ${
                    errors.reason ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your project or inquiry..."
                />
                {errors.reason && (
                  <p className="mt-1 text-sm text-red-500">{errors.reason}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-neural-orange hover:bg-orange-600'
                } text-white`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
                </form>
              </div>

              {/* Right Column - Image */}
              <div className="w-full lg:w-1/2 hidden lg:block">
                <Image
                  src="/Contact.png"
                  alt="Contact Illustration"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          key="success-popup"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => {
              setShowSuccessPopup(false);
              onClose();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Success Modal */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-neural-green">
                Success!
              </h2>
              <button
                onClick={() => {
                  setShowSuccessPopup(false);
                  onClose();
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                Thanks for contacting us! We&apos;ll review your message and get back to you soon.!!
              </p>

              <motion.button
                onClick={() => {
                  setShowSuccessPopup(false);
                  onClose();
                }}
                className="bg-neural-orange text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
