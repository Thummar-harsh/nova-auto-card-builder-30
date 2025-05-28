import { Phone, Mail, MapPin, Instagram, Facebook, Download, Sparkles, MessageCircle } from 'lucide-react';
const Index = () => {
  const handleSaveContact = () => {
    // Create vCard data
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Nova Auto
ORG:Nova Auto
TEL;TYPE=WORK,VOICE:+918155018518
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
    window.open('https://wa.me/918155018518', '_blank');
  };
  const handleCall = () => {
    window.open('tel:+918155018518', '_blank');
  };
  const handleEmail = () => {
    window.open('mailto:novaauto@outlook.in', '_blank');
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </div>
      
      <div className="max-w-md w-full relative z-10">
        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/10 to-transparent animate-pulse"></div>
            <div className="relative z-10">
              {/* Enhanced Logo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl border-4 border-white/20 hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img alt="Nova Auto Logo" onError={e => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }} className="w-full h-full rounded-full object-scale-down" src="/lovable-uploads/d0e42aac-604d-4531-b296-25ead1fedd06.jpg" />
                <div className="absolute inset-0 hidden items-center justify-center bg-white rounded-full">
                  <span className="text-blue-700 font-bold text-xl sm:text-2xl tracking-wide">NA</span>
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-wide">Nova Auto</h1>
              <div className="w-12 h-0.5 bg-white/60 mx-auto mb-3"></div>
              <p className="text-blue-100 text-sm sm:text-base font-medium mb-2 leading-relaxed">Strong and reliable parts by Nova Auto.</p>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                <p className="text-blue-100 text-xs sm:text-sm font-semibold uppercase tracking-wider">Earthmoving Parts</p>
              </div>
            </div>
          </div>

          {/* Mobile-First Action Buttons - Prominent placement */}
          <div className="p-4 sm:p-6 space-y-4">
            {/* Primary Action Buttons - Call & WhatsApp */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              <button onClick={handleCall} className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-4 transition-all duration-300 flex flex-col items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 group min-h-[50px] sm:min-h-[60px]\\n rounded-3xl sm:py-[10px]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={20} />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-sm sm:text-base">Call Now</p>
                  <p className="text-green-100 text-xs font-medium">+91 81550 18518</p>
                </div>
              </button>
              
              <button onClick={handleWhatsApp} className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-4 transition-all duration-300 flex flex-col items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 group min-h-[50px] sm:min-h-[60px] rounded-3xl sm:py-[10px]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="text-white" size={20} fill="white" />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-sm sm:text-base">WhatsApp</p>
                  <p className="text-green-100 text-xs font-medium">+91 81550 18518</p>
                </div>
              </button>
            </div>

            {/* Save Contact Button */}
            <button onClick={handleSaveContact} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 sm:py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 group">
              <Download size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-base sm:text-lg">Save Contact</span>
            </button>

            {/* Social Media Links */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <a href="https://www.instagram.com/nova_auto.parts" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-3 sm:py-4 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 group">
                <Instagram size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold text-sm sm:text-base">Instagram</span>
              </a>
              <a href="https://www.facebook.com/nova.auto.2025" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 sm:py-4 px-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 group">
                <Facebook size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold text-sm sm:text-base">Facebook</span>
              </a>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
              <h3 className="text-gray-700 font-semibold text-base sm:text-lg px-3">More Info</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            </div>
            
            {/* Location */}
            <button onClick={handleOpenLocation} className="w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border border-gray-200 hover:border-gray-300 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 flex items-start gap-3 sm:gap-4 text-left group shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-red-600" size={18} />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-semibold text-sm sm:text-base mb-1">Tap to open location</p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">(Rapid Technomat), Shapar - Veraval, Rajkot, Gujarat</p>
              </div>
            </button>

            {/* Email */}
            <button onClick={handleEmail} className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200 hover:border-blue-300 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 flex items-center gap-3 sm:gap-4 group shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-blue-600" size={18} />
              </div>
              <div className="text-left">
                <p className="text-gray-800 font-semibold text-sm sm:text-base">Email</p>
                <p className="text-gray-600 text-xs sm:text-sm">novaauto@outlook.in</p>
              </div>
            </button>
          </div>

          {/* Enhanced Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 py-4 sm:py-5 text-center border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">Trusted by professionals</p>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-gray-500 text-xs">© 2025 Nova Auto. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;