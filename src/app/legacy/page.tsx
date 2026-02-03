'use client'

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Crown, Star, Award, Users, Heart, BookOpen, ArrowRight, Calendar } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

const LegacyPage: React.FC = () => {
  const { t } = useLanguage();

  const legacyPersonalities = [
    {
      id: 'ballal-shetty',
      name: 'Shri Ballal Shetty',
      title: 'Founder of the Ballal Legacy',
      period: '1850-1920',
      shortDescription: 'A visionary leader who established the foundations of the Ballal family traditions.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Founder',
      achievements: 3
    },
    {
      id: 'ballal-raghunath',
      name: 'Dr. Ballal Raghunath',
      title: 'Pioneer in Education',
      period: '1890-1965',
      shortDescription: 'Dedicated his life to educational advancement and social reform in the region.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Educator',
      achievements: 5
    },
    {
      id: 'tripurasundari-ballal',
      name: 'Smt. Tripurasundari Ballal',
      title: 'Cultural Patron',
      period: '1920-1995',
      shortDescription: 'A devoted patron of arts and culture, preserving traditional practices.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Cultural Leader',
      achievements: 4
    },
    {
      id: 'vijaya-ballal',
      name: 'Dr. Vijaya Ballal',
      title: 'Modern Visionary',
      period: '1945-Present',
      shortDescription: 'Current leader continuing the family legacy with modern approaches.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Current Leader',
      achievements: 6
    },
    {
      id: 'narendra-ballal',
      name: 'Dr. N.B. Narendra Ballal',
      title: 'Secretary & Trustee',
      period: '1970-Present',
      shortDescription: 'Dedicated trustee managing organizational affairs and community programs.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Administrator',
      achievements: 4
    },
    {
      id: 'kavya-ballal',
      name: 'Dr. N.B. Kavya Ballal',
      title: 'Treasurer & Trustee',
      period: '1980-Present',
      shortDescription: 'Financial steward ensuring sustainable growth and transparent operations.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Financial Leader',
      achievements: 3
    }
  ];

  const familyValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'Deep commitment to helping those in need and serving the community with love.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Education',
      description: 'Unwavering belief in the power of education to transform lives and communities.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Leadership',
      description: 'Leading by example and inspiring others to contribute to society.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Unity',
      description: 'Bringing people together and fostering harmony within the community.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-800 text-white py-16 overflow-hidden">
        <CulturalPattern className="text-golden-400 opacity-10" />
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-golden-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-maroon-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fadeInUp">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-gold">
                {t('legacy.title')}
              </h1>
              <p className="text-xl md:text-2xl text-golden-100 leading-relaxed mb-8">
                {t('legacy.description')}
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-golden-400/20 backdrop-blur-sm rounded-full text-golden-200 border border-golden-400/30">
                <Crown className="w-5 h-5 mr-2" />
                <span>Honoring {legacyPersonalities.length} Distinguished Personalities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Personalities Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-maroon mb-6">
              Distinguished Personalities
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Honoring the remarkable individuals who shaped our family legacy and community values through generations of dedicated service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {legacyPersonalities.map((person, index) => (
              <Link 
                key={person.id}
                href={`/legacy/${person.id}`}
                className="group"
              >
                <div className="card-elegant rounded-2xl overflow-hidden h-full animate-fadeInScale" style={{animationDelay: `${index * 100}ms`}}>
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-golden-400/90 backdrop-blur-sm rounded-full text-xs font-semibold text-maroon-900">
                        <Crown className="w-3 h-3 mr-1" />
                        {person.category}
                      </span>
                    </div>
                    
                    {/* Period Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 bg-maroon-900/90 backdrop-blur-sm rounded-full text-xs font-medium text-golden-200">
                        <Calendar className="w-3 h-3 mr-1" />
                        {person.period}
                      </span>
                    </div>
                    
                    {/* Bottom Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1 text-shadow-dark">
                        {person.name}
                      </h3>
                      <p className="text-golden-200 text-sm font-medium">
                        {person.title}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {person.shortDescription}
                    </p>
                    
                    {/* Achievements Count */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Award className="w-4 h-4 mr-1" />
                        <span>{person.achievements} Key Achievements</span>
                      </div>
                      
                      {/* Read More Button */}
                      <div className="flex items-center text-golden-600 group-hover:text-golden-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Family Values */}
      <section className="py-16 bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-gold mb-6">
              Enduring Family Values
            </h2>
            <div className="w-24 h-1 bg-gradient-maroon mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The timeless principles that have guided the Ballal family through generations of service and leadership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {familyValues.map((value, index) => (
              <div
                key={index}
                className="card-elegant rounded-2xl p-8 text-center group hover:scale-105 animate-fadeInScale"
                style={{animationDelay: `${index * 150}ms`}}
              >
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} p-4 text-white transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  {value.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-maroon-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
                
                {/* Decorative Element */}
                <div className="mt-6 w-12 h-1 bg-gradient-gold mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-900"></div>
        <CulturalPattern className="absolute inset-0 text-golden-400/10" />
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-golden-400/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-maroon-400/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-gold mb-6">
              Continue the Legacy
            </h2>
            <p className="text-xl text-golden-100 mb-8 leading-relaxed">
              Be part of our mission to preserve cultural heritage and serve the community for future generations
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-secondary group text-lg px-8 py-4">
                <span className="flex items-center">
                  Join Our Mission
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
              <Link href="/donations" className="btn-outline border-golden-300 text-golden-300 hover:bg-golden-300 hover:text-maroon-900 text-lg px-8 py-4 group">
                <span className="flex items-center">
                  <Heart className="w-6 h-6 mr-3" />
                  Support Our Cause
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegacyPage;