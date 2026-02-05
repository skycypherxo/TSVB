'use client'

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, Mail, Phone, MapPin, Award, Heart, Users, Target, ArrowRight } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

// Helper function to get the correct image path with basePath
const getImagePath = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
};

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

  const digitalMediaManagers = [
    {
      name: 'Mr. Sushil C Hegde',
      position: 'Digital Media Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',

    },
    {
      name: 'Vaishnavi Poti',
      position: 'Digital Media Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
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
      <section className="relative bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-800 text-white overflow-hidden">
        <CulturalPattern className="text-golden-400 opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Title Section */}
          <div className="text-center pt-16 pb-8 md:pt-20 md:pb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-golden-200 via-golden-300 to-golden-200 bg-clip-text text-transparent">
              {t('about.title')}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-golden-400 to-transparent mx-auto mb-4"></div>
            <p className="text-golden-200 text-lg md:text-xl max-w-3xl mx-auto font-light">
              Preserving Heritage, Nurturing Culture, Serving Community
            </p>
          </div>

          {/* Main Content Grid - Image first on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-20">
            {/* Image Section - comes first on mobile */}
            <div className="order-1 flex flex-col items-center justify-center">
              <div className="relative group w-full max-w-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-golden-400 to-golden-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                  <img 
                    src={getImagePath("/house.jpeg")}
                    alt="Nidambooru Beedu" 
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover relative"
                    style={{ maxHeight: '600px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-golden-200 text-lg md:text-xl font-semibold mb-4">
                  Nidambooru Beedu House, Ambalpady
                </p>
                <Link href="/history" className="inline-flex items-center gap-2 bg-gradient-to-r from-golden-400 to-golden-600 text-maroon-900 hover:from-golden-500 hover:to-golden-700 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  History of Nidambooru Beedu Ballals
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Text Content - comes second on mobile */}
            <div className="order-2 flex flex-col justify-center space-y-6 lg:space-y-8">
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 border border-golden-400/20 hover:border-golden-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-golden-400/10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-1.5 h-full bg-gradient-to-b from-golden-400 to-transparent rounded-full"></div>
                  <p className="text-base md:text-lg text-golden-50 leading-relaxed">
                    India's ancient dynasties and rulers played a pivotal role in building and preserving the nation's rich cultural and spiritual heritage. Through the creation of magnificent temples, exquisite architecture, and intricate carvings, they nurtured traditions of devotion and artistic excellence that continue to inspire generations.
                  </p>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 border border-golden-400/20 hover:border-golden-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-golden-400/10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-1.5 h-full bg-gradient-to-b from-golden-400 to-transparent rounded-full"></div>
                  <p className="text-base md:text-lg text-golden-50 leading-relaxed">
                    Contributing to this rich cultural and spiritual heritage were the <span className="text-golden-300 font-semibold">Ballals of Nidambooru Beedu</span> of Ambalpady, who have been caring for the villages of Nidambooru Magane for over 800 years, with Nidambooru Beedu as the central seat in Ambalpady.
                  </p>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 md:p-8 border border-golden-400/20 hover:border-golden-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-golden-400/10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-1.5 h-full bg-gradient-to-b from-golden-400 to-transparent rounded-full"></div>
                  <p className="text-base md:text-lg text-golden-50 leading-relaxed">
                    The <span className="text-golden-300 font-semibold">TSVB Trust</span> was founded to honor and preserve this proud legacy — protecting the culture, traditions, and heritage of Nidambooru Beedu. The Trust also strives to promote the rich culture and traditions of Tulunadu, while engaging in social initiatives and contributing to the welfare of society.
                  </p>
                </div>
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
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Media Managers Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
              Digital Media Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connecting tradition with technology through digital excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {digitalMediaManagers.map((manager, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={manager.image}
                    alt={manager.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{manager.name}</h3>
                    <p className="text-golden-200 font-medium">{manager.position}</p>
                  </div>
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
