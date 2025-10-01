import React from "react";

function DestinationList({ destinations, deleteDestination }) {
  if (destinations.length === 0) {
    return <p>No destinations added yet.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {destinations.map((d) => (
        <li
          key={d.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <div>
            <strong>{d.place}</strong> - {d.country}
          </div>
          <button
            onClick={() => deleteDestination(d.id)}
            style={{ background: "red", color: "white", padding: "5px 10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DestinationList;
