import React, { useState } from 'react';
import { Search, Filter, Grid3X3, List, Download, Share2, Edit, Calendar, Eye, TrendingUp, BarChart3, Clock, Star } from 'lucide-react';

export default function ContentLibrary() {
  const [viewMode, setViewMode] = useState('grid');
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const mockContent = [
    {
      id: 1,
      title: 'Guide Complet : Stratégies Marketing Digital 2024',
      platform: 'LinkedIn',
      type: 'Article',
      date: '2024-01-15',
      status: 'published',
      engagement: '12.3k vues • 456 likes • 89 commentaires',
      thumbnail: '💼',
      preview: 'Les 10 stratégies marketing qui vont dominer 2024. Découvrez comment l\'IA révolutionne...',
      performance: 'excellent',
      reach: 12300,
      engagement_rate: 4.2,
      saves: 234,
      shares: 89,
      ctr: 3.8,
      tags: ['Marketing', 'IA', 'Stratégie']
    },
    {
      id: 2,
      title: 'Vidéo Virale : Productivité avec l\'IA',
      platform: 'TikTok',
      type: 'Vidéo',
      date: '2024-01-14',
      status: 'scheduled',
      engagement: 'Programmé pour aujourd\'hui 14h30',
      thumbnail: '🤖',
      preview: 'Comment l\'IA peut transformer votre workflow quotidien en 5 étapes simples',
      performance: 'predicted',
      estimated_reach: 25000,
      viral_score: 87,
      estimated_engagement: 15.2,
      tags: ['Productivité', 'IA', 'Tips']
    },
    {
      id: 3,
      title: 'Thread Viral : Secrets Entrepreneuriat',
      platform: 'Twitter',
      type: 'Thread',
      date: '2024-01-13',
      status: 'draft',
      engagement: 'Brouillon - Optimisation en cours',
      thumbnail: '🚀',
      preview: '10 leçons apprises en créant ma startup de 0 à 1M€. Thread complet avec exemples...',
      performance: 'draft',
      seo_score: 92,
      readability: 95,
      tags: ['Entrepreneuriat', 'Startup', 'Business']
    },
    {
      id: 4,
      title: 'YouTube Short : Mindset de Succès',
      platform: 'YouTube',
      type: 'Short',
      date: '2024-01-12',
      status: 'published',
      engagement: '45.2k vues • 2.1k likes • 156 commentaires',
      thumbnail: '🎯',
      preview: 'La différence entre les entrepreneurs qui réussissent et les autres en 60 secondes',
      performance: 'viral',
      reach: 45200,
      engagement_rate: 8.7,
      retention: 78,
      tags: ['Mindset', 'Motivation', 'Succès']
    },
    {
      id: 5,
      title: 'Carrousel Instagram : Conseils Business',
      platform: 'Instagram',
      type: 'Carrousel',
      date: '2024-01-11',
      status: 'published',
      engagement: '18.9k vues • 1.2k likes • 234 commentaires',
      thumbnail: '💡',
      preview: '7 erreurs fatales à éviter quand on lance son business. Guide complet en 10 slides',
      performance: 'good',
      reach: 18900,
      engagement_rate: 6.3,
      saves: 456,
      tags: ['Business', 'Conseils', 'Erreurs']
    },
    {
      id: 6,
      title: 'Article LinkedIn : Tech Trends 2024',
      platform: 'LinkedIn',
      type: 'Article',
      date: '2024-01-10',
      status: 'published',
      engagement: '34.1k vues • 1.8k likes • 298 commentaires',
      thumbnail: '🔮',
      preview: 'Les 15 technologies qui vont révolutionner le business dans les 12 prochains mois',
      performance: 'excellent',
      reach: 34100,
      engagement_rate: 5.9,
      shares: 234,
      tags: ['Tech', 'Innovation', 'Futur']
    }
  ];

  const filteredContent = mockContent.filter(content => {
    const matchesPlatform = filterPlatform === 'all' || content.platform.toLowerCase() === filterPlatform;
    const matchesStatus = filterStatus === 'all' || content.status === filterStatus;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesPlatform && matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-700 border-green-200';
      case 'scheduled': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'draft': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return 'Publié';
      case 'scheduled': return 'Programmé';
      case 'draft': return 'Brouillon';
      default: return status;
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'text-green-600';
      case 'viral': return 'text-purple-600';
      case 'good': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getPerformanceIcon = (performance: string) => {
    switch (performance) {
      case 'excellent': return <TrendingUp className="w-4 h-4" />;
      case 'viral': return <Star className="w-4 h-4" />;
      case 'good': return <BarChart3 className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header moderne */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-6">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Bibliothèque de Contenu</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Vos Contenus Performants
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gérez, analysez et optimisez tous vos contenus générés. 
            <span className="font-semibold text-purple-600"> Suivez leurs performances en temps réel.</span>
          </p>
        </div>

        {/* Filters and Search - Améliorés */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
              {/* Search amélioré */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher par titre, contenu ou tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-3">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={filterPlatform}
                  onChange={(e) => setFilterPlatform(e.target.value)}
                  className="border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="all">Toutes les plateformes</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="twitter">Twitter</option>
                  <option value="tiktok">TikTok</option>
                  <option value="youtube">YouTube</option>
                  <option value="instagram">Instagram</option>
                </select>
                
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="all">Tous les statuts</option>
                  <option value="published">Publié</option>
                  <option value="scheduled">Programmé</option>
                  <option value="draft">Brouillon</option>
                </select>
              </div>
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((content) => (
              <div key={content.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                {/* Header de la carte */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {content.thumbnail}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{content.platform}</h3>
                        <p className="text-xs text-gray-600">{content.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(content.status)}`}>
                        {getStatusText(content.status)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Performance indicator */}
                  {content.performance !== 'draft' && (
                    <div className={`flex items-center space-x-2 ${getPerformanceColor(content.performance)}`}>
                      {getPerformanceIcon(content.performance)}
                      <span className="text-sm font-semibold capitalize">{content.performance}</span>
                    </div>
                  )}
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {content.preview}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {content.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Métriques */}
                  {content.status === 'published' && (
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-gray-900">{content.reach?.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Portée</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-purple-600">{content.engagement_rate}%</div>
                        <div className="text-xs text-gray-600">Engagement</div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{content.date}</span>
                    <span>{content.engagement}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all">
                      Republier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
            <div className="divide-y divide-gray-100">
              {filteredContent.map((content) => (
                <div key={content.id} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors group">
                  <div className="flex items-center space-x-6 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      {content.thumbnail}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">{content.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{content.preview}</p>
                      <div className="flex items-center space-x-6 text-xs text-gray-500">
                        <span className="flex items-center space-x-1">
                          <span>{content.platform}</span>
                          <span>•</span>
                          <span>{content.type}</span>
                        </span>
                        <span>{content.date}</span>
                        <span>{content.engagement}</span>
                        {content.status === 'published' && (
                          <>
                            <span>👁️ {content.reach?.toLocaleString()}</span>
                            <span>📊 {content.engagement_rate}%</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {content.performance !== 'draft' && (
                      <div className={`flex items-center space-x-1 ${getPerformanceColor(content.performance)}`}>
                        {getPerformanceIcon(content.performance)}
                        <span className="text-sm font-semibold capitalize">{content.performance}</span>
                      </div>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(content.status)}`}>
                      {getStatusText(content.status)}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50">
                        <Calendar className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredContent.length === 0 && (
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Search className="w-10 h-10 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">Aucun contenu trouvé</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Essayez de modifier vos filtres ou créez votre premier contenu avec notre générateur IA
            </p>
          </div>
        )}
      </div>
    </div>
  );
}