import React from 'react';

const Bot = ({ bot, onAddToArmy, onRelease, onDischarge }) => {
  return (
    <div className="bot">
      <h2>{bot.name}</h2>
      <p>Power: {bot.power}</p>
      <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
      <button onClick={() => onRelease(bot)}>Release</button>
      <button onClick={() => onDischarge(bot)}>Discharge Forever</button>
    </div>
  );
};

export default Bot;