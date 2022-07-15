import { useEffect, useState } from "react";
import "./App.css";
import Counters from "./components/Counters";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  // Numero de cartas por dificultad (Cambiara con el menu)
  const [numCards, setNumCards] = useState(Array.from({ length: 8 }));
  const [movements, setMovements] = useState(0);
  const [remainingPairs, setRemainingPairs] = useState(numCards.length);

  useEffect(() => {
    if (remainingPairs === 0) alert("You Wins");
  }, [remainingPairs]);

  return (
    <main className="App">
      <Header />
      <Counters movements={movements} remainingPairs={remainingPairs} />
      <Table
        numCards={numCards}
        setMovements={setMovements}
        movements={movements}
        setRemainingPairs={setRemainingPairs}
        remainingPairs={remainingPairs}
      />
    </main>
  );
}

export default App;
