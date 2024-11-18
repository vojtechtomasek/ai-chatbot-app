import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const ChatInput: React.FC<{ onSendMessage: (message: string) => void }> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (message.trim() === '') return
    onSendMessage(message)
    setMessage('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-row">
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        className="mr-2 flex-grow"
      />
      <Button onClick={handleSendMessage} className="flex-shrink-0">
        Send
      </Button>
    </div>
  )
}

export default ChatInput