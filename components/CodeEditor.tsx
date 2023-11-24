"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "tailwindcss/tailwind.css"; // Import the main tailwind CSS file
import { editor } from "monaco-editor";

// Use dynamic to load MonacoEditor only on the client side
const MonacoEditor = dynamic(() => import("react-monaco-editor"), {
  ssr: false,
});

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>(""); // State variable for output

  const handleRunCode = () => {
    try {
      // Use tsx to support JSX syntax
      // eslint-disable-next-line no-eval
      const result = eval(`(() => {${code}})()`);
      setOutput(result.toString()); // Update the output state
    } catch (error) {
      setOutput(`Error: ${error.message}`); // Update the output state with an error message
    }
  };

  const editorOptions: editor.IStandaloneEditorConstructionOptions = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line", // Specify a valid cursor style value
    automaticLayout: true,
    glyphMargin: true,
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <MonacoEditor
        language="javascript"
        theme="vs-dark"
        value={code}
        options={editorOptions}
        onChange={(newCode) => setCode(newCode)}
        className="w-full max-w-screen-md h-96 border rounded-lg p-2"
      />
      <button
        onClick={handleRunCode}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Run Code
      </button>
      {output && (
        <div className="mt-4 p-2 bg-gray-200 rounded-md">
          <strong>Output:</strong> {output}
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
