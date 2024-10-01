export default function findDate() {
    let today = new Date();
    return today.toLocaleString("en-us", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        weekday: "long",
    });
}
