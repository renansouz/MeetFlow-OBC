import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Pencil } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProfessionalService } from '@/pages/user/UserDashboard/pages/ProfessionalProfile/ProfessionalService';

export function ProfessionalOwnProfile() {
    return (
        <Card className="w-[100%]  ml-[6%] my-16 max-xl:w-full max-xl:m-0">
            <CardHeader>
                <Card>
                    <CardHeader className="bg-indigo-300 h-32 rounded-tl-md rounded-tr-md w-full pt-14 max-lg:rounded-none">
                        <Avatar>
                            <AvatarImage src="https://github.com/renansouz.png" className="ml-5 border-4 border-slate-950 rounded-full w-36" />
                            <AvatarFallback className="ml-5 border-4 border-slate-950 rounded-full w-36">CN</AvatarFallback>
                        </Avatar>
                    </CardHeader>
                    <CardContent className="flex flex-col mt-20 w-full gap-y-2">
                        <div className="flex justify-between">
                            <div>
                                <CardTitle className="text-left font-bold ml-6 " style={{ maxWidth: '600px' }}>
                                    RENAN DE SOUZA SILVA
                                </CardTitle>
                                <CardDescription className="font-light w-full ml-6">Olá me chamo Renan, caso queira aprender tailwind, agende uma reunião comigo!</CardDescription>
                                <span className="font-bold mt-3 ml-5 text-indigo-300">+ 10 agendamentos</span>
                            </div>
                            <div>
                                <Dialog>
                                    <DialogTrigger className="flex">
                                        <div className="hover:bg-indigo-500 w-10 h-10 rounded-full flex justify-center items-center">
                                            <Pencil className=" text-indigo-300 flex" />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Informações da sua conta</DialogTitle>
                                            <DialogDescription>
                                                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                                            </DialogDescription>
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
