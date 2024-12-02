import React, { useState } from 'react'
import MessageList from '@/components/MessageList'
import ChatInput from '@/components/ChatInput'
import { getAIResponse } from '@/lib/openai'

const ChatInputScreen: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([])

  const handleSendMessage = async (message: string) => {
    setMessages([...messages, { sender: 'user', text: message }])

    const aiResponse = await getAIResponse(message) || ''
    setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: aiResponse }])
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="w-full max-w-2lg flex-grow">
        <MessageList messages={messages} />
      </div>
      <div className="w-full max-w-lg">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  )
}

export default ChatInputScreen