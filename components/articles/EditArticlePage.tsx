"use client";
import { FormEvent, startTransition, useActionState, useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import Navbar from "../home/header/Navbar";
import { Articles } from "@prisma/client";
import { editArticles } from "@/actions/editArticles";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

type EditArticleProps = {
  article: Articles;
};

export const EditArticlePage: React.FC<EditArticleProps> = ({ article }) => {
  const [content, setContent] = useState(article.content || "");

  const [formState, action, isPending] = useActionState(
    editArticles.bind(null, article.id),
    {
      errors: {},
    }
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("content", content);

    // Wrap the action call in startTransition
    startTransition(() => {
      action(formData);
    });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create New Article</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Article Title</Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={article.title}
                  placeholder="Enter article title"
                />
                {formState.errors.title && (
                  <span className="font-medium text-sm text-red-500">
                    {formState.errors.title}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  name="category"
                  defaultValue={article.category}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select Category</option>
                  <option value="technology">Technology</option>
                  <option value="programming">Programming</option>
                  <option value="web-development">Web Development</option>
                </select>
                {formState.errors.category && (
                  <span className="font-medium text-sm text-red-500">
                    {formState.errors.category}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="featuredImage">Featured Image</Label>
                <Input
                  id="featuredImage"
                  name="featuredImage"
                  type="file"
                  accept="image/*"
                />
                <div className="mb-4">
                  {article.featuredImage && (
                    <img
                      src={article.featuredImage}
                      alt="featuredImage"
                      className="w-48 h-32 object-cover rounded-md"
                    />
                  )}
                </div>
                {formState.errors.featuredImage && (
                  <span className="font-medium text-sm text-red-500">
                    {formState.errors.featuredImage}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label>Content</Label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                />
                {formState.errors.content && (
                  <span className="font-medium text-sm text-red-500">
                    {formState.errors.content[0]}
                  </span>
                )}
              </div>
              {formState.errors.formErrors && (
                <div className="dark:bg-transparent bg-red-100 p-2 border border-red-600">
                  <span className="font-medium text-sm text-red-500">
                    {formState.errors.formErrors}
                  </span>
                </div>
              )}
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button disabled={isPending} type="submit">
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
                    "Edit"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
