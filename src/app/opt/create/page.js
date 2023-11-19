"use client";
import BaseLayout_opt from "@/components/BaseLayout/BaseLayout_opt";
import React, { useState } from "react";

const create = () => {
  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [dosenWali, setDosenWali] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i <= 5; i++) {
      years.push(currentYear + i);
    }
    return years;
  };

  const years = generateYearOptions();

  return (
    <BaseLayout_opt>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5">
        Buat
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Akun
        </span>
      </h1>
      <div className="flex mt-7 flex-col w-100% h-max px-10 py-6 bg-white justify-start gap-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="nim" className="text-black">
                NIM
              </label>
              <input
                className="rounded-md drop-shadow-md text-black border-1 border-gray-300"
                placeholder="Masukkan NIM"
                type="text"
                id="nim"
                value={nim}
                onChange={(event) => setNim(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="nama" className="text-black">
                Nama
              </label>
              <input
                className="rounded-md drop-shadow-md text-black border-1 border-gray-300"
                placeholder="Masukkan Nama"
                type="text"
                id="nama"
                value={nama}
                onChange={(event) => setNama(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="angkatan" className="text-black">
                Angkatan
              </label>
              <select
                className="rounded-md drop-shadow-md text-black border-1 border-gray-300"
                id="angkatan"
                value={angkatan}
                onChange={(event) => setAngkatan(event.target.value)}
              >
                <option value="">Pilih Angkatan</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="dosenWali" className="text-black">
                Dosen Wali
              </label>
              <select className="rounded-md drop-shadow-md text-black border-1 border-gray-300">
                <option value="">Pilih Dosen Wali</option>
                <option value="dosenWali">Dosen Wali1</option>
                <option value="dosenWali">Dosen Wali2</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#183D3D] text-white w-20 h-8 text-sm rounded-md"
            >
              Buat Akun
            </button>
          </div>
        </form>
      </div>
    </BaseLayout_opt>
  );
};
export default create;
