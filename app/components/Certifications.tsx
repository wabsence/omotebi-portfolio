'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Shield } from 'lucide-react'

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const certifications = [
    {
      name: 'ISO/IEC 27001',
      subtitle: 'Information Security Management',
      code: 'ISLI1146020-2024-02',
      issuer: 'ISLI / BSI',
      year: '2024',
      icon: Shield,
      color: 'from-primary-500 to-primary-700',
      glow: 'shadow-primary-500/20',
      description: 'Internationally recognised standard for information security management systems (ISMS). Demonstrates ability to manage security controls, risk assessments, and compliance frameworks.',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      subtitle: 'Foundational Cloud Expertise',
      code: 'CLF-C02',
      issuer: 'Amazon Web Services',
      year: '2024',
      icon: Award,
      color: 'from-orange-500 to-orange-700',
      glow: 'shadow-orange-500/20',
      description: 'Validates foundational, high-level understanding of AWS Cloud, services, and terminology. Foundation for deeper AWS certification pathways.',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="certifications" className="section-padding bg-slate-900/40">
      <div className="container-custom">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={container}>

          <motion.div variants={item} className="mb-14">
            <p className="text-primary-400 font-mono text-sm mb-2">04 — certifications</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Certifications</h2>
          </motion.div>

          {/* Two large featured cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {certifications.map((cert) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.name}
                  variants={item}
                  whileHover={{ y: -6 }}
                  className={`relative glass rounded-3xl p-8 overflow-hidden hover:bg-white/10 transition-all duration-300 shadow-2xl ${cert.glow}`}
                >
                  {/* Background gradient */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${cert.color} opacity-10 rounded-full blur-3xl`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${cert.color} shadow-xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="px-3 py-1 glass text-primary-400 rounded-full text-sm font-mono">{cert.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1">{cert.name}</h3>
                    <p className="text-primary-400 font-medium mb-4">{cert.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{cert.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Credential ID:</span>
                        <span className="text-gray-300 font-mono text-xs">{cert.code}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Issued by:</span>
                        <span className="text-gray-300 font-medium">{cert.issuer}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-primary-400 text-sm">
                      <Award className="w-4 h-4" />
                      <span>Verified Credential</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Compliance badges */}
          <motion.div variants={item} className="glass rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Compliance Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {['ISO/IEC 27001', 'PCI DSS', 'NIST', 'GDPR', 'SOC 2'].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 bg-primary-500/15 border border-primary-500/30 text-primary-300 rounded-xl text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
