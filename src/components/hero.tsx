import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Light Background */}
      <div className="flex-1 bg-neural-white flex flex-col justify-center px-8 lg:px-16 xl:px-24">
        <div className="max-w-4xl">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/neuralarc-logo.svg"
              alt="NeuralArc Logo"
              width={60}
              height={60}
              className="w-fit h-10 xl:h-12"
            />            
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-neural-green mb-6 leading-tight">
            Where Intelligence Meets Enterprise Elegance
          </h1>

          {/* Sub-heading */}
          <div className="text-xl lg:text-2xl text-neural-text mb-8 space-y-2">
            <p>The Arc Beyond Networks</p>
            <p>Where neural intelligence powers the next era of insight.</p>
          </div>

          {/* Content Box */}
          <div className="border border-neural-orange bg-neural-white p-6 lg:p-8 mb-8">
            {/* Section 1 */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="text-lg lg:text-xl font-bold text-neural-text mb-4">
                Custom AI Development (Micro-Apps & AI Automation)
              </h3>
              <p className="text-base lg:text-lg text-neural-text leading-relaxed">
                Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps and AI automation systems that address specific operational needs from intelligent document processing and workflow orchestration to predictive dashboards and conversational analytics. Each solution is engineered with clean, efficient code and minimalist design, delivering enterprise-grade performance, scalability, and measurable ROI without the burden of complex infrastructure or excessive cost.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-neural-text mb-4">
                Intelligent UI/UX Enhancement
              </h3>
              <p className="text-base lg:text-lg text-neural-text leading-relaxed">
                Elevate your digital experience with AI-powered interfaces that adapt to user behavior. Our award-winning team blends elegant design with practical AI from personalized journeys to predictive features for applications that look great and grow smarter over time.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-lg lg:text-xl">
            <span className="text-neural-green">Looking to build a customised AI product? </span>
            <span className="text-neural-orange font-bold">Reach out to us and get started!</span>
          </div>
        </div>
      </div>

      {/* Right Section - Dark Green Background */}
      <div className="w-full lg:w-2/5 xl:w-2/5 bg-neural-green flex items-center justify-center p-8">
        <div className="flex items-center justify-center">
          <Image
            src="/hero-image.svg"
            alt="Abstract geometric pattern"
            width={400}
            height={500}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}