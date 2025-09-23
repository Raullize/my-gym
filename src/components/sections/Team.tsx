import React from 'react';
import Image from 'next/image';
import { TeamMember } from '@/types';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Carlos Silva',
      role: 'Personal Trainer',
      specialization: 'Musculação e Hipertrofia',
      image: '/images/team-1.jpg',
      experience: '8 anos de experiência'
    },
    {
      id: 2,
      name: 'Ana Santos',
      role: 'Instrutora de Pilates',
      specialization: 'Pilates e Funcional',
      image: '/images/team-2.jpg',
      experience: '6 anos de experiência'
    },
    {
      id: 3,
      name: 'Roberto Lima',
      role: 'Educador Físico',
      specialization: 'Condicionamento Físico',
      image: '/images/team-3.jpg',
      experience: '10 anos de experiência'
    },
    {
      id: 4,
      name: 'Mariana Costa',
      role: 'Nutricionista',
      specialization: 'Nutrição Esportiva',
      image: '/images/team-4.jpg',
      experience: '5 anos de experiência'
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossa <span className="text-orange-500 font-semibold">Equipe</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profissionais qualificados e apaixonados por ajudar você a alcançar seus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <article key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group relative">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} da MyGym`}
                  fill
                  className="object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-110"
                />
                
                {/* Overlay com ícones sociais */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
                      aria-label={`Instagram de ${member.name}`}
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
                      aria-label={`Facebook de ${member.name}`}
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.specialization}</p>
                <p className="text-gray-500 text-xs">{member.experience}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};