import { useTheme } from "@/context/theme-provider";
import Logo from "@/public/Logo.png";
import LightLogo from "@/public/Logo-light.png";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
    const { theme } = useTheme();

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="flex items-start w-full gap-5">
                <div>
                    <img
                        src={theme === "dark" ? Logo : LightLogo}
                        alt=""
                        className="w-64"
                    />
                    <p>Organize. Agende. Conecte-se. MeetFlow.</p>
                </div>
                <div>
                    <h2 className="font-bold">Recursos</h2>
                    <p>Termos de Uso</p>
                    <p>Política de Privacidade</p>
                    <p>Tutoriais</p>
                </div>
                <div>
                    <h2 className="font-bold">Sobre Nós</h2>
                    <p>Quem Somos</p>
                    <p>Nossa Missão</p>
                    <p>Equipe</p>
                    <p>Blog</p>
                    <p>Newsletters</p>
                </div>
                <div>
                    <h2 className="font-bold">Suporte</h2>
                    <p>FAQ</p>
                    <p>Contate-nos</p>
                    <p>Ajuda</p>
                </div>
            </div>
            <Separator orientation="horizontal" className="w-full h-2 my-2" />
            <div></div>
            <h1>teste</h1>
        </div>
    );
};
