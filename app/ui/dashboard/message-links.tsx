"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface MessageLinksProps {
  onLinkClick: () => void;
}

const links = [
  { key:'1', name: "Emma Johnson", href: "/dashboard/messages/emma-johnson", imageSrc: "/p1.png", message: "You are now connected." },
  { key:'2', name: "Olivia Smith", href: "/dashboard/messages/olivia-smith", imageSrc: "/p2.png", message: "u up?" },
  { key:'3', name: "Ava Williams", href: "/dashboard/messages/ava-williams", imageSrc: "/p3.png", message: "Congrats on your new job" },
  { key:'4', name: "Liam Brown", href: "/dashboard/messages/liam-brown", imageSrc: "/p4.png", message: "maybe next time" },
  { key:'5', name: "Noah Davis", href: "/dashboard/messages/noah-davis", imageSrc: "/p5.png", message: "see you bro" },
  { key:'6', name: "James Wilson", href: "/dashboard/messages/james-wilson", imageSrc: "/p6.png", message: "what's up?" },
  { key:'7', name: "Ethan Clark", href: "/dashboard/messages/ethan-clark", imageSrc: "/p7.png", message: "they were looking for you at work" },
];

export default function MessageLinks({ onLinkClick }: MessageLinksProps) {
  const router = useRouter();

  const handleClick = (href: string) => {
    onLinkClick();
    router.push(href); // Navigate to the specified page
  };

  return (
    <>
      {links.map((link) => (
        <div
          key={link.key}
          onClick={() => handleClick(link.href)} // Trigger navigation and visibility toggle
          className={clsx(
            "flex h-[64px] grow items-center justify-start gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-gray-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3 cursor-pointer"
          )}
        >
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 items-center">
              <Image src={link.imageSrc} alt={link.name} width={40} height={40} className="rounded-full" />
              <div className="items-center">
                <p className="text-md">{link.name}</p>
                <p className="flex-wrap block text-sm text-gray-500">{link.message}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
