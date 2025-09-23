import React from 'react';
import Image from 'next/image';
import { Award, Dumbbell, Users, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Academia Premiada',
      description: 'Reconhecida como referência em qualidade por 5 anos consecutivos.'
    },
    {
      icon: Dumbbell,
      title: 'Equipamentos Premium',
      description: 'Aparelhos de última geração para otimizar seus resultados.'
    },
    {
      icon: Users,
      title: 'Profissionais Qualificados',
      description: 'Equipe composta por especialistas formados e certificados.'
    },
    {
      icon: Clock,
      title: 'Horário Estendido',
      description: 'Aberto todos os dias com horários que se encaixam na sua rotina.'
    }
  ];

  return (
    <section 
      id="sobre" 
      className="py-20 bg-gray-100"
    >
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a <span className="text-orange-500 font-semibold">MyGym</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossa história e o que nos torna referência em fitness e saúde
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/athletic-person-exercising-working-out.jpg"
              alt="Pessoa realizando treino intenso de musculação na MyGym com equipamentos modernos"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              10 Anos de Excelência em Fitness
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              A MyGym nasceu da paixão por proporcionar saúde e bem-estar através da atividade física de
              qualidade. Desde 2013, temos ajudado milhares de pessoas a transformarem seus corpos e vidas
              com métodos comprovados e orientação profissional.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossa missão é oferecer o melhor ambiente de treinamento, com equipamentos modernos e
              instrutores capacitados para garantir que você alcance seus objetivos de forma segura e eficiente.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full mb-3">
                      <IconComponent size={20} />
                    </div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};