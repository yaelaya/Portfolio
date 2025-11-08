import { ExternalLink, Github, Star, Code2, Database, Smartphone, BarChart3, Shield, Building, Server, Cpu, Brain } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'DrugTrace - Système Blockchain',
      description: 'Système de traçabilité blockchain pour produits pharmaceutiques avec publication en cours dans SoftwareX. Solution innovante pour lutter contre la contrefaçon des médicaments.',
      tags: ['Blockchain', 'Smart Contracts', 'Web3', 'React', 'Node.js'],
      github: 'https://github.com/ayoubharati/medProject',
      featured: true,
      status: 'En cours de publication',
      period: '02/2025-05/2025',
      icon: Shield,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'DataIN - Plateforme Data Science',
      description: 'Solution intégrée d\'exploration de données par IA et visualisation interactive développée durant mon stage au Haut-Commissariat au Plan. Analyse de données massives avec machine learning.',
      tags: ['Python', 'Machine Learning', 'Data Visualization', 'React', 'FastAPI'],
      github: 'https://github.com',
      featured: true,
      period: 'Stage HCP - 06/2025-09/2025',
      icon: BarChart3,
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Gestion Immobilière Militaire',
      description: 'Plateforme web complète de gestion immobilière pour le corps militaire développée avec Spring Boot. Gestion des logements, maintenance et planning des ressources.',
      tags: ['Spring Boot', 'Java EE', 'PostgreSQL', 'React', 'REST API'],
      github: 'https://github.com',
      period: 'Stage ALEM - 07/2024-08/2024',
      icon: Building,
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Applications Mobiles Android',
      description: 'Développement d\'applications Android natives avec intégration d\'APIs REST, GraphQL et SOAP. Architecture MVVM et tests unitaires complets.',
      tags: ['Java', 'Android', 'Retrofit', 'GraphQL', 'REST', 'SOAP'],
      github: 'https://github.com/miskaraminaa/AssistDoc',
      period: 'Projet ENSA - 10/2024-12/2024',
      icon: Smartphone,
      color: 'from-green-600 to-emerald-500'
    },
    {
      title: 'Analyse des Retards de Vols - Business Intelligence',
      description: 'Chaîne BI complète avec ETL (Kettle) et tableaux de bord interactifs (Google Data Studio). Analyse prédictive des causes de retards aériens.',
      tags: ['ETL', 'Business Intelligence', 'Data Studio', 'Kettle', 'Analyse', 'Data Visualization'],
      github: 'https://github.com',
      period: 'Projet ENSA - 10/2024-12/2024',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Application Web JEE - Gestion des Examens',
      description: 'Application web conçue pour gérer les surveillances des examens au sein d\'une université. Développement CRUD avec Spring Boot et Spring Data en Java EE.',
      tags: ['Spring Boot', 'Java EE', 'Spring Data', 'JPA', 'REST API', 'CRUD'],
      github: 'https://github.com/YounesAO/ExamSessionManger',
      period: 'Projet ENSA - 11/2024-01/2025',
      icon: Code2,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Centre de Certification Pearson VUE',
      description: 'Analyse des certifications IT, conception d\'infrastructure réseau pour 10 candidats. Architecture sécurisée pour centre de certification.',
      tags: ['Réseau', 'Sécurité', 'Architecture', 'Windows Server', 'Virtualisation'],
      github: 'https://github.com',
      period: 'Projet ENSA - 11/2023-01/2024',
      icon: Cpu,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Apprentissage Artificiel - Modèles de Prédiction',
      description: 'Développement de modèles de prédiction utilisant des techniques d\'apprentissage automatique pour résoudre des problèmes complexes.',
      tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Prédiction', 'Data Science'],
      github: 'https://github.com',
      period: 'Projet ENSA - 10/2024-12/2024',
      icon: Brain,
      color: 'from-purple-600 to-pink-500'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Portfolio</span>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-slate-800">
          Mes Projets Académiques & Professionnels
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Une sélection de mes réalisations techniques démontrant mon expertise en développement full-stack, 
          data science, blockchain et systèmes distribués. Ces projets reflètent ma passion pour l'innovation 
          et la résolution de problèmes complexes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 flex-1 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                </div>
                {project.featured && (
                  <Star className="w-5 h-5 text-yellow-500 fill-current flex-shrink-0" />
                )}
              </div>

              {project.status && (
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {project.status}
                </div>
              )}
              
              {project.period && (
                <p className="text-sm text-slate-500 mb-3 font-medium">{project.period}</p>
              )}

              <p className="text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all font-medium"
                >
                  <Github className="w-4 h-4" />
                  Code Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800 rounded-2xl p-12 text-white">
        <Code2 className="w-12 h-12 mb-4" />
        <h2 className="text-3xl font-bold mb-4">Prochaines Étapes</h2>
        <p className="text-lg text-slate-300 mb-6">
          Je continue à développer mes compétences et à travailler sur des projets innovants. 
          N'hésitez pas à me contacter pour discuter de collaborations ou d'opportunités de stage.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-800 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
          >
            <Github className="w-5 h-5" />
            Voir GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Me Contacter
          </a>
        </div>
      </div>
    </div>
  );
}