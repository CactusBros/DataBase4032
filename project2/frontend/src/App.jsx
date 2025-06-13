import Hero from "./components/Hero";
import Options from "./components/Options";
import ResultsTable from "./components/ResultsTable";
import { useState } from "react";

function App() {
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleQueryResults = (headers, data) => {
    setTableHeaders(headers);
    setTableData(data);
  };

  return (
    <main>
      <Hero />
      <Options onQuery={handleQueryResults} />
      <ResultsTable headers={tableHeaders} data={tableData} />
    </main>
  );
}

export default App;