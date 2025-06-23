
import { Sparkles } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
      </div>
      
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl border-4 border-white/20 animate-pulse overflow-hidden">
          <img 
            alt="Nova Auto Logo" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) {
                fallback.style.display = 'flex';
              }
            }} 
            className="w-full h-full rounded-full object-scale-down" 
            src="/lovable-uploads/d0e42aac-604d-4531-b296-25ead1fedd06.jpg" 
          />
          <div className="absolute inset-0 hidden items-center justify-center bg-white rounded-full">
            <span className="text-blue-700 font-bold text-3xl tracking-wide">NA</span>
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
        </div>
        
        {/* Brand Name */}
        <h1 className="text-4xl font-bold text-white mb-2 tracking-wide animate-fade-in">NOVA AUTO</h1>
        <p className="text-blue-200 text-lg font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>RAPID TECHNOMACH</p>
        
        {/* Loading Animation */}
        <div className="flex justify-center space-x-2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <p className="text-blue-100 text-sm mt-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
