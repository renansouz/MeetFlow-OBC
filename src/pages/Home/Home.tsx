import { BackGroundImage } from "./styles";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="p-0 bg-blue-900">
            <section className="p-0 w-lvw h-lvh">
                <BackGroundImage>
                    <h1 className="text-7xl text-white">
                        The Next Payment Method
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur labore, quod atque iusto rem, delectus
                        aliquam ipsum.
                    </p>
                    <Link
                        className="bg-indigo-600 group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-6 py-2"
                        to={"/cadastro"}
                    >
                        Começar
                    </Link>
                </BackGroundImage>
            </section>
        </div>
    );
};
