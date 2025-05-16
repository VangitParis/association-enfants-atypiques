import React from 'react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Bienvenue sur le site de notre association
        </h1>
        <p className="text-lg text-gray-700">
          Nous agissons avec bienveillance pour accompagner les enfants atypiques et leurs familles.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="rounded overflow-hidden shadow-lg">
          <img src="/images/garcon-de-tir-moyen-s-amusant-a-l-exterieur.jpg" alt="Enfant souriant tenant un coeur" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg text-blue-700 mb-2">Accompagnement personnalisé</h3>
            <p className="text-gray-600 text-sm">
              Chaque enfant est unique. Nous adaptons nos actions à ses besoins spécifiques.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img src="/images/projet-d-art-a-l-empreinte-manuelle-pour-la-fete-des-meres-ou-une-occasion-speciale.jpg" alt="Éducation spécialisée" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg text-blue-700 mb-2">Éducation et soutien</h3>
            <p className="text-gray-600 text-sm">
              Nous collaborons avec des professionnels pour un suivi éducatif adapté.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img src="public/images/un-jeune-enfant-autiste-joue-avec-sa-famille.jpg" alt="Famille unie" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-lg text-blue-700 mb-2">Soutien aux familles</h3>
            <p className="text-gray-600 text-sm">
              Nous aidons les familles à mieux comprendre, accompagner et défendre leurs enfants.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Vous souhaitez aider ?</h2>
        <p className="mb-6 text-gray-700">Faites un don ou devenez bénévole pour faire la différence.</p>
        <a
          href="/faire-un-don"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Je fais un don
        </a>
      </section>
    </div>
  );
}
