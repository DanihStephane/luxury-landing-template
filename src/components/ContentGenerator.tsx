import React, { useState } from 'react';
import { Sparkles, Wand2, Video, FileText, Share2, Download, Copy, Calendar, BookOpen, TrendingUp, Users, Eye, Heart, MessageCircle, BarChart3, Target, Clock } from 'lucide-react';

export default function ContentGenerator() {
  const [prompt, setPrompt] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['linkedin']);
  const [contentType, setContentType] = useState('post');
  const [tone, setTone] = useState('professional');
  const [targetAudience, setTargetAudience] = useState('entrepreneurs');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<any[]>([]);

  const platforms = [
    { id: 'linkedin', name: 'LinkedIn', color: 'bg-blue-600', icon: '💼', description: 'Réseau professionnel' },
    { id: 'twitter', name: 'Twitter/X', color: 'bg-black', icon: '🐦', description: 'Microblogging' },
    { id: 'tiktok', name: 'TikTok', color: 'bg-pink-600', icon: '🎵', description: 'Vidéos courtes' },
    { id: 'youtube', name: 'YouTube Shorts', color: 'bg-red-600', icon: '📺', description: 'Vidéos verticales' },
    { id: 'instagram', name: 'Instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500', icon: '📸', description: 'Contenu visuel' },
  ];

  const contentTypes = [
    { id: 'post', name: 'Post texte', icon: FileText, description: 'Publication textuelle optimisée' },
    { id: 'video', name: 'Vidéo montée', icon: Video, description: 'Vidéo avec voix IA et montage' },
    { id: 'carousel', name: 'Carrousel', icon: Share2, description: 'Série d\'images avec texte' },
    { id: 'ebook', name: 'E-book', icon: BookOpen, description: 'Guide PDF complet' },
  ];

  const tones = [
    { id: 'professional', name: 'Professionnel', emoji: '💼' },
    { id: 'casual', name: 'Décontracté', emoji: '😊' },
    { id: 'inspirational', name: 'Inspirant', emoji: '✨' },
    { id: 'educational', name: 'Éducatif', emoji: '🎓' },
    { id: 'humorous', name: 'Humoristique', emoji: '😄' },
  ];

  const audiences = [
    { id: 'entrepreneurs', name: 'Entrepreneurs', emoji: '🚀' },
    { id: 'coaches', name: 'Coachs', emoji: '🎯' },
    { id: 'freelancers', name: 'Freelancers', emoji: '💻' },
    { id: 'agencies', name: 'Agences', emoji: '🏢' },
    { id: 'creators', name: 'Créateurs', emoji: '🎨' },
  ];

  const generateRichContent = (platform: string, type: string) => {
    const platformData = platforms.find(p => p.id === platform);
    const basePrompt = prompt;
    
    const contentTemplates = {
      linkedin: {
        post: `🚀 ${basePrompt}

📊 POINTS CLÉS :
• Stratégie #1 : Automatisation intelligente des processus
• Stratégie #2 : Optimisation de la productivité avec l'IA
• Stratégie #3 : Création de contenu à grande échelle

💡 CONSEIL D'EXPERT :
L'intelligence artificielle n'est plus un luxe, c'est une nécessité pour rester compétitif en 2024.

🎯 RÉSULTATS ATTENDUS :
✅ +300% d'efficacité dans la création de contenu
✅ Économie de 15h/semaine sur les tâches répétitives
✅ ROI amélioré de 250% sur vos campagnes marketing

💬 Et vous, quelle est votre plus grande difficulté dans la création de contenu ?

#IA #Entrepreneuriat #Productivité #Marketing #Innovation #Business2024`,
        
        video: `🎬 SCRIPT VIDÉO LINKEDIN (60 secondes)

HOOK (0-3s) : "Si vous passez plus de 2h par jour à créer du contenu, cette vidéo va changer votre vie"

PROBLÈME (3-15s) : 
"La plupart des entrepreneurs perdent 70% de leur temps sur des tâches répétitives..."

SOLUTION (15-45s) :
"Voici comment l'IA peut automatiser votre création de contenu :
1. Génération automatique de posts
2. Optimisation pour chaque plateforme  
3. Programmation intelligente"

CTA (45-60s) : "Commentez 'IA' pour recevoir notre guide gratuit"

📝 ÉLÉMENTS VISUELS :
- Graphiques de productivité
- Screenshots d'outils IA
- Témoignages clients
- Call-to-action animé`,

        carousel: `📱 CARROUSEL LINKEDIN - 5 SLIDES

SLIDE 1 (COUVERTURE) :
"5 Façons dont l'IA Révolutionne l'Entrepreneuriat en 2024"
[Visuel : Graphique futuriste avec icônes IA]

SLIDE 2 :
"1️⃣ AUTOMATISATION DU CONTENU
• Génération de posts en 30 secondes
• Adaptation automatique par plateforme
• Optimisation SEO intégrée"

SLIDE 3 :
"2️⃣ ANALYSE PRÉDICTIVE
• Prévision des tendances
• Optimisation des horaires de publication
• Ciblage audience intelligent"

SLIDE 4 :
"3️⃣ PERSONNALISATION À GRANDE ÉCHELLE
• Messages adaptés par segment
• Contenu dynamique
• Expérience utilisateur unique"

SLIDE 5 (CTA) :
"Prêt à transformer votre business ?
👆 Suivez-nous pour plus de conseils
💬 Commentez votre plus grand défi"`,
      },
      
      twitter: {
        post: `🧵 THREAD : ${basePrompt}

1/7 🚀 L'IA transforme radicalement l'entrepreneuriat. Voici pourquoi vous devez vous y mettre MAINTENANT :

2/7 📊 STATISTIQUES CHOCS :
• 73% des entreprises utilisent déjà l'IA
• +40% de productivité en moyenne
• ROI de 300% sur 2 ans

3/7 💡 3 DOMAINES CLÉS :
• Création de contenu automatisée
• Analyse prédictive des ventes  
• Service client 24/7

4/7 ⚡ RÉSULTATS CONCRETS :
• @startup_x : +500% de leads
• @agency_y : -80% de temps de production
• @coach_z : +200% d'engagement

5/7 🎯 COMMENT COMMENCER :
1. Identifiez vos tâches répétitives
2. Testez des outils IA gratuits
3. Mesurez l'impact sur 30 jours

6/7 ⚠️ ERREURS À ÉVITER :
• Vouloir tout automatiser d'un coup
• Négliger la formation de l'équipe
• Ignorer l'aspect humain

7/7 🚀 L'IA n'est pas l'avenir, c'est le présent. 

Quelle sera votre première action ?

#IA #Entrepreneuriat #Productivité`,
      },
      
      tiktok: {
        video: `🎬 SCRIPT TIKTOK (30 secondes)

HOOK (0-2s) : 
"POV : Tu découvres comment créer 50 posts en 5 minutes"
[Visuel : Transformation rapide, effet "mind blown"]

PROBLÈME (2-8s) :
"Avant : 2h pour 1 post 😩"
[Visuel : Personne fatiguée devant ordinateur]

SOLUTION (8-20s) :
"Maintenant avec l'IA :"
• Tape ton idée ✍️
• Choisis tes plateformes 📱  
• Boom ! Contenu généré 🚀
[Visuel : Interface en action, très rapide]

RÉSULTAT (20-28s) :
"Résultat : +300% de contenu, -90% de temps"
[Visuel : Graphiques qui explosent]

CTA (28-30s) :
"Lien en bio pour tester !"
[Visuel : Flèche pointant vers bio]

🎵 MUSIQUE : Trending beat énergique
📱 EFFETS : Transitions rapides, texte animé
#IA #Entrepreneur #Productivité #ContentCreator`,
      }
    };

    return contentTemplates[platform]?.[type] || contentTemplates.linkedin.post;
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockContent = selectedPlatforms.map(platform => {
        const platformData = platforms.find(p => p.id === platform);
        const content = generateRichContent(platform, contentType);
        
        return {
          id: Math.random(),
          platform,
          platformData,
          type: contentType,
          content,
          tone,
          targetAudience,
          hashtags: ['#entrepreneuriat', '#ia', '#productivité', '#business', '#innovation'],
          metrics: {
            estimated_reach: Math.floor(Math.random() * 50000) + 5000,
            engagement_score: Math.floor(Math.random() * 25) + 75,
            estimated_likes: Math.floor(Math.random() * 1000) + 100,
            estimated_comments: Math.floor(Math.random() * 200) + 20,
            estimated_shares: Math.floor(Math.random() * 100) + 10,
            viral_potential: Math.floor(Math.random() * 30) + 70,
            best_time: ['09:00', '12:00', '17:00'][Math.floor(Math.random() * 3)],
            optimal_day: ['Lundi', 'Mercredi', 'Vendredi'][Math.floor(Math.random() * 3)]
          },
          seo_keywords: ['intelligence artificielle', 'entrepreneuriat', 'productivité', 'automatisation'],
          content_pillars: ['Éducation', 'Inspiration', 'Conseils pratiques'],
          call_to_action: 'Commentez votre plus grand défi entrepreneurial !'
        };
      });
      
      setGeneratedContent(mockContent);
      setIsGenerating(false);
    }, 4000);
  };

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header moderne */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Générateur IA Avancé</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Créez du Contenu Viral
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformez une simple idée en contenu optimisé pour toutes vos plateformes. 
            <span className="font-semibold text-purple-600"> IA avancée, résultats garantis.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* Configuration - Plus large */}
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Wand2 className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Configuration</h2>
              </div>

              {/* Prompt Input - Amélioré */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  💡 Décrivez votre contenu
                </label>
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ex: Je veux expliquer comment l'IA révolutionne l'entrepreneuriat moderne, avec des exemples concrets, des statistiques et des conseils pratiques pour les petites entreprises qui veulent se lancer..."
                    className="w-full h-36 px-4 py-4 border-2 border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                    {prompt.length}/500
                  </div>
                </div>
              </div>

              {/* Tone et Audience - Nouveau */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    🎭 Ton de voix
                  </label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    {tones.map(t => (
                      <option key={t.id} value={t.id}>{t.emoji} {t.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    🎯 Audience cible
                  </label>
                  <select
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    {audiences.map(a => (
                      <option key={a.id} value={a.id}>{a.emoji} {a.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Content Type - Redesigné */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  📝 Type de contenu
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {contentTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setContentType(type.id)}
                      className={`group p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                        contentType === type.id
                          ? 'border-purple-500 bg-purple-50 shadow-lg scale-105'
                          : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <type.icon className={`w-5 h-5 ${contentType === type.id ? 'text-purple-600' : 'text-gray-600'}`} />
                        <span className={`font-semibold ${contentType === type.id ? 'text-purple-700' : 'text-gray-700'}`}>
                          {type.name}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Platforms - Redesigné */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  🌐 Plateformes cibles
                </label>
                <div className="space-y-3">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => togglePlatform(platform.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ${
                        selectedPlatforms.includes(platform.id)
                          ? 'border-purple-500 bg-purple-50 shadow-lg'
                          : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{platform.icon}</span>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">{platform.name}</div>
                          <div className="text-xs text-gray-500">{platform.description}</div>
                        </div>
                      </div>
                      {selectedPlatforms.includes(platform.id) && (
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button - Amélioré */}
              <button
                onClick={handleGenerate}
                disabled={!prompt || selectedPlatforms.length === 0 || isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Génération en cours...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6" />
                    <span>Générer le contenu IA</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results - Plus large */}
          <div className="xl:col-span-3 space-y-6">
            {isGenerating && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20 text-center">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center animate-pulse">
                    <Sparkles className="w-10 h-10 text-white animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">IA en action...</h3>
                    <p className="text-gray-600 mb-6">Analyse du prompt • Optimisation SEO • Adaptation multi-plateforme</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full animate-pulse" style={{width: '75%'}}></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
                    <div>✨ Génération créative</div>
                    <div>🎯 Optimisation audience</div>
                    <div>📊 Calcul métriques</div>
                  </div>
                </div>
              </div>
            )}

            {generatedContent.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Contenu généré</h2>
                  <div className="text-sm text-gray-500">
                    {generatedContent.length} contenu{generatedContent.length > 1 ? 's' : ''} créé{generatedContent.length > 1 ? 's' : ''}
                  </div>
                </div>
                
                {generatedContent.map((content) => (
                  <div key={content.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                    {/* Header de la carte */}
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-b border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{content.platformData?.icon}</span>
                          <div>
                            <h3 className="font-bold text-gray-900">{content.platformData?.name}</h3>
                            <p className="text-sm text-gray-600">{content.platformData?.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-white/50">
                            <Copy className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-white/50">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-white/50">
                            <Calendar className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Métriques prédictives */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{content.metrics.engagement_score}%</div>
                          <div className="text-xs text-gray-600">Score engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{content.metrics.estimated_reach.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Portée estimée</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{content.metrics.viral_potential}%</div>
                          <div className="text-xs text-gray-600">Potentiel viral</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{content.metrics.best_time}</div>
                          <div className="text-xs text-gray-600">Meilleure heure</div>
                        </div>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <div className="bg-gray-50 rounded-xl p-6 mb-6">
                        <pre className="whitespace-pre-wrap text-sm text-gray-800 font-medium leading-relaxed">
                          {content.content}
                        </pre>
                      </div>

                      {/* Métriques détaillées */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                            <BarChart3 className="w-4 h-4" />
                            <span>Engagement prévu</span>
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">👍 Likes</span>
                              <span className="font-semibold">{content.metrics.estimated_likes}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">💬 Commentaires</span>
                              <span className="font-semibold">{content.metrics.estimated_comments}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">🔄 Partages</span>
                              <span className="font-semibold">{content.metrics.estimated_shares}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                            <Target className="w-4 h-4" />
                            <span>Optimisation SEO</span>
                          </h4>
                          <div className="space-y-2">
                            {content.seo_keywords.slice(0, 3).map((keyword, idx) => (
                              <span key={idx} className="inline-block bg-white px-2 py-1 rounded-md text-xs font-medium text-gray-700 mr-1 mb-1">
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Timing optimal</span>
                          </h4>
                          <div className="text-sm space-y-1">
                            <div><span className="text-gray-600">Jour :</span> <span className="font-semibold">{content.metrics.optimal_day}</span></div>
                            <div><span className="text-gray-600">Heure :</span> <span className="font-semibold">{content.metrics.best_time}</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">CTA :</span> {content.call_to_action}
                        </div>
                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                          Programmer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!isGenerating && generatedContent.length === 0 && (
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 text-center border-2 border-dashed border-gray-300">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-3">Prêt à créer du contenu viral ?</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Remplissez les informations ci-contre et laissez notre IA créer du contenu optimisé pour maximiser votre engagement
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}