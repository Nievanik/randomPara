import React, { useState } from "react";
import SentenceCard from "../components/SentenceCard";
import SentenceArea from "../components/SentenceArea";

export default function Home() {
  const [inputSentence, setInputSentence] = useState("");
  const [sentenceCollection, setSentenceCollection] = useState([]);

  const [paragraph, setParagraph] = useState([]);

  const [activeCard, setActiceCard] = useState(null);
  const handleSentenceSubmit = (e) => {
    e.preventDefault();
    setSentenceCollection([...sentenceCollection, inputSentence]);
    setInputSentence("");
  };

  const onDrop = (index) => {
    const updatedTask = [...paragraph];
    updatedTask.splice(index, 0, sentenceCollection[activeCard]);
    setParagraph(updatedTask);
  };

  return (
    <div className="mt-5 p-3">
      <form
        onSubmit={handleSentenceSubmit}
        className="max-w-2xl mx-auto flex flex-col gap-2 "
      >
        <input
          type="text"
          id="sentence"
          placeholder="Enter your sentences"
          className="p-2 w-full border rounded-lg"
          value={inputSentence}
          onChange={(e) => setInputSentence(e.target.value)}
        />
        <button className="bg-slate-700 text-white rounded-lg p-2 uppercase hover:opacity-95 w-full">
          Add Sentence
        </button>
      </form>

      <div className="flex flex-wrap gap-5 mt-5 justify-center ">
        {sentenceCollection &&
          sentenceCollection.map((sentence, i) => (
            <SentenceCard
              key={i}
              sentence={sentence}
              index={i}
              setActiceCard={setActiceCard}
            />
          ))}
      </div>

      <SentenceArea
        paragraph={paragraph}
        activeCard={activeCard}
        setActiceCard={setActiceCard}
        onDrop={onDrop}
      />
    </div>
  );
}
