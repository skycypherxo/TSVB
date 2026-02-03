'use client'

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, Mail, Phone, MapPin, Award, Heart, Users, Target } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const trustees = [
    {
      name: 'Dr. N.B. Vijaya Ballal',
      position: 'President',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Leading the trust with vision and dedication to cultural preservation.',
    },
    {
      name: 'Dr. N.B. Narendra Ballal',
      position: 'Secretary',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Managing operations and ensuring smooth functioning of trust activities.',
    },
    {
      name: 'Dr. N.B. Kavya Ballal',
      position: 'Treasurer',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Overseeing financial matters and ensuring transparency in all transactions.',
    },
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Cultural Preservation',
      description: 'Dedicated to preserving and promoting our rich cultural heritage for future generations.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Community Service',
      description: 'Committed to serving our community through various social welfare programs.',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Excellence',
      description: 'Striving for excellence in all our endeavors and maintaining high standards.',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Vision',
      description: 'Working towards a future where our cultural values thrive and communities prosper.',
    },
  ];

  return (
    <div className="py-2">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-800 text-white py-20 overflow-hidden">
        <CulturalPattern className="text-golden-400" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Left: 3 <br> texts */}
            <div className="flex-1 max-w-2xl flex flex-col gap-6">
              <p className="text-xl md:text-2xl text-golden-100 leading-relaxed">
                India’s ancient dynasties and rulers played a pivotal role in building and preserving the nation’s rich cultural and spiritual heritage. Through the creation of magnificent temples, exquisite architecture, and intricate carvings, they nurtured traditions of devotion and artistic excellence that continue to inspire generations. Each dynasty, in its own era, contributed uniquely to the flourishing of India’s timeless culture, ensuring that the essence of faith, art, and heritage endured through the ages.
              </p>
              <p className="text-xl md:text-2xl text-golden-100 leading-relaxed">
                Contributing to this rich cultural and spiritual heritage were the Ballals of Nidambooru Beedu of Ambalpady, who have been caring for the villages of Nidambooru Magane for over 800 years, with Nidambooru Beedu as the central seat in Ambalpady.
              </p>
              <p className="text-xl md:text-2xl text-golden-100 leading-relaxed">
                The TSVB Trust was founded to honor and preserve this proud legacy of the Ballals — protecting the culture, traditions, and heritage of Nidambooru Beedu. The Trust also strives to promote the rich culture and traditions of Tulunadu, while engaging in social initiatives and contributing to the welfare of society. With a deep respect for heritage and a steadfast commitment to service, TSVB Trust continues the timeless mission of preserving faith, fostering culture, and supporting the community.
              </p>
            </div>
            {/* Right: title and image */}
            <div className="flex-1 flex flex-col items-center justify-center h-full">
              <h1 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-golden-200 bg-clip-text text-transparent text-center">
                <span className="underline decoration-golden-300 decoration-4 underline-offset-8">{t('about.title')}</span>
              </h1>
              <img 
                src="/house.jpeg"
                alt="Nidambooru Beedu" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-golden-300 max-w-4xl mt-4 mx-auto drop-shadow-[0_0_40px_rgba(255,215,0,0.7)]"
                style={{ background: 'rgba(255,255,255,0.05)', maxHeight: '1200px' }}
              />
              <div className="text-golden-200 text-center text-lg mt-2 font-medium drop-shadow-sm">
                Nidambooru Beedu House, Ambalpady
              </div>
            </div>
          </div>
        </div>
      </section>

     



      {/* Trustees Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
              {t('about.trustees.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the dedicated individuals who lead our trust with wisdom and commitment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustees.map((trustee, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{trustee.name}</h3>
                    <p className="text-golden-200 font-medium">{trustee.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {trustee.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutPage;