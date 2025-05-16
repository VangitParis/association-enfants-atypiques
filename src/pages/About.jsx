import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        À propos de notre association
      </h1>

      <p className="mb-6">
        Notre association est née d’un constat simple : trop d’enfants atypiques ne trouvent pas
        l’accompagnement, la reconnaissance ou les ressources nécessaires pour s’épanouir pleinement.
        Nous avons décidé d’agir concrètement pour changer cela.
      </p>

      <p className="mb-6">
        Qu’il s’agisse de troubles du spectre autistique, de troubles dys, de haut potentiel ou
        d’autres particularités, nous croyons fermement que chaque enfant a une richesse à offrir
        au monde — à condition d’être compris, respecté et soutenu.
      </p>

      <p className="mb-6">
        Notre équipe est composée de parents, d’éducateurs, de thérapeutes et de bénévoles
        engagés. Ensemble, nous proposons des actions de sensibilisation, des ateliers, du
        soutien aux familles et des interventions personnalisées.
      </p>

      <p className="mb-6">
        Nous mettons également un point d’honneur à travailler main dans la main avec les
        établissements scolaires, les professionnels de santé et les institutions afin de créer
        un environnement plus inclusif.
      </p>

      <p className="font-semibold text-center mt-10 text-lg">
        Merci de soutenir notre cause. Ensemble, changeons le regard sur la différence.
      </p>

      <div className="text-center mt-8">
        <Link
          to="/faire-un-don"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Je fais un don
        </Link>
      </div>
    </div>
  );
}
