import React from "react";

export default function SentenceCard({ sentence, index, setActiceCard }) {
  return (
    <div
      className="shadow p-3 w-[250px] cursor-grab rounded-lg"
      draggable
      onDragStart={() => setActiceCard(index)}
      onDragEnd={() => setActiceCard(null)}
    >
      {sentence}
    </div>
  );
}
