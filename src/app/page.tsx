import Hero from "@/components/hero";
import Helium from "@/components/helium";
import HeliumMobile from "@/components/helium-mobile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuralArc - AI Enterprise Solutions | Custom AI Development, Micro-Apps & Helium AI Platform",
  description: "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps, AI automation systems, and the Helium AI enterprise platform with Adaptive Intelligence Model (AIM) for unified business operations. Discover intelligent document processing, workflow orchestration, and predictive dashboards.",
  keywords: [
    "AI development",
    "enterprise AI solutions",
    "custom AI applications",
    "business automation",
    "micro-apps development",
    "Helium AI platform",
    "Adaptive Intelligence Model",
    "AIM technology",
    "intelligent document processing",
    "workflow orchestration",
    "predictive dashboards",
    "conversational analytics",
    "AI-powered interfaces",
    "intelligent UI/UX",
    "enterprise AI operating system",
    "on-premise AI solutions",
    "data-sovereign architecture",
    "multi-agent orchestration",
    "business operations automation",
    "real-time decision making",
    "AI workflow automation",
    "enterprise intelligence platform",
    "secure AI deployment",
    "business process automation",
    "AI micro-applications",
    "intelligent business solutions",
    "AI consulting services",
    "machine learning solutions",
    "business intelligence automation",
    "enterprise-grade AI",
    "AI automation systems",
    "bespoke AI development",
    "customized AI products",
    "AI interface design",
    "adaptive intelligence platform",
    "enterprise AI integration",
    "AI-powered business solutions"
  ],
  openGraph: {
    title: "NeuralArc - AI Enterprise Solutions | Custom AI Development, Micro-Apps & Helium AI Platform",
    description: "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps, AI automation systems, and the Helium AI enterprise platform with Adaptive Intelligence Model (AIM) for unified business operations.",
    url: "https://neuralarc.com",
    siteName: "NeuralArc",
    images: [
      {
        url: "/hero-image.svg",
        width: 1200,
        height: 630,
        alt: "NeuralArc AI Enterprise Solutions - Custom AI Development, Micro-Apps, and Helium AI Platform",
      },
      {
        url: "/helium.png",
        width: 1200,
        height: 630,
        alt: "Helium AI Enterprise Platform - Adaptive Intelligence Model Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralArc - AI Enterprise Solutions | Custom AI Development, Micro-Apps & Helium AI Platform",
    description: "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps, AI automation systems, and the Helium AI enterprise platform.",
    images: ["/hero-image.svg", "/helium.png"],
  },
  alternates: {
    canonical: "https://neuralarc.com",
  },
};

export default function Home() {
  return (
    <>
      {/* Enhanced Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NeuralArc",
            "url": "https://neuralarc.com",
            "description": "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps, AI automation systems, and the Helium AI enterprise platform with Adaptive Intelligence Model (AIM) for unified business operations.",
            "slogan": "Where Intelligence Meets Enterprise Elegance",
            "tagline": "The Arc Beyond Networks - Where neural intelligence powers the next era of insight",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://neuralarc.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "NeuralArc",
              "logo": {
                "@type": "ImageObject",
                "url": "https://neuralarc.com/neuralarc-logo.svg"
              },
              "image": [
                "https://neuralarc.com/hero-image.svg",
                "https://neuralarc.com/helium.png"
              ]
            },
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Helium AI Platform",
              "description": "Enterprise-grade, adaptive intelligence platform engineered to unify, secure, and accelerate business operations. Built on Neural Arc's proprietary Adaptive Intelligence Model (AIM), Helium continuously learns, validates, and contextualises data from an organisation's knowledge base.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web-based, On-premise",
              "url": "https://he2.ai",
              "screenshot": "https://neuralarc.com/helium.png",
              "featureList": [
                "Proprietary Adaptive Intelligence Model (AIM) for contextual accuracy and validation",
                "On-premise and data-sovereign architecture ensuring enterprise-grade security",
                "Multi-agent orchestration for research, automation, and decision support",
                "Designed for sales, operations, strategy, finance, HR, and compliance intelligence"
              ],
              "offers": {
                "@type": "Offer",
                "price": "Contact for pricing",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            }
          })
        }}
      />
      
      {/* Service-Specific Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom AI Development Services",
            "description": "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps and AI automation systems that address specific operational needs from intelligent document processing and workflow orchestration to predictive dashboards and conversational analytics.",
            "provider": {
              "@type": "Organization",
              "name": "NeuralArc",
              "url": "https://neuralarc.com"
            },
            "serviceType": "AI Development",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom AI Development (Micro-Apps & AI Automation)",
                    "description": "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps and AI automation systems that address specific operational needs from intelligent document processing and workflow orchestration to predictive dashboards and conversational analytics."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Intelligent UI/UX Enhancement",
                    "description": "Elevate your digital experience with AI-powered interfaces that adapt to user behavior. Our award-winning team blends elegant design with practical AI from personalized journeys to predictive features for applications that look great and grow smarter over time."
                  }
                }
              ]
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://neuralarc.com",
              "serviceName": "NeuralArc Contact"
            }
          })
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Hero />
        {/* Desktop version - visible on lg and above (1024px+) */}
        <div className="hidden lg:block flex-1">
          <Helium />
        </div>
        {/* Mobile version - visible only on mobile and small tablets (below lg) */}
        <div className="block lg:hidden flex-1">
          <HeliumMobile />
        </div>
      </div>
    </>
  );
}
