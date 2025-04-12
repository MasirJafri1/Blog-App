import { BlogFooter } from "@/components/home/BlogFooter";
import Navbar from "@/components/home/header/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TopArticles from "@/components/home/TopArticles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">
              Featured Articles
            </h2>
            <p>Discover our Most popular and trending content</p>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
              <div className="text-center flex flex-col items-center">
                {/* Spinner */}
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 dark:border-purple-400 mb-4"></div>

                {/* Loading Text */}
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Loading Articles...
                </h1>
              </div>
            </div>
          }
        >
          <TopArticles />
        </Suspense>

        <div className="text-center mt-12">
          <Link href={"/articles"}>
            <Button className="rounded-full hover:bg-gray-900 hover:text-white dark:text-white dark:hover:text-gray-900">
              View All Articles
            </Button>
          </Link>
        </div>
      </section>
      <BlogFooter />
    </div>
  );
}
