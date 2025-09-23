'use client';

import { useState } from 'react';
import { Calculator, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { IMCResult } from '@/types';

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<IMCResult | null>(null);
  const [errors, setErrors] = useState<{ weight?: string; height?: string }>({});

  const validateInputs = (): boolean => {
    const newErrors: { weight?: string; height?: string } = {};

    const weightNum = parseFloat(weight.replace(',', '.'));
    const heightNum = parseFloat(height.replace(',', '.'));

    if (!weight || isNaN(weightNum) || weightNum <= 0 || weightNum > 500) {
      newErrors.weight = 'Digite um peso válido (1-500 kg)';
    }

    if (!height || isNaN(heightNum) || heightNum <= 0 || heightNum > 3) {
      newErrors.height = 'Digite uma altura válida (0.5-3.0 m)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateBMI = () => {
    if (!validateInputs()) return;

    const weightNum = parseFloat(weight.replace(',', '.'));
    const heightNum = parseFloat(height.replace(',', '.'));
    
    const bmi = weightNum / (heightNum * heightNum);
    
    let category: string;
    let color: string;
    let recommendation: string;

    if (bmi < 18.5) {
      category = 'Abaixo do peso';
      color = 'text-blue-600';
      recommendation = 'Consulte um nutricionista para ganhar peso de forma saudável.';
    } else if (bmi < 25) {
      category = 'Peso normal';
      color = 'text-green-600';
      recommendation = 'Parabéns! Mantenha seus hábitos saudáveis.';
    } else if (bmi < 30) {
      category = 'Sobrepeso';
      color = 'text-yellow-600';
      recommendation = 'Considere uma dieta balanceada e exercícios regulares.';
    } else {
      category = 'Obesidade';
      color = 'text-red-600';
      recommendation = 'Procure orientação médica e nutricional.';
    }

    setResult({
      bmi: parseFloat(bmi.toFixed(1)),
      category,
      color,
      recommendation
    });
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setResult(null);
    setErrors({});
  };

  return (
    <section id="imc" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Calculadora de <span className="text-orange-500 font-semibold">IMC</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra seu Índice de Massa Corporal e receba orientações personalizadas
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Calculator className="text-orange-500 mr-3" size={28} />
              <h3 className="text-2xl font-semibold text-gray-800">Calcule seu IMC</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                  Peso (kg)
                </label>
                <input
                  id="weight"
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Ex: 70.5"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.weight ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.weight && (
                  <p className="text-red-500 text-sm mt-1">{errors.weight}</p>
                )}
              </div>

              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
                  Altura (m)
                </label>
                <input
                  id="height"
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Ex: 1.75"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.height ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.height && (
                  <p className="text-red-500 text-sm mt-1">{errors.height}</p>
                )}
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={calculateBMI}
                className="flex-1"
              >
                Calcular IMC
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={resetCalculator}
              >
                Limpar
              </Button>
            </div>

            {result && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  Seu Resultado
                </h4>
                
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    {result.bmi}
                  </div>
                  <div className={`text-xl font-semibold ${result.color}`}>
                    {result.category}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-start">
                    <Info className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{result.recommendation}</p>
                  </div>
                </div>
              </div>
            )}

            {/* IMC Reference Table */}
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Tabela de Referência IMC</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span>Abaixo do peso:</span>
                  <span className="text-blue-600 font-medium">Menor que 18,5</span>
                </div>
                <div className="flex justify-between">
                  <span>Peso normal:</span>
                  <span className="text-green-600 font-medium">18,5 - 24,9</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobrepeso:</span>
                  <span className="text-yellow-600 font-medium">25,0 - 29,9</span>
                </div>
                <div className="flex justify-between">
                  <span>Obesidade:</span>
                  <span className="text-red-600 font-medium">30,0 ou mais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};