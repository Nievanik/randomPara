import React, { useState } from "react";
import SentenceCard from "./SentenceCard";

export default function DropArea({ onDrop }) {
  return (
    <div
      className="py-2 w-[250px] rounded-lg opacity-80"
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop()}
    >
      Drop Here
    </div>
  );
}
