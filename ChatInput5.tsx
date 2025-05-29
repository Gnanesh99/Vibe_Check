"use client";

import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <footer className="mt-80 w-full">
      <div className="flex gap-3 items-center px-4 py-3 w-full">
        <div className="flex-1 shrink self-stretch my-auto w-full basis-0 min-h-12 min-w-40">
          <div className="flex flex-1 rounded-xl size-full">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="overflow-hidden flex-1 shrink self-stretch py-2 pr-2 pl-4 h-full text-base text-gray-400 rounded-l-xl basis-0 bg-zinc-800 min-w-60 focus:outline-none"
            />
            <button
              onClick={handleSubmit}
              className="flex justify-center items-center pr-2 w-10 h-full rounded-r-xl bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <div className="flex flex-1 shrink justify-center items-center self-stretch p-1.5 my-auto w-full basis-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/68818f17069613bc890589f37325a2ccfe64663e?placeholderIfAbsent=true&apiKey=9183df22089d4822beff59ce30798a46"
                  alt="Send message"
                  className="object-contain flex-1 w-5 aspect-square"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-neutral-900 min-h-5" />
    </footer>
  );
};
