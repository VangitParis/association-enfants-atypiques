import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = form) => {
    const tempErrors = { ...errors };

    if (touched.nom && !/^[a-zA-ZÀ-ÿ' -]{2,30}$/.test(fieldValues.nom)) {
        tempErrors.nom = 'Nom invalide (lettres, espaces, tirets uniquement)';
      } else {
        delete tempErrors.nom;
      }
      

      if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)) {
    } else {
      delete tempErrors.email;
    }

    if (touched.message && fieldValues.message.trim().length < 10) {
      tempErrors.message = 'Message trop court (min. 10 caractères)';
    } else {
      delete tempErrors.message;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    validate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ nom: true, email: true, message: true });
    if (validate()) {
      alert('Message envoyé ✔️');
      setForm({ nom: '', email: '', message: '' });
      setTouched({});
      setErrors({});
    }
  };

  const [isValid, setIsValid] = useState(false);

useEffect(() => {
  const noErrors = Object.keys(validate(form)).length === 0;
  setIsValid(noErrors);
}, [form, touched]);


  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nom" className="block mb-1 font-semibold">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {touched.nom && errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {touched.email && errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {touched.message && errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={Object.keys(errors).length > 0}
          className={`w-full px-4 py-2 rounded text-white ${
            Object.keys(errors).length === 0
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-400 cursor-not-allowed'
          } transition`}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
