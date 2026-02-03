'use client'

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Heart, TreePine, Sparkles, Sun, Users, Scroll, Clock } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

const RootsSpokenPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      id: 1,
      icon: <TreePine className="w-8 h-8" />,
      titleKey: 'roots.story1.title',
      descriptionKey: 'roots.story1.description',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-600 to-emerald-700',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-700 dark:text-green-400'
    },
    {
      id: 2,
      icon: <Sparkles className="w-8 h-8" />,
      titleKey: 'roots.story2.title',
      descriptionKey: 'roots.story2.description',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-600 to-pink-700',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-700 dark:text-purple-400'
    },
    {
      id: 3,
      icon: <BookOpen className="w-8 h-8" />,
      titleKey: 'roots.story3.title',
      descriptionKey: 'roots.story3.description',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-amber-600 to-orange-700',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      textColor: 'text-amber-700 dark:text-amber-400'
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8" />,
      titleKey: 'roots.story4.title',
      descriptionKey: 'roots.story4.description',
      image: 'https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-600 to-rose-700',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      textColor: 'text-red-700 dark:text-red-400'
    },
    {
      id: 5,
      icon: <Sun className="w-8 h-8" />,
      titleKey: 'roots.story5.title',
      descriptionKey: 'roots.story5.description',
      image: 'https://images.pexels.com/photos/1102379/pexels-photo-1102379.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-yellow-600 to-amber-700',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      textColor: 'text-yellow-700 dark:text-yellow-400'
    },
    {
      id: 6,
      icon: <Users className="w-8 h-8" />,
      titleKey: 'roots.story6.title',
      descriptionKey: 'roots.story6.description',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-700 dark:text-blue-400'
    }
  ];

  // Auto-cycle through stories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [stories.length]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-800 text-white py-20 overflow-hidden">
        {/* Sacred symbols floating animation */}
        <div className="absolute top-20 left-12 w-6 h-6 text-golden-400 animate-float" style={{animationDelay: '0s'}}>🪔</div>
        <div className="absolute top-32 right-16 w-8 h-8 text-golden-300 animate-bounce" style={{animationDelay: '1s'}}>📿</div>
        <div className="absolute bottom-24 left-20 w-6 h-6 text-golden-400 animate-pulse" style={{animationDelay: '2s'}}>🕉️</div>
        <div className="absolute top-48 right-32 w-5 h-5 text-golden-300 animate-ping" style={{animationDelay: '3s'}}>✨</div>
        <div className="absolute bottom-32 right-24 w-7 h-7 text-golden-400 animate-spin" style={{animationDelay: '0.5s', animationDuration: '8s'}}>☸️</div>
        
        {/* Floating storytelling elements */}
        <div className="absolute top-16 left-1/4 w-4 h-4 bg-golden-400/30 rounded-full animate-float" style={{animationDelay: '1s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-28 right-1/3 w-6 h-6 bg-golden-300/25 rounded-full animate-float" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
        
        <CulturalPattern className="text-golden-400 opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              {/* Animated scroll icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Scroll className="w-16 h-16 text-golden-400 animate-pulse" />
                  <div className="absolute inset-0 bg-golden-400/20 rounded-full blur-xl animate-pulse scale-150"></div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-golden-200 to-golden-400 bg-clip-text text-transparent leading-tight">
                {t('roots.title')}
              </h1>
              <p className="text-xl md:text-3xl mb-6 text-golden-100 font-medium">
                {t('roots.subtitle')}
              </p>
              <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
                {t('roots.description')}
              </p>
              
              {/* Time indicator */}
              <div className="flex items-center justify-center text-golden-200">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-sm">Stories from generations past</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Story Gallery */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-golden-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800">
        <div className="container mx-auto px-4">
          {/* Story Navigation */}
          <div className="flex justify-center mb-16">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => setActiveStory(index)}
                  className={`p-4 rounded-2xl transition-all duration-500 transform hover:scale-110 ${
                    activeStory === index
                      ? `${story.bgColor} ${story.textColor} shadow-lg scale-110`
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {story.icon}
                    <span className="text-xs mt-2 font-medium">{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Story Display */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Story Image */}
              <div className="relative group">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={stories[activeStory].image}
                    alt={t(stories[activeStory].titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${stories[activeStory].color} opacity-20`}></div>
                  
                  {/* Floating animation overlay */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
                </div>
                
                {/* Decorative elements around image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-4 border-golden-400 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-2 border-maroon-400 rounded-full animate-pulse"></div>
              </div>

              {/* Story Content */}
              <div className="space-y-8">
                <div className="animate-fade-in-up" key={activeStory}>
                  {/* Story Icon */}
                  <div className={`inline-flex p-4 rounded-2xl ${stories[activeStory].bgColor} ${stories[activeStory].textColor} mb-6`}>
                    {stories[activeStory].icon}
                  </div>
                  
                  {/* Story Title */}
                  <h2 className="text-4xl md:text-5xl font-bold text-maroon-900 dark:text-golden-400 mb-6 leading-tight">
                    {t(stories[activeStory].titleKey)}
                  </h2>
                  
                  {/* Story Description */}
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    {t(stories[activeStory].descriptionKey)}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${stories[activeStory].color} transition-all duration-5000 ease-linear`}
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                  
                  {/* Story Counter */}
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Story {activeStory + 1} of {stories.length}</span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Auto-changing every 5s
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Stories Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-maroon-900 dark:text-golden-400 mb-6">
              All Stories Collection
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-maroon-700 to-golden-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setActiveStory(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={t(story.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${story.color} opacity-30`}></div>
                  <div className={`absolute top-4 left-4 p-3 rounded-xl ${story.bgColor} ${story.textColor}`}>
                    {story.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-maroon-900 dark:text-white mb-3">
                    {t(story.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t(story.descriptionKey)}
                  </p>
                </div>
                
                {/* Hover effects */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${story.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RootsSpokenPage;
