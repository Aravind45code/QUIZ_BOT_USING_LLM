"use client";
import { useState, useEffect } from "react";
import OpenAI from "openai";
import { ChatOpenAI } from "@langchain/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
const model = new ChatOpenAI({
  openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  temperature: 0.9,
});
const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory: memory });
const run = async (input: string) => {
  const response = await chain.call({ input: input });
  return response.response;
};
const categories = [
  { label: "Sport", value: "sport" },
  { label: "Hollywood", value: "hollywood" },
  { label: "Biology", value: "biology" },
  { label: "Geography", value: "geography" },
];
const Main = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [category, setCategory] = useState("");
  const askFirstQuestion = async () => {
    const firstQuestion = await run(
      `Ask a trivia question in the ${category} category`
    );
    setResponse(firstQuestion);
  };
  useEffect(() => {
    if (category !== "") {
      askFirstQuestion();
    }
  }, [category]);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await run(
      `AI: ${response}\nYou: ${input}\nAI: Evaluate the answer and ask`
    );
    setResponse(result);
    setInput("");
  };
  return (
    <div className="container mx-auto p-4 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
      <h1 className="text-2x1 font-bold mb-4">Quiz bot game show</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your answer"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded "
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white font-semibold rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Main;
