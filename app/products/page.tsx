import Image from "next/image";

type ProductResponse = {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
};

type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

const page = async () => {
  const productsResponse: ProductResponse = await fetch(
    "https://dummyjson.com/products",
  ).then((res) => res.json());
  console.log(productsResponse);

  const products: Product[] = productsResponse.products;
  return (
    <main className="">
      <header className="flex items-center justify-between bg-gray-200 p-4 mb-4">
        <h1 className="text-lg font-semibold">
          {productsResponse.total} products
        </h1>
        <p className="text-sm text-stone-600">
          pages: {Math.ceil(productsResponse.total / productsResponse.limit)}
        </p>
        <input
          type="text"
          placeholder="Search"
          className="border border-stone-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            className="flex flex-col items-center bg-white h-full  p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            key={product.id}
          >
            <Image
              className="object-cover w-full  rounded-md"
              width={100}
              height={100}
              src={product.thumbnail}
              alt={product.title}
            />
            <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
            <p className="text-stone-600">{product.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
