import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="text-3xl font-bold text-indigo-500">
      <div>protect route</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default Home;
