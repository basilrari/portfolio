'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Avatar() {
  return (
    <div className="relative group">
      {/* Outer glow ring */}
      <motion.div
        className="absolute -inset-3 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        style={{
          background: 'conic-gradient(from 0deg, #22c55e, #06b6d4, #8b5cf6, #22c55e)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Middle blur layer for soft glow */}
      <motion.div
        className="absolute -inset-1 rounded-full"
        style={{
          background: 'conic-gradient(from 180deg, #22c55e, #06b6d4, #8b5cf6, #22c55e)',
          filter: 'blur(8px)',
          opacity: 0.4,
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Inner solid ring */}
      <div className="absolute -inset-0.5 rounded-full bg-slate-950" />

      {/* Avatar image with floating animation */}
      <motion.div
        className="relative rounded-full overflow-hidden border-2 border-slate-800"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.05,
          y: 0,
          transition: { duration: 0.3 },
        }}
      >
        <Image
          src="/avatar.jpg"
          alt="Basil Rari"
          width={200}
          height={200}
          className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full"
          priority
        />
      </motion.div>

      {/* Status indicator */}
      <div className="absolute bottom-2 right-2 w-5 h-5 md:bottom-4 md:right-4 rounded-full bg-emerald-500 border-4 border-slate-950 z-10">
        <motion.div
          className="absolute inset-0 rounded-full bg-emerald-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      </div>
    </div>
  );
}
