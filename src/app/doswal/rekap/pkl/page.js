"use client";
import BaseLayout_doswal from "@/components/BaseLayout/BaseLayout_doswal";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";


export default function RekapPkl() {
  const data = [
    { angkatan: 2016, belumPkl: 10, sudahPkl: 20 },
    { angkatan: 2017, belumPkl: 15, sudahPkl: 25 },
    { angkatan: 2018, belumPkl: 8, sudahPkl: 18 },
    { angkatan: 2019, belumPkl: 12, sudahPkl: 22 },
    { angkatan: 2020, belumPkl: 5, sudahPkl: 15 },
    { angkatan: 2021, belumPkl: 7, sudahPkl: 17 },
    { angkatan: 2022, belumPkl: 3, sudahPkl: 13 },
  ];

  return (
    <BaseLayout_doswal>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-7">
        Rekap
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>

      <Button.Group className="mt-5 gap-2">
        <Link href="/doswal/rekap/pkl">
          <Button className="font-bold text-white bg-[#183d3d]" color="gray">
            PKL
          </Button>
        </Link>
        <Link href="/doswal/rekap/skripsi">
          <Button color="gray">Skripsi</Button>
        </Link>
      </Button.Group>
      
      <div className="flex flex-col gap-2 h-max w-full mb-2 mt-4">
        <div className="flex justify-between w-full text-white bg-[#183D3D] items-center drop-shadow-md rounded-md px-8 py-2">
          <span>Angkatan</span>
          <span>Belum PKL</span>
          <span>Sudah PKL</span>
          <span>Action</span>
        </div>
        {data.map((item) => (
          <div key={item.angkatan} className="flex justify-between w-full text-black bg-white items-center drop-shadow-md rounded-md px-4 py-2">
            <span>{item.angkatan}</span>
            <span>{item.belumPkl}</span>
            <span>{item.sudahPkl}</span>
            <span><Button className="bg-blue-700 m-1 h-8">Detail</Button></span>
          </div>
        ))}
      </div>
    </BaseLayout_doswal>
  );
}
