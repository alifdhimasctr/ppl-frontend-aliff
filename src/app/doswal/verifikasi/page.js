"use client";
import BaseLayout_doswal from "@/components/BaseLayout/BaseLayout_doswal";
import React from "react";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function VerifikasiDosenwali() {
  return (
    <BaseLayout_doswal>
      {" "}
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-7">
        Verifikasi
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>
      <Button.Group>
        <Link href="/doswal/verifikasi/irs">
          <Button color="gray">IRS</Button>
        </Link>
        <Button color="gray">KHS</Button>
        <Button color="gray">PKL</Button>
        <Button color="gray">Skripsi</Button>
      </Button.Group>
    </BaseLayout_doswal>
  );
}
