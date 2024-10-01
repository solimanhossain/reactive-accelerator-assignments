import { useRouter } from "next/navigation";
import captalizeWord from "@/utils/captalizeWord";

export default function Button({ category, isActive }) {
    const router = useRouter();

    return (
        <button
            className="hover:border-b border-black block h-6 box-border mt-5"
            onClick={() => router.push(`/category/${category}`)}
            key={category}
        >
            {(isActive ? "▶ " : "") + captalizeWord(category)}
        </button>
    );
}
