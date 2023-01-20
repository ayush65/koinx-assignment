/** @format */

import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Caraousel } from "./components/caraousel/Caraousel";
import { HeadingTags } from "./components/headingTags/HeadingTags";
import { Table } from "./components/table/Table";
import { CryptoDataModal } from "./components/cryptoDataModal/CryptoDataModal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='App'>
      <Navbar />
      <Caraousel />
      <HeadingTags />
      <Table setIsOpen={setIsOpen} />
      <CryptoDataModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

export default App;
