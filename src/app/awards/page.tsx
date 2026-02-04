'use client'

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Calendar, Users, Heart, Star, Trophy } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

const AwardsPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeAwardTab, setActiveAwardTab] = useState<'shree' | 'ballal'>('shree');
  const [activeNidambooruYear, setActiveNidambooruYear] = useState('2026');
  const [activeBallalYear, setActiveBallalYear] = useState('2026');

  // Nidambooru-Shree Awards data organized by year
  const nidambooruShreeAwards: Record<string, Array<{
    name: string;
    title: string;
    description: string;
    date: string;
    image: string;
    presentedBy: string;
  }>> = {
    '2026': [
      {
        name: 'Shri K. Srinivasa Hegde',
        title: 'Advocate & Eminent Social Worker',
        description: 'This year, the Nidambooru Beedu Shree Award was awarded to Shri K. Srinivasa Hegde, the elder son of Shri Tonse Bhojaraja Hegde and Smt. Sundari Bhojaraja Hegde, born on 10.05.1953. He completed his Bachelor of Law degree from Udupi Vaikunta Baliga Law College and has been practicing at the District Court of Udupi since 1985. Over the years, Shri K. Srinivasa Hegde has rendered dedicated service to numerous religious institutions and has made significant contributions to a wide range of social and community-oriented activities, consistently working for the welfare of society. In recognition of his leadership and commitment to community service, he is currently serving as the Honorary President of Nidambooru Yuvaka Mandala.',
        date: '31st January 2026',
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Aw1.jpeg`,
        presentedBy: 'Dr. N. B. Vijaya Ballal, President, T.S.V.B Trust, Nidambooru Beedu, Ambalpady',
      },
    ],
  };

  // Nidambooru Beedu Ballal Awards data organized by year
  const nidambooruBallalAwards: Record<string, Array<{
    name: string;
    title: string;
    description: string;
    date: string;
    image: string;
    presentedBy: string;
  }>> = {
    '2026': [
      {
        name: 'Shri Brahma Baidarkala Yakshagana Kala Mandali',
        title: 'Bolje, Udyavara',
        description: 'This year, the award has been bestowed upon Shri Brahma Baidarkala Yakshagana Kala Mandali, Bolje, Udyavara, in recognition of its dedicated service and significant contribution to the rich tradition of Yakshagana. The institution was founded on 17 November 1985 by Shri Sundar Kotian. Under the leadership of Tonse Jayanth Kumar, structured Yakshagana classes were initiated, and activities such as Yakshagana Tala–Maddale, Yakshagana Harikathe, and stage performances were actively promoted. Over the years, the Mandali has nurtured more than 200 performers and has successfully presented over 100 programmes, playing a vital role in preserving and propagating this classical folk art.',
        date: '2026',
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/Aw2.jpeg`,
        presentedBy: 'Dr. N. B. Vijaya Ballal, President, T.S.V.B Trust, Nidambooru Beedu, Ambalpady',
      },
    ],
  };

  const nidambooruYears = Object.keys(nidambooruShreeAwards).sort((a, b) => parseInt(b) - parseInt(a));
  const ballalYears = Object.keys(nidambooruBallalAwards).sort((a, b) => parseInt(b) - parseInt(a));

  const awards = [
    {
      title: 'Excellence in Cultural Preservation Award',
      year: '2023',
      category: 'Cultural Heritage',
      description: 'Recognized for outstanding efforts in preserving and promoting local cultural traditions.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Community Service Excellence',
      year: '2022',
      category: 'Social Service',
      description: 'Honored for exceptional community service and social welfare initiatives.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: 'Educational Impact Award',
      year: '2022',
      category: 'Education',
      description: 'Acknowledged for significant contributions to educational development in the region.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: 'Heritage Conservation Recognition',
      year: '2021',
      category: 'Conservation',
      description: 'Appreciated for efforts in conserving historical sites and cultural artifacts.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Trophy className="w-6 h-6" />,
    },
  ];

  const activities = [
    {
      title: 'Annual Cultural Festival',
      date: 'March 2024',
      description: 'A grand celebration of traditional arts, music, and dance featuring local artists.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      participants: '500+',
      type: 'Cultural Event',
    },
    {
      title: 'Educational Scholarship Program',
      date: 'January 2024',
      description: 'Providing scholarships to deserving students from underprivileged backgrounds.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      participants: '50',
      type: 'Education',
    },
    {
      title: 'Community Health Camp',
      date: 'December 2023',
      description: 'Free medical checkups and health awareness programs for local communities.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      participants: '300+',
      type: 'Healthcare',
    },
    {
      title: 'Heritage Documentation Project',
      date: 'November 2023',
      description: 'Documenting and preserving local history, traditions, and family genealogies.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      participants: '100+',
      type: 'Documentation',
    },
    {
      title: 'Women Empowerment Workshop',
      date: 'October 2023',
      description: 'Skills development and entrepreneurship training for women in the community.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      participants: '75',
      type: 'Empowerment',
    },
    {
      title: 'Environmental Conservation Drive',
      date: 'September 2023',
      description: 'Tree plantation and environmental awareness campaign in collaboration with local schools.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      participants: '200+',
      type: 'Environment',
    },
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-800 text-white py-20 overflow-hidden">
        <CulturalPattern className="text-golden-400" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-golden-200 bg-clip-text text-transparent">
              {t('awards.title')}
            </h1>
            <p className="text-xl md:text-2xl text-golden-100 leading-relaxed">
              {t('awards.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
              Our Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Celebrating the recognition we've received for our dedication to cultural preservation and community service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-golden-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-maroon-700 dark:bg-golden-600 rounded-full p-3 text-white">
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-maroon-700 dark:bg-golden-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {award.year}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {award.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-maroon-900 dark:text-white mb-3">
                      {award.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Award Tabs Section */}
      <section className="py-20 bg-gradient-to-br from-maroon-50 to-golden-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          {/* Main Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-xl border-2 border-golden-300 dark:border-golden-600">
              <button
                onClick={() => setActiveAwardTab('shree')}
                className={`px-8 py-3 rounded-full font-bold text-base transition-all duration-300 ${
                  activeAwardTab === 'shree'
                    ? 'bg-gradient-to-r from-maroon-700 to-maroon-600 text-white shadow-lg scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                🏅 Nidambooru Beedu Shree Award
              </button>
              <button
                onClick={() => setActiveAwardTab('ballal')}
                className={`px-8 py-3 rounded-full font-bold text-base transition-all duration-300 ${
                  activeAwardTab === 'ballal'
                    ? 'bg-gradient-to-r from-golden-600 to-golden-500 text-white shadow-lg scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                🏆 Nidambooru Beedu Ballal Award
              </button>
            </div>
          </div>

          {/* Nidambooru-Shree Awards Tab Content */}
          {activeAwardTab === 'shree' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-12">
                <div className="inline-block bg-maroon-900 dark:bg-golden-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  ✨ Special Recognition
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
                  Nidambooru Beedu Shree Awards
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                 In sacred remembrance of Late Shri N. B. Annaji Ballal of Nidambooru Beedu, and with the divine blessings of Shri Rajarajeshwari Devi of Nidambooru Beedu, Kula Devata Shri Janardana Swamy, and Shri Mahakali Devi, the “Nidambooru-Shree Award” is conferred annually upon individuals who have rendered exemplary service to society through their dedicated contributions in the fields of social service, education, healthcare, and other humanitarian and community welfare activities, thereby creating a meaningful and lasting impact on society.
                </p>
              </div>

              {/* Year Tabs */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
                  {nidambooruYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setActiveNidambooruYear(year)}
                      className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                        activeNidambooruYear === year
                          ? 'bg-maroon-700 text-white shadow-md'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Award Cards for Selected Year */}
              <div className="space-y-8">
                {nidambooruShreeAwards[activeNidambooruYear]?.map((awardee, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-golden-200 dark:border-golden-600"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative h-80 lg:h-auto">
                        <img
                          src={awardee.image}
                          alt={`Nidambooru Beedu Shree Award ${activeNidambooruYear} - ${awardee.name}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-golden-600 text-white px-4 py-2 rounded-lg inline-block">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            {awardee.date}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 lg:p-10 flex flex-col justify-center">
                        <div className="mb-4">
                          <span className="bg-maroon-100 dark:bg-maroon-900 text-maroon-800 dark:text-golden-400 px-3 py-1 rounded-full text-sm font-medium">
                            Nidambooru Beedu Shree Award {activeNidambooruYear}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-maroon-900 dark:text-white mb-2">
                          {awardee.name}
                        </h3>
                        <p className="text-golden-600 dark:text-golden-400 font-medium mb-4">
                          {awardee.title}
                        </p>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {awardee.description}
                        </p>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                          <p className="text-sm text-maroon-700 dark:text-golden-400 font-medium">
                            — {awardee.presentedBy}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nidambooru Beedu Ballal Awards Tab Content */}
          {activeAwardTab === 'ballal' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-12">
                <div className="inline-block bg-golden-600 dark:bg-maroon-700 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  🏆 Cultural Excellence
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
                  Nidambooru Beedu Ballal Award
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                 The Nidambooru Beedu Ballal Award is given annually in loving memory of Late Shri Annaji Ballal. It honours individuals or organisations that have made a significant contribution to the arts, culture and society, celebrating excellence, community service and cultural preservation.
                </p>
              </div>

              {/* Year Tabs */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 shadow-lg">
                  {ballalYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setActiveBallalYear(year)}
                      className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                        activeBallalYear === year
                          ? 'bg-golden-600 text-white shadow-md'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Award Cards for Selected Year */}
              <div className="space-y-8">
                {nidambooruBallalAwards[activeBallalYear]?.map((awardee, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl overflow-hidden border border-maroon-200 dark:border-maroon-600"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative h-80 lg:h-auto min-h-[320px]">
                        <img
                          src={awardee.image}
                          alt={`Nidambooru Beedu Ballal Award ${activeBallalYear} - ${awardee.name}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-maroon-700 text-white px-4 py-2 rounded-lg inline-block">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            {awardee.date}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 lg:p-10 flex flex-col justify-center">
                        <div className="mb-4">
                          <span className="bg-golden-100 dark:bg-golden-900 text-golden-800 dark:text-golden-300 px-3 py-1 rounded-full text-sm font-medium">
                            Nidambooru Beedu Ballal Award {activeBallalYear}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-maroon-900 dark:text-white mb-2">
                          {awardee.name}
                        </h3>
                        <p className="text-maroon-600 dark:text-maroon-400 font-medium mb-4">
                          {awardee.title}
                        </p>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {awardee.description}
                        </p>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                          <p className="text-sm text-maroon-700 dark:text-golden-400 font-medium">
                            — {awardee.presentedBy}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-maroon-900 dark:text-golden-400 mb-4">
              Recent Activities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our ongoing initiatives and community activities that make a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-golden-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {activity.type}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{activity.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-maroon-900 dark:text-white mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-maroon-700 dark:text-golden-400">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{activity.participants} participants</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-maroon-900 dark:bg-maroon-950 text-white relative overflow-hidden">
        <CulturalPattern className="text-golden-400" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to the community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                10+
              </div>
              <p className="text-lg text-gray-300">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                500+
              </div>
              <p className="text-lg text-gray-300">Families Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                50+
              </div>
              <p className="text-lg text-gray-300">Events Organized</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-400 mb-2">
                15+
              </div>
              <p className="text-lg text-gray-300">Awards Received</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;