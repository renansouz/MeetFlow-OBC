import { User, Wallet } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function DashboardProfessional() {
  return (
    <div className="flex h-full items-center justify-center">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>
            <h1>Bem Vindo Fulano</h1>
          </CardTitle>
          <CardDescription>Veja os status do seu perfil</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-12">
          <Card className="w-2/6 bg-background">
            <CardHeader className="flex h-16 flex-row justify-between">
              <CardTitle className="text-base">Agendamentos feitos</CardTitle>
              <User className="h-5" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">50</p>
              <CardDescription className="italic text-green-200">
                +10% do mês passado
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-2/6 bg-background">
            <CardHeader className="flex h-16 flex-row justify-between">
              <CardTitle className="text-base">visualizacões de perfil</CardTitle>
              <User className="h-5" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2.862</p>
              <CardDescription className="italic text-red-200">-2% do mês passado</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-2/6 bg-background">
            <CardHeader className="flex h-16 flex-row justify-between">
              <CardTitle className="text-base">Rendimento</CardTitle>
              <Wallet className="h-5" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">+R$20,00</p>
              <CardDescription className="italic text-green-200">
                +10% do mês passado
              </CardDescription>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
