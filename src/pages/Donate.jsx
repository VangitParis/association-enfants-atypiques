import React, { useState } from 'react';
import jsPDF from 'jspdf';

export default function Donate() {
  const [amount, setAmount] = useState('');

  const generateReceipt = (donation) => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString('fr-FR');

    doc.setFontSize(18);
    doc.text("Reçu de don", 20, 20);

    doc.setFontSize(12);
    doc.text(`Date : ${date}`, 20, 40);
    doc.text(`Montant du don : ${donation} €`, 20, 50);
    doc.text("Merci pour votre générosité 🙏", 20, 70);

    doc.save(`recu-don-${donation}€.pdf`);
  };

  const handleFixedDonation = (value) => {
    generateReceipt(value);
  };

  const handleCustomDonation = (e) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (!isNaN(val) && val > 0) {
      generateReceipt(val);
      setAmount('');
    } else {
      alert("Veuillez entrer un montant valide.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Faire un don
      </h1>

      <p className="mb-4 text-center">
        Chaque don nous aide à soutenir concrètement les enfants atypiques et leurs familles.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
        {[10, 25, 50].map((value) => (
          <div key={value} className="border rounded p-6 shadow hover:shadow-lg transition">
            <p className="text-lg font-semibold mb-2">Don de {value} €</p>
            <p className="text-sm text-gray-600 mb-4">Un geste simple, un grand impact ✨</p>
            <button
              onClick={() => handleFixedDonation(value)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Je donne {value} €
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-bold mb-2">Ou entrez un montant libre</h2>
        <form onSubmit={handleCustomDonation} className="flex justify-center items-center gap-4 mt-4">
          <input
            type="number"
            step="0.01"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Montant (€)"
            className="border p-2 rounded w-40 text-center"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Générer le reçu
          </button>
        </form>
      </div>
    </div>
  );
}
