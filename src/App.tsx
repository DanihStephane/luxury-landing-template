import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Globe, 
  Palette, 
  Monitor, 
  Settings, 
  TrendingUp, 
  Star,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Zap,
  Play,
  Sparkles,
  Target,
  Rocket,
  Crown
} from 'lucide-react';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('FR');
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const content = {
    FR: {
      nav: {
        services: 'Services',
        about: 'À propos',
        contact: 'Contact'
      },
      hero: {
        title: 'Blue Valoris',
        subtitle: 'L\'Excellence Premium pour Conquérir les Marchés du Golfe',
        description: 'De l\'idée à la réalisation : branding révolutionnaire, digital haute performance, installation premium et stratégie d\'élite. Basés à Abu Dhabi et Maurice.',
        cta: 'Démarrer votre Transformation',
        watch: 'Voir notre Vision'
      },
      pillars: {
        title: 'Nos 4 Univers d\'Excellence',
        subtitle: 'Chaque pilier, une expertise unique pour votre succès',
        studio: {
          title: 'Studio',
          subtitle: 'Branding & Packaging Premium',
          description: 'Création d\'identités visuelles révolutionnaires et packaging sophistiqué qui marquent définitivement les esprits.'
        },
        digital: {
          title: 'Digital',
          subtitle: 'E-commerce Nouvelle Génération',
          description: 'Plateformes e-commerce ultra-performantes avec IA intégrée et expérience utilisateur exceptionnelle.'
        },
        setup: {
          title: 'Setup',
          subtitle: 'Conciergerie VIP Installation',
          description: 'Service premium complet : visa express, création société, accompagnement lifestyle dans votre nouvelle vie aux Émirats.'
        },
        strategy: {
          title: 'Strategy',
          subtitle: 'Conseil Stratégique d\'Élite',
          description: 'Expertise métier de haut niveau pour dominer les marchés du Golfe avec une stratégie sur-mesure.'
        }
      },
      stats: {
        clients: 'Clients Premium',
        success: 'Taux de Réussite',
        markets: 'Marchés Conquis',
        growth: 'Croissance Moyenne'
      },
      form: {
        title: 'Transformons Votre Vision en Empire',
        subtitle: 'Partagez votre ambition, nous créons votre légende',
        name: 'Nom complet',
        email: 'Email professionnel',
        company: 'Entreprise',
        project: 'Décrivez votre vision',
        submit: 'Lancer la Transformation'
      }
    },
    EN: {
      nav: {
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'Blue Valoris',
        subtitle: 'Premium Excellence to Conquer Gulf Markets',
        description: 'From idea to execution: revolutionary branding, high-performance digital, premium setup and elite strategy. Based in Abu Dhabi and Mauritius.',
        cta: 'Start Your Transformation',
        watch: 'Watch our Vision'
      },
      pillars: {
        title: 'Our 4 Universes of Excellence',
        subtitle: 'Each pillar, a unique expertise for your success',
        studio: {
          title: 'Studio',
          subtitle: 'Premium Branding & Packaging',
          description: 'Revolutionary visual identity creation and sophisticated packaging that definitively marks minds.'
        },
        digital: {
          title: 'Digital',
          subtitle: 'Next-Gen E-commerce',
          description: 'Ultra-high performance e-commerce platforms with integrated AI and exceptional user experience.'
        },
        setup: {
          title: 'Setup',
          subtitle: 'VIP Installation Concierge',
          description: 'Complete premium service: express visa, company formation, lifestyle support in your new Emirates life.'
        },
        strategy: {
          title: 'Strategy',
          subtitle: 'Elite Strategic Consulting',
          description: 'High-level business expertise to dominate Gulf markets with tailor-made strategy.'
        }
      },
      stats: {
        clients: 'Premium Clients',
        success: 'Success Rate',
        markets: 'Markets Conquered',
        growth: 'Average Growth'
      },
      form: {
        title: 'Transform Your Vision into Empire',
        subtitle: 'Share your ambition, we create your legend',
        name: 'Full name',
        email: 'Professional email',
        company: 'Company',
        project: 'Describe your vision',
        submit: 'Launch Transformation'
      }
    }
  };

  const t = content[currentLanguage];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cursor personnalisé */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      />

      {/* Navigation futuriste */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-pulse">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping" />
              </div>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Blue Valoris
                </span>
                <div className="text-xs text-gray-400 font-medium">PREMIUM SOLUTIONS</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[t.nav.services, t.nav.about, t.nav.contact].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              
              <div className="flex items-center space-x-2 bg-white/5 rounded-full p-1">
                {['FR', 'EN'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLanguage(lang)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      currentLanguage === lang 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Ultra Moderne */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
        }}
      >
        {/* Arrière-plan animé */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className={`transition-all duration-1500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {/* Badge Premium */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
              <span className="text-sm font-semibold text-blue-300">EXCELLENCE PREMIUM</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                {t.hero.title}
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              {t.hero.subtitle}
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center space-x-3">
                  <Rocket className="w-6 h-6" />
                  <span>{t.hero.cta}</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                  <Play className="w-6 h-6 ml-1" />
                </div>
                <span className="font-semibold">{t.hero.watch}</span>
              </button>
            </div>

            {/* Indicateurs de localisation */}
            <div className="flex justify-center items-center space-x-8 mt-16 text-gray-400">
              {[
                { city: 'Abu Dhabi', flag: '🇦🇪' },
                { city: 'Maurice', flag: '🇲🇺' }
              ].map((location, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm">
                  <span className="text-2xl">{location.flag}</span>
                  <span className="font-semibold">{location.city}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Stats Section Futuriste */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: t.stats.clients, icon: Users, color: 'from-blue-500 to-cyan-500' },
              { number: '99.8%', label: t.stats.success, icon: Target, color: 'from-green-500 to-emerald-500' },
              { number: '25+', label: t.stats.markets, icon: Globe, color: 'from-purple-500 to-pink-500' },
              { number: '+340%', label: t.stats.growth, icon: TrendingUp, color: 'from-yellow-500 to-orange-500' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section Révolutionnaire */}
      <section id="services" className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-pink-900/5" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.pillars.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t.pillars.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                key: 'studio', 
                icon: Palette, 
                gradient: 'from-purple-500 via-pink-500 to-red-500',
                bgGradient: 'from-purple-900/20 to-pink-900/20'
              },
              { 
                key: 'digital', 
                icon: Monitor, 
                gradient: 'from-blue-500 via-cyan-500 to-teal-500',
                bgGradient: 'from-blue-900/20 to-cyan-900/20'
              },
              { 
                key: 'setup', 
                icon: Settings, 
                gradient: 'from-green-500 via-emerald-500 to-teal-500',
                bgGradient: 'from-green-900/20 to-emerald-900/20'
              },
              { 
                key: 'strategy', 
                icon: TrendingUp, 
                gradient: 'from-yellow-500 via-orange-500 to-red-500',
                bgGradient: 'from-yellow-900/20 to-orange-900/20'
              }
            ].map(({ key, icon: Icon, gradient, bgGradient }, index) => (
              <div 
                key={key} 
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${bgGradient} border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 overflow-hidden`}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-2">
                    {t.pillars[key].title}
                  </h3>
                  
                  <h4 className={`text-xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                    {t.pillars[key].subtitle}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {t.pillars[key].description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-white/70 group-hover:text-white transition-colors">
                    <span className="font-semibold">Découvrir</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire Ultra Premium */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.form.title}
            </h2>
            <p className="text-2xl text-gray-300">
              {t.form.subtitle}
            </p>
          </div>
          
          <form className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden">
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                { label: t.form.name, placeholder: 'Jean Dupont', type: 'text' },
                { label: t.form.email, placeholder: 'jean@entreprise.com', type: 'email' },
              ].map((field, index) => (
                <div key={index} className="group">
                  <label className="block text-sm font-bold text-gray-300 mb-3 group-focus-within:text-blue-400 transition-colors">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>
            
            <div className="relative z-10 mb-8">
              <label className="block text-sm font-bold text-gray-300 mb-3">
                {t.form.company}
              </label>
              <input
                type="text"
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="Nom de votre entreprise"
              />
            </div>
            
            <div className="relative z-10 mb-10">
              <label className="block text-sm font-bold text-gray-300 mb-3">
                {t.form.project}
              </label>
              <textarea
                rows={6}
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none backdrop-blur-sm"
                placeholder="Partagez votre vision, vos objectifs, votre marché cible..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-6 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center space-x-3">
                <Rocket className="w-6 h-6" />
                <span>{t.form.submit}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </form>
        </div>
      </section>

      {/* Footer Futuriste */}
      <footer className="relative py-20 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Blue Valoris
                  </span>
                  <div className="text-xs text-gray-400">PREMIUM SOLUTIONS</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                L'excellence premium pour conquérir les marchés du Golfe. 
                Innovation, sophistication et accompagnement d'élite.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact Premium</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'contact@bluevaloris.com' },
                  { icon: Phone, text: '+971 XX XXX XXXX' },
                  { icon: MapPin, text: 'Abu Dhabi & Maurice' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                    <item.icon className="w-5 h-5 text-blue-400" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Univers d'Excellence</h3>
              <div className="space-y-3">
                {[
                  '• Branding & Packaging Premium',
                  '• E-commerce Nouvelle Génération',
                  '• Conciergerie VIP Installation',
                  '• Conseil Stratégique d\'Élite'
                ].map((service, index) => (
                  <p key={index} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-16 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Blue Valoris. Excellence Premium. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;