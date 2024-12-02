import React from 'react'
import ReactMarkdown from 'react-markdown'

const MessageList: React.FC<{ messages: { sender: string, text: string }[] }> = ({ messages }) => {
  return (
    <div className="mb-4">
      {messages.map((message, index) => (
        <div key={index} className={`p-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
          <span className={`inline-block p-2 rounded text-sm ${
            message.sender === 'user' 
              ? 'bg-gray-200 text-black' 
              : 'bg-transparent text-white prose prose-invert max-w-none'
          }`}>
            {message.sender === 'user' ? (
              message.text
            ) : (
              <ReactMarkdown>{message.text}</ReactMarkdown>
            )}
          </span>
        </div>
      ))}
    </div>
  )
}

export default MessageList