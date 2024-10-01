import Bottom from "@/components/Bottom";
import Header from "@/components/Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Bottom />
        </>
    );
}
