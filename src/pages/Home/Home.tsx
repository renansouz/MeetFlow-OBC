import { BackGroundImage } from "./styles";
import { Link } from "react-router-dom";
import { Card } from "./Components/Card";
import { Star, ShieldCheck, FolderSync } from "lucide-react";

export const Home = () => {
    return (
        <div className="p-0 bg-blue-950">
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
            <section className="bg-blue-950 min-h-screen flex ">
                <div className="w-3/6 flex justify-center items-center text-center flex-col gap-5">
                    <div className="w-4/6 text-left flex flex-col gap-6">
                        <h1 className="text-7xl font-lexend-start font-semibold">
                            About us:
                        </h1>
                        <p className="w-11/12 mb-32">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Rem exercitationem, aspernatur facere animi
                            eveniet temporibus nobis soluta dignissimos
                            laboriosam quo. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Molestias commodi
                            atque delectus eveniet quibusdam unde officiis, quo
                            sequi mollitia odit ullam vel tempore sunt, et
                            officia, reprehenderit facere qui doloribus.
                        </p>
                    </div>
                </div>

                <div className="w-3/6 flex justify-center items-left flex-col gap-20">
                    <Card
                        Icon={Star}
                        title="Rewards"
                        label="We take proactive steps make sure your information and transactions are secure."
                    />
                    <Card
                        Icon={ShieldCheck}
                        title="100% Secured"
                        label="We take proactive steps make sure your information and transactions are secure."
                    />
                    <Card
                        Icon={FolderSync}
                        title="Balance Transfer"
                        label="A balance transfer credit card can save you a lot of money in interest charges."
                    />
                </div>
            </section>
        </div>
    );
};
