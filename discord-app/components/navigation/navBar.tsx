import { currentProfile } from "@/lib/utils";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import NavItem from "./navItem";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { ModeToggle } from "../ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const NavBar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const server = await db.server.findMany({
    where: {
      Member: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className=" space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1e1f22] py-3">
      <NavItem withAction />
      <Separator className=" h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className=" flex-1 w-full">
        {server.map((server) => (
          <div key={server.id} className="mb-4">
            <NavItem
              id={server.id}
              imageUrl={server.imageUrl}
              name={server.name}
              withAction={false}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
            },
          }}
        />
      </div>
    </div>
  );
};
export default NavBar;
