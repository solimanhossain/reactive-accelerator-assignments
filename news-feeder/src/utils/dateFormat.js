export default function dateFormat(date) {
    return new Date(date)
        .toLocaleString("de-DE", {
            year: "numeric",
            month: "short",
            day: "2-digit",
        })
        .replaceAll(".", "");
}
