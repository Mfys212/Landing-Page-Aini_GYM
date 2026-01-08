import { Award, Target, TrendingUp, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PTInfo() {
  const trainers = [
    {
      name: 'Cecep',
      specialty: 'Strength and Muscle Training',
      experience: '4 Tahun',
      certification: 'GYM Instructor',
    },
    {
      name: 'Cecep',
      specialty: 'Stamina/Endurance Training',
      experience: '1 Tahun',
      certification: 'Certified Boxing',
    },
  ];

  const ptPackages = [
    {
      sessions: 'Personal Trainer GYM',
      price: '45.000',
      duration: 'Cocok yang baru pertama nge-gym',
      features: ['1x pertemuan', 'Program personal', 'Konsultasi Latihan', 'Waktu Fleksibel (16:30-22:00)'],
      message: 'Halo saya ingin tanya info PT GYM di Aini GYM',
    },
    {
      sessions: 'Personal Trainer GYM',
      price: '400.000',
      duration: 'Cocok untuk membangun & menjaga otot',
      features: ['10x pertemuan', 'Program personal', 'Konsultasi Latihan', 'Waktu Fleksibel (16:30-22:00)'],
      message: 'Halo saya ingin tanya info PT GYM di Aini GYM',
    },
    {
      sessions: 'Personal Trainer GYM',
      price: '750.000',
      duration: 'Lebih Hemat',
      features: ['20x pertemuan', 'Program personal', 'Konsultasi Latihan', 'Waktu Fleksibel (16:30-22:00)'],
      message: 'Halo saya ingin tanya info PT GYM di Aini GYM',
      popular: true,
    },
    {
      sessions: 'Personal Trainer Kardio',
      price: '40.000',
      duration: 'Untuk memulai membangun endurance',
      features: ['1x pertemuan', 'Program personal', 'Waktu Fleksibel (16:30-22:00)'],
      message: 'Halo saya ingin tanya info PT Kardio di Aini GYM',
    },
    {
      sessions: 'Personal Trainer Kardio',
      price: '350.000',
      duration: 'Cocok untuk menurunkan berat badan cepat',
      features: ['10x pertemuan', 'Program personal', 'Waktu Fleksibel (16:30-22:00)'],
      message: 'Halo saya ingin tanya info PT Kardio di Aini GYM',
      popular: true,
    },
    {
      sessions: 'Personal Trainer Kardio',
      price: '650.000',
      duration: 'Lebih hemat',
      features: ['20x pertemuan', 'Program personal', 'Waktu Fleksibel (16:30-22:00)'],
      message: 'Halo saya ingin tanya info PT Kardio di Aini GYM',
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Program Personal',
      description: 'Program latihan disesuaikan dengan kondisi dan tujuanmu',
    },
    {
      icon: TrendingUp,
      title: 'Fokus dan Konsisten',
      description: 'Tracking progress untuk hasil yang maksimal',
    },
    {
      icon: Award,
      title: 'Trainer Berpengalaman',
      description: 'Didampingi trainer yang sudah berpengalaman',
    },
    {
      icon: Calendar,
      title: 'Jadwal Fleksibel (16:30-22:00)',
      description: 'Sesuaikan jadwal dengan waktu luangmu',
    },
  ];

  return (
    <div className="bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4">
            <span className="text-red-400">Personal Training</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Latihan Bareng Personal Trainer
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Capai target fitness-mu lebih cepat dengan bimbingan trainer berpengalaman
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="src/Images/coach2.jpg"
                alt="Personal Trainer Workout"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl text-white mb-6">
              Kenapa Perlu PT?
            </h3>
            <p className="text-neutral-400 mb-8">
              Personal trainer membantu kamu latihan dengan teknik yang benar, menghindari cedera, dan memberi motivasi untuk konsisten mencapai target.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title}>
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-white mb-2">{benefit.title}</h4>
                    <p className="text-neutral-400">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trainers Section */}
        <div className="mb-20">
          <h3 className="text-3xl text-white text-center mb-12">
            Trainer Kami
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-colors"
              >
                {/* <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-4" /> */}
                <img
                  src="src/Images/ppcoach.jpeg"
                  alt={trainer.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-red-500"
                />
                <h4 className="text-xl text-white mb-2">{trainer.name}</h4>
                <p className="text-red-400 mb-4">{trainer.specialty}</p>
                <div className="space-y-2 text-neutral-400">
                  <div>📅 Pengalaman: {trainer.experience}</div>
                  <div>🏆 {trainer.certification}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PT Packages */}
        <div>
          <h3 className="text-3xl text-white text-center mb-12">
            Paket Personal Training
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ptPackages.map((pkg) => (
              <div
                key={pkg.sessions}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-red-500/20 to-neutral-900 border-2 border-red-500'
                    : 'bg-neutral-900 border border-neutral-800'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full mb-4">
                    Paling Laris
                  </div>
                )}
                <h4 className="text-2xl text-white mb-2">{pkg.sessions}</h4>
                <p className="text-neutral-400 mb-4">{pkg.duration}</p>
                <div className="mb-6">
                  <span className="text-neutral-400">Rp</span>
                  <span className="text-4xl text-white"> {pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="text-neutral-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/62895609830910?text=${encodeURIComponent(pkg.message)}`}>
                <button
                  className={`w-full py-3 rounded-lg transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                      : 'bg-neutral-800 text-white hover:bg-neutral-700'
                  }`}
                >
                  Hubungi PT
                </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}