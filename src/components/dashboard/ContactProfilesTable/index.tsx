"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ContactProfileModal from "../profile-contact-form";

export default function ContactProfilesTable() {
  const [search, setSearch] = useState("");

  type Profile = {
    id: number;
    profileName: string;
    email: string;
    phone: string;
  };

  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    setProfiles([
      {
        id: 1,
        profileName: "Empresa X",
        email: "empresa@example.com",
        phone: "+244 923456789",
      },
      {
        id: 2,
        profileName: "Indivíduo Y",
        email: "individuo@example.com",
        phone: "+55 987654321",
      },
    ]);
  }, []);
  const filteredProfiles = profiles.filter((profile) =>
    profile.profileName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Perfis de Contato</h2>
      <p className="text-sm text-gray-600">
        Gerencie seus perfis de contato registrados.
      </p>

      <div className="mt-4 flex gap-2">
        <Input
          placeholder="Pesquisar perfil..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
        <ContactProfileModal />
      </div>

      <div className="mt-4 overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow>
              <TableHead  scope="col" className="p-3 text-left font-semibold">
                Nome do Perfil
              </TableHead >
              <TableHead  scope="col" className="p-3 text-left font-semibold">
                Email
              </TableHead >
              <TableHead  scope="col" className="p-3 text-left font-semibold">
                Telefone
              </TableHead >
              <TableHead  scope="col" className="p-3 text-right font-semibold">
                Ações
              </TableHead >
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <TableRow
                  key={profile.id}
                  className="border-b hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <TableCell className="p-3">{profile.profileName}</TableCell>
                  <TableCell className="p-3">{profile.email}</TableCell>
                  <TableCell className="p-3">{profile.phone}</TableCell>
                  <TableCell className="p-3 text-right">
                    <Button variant="outline" size="sm" className="mr-2">
                      Editar
                    </Button>
                    <Button variant="destructive" size="sm">
                      Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-gray-500 py-4"
                >
                  Nenhum perfil encontrado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
