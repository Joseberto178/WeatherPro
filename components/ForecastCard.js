function ForecastCard({ forecast }) {
    try {
        if (!forecast || !forecast.list) return null;

        const getDailyForecast = () => {
            const daily = {};
            
            forecast.list.forEach(item => {
                const date = new Date(item.dt * 1000).toDateString();
                if (!daily[date]) {
                    daily[date] = {
                        date: item.dt,
                        temp_max: item.main.temp_max,
                        temp_min: item.main.temp_min,
                        weather: item.weather[0],
                        humidity: item.main.humidity
                    };
                } else {
                    daily[date].temp_max = Math.max(daily[date].temp_max, item.main.temp_max);
                    daily[date].temp_min = Math.min(daily[date].temp_min, item.main.temp_min);
                }
            });
            
            return Object.values(daily).slice(0, 5);
        };

        const getWeatherIcon = (condition) => {
            const icons = {
                'clear': 'fas fa-sun',
                'clouds': 'fas fa-cloud',
                'rain': 'fas fa-cloud-rain',
                'snow': 'fas fa-snowflake',
                'thunderstorm': 'fas fa-bolt'
            };
            return icons[condition.toLowerCase()] || 'fas fa-cloud';
        };

        const dailyForecast = getDailyForecast();

        return (
            <div data-name="forecast-card" data-file="components/ForecastCard.js" className="glass-effect rounded-3xl p-6 shadow-2xl fade-in mt-6">
                <h3 className="text-xl font-semibold text-white mb-4 text-center text-enhanced">
                    <i className="fas fa-calendar-alt mr-2 text-yellow-300"></i>
                    Previsão para 5 dias
                </h3>
                
                <div className="space-y-3">
                    {dailyForecast.map((day, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-all duration-300">
                            <div className="flex items-center space-x-3">
                                <i className={`${getWeatherIcon(day.weather.main)} text-2xl text-yellow-300`}></i>
                                <div>
                                    <p className="text-white font-medium text-enhanced">
                                        {index === 0 ? 'Hoje' : new Date(day.date * 1000).toLocaleDateString('pt-BR', { weekday: 'short' })}
                                    </p>
                                    <p className="text-white/90 text-sm capitalize text-enhanced">{day.weather.description}</p>
                                </div>
                            </div>
                            
                            <div className="text-right">
                                <p className="text-white font-semibold text-enhanced">
                                    {Math.round(day.temp_max)}° / {Math.round(day.temp_min)}°
                                </p>
                                <p className="text-white/90 text-sm text-enhanced">
                                    <i className="fas fa-tint mr-1 text-blue-300"></i>{day.humidity}%
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('ForecastCard component error:', error);
        reportError(error);
        return null;
    }
}
