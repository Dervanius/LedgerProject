const ViewMoreItems = ({ onViewMore }) => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <button
        onClick={onViewMore}
        className="block bg-indigo-500 text-white text-center py-2 px-8 mx-auto rounded-xl hover:bg-indigo-700"
      >
        View More
      </button>
    </section>
  );
};
export default ViewMoreItems;
