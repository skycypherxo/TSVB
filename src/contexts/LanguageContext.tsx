'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'kn';
  setLanguage: (lang: 'en' | 'kn') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.newsletter': 'Newsletter',
  'nav.awards': 'Awards & Activities',
  'nav.honours': 'Honours',
    'nav.legacy': 'Legacy of Ballals',
    'nav.rootsspoken': 'Roots Spoken',
    'nav.gallery': 'Gallery',
    'nav.donations': 'Donations',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin',
    
    // Home
    'home.welcome': 'Welcome to TSVB Trust',
    'home.subtitle': 'Preserving Culture, Nurturing Heritage',
    'home.about.title': 'About Our Trust',
    'home.about.description': 'NIDAMBOORU BEEDU TRIPURASUNDARI VIJAYA BALLAL TRUST is dedicated to preserving and promoting the rich cultural heritage of our community while serving society through various philanthropic activities.',
    'home.mission.title': 'Our Mission',
    'home.mission.description': 'To preserve cultural traditions, support education, and serve the community through various social welfare activities.',
    'home.vision.title': 'Our Vision',
    'home.vision.description': 'To be a beacon of cultural preservation and social service, inspiring future generations to uphold our values.',
    'home.community.title': 'Community Service',
    'home.community.description': 'Dedicated to serving our community through various social welfare programs and initiatives.',
    'home.heritage.title': 'Cultural Heritage',
    'home.heritage.description': 'Preserving and promoting the rich cultural traditions and heritage of our community.',
    'home.mission.section': 'Our Mission',
    'home.about.subtitle': 'Discover what makes TSVB Trust a beacon of cultural preservation and community service',
    'home.events.section': "What's Coming",
    'home.latest.title': 'Latest Events & Highlights',
    'home.latest.description': 'Explore our most recent and upcoming events, celebrations, and community highlights.',
    'home.cta.title': 'Join us in preserving our culture and heritage',
    'home.cta.description': 'Be part of our mission to preserve cultural traditions and serve the community. Your support helps us continue our valuable work for future generations.',
    'home.cta.donate': 'Make a Donation',
    'home.cta.volunteer': 'Volunteer with Us',
    'home.upcoming.title': 'Upcoming Events',
    'home.upcoming.description': 'Stay updated with our latest events and activities',
    
    // About
    'about.title': 'About TSVB Trust',
    'about.overview': 'NIDAMBOORU BEEDU TRIPURASUNDARI VIJAYA BALLAL TRUST (R) is committed to preserving our cultural heritage and serving the community through various philanthropic initiatives.',
    'about.trustees.title': 'Our Trustees',
    'about.trustees.president': 'Dr. N.B. Vijaya Ballal - President',
    'about.trustees.secretary': 'Dr. N.B. Narendra Ballal - Secretary',
    'about.trustees.treasurer': 'Dr. N.B. Kavya Ballal - Treasurer',
    
    // Newsletter
    'newsletter.title': 'Newsletter',
    'newsletter.subscribe': 'Subscribe to Our Newsletter',
    'newsletter.subscribe.description': 'Stay updated with our latest news and activities',
    'newsletter.archive': 'Newsletter Archive',
    'newsletter.email.placeholder': 'Enter your email address',
    'newsletter.subscribe.button': 'Subscribe',
    
    // Awards
    'awards.title': 'Awards & Activities',
    'awards.description': 'Recognizing excellence and celebrating our community achievements',
    
    // Legacy
    'legacy.title': 'Legacy of Ballals',
    'legacy.description': 'Honoring the distinguished personalities from the Ballal family',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.description': 'Moments captured from our events and celebrations',
    
    // Donations
    'donations.title': 'Donations & Contributions',
    'donations.description': 'Support our cause and help us serve the community better',
    'donations.amount': 'Amount',
    'donations.name': 'Full Name',
    'donations.email': 'Email Address',
    'donations.phone': 'Phone Number',
    'donations.address': 'Address',
    'donations.public': 'Make this donation public',
    'donations.submit': 'Donate Now',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.description': 'Get in touch with us for any queries or support',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    
    // Admin
    'admin.title': 'Admin Panel',
    'admin.login': 'Login',
    'admin.username': 'Username',
    'admin.password': 'Password',
    'admin.dashboard': 'Dashboard',
    'admin.gallery.upload': 'Upload Images',
    'admin.newsletter.manage': 'Manage Newsletter',
    'admin.events.manage': 'Manage Events',
    'admin.donations.reports': 'Donation Reports',
    
    // Common
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.view': 'View',
    'common.download': 'Download',
    'common.upload': 'Upload',
    'common.loading': 'Loading...',
    'common.error': 'Error occurred',
    'common.success': 'Success',
    'common.learn.more': 'Learn More',
    'common.contact.us': 'Contact Us',
    'footer.copyright': '© 2024 TSVB Trust. All rights reserved.',
    'footer.location': 'Ambalapady, Udupi - 576103',
    
    // Roots Spoken
    'roots.title': 'Roots Spoken',
    'roots.subtitle': 'Memories and Stories from Childhood',
    'roots.description': 'A collection of cherished memories, stories, and experiences that shaped our heritage and connect us to our roots.',
    'roots.story1.title': 'The Old Banyan Tree',
    'roots.story1.description': 'Stories shared under the ancient banyan tree that stood witness to generations of our family.',
    'roots.story2.title': 'Festival Preparations',
    'roots.story2.description': 'The joy and excitement of preparing for traditional festivals with the entire community.',
    'roots.story3.title': 'Grandmother\'s Tales',
    'roots.story3.description': 'Timeless wisdom and folklore passed down through generations of storytelling.',
    'roots.story4.title': 'Temple Visits',
    'roots.story4.description': 'Sacred moments and spiritual experiences during regular temple visits with family.',
    'roots.story5.title': 'Harvest Memories',
    'roots.story5.description': 'The celebration of abundance and community spirit during harvest seasons.',
    'roots.story6.title': 'Learning Traditions',
    'roots.story6.description': 'The process of learning cultural practices, songs, and rituals from elders.',
  },
  kn: {
    // Header
    'nav.home': 'ಮನೆ',
    'nav.about': 'ನಮ್ಮ ಬಗ್ಗೆ',
    'nav.newsletter': 'ಸುದ್ದಿಪತ್ರಿಕೆ',
  'nav.awards': 'ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳು',
  'nav.honours': 'ಗೌರವಗಳು',
    'nav.legacy': 'ಬಲ್ಲಾಳರ ಪರಂಪರೆ',
    'nav.rootsspoken': 'ಬೇರುಗಳ ಧ್ವನಿ',
    'nav.gallery': 'ಗ್ಯಾಲರಿ',
    'nav.donations': 'ದಾನಗಳು',
    'nav.contact': 'ಸಂಪರ್ಕಿಸಿ',
    'nav.admin': 'ನಿರ್ವಹಣೆ',
    
    // Home
    'home.welcome': 'ಟಿಎಸ್ವಿಬಿ ಟ್ರಸ್ಟ್ಗೆ ಸ್ವಾಗತ',
    'home.subtitle': 'ಸಂಸ್ಕೃತಿಯನ್ನು ಸಂರಕ್ಷಿಸುವುದು, ಪರಂಪರೆಯನ್ನು ಪೋಷಿಸುವುದು',
    'home.about.title': 'ನಮ್ಮ ಟ್ರಸ್ಟ್ ಬಗ್ಗೆ',
    'home.about.description': 'ನಿಡಂಬೂರು ಬೀಡು ತ್ರಿಪುರಸುಂದರಿ ವಿಜಯ ಬಲ್ಲಾಳ್ ಟ್ರಸ್ಟ್ ನಮ್ಮ ಸಮುದಾಯದ ಸಮೃದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸಲು ಮತ್ತು ಪ್ರಚಾರ ಮಾಡಲು ಮೀಸಲಾಗಿದೆ.',
    'home.mission.title': 'ನಮ್ಮ ಧ್ಯೇಯ',
    'home.mission.description': 'ಸಾಂಸ್ಕೃತಿಕ ಸಂಪ್ರದಾಯಗಳನ್ನು ಸಂರಕ್ಷಿಸುವುದು, ಶಿಕ್ಷಣವನ್ನು ಬೆಂಬಲಿಸುವುದು ಮತ್ತು ವಿವಿಧ ಸಮಾಜ ಕಲ್ಯಾಣ ಚಟುವಟಿಕೆಗಳ ಮೂಲಕ ಸಮುದಾಯವನ್ನು ಸೇವಿಸುವುದು.',
    'home.vision.title': 'ನಮ್ಮ ದೃಷ್ಟಿ',
    'home.vision.description': 'ಸಾಂಸ್ಕೃತಿಕ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಸಮಾಜ ಸೇವೆಯ ದೀಪಸ್ತಂಭವಾಗಿ, ಭವಿಷ್ಯದ ಪೀಳಿಗೆಯನ್ನು ನಮ್ಮ ಮೌಲ್ಯಗಳನ್ನು ಎತ್ತಿಹಿಡಿಯಲು ಪ್ರೇರಿಸುವುದು.',
    'home.community.title': 'ಸಮುದಾಯ ಸೇವೆ',
    'home.community.description': 'ವಿವಿಧ ಸಮಾಜ ಕಲ್ಯಾಣ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಉಪಕ್ರಮಗಳ ಮೂಲಕ ನಮ್ಮ ಸಮುದಾಯವನ್ನು ಸೇವಿಸಲು ಮೀಸಲಾಗಿದೆ.',
    'home.heritage.title': 'ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆ',
    'home.heritage.description': 'ನಮ್ಮ ಸಮುದಾಯದ ಸಮೃದ್ಧ ಸಾಂಸ್ಕೃತಿಕ ಸಂಪ್ರದಾಯಗಳು ಮತ್ತು ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸುವುದು ಮತ್ತು ಪ್ರಚಾರ ಮಾಡುವುದು.',
    'home.mission.section': 'ನಮ್ಮ ಧ್ಯೇಯ',
    'home.about.subtitle': 'ಟಿಎಸ್ವಿಬಿ ಟ್ರಸ್ಟ್ ಅನ್ನು ಸಾಂಸ್ಕೃತಿಕ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಯ ದೀಪಸ್ತಂಭವನ್ನಾಗಿ ಮಾಡುವುದು ಏನು ಎಂಬುದನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
    'home.events.section': 'ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು',
    'home.cta.title': 'ನಮ್ಮ ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸುವಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ',
    'home.cta.description': 'ಸಾಂಸ್ಕೃತಿಕ ಸಂಪ್ರದಾಯಗಳನ್ನು ಸಂರಕ್ಷಿಸಲು ಮತ್ತು ಸಮುದಾಯಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸುವ ನಮ್ಮ ಧ್ಯೇಯದ ಭಾಗವಾಗಿರಿ. ಭವಿಷ್ಯದ ಪೀಳಿಗೆಗೆ ನಮ್ಮ ಅಮೂಲ್ಯ ಕೆಲಸವನ್ನು ಮುಂದುವರಿಸಲು ನಿಮ್ಮ ಬೆಂಬಲ ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
    'home.cta.donate': 'ದಾನ ಮಾಡಿ',
    'home.cta.volunteer': 'ನಮ್ಮೊಂದಿಗೆ ಸ್ವಯಂಸೇವಕರಾಗಿ',
    'home.upcoming.title': 'ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು',
    'home.upcoming.description': 'ನಮ್ಮ ಇತ್ತೀಚಿನ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ನವೀಕರಿಸಿಕೊಳ್ಳಿ',
    
    // About
    'about.title': 'ಟಿಎಸ್ವಿಬಿ ಟ್ರಸ್ಟ್ ಬಗ್ಗೆ',
    'about.overview': 'ನಿಡಂಬೂರು ಬೀಡು ತ್ರಿಪುರಸುಂದರಿ ವಿಜಯ ಬಲ್ಲಾಳ್ ಟ್ರಸ್ಟ್ (ಆರ್) ನಮ್ಮ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ಸಂರಕ್ಷಿಸಲು ಮತ್ತು ವಿವಿಧ ಪರೋಪಕಾರಿ ಉಪಕ್ರಮಗಳ ಮೂಲಕ ಸಮುದಾಯವನ್ನು ಸೇವಿಸಲು ಬದ್ಧವಾಗಿದೆ.',
    'about.trustees.title': 'ನಮ್ಮ ಟ್ರಸ್ಟೀಗಳು',
    'about.trustees.president': 'ಡಾ. ಎನ್.ಬಿ. ವಿಜಯ ಬಲ್ಲಾಳ್ - ಅಧ್ಯಕ್ಷ',
    'about.trustees.secretary': 'ಡಾ. ಎನ್.ಬಿ. ನರೇಂದ್ರ ಬಲ್ಲಾಳ್ - ಕಾರ್ಯದರ್ಶಿ',
    'about.trustees.treasurer': 'ಡಾ. ಎನ್.ಬಿ. ಕಾವ್ಯ ಬಲ್ಲಾಳ್ - ಖಜಾಂಚಿ',
    
    // Newsletter
    'newsletter.title': 'ಸುದ್ದಿಪತ್ರಿಕೆ',
    'newsletter.subscribe': 'ನಮ್ಮ ಸುದ್ದಿಪತ್ರಿಕೆಗೆ ಚಂದಾದಾರರಾಗಿ',
    'newsletter.subscribe.description': 'ನಮ್ಮ ಇತ್ತೀಚಿನ ಸುದ್ದಿ ಮತ್ತು ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ನವೀಕರಿಸಿಕೊಳ್ಳಿ',
    'newsletter.archive': 'ಸುದ್ದಿಪತ್ರಿಕೆ ಆರ್ಕೈವ್',
    'newsletter.email.placeholder': 'ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ ನಮೂದಿಸಿ',
    'newsletter.subscribe.button': 'ಚಂದಾದಾರರಾಗಿ',
    
    // Awards
    'awards.title': 'ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳು',
    'awards.description': 'ಶ್ರೇಷ್ಠತೆಯನ್ನು ಗುರುತಿಸುವುದು ಮತ್ತು ನಮ್ಮ ಸಮುದಾಯದ ಸಾಧನೆಗಳನ್ನು ಆಚರಿಸುವುದು',
    
    // Legacy
    'legacy.title': 'ಬಲ್ಲಾಳರ ಪರಂಪರೆ',
    'legacy.description': 'ಬಲ್ಲಾಳ್ ಕುಟುಂಬದ ಪ್ರತಿಷ್ಠಿತ ವ್ಯಕ್ತಿಗಳನ್ನು ಗೌರವಿಸುವುದು',
    
    // Gallery
    'gallery.title': 'ಗ್ಯಾಲರಿ',
    'gallery.description': 'ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಆಚರಣೆಗಳಿಂದ ಸೆರೆಹಿಡಿದ ಕ್ಷಣಗಳು',
    
    // Donations
    'donations.title': 'ದಾನಗಳು ಮತ್ತು ಕೊಡುಗೆಗಳು',
    'donations.description': 'ನಮ್ಮ ಉದ್ದೇಶವನ್ನು ಬೆಂಬಲಿಸಿ ಮತ್ತು ಸಮುದಾಯಕ್ಕೆ ಉತ್ತಮ ಸೇವೆ ಸಲ್ಲಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡಿ',
    'donations.amount': 'ಮೊತ್ತ',
    'donations.name': 'ಪೂರ್ಣ ಹೆಸರು',
    'donations.email': 'ಇಮೇಲ್ ವಿಳಾಸ',
    'donations.phone': 'ಫೋನ್ ಸಂಖ್ಯೆ',
    'donations.address': 'ವಿಳಾಸ',
    'donations.public': 'ಈ ದಾನವನ್ನು ಸಾರ್ವಜನಿಕ ಮಾಡಿ',
    'donations.submit': 'ಈಗ ದಾನ ಮಾಡಿ',
    
    // Contact
    'contact.title': 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    'contact.description': 'ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ಬೆಂಬಲಕ್ಕಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    'contact.form.name': 'ಹೆಸರು',
    'contact.form.email': 'ಇಮೇಲ್',
    'contact.form.phone': 'ಫೋನ್',
    'contact.form.message': 'ಸಂದೇಶ',
    'contact.form.submit': 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    'contact.address': 'ವಿಳಾಸ',
    'contact.phone': 'ಫೋನ್',
    'contact.email': 'ಇಮೇಲ್',
    
    // Admin
    'admin.title': 'ನಿರ್ವಾಹಕ ಫಲಕ',
    'admin.login': 'ಲಾಗಿನ್',
    'admin.username': 'ಬಳಕೆದಾರ ಹೆಸರು',
    'admin.password': 'ಗುಪ್ತಪದ',
    'admin.dashboard': 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    'admin.gallery.upload': 'ಚಿತ್ರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    'admin.newsletter.manage': 'ಸುದ್ದಿಪತ್ರಿಕೆ ನಿರ್ವಹಣೆ',
    'admin.events.manage': 'ಕಾರ್ಯಕ್ರಮಗಳ ನಿರ್ವಹಣೆ',
    'admin.donations.reports': 'ದಾನ ವರದಿಗಳು',
    
    // Common
    'common.submit': 'ಸಲ್ಲಿಸಿ',
    'common.cancel': 'ರದ್ದುಮಾಡಿ',
    'common.save': 'ಉಳಿಸಿ',
    'common.edit': 'ಸಂಪಾದಿಸಿ',
    'common.delete': 'ಅಳಿಸಿ',
    'common.view': 'ವೀಕ್ಷಿಸಿ',
    'common.download': 'ಡೌನ್‌ಲೋಡ್',
    'common.upload': 'ಅಪ್‌ಲೋಡ್',
    'common.loading': 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
    'common.error': 'ದೋಷ ಸಂಭವಿಸಿದೆ',
    'common.success': 'ಯಶಸ್ಸು',
    'common.learn.more': 'ಹೆಚ್ಚು ತಿಳಿಯಿರಿ',
    'common.contact.us': 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    'footer.copyright': '© 2024 ಟಿಎಸ್ವಿಬಿ ಟ್ರಸ್ಟ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    'footer.location': 'ಅಂಬಾಲಾಪಾಡಿ, ಉಡುಪಿ - 576103',
    
    // Roots Spoken
    'roots.title': 'ಬೇರುಗಳ ಧ್ವನಿ',
    'roots.subtitle': 'ಬಾಲ್ಯದ ನೆನಪುಗಳು ಮತ್ತು ಕಥೆಗಳು',
    'roots.description': 'ನಮ್ಮ ಪರಂಪರೆಯನ್ನು ರೂಪಿಸಿದ ಮತ್ತು ನಮ್ಮ ಬೇರುಗಳಿಗೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುವ ಪ್ರೀತಿಯ ನೆನಪುಗಳು, ಕಥೆಗಳು ಮತ್ತು ಅನುಭವಗಳ ಸಂಗ್ರಹ.',
    'roots.story1.title': 'ಹಳೆಯ ಆಲದ ಮರ',
    'roots.story1.description': 'ನಮ್ಮ ಕುಟುಂಬದ ತಲೆಮಾರುಗಳಿಗೆ ಸಾಕ್ಷಿಯಾಗಿ ನಿಂತ ಪ್ರಾಚೀನ ಆಲದ ಮರದ ಕೆಳಗೆ ಹಂಚಿಕೊಂಡ ಕಥೆಗಳು.',
    'roots.story2.title': 'ಹಬ್ಬದ ಸಿದ್ಧತೆಗಳು',
    'roots.story2.description': 'ಇಡೀ ಸಮುದಾಯದೊಂದಿಗೆ ಸಾಂಪ್ರದಾಯಿಕ ಹಬ್ಬಗಳಿಗೆ ಸಿದ್ಧತೆ ಮಾಡುವ ಸಂತೋಷ ಮತ್ತು ಉತ್ಸಾಹ.',
    'roots.story3.title': 'ಅಜ್ಜಿಯ ಕಥೆಗಳು',
    'roots.story3.description': 'ತಲೆಮಾರುಗಳ ಕಥೆಯ ಮೂಲಕ ರವಾನಿಸಲಾದ ಕಾಲಾತೀತ ಬುದ್ಧಿವಂತಿಕೆ ಮತ್ತು ಜನಪದ ಕಥೆಗಳು.',
    'roots.story4.title': 'ದೇವಾಲಯ ಭೇಟಿಗಳು',
    'roots.story4.description': 'ಕುಟುಂಬದೊಂದಿಗೆ ನಿಯಮಿತ ದೇವಾಲಯ ಭೇಟಿಗಳ ಸಮಯದ ಪವಿತ್ರ ಕ್ಷಣಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಅನುಭವಗಳು.',
    'roots.story5.title': 'ಸುಗ್ಗಿಯ ನೆನಪುಗಳು',
    'roots.story5.description': 'ಸುಗ್ಗಿ ಋತುವಿನಲ್ಲಿ ಸಮೃದ್ಧಿ ಮತ್ತು ಸಮುದಾಯದ ಮನೋಭಾವದ ಆಚರಣೆ.',
    'roots.story6.title': 'ಸಂಪ್ರದಾಯಗಳ ಕಲಿಕೆ',
    'roots.story6.description': 'ಹಿರಿಯರಿಂದ ಸಾಂಸ್ಕೃತಿಕ ಅಭ್ಯಾಸಗಳು, ಹಾಡುಗಳು ಮತ್ತು ಆಚರಣೆಗಳನ್ನು ಕಲಿಯುವ ಪ್ರಕ್ರಿಯೆ.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'kn'>('en');

  const t = (key: string): string => {
    const translation = translations[language][key] || key;
    return translation;
  };

  // Add CSS class for proper text rendering based on language
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      if (language === 'kn') {
        document.body.classList.add('kannada-text');
        document.body.classList.remove('english-text');
      } else {
        document.body.classList.add('english-text');
        document.body.classList.remove('kannada-text');
      }
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};