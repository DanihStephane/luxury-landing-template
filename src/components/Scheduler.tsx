import React, { useState } from 'react';
import { Calendar, Clock, Plus, Edit, Trash2, Share2, ChevronLeft, ChevronRight, TrendingUp, Users, Target, Zap } from 'lucide-react';

export default function Scheduler() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');

  const scheduledPosts = [
    {
      id: 1,
      title: 'Guide Complet : Marketing IA 2024',
      platform: 'LinkedIn',
      date: '2024-01-15',
      time: '09:00',
      status: 'scheduled',
      icon: '💼',
      type: 'Article',
      estimated_reach: 15000,
      engagement_score: 92,
      optimal_time: true
    },
    {
      id: 2,
      title: 'Vidéo Virale : Productivité Tips',
      platform: 'TikTok',
      date: '2024-01-15',
      time: '14:30',
      status: 'scheduled',
      icon: '🎵',
      type: 'Vidéo',
      estimated_reach: 45000,
      engagement_score: 87,
      optimal_time: true
    },
    {
      id: 3,
      title: 'Thread : Secrets Business IA',
      platform: 'Twitter',
      date: '2024-01-16',
      time: '11:00',
      status: 'scheduled',
      icon: '🐦',
      type: 'Thread',
      estimated_reach: 8500,
      engagement_score: 89,
      optimal_time: false
    },
    {
      id: 4,
      title: 'YouTube Short : Mindset Winner',
      platform: 'YouTube',
      date: '2024-01-17',
      time: '16:00',
      status: 'scheduled',
      icon: '📺',
      type: 'Short',
      estimated_reach: 25000,
      engagement_score: 94,
      optimal_time: true
    },
    {
      id: 5,
      title: 'Carrousel : Tips Entrepreneur',
      platform: 'Instagram',
      date: '2024-01-18',
      time: '12:00',
      status: 'scheduled',
      icon: '📸',
      type: 'Carrousel',
      estimated_reach: 12000,
      engagement_score: 85,
      optimal_time: true
    }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const getPostsForDate = (date: Date | null) => {
    if (!date) return [];
    const dateStr = date.toISOString().split('T')[0];
    return scheduledPosts.filter(post => post.date === dateStr);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getTotalStats = () => {
    const totalPosts = scheduledPosts.length;
    const totalReach = scheduledPosts.reduce((sum, post) => sum + post.estimated_reach, 0);
    const avgEngagement = scheduledPosts.reduce((sum, post) => sum + post.engagement_score, 0) / totalPosts;
    const optimalPosts = scheduledPosts.filter(post => post.optimal_time).length;
    
    return { totalPosts, totalReach, avgEngagement, optimalPosts };
  };

  const stats = getTotalStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header moderne */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-6">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Planificateur Intelligent</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Planification Optimisée
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Programmez vos contenus aux moments optimaux pour maximiser votre portée. 
            <span className="font-semibold text-purple-600"> IA prédictive intégrée.</span>
          </p>
        </div>

        {/* Stats rapides */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Posts programmés</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalPosts}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Portée estimée</p>
                <p className="text-3xl font-bold text-gray-900">{(stats.totalReach / 1000).toFixed(0)}k</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Score engagement</p>
                <p className="text-3xl font-bold text-gray-900">{stats.avgEngagement.toFixed(0)}%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Timing optimal</p>
                <p className="text-3xl font-bold text-gray-900">{stats.optimalPosts}/{stats.totalPosts}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar - Plus large */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
              {/* Calendar Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {currentDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                  </h2>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => navigateMonth('prev')}
                      className="p-3 text-gray-600 hover:text-purple-600 transition-colors rounded-xl hover:bg-purple-50"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => navigateMonth('next')}
                      className="p-3 text-gray-600 hover:text-purple-600 transition-colors rounded-xl hover:bg-purple-50"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="p-8">
                {/* Days of week header */}
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(day => (
                    <div key={day} className="p-3 text-center text-sm font-semibold text-gray-600">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-2">
                  {getDaysInMonth(currentDate).map((date, index) => {
                    const posts = getPostsForDate(date);
                    const isSelected = date && selectedDate.toDateString() === date.toDateString();
                    const isToday = date && new Date().toDateString() === date.toDateString();
                    
                    return (
                      <button
                        key={index}
                        onClick={() => date && setSelectedDate(date)}
                        className={`p-3 min-h-[100px] border-2 rounded-xl hover:shadow-md transition-all duration-200 ${
                          isSelected ? 'border-purple-500 bg-purple-50 shadow-lg' :
                          isToday ? 'border-blue-500 bg-blue-50' :
                          !date ? 'opacity-0 cursor-default border-transparent' : 
                          'border-gray-200 hover:border-purple-300'
                        }`}
                        disabled={!date}
                      >
                        {date && (
                          <div className="text-left h-full">
                            <div className={`text-sm font-semibold mb-2 ${
                              isSelected ? 'text-purple-600' :
                              isToday ? 'text-blue-600' :
                              'text-gray-900'
                            }`}>
                              {date.getDate()}
                            </div>
                            <div className="space-y-1">
                              {posts.slice(0, 2).map(post => (
                                <div key={post.id} className={`text-xs px-2 py-1 rounded-md truncate ${
                                  post.optimal_time ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                                }`}>
                                  {post.icon} {post.time}
                                </div>
                              ))}
                              {posts.length > 2 && (
                                <div className="text-xs text-gray-500 font-medium">
                                  +{posts.length - 2} plus
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Actions rapides</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>Nouveau post</span>
                </button>
                <button className="w-full border-2 border-gray-200 text-gray-700 py-4 px-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-purple-300 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Optimisation IA</span>
                </button>
                <button className="w-full border-2 border-gray-200 text-gray-700 py-4 px-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-purple-300 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Vue planning</span>
                </button>
              </div>
            </div>

            {/* Selected Date Posts */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {formatDate(selectedDate)}
              </h3>
              
              <div className="space-y-4">
                {getPostsForDate(selectedDate).length > 0 ? (
                  getPostsForDate(selectedDate).map(post => (
                    <div key={post.id} className="border-2 border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{post.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{post.title}</h4>
                            <p className="text-gray-600 text-xs">{post.platform} • {post.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <button className="p-1 text-gray-600 hover:text-purple-600 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-600 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Métriques prédictives */}
                      <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                        <div className="text-center bg-gray-50 rounded-lg p-2">
                          <div className="font-semibold text-gray-900">{(post.estimated_reach / 1000).toFixed(0)}k</div>
                          <div className="text-gray-600">Portée</div>
                        </div>
                        <div className="text-center bg-gray-50 rounded-lg p-2">
                          <div className="font-semibold text-purple-600">{post.engagement_score}%</div>
                          <div className="text-gray-600">Score</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                          post.optimal_time ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                        }`}>
                          {post.optimal_time ? '✅ Timing optimal' : '⚠️ Timing à optimiser'}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                    <p className="text-sm">Aucune publication programmée</p>
                    <button className="mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium">
                      + Ajouter un post
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}