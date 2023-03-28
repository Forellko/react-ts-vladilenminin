export function CreateProduct() {
  return (
    <form action="">
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-none"
        placeholder="Enter product title..."
      />
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  );
}
