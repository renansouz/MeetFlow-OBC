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
    <div className="flex h-full items-center justify-center py-10 max-lg:py-0">
      <Card className="w-5/6 p-6 max-lg:h-full max-lg:w-full max-lg:border-none">
        <CardHeader>
          <CardTitle>
            <h1>Bem Vindo</h1>
          </CardTitle>
          <CardDescription>Veja os status do seu perfil</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center justify-center gap-12">
          <Card className="w-80 bg-background">
            <CardHeader className="flex h-16 flex-row justify-between">
              <CardTitle className="text-base">Agendamentos feitos</CardTitle>
              <User className="h-5" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
              <CardDescription className="italic">0% do mês passado</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-80 bg-background">
            <CardHeader className="flex h-16 flex-row justify-between">
              <CardTitle className="text-base">visualizacões de perfil</CardTitle>
              <User className="h-5" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
              <CardDescription className="italic">0% do mês passado</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-80 bg-background">
            <CardHeader className="flex h-16 flex-row justify-between">
              <CardTitle className="text-base">Rendimento</CardTitle>
              <Wallet className="h-5" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">+R$0,00</p>
              <CardDescription className="italic">0% do mês passado</CardDescription>
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
