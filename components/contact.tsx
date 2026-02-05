'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const quickContacts = [
    {
      label: 'Email',
      value: 'hello@freshshrooms.local',
      icon: Mail,
      href: 'mailto:hello@freshshrooms.local'
    },
    {
      label: 'Phone',
      value: '+1 (555) 123-4567',
      icon: Phone,
      href: 'tel:+15551234567'
    },
    {
      label: 'WhatsApp',
      value: '+1 (555) 123-4567',
      icon: MessageCircle,
      href: 'https://wa.me/15551234567?text=Hi%20FreshShrooms'
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Have questions about our mushrooms? Ready to place an order? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Contact */}
          {quickContacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{contact.label}</h3>
                <p className="text-foreground/70 group-hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-background p-8 md:p-12 rounded-xl border border-border">
          {submitted && (
            <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-primary font-semibold">✓ Thank you for reaching out! We'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-secondary/30 border-border text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-secondary/30 border-border text-foreground"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-semibold">Phone (Optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="bg-secondary/30 border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-semibold">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your inquiry..."
                required
                rows={5}
                className="bg-secondary/30 border-border text-foreground resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
