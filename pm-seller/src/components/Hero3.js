import React, { useState } from 'react';

function App() {
  const [shopDetails, setShopDetails] = useState({
    name: '',
    description: '',
    address: '',
    shopImage: null,
    banners: null,
    instagramHandle: '',
    youtubeHandle: '',
    gstNumber: '',
    bankAccountNumber: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setShopDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'file' ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle the form submission logic (e.g., send data to the server)
    console.log('Shop Details:', shopDetails);
    // Reset the form after submission
    setShopDetails({
      name: '',
      description: '',
      address: '',
      shopImage: null,
      banners: null,
      instagramHandle: '',
      youtubeHandle: '',
      gstNumber: '',
      bankAccountNumber: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-5">
      <div className="max-w-2xl w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Shop Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* Shop Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Shop Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={shopDetails.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={shopDetails.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>

            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={shopDetails.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Shop Image */}
            <div className="mb-4">
              <label htmlFor="shopImage" className="block text-gray-700 text-sm font-bold mb-2">
                Shop Image
              </label>
              <input
                type="file"
                accept="image/*"
                id="shopImage"
                name="shopImage"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Banners */}
            <div className="mb-4">
              <label htmlFor="banners" className="block text-gray-700 text-sm font-bold mb-2">
                Banners
              </label>
              <input
                type="file"
                accept="image/*"
                id="banners"
                name="banners"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Instagram Handle */}
            <div className="mb-4">
              <label htmlFor="instagramHandle" className="block text-gray-700 text-sm font-bold mb-2">
                Instagram Handle
              </label>
              <input
                type="text"
                id="instagramHandle"
                name="instagramHandle"
                value={shopDetails.instagramHandle}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* YouTube Handle */}
            <div className="mb-4">
              <label htmlFor="youtubeHandle" className="block text-gray-700 text-sm font-bold mb-2">
                YouTube Handle
              </label>
              <input
                type="text"
                id="youtubeHandle"
                name="youtubeHandle"
                value={shopDetails.youtubeHandle}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* GST Number */}
            <div className="mb-4">
              <label htmlFor="gstNumber" className="block text-gray-700 text-sm font-bold mb-2">
                GST Number
              </label>
              <input
                type="text"
                id="gstNumber"
                name="gstNumber"
                value={shopDetails.gstNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Bank Account Number */}
            <div className="mb-4">
              <label htmlFor="bankAccountNumber" className="block text-gray-700 text-sm font-bold mb-2">
                Bank Account Number
              </label>
              <input
                type="text"
                id="bankAccountNumber"
                name="bankAccountNumber"
                value={shopDetails.bankAccountNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Register Shop
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
