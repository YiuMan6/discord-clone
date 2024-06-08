import { initProfile } from "@/app/(setup)/init-profile";
import Modal from "@/components/modals/modal";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  // TODO update types after
  const profile = (await initProfile()) as any;

  const server = await db.server.findFirst({
    where: {
      Member: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/server/${server.id}`);
  }

  // if current user no server, go to create on
  return <Modal />;
};

export default SetupPage;
