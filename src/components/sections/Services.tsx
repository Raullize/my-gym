import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Service } from '@/types';

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Musculação',
      description: 'Área completa com equipamentos modernos para todos os grupos musculares, com orientação profissional para maximizar seus resultados.',
      image: '/images/feature-1.jpg'
    },
    {
      id: 2,
      title: 'Aulas Coletivas',
      description: 'Diversas modalidades como Spinning, Zumba, Pilates, Funcional, HIIT e muito mais, em diferentes horários para sua conveniência.',
      image: '/images/feature-2.jpg'
    },
    {
      id: 3,
      title: 'Personal Trainer',
      description: 'Treinamento personalizado com profissionais especializados, criando programas exclusivos para seus objetivos específicos.',
      image: '/images/feature-3.jpg'
    },
    {
      id: 4,
      title: 'Avaliação Física',
      description: 'Avaliação completa com análise de composição corporal, medidas e testes de condicionamento para acompanhar sua evolução.',
      image: '/images/feature-4.jpg'
    }
  ];

  return (
    <section 
      id="servicos" 
      className="py-20 bg-cover bg-center bg-no-repeat relative bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/bg.jpg')`
      }}
    >
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos <span className="text-orange-500 font-semibold">Serviços</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Uma variedade de atividades para todos os objetivos e níveis de condicionamento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <article key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={`${service.title} - Serviço oferecido pela MyGym`}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                <Button variant="primary" size="sm">
                  Saiba mais
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};