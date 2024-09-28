import { useState } from "react";

const TableHead = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    Manifest: "",
    Podbroj: "",
    AWB: "",
    Datum: "",
    Valuta: "",
  });

  // Handle filter input change and notify parent (Table component)
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th className="px-6 py-3">
          Manifest
          <input
            type="text"
            name="Manifest"
            value={filters.Manifest}
            onChange={handleFilterChange}
            className="block w-full mt-1 text-sm"
          />
        </th>
        <th className="px-6 py-3">
          Podbroj
          <input
            type="text"
            name="Podbroj"
            value={filters.Podbroj}
            onChange={handleFilterChange}
            className="block w-full mt-1 text-sm"
          />
        </th>
        <th className="px-6 py-3">
          AWB
          <input
            type="text"
            name="AWB"
            value={filters.AWB}
            onChange={handleFilterChange}
            className="block w-full mt-1 text-sm"
          />
        </th>
        <th className="px-6 py-3">
          Datum
          <input
            type="date"
            name="Datum"
            value={filters.Datum}
            onChange={handleFilterChange}
            className="block w-full mt-1 text-sm"
          />
        </th>
        <th className="px-6 py-3">
          Valuta
          <input
            type="date"
            name="Valuta"
            value={filters.Valuta}
            onChange={handleFilterChange}
            className="block w-full mt-1 text-sm"
          />
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
