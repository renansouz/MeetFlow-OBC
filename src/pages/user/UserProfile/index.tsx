export const UserProfile = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <div className="h-full w-4/6">
                <h1 className="text-left text-4xl font-semibold">Meu perfil</h1>
                <div className="mt-20 flex items-center gap-10">
                    <div className="h-38 w-38 flex items-center justify-center rounded-full bg-indigo-700 p-2 ">
                        <img src="http://github.com/miqueiasmartinsf.png" className="w-28 rounded-full" alt="" />
                    </div>
                    <h2 className="text-3xl">Mikao</h2>
                </div>
            </div>
        </div>
    );
};
