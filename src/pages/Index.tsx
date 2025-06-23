
import { Phone, Mail, MapPin, Instagram, Facebook, Download, Sparkles, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Add staggered animation for content
      setTimeout(() => setShowContent(true), 200);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSaveContact = () => {
    // Create vCard data with all phone numbers
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Nova Auto
ORG:Rapid Technomach
TEL;TYPE=WORK,VOICE:+918140251789
TEL;TYPE=CELL:+918155018518
TEL;TYPE=CELL:+917211175160
TEL;TYPE=CELL:+918200005641
EMAIL;TYPE=WORK:novaauto@outlook.in
ADR;TYPE=WORK:;;Rapid Technomat, Shapar - Veraval;Rajkot;Gujarat;;India
URL:https://www.instagram.com/nova_auto.parts
NOTE:Strong and reliable parts by Nova Auto. Earthmoving Parts
END:VCARD`;
    const blob = new Blob([vCard], {
      type: 'text/vcard'
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'nova-auto-contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleOpenLocation = () => {
    window.open('https://www.google.com/maps/place/Rapid+Technomach/@22.1483596,70.8018007,17z/data=!3m1!4b1!4m6!3m5!1s0x3958353a80431987:0x572781a6ab2252b3!8m2!3d22.1483596!4d70.8018007!16s%2Fg%2F11twc18h3g?entry=ttu', '_blank');
  };
  const handleWhatsApp = () => {
    window.open('https://wa.me/918140251789', '_blank');
  };
  const handleCall = () => {
    window.open('tel:+918140251789', '_blank');
  };
  const handleEmail = () => {
    window.open('mailto:novaauto@outlook.in', '_blank');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <div className={`max-w-md w-full relative z-10 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Main Card with enhanced styling */}
        <div className="bg-white/98 backdrop-blur-lg rounded-3xl shadow-2xl shadow-black/20 overflow-hidden border border-white/30 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-700 hover:-translate-y-2 group">
          {/* Header Section with enhanced gradient */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 via-indigo-700 to-purple-700 text-white p-6 sm:p-8 text-center relative overflow-hidden">
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
            
            <div className="relative z-10">
              {/* Enhanced Logo with glow effect */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl border-4 border-white/30 hover:scale-110 transition-all duration-500 overflow-hidden group-hover:shadow-blue-300/50 relative">
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
                  <span className="text-blue-700 font-bold text-2xl sm:text-3xl tracking-wide">NA</span>
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-pulse" />
                <Star className="absolute -bottom-1 -left-1 w-4 h-4 text-yellow-300 animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-wide bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Nova Auto</h1>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-white/60"></div>
                  <Star className="w-4 h-4 text-yellow-400" />
                  <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-white/60"></div>
                </div>
                <p className="text-blue-100 text-base sm:text-lg font-medium mb-4 leading-relaxed">Rapid Technomach</p>
                <div className="inline-block bg-gradient-to-r from-white/20 to-white/30 backdrop-blur-sm px-4 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/20">
                  <p className="text-blue-100 text-sm sm:text-base font-semibold uppercase tracking-wider">Earthmoving Parts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Primary Action Buttons with improved styling */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              <button 
                onClick={handleCall} 
                className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-bold py-5 px-4 transition-all duration-500 flex flex-col items-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-2 active:scale-95 group rounded-3xl border border-green-400/20"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 relative">
                  <Phone className="text-white w-6 h-6" />
                  <div className="absolute inset-0 bg-white/10 rounded-full animate-ping group-hover:animate-none"></div>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-base sm:text-lg">Call Now</p>
                  <p className="text-green-100 text-xs sm:text-sm font-medium">+91 81402 51789</p>
                </div>
              </button>
              
              <button 
                onClick={handleWhatsApp} 
                className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-bold py-5 px-4 transition-all duration-500 flex flex-col items-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-2 active:scale-95 group rounded-3xl border border-green-400/20"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 relative">
                  <MessageCircle className="text-white w-6 h-6" fill="white" />
                  <div className="absolute inset-0 bg-white/10 rounded-full animate-ping group-hover:animate-none"></div>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-base sm:text-lg">WhatsApp</p>
                  <p className="text-green-100 text-xs sm:text-sm font-medium">+91 81402 51789</p>
                </div>
              </button>
            </div>

            {/* Enhanced Save Contact Button */}
            <button 
              onClick={handleSaveContact} 
              className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold py-4 sm:py-5 px-6 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 active:scale-95 group border border-blue-400/20"
            >
              <Download size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg sm:text-xl">Save Contact</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Enhanced Social Media Links */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <a 
                href="https://www.instagram.com/nova_auto.parts" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:via-rose-600 hover:to-purple-700 text-white font-medium py-4 sm:py-5 px-4 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:shadow-pink-500/30 transform hover:-translate-y-1 active:scale-95 group border border-pink-400/20"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold text-sm sm:text-base">Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/nova.auto.2025" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white font-medium py-4 sm:py-5 px-4 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 active:scale-95 group border border-blue-400/20"
              >
                <Facebook size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold text-sm sm:text-base">Facebook</span>
              </a>
            </div>
          </div>

          {/* Enhanced Additional Contact Information */}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1"></div>
              <h3 className="text-gray-700 font-bold text-lg sm:text-xl px-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-500" />
                More Info
                <Star className="w-4 h-4 text-blue-500" />
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1"></div>
            </div>
            
            {/* Enhanced Location */}
            <button 
              onClick={handleOpenLocation} 
              className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 hover:from-gray-100 hover:via-gray-50 hover:to-gray-100 border border-gray-200 hover:border-gray-300 rounded-2xl p-5 sm:p-6 transition-all duration-500 flex items-start gap-4 sm:gap-5 text-left group shadow-lg hover:shadow-xl hover:shadow-gray-200/50 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-bold text-base sm:text-lg mb-2 flex items-center gap-2">
                  Tap to open location
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">(Rapid Technomat), Shapar - Veraval, Rajkot, Gujarat</p>
              </div>
            </button>

            {/* Enhanced Email */}
            <button 
              onClick={handleEmail} 
              className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 hover:from-blue-100 hover:via-indigo-100 hover:to-purple-100 border border-blue-200 hover:border-blue-300 rounded-2xl p-5 sm:p-6 transition-all duration-500 flex items-center gap-4 sm:gap-5 group shadow-lg hover:shadow-xl hover:shadow-blue-200/50 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Mail className="text-white w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <p className="text-gray-800 font-bold text-base sm:text-lg flex items-center gap-2">
                  Email
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </p>
                <p className="text-gray-600 text-sm sm:text-base">novaauto@outlook.in</p>
              </div>
            </button>

            {/* Enhanced Additional Phone Numbers */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-lg">
              <h4 className="text-gray-800 font-bold text-base sm:text-lg mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-500" />
                Additional Contact Numbers
              </h4>
              <div className="grid grid-cols-1 gap-3 text-sm sm:text-base text-gray-700">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone size={16} className="text-green-600" />
                  </div>
                  <span className="font-medium">+91 81550 18518</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone size={16} className="text-blue-600" />
                  </div>
                  <span className="font-medium">+91 72111 75160</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Phone size={16} className="text-purple-600" />
                  </div>
                  <span className="font-medium">+91 82000 05641</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 px-6 sm:px-8 py-6 sm:py-8 text-center border-t border-gray-200">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <Star className="w-4 h-4 text-yellow-500" />
              <p className="text-gray-700 text-sm sm:text-base font-semibold">Trusted by professionals</p>
              <Star className="w-4 h-4 text-yellow-500" />
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">© 2025 Nova Auto. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
