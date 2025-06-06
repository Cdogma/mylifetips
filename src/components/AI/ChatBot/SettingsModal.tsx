
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SettingsModalProps {
  apiKey: string;
  setApiKey: (apiKey: string) => void;
  onSave: () => void;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  apiKey,
  setApiKey,
  onSave,
  onClose,
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div
        className="relative w-full max-w-md bg-card border border-border rounded-lg shadow-xl p-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <h3 className="text-lg font-semibold mb-4">API-Einstellungen</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Gib deinen Perplexity API-Key ein, um den Chatbot zu nutzen.
        </p>
        <Input
          type="password"
          placeholder="Perplexity API-Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="mb-4"
        />
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={onClose}>
            Abbrechen
          </Button>
          <Button onClick={onSave}>
            Speichern
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SettingsModal;
