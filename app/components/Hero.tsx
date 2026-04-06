'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Mail, Phone, MapPin, Shield, ChevronDown, Download } from 'lucide-react'

const Hero = () => {
  const roles = ['DevOps Engineer', 'Platform Engineer', 'DevSecOps Specialist']
  const rolesLength = roles.length
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(i => (i + 1) % rolesLength)
    }, 2500)
    return () => clearInterval(interval)
  }, [rolesLength])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20 pb-10">
      {/* Decorative shield background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <Shield className="w-[700px] h-[700px] text-primary-400" strokeWidth={0.3} />
      </div>

      <div className="container-custom section-padding relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass text-primary-400 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            Open to new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="text-white">Omotebi</span>
            <br />
            <span className="text-gradient">Egbowon</span>
          </motion.h1>

          <div className="h-10 mb-6 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="text-xl md:text-2xl text-primary-400 font-semibold"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            6+ years building secure, reliable, and scalable platforms across fintech, e-commerce, and public sector.
            Expert in DevSecOps, ISO 27001 compliance, and cloud-native infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-gray-400"
          >
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary-400" />Manchester, UK</span>
            <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-primary-400" />+44 7938 685016</span>
            <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-primary-400" />omotebi321@gmail.com</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="px-7 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-primary-500/20"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollTo('#experience')}
              className="px-7 py-3 glass glass-hover text-white rounded-xl font-medium"
            >
              View Experience
            </button>
            <a
              href="/assets/Omotebi-Egbowon-CV.pdf"
              download
              className="flex items-center gap-2 px-7 py-3 border border-primary-500/40 hover:border-primary-400 text-primary-400 rounded-xl font-medium transition-all hover:bg-primary-500/10"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-3"
          >
            <a
              href="https://linkedin.com/in/omotebi-egbowon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass glass-hover rounded-xl transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-primary-400" />
            </a>
            <a
              href="mailto:omotebi321@gmail.com"
              className="p-3 glass glass-hover rounded-xl transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5 text-primary-400" />
            </a>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          onClick={() => scrollTo('#about')}
          className="mt-16 text-gray-600 hover:text-primary-400 transition-colors mx-auto block"
        >
          <ChevronDown className="w-6 h-6 mx-auto" />
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
