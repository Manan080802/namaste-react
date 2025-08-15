const Contact = () => {
  return (
    <div className="container  mx-auto px-4">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <p>dfff</p>
      <span>sdfscls</span>

      <form className="p-4 m-4">
        <input
          type="text"
          placeholder="Enter name"
          className="border-2  mx-2 p-2"
        />
        <input
          type="text"
          placeholder="Enter message"
          className="border-2 mx-2 p-2"
        />
        <button className="mx-2 p-2 bg-orange-300 text-white w-20 h-10">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
