"use client";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 border border-zinc-700/50 backdrop-blur-sm">
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 mb-4">
        {title}
      </h3>
      <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}