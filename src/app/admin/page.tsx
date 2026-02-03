'use client'

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Lock, User, Eye, EyeOff, Shield, BarChart3, Users, FileText, Image, Calendar, DollarSign } from 'lucide-react';
import CulturalPattern from '@/components/CulturalPattern';

const AdminPage: React.FC = () => {
  const { t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login - in production, this would be properly authenticated
    if (loginData.username === 'admin' && loginData.password === 'tsvb2024') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Demo: username: admin, password: tsvb2024');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const dashboardStats = [
    {
      title: 'Total Donations',
      value: '₹2,50,000',
      change: '+12%',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'bg-green-500'
    },
    {
      title: 'Active Members',
      value: '1,250',
      change: '+5%',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Events This Month',
      value: '8',
      change: '+2',
      icon: <Calendar className="w-8 h-8" />,
      color: 'bg-purple-500'
    },
    {
      title: 'Newsletter Subscribers',
      value: '850',
      change: '+18%',
      icon: <FileText className="w-8 h-8" />,
      color: 'bg-orange-500'
    }
  ];

  const recentActivities = [
    { action: 'New donation received', user: 'Rajesh Kumar', amount: '₹5,000', time: '2 hours ago' },
    { action: 'Newsletter sent', user: 'System', amount: '850 recipients', time: '1 day ago' },
    { action: 'Event created', user: 'Admin', amount: 'Cultural Festival', time: '2 days ago' },
    { action: 'Gallery updated', user: 'Admin', amount: '15 new photos', time: '3 days ago' },
    { action: 'New member registered', user: 'Priya Sharma', amount: 'Volunteer', time: '4 days ago' }
  ];

  const managementSections = [
    {
      title: 'Gallery Management',
      description: 'Upload and manage gallery images',
      icon: <Image className="w-6 h-6" />,
      action: 'Manage Gallery'
    },
    {
      title: 'Newsletter Management',
      description: 'Create and send newsletters',
      icon: <FileText className="w-6 h-6" />,
      action: 'Manage Newsletter'
    },
    {
      title: 'Event Management',
      description: 'Create and manage events',
      icon: <Calendar className="w-6 h-6" />,
      action: 'Manage Events'
    },
    {
      title: 'User Management',
      description: 'Manage users and permissions',
      icon: <Users className="w-6 h-6" />,
      action: 'Manage Users'
    },
    {
      title: 'Donation Reports',
      description: 'View donation analytics and reports',
      icon: <BarChart3 className="w-6 h-6" />,
      action: 'View Reports'
    },
    {
      title: 'Content Management',
      description: 'Update website content and pages',
      icon: <FileText className="w-6 h-6" />,
      action: 'Manage Content'
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="py-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maroon-900 via-maroon-800 to-golden-800 text-white py-20 overflow-hidden">
          <CulturalPattern className="text-golden-400" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-golden-200 bg-clip-text text-transparent">
                {t('admin.title')}
              </h1>
              <p className="text-xl md:text-2xl text-golden-100 leading-relaxed">
                Secure access to trust management system
              </p>
            </div>
          </div>
        </section>

        {/* Login Form */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <div className="bg-maroon-700 dark:bg-golden-600 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-maroon-900 dark:text-golden-400 mb-2">
                    Admin Login
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Enter your credentials to access the admin panel
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-maroon-900 dark:text-white mb-2">
                      {t('admin.username')}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500"
                        placeholder="Enter username"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-maroon-900 dark:text-white mb-2">
                      {t('admin.password')}
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-maroon-500"
                        placeholder="Enter password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-maroon-700 dark:bg-golden-600 hover:bg-maroon-800 dark:hover:bg-golden-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {t('admin.login')}
                  </button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Demo Credentials:</strong><br />
                    Username: admin<br />
                    Password: tsvb2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-maroon-900 to-golden-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {t('admin.dashboard')}
              </h1>
              <p className="text-golden-200">
                Welcome back, Admin. Here's what's happening with your trust.
              </p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} text-white rounded-lg p-3`}>
                    {stat.icon}
                  </div>
                  <span className="text-green-600 text-sm font-medium">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Sections */}
      <section className="py-12 bg-gradient-to-br from-golden-50 to-maroon-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-maroon-900 dark:text-golden-400 mb-8">
            Management Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementSections.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-maroon-700 dark:text-golden-400 mb-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-maroon-900 dark:text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {section.description}
                </p>
                <button className="bg-maroon-700 dark:bg-golden-600 hover:bg-maroon-800 dark:hover:bg-golden-700 text-white px-4 py-2 rounded-lg transition-colors">
                  {section.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-maroon-900 dark:text-golden-400 mb-8">
            Recent Activities
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      by {activity.user} • {activity.amount}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;