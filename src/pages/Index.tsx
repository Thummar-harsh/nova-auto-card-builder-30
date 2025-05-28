
import { Phone, Mail, MapPin, Instagram, Facebook, Download } from 'lucide-react';

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

    const blob = new Blob([vCard], { type: 'text/vcard' });
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 text-center relative">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              {/* Logo Placeholder */}
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-blue-800 font-bold text-xl">NA</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">Nova Auto</h1>
              <p className="text-blue-100 text-sm font-medium mb-1">Strong and reliable parts by Nova Auto.</p>
              <p className="text-blue-200 text-xs uppercase tracking-wide">Earthmoving Parts</p>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="p-6 space-y-4">
            {/* Save Contact Button */}
            <button
              onClick={handleSaveContact}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Download size={20} />
              Save Contact
            </button>

            {/* Social Media Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.instagram.com/nova_auto.parts"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Instagram size={18} />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/nova.auto.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Facebook size={18} />
                Facebook
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="px-6 pb-6 space-y-3">
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Contact Information</h3>
            
            {/* Location */}
            <button
              onClick={handleOpenLocation}
              className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-all duration-300 flex items-start gap-3 text-left group"
            >
              <MapPin className="text-red-500 mt-1 group-hover:scale-110 transition-transform duration-300" size={20} />
              <div>
                <p className="text-gray-800 font-medium">Tap to open location</p>
                <p className="text-gray-600 text-sm mt-1">(Rapid Technomat), Shapar - Veraval, Rajkot, Gujarat</p>
              </div>
            </button>

            {/* Phone/WhatsApp */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleCall}
                className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl p-4 transition-all duration-300 flex items-center gap-3 group"
              >
                <Phone className="text-green-600 group-hover:scale-110 transition-transform duration-300" size={20} />
                <div>
                  <p className="text-gray-800 font-medium text-sm">Call</p>
                  <p className="text-gray-600 text-xs">+91 81550 18518</p>
                </div>
              </button>
              <button
                onClick={handleWhatsApp}
                className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl p-4 transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
                <div>
                  <p className="text-gray-800 font-medium text-sm">WhatsApp</p>
                  <p className="text-gray-600 text-xs">+91 81550 18518</p>
                </div>
              </button>
            </div>

            {/* Email */}
            <button
              onClick={handleEmail}
              className="w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-4 transition-all duration-300 flex items-center gap-3 group"
            >
              <Mail className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={20} />
              <div>
                <p className="text-gray-800 font-medium">Email</p>
                <p className="text-gray-600 text-sm">novaauto@outlook.in</p>
              </div>
            </button>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-100">
            <p className="text-gray-500 text-xs">© 2025 Nova Auto. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
