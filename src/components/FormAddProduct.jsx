import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import Swal from "sweetalert2";

const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [hargaPoin, setHargaPoin] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [hargaRp, setHargaRp] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [satuan, setSatuan] = useState("");
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();

    //create a formdata object untuk kirim file gambar dan data lain
    const formData = new FormData();
    formData.append("nameProduk", name);
    formData.append("deskripsi", deskripsi);
    formData.append("hargaPoin", hargaPoin);
    formData.append("jumlah", jumlah);
    formData.append("satuan", satuan);
    formData.append("image", image);


    try {
      await axios.post(`${API_URL}/products`, formData);
      navigate("/products");
      Swal.fire("Success", "Product added successfully", "success");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.message);
      }
    }
  };

    return (
      <div className="bg-gray-100">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-black-100">Form Add Product</h1>
          <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <form onSubmit={saveProduct}>
              <p className="text-red-500">{msg}</p>
              <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="deskripsi"
                className="block text-sm font-medium text-gray-700"
              >
                Deskripsi
              </label>
              <input
                type="text"
                id="deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="hargaPoin"
                className="block text-sm font-medium text-gray-700"
              >
                Harga (Poin)
              </label>
              <input
                type="text"
                id="hargaPoin"
                value={hargaPoin}
                onChange={(e) => setHargaPoin(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="jumlah"
                className="block text-sm font-medium text-gray-700"
              >
                Jumlah
              </label>
              <input
                type="text"
                id="jumlah"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="satuan"
                className="block text-sm font-medium text-gray-700"
              >
                Satuan
              </label>
              <select
                id="satuan"
                value={satuan}
                onChange={(e) => setSatuan(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">...</option>
                <option value="Gram">Gram</option>
                <option value="Kilogram">Kilogram</option>
                <option value="Ikat">Ikat</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Product Image
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
              <button
                type="submit"
                className="text-sm py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default FormAddProduct;
  