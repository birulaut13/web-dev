"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import TrixEditorComponent from "./TrixEditorComponent";
import InputSubmit from "../../../data-master/components/input/inputSubmit";
import InputText from "../../components/input/input";
import Image from "next/image";
import Heading1 from "../../components/heading1";

export default function CreateArticlePage() {
  const [articleData, setArticleData] = useState({
    title: "",
    category: "",
    description: "",
    thumbnail: null,
    content: "",
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setArticleData((prevData) => ({
      ...prevData,
      thumbnail: file,
    }));

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", articleData);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setArticleData((prevData) => ({
        ...prevData,
        thumbnail: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="px-4">
      {/* Use Heading1 instead of h2 */}
      <Heading1 text={"Upload Konten Anda"} className="mb-7" />

      {/* Input Judul Artikel */}
      <div className="mb-6 flex items-center">
        <label htmlFor="title" className="text-sm font-medium text-gray-700 w-1/4">
          Judul Artikel
        </label>
        <InputText
          name="title"
          value={articleData.title}
          onChange={handleChange}
          className="w-3/4 border-2 border-black p-2 rounded-md"
        />
      </div>

      {/* Dropdown Kategori Artikel */}
      <div className="mb-6 flex items-center">
        <label htmlFor="category" className="text-sm font-medium text-gray-700 w-1/4">
          Kategori Artikel
        </label>
        <select
          id="category"
          name="category"
          value={articleData.category}
          onChange={handleChange}
          className="mt-1 block w-3/4 px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Pilih Kategori Video Kamu</option>
          <option value="recycling tutorials">Recycling Tutorials</option>
          <option value="waste reduction tips">Waste Reduction Tips</option>
          <option value="news">News</option>
        </select>
      </div>

      {/* Upload Thumbnail (Drag and Drop) */}
      <div className="mb-6 flex items-center">
        <label htmlFor="thumbnail" className="text-sm font-medium text-gray-700 w-1/4">
          Thumbnail
        </label>
        <div
          {...getRootProps()}
          className="mt-1 block w-3/4 p-4 border-2 border-dashed border-black rounded-md"
        >
          <input {...getInputProps()} id="thumbnail" name="thumbnail" accept="image/*" />
          {!preview ? (
            <p className="text-center text-gray-500">Seret dan lepaskan gambar di sini, atau klik untuk memilih</p>
          ) : (
            <div className="text-center">
              {/* Use the next/image component for image optimization */}
              <Image
                src={preview}
                alt="Preview"
                width={2400}
                height={200}                
                className="max-w-full h-auto rounded-md"
              />
            </div>
          )}
        </div>
      </div>

      {/* Trix Editor for Article Content */}
      <div className="mb-6 flex items-center">
        <label htmlFor="content" className="text-sm font-medium text-gray-700 w-1/4">
          Isi Artikel
        </label>
        <div className="w-3/4 border-2 border-black p-4 rounded-md">
          <TrixEditorComponent
            value={articleData.content}
            onChange={(content) => setArticleData({ ...articleData, content })}
          />
        </div>
      </div>

      {/* Tombol Submit */}
      <div className="flex justify-end mt-6">
        <InputSubmit text="Simpan" />
      </div>
    </form>
  );
}