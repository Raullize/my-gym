'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Facebook, Instagram, MessageCircle, Linkedin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-12 lg:px-20">
        <nav className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            My<span className="text-orange-500">GYM</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white font-medium hover:text-orange-500 transition-colors duration-300 relative group"
                >
                  Início
                  <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-white font-medium hover:text-orange-500 transition-colors duration-300 relative group"
                >
                  Sobre
                  <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-white font-medium hover:text-orange-500 transition-colors duration-300 relative group"
                >
                  Serviços
                  <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('equipe')}
                  className="text-white font-medium hover:text-orange-500 transition-colors duration-300 relative group"
                >
                  Equipe
                  <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-white font-medium hover:text-orange-500 transition-colors duration-300 relative group"
                >
                  Contato
                  <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-black bg-opacity-95 backdrop-blur-sm transition-all duration-300 z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={closeMenu}
              className="text-white p-2 hover:text-orange-500 transition-colors duration-300"
              aria-label="Fechar menu"
            >
              <X size={32} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col justify-start px-6 pt-8">
            <nav className="mb-8">
              <ul className="space-y-6">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-white text-xl font-medium hover:text-orange-500 transition-colors duration-300 block w-full text-left"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('sobre')}
                    className="text-white text-xl font-medium hover:text-orange-500 transition-colors duration-300 block w-full text-left"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicos')}
                    className="text-white text-xl font-medium hover:text-orange-500 transition-colors duration-300 block w-full text-left"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('equipe')}
                    className="text-white text-xl font-medium hover:text-orange-500 transition-colors duration-300 block w-full text-left"
                  >
                    Equipe
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contato')}
                    className="text-white text-xl font-medium hover:text-orange-500 transition-colors duration-300 block w-full text-left"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </nav>

            <div className="border-t border-gray-700 pt-8">
              <div className="mb-6">
                <p className="text-orange-500 font-semibold mb-2">Entre em Contato</p>
                <p className="text-white mb-1">contato@mygym.com.br</p>
                <p className="text-white">(51) 3333-4444</p>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300" aria-label="Facebook da MyGym">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300" aria-label="Instagram da MyGym">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300" aria-label="LinkedIn da MyGym">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-orange-500 transition-colors duration-300" aria-label="WhatsApp da MyGym">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};