"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeliumMobile() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="w-full">
      {/* Orange Section - Title and Subtitle */}
      <div className="w-full bg-neural-orange px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div 
          className="w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Image Section - Top */}
          <motion.div 
            className="w-full flex items-center justify-center mb-8 sm:mb-12"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="shadow-lg shadow-black/25 border-3 border-white/20 rounded-xl overflow-hidden max-w-full max-h-[40vh] sm:max-h-[50vh]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/helium.png"
                alt="Helium AI Application Interface"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Title and Subtitle Section */}
          <motion.div 
            className="w-full flex flex-col justify-center"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Title */}
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tighter"
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Helium AI
              </motion.h1>

              {/* Subtitle */}
              <motion.h2 
                className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8"
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Where Human Insight Meets Adaptive Intelligence.
              </motion.h2>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Light Green Section - Content */}
      <div className="w-full bg-neural-light-green px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div 
          className="w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="w-full flex flex-col justify-center"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Description */}
              <motion.div 
                className="text-sm sm:text-base lg:text-lg text-neural-text mb-6 sm:mb-8 space-y-4 tracking-tight"
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p>
                  <span className="font-bold">Helium AI</span> is an enterprise-grade, adaptive intelligence platform engineered to unify, secure, and accelerate business operations. Built on Neural Arc&apos;s proprietary <span className="font-bold">Adaptive Intelligence Model (AIM)</span> Helium continuously learns, validates, and contextualises data from an organisation&apos;s knowledge base, ensuring every insight is accurate, relevant, and actionable. It functions as the central intelligence layer for enterprises, orchestrating workflows, automating research, and enabling real-time decision-making across departments.
                </p>
                <p>
                Unlike traditional AI tools that operate in silos, Helium is designed as a secure, on-premise AI operating system that integrates seamlessly with existing enterprise tools. It transforms fragmented business functions into a synchronised ecosystem where data, intelligence, and human oversight coexist to drive performance, productivity, and cost efficiency. 
                </p>
              </motion.div>

              {/* Call to Action */}
              <motion.div 
                className="mb-6 sm:mb-8"
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.a 
                  href="https://he2.ai" 
                  target="_blank"
                  className="text-base sm:text-lg font-bold text-neural-orange underline hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Activate Helium Today
                </motion.a>
              </motion.div>

              {/* Feature Cards */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                variants={containerVariants}
              >
                {[
                  "Proprietary Adaptive Intelligence Model (AIM) for contextual accuracy and validation",
                  "On-premise and data-sovereign architecture ensuring enterprise-grade security",
                  "Multi-agent orchestration for research, automation, and decision support",
                  "Designed for sales, operations, strategy, finance, HR, and compliance intelligence"
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="rounded-lg p-4 sm:p-6 border border-[#C7C7C7] bg-transparent"
                    variants={cardVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.02, 
                      borderColor: "#4ade80",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                  >
                    <p className="text-sm sm:text-base text-neural-green">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
