'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Descrição */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">
                <span className="text-orange-500">My</span>Gym
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformando vidas através do fitness há mais de 10 anos. 
              Sua jornada de transformação começa aqui.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Depoimentos
                </a>
              </li>

              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">Porto Alegre, RS</p>
                  <p className="text-gray-300">Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-orange-500 mr-3 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">(51) 9999-9999</p>
                  <p className="text-gray-300">(51) 3333-3333</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-orange-500 mr-3 flex-shrink-0" size={18} />
                <p className="text-gray-300">contato@mygym.com.br</p>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">Horários</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <Clock className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 font-medium">Segunda a Sexta</p>
                  <p className="text-gray-300">06:00 - 22:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 font-medium">Sábado</p>
                  <p className="text-gray-300">08:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 font-medium">Domingo</p>
                  <p className="text-gray-300">08:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} MyGym. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};