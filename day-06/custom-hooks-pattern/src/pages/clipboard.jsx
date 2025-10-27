import React, { useRef } from "react";
import { useClipBoard } from "../hooks/useClipboard";

const Clipboard = () => {
  const [writeText, readText] = useClipBoard();
  const sourceRef = useRef(null);
  const targetRef = useRef(null);

  const handleCopy = () => {
    const text = sourceRef.current.value;
    writeText(text);
  };

  const hanldePast = async () => {
    const copiedText = await readText();
    if (copiedText) targetRef.current.value = copiedText;
  };

  const hanldeClear = () => {
    targetRef.current.value = "";
  };

  return (
    <div className="pt-2">
      <h2 className="text-center text-2xl text-gray-900 my-2 dark:text-gray-100">
        Clip board
      </h2>

      <div className="flex flex-col mx-auto justify-center items-center">
        <textarea
          ref={sourceRef}
          className="w-[90%] border-2 p-2 text-gray-800 dark:text-gray-100 md:w-[60%]"
          name="source"
          id="source"
          defaultValue={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        />
        <button
          onClick={() => handleCopy()}
          className="border-2 w-[fit-content] text-gray-800 p-2 m-2 dark:text-gray-100 hover:cursor-pointer hover:opacity-80"
        >
          Copy Text
        </button>
      </div>
      <div className="flex flex-col mx-auto justify-center items-center">
        <textarea
          className="w-[90%] border-2 p-2 text-gray-800 dark:text-gray-100 md:w-[60%]"
          name="target"
          id="target"
          readOnly
          ref={targetRef}
        />
        <div className="flex gap-1">
          <button
            onClick={() => hanldePast()}
            className="border-2 w-[fit-content] text-gray-800 p-2 m-2 dark:text-gray-100 hover:cursor-pointer hover:opacity-80"
          >
            Paste Text
          </button>
          <button
            onClick={() => hanldeClear()}
            className="border-2 w-[fit-content] text-gray-800 p-2 m-2 dark:text-gray-100 hover:cursor-pointer hover:opacity-80"
          >
            Clear Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clipboard;
