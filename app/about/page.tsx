import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Award, Users, Globe, CheckCircle, ArrowRight, Heart, Lightbulb, Shield, Handshake } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Sustentabilidade',
      description: 'Compromisso inabalável com práticas que preservam o meio ambiente e promovem o desenvolvimento sustentável para as futuras gerações.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Inovação',
      description: 'Adoção constante de tecnologias avançadas e metodologias inovadoras para oferecer soluções de vanguarda aos nossos clientes.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ética',
      description: 'Transparência, integridade e responsabilidade em todas as nossas ações, construindo relações de confiança duradouras.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Colaboração',
      description: 'Trabalho em parceria estreita com clientes e stakeholders, valorizando diferentes perspectivas para alcançar objetivos comuns.',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excelência',
      description: 'Busca contínua pelos mais altos padrões de qualidade em todos os serviços, superando expectativas consistentemente.',
      color: 'from-red-500 to-rose-600'
    }
  ];
  
  const whyUs = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Conformidade Regulatória Completa',
      description: 'Garantimos total alinhamento com normas e legislações nacionais e internacionais vigentes'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Compromisso Inabalável com a Qualidade',
      description: 'Padrões rigorosos de qualidade em todas as fases dos nossos projetos e serviços'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Abordagem Integrada e Multidisciplinar',
      description: 'Combinamos diferentes especialidades para soluções holísticas e eficazes'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Presença Nacional com Conhecimento Local',
      description: 'Cobertura nacional aliada ao profundo conhecimento do contexto moçambicano'
    }
  ];

  const timeline = [
    {
      year: '2001',
      title: 'Início da Jornada',
      description: 'Nossos fundadores começam a acumular experiência no setor de consultoria ambiental em Moçambique'
    },
    {
      year: '2010',
      title: 'Expansão de Serviços',
      description: 'Diversificação para incluir consultoria social e sistemas de gestão empresarial'
    },
    {
      year: '2020',
      title: 'Reconhecimento Nacional',
      description: 'Consolidação como referência em consultoria ambiental e social no país'
    },
    {
      year: '2024',
      title: 'Fundação da LOCUS',
      description: 'Criação oficial da empresa, reunindo décadas de expertise numa só organização'
    }
  ];

  const stats = [
    { number: '20+', label: 'Anos de Experiência', description: 'Expertise acumulada' },
    { number: '100+', label: 'Projetos Concluídos', description: 'Soluções implementadas' },
    { number: '50+', label: 'Clientes Satisfeitos', description: 'Parcerias estabelecidas' },
    { number: '6', label: 'Áreas de Especialização', description: 'Serviços integrados' }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-locus-green via-locus-green/95 to-locus-green/90 py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-16 left-16 w-24 h-24 border border-white/30 rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-24 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-24 left-32 w-20 h-20 border border-white/25 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                🇲🇿 Empresa Moçambicana de Referência
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Quem Somos
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Especialistas em consultoria ambiental e social, 
                <br />comprometidos com o desenvolvimento sustentável de Moçambique
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Badge variant="outline" className="mb-6 text-locus-green border-locus-green">
                    Nossa História
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Duas Décadas de Excelência
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    A LOCUS representa a culminação de mais de duas décadas de experiência 
                    acumulada no sector de consultoria ambiental e social em Moçambique. 
                    Fundada oficialmente em 2024, nossa empresa reúne profissionais com 
                    expertise consolidada desde 2001, oferecendo soluções inovadoras e 
                    sustentáveis para os desafios mais complexos do desenvolvimento nacional.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Especializamo-nos em múltiplas áreas críticas: consultoria ambiental 
                    e social, gestão de negócios, sistemas de emergência, normas ISO, 
                    engenharia topográfica, arquitetura e ordenamento territorial, 
                    sempre com foco na sustentabilidade e responsabilidade social.
                  </p>
                  <Link 
                    href="/services"
                    className="inline-flex items-center gap-2 bg-locus-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-locus-green/90 transition-all hover:scale-105"
                  >
                    Conheça Nossos Serviços
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <Card key={index} className="text-center p-6 border-2 border-gray-100 hover:border-locus-green/30 hover:shadow-lg transition-all">
                      <CardContent className="p-0">
                        <div className="text-4xl font-bold text-locus-green mb-2">{stat.number}</div>
                        <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                        <div className="text-sm text-gray-600">{stat.description}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 text-locus-green border-locus-green">
                  Nossa Jornada
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Trajetória de Crescimento
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Uma história de evolução constante e compromisso com a excelência
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-locus-green/20"></div>
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className="flex-1 lg:pr-8">
                        <Card className={`${index % 2 === 0 ? 'lg:ml-auto lg:text-right' : ''} max-w-md border-2 border-gray-100 hover:border-locus-green/30 hover:shadow-lg transition-all`}>
                          <CardContent className="p-6">
                            <div className="text-3xl font-bold text-locus-green mb-2">{item.year}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="relative flex-shrink-0 w-4 h-4 bg-locus-green rounded-full border-4 border-white shadow-lg z-10"></div>
                      
                      <div className="flex-1 lg:pl-8"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 text-locus-green border-locus-green">
                  Nossos Fundamentos
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Missão e Visão
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-locus-green/20 hover:border-locus-green/40">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-locus-green/10 rounded-full text-locus-green group-hover:bg-locus-green group-hover:text-white transition-all">
                        <Target className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-3xl text-locus-green">Missão</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Fornecer soluções inovadoras e sustentáveis aos nossos clientes, 
                      capacitando-os a minimizar o impacto ambiental das suas atividades 
                      enquanto maximizam seu desenvolvimento social e económico, contribuindo 
                      para um futuro mais sustentável em Moçambique.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-locus-green/20 hover:border-locus-green/40">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-locus-green/10 rounded-full text-locus-green group-hover:bg-locus-green group-hover:text-white transition-all">
                        <Eye className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-3xl text-locus-green">Visão</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Ser reconhecida como a empresa de consultoria ambiental e social 
                      de referência em Moçambique e na região, destacando-se pela 
                      excelência, inovação e impacto positivo no desenvolvimento 
                      sustentável das comunidades e empresas que servimos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 text-locus-green border-locus-green">
                  Nossos Pilares
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Valores que nos Guiam
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Princípios fundamentais que orientam cada decisão e ação em nossa organização
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${value.color}`}></div>
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className={`p-4 rounded-full bg-gradient-to-r ${value.color} text-white`}>
                          {value.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-locus-green transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-center">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 text-locus-green border-locus-green">
                  Diferenciais
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Por que Escolher a LOCUS?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Características que nos tornam a escolha ideal para seus projetos de desenvolvimento sustentável
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyUs.map((reason, index) => (
                  <Card key={index} className="group hover:shadow-lg hover:scale-105 transition-all border-2 border-gray-100 hover:border-locus-green/30">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-locus-green/10 rounded-full text-locus-green group-hover:bg-locus-green group-hover:text-white transition-all flex-shrink-0">
                          {reason.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-locus-green transition-colors">
                            {reason.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-locus-green relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Vamos Trabalhar Juntos
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Pronto para Conhecer 
                <br />Nossa Equipa?
              </h2>
              <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Entre em contacto connosco e descubra como nossa experiência e dedicação 
                podem transformar os desafios do seu projeto em oportunidades de crescimento sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-locus-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <span>Falar Connosco</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-locus-green transition-all inline-flex items-center justify-center gap-2"
                >
                  <Award className="w-5 h-5" />
                  <span>Ver Serviços</span>
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