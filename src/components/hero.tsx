"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-full flex overflow-hidden">
      {/* Left Section - Light Background */}
      <motion.div 
        className="w-full lg:w-3/5 bg-neural-white flex flex-col justify-center px-4 lg:px-8 xl:px-16 py-4 xl:py-12"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo and Company Name */}
          <motion.div 
            className="flex items-center gap-3 mb-8 pb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/neuralarc-logo.svg"
              alt="NeuralArc Logo"
              width={60}
              height={60}
              className="w-fit h-10 xl:h-12"
            />            
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl xl:text-6xl font-semibold text-neural-green mb-6 leading-tight tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Where Intelligence Meets Enterprise Elegance
          </motion.h1>

          {/* Sub-heading */}
          <motion.div 
            className="text-xl xl:text-3xl text-neural-green mb-8 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-bold">The Arc Beyond Networks</p>
            <p>Where neural intelligence powers the next era of insight.</p>
          </motion.div>

          {/* Content Box */}
          <motion.div 
            className="border border-neural-orange rounded-xl xl:rounded-3xl p-6 lg:p-8 mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Section 1 */}
            <motion.div 
              className="mb-6 pb-6 border-b border-helium-green"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg xl:text-2xl font-bold text-neural-text mb-4">
                Custom AI Development (Micro-Apps & AI Automation)
              </h3>
              <p className="text-base xl:text-lg text-neural-text leading-relaxed">
                Transform business challenges into intelligent, automated solutions through custom AI development. We build bespoke micro-apps and AI automation systems that address specific operational needs from intelligent document processing and workflow orchestration to predictive dashboards and conversational analytics. Each solution is engineered with clean, efficient code and minimalist design, delivering enterprise-grade performance, scalability, and measurable ROI without the burden of complex infrastructure or excessive cost.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-lg xl:text-2xl font-bold text-neural-text mb-4">
                Intelligent UI/UX Enhancement
              </h3>
              <p className="text-base xl:text-lg text-neural-text leading-relaxed">
                Elevate your digital experience with AI-powered interfaces that adapt to user behavior. Our award-winning team blends elegant design with practical AI from personalized journeys to predictive features for applications that look great and grow smarter over time.
              </p>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-lg xl:text-xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-neural-green">Looking to build a customised AI product? </span>
            <motion.span 
              className="text-neural-orange"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Reach out to us and get started!
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section - Dark Green Background - Hidden on tablet and below */}
      <motion.div 
        className="hidden lg:flex w-2/5 bg-neural-green items-center justify-center p-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src="/hero-image.svg"
            alt="Abstract geometric pattern"
            width={726}
            height={726}
            className="max-w-full max-h-full object-contain translate-x-1/4"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}