
import React, { useState, useEffect } from 'react';
import { Bot, X, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ChatWindow from './ChatWindow';
import SettingsModal from './SettingsModal';
import MicroInteractions from '@/components/UI/MicroInteractions';
import useChatMessages from './hooks/useChatMessages';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { messages, input, setInput, isLoading, sendMessage, apiKey, setApiKey, saveApiKey } = useChatMessages();

  // Show the button after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSaveSettings = () => {
    saveApiKey();
    setShowSettings(false);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {showButton && !isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <MicroInteractions type="bounce">
              <Button
                onClick={() => setIsOpen(true)}
                className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center"
                aria-label="Open chat"
              >
                <Bot className="h-6 w-6" />
              </Button>
            </MicroInteractions>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-md"
          >
            <Card className="border-border shadow-lg overflow-hidden h-[600px] max-h-[80vh] flex flex-col">
              <div className="p-4 border-b border-border flex justify-between items-center bg-card">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold">MyLifeTips Assistent</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setShowSettings(true)}
                    className="h-8 w-8"
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <ChatWindow 
                messages={messages} 
                input={input}
                setInput={setInput}
                sendMessage={sendMessage} 
                isLoading={isLoading} 
                apiKeySet={!!apiKey}
                onRequestSettings={() => setShowSettings(true)}
              />
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <SettingsModal
            apiKey={apiKey}
            setApiKey={setApiKey}
            onSave={handleSaveSettings}
            onClose={() => setShowSettings(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
