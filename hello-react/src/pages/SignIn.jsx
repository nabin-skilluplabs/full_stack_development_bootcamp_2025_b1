import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthBox from "../components/AuthBox";
import AuthTitle from "../components/AuthTitle";
import { useState } from "react";
import { Link } from "react-router";

const schema = yup.object({
    email: yup.string().required("Email is required!").email('This should be valid email address!'),
    password: yup.string().required('Password is required!')
}).required();

export function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const titleText = "Sign In to your account";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: ""
        }
      });

    const onSubmit = (data) => {
        
        console.log(data)
        
    };
    

    return (
        <div className="flex flex-col gap-4 w-full items-center">
            <AuthTitle text={titleText} />
            <AuthBox>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    

                  

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

                    <Link to="/forgot-password" className="text-amber-500">Forgot password?</Link>

                    <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 inline-block text-white rounded-lg">Sign In</button>
                </form>
            </AuthBox>
            <p>
            Don't have account yet? <Link to="/register" className="font-bold text-amber-400">Sign Up</Link>
            </p>
            
        </div>
        
    );
}