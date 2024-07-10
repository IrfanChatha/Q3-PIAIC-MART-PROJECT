// pages/index.js
import Head from 'next/head'

export default function Home() {
  const products = [
    { id: 1, name: "Style Watch 1", price: "Rs.1999", image: "/productimages/product1.jpg" },
    { id: 2, name: "Style Watch 2", price: "Rs.2999", image: "/productimages/product2.jpg" },
    { id: 3, name: "Smart Watch 3", price: "Rs.3999", image: "/productimages/product3.jpg" },
    { id: 4, name: "Smart Watch 4", price: "Rs.4999", image: "/productimages/product4.jpg" },
    { id: 5, name: "Smart Watch 5", price: "Rs.5999", image: "/productimages/product5.jpg" },
    { id: 6, name: "Product 6", price: "$69.99", image: "/productimages/product6.jpg" },
    { id: 7, name: "Product 7", price: "$79.99", image: "/productimages/product7.jpg" },
    { id: 8, name: "Product 8", price: "$89.99", image: "/productimages/product8.jpg" },
    { id: 9, name: "Product 9", price: "$99.99", image: "/productimages/product9.jpg" },
    { id: 10, name: "Product 10", price: "$109.99", image: "/productimages/product10.jpg" },
    { id: 11, name: "Product 11", price: "$119.99", image: "/productimages/product11.jpg" },
    { id: 12, name: "Product 12", price: "$129.99", image: "/productimages/product12.jpg" },
    { id: 13, name: "Product 13", price: "$139.99", image: "/productimages/product13.jpg" },
    { id: 14, name: "Product 14", price: "$149.99", image: "/productimages/product14.jpg" },
    { id: 15, name: "Product 15", price: "$159.99", image: "/productimages/product15.jpg" },
    { id: 16, name: "Product 16", price: "$169.99", image: "/productimages/product16.jpg" },
    { id: 17, name: "Product 17", price: "$179.99", image: "/productimages/product17.jpg" },
    { id: 18, name: "Product 18", price: "$189.99", image: "/productimages/product18.jpg" },
    { id: 19, name: "Product 19", price: "$199.99", image: "/productimages/product19.jpg" },
    { id: 20, name: "Product 20", price: "$209.99", image: "/productimages/product20.jpg" },
    { id: 21, name: "Product 21", price: "$219.99", image: "/productimages/product21.jpg" },
    { id: 22, name: "Product 22", price: "$229.99", image: "/productimages/product22.jpg" },
    { id: 23, name: "Product 23", price: "$239.99", image: "/productimages/product23.jpg" },
    { id: 24, name: "Product 24", price: "$249.99", image: "/productimages/product24.jpg" },
    { id: 25, name: "Product 25", price: "$259.99", image: "/productimages/product25.jpg" },
    { id: 26, name: "Product 26", price: "$269.99", image: "/productimages/product26.jpg" },
    { id: 27, name: "Product 27", price: "$279.99", image: "/productimages/product27.jpg" },
    { id: 28, name: "Product 28", price: "$289.99", image: "/productimages/product28.jpg" },
    { id: 29, name: "Product 29", price: "$299.99", image: "/productimages/product29.jpg" },
    { id: 30, name: "Product 30", price: "$309.99", image: "/productimages/product30.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>E-Market Store</title>
        <meta name="description" content="Landing page for an eCommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-orange-500">E-Market Store</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 bg-cover bg-center" style={{ backgroundImage: 'url("/backgroundimages/bkimage.jpg")' }}>
        <section className="text-center my-12">
          <h2 className="text-4xl font-extrabold text-blue-400">Welcome to Our Store</h2>
          <p className="mt-4 text-lg text-pink-600">
            Discover the best products at unbeatable prices.
          </p>
          <a href="#products" className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Shop Now
          </a>
        </section>

        <section id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 my-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover object-center mb-2 rounded" />
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-1 text-gray-600">{product.price}</p>
              <button className="mt-3 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add to Cart</button>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-600">© 2024 E-Market Store. (Irfan Chatha) All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
