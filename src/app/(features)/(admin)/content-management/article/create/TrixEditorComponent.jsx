'use client'

import 'trix/dist/trix.css';
import 'trix/dist/trix.umd.min.js';
import Trix from 'trix';

import React, { useEffect, useRef } from 'react';

// Komponen editor Trix
const TrixEditorComponent = ({ value, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = editorRef.current;

    // Fungsi untuk menangani perubahan di editor
    const handleEditorChange = (event) => {
      if (onChange) {
        // Mengambil nilai dari editor dan memanggil onChange
        onChange(event.target.value);
      }
    };

    // Menambahkan event listener pada perubahan konten di editor
    editor.addEventListener('trix-change', handleEditorChange);

    // Membersihkan event listener ketika komponen unmount
    return () => {
      editor.removeEventListener('trix-change', handleEditorChange);
    };
  }, [onChange]); // Pastikan untuk memperbarui event listener saat onChange berubah

  return (
    <div>
      {/* Elemen input hidden yang digunakan oleh trix-editor */}
      <input id="trix" type="hidden" name="content" value={value} />
      
      {/* Komponen trix-editor dengan referensi ke editorRef */}
      <trix-editor 
        ref={editorRef} 
        input="trix" 
        value={value}
      />
    </div>
  );
};

export default TrixEditorComponent;