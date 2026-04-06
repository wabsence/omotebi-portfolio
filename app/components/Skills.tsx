'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeGroup, setActiveGroup] = useState('all')

  const skillGroups = [
    {
      id: 'cloud',
      label: 'Cloud Platforms',
      color: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      skills: ['AWS', 'GCP', 'Azure', 'AWS EKS', 'AWS ECS', 'AWS Lambda', 'AWS CloudFormation', 'AWS CodePipeline'],
    },
    {
      id: 'cicd',
      label: 'CI/CD & GitOps',
      color: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      skills: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD', 'Bitbucket', 'TeamCity', 'GoCD', 'CircleCI'],
    },
    {
      id: 'iac',
      label: 'IaC & Automation',
      color: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      skills: ['Terraform', 'AWS CloudFormation', 'OpenTofu', 'Terragrunt', 'Ansible', 'Puppet', 'Chef', 'SaltStack'],
    },
    {
      id: 'containers',
      label: 'Containers & Orchestration',
      color: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
      skills: ['Kubernetes', 'Docker', 'Helm', 'K3s', 'EKS', 'Kubectl', 'K8s', 'ECS'],
    },
    {
      id: 'security',
      label: 'Security & Compliance',
      color: 'bg-red-500/20 text-red-300 border-red-500/30',
      skills: ['SAST (SonarQube, Snyk)', 'DAST (Burp Suite, OWASP ZAP)', 'AWS IAM', 'AWS WAF', 'AWS Shield', 'AWS GuardDuty', 'HashiCorp Vault', 'Falco', 'Trivy', 'Kubesec', 'ISO 27001', 'PCI DSS', 'NIST', 'GDPR', 'SOC 2'],
    },
    {
      id: 'observability',
      label: 'Monitoring & Observability',
      color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic', 'AWS CloudWatch', 'Splunk', 'Dynatrace', 'Nagios'],
    },
    {
      id: 'scripting',
      label: 'Scripting & Programming',
      color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      skills: ['Python', 'Golang', 'Bash', 'PowerShell', 'YAML', 'Groovy'],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const displayed = activeGroup === 'all' ? skillGroups : skillGroups.filter(g => g.id === activeGroup)

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={container}>

          <motion.div variants={item} className="mb-14">
            <p className="text-primary-400 font-mono text-sm mb-2">03 — skills</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Skills & Technologies</h2>
          </motion.div>

          {/* Group filter */}
          <motion.div variants={item} className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveGroup('all')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                activeGroup === 'all'
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'glass glass-hover text-gray-400 border-white/10'
              }`}
            >
              All
            </button>
            {skillGroups.map(g => (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                  activeGroup === g.id
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'glass glass-hover text-gray-400 border-white/10'
                }`}
              >
                {g.label}
              </button>
            ))}
          </motion.div>

          {/* Skill groups */}
          <motion.div variants={container} className="space-y-6">
            {displayed.map((group) => (
              <motion.div
                key={group.id}
                variants={item}
                layout
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-lg text-sm border transition-all cursor-default ${group.color}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
