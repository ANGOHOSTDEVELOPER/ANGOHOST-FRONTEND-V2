import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

interface Plano {
  id: string;
  titulo: string;
  preco: number;
}

interface AdicionarPlanoCarrinhoProps {
  plano: Plano;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (plano: Plano, tipo: "mensal" | "anual", quantidade: number) => void;
}

export function AdicionarPlanoModal({ plano, isOpen, onClose, onAddToCart }: AdicionarPlanoCarrinhoProps) {
  const [tipo, setTipo] = useState<"mensal" | "anual">("mensal");
  const [quantidade, setQuantidade] = useState(1);

  const handleAdd = () => {
    if (quantidade < 1) return;
    onAddToCart(plano, tipo, quantidade);
    onClose();
  };

  return (
    <Dialog  modal={isOpen} open={isOpen} onOpenChange={onClose}>
      <DialogContent  className="max-w-md">
        <DialogHeader>
          <DialogTitle>Adicionar Plano</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Tipo</label>
            <Select value={tipo} onValueChange={(value) => setTipo(value as "mensal" | "anual")}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mensal">Mensal</SelectItem>
                <SelectItem value="anual">Anual</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium">Duracao ({tipo === "mensal" ? "meses" : "anos"})</label>
            <Input
              type="number"
              value={quantidade}
              min={1}
              onChange={(e) => setQuantidade(Number(e.target.value))}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button onClick={handleAdd}>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
