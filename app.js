function App() {
    try {
        const [weather, setWeather] = React.useState(null);
        const [forecast, setForecast] = React.useState(null);
        const [loading, setLoading] = React.useState(false);
        const [error, setError] = React.useState('');

        const handleSearch = async (city) => {
            setLoading(true);
            setError('');
            
            try {
                const [weatherData, forecastData] = await Promise.all([
                    weatherAPI.getCurrentWeather(city),
                    weatherAPI.getForecast(city)
                ]);
                
                setWeather(weatherData);
                setForecast(forecastData);
            } catch (err) {
                setError('Não foi possível encontrar informações para esta cidade. Tente novamente.');
                console.error('Weather API error:', err);
            } finally {
                setLoading(false);
            }
        };

        React.useEffect(() => {
            handleSearch('São Paulo');
        }, []);

        return (
            <div data-name="weather-app" data-file="app.js" className="min-h-screen py-8 px-4">
                <div className="container mx-auto max-w-4xl">
                    <header className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-white mb-2 gradient-text">
                            <i className="fas fa-cloud-sun mr-3"></i>
                            WeatherPro
                        </h1>
                        <p className="text-white/80 text-lg">Previsão do tempo em tempo real</p>
                    </header>

                    <SearchBar onSearch={handleSearch} loading={loading} />

                    {error && (
                        <div className="glass-effect rounded-2xl p-4 mb-6 max-w-md mx-auto">
                            <p className="text-red-300 text-center">
                                <i className="fas fa-exclamation-triangle mr-2"></i>
                                {error}
                            </p>
                        </div>
                    )}

                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                            <WeatherCard weather={weather} />
                            <ForecastCard forecast={forecast} />
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
