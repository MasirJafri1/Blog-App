import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CommentForm = () => {
  return (
    <form action="" className="mb-8">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src=""></AvatarImage>
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <Input type="text" name="body" placeholder="Write a comment..." />
          <div className="mt-4 flex justify-end">
            <Button>Post Comment</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
