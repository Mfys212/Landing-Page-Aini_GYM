import { CreditCard, Clock, Users, Shield, Wifi, Droplet } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MemberInfo() {
  const benefits = [
    {
      icon: Clock,
      title: 'Jam Fleksibel',
      description: 'Latihan dari pagi hingga malam, Senin - Minggu',
    },
    {
      icon: Users,
      title: 'Suasana Kekeluargaan dan Santuy',
      description: 'Komunitas kecil yang saling kenal dan support',
    },
    {
      icon: Shield,
      title: 'Lingkungan Aman',
      description: 'Tempat latihan yang nyaman dan terjaga',
    },
    {
      icon: Wifi,
      title: 'Parkir Motor Gratis',
      description: 'Area parkir yang luas dan aman',
    },
    {
      icon: Droplet,
      title: 'Air Minum Gratis',
      description: 'Air minum tersedia sepuasnya',
    },
    {
      icon: CreditCard,
      title: 'Sistem Member Simpel',
      description: 'Registrasi mudah dan cepat',
    },
  ];

  const membershipSteps = [
    {
      step: '1',
      title: 'Datang Langsung',
      description: 'Kunjungi lokasi gym kami untuk lihat fasilitas',
    },
    {
      step: '2',
      title: 'Pilih Paket',
      description: 'Pilih paket yang sesuai kebutuhan dan budget',
    },
    {
      step: '3',
      title: 'Daftar & Bayar',
      description: 'Isi form sederhana dan lakukan pembayaran',
    },
    {
      step: '4',
      title: 'Mulai Latihan',
      description: 'Langsung bisa mulai latihan di hari yang sama',
    },
  ];

  return (
    <div className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4">
            <span className="text-red-400">Benefit Member</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Keuntungan Jadi Member
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Nikmati berbagai kemudahan untuk member Aini Gym
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-red-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-white mb-2">{benefit.title}</h3>
                <p className="text-neutral-400">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* How to Become Member */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl text-white mb-6">
              Cara Menjadi Member
            </h3>
            <p className="text-neutral-400 mb-8">
              Sangat mudah! Prosesnya cepat dan tidak ribet. Kamu bisa langsung mulai latihan di hari yang sama.
            </p>

            <div className="space-y-6">
              {membershipSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">{item.title}</h4>
                    <p className="text-neutral-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all">
              Hubungi Kami
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734668486909-4637ecd66408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBtZW1iZXIlMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc1MzM0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gym Member Training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-neutral-950 border border-neutral-800 rounded-xl p-6 max-w-xs">
              <div className="text-neutral-400 mb-2">Member Aktif</div>
              <div className="text-3xl text-white">30+ Member Setia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}