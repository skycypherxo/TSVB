'use client'

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Download, Calendar, FileText, Send } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

const NewsletterPage: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const newsletters = [
    {
      title: 'Monthly Newsletter - March 2024',
      date: 'March 1, 2024',
      description: 'Updates on recent events, upcoming programs, and community achievements.',
      downloadUrl: '#',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Annual Report 2023',
      date: 'February 15, 2024',
      description: 'Comprehensive overview of our achievements and activities throughout 2023.',
      downloadUrl: '#',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Cultural Heritage Special Edition',
      date: 'January 20, 2024',
      description: 'Exploring the rich cultural heritage of the Ballal family and community traditions.',
      downloadUrl: '#',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Educational Initiative Newsletter',
      date: 'December 10, 2023',
      description: 'Highlights of our educational programs and scholarship opportunities.',
      downloadUrl: '#',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Community Service Update',
      date: 'November 25, 2023',
      description: 'Recent community service projects and their impact on local communities.',
      downloadUrl: '#',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Festival Celebrations 2023',
      date: 'October 15, 2023',
      description: 'Recap of cultural festivals and celebrations organized by the trust.',
      downloadUrl: '#',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-800 text-white py-20 overflow-hidden">
        <CulturalPattern className="text-golden-400" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-golden-200 bg-clip-text text-transparent">
              {t('newsletter.title')}
            </h1>
            <p className="text-xl md:text-2xl text-golden-100 leading-relaxed">
              Stay updated with our latest news, events, and community initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-maroon-700 dark:bg-golden-600 rounded-full p-4">
                  <Mail className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
                {t('newsletter.subscribe')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('newsletter.subscribe.description')}
              </p>
              
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('newsletter.email.placeholder')}
                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500 dark:focus:ring-golden-400"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-maroon-700 dark:bg-golden-600 hover:bg-maroon-800 dark:hover:bg-golden-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t('newsletter.subscribe.button')}
                  </button>
                </div>
              </form>
              
              {isSubscribed && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                  Thank you for subscribing! You'll receive updates about our latest activities.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section className="py-20 bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
              {t('newsletter.archive')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse through our past newsletters and stay informed about our journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletters.map((newsletter, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={newsletter.image}
                    alt={newsletter.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-golden-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {newsletter.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-maroon-900 dark:text-white mb-2">
                    {newsletter.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {newsletter.description}
                  </p>
                  <button className="flex items-center text-maroon-700 dark:text-golden-400 hover:text-golden-600 dark:hover:text-golden-300 font-medium transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    {t('common.download')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Benefits */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
                Why Subscribe?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Here's what you'll receive when you join our newsletter community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-maroon-100 dark:bg-maroon-900 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-maroon-700 dark:text-golden-400 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-maroon-900 dark:text-white mb-2">
                  Event Updates
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Be the first to know about upcoming events, festivals, and cultural programs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-golden-100 dark:bg-golden-900 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                  <FileText className="w-8 h-8 text-golden-700 dark:text-golden-400 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-maroon-900 dark:text-white mb-2">
                  Trust Updates
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Regular updates on our activities, achievements, and community initiatives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-maroon-100 dark:bg-maroon-900 rounded-full p-6 w-20 h-20 mx-auto mb-4">
                  <Mail className="w-8 h-8 text-maroon-700 dark:text-golden-400 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-maroon-900 dark:text-white mb-2">
                  Exclusive Content
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access to exclusive articles, interviews, and cultural insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;