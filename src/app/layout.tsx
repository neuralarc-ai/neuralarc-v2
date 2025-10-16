import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "NeuralArc - Where Intelligence Meets Enterprise Elegance | Custom AI Development & Helium AI Platform",
    template: "%s | NeuralArc"
  },
  description: "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps, AI automation systems, and the Helium AI enterprise platform with Adaptive Intelligence Model (AIM) for unified business operations.",
  keywords: [
    "AI development",
    "artificial intelligence",
    "enterprise AI solutions",
    "custom AI applications",
    "business automation",
    "micro-apps development",
    "AI consulting",
    "machine learning",
    "intelligent automation",
    "business intelligence",
    "Helium AI platform",
    "Adaptive Intelligence Model",
    "AIM technology",
    "enterprise-grade AI",
    "on-premise AI solutions",
    "data-sovereign architecture",
    "multi-agent orchestration",
    "intelligent document processing",
    "workflow orchestration",
    "predictive dashboards",
    "conversational analytics",
    "AI-powered interfaces",
    "intelligent UI/UX",
    "enterprise AI operating system",
    "business operations automation",
    "real-time decision making",
    "AI workflow automation",
    "enterprise intelligence platform",
    "secure AI deployment",
    "business process automation",
    "AI micro-applications",
    "intelligent business solutions"
  ],
  authors: [{ name: "NeuralArc Team" }],
  creator: "NeuralArc",
  publisher: "NeuralArc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://neuralarc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neuralarc.com",
    siteName: "NeuralArc",
    title: "NeuralArc - Where Intelligence Meets Enterprise Elegance | Custom AI Development & Helium AI Platform",
    description: "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps, AI automation systems, and the Helium AI enterprise platform with Adaptive Intelligence Model (AIM) for unified business operations.",
    images: [
      {
        url: "/hero-image.svg",
        width: 1200,
        height: 630,
        alt: "NeuralArc AI Enterprise Solutions - Custom AI Development, Micro-Apps, and Helium AI Platform",
        type: "image/svg+xml",
      },
      {
        url: "/helium.png",
        width: 1200,
        height: 630,
        alt: "Helium AI Enterprise Platform - Adaptive Intelligence Model Interface",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@neuralarc",
    creator: "@neuralarc",
    title: "NeuralArc - Where Intelligence Meets Enterprise Elegance | Custom AI Development & Helium AI Platform",
    description: "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps, AI automation systems, and the Helium AI enterprise platform.",
    images: ["/hero-image.svg", "/helium.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Business AI Solutions",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/neuralarc-logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/neuralarc-logo.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/neuralarc-logo.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NeuralArc",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NeuralArc",
    "description": "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps, AI automation systems, and the Helium AI enterprise platform with Adaptive Intelligence Model (AIM) for unified business operations.",
    "url": "https://neuralarc.com",
    "logo": "https://neuralarc.com/neuralarc-logo.svg",
    "image": [
      "https://neuralarc.com/hero-image.svg",
      "https://neuralarc.com/helium.png"
    ],
    "slogan": "Where Intelligence Meets Enterprise Elegance",
    "tagline": "The Arc Beyond Networks - Where neural intelligence powers the next era of insight",
    "sameAs": [
      "https://twitter.com/neuralarc",
      "https://linkedin.com/company/neuralarc",
      "https://github.com/neuralarc"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "Worldwide"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "foundingDate": "2024",
    "industry": "Artificial Intelligence",
    "numberOfEmployees": "1-10",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "geoRadius": "10000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Development",
            "description": "Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps and AI automation systems that address specific operational needs from intelligent document processing and workflow orchestration to predictive dashboards and conversational analytics.",
            "provider": {
              "@type": "Organization",
              "name": "NeuralArc"
            },
            "serviceType": "AI Development",
            "areaServed": "Worldwide",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://neuralarc.com"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intelligent UI/UX Enhancement",
            "description": "Elevate your digital experience with AI-powered interfaces that adapt to user behavior. Our award-winning team blends elegant design with practical AI from personalized journeys to predictive features for applications that look great and grow smarter over time.",
            "provider": {
              "@type": "Organization",
              "name": "NeuralArc"
            },
            "serviceType": "UI/UX Design",
            "areaServed": "Worldwide"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Helium AI Platform",
            "description": "Enterprise-grade, adaptive intelligence platform engineered to unify, secure, and accelerate business operations. Built on Neural Arc's proprietary Adaptive Intelligence Model (AIM), Helium continuously learns, validates, and contextualises data from an organisation's knowledge base.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web-based, On-premise",
            "offers": {
              "@type": "Offer",
              "price": "Contact for pricing",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "url": "https://he2.ai",
            "screenshot": "https://neuralarc.com/helium.png",
            "featureList": [
              "Proprietary Adaptive Intelligence Model (AIM) for contextual accuracy and validation",
              "On-premise and data-sovereign architecture ensuring enterprise-grade security",
              "Multi-agent orchestration for research, automation, and decision support",
              "Designed for sales, operations, strategy, finance, HR, and compliance intelligence"
            ]
          }
        }
      ]
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Business Automation",
      "Enterprise AI Solutions",
      "Micro-apps Development",
      "Adaptive Intelligence Model",
      "Intelligent Document Processing",
      "Workflow Orchestration",
      "Predictive Analytics",
      "Conversational AI",
      "AI-powered Interfaces",
      "Enterprise AI Operating System",
      "Data-sovereign Architecture",
      "Multi-agent Orchestration"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${manrope.variable} antialiased`}
      >
        <div className="max-w-[1920px] mx-auto">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
