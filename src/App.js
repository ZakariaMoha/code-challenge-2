
import React, { useState } from 'react';
import BotCollection from './BotCollection.jsx';
import YourBotArmy from './YourBotArmy.jsx';

function App() {
  const [bots, setBots] = useState([
    { id: 1, name: 'Bot1', power: 100 },
    { id: 2, name: 'Bot2', power: 200 },
    // Add more bot data as needed
  ]);

  const [army, setArmy] = useState([]);

  const handleAddToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const handleDischarge = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          
          handleRelease(bot);
          let newBots=bots.filter((b)=>b.id===bot.id ? false:true)
          setBots(newBots)
        } else {
          // Handle error here if the delete request fails
          console.error('Cannot delete bot.');
        }
      });
    handleRelease(bot);
  };

  return (
    <div className="App">
      <BotCollection
        bots={bots}
        onAddToArmy={handleAddToArmy}
        onRelease={handleRelease}
        onDischarge={handleDischarge}
      />
      <YourBotArmy army={army} onRelease={handleRelease} />
    </div>
  );
}

export default App
