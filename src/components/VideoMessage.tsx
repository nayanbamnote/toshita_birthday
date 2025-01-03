"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface VideoMessageProps {
  title: string;
  description: string;
  videoUrl: string | null;
  thumbnail: string;
}

export function VideoMessage({ title, description, videoUrl, thumbnail }: VideoMessageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (videoUrl) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={cn(
          "relative group",
          videoUrl ? "cursor-pointer" : "cursor-not-allowed"
        )}
        onClick={handleClick}
      >
        <div className="relative aspect-video rounded-xl overflow-hidden">
          {/* Thumbnail */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: videoUrl ? 1.1 : 1 }}
              className={cn(
                "w-16 h-16 flex items-center justify-center rounded-full",
                videoUrl 
                  ? "bg-white/20 backdrop-blur-sm" 
                  : "bg-gray-500/20 backdrop-blur-sm"
              )}
            >
              <Play className={cn(
                "w-8 h-8",
                videoUrl ? "text-white" : "text-gray-400"
              )} />
            </motion.div>
          </div>
          
          {/* Text Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-sm text-white/80">{description}</p>
            {!videoUrl && (
              <p className="text-xs text-yellow-400 mt-1">Coming soon...</p>
            )}
          </div>
        </div>
      </motion.div>

      {videoUrl && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl bg-black/90 border-white/20">
            <div className="aspect-video relative">
              <video
                className="w-full h-full rounded-lg"
                controls
                autoPlay
                src={videoUrl}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
} 