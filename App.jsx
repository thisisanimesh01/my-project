import React, { useState } from "react";


function App() {
  const [destinations, setDestinations] = useState([
    { id: 1, place: "Eiffel Tower", country: "France" },
    { id: 2, place: "Great Wall", country: "China" },
    { id: 3, place: "Taj Mahal", country: "India" },
  ]);

 
  const addDestination = (newDestination) => {
    setDestinations([...destinations, { ...newDestination, id: Date.now() }]);
  };

 
  const deleteDestination = (id) => {
    setDestinations(destinations.filter((d) => d.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🌍 Travel Destinations</h1>
      <DestinationForm addDestination={addDestination} />
      <DestinationList
        destinations={destinations}
        deleteDestination={deleteDestination}
      />
    </div>
  );
}

export default App;
