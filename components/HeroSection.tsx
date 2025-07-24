import Link from 'next/link';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-locus-green via-locus-green/95 to-locus-green/90 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-20 h-20 border border-white/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-28 h-28 border border-white/20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white/30 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Column */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm">
                  🇲🇿 Empresa Moçambicana • Experiência desde 2001
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Consultoria
                  <span className="block text-white/90">Ambiental &</span>
                  <span className="block text-white/80">Social</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  Soluções integradas e sustentáveis para o desenvolvimento responsável 
                  do seu negócio em Moçambique
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button 
                    size="lg" 
                    className="bg-white text-locus-green hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
                  >
                    Nossos Serviços
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-locus-green font-semibold px-8 py-4 text-lg transition-all hover:scale-105"
                  >
                    Contactar-nos
                  </Button>
                </Link>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Ligue Agora</div>
                    <div className="font-semibold">+258 878 831 506</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Email</div>
                    <div className="font-semibold">locusconsultorialda@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats/Features Column */}
            <div className="lg:ml-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Por que escolher a LOCUS?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1">20+ Anos de Experiência</h4>
                      <p className="text-white/80 text-sm">Expertise comprovada no mercado moçambicano</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1">Soluções Sustentáveis</h4>
                      <p className="text-white/80 text-sm">Compromisso com o desenvolvimento responsável</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1">Conformidade Total</h4>
                      <p className="text-white/80 text-sm">Alinhamento com normas nacionais e internacionais</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1">Equipa Especializada</h4>
                      <p className="text-white/80 text-sm">Profissionais qualificados e certificados</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">100+</div>
                      <div className="text-white/70 text-sm">Projetos Realizados</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">6</div>
                      <div className="text-white/70 text-sm">Áreas de Especialização</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}