// Home.tsx - Updated
import { ArrowRight, Code2, BookOpen, GraduationCap, Lightbulb, Heart, Star, Clock, Users, Brain, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const highlights = [
    {
      icon: Code2,
      title: 'Développement Full Stack',
      description: 'Expérience en React, Spring Boot, Java EE et développement d\'applications web complètes',
      color: 'text-blue-600'
    },
    {
      icon: Brain,
      title: 'Technologies Émergentes',
      description: 'Formation en blockchain, IA, data science et systèmes distribués à l\'ENSA',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      title: 'Projets Académiques',
      description: '7+ projets réalisés couvrant le développement web, mobile et les systèmes distribués',
      color: 'text-green-600'
    }
  ];

  const stats = [
    { number: '7+', label: 'Projets Académiques', icon: GraduationCap },
    { number: '2', label: 'Stages Professionnels', icon: Users },
    { number: '3+', label: 'Années d\'Études', icon: Clock }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Étudiante en Ingénierie Informatique</span>
        </div>

        <h1 className="text-5xl font-bold mb-6 text-slate-800 leading-tight">
          Aya EL ABIDI
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl">
          Étudiante en ingénierie informatique à l'ENSA El Jadida, passionnée par le développement full-stack 
          et les technologies émergentes. Je recherche un stage de fin d'études pour mettre en pratique 
          mes compétences et contribuer à des projets innovants.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
          >
            Voir mes projets
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-sm border border-slate-200"
          >
            <stat.icon className="w-8 h-8 text-slate-600 mb-4" />
            <div className="text-3xl font-bold text-slate-800 mb-2">
              {stat.number}
            </div>
            <div className="text-slate-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Domaines d'Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${item.color} mb-6`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-800 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Recherche de Stage de Fin d'Études</h2>
        <p className="text-lg text-slate-300 mb-6 max-w-2xl">
          Je suis actuellement à la recherche d'un stage de fin d'études à partir de Juin 2025 
          pour mettre en pratique mes compétences en développement et contribuer à des projets innovants.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-800 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
          >
            Me contacter
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="/CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  );
}