'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';

interface NameServerData {
  profileName: string;
  ns1: string;
  ns2: string;
  ns3: string;
  ns4: string;
}

const initialData: NameServerData[] = [
  { profileName: 'Configuração 1', ns1: 'ns1.exemplo.ao', ns2: 'ns2.exemplo.ao', ns3: 'ns3.exemplo.ao', ns4: 'ns4.exemplo.ao' },
  { profileName: 'Configuração 2', ns1: 'ns1.teste.ao', ns2: 'ns2.teste.ao', ns3: 'ns3.teste.ao', ns4: 'ns4.teste.ao' },
];

const NameServerForm = () => {
  const { register, handleSubmit, reset } = useForm<NameServerData>({
    defaultValues: {
      profileName: 'Nova configuração',
      ns1: 'ns1.exemplo.ao',
      ns2: 'ns2.exemplo.ao',
      ns3: 'ns3.exemplo.ao',
      ns4: 'ns4.exemplo.ao',
    },
  });

  const [open, setOpen] = useState(false);
  const [nameServers, setNameServers] = useState<NameServerData[]>(initialData);

  const onSubmit = (data: NameServerData) => {
    setNameServers([...nameServers, data]);
    setOpen(false);
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Servidores de Nomes</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className=" text-white  shadow-md">Adicionar Servidores de Nomes</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>ADICIONAR SERVIDORES DE NOMES</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label>Nome do Perfil</Label>
                <Input {...register('profileName')} disabled />
              </div>
              <div>
                <Label>NAMESERVER 1</Label>
                <Input {...register('ns1')} />
              </div>
              <div>
                <Label>NAMESERVER 2</Label>
                <Input {...register('ns2')} />
              </div>
              <div>
                <Label>NAMESERVER 3</Label>
                <Input {...register('ns3')} />
              </div>
              <div>
                <Label>NAMESERVER 4</Label>
                <Input {...register('ns4')} />
              </div>
              <Button type="submit" className="w-full  text-white shadow-md">
                Salvar
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
        <Table className="w-full text-sm text-gray-700">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="px-4 py-2 font-semibold text-left">Perfil</TableHead>
              <TableHead className="px-4 py-2 font-semibold text-left">NAMESERVER 1</TableHead>
              <TableHead className="px-4 py-2 font-semibold text-left">NAMESERVER 2</TableHead>
              <TableHead className="px-4 py-2 font-semibold text-left">NAMESERVER 3</TableHead>
              <TableHead className="px-4 py-2 font-semibold text-left">NAMESERVER 4</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nameServers.map((ns, index) => (
              <TableRow key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <TableCell className="px-4 py-2">{ns.profileName}</TableCell>
                <TableCell className="px-4 py-2">{ns.ns1}</TableCell>
                <TableCell className="px-4 py-2">{ns.ns2}</TableCell>
                <TableCell className="px-4 py-2">{ns.ns3}</TableCell>
                <TableCell className="px-4 py-2">{ns.ns4}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default NameServerForm;
