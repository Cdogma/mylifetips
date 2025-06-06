
import { useState } from 'react';
import { Message } from '../types';

const useChatMessages = (apiKeyParam?: string) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hallo! Ich bin dein AI-Assistent für MyLifeTips. Frag mich gerne alles über Finanzen, Technik, Lifestyle oder Business!',
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(apiKeyParam || localStorage.getItem('perplexity_api_key') || '');

  const addMessage = async (content: string) => {
    if (!content.trim() || loading) return;

    if (!apiKey) {
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'Du bist ein hilfreicher AI-Assistent für MyLifeTips, eine deutsche Website für ehrliche Produkt- und Serviceempfehlungen. Antworte auf Deutsch und sei hilfreich bei Fragen zu Finanzen, Technik, Lifestyle und Business. Sei präzise und freundlich.'
            },
            ...messages.slice(-5).map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            {
              role: 'user',
              content
            }
          ],
          temperature: 0.2,
          top_p: 0.9,
          max_tokens: 1000,
          return_images: false,
          return_related_questions: false,
          frequency_penalty: 1,
          presence_penalty: 0
        }),
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.choices[0].message.content,
          role: 'assistant',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error('Unerwartete API-Antwort');
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Entschuldigung, es gab einen Fehler bei der Verarbeitung deiner Anfrage. Bitte überprüfe deinen API-Key und versuche es erneut.',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    addMessage,
    loading,
    apiKey,
    setApiKey,
  };
};

export default useChatMessages;
