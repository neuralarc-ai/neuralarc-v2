import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-full flex overflow-hidden">
      {/* Left Section - Light Background */}
      <div className="w-3/5 bg-neural-white flex flex-col justify-center px-4 lg:px-8 xl:px-16 py-4 xl:py-12">
        <div className="max-w-4xl">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3 mb-8 pb-4">
            <Image
              src="/neuralarc-logo.svg"
              alt="NeuralArc Logo"
              width={60}
              height={60}
              className="w-fit h-10 xl:h-12"
            />            
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl xl:text-6xl font-semibold text-neural-green mb-6 leading-tight tracking-tighter">
            Where Intelligence Meets Enterprise Elegance
          </h1>

          {/* Sub-heading */}
          <div className="text-xl xl:text-3xl text-neural-green mb-8 space-y-2">
            <p className="font-bold">The Arc Beyond Networks</p>
            <p>Where neural intelligence powers the next era of insight.</p>
          </div>

          {/* Content Box */}
          <div className="border border-neural-orange rounded-xl xl:rounded-3xl p-6 lg:p-8 mb-8 max-w-3xl">
            {/* Section 1 */}
            <div className="mb-6 pb-6 border-b border-helium-green">
              <h3 className="text-lg xl:text-2xl font-bold text-neural-text mb-4">
                Custom AI Development (Micro-Apps & AI Automation)
              </h3>
              <p className="text-base xl:text-lg text-neural-text leading-relaxed">
                Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps and AI automation systems that address specific operational needs from intelligent document processing and workflow orchestration to predictive dashboards and conversational analytics. Each solution is engineered with clean, efficient code and minimalist design, delivering enterprise-grade performance, scalability, and measurable ROI without the burden of complex infrastructure or excessive cost.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-lg xl:text-2xl font-bold text-neural-text mb-4">
                Intelligent UI/UX Enhancement
              </h3>
              <p className="text-base xl:text-lg text-neural-text leading-relaxed">
                Elevate your digital experience with AI-powered interfaces that adapt to user behavior. Our award-winning team blends elegant design with practical AI from personalized journeys to predictive features for applications that look great and grow smarter over time.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-lg xl:text-xl font-bold">
            <span className="text-neural-green">Looking to build a customised AI product? </span>
            <span className="text-neural-orange">Reach out to us and get started!</span>
          </div>
        </div>
      </div>

      {/* Right Section - Dark Green Background */}
      <div className="w-2/5 bg-neural-green flex items-center justify-center p-8">
        <div className="flex items-center justify-center">
          <Image
            src="/hero-image.svg"
            alt="Abstract geometric pattern"
            width={726}
            height={726}
            className="max-w-full max-h-full object-contain translate-x-1/4"
          />
        </div>
      </div>
    </div>
  );
}