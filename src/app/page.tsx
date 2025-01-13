'use client'

import { useState, useEffect } from 'react';
import SlotModal, { ButtonGroup } from '../components/modals/slot-modal';

export default function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="p-4">
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-[#2b13b9] text-white rounded-lg">
        Open Modal
      </button>

      <SlotModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <ButtonGroup
          alignment="end"
          onButton1Click={() => console.log('Right Button 1 clicked')}
          onButton2Click={() => console.log('Right Button 2 clicked')}
        />
        <ButtonGroup
          alignment="center"
          onButton1Click={() => console.log('Center Button 1 clicked')}
          onButton2Click={() => console.log('Center Button 2 clicked')}
        />
        <ButtonGroup
          alignment="start"
          onButton1Click={() => console.log('Left Button 1 clicked')}
          onButton2Click={() => console.log('Left Button 2 clicked')}
        />
      </SlotModal>
    </div>
  );
}