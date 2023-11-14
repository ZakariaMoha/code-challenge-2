import React from 'react';
import Bot from './Bot.jsx';

const BotCollection = ({ bots, onAddToArmy, onRelease, onDischarge }) => {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <Bot
          key={bot.id}
          bot={bot}
          onAddToArmy={onAddToArmy}
          onRelease={onRelease}
          onDischarge={onDischarge}
        />
      ))}
    </div>
  );
};

export default BotCollection;