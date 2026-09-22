'use client';

import { createContext, useContext, useState, useTransition } from 'react';
import dynamic from 'next/dynamic';

const QuoteModalContext = createContext({
  isModalOpen: false,
  selectedService: 'Suministro de Agua',
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

// Dynamic import of QuoteModal so it is only loaded when needed or rendered on client
const QuoteModal = dynamic(() => import('../QuoteModal'), {
  ssr: false,
});

export function QuoteModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Suministro de Agua');
  const [, startTransition] = useTransition();

  const openQuoteModal = (serviceName = 'Suministro de Agua') => {
    startTransition(() => {
      setSelectedService(serviceName);
      setIsModalOpen(true);
    });
  };

  const closeQuoteModal = () => {
    setIsModalOpen(false);
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isModalOpen,
        selectedService,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={closeQuoteModal}
        defaultService={selectedService}
      />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal debe utilizarse dentro de un QuoteModalProvider');
  }
  return context;
}
