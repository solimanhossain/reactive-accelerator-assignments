import Modal from "@/components/Modal";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/[lang]/_dictionaries/language";
import MovieDetails from "@/components/MovieDetails";

export default async function OpenModalpage({ params: { lang, movieId } }) {
    const Movies = await import("@/data/data.json").then(
        (module) => module.default
    );

    const movie = Movies.results.find(
        (movie) => movie.id === parseInt(movieId)
    );

    if (!movie) notFound();

    const dict = await getDictionary(lang);

    return (
        <Modal>
            <MovieDetails movie={movie} dic={dict} />
        </Modal>
    );
}
