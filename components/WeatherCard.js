function WeatherCard({ weather }) {
    try {
        if (!weather) return null;

        const getWeatherIcon = (condition) => {
            const icons = {
                'clear': 'fas fa-sun',
                'clouds': 'fas fa-cloud',
                'rain': 'fas fa-cloud-rain',
                'snow': 'fas fa-snowflake',
                'thunderstorm': 'fas fa-bolt',
                'drizzle': 'fas fa-cloud-drizzle',
                'mist': 'fas fa-smog',
                'fog': 'fas fa-smog'
            };
            return icons[condition.toLowerCase()] || 'fas fa-cloud';
        };

        const formatTime = (timestamp) => {
            return new Date(timestamp * 1000).toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit'
            });
        };

        return (
            <div data-name="weather-card" data-file="components/WeatherCard.js" className="glass-effect rounded-3xl p-8 shadow-2xl fade-in max-w-md mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2 text-enhanced">{weather.name}</h2>
                    <p className="text-white/90 mb-6 text-enhanced">{weather.sys.country}</p>
                    
                    <div className="weather-icon text-8xl mb-6">
                        <i className={getWeatherIcon(weather.weather[0].main)}></i>
                    </div>
                    
                    <div className="mb-6">
                        <h1 className="text-6xl font-light text-white mb-2 text-enhanced">
                            {Math.round(weather.main.temp)}°
                        </h1>
                        <p className="text-xl text-white/95 capitalize text-enhanced">
                            {weather.weather[0].description}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-white/95">
                        <div className="text-center">
                            <i className="fas fa-thermometer-half text-lg mb-2 text-yellow-300"></i>
                            <p className="text-sm text-enhanced">Sensação</p>
                            <p className="font-semibold text-enhanced">{Math.round(weather.main.feels_like)}°</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-tint text-lg mb-2 text-blue-300"></i>
                            <p className="text-sm text-enhanced">Umidade</p>
                            <p className="font-semibold text-enhanced">{weather.main.humidity}%</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-wind text-lg mb-2 text-gray-300"></i>
                            <p className="text-sm text-enhanced">Vento</p>
                            <p className="font-semibold text-enhanced">{Math.round(weather.wind.speed * 3.6)} km/h</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-eye text-lg mb-2 text-green-300"></i>
                            <p className="text-sm text-enhanced">Visibilidade</p>
                            <p className="font-semibold text-enhanced">{Math.round(weather.visibility / 1000)} km</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('WeatherCard component error:', error);
        reportError(error);
        return null;
    }
}
