
import React from 'react';
import { Bot, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Message } from './types';

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  return (
    <motion.div
      key={message.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        message.role === 'user' 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-muted text-muted-foreground'
      }`}>
        {message.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <Card className={`max-w-[80%] p-3 ${
        message.role === 'user' 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-muted'
      }`}>
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
      </Card>
    </motion.div>
  );
};

export default MessageItem;
