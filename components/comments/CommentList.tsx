import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CommentList = () => {
  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src="" />
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="mb-2">
            <span className="font-medium">Comment Author Name</span>
            <span className="text-sm ml-2">12 feb</span>
          </div>
          <p>Comment Body</p>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
