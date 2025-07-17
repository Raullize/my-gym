(function ($) {
    "use strict";

    $(document).ready(function () {
        // Menu Mobile
        const menuBtn = $('.menu-btn');
        const menu = $('.menu');
        const header = $('header');

        menu.removeClass('ativo');
        menuBtn.removeClass('ativo');

        // Background rotativo do hero
        const headerBackgrounds = [
            'url(../src/assets/images/carousel-1.jpg)',
            'url(../src/assets/images/carousel-2.jpg)'
        ];
        let currentBgIndex = 0;

        $('.hero').css({
            'background-image': `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ${headerBackgrounds[currentBgIndex]}`
        });

        function alternarBackground() {
            currentBgIndex = (currentBgIndex + 1) % headerBackgrounds.length;
            $('.hero').css({
                'background-image': `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ${headerBackgrounds[currentBgIndex]}`,
                'transition': 'background-image 1s ease-in-out'
            });
        }

        const intervalo = 7500; // 7.5 segundos
        setInterval(alternarBackground, intervalo);

        // Atualizar o ano no footer automaticamente
        const anoAtual = new Date().getFullYear();
        $('.copyright p').text(`© ${anoAtual} MyGYM - Todos os direitos reservados`);

        menuBtn.on('click', function () {
            if (window.innerWidth <= 992) {
                menu.toggleClass('ativo');
                $(this).toggleClass('ativo');
            }
        });

        // Fechar menu ao clicar em um link
        $('.menu-nav a').on('click', function () {
            if (window.innerWidth <= 992) {
                menu.removeClass('ativo');
                menuBtn.removeClass('ativo');
            }
        });

        // Fechar menu ao clicar no overlay
        $('.menu').on('click', function (e) {
            if (e.target === this && window.innerWidth <= 992) {
                menu.removeClass('ativo');
                menuBtn.removeClass('ativo');
            }
        });

        // Garantir que o menu feche ao redimensionar para desktop
        $(window).on('resize', function () {
            if (window.innerWidth > 992) {
                menu.removeClass('ativo');
                menuBtn.removeClass('ativo');
            }
        });

        // Header fixo ao rolar
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                header.addClass('fixo');
                $('.back-to-top').addClass('ativo');
            } else {
                header.removeClass('fixo');
                $('.back-to-top').removeClass('ativo');
            }
        });

        if ($(window).scrollTop() > 100) {
            header.addClass('fixo');
            $('.back-to-top').addClass('ativo');
        }

        // Back to top button
        $('.back-to-top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 800, 'easeInOutExpo');
            return false;
        });

        // Calculadora de IMC
        $('#calcular-imc').on('click', function () {
            const peso = parseFloat($('#peso').val());
            const altura = parseFloat($('#altura').val()) / 100; // cm para metros
            const idade = parseFloat($('#idade').val());
            const genero = $('#genero').val();
            const resultado = $('#resultado-imc');

            if (!peso || !altura) {
                resultado.text('Por favor, preencha pelo menos o peso e a altura para calcular o IMC.');
                resultado.css('display', 'block');
                resultado.css('background-color', 'rgba(255, 0, 0, 0.1)');
                return;
            }

            if (peso <= 0 || altura <= 0) {
                resultado.text('Os valores de peso e altura devem ser maiores que zero.');
                resultado.css('display', 'block');
                resultado.css('background-color', 'rgba(255, 0, 0, 0.1)');
                return;
            }

            const imc = calcularIMC(peso, altura);
            const classificacao = classificarIMC(imc, genero, idade);
            let mensagem = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;

            if (idade && genero) {
                mensagem += calcularInfoAdicional(imc, idade, genero);
            }

            resultado.text(mensagem);
            resultado.css('display', 'block');

            aplicarEstiloResultadoIMC(resultado, classificacao);
        });

        // Slider de depoimentos
        const dots = $('.dot');
        const depoimentos = $('.depoimento');

        if (dots.length > 0 && depoimentos.length > 0) {
            depoimentos.hide();
            depoimentos.first().show();
            dots.first().addClass('ativo');

            dots.each(function (index) {
                $(this).on('click', function () {
                    depoimentos.hide();
                    dots.removeClass('ativo');
                    depoimentos.eq(index).show();
                    $(this).addClass('ativo');
                });
            });
        }

        // Verificar o status da academia (aberta/fechada)
        verificarStatusAcademia();

        // Atualizar o status a cada minuto
        setInterval(verificarStatusAcademia, 60000);
    });

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function classificarIMC(imc, genero, idade) {
        if (imc < 16) return 'Magreza grave';
        if (imc < 17) return 'Magreza moderada';

        if (genero === 'masculino') {
            if (imc < 18.5) return 'Magreza leve';
            if (imc < 25) return 'Peso normal';
            if (imc < 30) return 'Sobrepeso';
            if (imc < 35) return 'Obesidade Grau I';
            if (imc < 40) return 'Obesidade Grau II';
            return 'Obesidade Grau III';
        } else if (genero === 'feminino') {
            if (imc < 18) return 'Magreza leve';
            if (imc < 24) return 'Peso normal';
            if (imc < 29) return 'Sobrepeso';
            if (imc < 34) return 'Obesidade Grau I';
            if (imc < 39) return 'Obesidade Grau II';
            return 'Obesidade Grau III';
        } else {
            if (imc < 18.5) return 'Magreza leve';
            if (imc < 25) return 'Peso normal';
            if (imc < 30) return 'Sobrepeso';
            if (imc < 35) return 'Obesidade Grau I';
            if (imc < 40) return 'Obesidade Grau II';
            return 'Obesidade Grau III';
        }
    }

    function calcularInfoAdicional(imc, idade, genero) {
        let info = '';

        if (genero === 'masculino') {
            if (idade < 30) {
                if (imc < 22) info = '\n\nPara homens jovens, considere ganho de massa muscular.';
                else if (imc > 26) info = '\n\nPara homens jovens, foco em exercícios aeróbicos é recomendado.';
            } else {
                if (imc < 23) info = '\n\nPara homens acima de 30 anos, atenção à saúde óssea e muscular.';
                else if (imc > 28) info = '\n\nPara homens acima de 30 anos, atenção a riscos cardiovasculares.';
            }
        } else if (genero === 'feminino') {
            if (idade < 30) {
                if (imc < 21) info = '\n\nPara mulheres jovens, observe a nutrição e hormônios.';
                else if (imc > 25) info = '\n\nPara mulheres jovens, equilibre exercícios cardio e força.';
            } else {
                if (imc < 22) info = '\n\nPara mulheres acima de 30 anos, atenção à saúde óssea.';
                else if (imc > 27) info = '\n\nPara mulheres acima de 30 anos, avalie risco metabólico.';
            }
        }

        return info;
    }

    function aplicarEstiloResultadoIMC(elemento, classificacao) {
        elemento.css('background-color', '');

        if (classificacao.includes('Magreza')) {
            elemento.css('background-color', 'rgba(255, 193, 7, 0.2)'); // Amarelo
        } else if (classificacao === 'Peso normal') {
            elemento.css('background-color', 'rgba(40, 167, 69, 0.2)'); // Verde
        } else if (classificacao === 'Sobrepeso') {
            elemento.css('background-color', 'rgba(255, 152, 0, 0.2)'); // Laranja
        } else {
            elemento.css('background-color', 'rgba(220, 53, 69, 0.2)'); // Vermelho
        }
    }

    function verificarStatusAcademia() {
        const agora = new Date();
        const diaSemana = agora.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
        const horas = agora.getHours();
        const minutos = agora.getMinutes();
        const horaAtual = horas + minutos / 60;

        const statusIndicator = $('#status-indicator');
        const statusText = $('#status-text');
        const horarioAtual = $('#horario-atual');

        let estaAberta = false;
        let proximaAbertura = '';

        const horaFormatada = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;

        if (diaSemana >= 1 && diaSemana <= 5) {
            if (horaAtual >= 6 && horaAtual < 23) {
                estaAberta = true;
            } else {
                proximaAbertura = horaAtual >= 23 ? 'amanhã às 06:00' : 'hoje às 06:00';
            }
        } else if (diaSemana === 6) {
            if (horaAtual >= 8 && horaAtual < 18) {
                estaAberta = true;
            } else {
                proximaAbertura = horaAtual >= 18 ? 'domingo às 08:00' : 'hoje às 08:00';
            }
        } else {
            if (horaAtual >= 8 && horaAtual < 14) {
                estaAberta = true;
            } else {
                proximaAbertura = horaAtual >= 14 ? 'segunda-feira às 06:00' : 'hoje às 08:00';
            }
        }

        if (estaAberta) {
            statusIndicator.removeClass('fechado').addClass('aberto');
            statusText.removeClass('fechado').addClass('aberto').text('Aberta');

            let horarioFechamento;
            if (diaSemana >= 1 && diaSemana <= 5) {
                horarioFechamento = '23:00';
            } else if (diaSemana === 6) {
                horarioFechamento = '18:00';
            } else {
                horarioFechamento = '14:00';
            }

            horarioAtual.html(`
                <p>Horário atual: <strong>${horaFormatada}</strong></p>
                <p>Fechará às <strong>${horarioFechamento}</strong> de hoje</p>
            `);
        } else {
            statusIndicator.removeClass('aberto').addClass('fechado');
            statusText.removeClass('aberto').addClass('fechado').text('Fechada');

            horarioAtual.html(`
                <p>Horário atual: <strong>${horaFormatada}</strong></p>
                <p>Abrirá <strong>${proximaAbertura}</strong></p>
            `);
        }
    }
})(jQuery);