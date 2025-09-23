'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section 
      id="contato" 
      className="py-20 bg-cover bg-center bg-no-repeat relative bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/bg.jpg')`
      }}
    >
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em <span className="text-orange-500 font-semibold">Contato</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para ajudar você a começar sua jornada fitness
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm">Endereço</h4>
                    <p className="text-gray-300 text-sm">Rua das Flores, 123 - Centro</p>
                    <p className="text-gray-300 text-sm">São Paulo/SP - CEP: 01234-567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm">Telefones</h4>
                    <p className="text-gray-300 text-sm">(11) 9999-9999 | (11) 3333-3333</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm">E-mail</h4>
                    <p className="text-gray-300 text-sm">contato@mygym.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm">Horário</h4>
                    <p className="text-gray-300 text-sm">Seg-Sex: 06:00-22:00</p>
                    <p className="text-gray-300 text-sm">Sáb: 08:00-18:00 | Dom: 08:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Envie uma Mensagem</h3>
            
            {isSubmitted ? (
              <div className="text-center py-6">
                <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">Mensagem Enviada!</h4>
                <p className="text-gray-300 text-sm">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-1 text-sm">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-sm"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-1 text-sm">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-sm"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-1 text-sm">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none text-sm"
                    placeholder="Como podemos ajudar você?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center text-sm"
                >
                  <Send className="mr-2" size={16} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};