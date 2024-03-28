import { zodResolver } from '@hookform/resolvers/zod';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Pencil } from 'lucide-react';
import { register } from 'module';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input } from '@/components/Input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { ProfessionalService } from '@/pages/user/ClientDashboard/pages/ProfessionalProfile/ProfessionalService';
const createUserSchema = z.object({
    username: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
    description: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
    email: z.string().email({ message: 'Digite um e-mail válido' }),
    password: z.string().min(5, { message: 'A senha deve possuir no mínimo 5 caracteres' }),
    photo: z.any(),
});

type RegisterFormData = z.infer<typeof createUserSchema>;

export function ProfessionalOwnProfile() {
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
        <Card className="ml-[5%] mr-[15%] my-16 ">
            <CardHeader>
                <Card>
                    <CardHeader className="bg-indigo-300 h-32 rounded-tl-md rounded-tr-md  pt-14 max-lg:rounded-none">
                        <Avatar>
                            <AvatarImage src="https://github.com/renansouz.png" className="ml-5 border-4 border-background rounded-full w-36" />
                            <AvatarFallback className="ml-5 border-4 border-background rounded-full w-36">CN</AvatarFallback>
                        </Avatar>
                    </CardHeader>
                    <CardContent className="flex flex-col mt-20  gap-y-2">
                        <div className="flex justify-between">
                            <div>
                                <CardTitle className="text-left font-bold ml-6 " style={{ maxWidth: '600px' }}>
                                    RENAN DE SOUZA SILVA
                                </CardTitle>
                                <CardDescription className="font-light  ml-6">Olá me chamo Renan, caso queira aprender tailwind, agende uma reunião comigo!</CardDescription>
                                <span className="font-bold mt-3 ml-5 text-indigo-600/90">+ 10 agendamentos</span>
                            </div>
                            <div>
                                <Dialog>
                                    <DialogTrigger className="flex">
                                        <div className="hover:bg-indigo-500 w-10 h-10 rounded-full flex justify-center items-center">
                                            <Pencil className=" text-indigo-600/90 flex" />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <div className="border-b-2 w-full flex items-center justify-center py-5">
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
                                                                        className="bg-background border-2 rounded-md p-2 w-full border-border focus:border-slate-300"
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
                                                                        className="bg-background border-2 rounded-md p-2 w-full border-border focus:border-slate-300"
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
                                                                        className="bg-background border-2 rounded-md p-2 w-full border-border focus:border-slate-300"
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
                                                                        className="bg-background border-2 rounded-md p-2 w-full border-border focus:border-slate-300"
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
                                                                        className="bg-background border-2 rounded-md p-2 w-full border-border focus:border-slate-300"
                                                                        type="file"
                                                                        {...field}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <Button className="rounded-lg text-lg px-10 flex items-center justify-center w-full" type="submit">
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
    );
}
