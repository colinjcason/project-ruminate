'use client'
import Image from "next/image";
import RectangleButton from "../components/buttons/rectangle-button";
import SmallRectangleButton from "../components/buttons/small-rectangle-button";
import SmallSquareButton from "../components/buttons/small-square-button";
import LargeSquareButton from "../components/buttons/square-button";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Test Rectangle Button</h1>
      {/* <RectangleButton 
        label="Button" 
        onClick={() => alert('Button Clicked!')} 
      /> */}
      <br/>
      <SmallRectangleButton 
        label="Button" 
      />
      <br/>
       <SmallSquareButton className="mt-4" onClick={() => alert('Heart Clicked!')} />
       <br/>
       <RectangleButton 
        label="Button" 
        onClick={() => alert('Button Clicked!')} 
      /> 
       <br/>
       {/* <SmallSquareButton onClick={() => alert('Heart Clicked!')} /> */}
        <br/>
        <LargeSquareButton 
        onClick={() => alert('Button Clicked!')} 
      /> 
    </main>
  );
}