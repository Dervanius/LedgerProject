import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ itemsToShow }) => {
  return (
    <div className="relative overflow-x-auto mt-6">
      <table className="w-full text-xl-6 text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHead />
        <TableBody itemsToShow={itemsToShow} />
      </table>
    </div>
  );
};
export default Table;
