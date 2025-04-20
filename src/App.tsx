import { useState } from "react";
// import NavBar from "./components/navBar/navBar";
import { NavBar } from "./components/navBar/navBar";
import { Accordion } from "./components/accordion/Accordion";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar
        size="large"
        variant="withSearch"
      />

      <Accordion title="Accordion" count={5} isHorizontal={true}>
        <p className="mb-2">This is the content inside the accordion.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </Accordion>
    </>
  );
}

export default App;
