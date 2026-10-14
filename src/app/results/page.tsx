"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/sections/Hero";
import { studentResults, Student } from "@/data/students";
import { Award } from "lucide-react";

// Helper function to extract numeric score values for sorting descending
const getScoreValue = (scoreStr: string) => {
  const num = parseFloat(scoreStr.replace(/[^0-9.]/g, ""));
  return isNaN(num) ? 0 : num;
};

// Function to sort students by score descending globally or within their category
const sortStudentsByScore = (students: Student[], isAllFilter: boolean) => {
  if (isAllFilter) {
    // Globally sort all students by score descending, ignoring category grouping
    return [...students].sort((a, b) => getScoreValue(b.score) - getScoreValue(a.score));
  } else {
    // Sort specifically within the selected category descending by score
    return [...students].sort((a, b) => getScoreValue(b.score) - getScoreValue(a.score));
  }
};

export default function ResultsPage() {
  const [filter, setFilter] = useState<"All" | "10th SSC" | "10th CBSE" | "MHT-CET">("All");

  const isAll = filter === "All";

  const rawFilteredStudents =
    isAll
      ? studentResults
      : studentResults.filter((s) => s.exam === filter);

  // Apply sorting based on whether "All" or a specific filter is active
  const filteredStudents = sortStudentsByScore(rawFilteredStudents, isAll);

  const filterOptions: ("All" | "10th SSC" | "10th CBSE" | "MHT-CET")[] = [
    "All",
    "10th SSC",
    "10th CBSE",
    "MHT-CET",
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

            <div className="flex flex-wrap gap-4">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setFilter(option)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    filter === option
                      ? "bg-cta text-white shadow-md"
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
                  <div className="absolute top-3 left-3 bg-cta text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm">
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