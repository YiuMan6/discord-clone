"use client";
import { Plus } from "lucide-react";
import DSTooltip from "../tooltip/Tooltip";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface navItemProps {
  withAction: boolean;
  id?: string;
  imageUrl?: string;
  name?: string;
}

const NavItem = ({ withAction, id, imageUrl, name }: navItemProps) => {
  const pramas = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/server/${id}`);
  };

  const renderItem = () => {
    if (withAction) {
      return (
        <div>
          <DSTooltip label="Add a server">
            <button className="group flex items-center">
              <div className=" flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-backgroud dark:bg-neutral-700 group-hover:bg-emerald-500">
                <Plus
                  className=" group-hover:text-white transition text-emerald-500"
                  size={25}
                />
              </div>
            </button>
          </DSTooltip>
        </div>
      );
    } else {
      return (
        <DSTooltip side="right" align="center" label={name}>
          <button
            onClick={() => {
              onClick();
            }}
            className="group relative flex items-center">
            <div
              className={cn(
                " absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
                pramas?.serverId !== id && "group-hover:h-[20px]",
                pramas?.serverId === id ? "h-[36px]" : "h-[8px]"
              )}
            />
            <div
              className={cn(
                "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden ml-[18px]",
                pramas?.serverId === id &&
                  " bg-primary/10 text-primary rounded-[16px]"
              )}>
              <Image src={imageUrl || ""} fill alt="channel" />
            </div>
          </button>
        </DSTooltip>
      );
    }
  };

  // return renderActionItem;
  return renderItem();
};

export default NavItem;
