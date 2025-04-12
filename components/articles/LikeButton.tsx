import React from "react";
import { Button } from "../ui/button";
import { Bookmark, Share2, ThumbsUp } from "lucide-react";

const LikeButton = () => {
  return (
    <div className="flex mb-12 gap-4 border-t pt-8">
      <form action="">
        <Button type="button" className="gap-2 " variant={"ghost"}>
          <ThumbsUp className="h-5 w-5" />
        </Button>
      </form>

      <Button variant={"ghost"} className="gap-2 ">
        <Bookmark className="h-5 w-5" />
          </Button>

      <Button variant={"ghost"} className="gap-2 ">
        <Share2 className="h-5 w-5" />
          </Button>
          
    </div>
  );
};

export default LikeButton;
