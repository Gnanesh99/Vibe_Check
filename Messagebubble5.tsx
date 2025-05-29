import React from 'react';

interface MessageBubbleProps {
  message: string;
  sender: 'user' | 'bot';
  avatar: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, sender, avatar }) => {
  const isUser = sender === 'user';

  return (
    <article className="flex gap-3 items-end p-4 w-full">
      {!isUser && (
        <img
          src={avatar}
          alt={`${sender} avatar`}
          className="object-contain shrink-0 w-10 rounded-3xl aspect-square"
        />
      )}
      <div className={`flex flex-col flex-1 shrink items-${isUser ? 'end' : 'start'} basis-0 min-w-60`}>
        <span className={`text-sm leading-loose ${isUser ? 'text-right' : ''} text-gray-400 whitespace-nowrap w-[46px]`}>
          {isUser ? 'User' : 'WellBot'}
        </span>
        <p className={`px-4 py-3 mt-1 ${
          isUser
            ? 'w-full text-xs leading-6 bg-violet-300 rounded-xl max-w-[360px] text-neutral-900'
            : 'text-base text-white rounded-xl bg-zinc-800'
        }`}>
          {message}
        </p>
      </div>
      {isUser && (
        <img
          src={avatar}
          alt={`${sender} avatar`}
          className="object-contain shrink-0 w-10 rounded-3xl aspect-square"
        />
      )}
    </article>
  );
};
