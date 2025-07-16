import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ContentGenerator from './components/ContentGenerator';
import ContentLibrary from './components/ContentLibrary';
import Scheduler from './components/Scheduler';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'generator':
        return <ContentGenerator />;
      case 'library':
        return <ContentLibrary />;
      case 'schedule':
        return <Scheduler />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main>
        {renderCurrentView()}
      </main>
      <footer className="bg-white/90 backdrop-blur-md border-t border-gray-200/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">✨</span>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    ContentAI Pro
                  </span>
                  <div className="text-sm text-gray-500 font-medium">Générateur IA</div>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                La solution SaaS révolutionnaire pour générer automatiquement du contenu optimisé 
                pour toutes les plateformes sociales en moins de 60 secondes.
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                  Commencer gratuitement
                </button>
                <button className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-purple-300 transition-all duration-200">
                  En savoir plus
                </button>
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Fonctionnalités</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Générateur IA</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Vidéos automatiques</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Planificateur</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Templates</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Tutoriels</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Communauté</a></li>
              </ul>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-500 text-sm">
                © 2024 ContentAI Pro. Tous droits réservés.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <a href="#" className="hover:text-purple-600 transition-colors">Confidentialité</a>
                <a href="#" className="hover:text-purple-600 transition-colors">Conditions</a>
                <a href="#" className="hover:text-purple-600 transition-colors">Cookies</a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-all">
                  <span className="text-sm">🐦</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-all">
                  <span className="text-sm">💼</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-all">
                  <span className="text-sm">📺</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;