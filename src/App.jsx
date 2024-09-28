import { useState } from "react";
import Table from "./components/Table";
import ViewMoreItems from "./components/ViewMoreItems";
import ledger from "./ledger.json";

const App = () => {
  const [itemsToShow, setItemsToShow] = useState(5);

  const handleViewMore = () => {
    // Only increase itemsToShow if there are more items to show
    if (itemsToShow < ledger.length) {
      setItemsToShow((prev) => prev + 5);
    }
  };

  return (
    <>
      <Table itemsToShow={itemsToShow} />
      <ViewMoreItems onViewMore={handleViewMore} />
    </>
  );
};

export default App;
