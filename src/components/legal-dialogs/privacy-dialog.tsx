"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface PrivacyDialogProps {
  children: React.ReactNode
}

export function PrivacyDialog({ children }: PrivacyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-neural-dark">
            Privacy Policy
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-sm text-neural-text">
          <div>
            <h3 className="font-semibold text-neural-dark mb-2">1. Information We Collect</h3>
            <p className="mb-2"><strong>Personal Data:</strong> Name, email, company, contact details.</p>
            <p className="mb-2"><strong>Technical Data:</strong> IP address, browser type, device identifiers, usage logs.</p>
            <p><strong>Cookies:</strong> We use cookies for analytics and personalization.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">2. Use of Information</h3>
            <p>We use the information to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide, maintain, and improve our Services;</li>
              <li>Process transactions and communicate with you;</li>
              <li>Monitor usage trends and enhance security;</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">3. Legal Basis for Processing</h3>
            <p>Where applicable, we process your data on the basis of your consent, our contractual obligations, compliance with legal obligations, or legitimate interests.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">4. Data Sharing</h3>
            <p>We do not sell or rent your data. We may share it with:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Authorized service providers (under strict confidentiality);</li>
              <li>Legal or regulatory authorities, when required;</li>
              <li>Affiliates and successors in interest, in the event of a business transfer.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">5. Data Retention</h3>
            <p>We retain your data only as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required by law.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">6. Security</h3>
            <p>We implement appropriate administrative, technical, and physical safeguards to protect your information against unauthorized access or disclosure.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">7. Your Rights</h3>
            <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the processing of your data. Please contact us at support@neuralarc.ai.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">8. International Transfers</h3>
            <p>If your data is transferred outside of India, we ensure appropriate safeguards are in place, including data processing agreements and, where applicable, standard contractual clauses.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">9. Changes</h3>
            <p>We may update this Privacy Policy periodically. We encourage you to review this page regularly.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
