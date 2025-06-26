import React, { useEffect, useState } from "react";

const PAGE_SIZE = 6;

function ApiData() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setFiltered(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredData);
    setPage(1); // Reset to first page on search
  }, [search, data]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 transition"
        />
      </div>
      {loading && (
        <div className="animate-pulse text-blue-600">Loading...</div>
      )}
      {error && (
        <div className="text-red-500">Error: {error}</div>
      )}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {paginated.map((item) => (
          <div
            key={item.id}
            className="bg-blue-50 dark:bg-gray-700 rounded shadow p-4 transition hover:scale-105 hover:shadow-lg duration-200"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">  {item.completed ? "Completed" : "Pending"}</p>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          className="px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-50 transition"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-sm">
          Page {page} of {totalPages}
        </span>
        <button
          className="px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-50 transition"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ApiData;