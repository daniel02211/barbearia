import { SearchIcon } from "lucide-react";
import { Badge } from "./_components/ui/badge";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Avatar } from "./_components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Willian!</h2>
        <p>Domingo, 14 de setembro.</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melgores com FWS Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="mb-3 mt-4 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0 px-5 py-5">
            {/* Lado esquerdo */}
            <div className="flex flex-col gap-2">
              <Badge className="w-fit">Confirmar</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png" />
                </Avatar>
                <p className="text-sm">Barbearia FWS</p>
              </div>
            </div>

            {/* Lado direito */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">setembro</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-4 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-4 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
