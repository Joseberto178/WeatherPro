const weatherAPI = {
    API_KEY: 'demo_key',
    BASE_URL: 'https://api.openweathermap.org/data/2.5',

    async getCurrentWeather(city) {
        try {
            // Simulação de dados para demonstração
            const mockData = {
                name: city,
                sys: { country: 'BR' },
                main: {
                    temp: Math.floor(Math.random() * 15) + 20,
                    feels_like: Math.floor(Math.random() * 15) + 22,
                    humidity: Math.floor(Math.random() * 40) + 40
                },
                weather: [{
                    main: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)],
                    description: ['ensolarado', 'parcialmente nublado', 'chuva leve'][Math.floor(Math.random() * 3)]
                }],
                wind: { speed: Math.random() * 10 + 2 },
                visibility: Math.floor(Math.random() * 5000) + 5000
            };

            // Simula delay da API
            await new Promise(resolve => setTimeout(resolve, 1500));
            return mockData;
        } catch (error) {
            throw new Error(`Erro ao buscar clima atual: ${error.message}`);
        }
    },

    async getForecast(city) {
        try {
            // Simulação de dados de previsão
            const mockForecast = {
                list: Array.from({ length: 40 }, (_, i) => ({
                    dt: Date.now() / 1000 + (i * 3 * 3600),
                    main: {
                        temp_max: Math.floor(Math.random() * 10) + 25,
                        temp_min: Math.floor(Math.random() * 10) + 15,
                        humidity: Math.floor(Math.random() * 30) + 50
                    },
                    weather: [{
                        main: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)],
                        description: ['ensolarado', 'nublado', 'chuvoso'][Math.floor(Math.random() * 3)]
                    }]
                }))
            };

            await new Promise(resolve => setTimeout(resolve, 1000));
            return mockForecast;
        } catch (error) {
            throw new Error(`Erro ao buscar previsão: ${error.message}`);
        }
    }
};
