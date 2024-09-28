const TableHead = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Manifest
        </th>
        <th scope="col" className="px-6 py-3">
          Podbroj
        </th>
        <th scope="col" className="px-6 py-3">
          AWB
        </th>
        <th scope="col" className="px-6 py-3">
          Datum Carinjenja
        </th>
        <th scope="col" className="px-6 py-3">
          Valuta
        </th>
      </tr>
    </thead>
  );
};
export default TableHead;
