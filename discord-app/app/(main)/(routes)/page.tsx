import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="text-3xl font-bold text-indigo-500">
      <div>protect route</div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
};
export default Home;
