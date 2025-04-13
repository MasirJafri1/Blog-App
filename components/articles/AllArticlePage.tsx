import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { fetchArticlebyQuery } from "@/lib/query/fetchArticleByQuery";
import { Search } from "lucide-react";

type AllArticlePageProps = {
  searchText: string;
};

const AllArticlePage: React.FC<AllArticlePageProps> = async ({
  searchText,
}) => {
  const articles = await fetchArticlebyQuery(searchText);

  if (!articles || articles.length === 0) {
    return <NoSearchResults />;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Card
          key={article.id}
          className="group relative overflow-hidden transition-all hover:shadow-lg"
        >
          <div className="p-6">
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
              <Image
                src={article.featuredImage}
                alt="bolg-image"
                fill
                className="object-cover"
              />
            </div>
            {/* <Article content/> */}

            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="mt-2">{article.category}</p>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={article.author.imageUrl || ""} />
                  <AvatarFallback>ON</AvatarFallback>
                </Avatar>

                <span className="text-sm ">{article.author.name}</span>
              </div>

              <div className="text-sm ">{article.createdAt.toDateString()}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AllArticlePage;

export function NoSearchResults() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      {/* Icon */}
      <div className="mb-4 rounded-full bg-muted p-4">
        <Search className="h-8 w-8 text-muted-foreground" />
      </div>

      {/* Title */}
      <h1 className= "font-semibold text-foreground">
        No Results Found
      </h1>

      {/* Description */}
      <p className="mt-2 text-muted-foreground">
        We could not find any articles matching your search. Try a different
        keyword or phrase.
      </p>
    </div>
  );
}
