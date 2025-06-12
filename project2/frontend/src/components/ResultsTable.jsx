const ResultsTable = ({ headers, data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="w-full max-w-5xl mx-auto mt-10 text-center p-8 text-gray-500 font-sans">
        <p>نتیجه‌ای برای نمایش وجود ندارد. لطفاً یک کوئری را اجرا کنید.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto my-10 px-4 font-sans">
      <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
        <table className="min-w-full bg-white text-right">
          <thead className="bg-gray-100">
            <tr>
              {headers.map((header) => (
                <th key={header} className="p-4 font-bold text-blue-900">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                {Object.values(row).map((cell, colIndex) => (
                  <td key={colIndex} className="p-4 text-gray-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;