import { notFound } from "next/navigation";
import MovieDetails from "@/components/MovieDetails";
import { getDictionary } from "@/app/[lang]/_dictionaries/language";

export default async function MovieDetailspage({ params: { lang, movieId } }) {
    const Movies = await import("@/data/data.json").then(
        (module) => module.default
    );

    const movie = Movies.results.find(
        (movie) => movie.id === parseInt(movieId)
    );

    if (!movie) notFound();

    const dict = await getDictionary(lang);

    return <MovieDetails movie={movie} dic={dict} />;
}
