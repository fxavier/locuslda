Cria um website institucional multilíngue (Português 🇵🇹 e Inglês 🇬🇧) para a empresa moçambicana LOCUS, LDA, usando as tecnologias abaixo:

🛠️ Tecnologias obrigatórias:
Next.js 14+ (com App Router)

TypeScript

TailwindCSS para estilização

shadcn/ui para os componentes reutilizáveis

next-intl ou next-i18next para internacionalização (PT e EN)

Layout responsivo com design profissional

Utilizar cores extraídas das imagens: verde escuro para títulos (como #2e7d32) e preto para corpo de texto

📁 Estrutura sugerida:
bash
Copiar
Editar
/app
/[locale]
/about
/services
/contact
/components
LanguageSwitcher.tsx
Navbar.tsx
HeroSection.tsx
Footer.tsx
/i18n
pt.json
en.json
/public/assets
/styles
🏢 Seções do Website:

1. Quem Somos
   A LOCUS é uma empresa moçambicana especializada em Consultoria Ambiental e Social, Gestão de Negócios, Sistemas de Emergência e Extintores, normas ISO, Engenharia Topográfica e SIG, Arquitetura e Ordenamento Territorial e Gestão de Stakeholders.

Fundada em 2024 por técnicos com experiência desde 2001.

2. Missão
   Fornecer soluções inovadoras e sustentáveis aos nossos clientes, por forma a minimizarem o impacto das suas actividades no ambiente.

3. Visão
   Ser reconhecida como empresa de consultoria ambiental de referência em excelência e inovação.

4. Valores
   Sustentabilidade

Inovação

Ética

Colaboração

Excelência

5. Razões para Trabalhar Connosco
   Conformidade com normas e legislações vigentes

Compromisso com a qualidade

Abordagem integrada e multidisciplinar

Presença nacional com conhecimento do contexto local

🧰 Serviços (organizar em seções ou tabs)
🌱 Ambiente
Estudos de Impacto Ambiental

Planos de Reassentamentos

Auditorias Ambientais

Desenvolvimento comunitário

Gestão ambiental, água, saneamento e biodiversidade

🔥 Sistema de Emergência e Extintores
Planos de emergência internos/externos

Simulacros

Manutenção e treino com extintores

Documentação e formação

🧭 Gestão de Negócios
Engenharia Topográfica e Mapeamentos

Arquitetura e Ordenamento Territorial

Estudos Geológicos

Gestão de Stakeholders

Due Diligence, Estudos de Base, Estratégias

📏 Normas ISO
ISO 9001 – Qualidade

ISO 14001 – Gestão Ambiental

ISO 45001 – Saúde e Segurança

Auditorias de conformidade e desempenho

🏙️ Arquitetura e Ordenamento
Planos de desenvolvimento distrital/urbano

Urbanização e reordenamento

Cadastro urbano e assentamentos

🧮 Engenharia Topográfica e SIG
Levantamentos topográficos/arquitetónicos/batimétricos

Agrimensura, piquetagem e implantação

Bases de dados espaciais e cadastrais

Ortofotomapas e cartografia

🤝 Gestão de Stakeholders
Mapeamento e categorização

Engajamento e comunicação

Gestão de crises e percepções

Due Diligence e canais de diálogo

🌐 Funcionalidades Adicionais:
Switch de idioma PT/EN no topo do site

Tema responsivo (desktop, tablet, mobile)

Comentários explicativos no código para fácil manutenção

SEO otimizado com metadados por página

Uso de shadcn/ui para botões, tabs, cards e outros

en.json =
{
"nav": {
"home": "Home",
"about": "About Us",
"services": "Services",
"contact": "Contact",
"language": "Language"
},
"hero": {
"headline": "Environmental, Social and Business Consulting",
"subtext": "Sustainable solutions for your success"
},
"about": {
"title": "About Us",
"text": "LOCUS is a Mozambican company specialized in Environmental and Social Consulting, Business Management, Emergency Systems and Fire Extinguisher Maintenance, ISO Standards Implementation, Topographic Engineering and GIS, Architecture and Urban Planning, and Stakeholder Management. Officially founded in 2024, the company brings together professionals with experience since 2001.",
"mission": "To provide innovative and sustainable solutions to our clients in order to minimize the environmental impact of their activities.",
"vision": "To be recognized as a reference in excellence and innovation in environmental consulting.",
"values": [
"Sustainability",
"Innovation",
"Ethics",
"Collaboration",
"Excellence"
]
},
"services": {
"title": "Services",
"environment": {
"title": "Environment",
"items": [
"Environmental Impact Studies",
"Resettlement Plans",
"Environmental Audits",
"Community development",
"Environmental Management",
"Water and Sanitation",
"Ecological Biodiversity"
]
},
"emergency": {
"title": "Emergency Systems",
"items": [
"Internal/external emergency plans",
"Simulations",
"Fire extinguisher maintenance",
"Usage training"
]
},
"business": {
"title": "Business Management",
"items": [
"Topographic Engineering and Mapping",
"Architecture and Urban Planning",
"Geological Studies",
"Stakeholder Management",
"Due Diligence",
"Strategic Studies"
]
}
}
}

pt.json =
{
"nav": {
"home": "Início",
"about": "Quem Somos",
"services": "Serviços",
"contact": "Contacto",
"language": "Idioma"
},
"hero": {
"headline": "Consultoria Ambiental, Social e de Negócios",
"subtext": "Soluções sustentáveis para o seu sucesso"
},
"about": {
"title": "Quem Somos",
"text": "A LOCUS é uma empresa moçambicana especializada em Consultoria Ambiental e Social, Gestão de Negócios, Sistemas de Emergência e Manutenção de Extintores, Implementação de normas ISO, Engenharia Topográfica e SIG, Arquitetura e Ordenamento Territorial e Gestão de Stakeholders. Fundada oficialmente em 2024, atua com técnicos experientes desde 2001.",
"mission": "Fornecer soluções inovadoras e sustentáveis aos nossos clientes, por forma a minimizarem o impacto das suas actividades no ambiente.",
"vision": "Ser reconhecida como empresa de consultoria ambiental de referência em excelência e inovação.",
"values": [
"Sustentabilidade",
"Inovação",
"Ética",
"Colaboração",
"Excelência"
]
},
"services": {
"title": "Serviços",
"environment": {
"title": "Ambiente",
"items": [
"Estudos de Impacto Ambiental",
"Planos de Reassentamentos",
"Auditorias Ambientais",
"Desenvolvimento comunitário",
"Gestão ambiental",
"Água e Saneamento",
"Biodiversidade ecológica"
]
},
"emergency": {
"title": "Sistema de Emergência",
"items": [
"Planos de emergência internos/externos",
"Simulacros",
"Manutenção de extintores",
"Treinamento de utilização"
]
},
"business": {
"title": "Gestão de Negócios",
"items": [
"Topografia e Mapeamentos",
"Arquitetura e Ordenamento",
"Estudos Geológicos",
"Gestão de Stakeholders",
"Due Diligence",
"Estudos Estratégicos"
]
}
}
}
