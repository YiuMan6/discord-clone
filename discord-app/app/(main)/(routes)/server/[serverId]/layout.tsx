import NavBar from "@/components/navigation/navBar";
import React, { Children } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = async ({ children }: MainLayoutProps) => {
  return (
    <div className=" h-full">
      <div className=" hidden md:flex h-full w-[83px] z-30 flex-col fixed inset-y-0">
        <NavBar />
      </div>
      <main className=" md:pl-[82px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
