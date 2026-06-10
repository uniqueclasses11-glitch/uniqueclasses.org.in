"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/sections/Hero";
import { studentResults } from "@/data/students";
import { Award } from "lucide-react";

export default function ResultsPage() {
  const [filter, setFilter] = useState<"All" | "10th SSC" | "10th CBSE">("All");

  const filteredStudents =
    filter === "All"
      ? studentResults
      : studentResults.filter((s) => s.exam === filter);

  const filterOptions: ("All" | "10th SSC" | "10th CBSE")[] = [
    "All",
    "10th SSC",
    "10th CBSE",
  ];

  return (
    <main className="bg-slate-50 min-h-screen">
      <Hero />

      {/* Added spacing here */}
      <div className="pt-16 md:pt-24 pb-20">
        <Container>
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Our Achievers
            </h1>

            <div className="flex gap-4">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setFilter(option)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    filter === option
                      ? "bg-cta text-white"
                      : "bg-white border border-slate-200 hover:border-cta/50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative aspect-square bg-slate-100">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-cta text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                    {student.exam}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-display font-bold text-slate-900 truncate">
                    {student.name}
                  </h4>
                  <p className="text-xs text-slate-500 truncate mb-4">
                    {student.school}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="text-xl font-black text-primary">
                      {student.score}
                    </div>
                    <Award size={18} className="text-cta" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </main>
  );
}