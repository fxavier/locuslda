import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Leaf, Shield, Building, FileCheck, MapPin, Users } from 'lucide-react';

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'environment',
      icon: <Leaf className="w-8 h-8" />,
      title: 'Consultoria Ambiental',
      description: 'Soluções completas para gestão ambiental e sustentabilidade empresarial',
      color: 'bg-emerald-50 border-emerald-200',
      iconColor: 'text-emerald-600',
      services: [
        'Estudos de Impacto Ambiental (EIA)',
        'Planos de Gestão Ambiental (PGA)',
        'Auditorias Ambientais',
        'Licenciamento Ambiental',
        'Monitoramento e Controlo Ambiental',
        'Gestão de Resíduos',
        'Avaliação de Riscos Ambientais'
      ]
    },
    {
      id: 'social',
      icon: <Users className="w-8 h-8" />,
      title: 'Consultoria Social',
      description: 'Desenvolvimento comunitário e gestão de impactos sociais',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      services: [
        'Planos de Reassentamento',
        'Desenvolvimento Comunitário',
        'Gestão de Stakeholders',
        'Estudos de Impacto Social',
        'Programas de Responsabilidade Social',
        'Engajamento Comunitário',
        'Due Diligence Social'
      ]
    },
    {
      id: 'emergency',
      icon: <Shield className="w-8 h-8" />,
      title: 'Sistemas de Emergência',
      description: 'Segurança e prevenção de incêndios para empresas',
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-600',
      services: [
        'Planos de Emergência Internos',
        'Planos de Emergência Externos',
        'Simulacros e Treinamentos',
        'Manutenção de Extintores',
        'Sistemas de Detecção de Incêndio',
        'Formação em Segurança',
        'Avaliação de Riscos de Incêndio'
      ]
    },
    {
      id: 'iso',
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Normas ISO',
      description: 'Implementação e certificação de sistemas de gestão',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
      services: [
        'ISO 9001 - Sistema de Gestão da Qualidade',
        'ISO 14001 - Sistema de Gestão Ambiental',
        'ISO 45001 - Sistema de Gestão de Segurança',
        'Auditorias de Conformidade',
        'Treinamentos em Normas ISO',
        'Documentação de Processos',
        'Acompanhamento para Certificação'
      ]
    },
    {
      id: 'engineering',
      icon: <MapPin className="w-8 h-8" />,
      title: 'Engenharia e Topografia',
      description: 'Levantamentos técnicos e sistemas de informação geográfica',
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      services: [
        'Levantamentos Topográficos',
        'Levantamentos Arquitetónicos',
        'Levantamentos Batimétricos',
        'Sistemas de Informação Geográfica (SIG)',
        'Cartografia e Mapeamento',
        'Agrimensura e Demarcação',
        'Bases de Dados Espaciais'
      ]
    },
    {
      id: 'urban',
      icon: <Building className="w-8 h-8" />,
      title: 'Arquitetura e Urbanismo',
      description: 'Planeamento urbano e desenvolvimento territorial',
      color: 'bg-indigo-50 border-indigo-200',
      iconColor: 'text-indigo-600',
      services: [
        'Planos de Desenvolvimento Urbano',
        'Planos Distritais',
        'Projectos de Urbanização',
        'Cadastro Urbano',
        'Reordenamento Territorial',
        'Estudos de Viabilidade',
        'Planeamento Arquitectónico'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-locus-green via-locus-green/90 to-locus-green/80 py-24">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Nossos Serviços
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Oferecemos soluções integradas e especializadas para o desenvolvimento sustentável do seu negócio
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Consultoria Especializada
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Soluções Integradas  
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Experiência desde 2001
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Áreas de Especialização
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Com mais de duas décadas de experiência, oferecemos serviços de consultoria de alta qualidade 
                em diversas áreas especializadas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category) => (
                <Card key={category.id} className={`group hover:shadow-2xl transition-all duration-300 border-2 ${category.color} hover:scale-105`}>
                  <CardHeader className="pb-4">
                    <div className={`inline-flex p-3 rounded-full ${category.color} ${category.iconColor} mb-4`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-2xl text-gray-900 group-hover:text-locus-green transition-colors">
                      {category.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.services.slice(0, 4).map((service, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-locus-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{service}</span>
                        </li>
                      ))}
                      {category.services.length > 4 && (
                        <li className="text-locus-green font-medium text-sm">
                          +{category.services.length - 4} outros serviços
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Serviços Detalhados
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça todos os nossos serviços especializados organizados por área de atuação
              </p>
            </div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={category.id} className={`${categoryIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-12`}>
                  <div className="flex-1">
                    <div className={`inline-flex p-4 rounded-full ${category.color} ${category.iconColor} mb-6`}>
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.services.map((service, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                          <CheckCircle className="w-5 h-5 text-locus-green flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 lg:max-w-md">
                    <div className={`p-8 rounded-2xl ${category.color} border-2`}>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        Por que escolher a LOCUS?
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-locus-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Equipa especializada e experiente</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-locus-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Conformidade com normas internacionais</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-locus-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Abordagem integrada e personalizada</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-locus-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Suporte contínuo pós-implementação</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-locus-green">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para Começar?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Entre em contacto connosco para discutir como podemos ajudar o seu projeto a alcançar os melhores resultados
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-locus-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Solicitar Orçamento
                </a>
                <a 
                  href="tel:+258878831506" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-locus-green transition-colors inline-flex items-center justify-center"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}