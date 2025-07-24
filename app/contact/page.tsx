import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Globe, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização',
      primary: 'Cidade de Maputo',
      secondary: 'Moçambique',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telemóveis',
      primary: '+258 878 831 506',
      secondary: '+258 872 539 357 / +258 879 813 692',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-200',
      iconColor: 'text-emerald-600',
      links: [
        { number: '+258878831506', display: '+258 878 831 506' },
        { number: '+258872539357', display: '+258 872 539 357' },
        { number: '+258879813692', display: '+258 879 813 692' }
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      primary: 'locusconsultorialda@gmail.com',
      secondary: 'Responderemos em até 24 horas',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Website',
      primary: 'www.locuslda.co.mz',
      secondary: 'Portal oficial da empresa',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600'
    }
  ];

  const businessHours = [
    { day: 'Segunda a Sexta', hours: '08:00 - 17:00' },
    { day: 'Sábado', hours: '09:00 - 13:00' },
    { day: 'Domingo', hours: 'Fechado' }
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
                📞 Estamos Aqui para Ajudar
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Contacto
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Entre em contacto connosco para discutir como podemos ajudar 
                o seu projeto a alcançar os mais altos padrões de sustentabilidade
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 text-locus-green border-locus-green">
                  Como Contactar-nos
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Múltiplas Formas de Contacto
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Escolha a forma mais conveniente para si e entre em contacto connosco
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactMethods.map((method, index) => (
                  <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-2 ${method.bgColor} hover:scale-105`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-4 rounded-full ${method.bgColor} ${method.iconColor}`}>
                          {method.icon}
                        </div>
                        <CardTitle className="text-2xl text-gray-900 group-hover:text-locus-green transition-colors">
                          {method.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {method.title === 'Telemóveis' && method.links ? (
                          <div className="space-y-2">
                            {method.links.map((link, linkIndex) => (
                              <div key={linkIndex}>
                                <a 
                                  href={`tel:${link.number}`} 
                                  className="text-lg font-semibold text-gray-900 hover:text-locus-green transition-colors block"
                                >
                                  {link.display}
                                </a>
                              </div>
                            ))}
                          </div>
                        ) : method.title === 'Email' ? (
                          <a 
                            href={`mailto:${method.primary}`} 
                            className="text-lg font-semibold text-gray-900 hover:text-locus-green transition-colors"
                          >
                            {method.primary}
                          </a>
                        ) : method.title === 'Website' ? (
                          <a 
                            href={`https://${method.primary}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-gray-900 hover:text-locus-green transition-colors"
                          >
                            {method.primary}
                          </a>
                        ) : (
                          <div className="text-lg font-semibold text-gray-900">
                            {method.primary}
                          </div>
                        )}
                        <p className="text-gray-600 text-sm">
                          {method.secondary}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours & Quick Actions */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Business Hours */}
                <Card className="border-2 border-gray-100 hover:border-locus-green/30 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-locus-green/10 rounded-full text-locus-green">
                        <Clock className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-2xl text-locus-green">Horário de Funcionamento</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                          <span className="font-medium text-gray-700">{schedule.day}</span>
                          <span className="text-gray-600">{schedule.hours}</span>
                        </div>
                      ))}
                      <div className="mt-6 p-4 bg-locus-green/5 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <strong>Nota:</strong> Para situações de emergência, contacte-nos através dos nossos telemóveis.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-2 border-locus-green/20 hover:border-locus-green/40 hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-2xl text-locus-green mb-4">Ações Rápidas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <a 
                        href="tel:+258878831506"
                        className="flex items-center gap-4 p-4 bg-locus-green text-white rounded-lg hover:bg-locus-green/90 transition-all group"
                      >
                        <Phone className="w-6 h-6" />
                        <div>
                          <div className="font-semibold">Ligar Agora</div>
                          <div className="text-sm text-white/80">+258 878 831 506</div>
                        </div>
                        <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                      </a>

                      <a 
                        href="mailto:locusconsultorialda@gmail.com"
                        className="flex items-center gap-4 p-4 border-2 border-locus-green text-locus-green rounded-lg hover:bg-locus-green hover:text-white transition-all group"
                      >
                        <Mail className="w-6 h-6" />
                        <div>
                          <div className="font-semibold">Enviar Email</div>
                          <div className="text-sm opacity-80">locusconsultorialda@gmail.com</div>
                        </div>
                        <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                      </a>

                      <Link 
                        href="/services"
                        className="flex items-center gap-4 p-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all group"
                      >
                        <Globe className="w-6 h-6" />
                        <div>
                          <div className="font-semibold">Ver Serviços</div>
                          <div className="text-sm opacity-80">Conheça nossas especialidades</div>
                        </div>
                        <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 text-locus-green border-locus-green">
                  Formulário de Contacto
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Envie-nos uma Mensagem
                </h2>
                <p className="text-xl text-gray-600">
                  Preencha o formulário abaixo e entraremos em contacto consigo o mais breve possível
                </p>
              </div>

              <Card className="border-2 border-gray-100 hover:border-locus-green/30 hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-locus-green focus:border-locus-green transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Empresa/Organização
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-locus-green focus:border-locus-green transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-locus-green focus:border-locus-green transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telemóvel
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-locus-green focus:border-locus-green transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-locus-green focus:border-locus-green transition-colors"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="consultoria-ambiental">Consultoria Ambiental</option>
                        <option value="consultoria-social">Consultoria Social</option>
                        <option value="sistemas-emergencia">Sistemas de Emergência</option>
                        <option value="normas-iso">Normas ISO</option>
                        <option value="engenharia-topografia">Engenharia e Topografia</option>
                        <option value="arquitetura-urbanismo">Arquitetura e Urbanismo</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-locus-green focus:border-locus-green transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-locus-green focus:border-locus-green transition-colors"
                        placeholder="Descreva detalhadamente o seu projeto ou necessidade..."
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        * Campos obrigatórios
                      </p>
                      <button
                        type="submit"
                        className="bg-locus-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-locus-green/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                      >
                        <span>Enviar Mensagem</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-locus-green">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                Comprometidos com a Sua Satisfação
              </h3>
              <p className="text-lg text-white/90 mb-6">
                A nossa equipa está disponível para responder às suas questões e fornecer 
                as melhores soluções para o seu projeto de desenvolvimento sustentável.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span>Resposta Rápida</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <span>Soluções Personalizadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <span>20+ Anos de Experiência</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}