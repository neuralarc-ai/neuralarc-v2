"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Helium() {
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
    <div className="min-h-[956px] flex relative">
      {/* Background Sections */}
      {/* Left Section - Orange Background (40%) */}
      <motion.div 
        className="w-2/5 bg-neural-orange"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      ></motion.div>
      
      {/* Right Section - Light Green Background (60%) */}
      <motion.div 
        className="w-3/5 bg-neural-light-green"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      ></motion.div>

      {/* Combined Content Div - Positioned over the background sections */}
      <div className="absolute inset-0 flex items-center justify-center px-4 lg:px-8 xl:px-12 py-4 xl:py-12">
        <motion.div 
          className="w-full max-w-full flex"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Image Section (50% of combined div) */}
          <motion.div 
            className="w-1/2 flex items-center justify-center pr-4 lg:pr-8"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="shadow-lg shadow-black/25 border-3 border-helium-light-green rounded-xl overflow-hidden max-w-full max-h-[85vh]"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/helium.png"
                alt="Helium AI Enterprise Platform - Adaptive Intelligence Model interface showing business automation and AI orchestration dashboard"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Text Section (50% of combined div) */}
          <motion.div 
            className="w-1/2 flex flex-col justify-center pl-4 lg:pl-8"
            variants={itemVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="max-w-3xl">
              {/* Main Title */}
              <motion.h1 
                className="text-4xl xl:text-6xl font-bold text-neural-green mb-6 leading-tight tracking-tighter"
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Helium AI
              </motion.h1>

              {/* Subtitle */}
              <motion.h2 
                className="text-xl xl:text-3xl text-neural-green mb-8"
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Where Human Insight Meets Adaptive Intelligence.
              </motion.h2>

              {/* Description */}
              <motion.div 
                className="text-base xl:text-lg text-neural-text mb-8 space-y-4 tracking-tight"
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
                className="mb-8"
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.a 
                  href="https://he2.ai" 
                  target="_blank"
                  className="text-base xl:text-lg font-bold text-neural-orange underline hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Activate Helium Today
                </motion.a>
              </motion.div>

              {/* Feature Cards */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-4"
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
                    className="rounded-lg p-4 border border-[#C7C7C7]"
                    variants={cardVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.02, 
                      borderColor: "#4ade80",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                  >
                    <p className="text-sm xl:text-base text-neural-green">
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
