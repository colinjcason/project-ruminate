'use client'
import Image from "next/image";
import RectangleButton from "../components/buttons/rectangle-button";
import SmallRectangleButton from "../components/buttons/small-rectangle-button";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Test Rectangle Button</h1>
      {/* <RectangleButton 
        label="Button" 
        onClick={() => alert('Button Clicked!')} 
      /> */}
      <SmallRectangleButton 
        label="Button" 
        
      />
      
    </main>
  );
}