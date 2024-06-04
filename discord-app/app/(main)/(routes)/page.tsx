"use client";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

const Home = () => {
  const create = async () => {
    const pri = new PrismaClient();
    const apple = await pri.user.create({
      data: { name: "bb", age: 1, nickname: "fga" },
    });
  };
  return (
    <div className="text-3xl font-bold text-indigo-500">
      <div>protect route</div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
};
export default Home;
