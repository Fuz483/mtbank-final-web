import { useState } from 'react';

// Моковые данные пользователя (в реале берем из Context/API)
const mockUser = { balance: 2000 };

const ROULETTES = {
  poor: { name: 'Нищая', cost: 550, chance: 0.75, rewards: [50, 100, 150, 'Машинка 2 ур.'] },
  mid:  { name: 'Средняя', cost: 500, chance: 0.50, rewards: [500, 800, 'Машинка 5 ур.'] },
  rich: { name: 'Дорогая', cost: 200, chance: 0.02, rewards: [10000, 50000, 'Машинка 20 ур.'] }
};

export const BonusRoulette = () => {
  const [balance, setBalance] = useState(mockUser.balance);
  const [result, setResult] = useState<string | null>(null);

  const spin = (type: keyof typeof ROULETTES) => {
    const roulette = ROULETTES[type];
    if (balance < roulette.cost) {
      setResult('Недостаточно MTCoins!');
      return;
    }

    setBalance(prev => prev - roulette.cost);

    const isWin = Math.random() < roulette.chance;
    if (isWin) {
      const reward = roulette.rewards[Math.floor(Math.random() * roulette.rewards.length)];
      setResult(`🎉 Выигрыш: ${reward}!`);
      // Здесь делаем API запрос на сервер для сохранения награды
    } else {
      setResult('😢 Ничего не выпало. Попробуй еще!');
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border-2 border-mtBlue">
      <h2 className="text-2xl font-bold text-mtBlue mb-4 flex items-center gap-2">
        {/* Иконка банка по брендбуку обязательна рядом с названием */}
        <img src="/mtbank-icon.svg" alt="MTB" className="w-8 h-8" />
        Рулетка Бонусов МТБанк
      </h2>
      <p className="mb-4 font-bold text-lg text-mtRed">Баланс: {balance} MTCoins</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(ROULETTES).map(([key, r]) => (
          <button
            key={key}
            onClick={() => spin(key as keyof typeof ROULETTES)}
            className="flex flex-col items-center p-4 bg-mtGray rounded-lg hover:bg-gray-200 transition border border-gray-300"
          >
            <span className="font-bold text-mtBlue">{r.name}</span>
            <span className="text-sm text-gray-600">Стоимость: {r.cost} 🪙</span>
            <span className="text-xs text-mtRed">Шанс: {r.chance * 100}%</span>
          </button>
        ))}
      </div>

      {result && (
        <div className="mt-6 p-4 text-center rounded-lg bg-mtBlue text-white font-bold">
          {result}
        </div>
      )}
    </div>
  );
};