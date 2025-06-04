function SearchBar({ onSearch, loading }) {
    try {
        const [city, setCity] = React.useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (city.trim()) {
                onSearch(city.trim());
            }
        };

        return (
            <div data-name="search-bar" data-file="components/SearchBar.js" className="w-full max-w-md mx-auto mb-8">
                <form onSubmit={handleSubmit} className="relative">
                    <div className="glass-effect rounded-2xl p-4 shadow-xl">
                        <div className="flex items-center space-x-3">
                            <i className="fas fa-search text-white/70 text-lg"></i>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Digite o nome da cidade..."
                                className="flex-1 bg-transparent text-white placeholder-white/70 outline-none text-lg"
                                disabled={loading}
                            />
                            <button
                                type="submit"
                                disabled={loading || !city.trim()}
                                className="bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl p-2 transition-all duration-300"
                            >
                                <i className="fas fa-arrow-right text-white"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    } catch (error) {
        console.error('SearchBar component error:', error);
        reportError(error);
        return null;
    }
}
