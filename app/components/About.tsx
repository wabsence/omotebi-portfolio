'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Shield, Users, Globe } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { value: '6+', label: 'Years Experience', icon: '🚀' },
    { value: '100%', label: 'ISO 27001 Compliance', icon: '🔒' },
    { value: '4', label: 'Companies', icon: '🏢' },
    { value: '4.0', label: 'Masters GPA', icon: '🎓' },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={container}>

          {/* Header */}
          <motion.div variants={item} className="mb-14">
            <p className="text-primary-400 font-mono text-sm mb-2">01 — about</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — Text */}
            <motion.div variants={item} className="space-y-6">
              <div className="border-l-2 border-primary-500 pl-6">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  DevOps Engineer with <span className="text-primary-400 font-semibold">6+ years</span> building secure,
                  reliable, and scalable platforms across fintech, e-commerce, and public sector.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Expert in developing security maturity frameworks, conducting platform assessments of CI/CD pipelines
                  and cloud infrastructure, and performing threat modelling to identify systemic risks. Proven experience
                  embedding DevSecOps practices with SAST/DAST integration, implementing AWS IAM controls, and automating
                  compliance frameworks to achieve 100% ISO 27001 compliance.
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Experienced in stakeholder engagement, translating technical risks into business impact for leadership,
                driving security roadmaps, and fostering a secure-by-design culture across engineering teams.
              </p>

              {/* Education */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary-600/20">
                    <GraduationCap className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono">education</div>
                    <h4 className="text-white font-semibold">Master&apos;s in Computer Science</h4>
                  </div>
                </div>
                <p className="text-primary-400 text-sm">University of Bradford</p>
                <p className="text-gray-400 text-sm mt-1">Cybersecurity focus · GPA: 4.0</p>
              </div>

              {/* Focus areas */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: 'DevSecOps & Security' },
                  { icon: Globe, label: 'Cloud Infrastructure' },
                  { icon: Users, label: 'Team Leadership' },
                  { icon: GraduationCap, label: 'Compliance & Audit' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 glass rounded-lg px-3 py-2">
                    <Icon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Stats */}
            <motion.div variants={item} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={item}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
