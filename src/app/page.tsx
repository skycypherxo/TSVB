
'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Users, Award, Calendar, ArrowRight, Heart } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

// Helper function to get the correct image path with basePath
const getImagePath = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
};

// Simple Carousel for Latest Events
type Event = {
  title: string;
  date: string;
  location: string;
  image: string;
};

type EventCarouselProps = {
  events: Event[];
  t: any;
};


// Carousel that shows 4 images per slide, wider images, continuous ticker
const TickerCarousel: React.FC<{ items: Event[]; t: any; showDate?: boolean }> = ({ items, t, showDate }) => {
  const [offset, setOffset] = useState(0);
  const CARD_WIDTH = 600; // slightly smaller than before
  const CARD_HEIGHT = 420; // slightly smaller than before
  const VISIBLE_CARDS = 4;
  const totalCards = items.length;
  const totalWidth = CARD_WIDTH * totalCards;
  const extendedItems = [...items, ...items, ...items];
  const extendedLength = extendedItems.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        if (prev <= -totalWidth) return 0;
        return prev - 1;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [totalWidth]);

  if (!Array.isArray(items) || items.length === 0) return null;

  const handleCardClick = (event: Event) => {
    // Check if it's an award card (has emoji in title)
    if (event.title.includes('🏅') || event.title.includes('🏆')) {
      window.location.href = '/awards';
    }
  };

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="overflow-hidden rounded-2xl shadow-lg min-h-[540px] relative w-screen">
        <div
          className="flex"
          style={{
            width: extendedLength * CARD_WIDTH,
            minWidth: '100vw',
            transform: `translateX(${offset}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          {extendedItems.map((event, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8"
              style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
            >
              <div 
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-col items-stretch h-full cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => handleCardClick(event)}
              >
                {/* Image on top */}
                <div className="relative w-full h-[300px] overflow-hidden flex-shrink-0 rounded-t-2xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {showDate && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-maroon-800 to-maroon-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      {event.date}
                    </div>
                  )}
                </div>
                {/* Text below image */}
                <div className="p-6 flex flex-col justify-between w-full flex-1 overflow-hidden">
                  <div>
                    <h3 className="text-2xl font-bold text-maroon-900 dark:text-golden-400 mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base line-clamp-2">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('home.mission.title'),
      description: t('home.mission.description'),
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t('home.vision.title'),
      description: t('home.vision.description'),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('home.community.title'),
      description: t('home.community.description'),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('home.heritage.title'),
      description: t('home.heritage.description'),
    },
  ];

  const allEvents = [
    {
      title: '🏅 Nidambooru Beedu Shree Award 2026',
      date: '31st January 2026',
      location: 'Shri K. Srinivasa Hegde - Advocate & Eminent Social Worker',
      image: getImagePath('/Aw1.jpeg'),
      category: 'Cultural',
    },
    {
      title: '🏆 Nidambooru Beedu Ballal Award 2026',
      date: '2026',
      location: 'Shri Brahma Baidarkala Yakshagana Kala Mandali - Bolje, Udyavara',
      image: getImagePath('/Aw2.jpeg'),
      category: 'Cultural',
    },
    {
      title: 'Annual Cultural Festival',
      date: 'March 15, 2024',
      location: 'Ambalapady Community Hall',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Cultural',
    },
    {
      title: 'Educational Workshop',
      date: 'April 20, 2024',
      location: 'Trust Premises',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Education',
    },
    {
      title: 'Free Health Camp',
      date: 'May 10, 2024',
      location: 'Ambalapady',
      image: 'https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Healthcare',
    },
    {
      title: 'Community Service Drive',
      date: 'June 5, 2024',
      location: 'Nidambooru',
      image: 'https://images.pexels.com/photos/6646937/pexels-photo-6646937.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Others',
    },
  ];

  const categories = ['All', 'Cultural', 'Education', 'Healthcare', 'Others'];
  
  const latestEvents = selectedCategory === 'All' 
    ? allEvents 
    : allEvents.filter(event => event.category === selectedCategory);

  const tickerUpdates = [
    "🏆 Nidambooru Beedu Shree Award 2026",
    "🏆 Nidambooru Beedu Ballal Award 2026",

  ];

  return (
    <div className="relative">
      {/* News Ticker */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 text-white py-3 overflow-hidden border-b-2 border-golden-400 shadow-lg ticker-container">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1 left-1/4 w-2 h-2 bg-golden-400/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-2 right-1/3 w-1 h-1 bg-golden-300/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1 left-1/2 w-1.5 h-1.5 bg-golden-500/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1 right-1/4 w-1 h-1 bg-golden-400/25 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="flex items-center relative z-20">
          {/* Breaking News Label */}
          <div className="flex-shrink-0 bg-gradient-to-r from-golden-600 to-golden-500 text-maroon-900 px-6 py-2 font-bold text-sm uppercase tracking-wider shadow-lg rounded-r-full mr-4 relative">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-maroon-900 rounded-full animate-pulse mr-2"></span>
              <span className="hidden sm:inline">Latest Updates</span>
              <span className="sm:hidden">News</span>
            </span>
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-golden-400 to-golden-300 rounded-r-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* Scrolling Content */}
          <div className="flex-1 overflow-hidden relative">
            <div className="animate-scroll whitespace-nowrap text-sm sm:text-base">
              {/* First set of updates */}
              <span className="inline-flex items-center">
                {tickerUpdates.map((update, index) => (
                  <span key={`first-${index}`} className="inline-flex items-center mx-4 sm:mx-8">
                    <span className="text-golden-200 font-medium hover:text-golden-100 transition-colors duration-300">{update}</span>
                    <span className="text-golden-400 mx-3 sm:mx-4 opacity-60">•</span>
                  </span>
                ))}
              </span>
              {/* Duplicate for seamless loop */}
              <span className="inline-flex items-center">
                {tickerUpdates.map((update, index) => (
                  <span key={`second-${index}`} className="inline-flex items-center mx-4 sm:mx-8">
                    <span className="text-golden-200 font-medium hover:text-golden-100 transition-colors duration-300">{update}</span>
                    <span className="text-golden-400 mx-3 sm:mx-4 opacity-60">•</span>
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* Right accent */}
          <div className="flex-shrink-0 text-golden-400 px-2 sm:px-4">
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-golden-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-golden-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-1 h-1 bg-golden-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Subtle gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-maroon-800 to-transparent z-30 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-maroon-800 to-transparent z-30 pointer-events-none"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-800 text-white py-12 md:py-16 overflow-hidden">
        <div className="flex justify-center items-center mb-8">
          <img src='logo.png' className='object-contain' />
        </div>
        <CulturalPattern className="text-golden-400 opacity-20" />

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-golden-400/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-maroon-400/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-golden-300/5 rounded-full animate-pulse-slow"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-full mx-auto text-center">
           
              <h1 className="text-5xl md:text-8xl font-extrabold mb-2 bg-gradient-to-r from-white via-golden-200 to-golden-400 bg-clip-text text-transparent leading-tight">
                {t('home.welcome')}
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-4xl font-extrabold mb-8 bg-gradient-to-r from-golden-200 to-golden-400 bg-clip-text text-transparent uppercase tracking-wide text-center w-ful mx-auto whitespace-normal md:whitespace-nowrap">
                NIDAMBOORU BEEDU TRIPURASUNDARI VIJAYA BALLAL TRUST
              </h2>
              <p className="text-xl md:text-3xl mb-6 text-golden-100 font-medium">
                {t('home.subtitle')}
              </p>
              <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
                The Nidambooru Beedu Tripurasundari Vijaya Ballal Trust is dedicated to preserving and promoting the rich cultural and spiritual legacy of Nidambooru Beedu. The Trust remains committed to upholding age-old traditions, values, and the unique cultural identity of the region, while nurturing a deep spirit of devotion, service, and social responsibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/about" className="btn-secondary group">
                  <span className="flex items-center">
                    {t('common.learn.more')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            
          </div>
        </div>
      </section>

      {/* Latest Events & Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-golden-50 via-white to-maroon-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-maroon-600 font-semibold text-lg uppercase tracking-wider">Latest Events & Highlights</span>
            <h2 className="text-4xl md:text-5xl font-bold text-maroon-900 dark:text-golden-400 mb-6 mt-2">
              Latest Events & Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-golden-600 to-maroon-700 mx-auto mb-6"></div>
          
          </div>
          
          <TickerCarousel items={allEvents} t={t} showDate={true} />
        </div>
      </section>


      {/* Call to Action */}
  <section className="py-10 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-950 text-white relative overflow-hidden">
        <CulturalPattern className="text-golden-400 opacity-10" />

        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-golden-400/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-golden-300/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

  <div className="container mx-auto relative z-10">
          <div className="max-w-full mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-golden-200 bg-clip-text text-transparent">
              {t('home.cta.title')}
            </h2>
         

            <TickerCarousel
              items={[
                { title: 'Free Health Camp', date: '', location: 'Ambalapady', image: 'https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg?auto=compress&cs=tinysrgb&w=800' },
                { title: 'Educational Kit Distribution', date: '', location: 'Udupi', image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800' },
                { title: 'Food Drive', date: '', location: 'Nidambooru', image: 'https://images.pexels.com/photos/6646937/pexels-photo-6646937.jpeg?auto=compress&cs=tinysrgb&w=800' },
                { title: 'Women Empowerment Workshop', date: '', location: 'Trust Premises', image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800' },
                { title: 'Environmental Awareness', date: '', location: 'Udupi', image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800' },
                { title: 'Senior Citizens Meet', date: '', location: 'Ambalapady', image: 'https://images.pexels.com/photos/1642883/pexels-photo-1642883.jpeg?auto=compress&cs=tinysrgb&w=800' },
              ]}
              t={t}
              showDate={false}
            />

            {/* Donate Button under the 2nd carousel */}
            <button className="bg-gradient-to-r from-golden-400 to-golden-600 text-maroon-900 hover:from-golden-500 hover:to-golden-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group mt-8">
              <span className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                {t('home.cta.donate')}
              </span>
            </button>

          </div>
        </div>
      </section>
    </div>
  );
};


export default HomePage;