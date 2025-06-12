// src/App.js
import { useState } from "react";
import Hero from "./components/Hero";
import Options from "./components/Options";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleQueryResults = (headers, data) => {
    setTableHeaders(headers);
    setTableData(data);
  };

  return (
    <main className="font-iran">
      <Hero />
      <Options onQuery={handleQueryResults} />
      <ResultsTable headers={tableHeaders} data={tableData} />
    </main>
  );
}

export default App;