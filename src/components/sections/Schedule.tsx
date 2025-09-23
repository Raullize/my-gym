'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Users, CheckCircle, XCircle } from 'lucide-react';
import { ScheduleStatus } from '@/types';

export const Schedule: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState<ScheduleStatus>('closed');

  const schedules = [
    { day: 'Segunda-feira', hours: '06:00 - 22:00' },
    { day: 'Terça-feira', hours: '06:00 - 22:00' },
    { day: 'Quarta-feira', hours: '06:00 - 22:00' },
    { day: 'Quinta-feira', hours: '06:00 - 22:00' },
    { day: 'Sexta-feira', hours: '06:00 - 22:00' },
    { day: 'Sábado', hours: '08:00 - 18:00' },
    { day: 'Domingo', hours: '08:00 - 16:00' }
  ];

  const checkGymStatus = (): ScheduleStatus => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute; // Convert to minutes

    let openTime: number, closeTime: number;

    if (currentDay >= 1 && currentDay <= 5) { // Monday to Friday
      openTime = 6 * 60; // 06:00
      closeTime = 22 * 60; // 22:00
    } else if (currentDay === 6) { // Saturday
      openTime = 8 * 60; // 08:00
      closeTime = 18 * 60; // 18:00
    } else { // Sunday
      openTime = 8 * 60; // 08:00
      closeTime = 16 * 60; // 16:00
    }

    if (currentTime >= openTime && currentTime < closeTime) {
      return 'open';
    } else {
      return 'closed';
    }
  };

  useEffect(() => {
    const updateStatus = () => {
      setCurrentStatus(checkGymStatus());
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const getStatusInfo = () => {
    switch (currentStatus) {
      case 'open':
        return {
          text: 'Academia Aberta',
          icon: CheckCircle,
          color: 'text-green-600',
          bgColor: 'bg-green-100'
        };
      case 'closed':
        return {
          text: 'Academia Fechada',
          icon: XCircle,
          color: 'text-red-600',
          bgColor: 'bg-red-100'
        };
      default:
        return {
          text: 'Status Indisponível',
          icon: Clock,
          color: 'text-gray-600',
          bgColor: 'bg-gray-100'
        };
    }
  };

  const statusInfo = getStatusInfo();
  const StatusIcon = statusInfo.icon;

  return (
    <section 
      id="calendario" 
      className="py-20 bg-cover bg-center bg-no-repeat relative bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/bg.jpg')`
      }}
    >
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Horário de <span className="text-orange-500 font-semibold">Funcionamento</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Confira nossos horários e planeje seu treino
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Status Card */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              {currentStatus === 'open' ? (
                <CheckCircle className="text-green-500 w-16 h-16" />
              ) : (
                <XCircle className="text-red-500 w-16 h-16" />
              )}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {currentStatus === 'open' ? 'ABERTO AGORA' : 'FECHADO AGORA'}
            </h3>
            <p className="text-gray-300 text-lg">
              {currentStatus === 'open' 
                ? 'Venha treinar conosco!' 
                : 'Voltamos em breve!'
              }
            </p>
          </div>

          {/* Schedule Grid */}
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Calendar className="text-orange-500 mr-3" size={24} />
              Horários da Semana
            </h3>
            <div className="space-y-4">
              {schedules.map((schedule, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center py-3 px-4 bg-black/30 rounded-lg border border-gray-600"
                >
                  <span className="font-medium text-white">{schedule.day}</span>
                  <div className="flex items-center text-gray-300">
                    <Clock size={16} className="mr-2 text-orange-500" />
                    {schedule.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};