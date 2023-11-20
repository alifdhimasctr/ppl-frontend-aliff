"use client";
import BaseLayout_doswal from "@/components/BaseLayout/BaseLayout_doswal";
import React from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function VerifikasiIrsDoswal() {
  return (
    <BaseLayout_doswal>
      {" "}
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-7">
        Verifikasi
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>
      <Button.Group className="mt-7">
        <Link href="/doswal/verifikasi/irs">
          <Button color="gray">IRS</Button>
        </Link>
        <Link href="/doswal/verifikasi/khs">
          <Button color="gray">KHS</Button>
        </Link>
        <Link href="/doswal/verifikasi/pkl">
          <Button className="font-bold text-white bg-[#183d3d]" color="gray">
            PKL
          </Button>
        </Link>
        <Link href="/doswal/verifikasi/skripsi">
          <Button color="gray">Skripsi</Button>
        </Link>
      </Button.Group>
      {/* Table */}
      <table className="mt-11 w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Nim</th>
            <th>Angkatan</th>
            <th>Semester</th>
            <th>IPK</th>
            <th>SKSK</th>
            <th>File</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{/* Add table rows here if you have data to display */}</tbody>
      </table>
    </BaseLayout_doswal>
  );
}
