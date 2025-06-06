
import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ChatWindow from './ChatWindow';
import SettingsModal from './SettingsModal';
import useChatMessages from './hooks/useChatMessages';
import { Message } from './types';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { 
    messages, 
    input, 
    setInput, 
    isLoading, 
    sendMessage, 
    apiKey, 
    setApiKey, 
    saveApiKey 
  } = useChatMessages();

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          size="icon"
        >
          <Bot className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <ChatWindow 
            messages={messages}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
            sendMessage={sendMessage}
            onClose={() => setIsOpen(false)}
            onOpenSettings={() => setShowSettings(true)}
          />
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <SettingsModal
            apiKey={apiKey}
            setApiKey={setApiKey}
            onSave={saveApiKey}
            onClose={() => setShowSettings(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
