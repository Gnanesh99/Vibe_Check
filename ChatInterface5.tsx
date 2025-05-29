"use client";

import React, { useState } from 'react';
import { ChatHeader } from './ChatHeader';
import { MessageBubble } from './MessageBubble';
import { ChatInput } from './ChatInput';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  avatar: string;
}

const initialMessages: Message[] = [
  {
    text: "Hi! I'm WellBot 👋 — your wellness buddy. Ask me anything about stress, habits, school life, or how you're feeling. You can talk to me or type — whichever works best for you!",
    sender: 'bot',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8320886b5cbce32bf0e4ff93bb8aa63535ac3652?placeholderIfAbsent=true&apiKey=9183df22089d4822beff59ce30798a46'
  },
  {
    text: "Hey there! How's your day going so far?",
    sender: 'bot',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8320886b5cbce32bf0e4ff93bb8aa63535ac3652?placeholderIfAbsent=true&apiKey=9183df22089d4822beff59ce30798a46'
  },
  {
    text: "It's been a bit stressful with exams coming up.",
    sender: 'user',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/896f2f920803c318428f873c2dc8f4b7af89fef3?placeholderIfAbsent=true&apiKey=9183df22089d4822beff59ce30798a46'
  }
];

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      text,
      sender: 'user',
      avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/896f2f920803c318428f873c2dc8f4b7af89fef3?placeholderIfAbsent=true&apiKey=9183df22089d4822beff59ce30798a46'
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <main className="mx-auto w-full bg-white max-w-[480px]">
      <section className="overflow-hidden w-full bg-neutral-900 min-h-[844px]">
        <div className="w-full min-h-[422px]">
          <ChatHeader />
          <p className="px-4 pt-1 pb-3 w-full text-base leading-6 text-white">
            Hi! I'm WellBot 👋 — your wellness buddy. Ask me anything about
            stress, habits, school life, or how you're feeling. You can talk to
            me or type — whichever works best for you!
          </p>
          <section className="messages-container">
            {messages.map((message, index) => (
              <MessageBubble
                key={index}
                message={message.text}
                sender={message.sender}
                avatar={message.avatar}
              />
            ))}
          </section>
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
      </section>
    </main>
  );
};

export default ChatInterface;
