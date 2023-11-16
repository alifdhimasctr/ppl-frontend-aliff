import React from "react";
import BaseLayout from "@/components/BaseLayout/BaseLayout_mhs";

const TabelNilai = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Kartu Hasil Studi</h1>
      <table className="min-w-full bg-slate-500 text-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-slate-700">Semester</th>
            <th className="py-2 px-4 bg-slate-700">IP</th>
            <th className="py-2 px-4 bg-slate-700">IPK</th>
            <th className="py-2 px-4 bg-slate-700">Jumlah SKS</th>
          </tr>
        </thead>
        <tbody>{/* Isi tabel akan ditambahkan di sini */}</tbody>
      </table>
    </div>
  );
};

const Khs = () => {
  return (
    <BaseLayout>
      <TabelNilai />
    </BaseLayout>
  );
};

export default Khs;
