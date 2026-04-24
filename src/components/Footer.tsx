'use client';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Basil Rari. Built with Next.js and deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
