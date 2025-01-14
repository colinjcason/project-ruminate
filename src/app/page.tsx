'use client'

import SlotModal, { ButtonGroup } from '../components/modals/slot-modal';

export default function ModalPage() {
  return (
    <main className="p-4">
      <SlotModal>
        < div className="flex flex-col gap-10" >
          <ButtonGroup
            alignment="right"
            onButton1Click={() => console.log('Right Button 1 clicked')}
            onButton2Click={() => console.log('Right Button 2 clicked')}
          />
          <ButtonGroup
            alignment="center"
            onButton1Click={() => console.log('Center Button 1 clicked')}
            onButton2Click={() => console.log('Center Button 2 clicked')}
          />
          <ButtonGroup
            alignment="left"
            onButton1Click={() => console.log('Left Button 1 clicked')}
            onButton2Click={() => console.log('Left Button 2 clicked')}
          />
        </div >
      </SlotModal >
    </main >
  );
}