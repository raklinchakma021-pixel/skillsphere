"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const MyProfile = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await authClient.getSession();

      if (!data?.user) {
        router.push("/login");
        return;
      }

      setUser(data.user);
    };

    getUser();
  }, [router]);

  if (!user) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <div className="flex flex-col items-center gap-4">
        <img
          src={user.image}
          alt="profile"
          className="w-24 h-24 rounded-full"
        />

        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>

        <button
          onClick={() => router.push("/profile/update")}
          className="btn bg-indigo-600 text-white"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;