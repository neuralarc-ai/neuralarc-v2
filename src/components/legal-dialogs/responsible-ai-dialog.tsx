"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ResponsibleAIDialogProps {
  children: React.ReactNode
}

export function ResponsibleAIDialog({ children }: ResponsibleAIDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-neural-dark">
            Responsible & Ethical AI
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-sm text-neural-text">
          <div>
            <h3 className="font-semibold text-neural-dark mb-2">1. Guiding Principles</h3>
            <p>Our AI systems are governed by the following principles:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Transparency:</strong> We strive to provide clear, accessible explanations of how our AI functions and is trained.</li>
              <li><strong>Fairness and Non-Discrimination:</strong> We actively mitigate bias in data and models to ensure equitable outcomes.</li>
              <li><strong>Accountability:</strong> We take responsibility for our models&apos; behavior and allow for oversight and redress mechanisms.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">2. Data Ethics</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>We collect and use data in a lawful, transparent, and fair manner.</li>
              <li>We respect user privacy and avoid the use of sensitive or personally identifiable data unless explicitly consented to.</li>
              <li>Datasets are evaluated for representativeness, accuracy, and bias mitigation.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">3. Human Oversight</h3>
            <p>AI-generated outputs are reviewed by human moderators, particularly in high-impact domains. Final responsibility for decision-making remains with human users.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">4. Security and Safety</h3>
            <p>We employ rigorous security protocols to prevent misuse, manipulation, or unintended consequences of our AI systems.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">5. Continuous Monitoring and Improvement</h3>
            <p>We audit our AI systems periodically for performance, compliance, and alignment with ethical norms. User feedback is actively incorporated to refine outputs and eliminate harm.</p>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">6. User Responsibilities</h3>
            <p>Users of our platform are required to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Use AI outputs responsibly and with appropriate human supervision;</li>
              <li>Avoid using AI to generate deceptive, malicious, or unlawful content;</li>
              <li>Report any concerning behavior or outputs immediately.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neural-dark mb-2">7. Governance and Compliance</h3>
            <p>We stay aligned with global AI regulatory frameworks, including the EU AI Act, India&apos;s Digital Personal Data Protection Act, and emerging best practices from industry consortiums.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
