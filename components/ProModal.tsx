import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useProModal } from "@/hooks/useProModal";
import { Badge } from "./ui/badge";

import {
  Check,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Video,
  Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,

    color: "text-violet-700",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,

    color: "text-pink-700",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Video Generation",
    icon: Video,

    color: "text-orange-700",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,

    color: "text-emerald-700",
    bgColor: "bg-purple-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-500/10",
  },
];
export const ProModal = () => {
  const [loading, setLoading] = useState(false);

  const proModal = useProModal();

  const onSubscribe = async () => {
    try {
      setLoading(true);

      const response = axios.get("/api/stripe");
      window.location.href = (await response).data.url;
    } catch (error) {
      toast.error("Semething went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center font-bold gap-x-2 py-1">
              Upgrade to Samarth AI
              <Badge
                variant="premium"
                className="uppercase justify-center items-center"
              >
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className=" p-3 border-black/5 flex items-center justify-center m-1"
              >
                <div className="flex items-center gap-x-4  m-2 w-96">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size="lg"
            variant="premium"
            className="w-full"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
