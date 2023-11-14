import React from "react";
import BaseLayout_opt from "@/components/BaseLayout/BaseLayout_opt";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <BaseLayout_opt>
      <h1 className="text-2xl font-bold text-gray-700 mb-3">PROFIL</h1>
      <div className="flex flex-col w-100% h-max px-10 py-6 bg-white justify-start gap-6">
        <p className="text-[#183D3D] text-end text-sm"><Link href={"/opt"}>EDIT</Link></p>
        <div className="flex gap-8">
          <Image
            src="/profil_photo.jpg"
            width={80}
            height={80}
            className="w-36 h-36"
            alt="profil"
          />
          <table className="border-none text-black">
            <tbody>
              <tr>
                <td className="font-semibold w-40">Nama</td>
                <td className="ml-6 w-3">:</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">NIP</td>
                <td className="ml-6 w-3">:</td>
                <td>1234567890</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Tempat Lahir</td>
                <td className="ml-6 w-3">:</td>
                <td>Jakarta</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Tanggal Lahir</td>
                <td className="ml-6 w-3">:</td>
                <td>01 Januari 1990</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">NIK</td>
                <td className="ml-6 w-3">:</td>
                <td>1234567890123456</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Nomer HP</td>
                <td className="ml-6 w-3">:</td>
                <td>081234567890</td>
              </tr>
              <tr>
                <td className="font-semibold w-40">Alamat</td>
                <td className="ml-6 w-3">:</td>
                <td>Jalan Raya No. 123</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </BaseLayout_opt>
  );
}
