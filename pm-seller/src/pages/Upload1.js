import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import urls from '../urls.json';

const UploadProducts = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    stock: '',
    size: '',
    images: [],
    video: '',
    hashtags: '',
  });
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const shopName = params.get('shop');

  if (!shopName) {
    navigate('/reg-shops');
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setProduct({ ...product, images });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(product);
    const formData = new FormData();
    formData.append('token', localStorage.getItem('user'));
    formData.append('shopName', shopName);
    Object.keys(product).forEach((key) => {
      if (key !== 'images') {
        formData.append(key, product[key]);
      }
    });
    for (let i = 1; i <= product.images.length; i++) {
      formData.append(`image${i}`, product.images[i - 1]);
    }
    try {
      const res = await axios.post('${urls.server}/api/seller/upload_product', formData);
      console.log(res);
      alert(res.data.message);
    }
    catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md my-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">Upload Products</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-48 mb-4">
          <label className="block">
            <span className="text-gray-700">Product Name:</span>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 mt-1"
            />
          </label>
        </div>

        <div className="w-full md:w-48 mb-4">
          <label className="block">
            <span className="text-gray-700">Description:</span>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 mt-1"
            />
          </label>
        </div>

        <div className="w-full md:w-48 mb-4">
          <label className="block">
            <span className="text-gray-700">Price:</span>
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 mt-1"
            />
          </label>
        </div>

        <div className="w-full md:w-48 mb-4">
          <label className="block">
            <span className="text-gray-700">Category:</span>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 mt-1"
            />
          </label>
        </div>

        <div className="w-full md:w-48 mb-4">
          <label className="block">
            <span className="text-gray-700">Brand:</span>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 mt-1"
            />
          </label>
        </div>

        <div className="w-full md:w-48 mb-4">
          <label className="block">
            <span className="text-gray-700">Stock:</span>
            <input
              type="text"
              name="stock"
              value={product.stock}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 mt-1"
            />
          </label>
        </div>

        <div className="w-full md:w-48 mb-4">
          <label className="block">
            <span className="text-gray-700">Size:</span>
            <input
              type="text"
              name="size"
              value={product.size}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 mt-1"
            />
          </label>
        </div>

        <div className="w-full md:w-48 mb-4">
          <label className="block">
            <span className="text-gray-700">Images:</span>
            <input
              type="file"
              name="images"
              accept='image/*'
              onChange={handleImageChange}
              multiple
              className="w-full border border-gray-300 p-3 mt-1"
            />
          </label>
        </div>

        <div className="w-full mb-4">
          <label className="block">
            <span className="text-gray-700">Video (URL):</span>
            <input
              type="text"
              name="video"
              value={product.video}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-3 mt-1"
            />
          </label>
        </div>

        <div className="w-full mb-4">
          <label className="block">
            <span className="text-gray-700">Hashtags:</span>
            <input
              type="text"
              name="hashtags"
              value={product.hashtags}
              onChange={handleInputChange}
              placeholder="Add hashtags, separated by commas"
              className="w-full border border-gray-300 p-3 mt-1"
            />
          </label>
        </div>

        <div className="w-full mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 w-full"
          >
            Upload Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadProducts;
