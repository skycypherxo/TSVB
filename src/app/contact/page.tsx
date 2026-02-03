'use client'

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['Ambalapady, Udupi – 576103', 'Karnataka, India'],
      color: 'text-blue-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 7795557952'],
      color: 'text-green-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['tsvbtrust@gmail.com'],
      color: 'text-purple-600'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
      color: 'text-orange-600'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Donation Information',
    'Volunteer Opportunities',
    'Event Participation',
    'Partnership Proposal',
    'Media Inquiry',
    'Other'
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-800 text-white py-20 overflow-hidden">
        <CulturalPattern className="text-golden-400" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-golden-200 bg-clip-text text-transparent">
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl text-golden-100 leading-relaxed">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-maroon-900 dark:text-golden-400 mb-6">
                  Send us a Message
                </h2>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-maroon-900 dark:text-white mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-maroon-900 dark:text-white mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-maroon-900 dark:text-white mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-maroon-900 dark:text-white mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-maroon-900 dark:text-white mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500"
                      placeholder="Please describe your inquiry in detail..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-maroon-700 dark:bg-golden-600 hover:bg-maroon-800 dark:hover:bg-golden-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.form.submit')}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-maroon-900 dark:text-golden-400 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    We're here to help and answer any questions you might have. 
                    We look forward to hearing from you and will respond as soon as possible.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className={`${info.color} mb-4`}>
                        {info.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-maroon-900 dark:text-white mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 dark:bg-gray-800 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">
                      Interactive map will be displayed here
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                      Ambalapady, Udupi – 576103, Karnataka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Quick answers to common questions about our trust and services
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'How can I contribute to the trust?',
                  answer: 'You can contribute through donations, volunteering your time, or participating in our events. Visit our donations page for more information on financial contributions.'
                },
                {
                  question: 'What programs does the trust support?',
                  answer: 'We support education, cultural preservation, community service, healthcare initiatives, and emergency relief programs for our community.'
                },
                {
                  question: 'How can I volunteer with the trust?',
                  answer: 'We welcome volunteers for various activities. Contact us through this form or call us directly to discuss volunteer opportunities that match your interests and skills.'
                },
                {
                  question: 'Are donations tax-deductible?',
                  answer: 'Yes, donations to our registered trust are eligible for tax deductions under Section 80G of the Income Tax Act. We provide proper receipts for all donations.'
                },
                {
                  question: 'How can I stay updated with trust activities?',
                  answer: 'Subscribe to our newsletter, follow our social media channels, or visit our website regularly for updates on events, programs, and achievements.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-maroon-900 dark:text-golden-400 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;