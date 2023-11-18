import React from "react";
import BaseLayout from "@/components/BaseLayout/BaseLayout_mhs";

export default function HasilKhs() {
  return (
    <BaseLayout>
      {" "}
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5">
        Hasil
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          KHS
        </span>
      </h1>
      <div className="mt-5">
        <table className="table-auto mx-auto border-collapse">
          <thead className="text-left">
            <tr>
              <th className="text-xl font-semibold text-[#183D3D] px-4 border border-[#183D3D]">
                Semester
              </th>
              <th className="text-xl font-semibold text-[#183D3D] px-4 border border-[#183D3D]">
                SKS Komulatif
              </th>
              <th className="text-xl font-semibold text-[#183D3D] px-4 border border-[#183D3D]">
                File KHS
              </th>
              <th className="text-xl font-semibold text-[#183D3D] px-4 border border-[#183D3D]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 border border-[#183D3D]">
                Your Semester Content
              </td>
              <td className="px-4 border border-[#183D3D]">
                Your SKSK Content
              </td>
              <td className="px-4 border border-[#183D3D]">
                Your File KHS Content
              </td>
              <td className="px-4 border border-[#183D3D]">
                Your Action Content
              </td>
            </tr>
            <tr>
              <td className="px-4 border border-[#183D3D]">
                Your Semester Content
              </td>
              <td className="px-4 border border-[#183D3D]">
                Your SKSK Content
              </td>
              <td className="px-4 border border-[#183D3D]">
                Your File KHS Content
              </td>
              <td className="px-4 border border-[#183D3D]">
                Your Action Content
              </td>
            </tr>
            <tr>
              <td className="px-4 border border-[#183D3D]">
                Your Semester Content
              </td>
              <td className="px-4 border border-[#183D3D]">
                Your SKSK Content
              </td>
              <td className="px-4 border border-[#183D3D]">
                Your File KHS Content
              </td>
              <td className="px-4 border border-[#183D3D]">
                Your Action Content
              </td>
            </tr>
            {/* Add more rows if needed */}
          </tbody>
        </table>
      </div>
    </BaseLayout>
  );
}
