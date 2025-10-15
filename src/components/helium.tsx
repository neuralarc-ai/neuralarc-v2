import Image from "next/image";

export default function Helium() {
  return (
    <div className="min-h-[956px] flex relative">
      {/* Background Sections */}
      {/* Left Section - Orange Background (40%) */}
      <div className="w-2/5 bg-neural-orange"></div>
      
      {/* Right Section - Light Green Background (60%) */}
      <div className="w-3/5 bg-neural-light-green"></div>

      {/* Combined Content Div - Positioned over the background sections */}
      <div className="absolute inset-0 flex items-center justify-center px-4 lg:px-8 xl:px-12 py-4 xl:py-12">
        <div className="w-full max-w-full flex">
          {/* Image Section (50% of combined div) */}
          <div className="w-1/2 flex items-center justify-center pr-4 lg:pr-8">
            <div className="shadow-lg shadow-black/25 border-3 border-helium-light-green rounded-xl overflow-hidden max-w-full max-h-[85vh]">
              <Image
                src="/helium.png"
                alt="Helium AI Application Interface"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text Section (50% of combined div) */}
          <div className="w-1/2 flex flex-col justify-center pl-4 lg:pl-8">
            <div className="max-w-3xl">
              {/* Main Title */}
              <h1 className="text-4xl xl:text-6xl font-bold text-neural-green mb-6 leading-tight tracking-tighter">
                Helium AI
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl xl:text-3xl text-neural-green mb-8">
                Where Human Insight Meets Adaptive Intelligence.
              </h2>

              {/* Description */}
              <div className="text-base xl:text-lg text-neural-text mb-8 space-y-4 tracking-tight">
                <p>
                  <span className="font-bold">Helium AI</span> is an enterprise-grade, adaptive intelligence platform engineered to unify, secure, and accelerate business operations. Built on Neural Arc’s proprietary <span className="font-bold">Adaptive Intelligence Model (AIM)</span> Helium continuously learns, validates, and contextualises data from an organisation’s knowledge base, ensuring every insight is accurate, relevant, and actionable. It functions as the central intelligence layer for enterprises, orchestrating workflows, automating research, and enabling real-time decision-making across departments.
                </p>
                <p>
                Unlike traditional AI tools that operate in silos, Helium is designed as a secure, on-premise AI operating system that integrates seamlessly with existing enterprise tools. It transforms fragmented business functions into a synchronised ecosystem where data, intelligence, and human oversight coexist to drive performance, productivity, and cost efficiency. 
                </p>
              </div>

              {/* Call to Action */}
              <div className="mb-8">
                <a 
                  href="https://he2.ai" 
                  target="_blank"
                  className="text-base xl:text-lg font-bold text-neural-orange underline hover:text-orange-600 transition-colors"
                >
                  Activate Helium Today
                </a>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  "Proprietary Adaptive Intelligence Model (AIM) for contextual accuracy and validation",
                  "On-premise and data-sovereign architecture ensuring enterprise-grade security",
                  "Multi-agent orchestration for research, automation, and decision support",
                  "Designed for sales, operations, strategy, finance, HR, and compliance intelligence"
                ].map((feature, index) => (
                  <div key={index} className="rounded-lg p-4 border border-[#C7C7C7]">
                    <p className="text-sm xl:text-base text-neural-green">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
