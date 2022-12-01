import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
} from "react-icons/bs";

export const MovieDetail = ({ movie, showLink = true }) => {
    const imageURL = import.meta.env.VITE_IMG;

    const formatCurrency = (number) => {
        const valueString = number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });

        return valueString.replaceAll(",", ".");
    };

    return (
        <div className="p-3 rounded-xl flex justify-center items-center gap-10 max-w-screen-xl m-auto">
            <img
                src={imageURL + movie.poster_path}
                alt={movie.title}
                className="rounded-xl h-[500px]"
            />
            <div className="flex flex-col justify-between gap-3 mb-2">
                <h2 className="font-bold tracking-wide text-3xl">
                    {movie.title}
                </h2>

                <div className="">
                    <h3 className="flex items-center gap-2 font-semibold">
                        <FaStar className="text-yellow-300" /> Nota:
                    </h3>
                    <p className="italic">{movie.vote_average}</p>
                </div>

                <div className="">
                    <h3 className="flex items-center gap-2 font-semibold">
                        <BsWallet2 /> Orçamento:
                    </h3>
                    <p className="italic">{formatCurrency(movie.budget)}</p>
                </div>

                <div className="">
                    <h3 className="flex items-center gap-2 font-semibold">
                        <BsGraphUp /> Receita:
                    </h3>
                    <p className="italic">{formatCurrency(movie.revenue)}</p>
                </div>

                <div className="">
                    <h3 className="flex items-center gap-2 font-semibold">
                        <BsWallet2 /> Duração:
                    </h3>
                    <p className="italic">{movie.runtime} minutos</p>
                </div>

                <div className="">
                    <h3 className="flex items-center gap-2 font-semibold">
                        <BsFillFileEarmarkTextFill /> Descrição:
                    </h3>
                    <p className="italic">{movie.overview}</p>
                </div>
                {showLink && (
                    <Link
                        to={`/movie/${movie.id}`}
                        className="py-2 border-2 border-orange rounded-md w-full text-center font-semibold hover:text-gray hover:bg-orange transition duration-300"
                    >
                        Detalhes
                    </Link>
                )}
            </div>
        </div>
    );
};
