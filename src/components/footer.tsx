import { TermsDialog } from "./legal-dialogs/terms-dialog";
import { PrivacyDialog } from "./legal-dialogs/privacy-dialog";
import { DisclaimerDialog } from "./legal-dialogs/disclaimer-dialog";
import { ResponsibleAIDialog } from "./legal-dialogs/responsible-ai-dialog";

export default function Footer() {
  return (
    <footer className="bg-neural-dark text-neural-white py-4 xl:py-8 px-4 xl:px-12">
      <div className="max-w-[1920px] mx-auto flex justify-between items-center">
        {/* Left side - Links */}
        <div className="flex space-x-6 text-sm">
          <TermsDialog>
            <button className="hover:text-neural-light-green hover:underline transition-all duration-200 cursor-pointer text-left">
              Terms of Use
            </button>
          </TermsDialog>
          <PrivacyDialog>
            <button className="hover:text-neural-light-green hover:underline transition-all duration-200 cursor-pointer text-left">
              Privacy Policy
            </button>
          </PrivacyDialog>
          <DisclaimerDialog>
            <button className="hover:text-neural-light-green hover:underline transition-all duration-200 cursor-pointer text-left">
              Disclaimer
            </button>
          </DisclaimerDialog>
          <ResponsibleAIDialog>
            <button className="hover:text-neural-light-green hover:underline transition-all duration-200 cursor-pointer text-left">
              Responsible & Ethical AI
            </button>
          </ResponsibleAIDialog>
        </div>

        {/* Right side - Copyright */}
        <div className="text-sm">
          Copyright 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
