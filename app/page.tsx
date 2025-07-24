import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';

export default function HomePage() {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Sustentabilidade',
      description: 'Comprometidos com soluções que preservam o meio ambiente'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Inovação',
      description: 'Utilizamos as mais recentes tecnologias e metodologias'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Ética',
      description: 'Transparência e integridade em todos os nossos projetos'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Colaboração',
      description: 'Trabalhamos em parceria com nossos clientes'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excelência',
      description: 'Padrões elevados de qualidade em todos os serviços'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Experiência Comprovada',
      description: 'Mais de duas décadas de experiência no mercado moçambicano',
      icon: '🏆'
    },
    {
      title: 'Equipa Especializada',
      description: 'Profissionais altamente qualificados e certificados',
      icon: '👥'
    },
    {
      title: 'Soluções Integradas',
      description: 'Abordagem holística para todos os desafios do seu negócio',
      icon: '🔗'
    },
    {
      title: 'Conformidade Total',
      description: 'Garantimos conformidade com todas as normas e regulamentações',
      icon: '✅'
    }
  ];

  const serviceHighlights = [
    {
      title: 'Consultoria Ambiental',
      description: 'Estudos de impacto, licenciamento e gestão ambiental completa',
      icon: '🌱',
      color: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Consultoria Social', 
      description: 'Desenvolvimento comunitário e gestão de stakeholders',
      icon: '👥',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Sistemas de Emergência',
      description: 'Segurança contra incêndios e planos de emergência',
      icon: '🛡️',
      color: 'from-red-500 to-rose-600'
    },
    {
      title: 'Normas ISO',
      description: 'Implementação e certificação de sistemas de gestão',
      icon: '📋',
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Engenharia & Topografia',
      description: 'Levantamentos técnicos e sistemas de informação geográfica',
      icon: '📐',
      color: 'from-orange-500 to-amber-600'
    },
    {
      title: 'Arquitetura & Urbanismo',
      description: 'Planeamento urbano e desenvolvimento territorial',
      icon: '🏙️',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        
        {/* About Section Enhanced */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 text-locus-green border-locus-green">
                  Quem Somos
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Especialistas em Consultoria Ambiental e Social
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  A LOCUS é uma empresa moçambicana de referência, especializada em soluções integradas 
                  para sustentabilidade, gestão ambiental e desenvolvimento social responsável.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Nossa História
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Fundada oficialmente em 2024, a LOCUS combina décadas de experiência 
                    acumulada desde 2001 por nossos técnicos especializados. Oferecemos 
                    consultoria de alta qualidade em diversas áreas críticas para o 
                    desenvolvimento sustentável.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-locus-green mb-2">20+</div>
                      <div className="text-sm text-gray-600">Anos de Experiência</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-locus-green mb-2">100+</div>
                      <div className="text-sm text-gray-600">Projetos Realizados</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whyChooseUs.map((item, index) => (
                    <Card key={index} className="border-2 border-gray-100 hover:border-locus-green/30 hover:shadow-lg transition-all">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 text-locus-green border-locus-green">
                  Nossos Fundamentos
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Missão, Visão e Valores
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <Card className="border-2 border-locus-green/20 hover:shadow-xl transition-all">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-8 h-8 text-locus-green" />
                      <CardTitle className="text-2xl text-locus-green">Missão</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Fornecer soluções inovadoras e sustentáveis aos nossos clientes, 
                      capacitando-os a minimizar o impacto ambiental das suas atividades 
                      enquanto maximizam seu desenvolvimento social e económico.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-locus-green/20 hover:shadow-xl transition-all">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Eye className="w-8 h-8 text-locus-green" />
                      <CardTitle className="text-2xl text-locus-green">Visão</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Ser reconhecida como a empresa de consultoria ambiental e social 
                      de referência em Moçambique, destacando-se pela excelência, 
                      inovação e impacto positivo no desenvolvimento sustentável.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Nossos Valores</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {values.map((value, index) => (
                    <Card key={index} className="group hover:shadow-lg hover:scale-105 transition-all border-2 border-gray-100 hover:border-locus-green/30">
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="p-3 rounded-full bg-locus-green/10 text-locus-green group-hover:bg-locus-green group-hover:text-white transition-all">
                            {value.icon}
                          </div>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview - Enhanced */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 text-locus-green border-locus-green">
                  Nossas Especialidades
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Serviços Especializados
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Oferecemos uma gama completa de serviços de consultoria para atender 
                  todas as necessidades do seu projeto de desenvolvimento sustentável
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceHighlights.map((service, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                    <CardContent className="p-8">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-locus-green transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-locus-green font-medium group-hover:text-locus-green/80 transition-colors">
                        <span className="text-sm">Saiba mais</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link 
                  href="/services"
                  className="inline-flex items-center gap-3 bg-locus-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-locus-green/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Ver Todos os Serviços
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-locus-green via-locus-green/95 to-locus-green/90 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
              <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-20 left-32 w-24 h-24 border border-white/20 rounded-full"></div>
            </div>
          </div>
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Vamos Trabalhar Juntos
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Pronto para Transformar 
                <br />o Seu Projeto?
              </h2>
              <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Entre em contacto connosco hoje mesmo e descubra como a nossa experiência 
                pode ajudar o seu negócio a alcançar os mais altos padrões de sustentabilidade 
                e responsabilidade social.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-locus-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <span>Solicitar Consultoria</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-locus-green transition-all inline-flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  <span>Conhecer a Equipa</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}