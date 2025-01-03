"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import {
  HeartIcon,
  ChatBubbleBottomCenterIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

// Map of posts to display in the component
const posts = [
  {
    key: "1",
    name: "Olivia Smith",
    href: "/dashboard/profilePlaceholder",
    profileImageSrc: "/p1.jpg",
    message: "#nature.",
    postImageSrc: "/acanthus.jpg",
  },
  {
    key: "2",
    name: "Liam Brown",
    href: "/dashboard/profilePlaceholder",
    profileImageSrc: "/p2.jpg",
    message: "Whiskey after a day of work makes the night better",
    postImageSrc: "/whisky.jpg",
  },
  {
    key: "3",
    name: "Ava Williams",
    href: "/dashboard/profilePlaceholder",
    profileImageSrc: "/p3.jpg",
    message: "Starting a new job",
    postImageSrc: "/skyscraper.jpg",
  },
  {
    key: "4",
    name: "Ethan Clark",
    href: "/dashboard/profilePlaceholder",
    profileImageSrc: "/p4.jpg",
    message: "Happy Holidays",
    postImageSrc: "/cookies.jpg",
  },
  {
    key: "5",
    name: "Ava Williams",
    href: "/dashboard/profilePlaceholder",
    profileImageSrc: "/p3.jpg",
    message: "End of vacation",
    postImageSrc: "/mountains.jpg",
  },
];

export default function Posts() {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div
          key={post.key}
          className="border rounded-lg shadow-sm bg-white p-4 space-y-4"
        >
          {/* Nav Link */}
          <Link
            href={post.href}
            className={clsx(
              "flex items-center gap-3 rounded-md p-2"
            )}
          >
            <Image
              src={post.profileImageSrc}
              alt={`${post.name}'s profile picture`}
              width={48}
              height={48}
              className="rounded-full"
            />
            <p className="text-lg font-medium text-gray-800 hover:text-yellow-500">{post.name}</p>
          </Link>

          {/* Post Content */}
          <p className="text-gray-600">{post.message}</p>
          <div className="flex justify-center">
            <Image
              src={post.postImageSrc}
              alt={`Post by ${post.name}`}
              width={800}
              height={800}
              className="rounded-md"
            />
          </div>

          {/* Interaction Icons */}
          <div className="flex justify-around pt-2 border-t">
            <HeartIcon className="h-6 w-6 text-gray-600 hover:text-yellow-500 cursor-pointer" />
            <ChatBubbleBottomCenterIcon className="h-6 w-6 text-gray-600 hover:text-yellow-500 cursor-pointer" />
            <PaperAirplaneIcon className="h-6 w-6 text-gray-600 hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
