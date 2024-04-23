import { StreamVideoProvider } from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Boom",
  description: "Video calling app",
  icons:  "/icons/logo.svg"
    
      
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main>
   <StreamVideoProvider>
    {children}
    </StreamVideoProvider>
   </main>;
};

export default RootLayout;
 