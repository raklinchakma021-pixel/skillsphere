"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const UpdateProfile = ({ user }) => {
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user?.name,
      image: user?.image,
    },
  });

  const onSubmit = async (data) => {
    const { name, image } = data;

    const { data: res, error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Profile updated");

    router.push("/profile");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="input w-full"
          {...register("name", { required: true })}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="input w-full"
          {...register("image", { required: true })}
        />

        <button className="btn bg-indigo-600 text-white w-full">
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;