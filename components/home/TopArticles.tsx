import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {};

const TopArticles = (props: Props) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        className={cn(
          "group relative overflow-hidden transition-all hover:scale-[1.02]",
          "border border-gray-200/50 dark:border-white/10",
          "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
        )}
      >
        <div className="p-6">
          <Link href={`/articles/${1234}`}>
            {/* Image Container */}
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Article"
                fill
                className="object-cover"
              />
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <AvatarFallback>ON</AvatarFallback>
              </Avatar>
              <span>MasirAbbas</span>
            </div>

            {/* Article Title */}
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              How to Become FullStack Developer
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Web Development
            </p>

            {/* Article Meta Info */}
            <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>12 feb</span>
              <span>{12} min read</span>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default TopArticles;
