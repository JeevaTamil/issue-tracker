import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Card, Flex, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="4" my="2">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </Flex>
      <Card>{issue.description}</Card>
    </div>
  );
};

export default IssueDetailPage;
