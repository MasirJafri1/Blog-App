import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import Link from "next/link";

const RecentArticles = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Articles</CardTitle>
          <Button className="text-muted-foreground" size="sm" variant={"ghost"}>
            View All →{" "}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Comments</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>
                <Badge
                  className="rounded-full bg-green-100 text-green-800"
                  variant={"secondary"}
                >
                  Published
                </Badge>
              </TableCell>
              <TableCell>2</TableCell>
              <TableCell>12 Feb</TableCell>
              <TableCell>
                <div className="flex gap-2  ">
                  <Link href={`/dashboard/articles/${12}/edit`}>
                    <Button variant={"ghost"} size={"sm"}>Edit</Button>
                  </Link>
                  <DeleteButton />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentArticles;

const DeleteButton = () => {
  return (
    <form>
      <Button variant={"ghost"} size={"sm"} type="submit">
        Delete
      </Button>
    </form>
  );
};
