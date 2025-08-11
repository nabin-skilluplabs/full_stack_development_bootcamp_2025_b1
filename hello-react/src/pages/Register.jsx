import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthBox from "../components/AuthBox";
import AuthTitle from "../components/AuthTitle";
import { useState } from "react";
import { Link } from "react-router";

const schema = yup.object({
    firstName: yup.string().required('First name is required!'),
    lastName: yup.string().required('Last name is required!'),
    email: yup.string().required("Email is required!").email('This should be valid email address!'),
    password: yup.string().required('Password is required!')
        .min(8, 'Password should be at least 8 characters long!')
        .matches(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/, 'Password is not strong enough!')
}).required();

export function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const titleText = "Sign Up your new account";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: "Alex",
            lastName: "Lee",
            email: "alex.lee@gmail.com",
            password: "AAABBBbbb@@123"
        }
      });

    const onSubmit = (data) => {
        
        console.log(data)
        throw new Error('');
    };
    

    return (
        <div className="flex flex-col gap-4 w-full items-center">
            <AuthTitle text={titleText} />
            <AuthBox>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">First name</label>
                        <input className="border p-1 border-gray-300 rounded-sm" type="text" id="firstName" {...register("firstName")} />
                        {
                            errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                        }
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">Last name</label>
                        <input className="border p-1 border-gray-300 rounded-sm" type="text" id="lastName" {...register("lastName")}  />
                        {
                            errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                        }
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">Email</label>
                        <input className="border p-1 border-gray-300 rounded-sm" type="email" id="email" {...register("email", {required: true})}  />
                        {
                            errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>
                        }
                    </div>

                    <div className="flex flex-col gap-1">
                        <label onClick={() => setShowPassword(!showPassword)} className="font-semibold">Password</label>
                        <input className="border p-1 border-gray-300 rounded-sm" type={showPassword ? "text" : "password" }id="password" {...register("password", {required: true})}  />
                        {
                            errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>
                        }
                    </div>

                    <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 inline-block text-white rounded-lg">Sign Up</button>
                </form>
            </AuthBox>
            <p>
                Already have account? <Link to="/sign-in" className="font-bold text-amber-400">Sign In</Link>
            </p>
            
        </div>
        
    );
}