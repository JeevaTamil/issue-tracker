import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ IssueId }: { IssueId: number }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issue/${IssueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
