"use server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const createArticlesSchema = z.object({
  title: z.string().min(3).max(100),
  category: z.string().min(3).max(30),
  content: z.string().min(3).max(1000),
});

type CreateArticlesFormState = {
  error: {
    title?: string[];
    category?: string[];
    featuredImage?: string[];
    content?: string[];
    formError?: string[];
  };
};

export const createArticles = async (
  prevState: CreateArticlesFormState,
  formData: FormData
): Promise<CreateArticlesFormState> => {
  const result = createArticlesSchema.safeParse({
    title: formData.get("title") as string,
    category: formData.get("category") as string,
    content: formData.get("content") as string,
  });

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }

  const { userId } = await auth();
  if (!userId) {
    return {
      error: {
        formError: ["You must be logged in to create an article."],
      },
    };
  }

  redirect("/dashboard");
};
