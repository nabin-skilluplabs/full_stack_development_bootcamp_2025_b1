import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthBox from "../components/AuthBox";
import AuthTitle from "../components/AuthTitle";
import { Link } from "react-router";

const schema = yup.object({
    email: yup.string().required("Email is required!").email('This should be valid email address!'),
}).required();

export function ForgotPassword() {
    const titleText = "Forgot your password?";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: ""
        }
      });

    const onSubmit = (data) => {
        console.log(data)
    };
    

    return (
        <div className="flex flex-col gap-4 w-full items-center">
            <AuthTitle text={titleText} />
            <p className="text-center">Please enter your email address. You will receive a link to create a new password via email.</p>
            <AuthBox>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="font-semibold">Email</label>
                        <input className="border p-1 border-gray-300 rounded-sm" type="email" id="email" {...register("email", {required: true})}  />
                        {
                            errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>
                        }
                    </div>

                   
                    <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 inline-block text-white rounded-lg">Send Password Reset Link</button>
                </form>
            </AuthBox>
            <p>
            Back to  <Link to="/sign-in" className="font-bold text-amber-400">Sign In</Link>
            </p>
            
        </div>
        
    );
}