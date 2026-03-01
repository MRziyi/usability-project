"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, MessageSquare } from "lucide-react";

interface ForumPostCalloutProps {
  config: {
    teamName: string;
    targetName: string;
    deploymentUrl: string;
    members: { name: string; role: string }[];
  };
}

export function ForumPostCallout({ config }: ForumPostCalloutProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const subject = `Assignment 3 — Team ${config.teamName}: ${config.targetName}`;
  const body = `Team Name: ${config.teamName}
Target Product: ${config.targetName}
Team Members: ${config.members.map((m) => m.name).join(", ")}
Project Website: ${config.deploymentUrl}

We are analyzing and redesigning the report creation & editing flow in ${config.targetName}.`;

  const handleCopy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="mb-8 rounded-lg border border-accent/30 bg-accent/5 p-5">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
        <MessageSquare className="size-4 text-accent" />
        Forum Post Info
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Subject
          </label>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded border bg-secondary px-3 py-2 text-sm font-mono">
              {subject}
            </code>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => handleCopy(subject, "subject")}
            >
              {copied === "subject" ? (
                <Check className="size-3.5" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </Button>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Body
          </label>
          <div className="flex items-start gap-2">
            <pre className="flex-1 whitespace-pre-wrap rounded border bg-secondary px-3 py-2 text-sm font-mono">
              {body}
            </pre>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => handleCopy(body, "body")}
            >
              {copied === "body" ? (
                <Check className="size-3.5" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
