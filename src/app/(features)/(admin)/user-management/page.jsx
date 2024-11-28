"use client";

import { useRouter } from "next/navigation";
import Heading1 from "../data-master/components/heading1";
import UploadButton from "./components/button";
import TableUser from "./table";

export default function UserManagementPage() {
  const router = useRouter();

  return (
    <div>
      <Heading1 text={"Manajemen Pengguna"} className="mb-7" />

      {/* Tombol untuk menambah pengguna */}
      <div className="flex justify-end mb-4">
        <UploadButton
          text={"Tambah Pengguna"}
          iconUrl="/img/admin/user-add.svg"
          onClick={(e) => {
            e.preventDefault();
            router.push("/user-management/create");
          }}
        />
      </div>

      {/* Tabel Daftar Pengguna */}
      <TableUser />
    </div>
  );
}
