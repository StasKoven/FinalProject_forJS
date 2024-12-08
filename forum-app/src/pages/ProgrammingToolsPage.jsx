import React, { useEffect, useState } from "react";

const ProgrammingToolsPage = () => {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        if (!response.ok) {
          throw new Error("Failed to fetch tools");
        }
        const data = await response.json();
        const toolsData = data.map((item, index) => ({
          id: item.id,
          name: `Tool ${index + 1}: ${item.title}`,
          description: item.body,
        }));
        setTools(toolsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  return (
    <div className="programming-tools">
      <h1 className="text-2xl font-bold text-center mb-6">Programming Tools</h1>
      {loading && <p className="text-center">Loading tools...</p>}
      {error && <p className="text-red-500 text-center">Error: {error}</p>}
      {!loading && !error && tools.length === 0 && <p className="text-center">No tools found.</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div key={tool.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">{tool.name}</h2>
            <p className="text-gray-700">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingToolsPage;
