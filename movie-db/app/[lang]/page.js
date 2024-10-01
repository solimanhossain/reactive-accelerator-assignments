import MovieFigure from "@/components/MovieFigure";
import { getDictionary } from "./_dictionaries/language";

export default async function HomePage({ params }) {
    const lang = params.lang;
    const dict = await getDictionary(lang);
    const Movies = await import("@/data/data.json").then(
        (module) => module.default
    );

    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {Movies.results.map((movie) => (
                    <MovieFigure
                        key={movie.id}
                        movie={movie}
                        details={dict.details}
                    />
                ))}
            </div>
        </div>
    );
}
