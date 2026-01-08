import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const images = [
    {
      url: 'src/Images/latihan.jpeg',
      caption: 'Latihan Bersama',
    },
    {
      url: 'src/Images/pt.jpeg',
      caption: 'Sesi Training',
    },
    {
      url: 'src/Images/coach.jpeg',
      caption: 'Member Latihan',
    },
    {
      url: 'src/Images/latihan_bersama.jpeg',
      caption: 'Latihan Bersama',
    },
    {
      url: 'src/Images/kardio.jpeg',
      caption: 'Kardio',
    },
  ];

  const achievements = [
    {
      title: '3 Tahun',
      description: 'Melayani dengan dedikasi',
    },
    {
      title: '30+ Member',
      description: 'Member setia yang puas',
    },
    {
      title: '2 Trainer',
      description: 'Trainer berpengalaman',
    },
    {
      title: 'Suasana Homey',
      description: 'Nyaman seperti di rumah',
    },
  ];

  return (
    <div className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-4">
            <span className="text-red-400">Galeri Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Dokumentasi Aini Gym
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Lihat suasana latihan di gym kami
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-20">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <div className={index === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}>
                <ImageWithFallback
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl">{image.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        {/* <div>
          <h3 className="text-3xl text-white text-center mb-12">
            Tentang Kami
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="text-center p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-red-500/50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💪</span>
                </div>
                <h4 className="text-xl text-white mb-2">{achievement.title}</h4>
                <p className="text-neutral-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Testimonial Section */}
        {/* <div className="mt-20">
          <h3 className="text-3xl text-white text-center mb-12">
            Apa Kata Member
          </h3>
          <div className="grid md:grid-cols-3 gap-8"> 
            {[
              {
                name: 'Budi',
                role: 'Member sejak 2023',
                text: 'Tempatnya enak, ga crowded, trainer ramah. Harga juga terjangkau banget!',
              },
              {
                name: 'Siti',
                role: 'Member sejak 2024',
                text: 'Gym rumahan tapi peralatannya lengkap. Suasananya juga nyaman, kayak latihan di rumah sendiri.',
              },
              {
                name: 'Andi',
                role: 'Member sejak 2022',
                text: 'Recommended buat yang cari gym dengan suasana kekeluargaan. Owner & trainer nya baik!',
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-red-500/50 transition-colors"
              >
                <div className="text-yellow-500 mb-4">★★★★★</div>
                <p className="text-neutral-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full" />
                  <div>
                    <div className="text-white">{testimonial.name}</div>
                    <div className="text-neutral-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}