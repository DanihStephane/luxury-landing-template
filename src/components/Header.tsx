import React from 'react';
import { Sparkles, Menu, User, Settings, Bell, Search } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center space-x-4 lg:space-x-8 flex-1 min-w-0">
            {/* Logo amélioré */}
            <div className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <span className="text-lg lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
                  ContentAI Pro
                </span>
                <div className="text-xs text-gray-500 font-medium hidden sm:block">Générateur IA</div>
              </div>
            </div>
            
            {/* Navigation moderne */}
            <nav className="hidden lg:flex space-x-1 flex-1 justify-center">
              {[
                { id: 'dashboard', label: 'Dashboard', emoji: '📊' },
                { id: 'generator', label: 'Générateur', emoji: '✨' },
                { id: 'library', label: 'Bibliothèque', emoji: '📚' },
                { id: 'schedule', label: 'Planificateur', emoji: '📅' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`px-3 lg:px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 text-sm lg:text-base ${
                    currentView === item.id 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <span>{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
            {/* Barre de recherche */}
            <div className="hidden xl:flex items-center space-x-2 bg-gray-100 rounded-xl px-4 py-2">
              <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                className="bg-transparent border-none outline-none text-sm w-32 placeholder-gray-400"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-xl hover:bg-purple-50">
              <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Paramètres */}
            <button className="hidden sm:block p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-xl hover:bg-purple-50">
              <Settings className="w-5 h-5" />
            </button>

            {/* Profil utilisateur */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <div className="text-sm font-semibold text-gray-900">Marie Dubois</div>
                <div className="text-xs text-gray-500 hidden lg:block">Plan Pro</div>
              </div>
              <button className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl flex items-center justify-center text-white font-semibold hover:shadow-lg transition-all duration-200 flex-shrink-0">
                <User className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>

            {/* Menu mobile */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-xl hover:bg-purple-50">
              <Menu className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}