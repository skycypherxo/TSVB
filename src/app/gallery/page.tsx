'use client'

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Camera, Calendar, Users, MapPin, Eye, X } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

const GalleryPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'cultural', name: 'Cultural Programs' },
    { id: 'community', name: 'Community Service' },
    { id: 'awards', name: 'Awards & Recognition' },
    { id: 'heritage', name: 'Heritage Sites' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Annual Cultural Festival 2024',
      category: 'cultural',
      date: 'March 15, 2024',
      location: 'Ambalapady Community Hall',
      description: 'A grand celebration of traditional arts, music, and dance featuring local artists and cultural performances.'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Educational Scholarship Ceremony',
      category: 'events',
      date: 'January 20, 2024',
      location: 'Trust Premises',
      description: 'Scholarship distribution ceremony for deserving students from underprivileged backgrounds.'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Health Camp',
      category: 'community',
      date: 'December 10, 2023',
      location: 'Village Center',
      description: 'Free medical checkups and health awareness programs for local communities.'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Heritage Documentation Project',
      category: 'heritage',
      date: 'November 25, 2023',
      location: 'Historical Sites',
      description: 'Documenting and preserving local history, traditions, and family genealogies.'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Excellence Award Ceremony',
      category: 'awards',
      date: 'October 15, 2023',
      location: 'District Collectorate',
      description: 'Recognition ceremony for outstanding contributions to cultural preservation.'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Traditional Dance Performance',
      category: 'cultural',
      date: 'September 20, 2023',
      location: 'Cultural Center',
      description: 'Classical dance performances showcasing regional traditional art forms.'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Women Empowerment Workshop',
      category: 'community',
      date: 'August 30, 2023',
      location: 'Community Hall',
      description: 'Skills development and entrepreneurship training for women in the community.'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Environmental Conservation Drive',
      category: 'community',
      date: 'July 25, 2023',
      location: 'Local Schools',
      description: 'Tree plantation and environmental awareness campaign in collaboration with local schools.'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Heritage Site Visit',
      category: 'heritage',
      date: 'June 15, 2023',
      location: 'Ancient Temple Complex',
      description: 'Educational visit to historical sites to understand and preserve cultural heritage.'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-800 text-white py-20 overflow-hidden">
        <CulturalPattern className="text-golden-400" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-golden-200 bg-clip-text text-transparent">
              {t('gallery.title')}
            </h1>
            <p className="text-xl md:text-2xl text-golden-100 leading-relaxed">
              {t('gallery.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-maroon-700 dark:bg-golden-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </button>
                  <div className="absolute top-4 left-4 bg-golden-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Camera className="w-4 h-4 inline mr-1" />
                    {categories.find(cat => cat.id === image.category)?.name}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-maroon-900 dark:text-white mb-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{image.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{image.location}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-96 md:h-[500px]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-maroon-900 dark:text-white mb-4">
                {selectedImage.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="w-5 h-5 mr-3 text-golden-600" />
                  <span>{selectedImage.date}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-golden-600" />
                  <span>{selectedImage.location}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Statistics */}
      <section className="py-20 bg-maroon-900 dark:bg-maroon-950 text-white relative overflow-hidden">
        <CulturalPattern className="text-golden-400" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Capturing Memories
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every photograph tells a story of our commitment to community service and cultural preservation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                500+
              </div>
              <p className="text-lg text-gray-300">Photos Captured</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                50+
              </div>
              <p className="text-lg text-gray-300">Events Documented</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                10+
              </div>
              <p className="text-lg text-gray-300">Years of Memories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                1000+
              </div>
              <p className="text-lg text-gray-300">Lives Touched</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;