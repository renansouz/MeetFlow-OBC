import { BackGroundImage } from "./styles";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="p-0 bg-blue-900">
            <section className="p-0 h-lvh text-center">
                <BackGroundImage>
                    <h1 className="text-7xl text-white font-lexend-start font-semibold text-center">
                        The Next Payment Method
                    </h1>
                    <p className="font-lexend-start font-extralight text-2xl text-white text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur labore, quod atque iusto rem, delectus
                        aliquam ipsum.
                    </p>
                    <Link
                        className="bg-indigo-600  h-10 w-30 items-center justify-center rounded-md bg-background px-6 py-2 text-white"
                        to={"/cadastro"}
                    >
                        Começar
                    </Link>
                </BackGroundImage>
            </section>
            <section className="bg-blue-900 min-h1">


            </section>
        </div>
    );
};
