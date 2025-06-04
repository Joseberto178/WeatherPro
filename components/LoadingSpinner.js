function LoadingSpinner() {
    try {
        return (
            <div data-name="loading-spinner" data-file="components/LoadingSpinner.js" className="flex flex-col items-center justify-center py-12">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-white/50 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1s'}}></div>
                </div>
                <p className="text-white/80 mt-4 text-lg pulse-animation">
                    <i className="fas fa-cloud-sun mr-2"></i>
                    Carregando previsão...
                </p>
            </div>
        );
    } catch (error) {
        console.error('LoadingSpinner component error:', error);
        reportError(error);
        return null;
    }
}
