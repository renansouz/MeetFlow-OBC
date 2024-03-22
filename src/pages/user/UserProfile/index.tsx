import { Separator } from '@radix-ui/react-separator';

export const UserProfile = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <div className="h-full w-4/6 rounded-lg bg-slate-800 p-10">
                <h1 className="text-left text-4xl font-semibold">Meu perfil</h1>
                <Separator orientation="horizontal" className="my-10 h-0.5 w-full bg-slate-400" />
                <div className="mt-20 flex items-center gap-10">
                    <div className="flex items-center">
                        <div className="flex gap-5">
                            <div className="h-38 w-38 flex items-center justify-center rounded-full bg-indigo-700 p-2 ">
                                <img src="http://github.com/miqueiasmartinsf.png" className="w-28 rounded-full" alt="" />
                            </div>
                            <h2 className="text-3xl">Mikao</h2>
                        </div>
                        <div>
                            <h2 className='font-bolld'>Crie confiança!</h2>
                            <p>sua foto aparecerá em e-mails e no link de reserva de consulta on-line isso permite que seus clientes potenciais associem uma agência a um</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
