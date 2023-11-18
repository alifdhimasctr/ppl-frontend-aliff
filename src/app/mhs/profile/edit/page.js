"use client";
import BaseLayout from "@/components/BaseLayout/BaseLayout_mhs";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function Edit() {
  return (
    <BaseLayout>
      <h1 className="text-2xl font-bold text-gray-700 mb-3">EDIT PROFIL</h1>
        <div className="flex gap-10 bg-white w-full h-max p-4 px-12 rounded-sm">
          <div className="flex flex-col w-[15rem] pt-10">
            <div className="w-[10rem] h-[10rem] bg-gray-200 rounded-full">
              <Image
              src="/profil_photo.jpg"
              width={100}
              height={100}
              className="w-[10rem] h-[10rem] rounded-full"
              alt="profil"
            />
            </div>
          </div>
          <div className="form mt-7 flex justify-center w-full">
            <form className="flex w-full flex-col gap-4 w-3/4 pb-11">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nama" value="Nama" />
                </div>
                <TextInput
                  id="nama"
                  type="text"
                  placeholder="Refiola Julieta"
                  disabled
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nim" value="NIM" />
                </div>
                <TextInput
                  id="nim"
                  type="text"
                  placeholder="24060121140167"
                  disabled
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="angkatan" value="Angkatan" />
                </div>
                <TextInput
                  id="angkatan"
                  type="text"
                  placeholder="2021"
                  disabled
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="dosenwali" value="Dosen Wali" />
                </div>
                <TextInput
                  id="dosenwali"
                  type="text"
                  placeholder="Dosen Wali 1"
                  disabled
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="status" value="Status" />
                </div>
                <span className="bg-green-400 text-white p-2 text-xs rounded-sm">AKTIF</span>
              </div>
              <br/>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="tempatlahir" value="Tempat Lahir" />
                </div>
                <TextInput
                  id="tempatlahir"
                  type="text"
                  placeholder="Masukkan tempat lahir"
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="tanggallahir" value="Tanggal Lahir" />
                </div>
                <input
                  id="tanggallahir"
                  type="date"
                  placeholder="Masukkan tanggal lahir"
                  className="border rounded-md p-2 w-full"
                  required
                />
              </div>
              <br/>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nomorhp" value="Nomor HP" />
                </div>
                <TextInput number
                  id="nomorhp"
                  type="text"
                  placeholder="Masukkan nomor HP"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="E-mail" />
                </div>
                <TextInput number
                  id="email"
                  type="email"
                  placeholder="Masukkan Email"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="alamatasal" value="Alamat Asal" />
                </div>
                <textarea
                  id="alamatasal"
                  required
                  className="border rounded-md p-2 w-full"
                  rows="4"
                  placeholder="Masukkan alamat Anda"
                ></textarea>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="alamatsekarang" value="Alamat Sekarang" />
                </div>
                <textarea
                  id="alamatsekarang"
                  required
                  className="border rounded-md p-2 w-full"
                  rows="4"
                  placeholder="Masukkan alamat Anda"
                ></textarea>
              </div>

              <Button type="submit" className="bg-[#183D3D]">Simpan</Button>
            </form>
          </div>
        </div>
    </BaseLayout>
  );
}
