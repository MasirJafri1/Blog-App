import React from "react";
import LeftSideBar from "@/components/dashboard/LeftSidebar";
import Link from "next/link";
import { Button } from "../ui/button";
import { FileText, MessageCircle, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import RecentArticles from "./RecentArticles";

const BlogDashboard = () => {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-bold text-2xl ">Blog Dashboard</h1>
          <p>Manage your content and Analytics</p>
        </div>

        <Link href="/dashboard/articles/create">
          <Button>
            <PlusCircle className="w-4 h-4 " />
            New Article
          </Button>
        </Link>
      </div>

      {/* Quick starts */}
      <div className="grid md:grid-cols-3 mb-8 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Total Articles
            </CardTitle>
            <FileText className="w-4 h-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold ">2</div>
            <p className="text-sm text-muted-foreground mt-1">
              +5 from last month{" "}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Total Comments
            </CardTitle>
            <MessageCircle className="w-4 h-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold ">3</div>
            <p className="text-sm text-muted-foreground mt-1">
              12 awaiting moderation{" "}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Avg. Rating Time
            </CardTitle>
            <MessageCircle className="w-4 h-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold ">3</div>
            <p className="text-sm text-muted-foreground mt-1">
              +0.6 from last month{" "}
            </p>
          </CardContent>
        </Card>
      </div>

      <RecentArticles />
    </main>
  );
};

export default BlogDashboard;
