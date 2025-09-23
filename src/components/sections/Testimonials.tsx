'use client';

import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { Testimonial } from '@/types';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Maria Oliveira',
      text: 'A MyGym transformou completamente minha vida! Em 6 meses consegui perder 15kg e ganhar muito mais disposição. Os profissionais são excelentes e sempre me motivaram a continuar.',
      rating: 5,
      image: '/images/testimonial-1.jpg'
    },
    {
      id: 2,
      name: 'João Pedro',
      text: 'Melhor academia da região! Equipamentos modernos, ambiente limpo e uma equipe que realmente se importa com os resultados dos alunos. Recomendo para todos!',
      rating: 5,
      image: '/images/testimonial-2.jpg'
    },
    {
      id: 3,
      name: 'Ana Carolina',
      text: 'Treino aqui há 2 anos e posso dizer que foi a melhor escolha que fiz. Consegui definir meu corpo e melhorar muito minha autoestima. A equipe é sensacional!',
      rating: 5,
      image: '/images/testimonial-3.jpg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section 
      id="depoimentos" 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/images/bg.jpg')`
      }}
    >
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que <span className="text-orange-500 font-semibold">Dizem</span> Nossos Alunos
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Histórias reais de quem transformou seu corpo e vida na MyGym
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-gray-700 min-h-[400px] flex flex-col justify-between">
            <Quote className="text-orange-500 mb-6" size={48} />
            
            <div className="text-center flex-1 flex flex-col justify-center">
              {/* Texto do depoimento */}
              <div className="mb-8">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed italic min-h-[120px] flex items-center justify-center">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>
              </div>
              
              {/* Avatar do cliente */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={`Foto de ${testimonials[currentIndex].name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Estrelas */}
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              {/* Nome e título */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-orange-400 font-medium">Aluno MyGym</p>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};