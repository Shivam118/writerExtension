import React from 'react';
import "./popup.css";
import { useCompletion } from 'ai/react';

const apiRoute = "http://localhost:3000/api/text-completion"; // can be shifted to a common file in production

export default function Completion() {
  const {
    completion,
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: apiRoute,
  });

  return (
    <div className="container flex flex-col justify-center items-center" style={{ width: '500px', height: '500px' }}>
      <p className="container w-full h-4/5 p-5" style={{ whiteSpace: 'pre-wrap' }}>{completion}</p>
      <form className="flex flex-row justify-evenly items-center w-full h-1/5 " onSubmit={handleSubmit}>
        <input className="w-3/5 bg-transparent h-8 rounded p-2 border border-solid border-black" autoFocus={true} placeholder="Type here..." value={input} onChange={handleInputChange} />
        <input type="submit" className="w-1/5 bg-green-200 h-8 rounded border border-solid border-green-700" disabled={isLoading} value="Generate" />
      </form>
    </div>
  );
}