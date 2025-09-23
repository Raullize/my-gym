'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  const backgrounds = [
    '/images/carousel-1.jpg',
    '/images/carousel-2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 7500);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgrounds[currentBgIndex]})`
      }}
    >
      <div className="container mx-auto px-8 lg:px-12 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforme seu corpo e sua vida na{' '}
            <span className="text-orange-500 font-semibold">MyGym</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            A academia mais completa e moderna com os melhores profissionais e equipamentos de ponta para
            ajudar você a alcançar seus objetivos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => scrollToSection('sobre')}
              className="w-full sm:w-auto"
            >
              Conheça nossa academia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};