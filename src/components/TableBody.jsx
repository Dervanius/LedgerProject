import ledger from "../ledger.json";

const TableBody = ({ itemsToShow }) => {
  // Ensure itemsToShow does not exceed the length of the ledger array
  const delovodstvo = ledger.slice(0, Math.min(itemsToShow, ledger.length));
  //const delovodstvo = ledger.slice(0, 5);
  return (
    <tbody>
      {delovodstvo.map((item) => (
        <tr
          key={item.ID}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td className="px-6 py-4">{item.Manifest}</td>
          <td className="px-6 py-4">{item.Podbroj}</td>
          {item.AWB ? (
            <td className="px-6 py-4">{item.AWB}</td>
          ) : (
            <td className="px-6 py-4">N/A</td>
          )}
          <td className="px-6 py-4">
            {new Date(item.Datum).toLocaleDateString("sr-RS", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </td>
          <td className="px-6 py-4">
            {new Date(item.Valuta).toLocaleDateString("sr-RS", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
