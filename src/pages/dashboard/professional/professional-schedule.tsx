import { zodResolver } from '@hookform/resolvers/zod';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Pencil } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input } from '@/components/Input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Skeleton } from '@/components/ui/skeleton';
import { Textarea } from '@/components/ui/textarea';
import { ProfessionalService } from '@/pages/dashboard/client/ProfessionalProfile/ProfessionalService';

const createUserSchema = z.object({
    username: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
    description: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
    email: z.string().email({ message: 'Digite um e-mail válido' }),
    password: z.string().min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
    photo: z.any(),
});

type RegisterFormData = z.infer<typeof createUserSchema>;

export function ProfessionalSchedule() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);
    const form = useForm<RegisterFormData>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            username: '',
            email: '',
            description: '',
            password: '',
        },
    });

    async function onSubmit(data: RegisterFormData) {
        setTimeout(() => {
            console.log(data);
        }, 2000);
    }
    return (
        <div>
            <Card className="my-16 ml-[5%] mr-[15%] rounded-md">
                <CardHeader>
                    {loading ? (
                        <Skeleton className="z-0 h-80 w-full gap-y-12 rounded-md" />
                    ) : (
                        <Card>
                            <CardHeader className="h-32 rounded-tl-md rounded-tr-md bg-indigo-300  pt-14 max-lg:rounded-none">
                                <Avatar>
                                    <AvatarImage src="https://github.com/renansouz.png" className="ml-5 w-36 rounded-full border-4 border-background" />
                                    <AvatarFallback className="ml-5 w-36 rounded-full border-4 border-background">CN</AvatarFallback>
                                </Avatar>
                            </CardHeader>
                            <CardContent className="mt-20 flex flex-col  gap-y-2">
                                <div className="flex justify-between">
                                    <div>
                                        <CardTitle className="ml-6 text-left font-bold " style={{ maxWidth: '600px' }}>
                                            RENAN DE SOUZA SILVA
                                        </CardTitle>
                                        <CardDescription className="ml-6  font-light">Olá me chamo Renan, caso queira aprender tailwind, agende uma reunião comigo!</CardDescription>
                                        <span className="ml-5 mt-3 font-bold text-indigo-600/90">+ 10 agendamentos</span>
                                    </div>
                                    <div>
                                        <Dialog>
                                            <DialogTrigger className="flex">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-indigo-500">
                                                    <Pencil className=" flex text-indigo-600/90" />
                                                </div>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <div className="flex w-full items-center justify-center border-b-2 py-5">
                                                        <DialogTitle className="text-xl">Editar sua conta</DialogTitle>
                                                    </div>

                                                    <Form {...form}>
                                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                                            <FormField
                                                                control={form.control}
                                                                name="username"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Nome</FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                className="w-full rounded-md border-2 border-border bg-background p-2 focus:border-slate-300"
                                                                                placeholder="Editar nome"
                                                                                {...field}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name="description"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Título</FormLabel>
                                                                        <FormControl>
                                                                            <Textarea
                                                                                className="w-full rounded-md border-2 border-border bg-background p-2 focus:border-slate-300"
                                                                                placeholder="Editar Título"
                                                                                {...field}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name="email"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Email</FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                className="w-full rounded-md border-2 border-border bg-background p-2 focus:border-slate-300"
                                                                                type="email"
                                                                                placeholder="Mudar e-mail"
                                                                                {...field}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name="password"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Password</FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                className="w-full rounded-md border-2 border-border bg-background p-2 focus:border-slate-300"
                                                                                type="password"
                                                                                placeholder="Inserir nova senha"
                                                                                {...field}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <FormField
                                                                control={form.control}
                                                                name="photo"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormLabel>Photo</FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                className="w-full rounded-md border-2 border-border bg-background p-2 focus:border-slate-300"
                                                                                type="file"
                                                                                {...field}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                            <Button className="flex w-full items-center justify-center rounded-lg px-10 text-lg" type="submit">
                                                                Submit
                                                            </Button>
                                                        </form>
                                                    </Form>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </CardHeader>
                <CardContent>
                    <Card>
                        <CardHeader>
                            <CardTitle>Meus serviços</CardTitle>
                            <CardDescription>Aqui esta todos os seus serviços criados</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ProfessionalService />
                            <ProfessionalService />
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    );
}
