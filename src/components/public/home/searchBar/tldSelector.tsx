import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TldSelector() {
  return (
    <Select defaultValue=".co.ao">
      <SelectTrigger className="w-[120px] text-black border-none outline-none shadow-none text-[1.1rem]">
        <SelectValue placeholder=".co.ao" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem  value="light">.co.ao</SelectItem>
        <SelectItem value="dark">.ao</SelectItem>
        <SelectItem value="system">.com</SelectItem>
      </SelectContent>
    </Select>
  );
}
