"use client";

import React, { useActionState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createComments } from "@/actions/createComment";

type CommentformProps = {
  articleId: string;
};

const CommentForm: React.FC<CommentformProps> = ({ articleId }) => {
  const [formState, action, isPending] = useActionState(
    createComments.bind(null, articleId),
    {
      errors: {},
    }
  );

  return (
    <form action={action} className="mb-8">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src=""></AvatarImage>
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <Input type="text" name="body" placeholder="Write a comment..." />
          {formState.errors.body && (
            <p className="text-red-500 text-sm mt-2">{formState.errors.body}</p>
          )}

          <div className="mt-4 flex justify-end">
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Post Comment"
              )}
            </Button>
          </div>
          {formState.errors.formErrors && (
            <div className="p-2 border border-red-600 bg-red-100">
              {formState.errors.formErrors[0]}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
