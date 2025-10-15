import { TermsDialog } from "./legal-dialogs/terms-dialog";
import { PrivacyDialog } from "./legal-dialogs/privacy-dialog";
import { DisclaimerDialog } from "./legal-dialogs/disclaimer-dialog";
import { ResponsibleAIDialog } from "./legal-dialogs/responsible-ai-dialog";

export default function Footer() {
  return (
    <footer className="bg-neural-dark text-neural-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Mobile Layout - Stacked and Centered */}
        <div className="flex flex-col items-center space-y-4 sm:hidden">
          {/* Links - Stacked */}
          <div className="flex flex-col items-center space-y-3">
            <TermsDialog>
              <button className="hover:text-neural-light-green hover:underline transition-all duration-200 cursor-pointer text-center text-sm">
                Terms of Use
              </button>
            </TermsDialog>
            <PrivacyDialog>
              <button className="hover:text-neural-light-green hover:underline transition-all duration-200 cursor-pointer text-center text-sm">
                Privacy Policy
              </button>
            </PrivacyDialog>
            <DisclaimerDialog>
              <button className="hover:text-neural-light-green hover:underline transition-all duration-200 cursor-pointer text-center text-sm">
                Disclaimer
              </button>
            </DisclaimerDialog>
            <ResponsibleAIDialog>
              <button className="hover:text-neural-light-green hover:underline transition-all duration-200 cursor-pointer text-center text-sm">
                Responsible & Ethical AI
              </button>
            </ResponsibleAIDialog>
          </div>
          
          {/* Copyright */}
          <div className="text-sm pt-2 border-t border-gray-600 text-center">
            Copyright 2025. All rights reserved.
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden sm:flex justify-between items-center">
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
      </div>
    </footer>
  );
}
