import { Metadata } from "next";
import Image from "next/image";
import { Button } from "components/Button/Button";
import { LP_GRID_ITEMS } from "lp-items";

export const metadata: Metadata = {
  title: "GMT Corporation Japan",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://gmt-corp-japan.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
};

// Demo data for top-selling cars
const TOP_SELLING_CARS = [
  {
    id: 1,
    name: "Toyota Land Cruiser",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$25,000",
  },
  {
    id: 2,
    name: "Nissan GT-R",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$50,000",
  },
  {
    id: 3,
    name: "Honda Civic",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$15,000",
  },
  {
    id: 4,
    name: "Mazda RX-8",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$12,000",
  },
  {
    id: 5,
    name: "Subaru Impreza",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$18,000",
  },
  {
    id: 6,
    name: "Mitsubishi Lancer",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$14,000",
  },
  {
    id: 7,
    name: "Toyota Supra",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$40,000",
  },
  {
    id: 8,
    name: "Nissan Skyline",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$45,000",
  },
  {
    id: 9,
    name: "Honda Accord",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$20,000",
  },
  {
    id: 10,
    name: "Lexus RX",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$35,000",
  },
];

export default function Web() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <link href="/" className="text-2xl font-bold text-gray-800 dark:text-white"/>
                GMT Corp Japan
              
            </div>
            <div className="flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-800 dark:text-white hover:text-blue-600 focus:outline-none">
                  Search Cars ▼
                </button>
                <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 mt-2 w-96">
                  <input
                    type="text"
                    placeholder="Search car brands..."
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                  />
                  <div className="flex space-x-2">
                    <Button href="#" className="w-full">
                      Search
                    </Button>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-600 dark:text-gray-400">Popular Brands:</p>
                    <ul className="mt-1">
                      {["Toyota", "Nissan", "Honda", "Mazda"].map((brand) => (
                        <li key={brand} className="text-gray-800 dark:text-white">
                          {brand}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <a href="/services" className="text-gray-800 dark:text-white hover:text-blue-600">
                Services
              </a>
              <a href="/about" className="text-gray-800 dark:text-white hover:text-blue-600">
                About GMT Corp
              </a>
              <a href="/contact" className="text-gray-800 dark:text-white hover:text-blue-600">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 pt-24">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Welcome to GMT Corporation Japan
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Your trusted partner for high-quality Japanese vehicles and exceptional automotive services.
            </p>
            <Button href="/search" className="mr-3">
              Browse Cars
            </Button>
            <Button href="/contact" intent="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Top Selling Cars Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Top Selling Cars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TOP_SELLING_CARS.map((car) => (
              <div key={car.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  unoptimized // Add this if you're using external images without configuring `next.config.js`
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{car.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Price: {car.price}</p>
                  <Button href={`/cars/${car.id}`} className="mt-4 w-full">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LP_GRID_ITEMS.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex size-12 items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}