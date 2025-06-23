import { Phone, Mail, MapPin, Instagram, Facebook, Download, Sparkles, MessageCircle, Star, ArrowRight, Building2, Users, Award } from 'lucide-react';
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
NOTE:Professional earthmoving parts supplier by Nova Auto
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
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
      </div>
      
      <div className={`max-w-md w-full relative z-10 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Professional Main Card */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl shadow-black/10 overflow-hidden border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          
          {/* Professional Header Section */}
          <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            
            <div className="relative z-10">
              {/* Professional Logo */}
              <div className="w-24 h-24 bg-white rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg border border-gray-200 hover:scale-105 transition-all duration-500 overflow-hidden group relative">
                <img alt="Nova Auto Logo" onError={e => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }} className="w-full h-full rounded-xl object-scale-down" src="/lovable-uploads/d0e42aac-604d-4531-b296-25ead1fedd06.jpg" />
                <div className="absolute inset-0 hidden items-center justify-center bg-white rounded-xl">
                  <span className="text-slate-700 font-bold text-2xl tracking-wide">NA</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-3xl font-bold mb-2 tracking-wide text-white">NOVA AUTO</h1>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-200"></div>
                  <Building2 className="w-4 h-4 text-blue-200" />
                  <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-200"></div>
                </div>
                <p className="text-blue-100 text-lg font-medium mb-4">Rapid Technomach</p>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                  <Award className="w-4 h-4 text-blue-200" />
                  <p className="text-blue-100 text-sm font-medium uppercase tracking-wide">EARTHMOVING PARTS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Action Buttons */}
          <div className="p-8 space-y-6">
            {/* Primary Contact Actions */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button onClick={handleCall} className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-4 px-4 transition-all duration-300 flex flex-col items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 group rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">Call Now</p>
                  <p className="text-emerald-100 text-xs">+91 81402 51789</p>
                </div>
              </button>
              
              <button onClick={handleWhatsApp} className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-4 transition-all duration-300 flex flex-col items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 group rounded-xl">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <MessageCircle className="text-white w-5 h-5" fill="white" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">WhatsApp</p>
                  <p className="text-green-100 text-xs">+91 81402 51789</p>
                </div>
              </button>
            </div>

            {/* Professional Save Contact Button */}
            <button onClick={handleSaveContact} className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 group">
              <Download size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg">Save Contact</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Professional Social Media Links */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.instagram.com/nova_auto.parts" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-medium py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 group">
                <Instagram size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-sm">Instagram</span>
              </a>
              <a href="https://www.facebook.com/nova.auto.2025" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 group">
                <Facebook size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-sm">Facebook</span>
              </a>
            </div>
          </div>

          {/* Professional Contact Information */}
          <div className="px-8 pb-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
              <h3 className="text-gray-700 font-semibold text-lg px-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-600" />
                Contact Information
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
            </div>
            
            {/* Professional Location */}
            <button onClick={handleOpenLocation} className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-xl p-5 transition-all duration-300 flex items-start gap-4 text-left group shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                <MapPin className="text-red-600 w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
                  View Location
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">(Rapid Technomat), Shapar - Veraval, Rajkot, Gujarat</p>
              </div>
            </button>

            {/* Professional Email */}
            <button onClick={handleEmail} className="w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 rounded-xl p-5 transition-all duration-300 flex items-center gap-4 group shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <Mail className="text-blue-600 w-5 h-5" />
              </div>
              <div className="text-left flex-1">
                <p className="text-gray-800 font-semibold text-base flex items-center gap-2">
                  Email Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </p>
                <p className="text-gray-600 text-sm">novaauto@outlook.in</p>
              </div>
            </button>

            {/* Professional Additional Phone Numbers */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm">
              <h4 className="text-gray-800 font-semibold text-base mb-4 flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-600" />
                Additional Contact Numbers
              </h4>
              <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors duration-200">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone size={14} className="text-green-600" />
                  </div>
                  <span className="font-medium">+91 81550 18518</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors duration-200">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone size={14} className="text-blue-600" />
                  </div>
                  <span className="font-medium">+91 72111 75160</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors duration-200">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Phone size={14} className="text-purple-600" />
                  </div>
                  <span className="font-medium">+91 82000 05641</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Footer */}
          <div className="bg-gray-50 px-8 py-6 text-center border-t border-gray-200">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <p className="text-gray-700 text-sm font-medium">Trusted Professional Service</p>
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            </div>
            <p className="text-gray-500 text-xs">© 2025 Nova Auto - Rapid Technomach. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;