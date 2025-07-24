import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

export default function Footer() {
  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/about', label: 'Quem Somos' },
    { href: '/services', label: 'Serviços' },
    { href: '/contact', label: 'Contacto' },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      label: 'Cidade de Maputo, Moçambique'
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: '+258 878 831 506'
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: 'locusconsultorialda@gmail.com'
    },
    {
      icon: <Globe className="w-4 h-4" />,
      label: 'www.locuslda.co.mz'
    }
  ];

  const services = [
    'Consultoria Ambiental',
    'Consultoria Social',
    'Sistemas de Emergência',
    'Normas ISO',
    'Engenharia e Topografia',
    'Arquitetura e Urbanismo'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Image
                  src="/assets/logo.jpg"
                  alt="LOCUS, LDA"
                  width={180}
                  height={60}
                  className="h-14 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A LOCUS é uma empresa moçambicana de referência especializada em consultoria 
                ambiental e social, comprometida com o desenvolvimento sustentável e responsável.
              </p>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <div className="text-locus-green">
                      {contact.icon}
                    </div>
                    <span className="text-sm">{contact.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-locus-green">Links Rápidos</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-locus-green">Nossos Serviços</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href="/services"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Actions */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+258878831506"
                className="bg-locus-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-locus-green/90 transition-all text-center inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar Agora</span>
              </a>
              <a 
                href="mailto:locusconsultorialda@gmail.com"
                className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all text-center inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar Email</span>
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-2">Múltiplos Contactos</div>
              <div className="flex flex-col sm:flex-row gap-2 text-xs text-gray-500">
                <span>+258 878 831 506</span>
                <span className="hidden sm:inline">•</span>
                <span>+258 872 539 357</span>
                <span className="hidden sm:inline">•</span>
                <span>+258 879 813 692</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} LOCUS, LDA. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-locus-green">🇲🇿</span>
                <span>Empresa Moçambicana</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-locus-green">⭐</span>
                <span>20+ Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}