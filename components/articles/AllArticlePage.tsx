import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AllArticlePage = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
        <div className="p-6">
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
            <Image
              src={
                "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="bolg-image"
              fill
              className="object-cover"
            />
          </div>
          {/* <Article content/> */}

          <h3 className="text-xl font-semibold">Title</h3>
          <p className="mt-2"> web development</p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>ON</AvatarFallback>
              </Avatar>

              <span className="text-sm ">masirabbas</span>
            </div>

            <div className="text-sm ">12 feb</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AllArticlePage;
