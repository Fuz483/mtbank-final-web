import React, { useState } from 'react';

const VacanciesTab = () => {
  const [linkedIn, setLinkedIn] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const applyForJob = (e: React.FormEvent) => {
    e.preventDefault();
    // API запрос к бэкенду
    setSubmitted(true);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-mtRed">
      <h2 className="text-2xl font-bold text-mtBlue mb-4 flex items-center gap-2">
        <img src="/mtbank-icon.svg" alt="" className="w-6 h-6" />
        Открытые вакансии
      </h2>
      <p className="text-gray-600 mb-6">Присоединяйтесь к команде инноваций МТБанка.</p>
      
      {submitted ? (
        <div className="p-4 bg-green-100 text-green-800 rounded-lg font-medium">
          Ваша заявка успешно отправлена HR-отделу! Мы свяжемся с вами в LinkedIn.
        </div>
      ) : (
        <form onSubmit={applyForJob} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-mtBlue mb-1">Ваш профиль LinkedIn</label>
            <input 
              type="url" 
              required
              placeholder="https://linkedin.com/in/username"
              className="w-full p-2 border border-gray-300 rounded-md focus:border-mtRed focus:ring-1 focus:ring-mtRed outline-none"
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-mtRed text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Отправить заявку
          </button>
        </form>
      )}
    </div>
  );
};

// ВОТ ИСПРАВЛЕНИЕ: Экспортируем по умолчанию, чтобы InnovView.tsx мог это прочитать
export default VacanciesTab;
