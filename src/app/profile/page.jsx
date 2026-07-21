"use client";
import UpdateUserModal from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  // console.log(userData)
  const user = userData.data?.user;
//   console.log(user);
  return (
    <div>
       <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-10">
        <Avatar className="h-30 w-30">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>
          <UpdateUserModal></UpdateUserModal>
      </Card>
    </div>
    </div>
  );
};

export default ProfilePage;
