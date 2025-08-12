const RestCategory = (props) => {
  console.log("props :>> ", props);
  const { category } = { ...props } || {};

  return (
    <div className="items-center">
      <div className="w-full bg-gray-100 shadow-lg my-5  p-5    flex justify-between">
        <span className="font-bold text-lg">
          {" "}
          {category.title} ({category.itemCards.length})
        </span>
        <span className="mx-3 font-bold text-lg ">🔽</span>
      </div>
    </div>
  );
};
export default RestCategory;
