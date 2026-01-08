import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter} from 'lucide-react';
import { FaTiktok } from "react-icons/fa";

export function About() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      details: 'Src Mifta, Sidoharjo 2, Negara Ratu, Natar, Lampung Selatan',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      details: '+62 899-5643-121',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'ainigym616@gmail.com',
    },
    {
      icon: Clock,
      title: 'Jam Buka',
      details: 'Senin - Minggu: 08.00 - 22.00',
    },
  ];

  const facilities = [
    'Treadmill',
    'Sepeda Statis',
    'Barbell & Dumbell',
    'Bench Press',
    'Rowing Machine',
    'Cable & Smith Machine',
    'Butterfly Machine',
    'Leg Press',
    'Lat Pulldown',
    'Samsak & Sarung Tinju'
  ];

  return (
    <div className="bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4">
            <span className="text-red-400">Tentang Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Aini Gym
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Gym rumahan dengan suasana nyaman dan harga terjangkau
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl text-white mb-6">Tentang Aini Gym</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-red-400 mb-3">Visi Kami</h4>
                <p className="text-neutral-300 leading-relaxed">
                  Menjadi tempat fitness pilihan dengan suasana kekeluargaan yang membuat setiap orang nyaman untuk memulai dan mempertahankan gaya hidup sehat.
                </p>
              </div>
              <div>
                <h4 className="text-xl text-red-400 mb-3">Mengapa Aini Gym?</h4>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Harga terjangkau untuk semua kalangan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Suasana homey, tidak crowded, dan santuy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Trainer yang ramah dan berpengalaman</span>
                  </li>
                   <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Sangat cocok untuk pemula</span>
                  </li>
                  {/* <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Peralatan berkualitas dan terawat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <span>Lokasi strategis dan mudah dijangkau</span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl text-white mb-6">Peralatan Tersedia</h3>
            {/* <p className="text-neutral-400 mb-6">
              Meskipun gym rumahan, kami menyediakan peralatan yang cukup lengkap untuk kebutuhan latihan:
            </p> */}
            <div className="grid grid-cols-2 gap-4">
              {facilities.map((facility) => (
                <div
                  key={facility}
                  className="flex items-center gap-2 p-3 bg-neutral-900 border border-neutral-800 rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
                  <span className="text-neutral-300">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl text-white text-center mb-12">Hubungi Kami</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white mb-2">{info.title}</h4>
                  <p className="text-neutral-400">{info.details}</p>
                </div>
              );
            })}
          </div>

          {/* Social Media */}
          <div className="text-center pt-8 border-t border-neutral-800">
            <h4 className="text-white mb-6">Follow Us</h4>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/ainigym.011225"
                className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500 transition-all"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@ainigym"
                className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500 transition-all"
              >
                <FaTiktok className="w-5 h-5 text-white" />
              </a>
              {/* <a
                href="#"
                className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500 transition-all"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a> */}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl text-white mb-4">
            Yuk Mulai Latihan di Aini Gym!
          </h3>
          <p className="text-neutral-400 mb-8">
            Gym rumahan dengan suasana santuy dan harga bersahabat. Tunggu apa lagi?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https:wa.me/628995643121?text='Halo%20saya%20ingin%20tanya%20tempat%20gym'">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all">
              Chat WhatsApp
            </button>
            </a>
            <a href="https://maps.app.goo.gl/b4XUr5QCh7CFZR1H7">
            <button className="px-8 py-4 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700">
              Kunjungi Lokasi
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}