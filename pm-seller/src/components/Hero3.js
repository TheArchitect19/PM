import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

function App() {
  const [shopDetails, setShopDetails] = useState({
    name: '',
    description: '',
    address: '',
    shop_image: null,
    banner: null,
    instagram_handle: '',
    yt_handle: '',
    GST: '',
    bank_account: '',
    token: localStorage.getItem('user')
  });
  const contextData = useContext(AuthContext);
  useEffect(() => {
    if (!contextData.auth) {
      alert("Please login to continue");
      window.location.href = "/login?ref=ays"
    }
  }, [contextData.auth])

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setShopDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'file' ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(shopDetails);
    const formData = new FormData();
    formData.append('token', localStorage.getItem('user'));
    Object.keys(shopDetails).map((key) => {
      formData.append(key, shopDetails[key]);
      return null;
    });
    try {
      const res = await axios.post('http://localhost:8000/api/seller/reg_shop', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });
      alert(res.data.message);
    }
    catch (error) {
      alert(error.response.data.message);
    }
    // Reset the form after submission
    // setShopDetails({
    //   name: '',
    //   description: '',
    //   address: '',
    //   shop_image: null,
    //   banner: null,
    //   instagram_handle: '',
    //   yt_handle: '',
    //   GST: '',
    //   bank_account: '',
    // });
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
                name="shop_image"
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
                name="banner"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              // required
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
                name="instagram_handle"
                value={shopDetails.instagram_handle}
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
                name="yt_handle"
                value={shopDetails.yt_handle}
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
                name="GST"
                value={shopDetails.GST}
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
                name="bank_account"
                value={shopDetails.bank_account}
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
