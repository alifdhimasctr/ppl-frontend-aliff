"use client";
import BaseLayout_opt from '@/components/BaseLayout/BaseLayout_opt';
import React, { useState } from "react";



const create = () => {
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [status, setStatus] = useState("Aktif");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <BaseLayout_opt>
      <h1 className="text-2xl font-bold text-gray-700 mb-3">CREATE ACCOUNT</h1>
      <div className="flex flex-col w-100% h-max px-10 py-6 bg-white justify-start gap-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="nim" className="text-black">NIM</label>
              <input
                className="rounded-md drop-shadow-md text-black border-1 border-gray-300"
                placeholder='Masukkan NIM'
                type="text"
                id="nim"
                value={nim}
                onChange={(event) => setNim(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="nama" className="text-black">Nama</label>
              <input
                className="rounded-md drop-shadow-md text-black border-1 border-gray-300"
                placeholder='Masukkan Nama'
                type="text"
                id="nama"
                value={nama}
                onChange={(event) => setNama(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="angkatan" className="text-black">Angkatan</label>
              <input
                className="rounded-md drop-shadow-md text-black border-1 border-gray-300"
                placeholder='Masukkan Angkatan'
                type="text"
                id="angkatan"
                value={angkatan}
                onChange={(event) => setAngkatan(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="status" className="text-black">Status</label>
              <input
                className="rounded-md bg-gray-200 drop-shadow-md text-black border-1 border-gray-300"
                type="text"
                id="status"
                value="AKTIF"
                disabled
              />
            </div>
            <button type="submit" className="bg-[#183D3D] text-white w-20 h-8 text-sm rounded-md">Submit</button>
          </div>
        </form>
      </div>
    </BaseLayout_opt>
  );
}
export default create;