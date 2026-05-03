"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {
    console.log(data, "data");
    const { email, name, photo, password } = data;
    console.log(name, photo);

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/login",
       autoSignIn: false,
    });

    console.log(res, error);
    if (error) {
      toast.error(error.message , {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  pauseOnHover: true,
} ); 
return;
    }

    if (res) {
      await authClient.signOut();
      toast.success("Signup successful",  {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  pauseOnHover: true,
});
  router.push("/login");
    }
  };

  return (
    <div style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M1180 75L1179 -124' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1436 421L1435 675' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M730 435L729 120' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M312 464L311 239' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M122 234L121 -157' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1326 244L1325 -12' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M371 496L370 889' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1180 62L1179 468' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1218 132L1217 -79' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1047 300L1046 -32' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M435 485L434 117' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M507 458L506 663' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M226 434L225 38' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1158 59L1157 -282' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M890 367L889 784' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M457 247L456 654' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M786 411L785 610' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M194 86L193 -241' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M173 377L172 584' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M828 280L827 43' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1315 218L1314 461' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M591 380L590 178' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M988 257L987 69' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M863 273L862 493' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1320 141L1319 408' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M392 397L391 643' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M103 159L102 -218' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M596 473L595 200' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M411 409L410 16' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M692 488L691 121' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M722 191L721 -153' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M365 321L364 128' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1099 530L1098 864' stroke-width='8' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M181 462L180 755' stroke-width='10' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M769 409L768 732' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1002%26quot%3b)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1071 337L1070 181' stroke-width='6' stroke='url(%26quot%3b%23SvgjsLinearGradient1001%26quot%3b)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1001'%3e%3cstop stop-color='rgba(28%2c 83%2c 142%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='%231c538e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1002'%3e%3cstop stop-color='rgba(28%2c 83%2c 142%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='%231c538e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
          backgroundSize: "cover",
        }} className="container mx-auto min-h-[80vh] my-8 flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register your account
        </h2>

        <form className="space-y-8 " onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here name"
              {...register("name", {
                required: "Name field is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here photo url"
              {...register("photo", {
                required: "Photo URL field is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
              {...register("email", {
                required: "Email field is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              placeholder="Type here password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span
              className="absolute right-8 top-4 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-indigo-600 text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;