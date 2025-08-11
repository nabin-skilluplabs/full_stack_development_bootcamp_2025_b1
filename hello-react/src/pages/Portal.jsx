import { Link } from "react-router";
import AuthTitle from "../components/AuthTitle";

export default function Portal() {
    return (
        <div className="flex flex-col gap-2 items-center">
            <AuthTitle text="Welcome to Portal" />
            <Link className="bg-amber-500 hover:bg-amber-600 px-4 py-2 inline-block text-white rounded-lg" to="/register">Register</Link>
        </div>
    );
}