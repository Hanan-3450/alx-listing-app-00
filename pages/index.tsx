import React from "react";
import { PROPERTYLISTINGSAMPLE } from "../constants";
import { PropertyProps } from "../interfaces";
import Image from "next/image";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Beachfront",
  "Pet Friendly",
  "Mountain View",
  "Free Parking",
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] md:h-[450px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1650&q=80')`,
        }}
      >
        <div className="bg-black bg-opacity-40 p-6 rounded-lg text-center text-white max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Property Listing Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Available Properties</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Property Image */}
              <Image
                src={property.image}
                alt={property.name}
                width={400} // fixed width
                height={200} // fixed height
                className="object-cover rounded-t-lg"
              />

              {/* Property Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{property.name}</h3>
                <p className="text-sm text-gray-500">
                  {property.address.city}, {property.address.country}
                </p>

                {/* Rating & Price */}
                <div className="flex justify-between items-center mt-3">
                  <span className="text-yellow-500 font-semibold">
                    ⭐ {property.rating}
                  </span>
                  <span className="text-blue-600 font-bold">
                    ${property.price}/night
                  </span>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {property.category.map((cat, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Offers */}
                <div className="flex justify-between text-xs text-gray-500 mt-3">
                  <span>{property.offers.bed} Beds</span>
                  <span>{property.offers.shower} Baths</span>
                  <span>{property.offers.occupants} Guests</span>
                </div>

                {/* Discount */}
                {property.discount && (
                  <div className="mt-3 text-red-500 font-bold text-sm">
                    {property.discount}% OFF
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
