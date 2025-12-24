"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share } from "lucide-react";
import { SectionTitle } from "../../common/section-title";

interface Post {
  id: number;
  username: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
}

const SocialProof: React.FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      username: "rezwana_chowdhury",
      image: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      likes: 1247,
      comments: 89,
      caption:
        "Noor-er Panjabi shudhu poshakk noy, eta ekta oitijjer protik. Eid-er din amader poribare Noor chara cholei na. #NoorLegacy #EidFashion",
    },
    {
      id: 2,
      username: "ahmed_karim",
      image: "bg-gradient-to-br from-amber-400 to-amber-600",
      likes: 892,
      comments: 45,
      caption:
        "Finding authentic silk Panjabis for my sons was a challenge until I found Noor. The craftsmanship is world-class. #NoorPanjabi #Heritage",
    },
    {
      id: 3,
      username: "dr_samira_ali",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      likes: 1563,
      comments: 112,
      caption:
        "The most comfortable and elegant school uniforms I've ever purchased. Truly worth every bit of investment. #NoorUniforms #Quality",
    },
    {
      id: 4,
      username: "noor_fashion",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      likes: 2105,
      comments: 178,
      caption:
        "Celebrating the timeless elegance of traditional Panjabi with our latest collection. Worn by families, cherished by generations. #NoorLegacy #TraditionalFashion",
    },
  ];

  return (
    <section className="py-32 bg-[#FAF7F2] px-6">
      <div className="container mx-auto">
        <SectionTitle
          eyebrow="#NOORLEGACY ON SOCIAL"
          title="Worn by the Family"
          className="mb-20"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className={`aspect-square ${post.image} relative`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-4">
                    <div className="flex items-center gap-1 text-white">
                      <Heart className="w-6 h-6 fill-white" />
                      <span className="font-semibold">
                        {post.likes.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm text-emerald-950">
                    {post.username}
                  </span>
                  <Share className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-xs text-slate-700 line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
