import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NzUzMzQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gym Equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-6">
            <span className="text-red-400">🏠 Gym Rumahan Nyaman</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Latihan <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Nyaman</span> Seperti di Rumah
          </h1>
          
          <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
            Gym rumahan dengan suasana kekeluargaan dan harga terjangkau. Mulai perjalanan fitness-mu dengan nyaman bersama kami!
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/628995643121?text='Halo%20saya%20ingin%20tanya%20tempat%20gym'">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-red-500/50 transition-all">
              Hubungi Kami
              <ArrowRight className="w-5 h-5" />
            </button>
            </a>
            
            <a href="https://maps.app.goo.gl/b4XUr5QCh7CFZR1H7">
            <button className="px-8 py-4 bg-neutral-800 text-white rounded-lg flex items-center gap-2 hover:bg-neutral-700 transition-colors border border-neutral-700">
              <Play className="w-5 h-5" />
              Lihat Lokasi
            </button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-neutral-800">
            <div>
              <div className="text-4xl text-white mb-2">15+</div>
              <div className="text-neutral-400">Member Aktif</div>
            </div>
            <div>
              <div className="text-4xl text-white mb-2">1</div>
              <div className="text-neutral-400">Trainer Berpengalaman</div>
            </div>
            <div>
              <div className="text-4xl text-white mb-2">08-22</div>
              <div className="text-neutral-400">Jam Operasional</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}