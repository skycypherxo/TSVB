'use client'

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, CreditCard, Shield, Users, Award, CheckCircle } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

const DonationsPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    isPublic: false,
    donationType: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const donationTypes = [
    {
      id: 'general',
      title: 'General Fund',
      description: 'Support our overall mission and various community programs',
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 'education',
      title: 'Education Support',
      description: 'Help provide scholarships and educational resources',
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 'cultural',
      title: 'Cultural Preservation',
      description: 'Support cultural events and heritage conservation',
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'emergency',
      title: 'Emergency Relief',
      description: 'Assist in disaster relief and emergency support',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const suggestedAmounts = [500, 1000, 2500, 5000, 10000];

  const recentDonors = [
    { name: 'Anonymous Donor', amount: 10000, date: 'March 10, 2024' },
    { name: 'Rajesh Kumar', amount: 5000, date: 'March 8, 2024' },
    { name: 'Priya Sharma', amount: 2500, date: 'March 5, 2024' },
    { name: 'Anonymous Donor', amount: 7500, date: 'March 3, 2024' },
    { name: 'Suresh Ballal', amount: 15000, date: 'March 1, 2024' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      amount: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      isPublic: false,
      donationType: 'general'
    });
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-800 text-white py-20 overflow-hidden">
        <CulturalPattern className="text-golden-400" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-golden-200 bg-clip-text text-transparent">
              {t('donations.title')}
            </h1>
            <p className="text-xl md:text-2xl text-golden-100 leading-relaxed">
              {t('donations.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
           
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Thank you for your generous donation! We'll contact you soon with payment details.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <label className="block text-sm font-medium text-maroon-900 dark:text-white mb-3">
                      Donation Purpose
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {donationTypes.map((type) => (
                        <label
                          key={type.id}
                          className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.donationType === type.id
                              ? 'border-maroon-500 bg-maroon-50 dark:bg-maroon-900/20'
                              : 'border-gray-200 dark:border-gray-600 hover:border-maroon-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="donationType"
                            value={type.id}
                            checked={formData.donationType === type.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="text-maroon-700 dark:text-golden-400 mr-3">
                            {type.icon}
                          </div>
                          <div>
                            <div className="font-medium text-maroon-900 dark:text-white text-sm">
                              {type.title}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-medium text-maroon-900 dark:text-white mb-3">
                      {t('donations.amount')} (₹)
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                      {suggestedAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, amount: amount.toString() }))}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            formData.amount === amount.toString()
                              ? 'bg-maroon-700 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          ₹{amount.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      placeholder="Enter custom amount"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500"
                      required
                    />
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-maroon-900 dark:text-white mb-2">
                        {t('donations.name')}
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
                        {t('donations.email')}
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
                      {t('donations.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-maroon-900 dark:text-white mb-2">
                      {t('donations.address')}
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500"
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="isPublic"
                      checked={formData.isPublic}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-maroon-600 bg-gray-100 border-gray-300 rounded focus:ring-maroon-500"
                    />
                    <label className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      {t('donations.public')}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-maroon-700 dark:bg-golden-600 hover:bg-maroon-800 dark:hover:bg-golden-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    {t('donations.submit')}
                  </button>
                </form>
              </div>

              {/* Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
                    Why Your Donation Matters
                  </h3>
                  <div className="space-y-4">
                    {donationTypes.map((type) => (
                      <div key={type.id} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="text-maroon-700 dark:text-golden-400 mt-1">
                          {type.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-maroon-900 dark:text-white mb-1">
                            {type.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
                    Recent Donors
                  </h3>
                  <div className="space-y-3">
                    {recentDonors.map((donor, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                          <div className="font-medium text-maroon-900 dark:text-white">
                            {donor.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {donor.date}
                          </div>
                        </div>
                        <div className="font-semibold text-golden-600">
                          ₹{donor.amount.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-maroon-900 dark:bg-maroon-950 text-white relative overflow-hidden">
        <CulturalPattern className="text-golden-400" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See how your contributions are making a difference in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                ₹25L+
              </div>
              <p className="text-lg text-gray-300">Total Donations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                500+
              </div>
              <p className="text-lg text-gray-300">Families Helped</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                100+
              </div>
              <p className="text-lg text-gray-300">Students Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                50+
              </div>
              <p className="text-lg text-gray-300">Programs Funded</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationsPage;