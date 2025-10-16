// Enhanced SEO utility functions for NeuralArc
export const seoConfig = {
  siteName: 'NeuralArc',
  siteUrl: 'https://neuralarc.com',
  defaultTitle: 'NeuralArc - Where Intelligence Meets Enterprise Elegance | Custom AI Development & Helium AI Platform',
  defaultDescription: 'Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps, AI automation systems, and the Helium AI enterprise platform with Adaptive Intelligence Model (AIM) for unified business operations.',
  slogan: 'Where Intelligence Meets Enterprise Elegance',
  tagline: 'The Arc Beyond Networks - Where neural intelligence powers the next era of insight',
  defaultKeywords: [
    'AI development',
    'artificial intelligence',
    'enterprise AI solutions',
    'custom AI applications',
    'business automation',
    'micro-apps development',
    'AI consulting',
    'machine learning',
    'intelligent automation',
    'business intelligence',
    'Helium AI platform',
    'Adaptive Intelligence Model',
    'AIM technology',
    'enterprise-grade AI',
    'on-premise AI solutions',
    'data-sovereign architecture',
    'multi-agent orchestration',
    'intelligent document processing',
    'workflow orchestration',
    'predictive dashboards',
    'conversational analytics',
    'AI-powered interfaces',
    'intelligent UI/UX',
    'enterprise AI operating system',
    'business operations automation',
    'real-time decision making',
    'AI workflow automation',
    'enterprise intelligence platform',
    'secure AI deployment',
    'business process automation',
    'AI micro-applications',
    'intelligent business solutions'
  ],
  social: {
    twitter: '@neuralarc',
    linkedin: 'https://linkedin.com/company/neuralarc',
    github: 'https://github.com/neuralarc'
  },
  services: {
    customAI: {
      name: 'Custom AI Development (Micro-Apps & AI Automation)',
      description: 'Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps and AI automation systems that address specific operational needs from intelligent document processing and workflow orchestration to predictive dashboards and conversational analytics.',
      keywords: ['custom AI development', 'micro-apps', 'AI automation', 'intelligent document processing', 'workflow orchestration', 'predictive dashboards', 'conversational analytics']
    },
    intelligentUI: {
      name: 'Intelligent UI/UX Enhancement',
      description: 'Elevate your digital experience with AI-powered interfaces that adapt to user behavior. Our award-winning team blends elegant design with practical AI from personalized journeys to predictive features for applications that look great and grow smarter over time.',
      keywords: ['AI-powered interfaces', 'intelligent UI/UX', 'adaptive interfaces', 'personalized journeys', 'predictive features']
    },
    heliumAI: {
      name: 'Helium AI Platform',
      description: 'Enterprise-grade, adaptive intelligence platform engineered to unify, secure, and accelerate business operations. Built on Neural Arc\'s proprietary Adaptive Intelligence Model (AIM), Helium continuously learns, validates, and contextualises data from an organisation\'s knowledge base.',
      keywords: ['Helium AI', 'Adaptive Intelligence Model', 'AIM', 'enterprise AI platform', 'on-premise AI', 'data-sovereign architecture', 'multi-agent orchestration'],
      features: [
        'Proprietary Adaptive Intelligence Model (AIM) for contextual accuracy and validation',
        'On-premise and data-sovereign architecture ensuring enterprise-grade security',
        'Multi-agent orchestration for research, automation, and decision support',
        'Designed for sales, operations, strategy, finance, HR, and compliance intelligence'
      ]
    }
  }
};

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image = '/hero-image.svg',
  url = '',
  type = 'website'
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}) {
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const fullDescription = description || seoConfig.defaultDescription;
  const fullKeywords = [...seoConfig.defaultKeywords, ...keywords];
  const fullUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;
  const fullImage = image.startsWith('http') ? image : `${seoConfig.siteUrl}${image}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      site: seoConfig.social.twitter,
      creator: seoConfig.social.twitter,
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export function generateStructuredData(type: 'Organization' | 'WebSite' | 'Service' | 'SoftwareApplication', data: Record<string, unknown>) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/neuralarc-logo.svg`,
    image: [
      `${seoConfig.siteUrl}/hero-image.svg`,
      `${seoConfig.siteUrl}/helium.png`
    ],
    sameAs: [
      `https://twitter.com/${seoConfig.social.twitter.replace('@', '')}`,
      seoConfig.social.linkedin,
      seoConfig.social.github
    ],
    ...data
  };

  return baseData;
}

export function generateServiceStructuredData(serviceType: 'customAI' | 'intelligentUI' | 'heliumAI') {
  const service = seoConfig.services[serviceType];
  
  if (serviceType === 'heliumAI') {
    const heliumService = service as typeof seoConfig.services.heliumAI;
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: heliumService.name,
      description: heliumService.description,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web-based, On-premise',
      url: 'https://he2.ai',
      screenshot: `${seoConfig.siteUrl}/helium.png`,
      featureList: heliumService.features,
      offers: {
        '@type': 'Offer',
        price: 'Contact for pricing',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      provider: {
        '@type': 'Organization',
        name: seoConfig.siteName,
        url: seoConfig.siteUrl
      }
    };
  }
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.siteUrl
    },
    serviceType: 'AI Development',
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: seoConfig.siteUrl,
      serviceName: 'NeuralArc Contact'
    }
  };
}

export function generateHeliumAIStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Helium AI Platform',
    description: 'Enterprise-grade, adaptive intelligence platform engineered to unify, secure, and accelerate business operations. Built on Neural Arc\'s proprietary Adaptive Intelligence Model (AIM), Helium continuously learns, validates, and contextualises data from an organisation\'s knowledge base.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based, On-premise',
    url: 'https://he2.ai',
    screenshot: `${seoConfig.siteUrl}/helium.png`,
    featureList: seoConfig.services.heliumAI.features,
    offers: {
      '@type': 'Offer',
      price: 'Contact for pricing',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    provider: {
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.siteUrl
    },
    keywords: seoConfig.services.heliumAI.keywords.join(', ')
  };
}
