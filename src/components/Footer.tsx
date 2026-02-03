'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Heart, ExternalLink } from 'lucide-react';

// Helper function to get the correct image path with basePath
const getImagePath = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
};

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-950 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-golden-400/5 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-golden-300/5 rounded-full animate-float"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Trust Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={getImagePath("/logo.png")}
                  alt="TSVB Trust Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-golden-400">TSVB Trust</h3>
                <p className="text-sm text-golden-200">Preserving Heritage</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              NIDAMBOORU BEEDU TRIPURASUNDARI VIJAYA BALLAL TRUST (R) - Dedicated to preserving cultural heritage and serving the community since inception.
            </p>
            <div className="flex items-center space-x-2 text-sm text-golden-200">
              <Heart size={16} className="text-golden-400" />
              <span>Serving with dedication</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-golden-400 border-b border-golden-800 pb-2">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/about" className="text-sm text-gray-300 hover:text-golden-400 transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-2 h-2 bg-golden-600 rounded-full mr-2 group-hover:bg-golden-400 transition-colors"></span>
                {t('nav.about')}
              </Link>
              <Link href="/newsletter" className="text-sm text-gray-300 hover:text-golden-400 transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-2 h-2 bg-golden-600 rounded-full mr-2 group-hover:bg-golden-400 transition-colors"></span>
                {t('nav.newsletter')}
              </Link>
              <Link href="/awards" className="text-sm text-gray-300 hover:text-golden-400 transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-2 h-2 bg-golden-600 rounded-full mr-2 group-hover:bg-golden-400 transition-colors"></span>
                {t('nav.awards')}
              </Link>
              <Link href="/legacy" className="text-sm text-gray-300 hover:text-golden-400 transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-2 h-2 bg-golden-600 rounded-full mr-2 group-hover:bg-golden-400 transition-colors"></span>
                {t('nav.legacy')}
              </Link>
              <Link href="/gallery" className="text-sm text-gray-300 hover:text-golden-400 transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-2 h-2 bg-golden-600 rounded-full mr-2 group-hover:bg-golden-400 transition-colors"></span>
                {t('nav.gallery')}
              </Link>
              <Link href="/donations" className="text-sm text-gray-300 hover:text-golden-400 transition-all duration-300 hover:translate-x-1 flex items-center group">
                <span className="w-2 h-2 bg-golden-600 rounded-full mr-2 group-hover:bg-golden-400 transition-colors"></span>
                {t('nav.donations')}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-golden-400 border-b border-golden-800 pb-2">{t('contact.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin size={16} className="text-golden-400 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300 leading-relaxed">
                  {t('footer.location')}
                </span>
              </div>
              <a href="tel:+917795557952" className="flex items-center space-x-3 group hover:text-golden-400 transition-colors">
                <Phone size={16} className="text-golden-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300 group-hover:text-golden-400">
                  +91 7795557952
                </span>
              </a>
              <a href="mailto:tsvbtrust@gmail.com" className="flex items-center space-x-3 group hover:text-golden-400 transition-colors">
                <Mail size={16} className="text-golden-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300 group-hover:text-golden-400">
                  tsvbtrust@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-golden-400 border-b border-golden-800 pb-2">Connect With Us</h3>
            <div className="flex space-x-3">
              <a href="#" className="p-3 bg-gradient-to-br from-golden-600 to-golden-700 rounded-lg hover:from-golden-500 hover:to-golden-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group">
                <Facebook size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-gradient-to-br from-golden-600 to-golden-700 rounded-lg hover:from-golden-500 hover:to-golden-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group">
                <Twitter size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-gradient-to-br from-golden-600 to-golden-700 rounded-lg hover:from-golden-500 hover:to-golden-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group">
                <Instagram size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-maroon-800/50 to-golden-900/30 p-4 rounded-lg border border-golden-800/30">
              <h4 className="text-sm font-semibold text-golden-400 mb-2">Stay Updated</h4>
              <p className="text-xs text-gray-300 mb-3">Subscribe to our newsletter for latest updates and events.</p>
              <Link href="/newsletter" className="inline-flex items-center text-xs text-golden-400 hover:text-golden-300 transition-colors group">
                Subscribe Now 
                <ExternalLink size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-golden-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400 flex items-center">
              <span>© 2024 TSVB Trust. Made with</span>
              <Heart size={14} className="text-golden-400 mx-1" />
              <span>for our community.</span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-golden-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-golden-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;