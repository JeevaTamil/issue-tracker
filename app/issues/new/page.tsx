"use client";

import React from "react";
import { Button, TextField, TextArea } from "@radix-ui/themes";
import MarkdownEditor from "@uiw/react-markdown-editor";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3" data-color-mode="light">
      <TextField.Root placeholder="Title" />
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
