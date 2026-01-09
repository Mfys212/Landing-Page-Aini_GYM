import { Dumbbell, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': ['Home', 'Harga', 'Info PT', 'Dokumentasi', 'Tentang'],
    'Layanan': ['Membership Harian', 'Membership Bulanan', 'Personal Training'],
    'Jam Buka': [
      'Senin - Jumat: 08.00 - 22.00',
      'Sabtu - Minggu: 08.00 - 22.00',
      // 'Libur Nasional: Tutup',
    ],
  };


  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Aini Gym</span>
            </div>
            <p className="text-neutral-400 mb-4">
              Gym rumahan dengan suasana nyaman dan harga terjangkau untuk semua kalangan.
            </p>
            <div className="space-y-2 text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Src Mifta, Sidoharjo 2</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400" />
                <span>+62 899-5643-121</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400" />
                <span>ainigym616@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <p
                      className="text-neutral-400 hover:text-red-400 transition-colors"
                    >
                      {link}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400">
              © {currentYear} Aini Gym. All rights reserved.
            </p>
            {/* Website Developer */}
            <div className="mt-1">
              {/* <h3 className="text-white text-sm mb-3">h</h3> */}
              <a
                href="https://databits.co-id.id/"
                // target="_blank"
                // rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity"
                // aria-label="DataBits - Website Developer"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/167419822?s=200&v=4"
                  alt="DataBits Logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-neutral-400 text-sm font-medium">Website created by: Databits</span>
              </a>
            </div>

            <div className="flex gap-6">
              <p className="text-neutral-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </p>
              <p className="text-neutral-400 hover:text-red-400 transition-colors">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}