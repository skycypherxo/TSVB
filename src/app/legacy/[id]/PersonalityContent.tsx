'use client'

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Crown, Star, Award, ArrowLeft, Calendar, MapPin, Heart, BookOpen, Users } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

interface PersonalityContentProps {
  personalityId: string;
}

const PersonalityContent: React.FC<PersonalityContentProps> = ({ personalityId }) => {
  const { t } = useLanguage();

  // Detailed personality data
  const personalityData: Record<string, any> = {
    'ballal-shetty': {
      name: 'Shri Ballal Shetty',
      title: 'Founder of the Ballal Legacy',
      period: '1850-1920',
      birthPlace: 'Ambalapady, Udupi',
      description: 'A visionary leader who established the foundations of the Ballal family traditions and community service. His far-sighted approach to community development laid the groundwork for generations of social service.',
      fullBio: 'Shri Ballal Shetty was born into a family of modest means but possessed an extraordinary vision for community development. He recognized early on that education and cultural preservation were key to the prosperity of his community. Through his tireless efforts, he established the first community school in the region and set up charitable institutions that continue to serve the community today.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200',
      achievements: [
        'Established the first community school in Ambalapady',
        'Founded multiple charitable institutions',
        'Promoted cultural preservation initiatives',
        'Created the foundation for the Ballal Trust',
        'Initiated community welfare programs'
      ],
      legacy: 'His vision of combining education with cultural preservation became the cornerstone of the Ballal family philosophy.',
      quote: 'Education and culture are the twin pillars upon which a strong community stands.'
    },
    'ballal-raghunath': {
      name: 'Dr. Ballal Raghunath',
      title: 'Pioneer in Education',
      period: '1890-1965',
      birthPlace: 'Udupi, Karnataka',
      description: 'Dedicated his life to educational advancement and social reform in the region. A true pioneer who believed in the transformative power of education.',
      fullBio: 'Dr. Ballal Raghunath was a renowned educator who revolutionized the educational landscape in the coastal Karnataka region. He was particularly passionate about women\'s education and scientific thinking, which was progressive for his time.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200',
      achievements: [
        'Established multiple educational institutions',
        'Advocated strongly for women\'s education',
        'Promoted scientific thinking and research',
        'Founded scholarship programs for underprivileged students',
        'Authored several educational texts',
        'Mentored hundreds of teachers'
      ],
      legacy: 'His progressive approach to education created opportunities for thousands of students, especially women.',
      quote: 'Knowledge knows no boundaries of gender, caste, or creed.'
    },
    'tripurasundari-ballal': {
      name: 'Smt. Tripurasundari Ballal',
      title: 'Cultural Patron',
      period: '1920-1995',
      birthPlace: 'Mangalore, Karnataka',
      description: 'A devoted patron of arts and culture, preserving traditional practices and supporting artists throughout her life.',
      fullBio: 'Smt. Tripurasundari Ballal was instrumental in preserving the rich cultural heritage of coastal Karnataka. She organized numerous cultural festivals and provided patronage to traditional artists.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200',
      achievements: [
        'Preserved traditional art forms like Yakshagana',
        'Supported local artists and craftspeople',
        'Organized annual cultural festivals',
        'Established cultural centers',
        'Documented traditional practices'
      ],
      legacy: 'Her efforts ensured that traditional art forms continued to thrive in the modern era.',
      quote: 'Culture is the soul of a community; preserve it, and the community thrives.'
    },
    'vijaya-ballal': {
      name: 'Dr. Vijaya Ballal',
      title: 'Modern Visionary & Current President',
      period: '1945-Present',
      birthPlace: 'Udupi, Karnataka',
      description: 'Current leader continuing the family legacy with modern approaches to community service and trust management.',
      fullBio: 'Dr. Vijaya Ballal represents the modern face of the Ballal legacy, successfully combining traditional values with contemporary methods of community service.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200',
      achievements: [
        'Modernized trust operations and governance',
        'Expanded community programs significantly',
        'Integrated technology in service delivery',
        'Established healthcare initiatives',
        'Created youth development programs',
        'Strengthened cultural preservation efforts'
      ],
      legacy: 'Leading the trust into the digital age while maintaining its core values and mission.',
      quote: 'Tradition and innovation must walk hand in hand for sustainable progress.'
    },
    'narendra-ballal': {
      name: 'Dr. N.B. Narendra Ballal',
      title: 'Secretary & Trustee',
      period: '1970-Present',
      birthPlace: 'Ambalapady, Udupi',
      description: 'Dedicated trustee managing organizational affairs and community programs with exceptional administrative skills.',
      fullBio: 'Dr. N.B. Narendra Ballal has been the backbone of the trust\'s administrative operations, ensuring smooth functioning and effective program implementation.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200',
      achievements: [
        'Streamlined trust administration',
        'Implemented transparent governance',
        'Managed community outreach programs',
        'Established partnerships with other organizations'
      ],
      legacy: 'His administrative excellence has enabled the trust to scale its impact effectively.',
      quote: 'Good administration is the foundation upon which great service is built.'
    },
    'kavya-ballal': {
      name: 'Dr. N.B. Kavya Ballal',
      title: 'Treasurer & Trustee',
      period: '1980-Present',
      birthPlace: 'Udupi, Karnataka',
      description: 'Financial steward ensuring sustainable growth and transparent operations of the trust.',
      fullBio: 'Dr. N.B. Kavya Ballal has been instrumental in maintaining the financial health and transparency of the trust operations.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200',
      achievements: [
        'Established transparent financial systems',
        'Ensured sustainable funding models',
        'Implemented cost-effective programs'
      ],
      legacy: 'Her financial stewardship has ensured the trust\'s long-term sustainability.',
      quote: 'Financial transparency builds community trust and enables greater impact.'
    }
  };

  const personality = personalityData[personalityId];

  if (!personality) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Personality Not Found</h1>
          <Link href="/legacy" className="btn-primary">
            Back to Legacy
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-800 text-white py-20 overflow-hidden">
        <CulturalPattern className="text-golden-400 opacity-10" />
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-golden-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-maroon-400/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <Link 
            href="/legacy"
            className="inline-flex items-center text-golden-200 hover:text-golden-100 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Legacy
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fadeInUp">
              <div className="flex items-center mb-4">
                <Crown className="w-8 h-8 text-golden-400 mr-3" />
                <span className="text-golden-200 font-medium">{personality.title}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-gold">
                {personality.name}
              </h1>
              
              <p className="text-xl text-golden-100 mb-6 leading-relaxed">
                {personality.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center text-golden-200">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{personality.period}</span>
                </div>
                <div className="flex items-center text-golden-200">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{personality.birthPlace}</span>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-golden-400 pl-6 italic text-golden-100 text-lg">
                "{personality.quote}"
              </blockquote>
            </div>
            
            {/* Image */}
            <div className="animate-fadeInScale">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-gold rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src={personality.image}
                  alt={personality.name}
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/30 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-elegant rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text-maroon mb-8">
                Biography
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="text-xl mb-6">{personality.fullBio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text-gold mb-6">
                Key Achievements
              </h2>
              <div className="w-24 h-1 bg-gradient-maroon mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personality.achievements.map((achievement: string, index: number) => (
                <div
                  key={index}
                  className="card-elegant rounded-2xl p-6 animate-fadeInScale"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <Star className="w-4 h-4 text-maroon-900" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                      {achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-elegant rounded-3xl p-8 md:p-12">
              <div className="w-16 h-16 bg-gradient-maroon rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold gradient-text-gold mb-6">
                Lasting Legacy
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {personality.legacy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-900"></div>
        <CulturalPattern className="absolute inset-0 text-golden-400/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text-gold mb-6">
              Continue Their Vision
            </h2>
            <p className="text-xl text-golden-100 mb-8 leading-relaxed">
              Honor their legacy by contributing to our ongoing mission of community service and cultural preservation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-secondary group">
                <span className="flex items-center">
                  Get Involved
                  <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </span>
              </Link>
              <Link href="/donations" className="btn-outline border-golden-300 text-golden-300 hover:bg-golden-300 hover:text-maroon-900 group">
                <span className="flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Work
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalityContent;
