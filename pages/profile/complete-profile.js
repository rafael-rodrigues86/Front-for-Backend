'use client'
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, {useState} from 'react';
import 'tailwindcss/tailwind.css'
import CompleteProfileForm from '@/app/components/CompleteProfileForm';

const CompleteProfile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const { data: session } = useSession();
  const router = useRouter();

  console.log(session);
  return (
    <main className="min-h-screen">
    <Appbar onMenuToggle={handleMenuToggle}></Appbar>
    <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>
  
      {session ? (
        <div>
          <h2>Signed in as {session.user.email}</h2>
          <CompleteProfileForm user={session.user} />
        </div>
      ) : (
        <div>
          <h2>You are not signed in!!</h2>
        </div>
      )}

    <Bottom></Bottom>
    </main>
  );

}
export default CompleteProfile;