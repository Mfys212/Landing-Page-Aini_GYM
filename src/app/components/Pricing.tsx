import { Check, Star } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Harian (Pelajar)',
      price: '5.000',
      period: '/hari',
      description: 'Cocok untuk yang ingin coba-coba dulu',
      features: [
        'Khusus untuk pelajar dan mahasiswa',
        'Akses gym 1 hari',
        'Air minum gratis',
        'Parkir gratis',
      ],
      message: 'Halo saya ingin tanya paket pelajar',
      popular: false,
    },
    {
      name: 'Bulanan (Pelajar)',
      price: '50.000',
      period: '/bulan',
      description: 'Cocok untuk yang rutin',
      features: [
        'Khusus untuk pelajar dan mahasiswa',
        'Akses gym setiap hari selama sebulan',
        'Air minum gratis',
        'Parkir gratis',
      ],
      message: 'Halo saya ingin tanya paket pelajar',
      popular: true,
    },
    {
      name: '3 Bulan (Pelajar)',
      price: '140.000',
      period: '/3 bulan',
      description: 'Hemat Rp 10.000 dengan paket ini',
      features: [
        'Khusus untuk pelajar dan mahasiswa',
        'Akses gym setiap hari selama 3 bulan',
        'Air minum gratis',
        'Parkir gratis',
      ],
      message: 'Halo saya ingin tanya paket pelajar',
      popular: false,
    },
    {
      name: 'Harian (Ibu-Ibu)',
      price: '5.000',
      period: '/hari',
      description: 'Cocok untuk yang ingin coba-coba dulu',
      features: [
        'Khusus untuk ibu-ibu',
        'Akses gym 1 hari',
        'Air minum gratis',
        'Parkir gratis',
      ],
      message: 'Halo saya ingin tanya paket ibu-ibu',
      popular: false,
    },
    {
      name: 'Bulanan (Ibu-Ibu)',
      price: '60.000',
      period: '/bulan',
      description: 'Cocok untuk yang rutin',
      features: [
        'Khusus untuk ibu-ibu',
        'Akses gym setiap hari selama sebulan',
        'Air minum gratis',
        'Parkir gratis',
      ],
      message: 'Halo saya ingin tanya paket ibu-ibu',
      popular: false,
    },
    {
      name: '3 Bulan (Ibu-Ibu)',
      price: '160.000',
      period: '/3 bulan',
      description: 'Hemat Rp 20.000 dengan paket ini',
      features: [
        'Khusus untuk ibu-ibu',
        'Akses gym setiap hari selama 3 bulan',
        'Air minum gratis',
        'Parkir gratis',
      ],
      message: 'Halo saya ingin tanya paket ibu-ibu',
      popular: true,
    },
    {
      name: 'Harian (Pria Dewasa)',
      price: '5.000',
      period: '/hari',
      description: 'Cocok untuk yang ingin coba-coba dulu',
      features: [
        'Khusus untuk pria dewasa',
        'Akses gym 1 hari',
        'Air minum gratis',
        'Parkir gratis',
      ],
      message: 'Halo saya ingin tanya paket pria dewasa',
      popular: false,
    },
    {
      name: 'Bulanan (Pria Dewasa)',
      price: '80.000',
      period: '/bulan',
      description: 'Cocok untuk yang rutin',
      features: [
        'Khusus untuk pria dewasa',
        'Akses gym setiap hari selama sebulan',
        'Air minum gratis',
        'Parkir gratis',
      ],
      message: 'Halo saya ingin tanya paket pria dewasa',
      popular: false,
    },
    {
      name: '3 Bulan (Pria Dewasa)',
      price: '210.000',
      period: '/3 bulan',
      description: 'Hemat Rp 30.000 dengan paket ini',
      features: [
        'Khusus untuk pria dewasa',
        'Akses gym setiap hari selama 3 bulan',
        'Air minum gratis',
        'Parkir gratis',
      ],
      message: 'Halo saya ingin tanya paket pria dewasa',
      popular: true,
    },
  ];

  return (
    <div className="bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4">
            <span className="text-red-400">Harga Terjangkau</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Pilih Paket yang Sesuai
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Harga ramah di kantong untuk kesehatan tubuhmu
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-red-500/20 to-neutral-900 border-2 border-red-500'
                  : 'bg-neutral-900 border border-neutral-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Paling Laris
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-400">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-neutral-400">Rp</span>
                  <span className="text-5xl text-white">{plan.price}</span>
                  <span className="text-neutral-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href={`https://wa.me/628995643121?text=${encodeURIComponent(plan.message)}`}>
              <button
                className={`w-full py-4 rounded-lg transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg hover:shadow-red-500/50'
                    : 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
                }`}
              >
                Hubungin Kami
              </button>
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <div className="mt-12 text-center">
          <p className="text-neutral-400">
            💳 Metode Pembayaran: Tunai / Transfer Bank
          </p>
        </div> */}
      </div>
    </div>
  );
}