'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="Qloud-Web/assets/logo.png" // Replace with your logo path in the public folder
          alt="Logo"
          width={150}
          height={150}
          className="mb-6"
        />
      </motion.div>

      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-4 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Welcome to Qloud
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mb-8 text-center leading-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Empowering your business through innovation and technology.
      </motion.p>

      <motion.div
        className="bg-black text-white py-3 px-8 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial = {{opacity: 0}}
        animate ={{opacity: 1}}
        transition={{delay: 0.5, duration: 0.6}}
      >
        <Link href="/Pages/Home">
          Learn More
        </Link>
      </motion.div>
    </div>
  );
}
