import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy, Languages } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Ingénieurie en Informatique et Technologies Emergentes',
      school: 'École Nationale des Sciences Appliquées (ENSA)',
      location: 'El Jadida, Maroc',
      period: '10/2023 - Présent',
      description: 'Formation en ingénierie informatique avec spécialisation en technologies émergentes',
      achievements: [
        'Projets en développement web, mobile et intelligence artificielle',
        'Travaux sur blockchain, data science et systèmes distribués',
        'Formation complète en génie logiciel et architecture système'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      degree: 'Classes Préparatoires',
      school: 'Lycée International de Valbonne',
      location: 'Valbonne, France',
      period: '09/2021 - 08/2023',
      description: 'Formation intensive en mathématiques et sciences physiques',
      achievements: [
        'Préparation aux concours des grandes écoles d\'ingénieurs',
        'Renforcement des compétences scientifiques',
        'Développement de la rigueur et méthode de travail'
      ],
      color: 'from-purple-500 to-blue-500'
    },
    {
      degree: 'Baccalauréat Science Mathématique B',
      school: 'Al Manbaa',
      location: 'Rabat, Maroc',
      period: '06/2021',
      description: 'Baccalauréat scientifique avec mention Bien',
      achievements: [
        'Mention Bien',
        'Spécialisation mathématiques et sciences physiques',
        'Excellentes bases scientifiques'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const languages = [
    { language: 'Français', level: 'C1', score: 'TCF: 525/699', year: '2021' },
    { language: 'Anglais', level: 'Intermédiaire', score: 'TOEFL: 80/120', year: '2020' },
    { language: 'Arabe', level: 'Langue maternelle', score: '', year: '' }
  ];

  return (
    <div className="space-y-12">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-xl border border-blue-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Formation</span>
        </div>

        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Mon Parcours Académique
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Un parcours académique solide qui m'a permis de développer mes compétences techniques 
          et ma passion pour l'informatique et les technologies émergentes.
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl hover:shadow-blue-100 transition-all hover:-translate-y-1"
          >
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <GraduationCap className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                <p className="text-lg font-semibold text-blue-500 mb-4">{edu.school}</p>

                <div className="flex flex-wrap gap-4 mb-4 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{edu.description}</p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-slate-700">Points Forts</h4>
                  </div>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-700">
                        <Award className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-blue-100">
        <div className="flex items-center gap-3 mb-6">
          <Languages className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-slate-800">Langues</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-slate-800 mb-2 text-lg">{lang.language}</h3>
              <p className="text-blue-600 font-medium mb-1">{lang.level}</p>
              {lang.score && <p className="text-sm text-slate-600">{lang.score}</p>}
              {lang.year && <p className="text-xs text-blue-500 font-medium mt-2">{lang.year}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}