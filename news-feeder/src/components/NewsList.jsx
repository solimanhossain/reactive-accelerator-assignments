export default function NewsList({
    title,
    description,
    date,
    url = "#",
    text2xl,
}) {
    return (
        <div className="col-span-12 md:col-span-4">
            <a href={url}>
                <h3
                    className={`mb-2.5 text-xl font-bold ${
                        text2xl ? "lg:text-[20px]" : "lg:text-2xl"
                    }`}
                >
                    {title}
                </h3>
            </a>
            <p className="text-base text-[#292219]">{description}</p>
            <p className="mt-5 text-base text-[#94908C]">{date}</p>
        </div>
    );
}
