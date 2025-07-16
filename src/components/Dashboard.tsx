import React from 'react';
import { TrendingUp, Clock, CheckCircle, Zap, Video, FileText, Share2, Sparkles, Users, Eye, BarChart3, Calendar, ArrowUpRight, Play } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { 
      label: 'Contenus générés', 
      value: '2,847', 
      change: '+23%',
      icon: FileText, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50',
      gradient: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'Vidéos créées', 
      value: '1,289', 
      change: '+45%',
      icon: Video, 
      color: 'text-purple-600', 
      bg: 'bg-purple-50',
      gradient: 'from-purple-500 to-purple-600'
    },
    { 
      label: 'Publications programmées', 
      value: '456', 
      change: '+12%',
      icon: Clock, 
      color: 'text-orange-600', 
      bg: 'bg-orange-50',
      gradient: 'from-orange-500 to-orange-600'
    },
    { 
      label: 'Taux d\'engagement', 
      value: '94.2%', 
      change: '+8%',
      icon: TrendingUp, 
      color: 'text-green-600', 
      bg: 'bg-green-50',
      gradient: 'from-green-500 to-green-600'
    },
  ];

  const recentContent = [
    { 
      id: 1, 
      title: 'Guide Complet : IA et Entrepreneuriat 2024', 
      platform: 'LinkedIn', 
      status: 'Publié', 
      engagement: '12.3k vues • 456 likes • 89 commentaires',
      type: 'Article',
      thumbnail: '💼',
      performance: 'excellent',
      reach: '12.3k',
      ctr: '4.2%'
    },
    { 
      id: 2, 
      title: 'Vidéo TikTok - 5 Astuces Productivité IA', 
      platform: 'TikTok', 
      status: 'Programmé', 
      date: 'Aujourd\'hui 14h30',
      type: 'Vidéo',
      thumbnail: '🎵',
      performance: 'prévu',
      estimated_reach: '25k',
      viral_score: '87%'
    },
    { 
      id: 3, 
      title: 'Thread Twitter - Révolution IA Business', 
      platform: 'Twitter', 
      status: 'Brouillon', 
      engagement: 'En cours d\'optimisation',
      type: 'Thread',
      thumbnail: '🐦',
      performance: 'draft',
      seo_score: '92%'
    },
    { 
      id: 4, 
      title: 'YouTube Short - Mindset Entrepreneur', 
      platform: 'YouTube', 
      status: 'En cours', 
      progress: '75%',
      type: 'Short',
      thumbnail: '📺',
      performance: 'processing',
      estimated_views: '50k'
    },
    { 
      id: 5, 
      title: 'Carrousel Instagram - Tips Marketing', 
      platform: 'Instagram', 
      status: 'Publié', 
      engagement: '8.9k vues • 234 likes • 45 commentaires',
      type: 'Carrousel',
      thumbnail: '📸',
      performance: 'good',
      reach: '8.9k',
      saves: '156'
    },
  ];

  const platformStats = [
    { platform: 'LinkedIn', posts: 45, engagement: '94%', reach: '125k', color: 'bg-blue-500' },
    { platform: 'TikTok', posts: 32, engagement: '87%', reach: '89k', color: 'bg-pink-500' },
    { platform: 'Twitter', posts: 78, engagement: '91%', reach: '67k', color: 'bg-black' },
    { platform: 'YouTube', posts: 23, engagement: '96%', reach: '156k', color: 'bg-red-500' },
    { platform: 'Instagram', posts: 56, engagement: '89%', reach: '98k', color: 'bg-purple-500' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Publié': return 'bg-green-100 text-green-700 border-green-200';
      case 'Programmé': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'En cours': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPerformanceIcon = (performance: string) => {
    switch (performance) {
      case 'excellent': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'good': return <ArrowUpRight className="w-4 h-4 text-blue-500" />;
      case 'processing': return <Play className="w-4 h-4 text-orange-500" />;
      default: return <Eye className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section Moderne */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Dashboard Analytics</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Bonjour! Prêt à dominer les réseaux? 🚀
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Votre contenu IA génère des résultats exceptionnels. 
            <span className="font-semibold text-purple-600"> Continuez sur cette lancée!</span>
          </p>
        </div>

        {/* Quick Action Card */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-3xl p-8 mb-12 text-white shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">Génération Express ⚡</h3>
              <p className="text-purple-100 mb-6 text-lg">
                Créez 10 posts optimisés pour toutes vos plateformes en moins de 60 secondes
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <Zap className="w-5 h-5" />
                  <span>Commencer maintenant</span>
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Voir les analytics</span>
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-16 h-16 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid Amélioré */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 ${stat.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className={`px-3 py-1 bg-gradient-to-r ${stat.gradient} text-white text-xs font-semibold rounded-full`}>
                  {stat.change}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Content - Plus large */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-purple-600" />
                    <span>Contenus récents</span>
                  </h2>
                  <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
                    Voir tout →
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {recentContent.map((content) => (
                  <div key={content.id} className="p-6 hover:bg-gray-50/50 transition-colors group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                          {content.thumbnail}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                            {content.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center space-x-1">
                              <Share2 className="w-4 h-4" />
                              <span>{content.platform}</span>
                            </span>
                            <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">
                              {content.type}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            {content.engagement || content.date || `Progression: ${content.progress}`}
                          </div>
                          
                          {/* Métriques détaillées */}
                          {content.reach && (
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                              <span>👁️ {content.reach}</span>
                              {content.ctr && <span>📊 CTR {content.ctr}</span>}
                              {content.saves && <span>💾 {content.saves} saves</span>}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {getPerformanceIcon(content.performance)}
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(content.status)}`}>
                          {content.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance par plateforme */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                <span>Performance par plateforme</span>
              </h3>
              <div className="space-y-4">
                {platformStats.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${platform.color} rounded-full`}></div>
                      <span className="font-medium text-gray-900">{platform.platform}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">{platform.engagement}</div>
                      <div className="text-xs text-gray-500">{platform.reach}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span>Statistiques rapides</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Posts ce mois</span>
                  <span className="font-bold text-2xl text-gray-900">234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Programmés</span>
                  <span className="font-bold text-2xl text-blue-600">45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Publiés</span>
                  <span className="font-bold text-2xl text-green-600">189</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Engagement moyen</span>
                  <span className="font-bold text-2xl text-purple-600">91.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Portée totale</span>
                  <span className="font-bold text-2xl text-orange-600">2.1M</span>
                </div>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Actions rapides</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Nouveau contenu</span>
                </button>
                <button className="w-full border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 hover:border-purple-300 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Planifier</span>
                </button>
                <button className="w-full border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 hover:border-purple-300 transition-all duration-200 flex items-center justify-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>Analytics</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}