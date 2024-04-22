import React from "react";
import SentenceCard from "./SentenceCard";
import DropArea from "./DropArea";

export default function SentenceArea({
  paragraph,
  setActiceCard,
  activeCard,
  onDrop,
}) {
  return (
    <div className="mt-10 text-center ">
      <h2 className="text-2xl font-semibold">Create Your Sentence</h2>
      <div className="flex flex-col gap-2 items-center mt-5 shadow text-gray-500  p-3 max-w-xs min-h-[300px] w-[420px] mx-auto">
        {activeCard !== null && <DropArea onDrop={() => onDrop(0)} />}

        {paragraph.length > 0 ? (
          paragraph.map((line, i) => (
            <React.Fragment key={i}>
              <SentenceCard
                sentence={line}
                index={i}
                setActiceCard={setActiceCard}
              />
              {activeCard !== null && <DropArea onDrop={() => onDrop(i + 1)} />}
            </React.Fragment>
          ))
        ) : (
          <p>{activeCard == null && "Drop Your Sentence Here"}</p>
        )}
      </div>
    </div>
  );
}
