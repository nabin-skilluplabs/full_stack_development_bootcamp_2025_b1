import { Link, Outlet } from "react-router";

export function AuthLayout() {
    return (
        <div className="h-dvh bg-gray-50 flex justify-center items-center">
            <div className="w-[480px] flex flex-col items-center gap-2">
                <Link to="/">
                    <img
                        className="h-[100px]"
                    src="https://www.skilluplabs.com.au/bg_gray_logo_horizontal.png" alt="Skillup Labs" />
                </Link>
                <Outlet />
            </div>
        </div>
    );
}