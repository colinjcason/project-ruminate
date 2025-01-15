'use client'
import Image from "next/image";
import RectangleButton from "../components/buttons/rectangle-button";
import SmallRectangleButton from "../components/buttons/small-rectangle-button";
import SmallSquareButton from "../components/buttons/small-square-button";
import LargeSquareButton from "../components/buttons/square-button";
import DynamicRectangleButton from "../components/buttons/update-rectangle-button";
import DynamicSquareButton from "../components/buttons/update-square-button";

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
        <LargeSquareButton 
        onClick={() => alert('Button Clicked!')} 
      /> 
      <br/>

  {/* dynamic button  */}
 <DynamicRectangleButton
  label="Button"
  bgColor="var(--d-color-semantic-neutral-bg, #FAF5F1)"
  textColor="var(--d-color-semantic-neutral-content, #1F2739)"
  iconColor="var(--d-color-semantic-neutral-content, #1F2739)"
  outlineColor="var(--d-color-semantic-neutral-content, #1F2739)"
  size="lg"
  noOutline={false} // Ensure border and shadow are applied
  className="text-xl font-bold leading-7"
  onClick={() => console.log("Neutral Button Clicked")}
/>
<br />
<DynamicSquareButton
  size="lg"
  onClick={() => console.log("Large button clicked")}
/>
<br />
<DynamicSquareButton
  size="sm"
  bgColor="#FF5733"
  iconColor="#FFD700"
  outlineColor="#FF0000"
  onClick={() => console.log("Small button clicked")}
/>
<br />
<DynamicSquareButton
  size="md"
  bgColor="#0066FF"
  iconColor="#FFFFFF"
  noOutline={true}
  onClick={() => console.log("Button without outline clicked")}
/>

<br />
<DynamicSquareButton
  size="lg"
  bgColor="white"
  iconColor="black"
  noOutline={true} // Removes border and shadow
  onClick={() => console.log("No-outline button clicked")}
/>
    </main>
  );
}