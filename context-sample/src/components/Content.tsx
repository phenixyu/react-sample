import { useState } from "react";

export interface ContentPros {
  name: string;
  age: number;
}
export function Content(props: ContentPros) {
  console.log("content render");
  const [showChilds, setShowChilds] = useState(false);

  const handleClick = (e: any) => {
    setShowChilds(!showChilds);
  };
  return (
    <div>
        <span>name: {props.name}</span>
        <span>age: {props.age}</span>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
