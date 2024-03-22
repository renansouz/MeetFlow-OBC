import { Button } from '@/components/ui/button';
import { Separator } from '@radix-ui/react-separator';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export const UserProfile = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <div className="h-full w-4/6 rounded-lg  border  border-indigo-700 p-10">
                <h1 className="text-left text-4xl font-semibold">Meu perfil</h1>
                <Separator orientation="horizontal" className="my-10 h-0.5 w-full bg-slate-400" />
                <div className="mt-20  items-center gap-10">
                    <div className="flex items-center justify-around">
                        <div className="flex w-1/2 flex-wrap items-center gap-8">
                            <div className="h-38 w-38 flex items-center justify-center rounded-full bg-indigo-700 p-2 ">
                                <img src="http://github.com/miqueiasmartinsf.png" className="w-28 rounded-full" alt="" />
                            </div>
                            <Button>Alterar foto</Button>
                            <AlertDialog>
                                <AlertDialogTrigger>Apagar foto</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                        <AlertDialogAction>Continuar</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                        <div className="flex w-1/2 flex-col items-center gap-5">
                            <h2 className="text-center font-bold">Crie confiança!</h2>
                            <p className="w-2/3 text-center">
                                sua foto aparecerá em e-mails e no link de reserva de consulta on-line isso permite que seus clientes potenciais associem uma agência a um
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-20 py-20">
                        <div className="">
                            <p className="font-bold">Nome</p>
                            <h2 className="text-3xl">Jânio</h2>
                        </div>
                        <div className="">
                            <p className="font-bold">Sobrenome</p>
                            <h2 className="text-3xl">Quadros</h2>
                        </div>
                        <div className="">
                            <p className="font-bold">Email</p>
                            <h2 className="text-3xl">janio@outlook.com</h2>
                        </div>
                        <div className="">
                            <p className="font-bold">Telefone</p>
                            <h2 className="text-3xl">(11) 98363-3435</h2>
                        </div>
                        <div className="">
                            <p className="font-bold">Idade</p>
                            <h2 className="text-3xl">65</h2>
                        </div>
                        <div className="">
                            <p className="font-bold">asd</p>
                            <h2 className="text-3xl">lorem ipsum</h2>
                        </div>
                        <div className="">
                            <p className="font-bold">Email</p>
                            <h2 className="text-3xl">jautlook.com</h2>
                        </div>

                        <div className="">
                            <p className="font-bold">Email</p>
                            <h2 className="text-3xl">janio@outlook.com</h2>
                        </div>
                        <div className="">
                            <p className="font-bold">Email</p>
                            <h2 className="text-3xl">janio@outlook.com</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
