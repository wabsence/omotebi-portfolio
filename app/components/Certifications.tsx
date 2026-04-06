'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Shield, Cloud, Code, Container, Terminal } from 'lucide-react'

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const certifications = [
    {
      name: 'ISO/IEC 27001',
      code: 'ISLI1146020-2024-02',
      issuer: 'ISLI / BSI',
      icon: Shield,
      color: 'from-primary-500 to-primary-700',
    },
    {
      name: 'AWS Certified Developer Associate',
      code: 'DVA-C02',
      issuer: 'Amazon Web Services',
      icon: Cloud,
      color: 'from-orange-500 to-orange-700',
    },
    {
      name: 'Certified Kubernetes Administrator',
      code: 'CKA',
      issuer: 'Linux Foundation',
      icon: Container,
      color: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Certified Kubernetes Application Developer',
      code: 'CKAD',
      issuer: 'Linux Foundation',
      icon: Code,
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Terraform Associate',
      code: '003',
      issuer: 'HashiCorp',
      icon: Terminal,
      color: 'from-purple-500 to-purple-700',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      code: 'CLF-C02',
      issuer: 'Amazon Web Services',
      icon: Cloud,
      color: 'from-orange-400 to-orange-600',
    },
    {
      name: 'Linux Essentials',
      code: '010-160',
      issuer: 'Linux Professional Institute',
      icon: Award,
      color: 'from-yellow-500 to-yellow-700',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
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
            <p className="text-gray-400 mt-3">7 industry-recognised certifications across cloud, DevOps, and security</p>
          </motion.div>

          {/* Uniform grid — all same size */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {certifications.map((cert) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.code}
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${cert.color} opacity-10 rounded-full blur-2xl`} />
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} shadow-md inline-flex`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1 leading-snug">{cert.name}</h3>
                    <p className="text-primary-400 font-mono text-xs mb-1">{cert.code}</p>
                    <p className="text-gray-500 text-xs">{cert.issuer}</p>
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
