import AllArticlePage from "@/components/articles/AllArticlePage";
import ArticleSearchInput from "@/components/articles/ArticleSearchInput";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:text-5xl">
        {/* Page Header   */}

        <div className="mb-12 space-y-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">All Articles</h1>

          {/* Search Bar  */}
          <ArticleSearchInput />
        </div>

        {/* All Articles Card  */}
        <AllArticlePage />
        {/* Pagination  */}

        <div className="mt-12 flex justify-center gap-2">
          <Button variant={"ghost"} size={"sm"}>
            ← Prev
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            1
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            2
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            3
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            Next →
          </Button>
        </div>
      </main>
    </div>
  );
};

export default page;
