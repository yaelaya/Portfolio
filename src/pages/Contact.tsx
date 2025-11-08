// Contact.tsx - Updated
import { Mail, Linkedin, Github, Send, MapPin, Phone, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-12">
      <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Contact</span>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-slate-800">
          Travaillons Ensemble
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed">
          Actuellement en recherche de stage pour mettre en pratique mes compétences en développement et contribuer à des projets innovants.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Envoyez un Message</h2>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nom</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Sujet</label>
                <input
                  type="text"
                  placeholder="Sujet de votre message"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
              >
                <Send className="w-5 h-5" />
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Coordonnées</h2>

            <div className="space-y-4">
              <a
                href="mailto:ayaaa.elabidi@gmail.com"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group border border-slate-200"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <p className="text-slate-800 font-semibold">ayaaa.elabidi@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/elabidi-aya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group border border-slate-200"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">LinkedIn</p>
                  <p className="text-slate-800 font-semibold">elabidi-aya</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Téléphone</p>
                  <p className="text-slate-800 font-semibold">0669012552</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 text-white">
            <Calendar className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-3">Disponibilité</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              Actuellement en recherche de stage de fin d'études à partir de Juin 2025.
              Réponse garantie sous 24h.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}