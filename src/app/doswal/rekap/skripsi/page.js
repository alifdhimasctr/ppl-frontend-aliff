"use client";
import BaseLayout_doswal from "@/components/BaseLayout/BaseLayout_doswal";
import React from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function RekapSkripsi() {
  return (
    <BaseLayout_doswal>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-7">
        Rekap
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>

      <Button.Group className="mt-11">
        <Link href="/doswal/rekap/pkl">
          <Button color="gray">PKL</Button>
        </Link>
        <Link href="/doswal/rekap/skripsi">
          <Button className="font-bold text-white bg-[#183d3d]" color="gray">
            Skripsi
          </Button>
        </Link>
      </Button.Group>
      {/* Table for Angkatan */}
      <table className="mt-5 w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2"></th>
            <th className="border px-4 py-2">Sudah Lulus</th>
            <th className="border px-4 py-2">Belum</th>
          </tr>
        </thead>
        <tbody>
          {/* Add rows for each angkatan */}
          <tr>
            <td className="border px-4 py-2">2021</td>
            <td className="border px-4 py-2">10</td>
            <td className="border px-4 py-2">10</td>
          </tr>
          {/* Add more rows as needed for other angkatan */}
        </tbody>
      </table>
    </BaseLayout_doswal>
  );
}
