import { useTheme } from "@/context/theme-provider";
import Logo from "@/public/Logo.png";
import LightLogo from "@/public/Logo-light.png";
import { Separator } from "@/components/ui/separator";

import { Instagram, Github, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
    const { theme } = useTheme();

    return (
        <div className="flex justify-center flex-col items-center py-10 h-  pt-32">
            <Separator
                    orientation="horizontal"
                    className="w-full h-0.5 mb-10"
                />
            <div className="w-5/6">
                <div className="flex justify-center items-start w-full gap-32">
                    <div className="flex flex-col bg-blue w-4/12 justify-center">
                        <img
                            src={theme === "dark" ? Logo : LightLogo}
                            alt=""
                            className="w-full"
                        />
                        <p className="text-center">
                            Organize. Agende. Conecte-se. MeetFlow.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 font-thin">
                        <h2 className="text-2xl font-bold mb-2">Recursos</h2>
                        <a href="#">Termos de Uso</a>
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Tutoriais</a>
                    </div>
                    <div className="flex flex-col gap-4 font-thin">
                        <h2 className="text-2xl font-bold mb-2">Sobre Nós</h2>
                        <a href="#">Quem Somos</a>
                        <a href="#">Nossa Missão</a>
                        <a href="#">Equipe</a>
                        <a href="#">Blog</a>
                        <a href="#">Newsletters</a>
                    </div>
                    <div className="flex flex-col gap-4 font-thin">
                        <h2 className="text-2xl font-bold mb-2">Suporte</h2>
                        <a href="#">FAQ</a>
                        <a href="#">Contate-nos</a>
                        <a href="#">Ajuda</a>
                    </div>
                </div>
                <Separator
                    orientation="horizontal"
                    className="w-full h-0.5 my-10"
                />
                <div className="flex justify-between pb-5">
                    <h1>
                        Copyright &copy; 2024 MeetFlow. All Rights Reserved.
                    </h1>
                    <div className="flex gap-5">
                        <Instagram />
                        <Github />
                        <Twitter />
                        <Youtube />
                    </div>
                </div>
            </div>
        </div>
    );
};
