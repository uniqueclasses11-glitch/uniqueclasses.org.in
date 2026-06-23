import Image from "next/image";
import { BannerCarousel } from "@/components/sections/BannerCarousal";
import { testimonials } from "@/data/testimonials";
import { 
  FaBookOpen, 
  FaGraduationCap, 
  FaLaptopCode, 
  FaUsers, 
  FaAward, 
  FaBullseye,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* 🔷 Dark Top Section */}
      <section className="bg-[#2e358d] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            About Us
          </h1>
          <p className="text-blue-100 leading-relaxed text-lg md:text-xl">
            Building strong academic foundations with result-driven coaching,
            expert guidance, and student-focused learning.
          </p>
        </div>
      </section>

      {/* 🎞 Banner Carousel */}
      <BannerCarousel />

      {/* 📘 About Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Who We Are
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Unique Classes is a trusted coaching institute with{" "}
            <span className="font-semibold text-slate-900">
              27 years of excellence
            </span>{" "}
            in education. We have guided thousands of students towards
            academic success through quality teaching, structured learning,
            and strong academic support.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            With experienced faculty, proven results, and a student-first
            approach, we ensure every learner receives personalized attention
            and the right direction to achieve their goals.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            From foundational classes for Std. 8th–10th to advanced coaching
            for 11th–12th Science and competitive exams like JEE, NEET,
            MHT-CET, and NDA, we support students at every stage of their
            academic journey — staying true to our motto,{" "}
            <span className="italic font-medium text-slate-900">
              &ldquo;Where Scholars Are Made.&rdquo;
            </span>
          </p>
        </div>
      </section>

      {/* 🎯 Vision & Mission */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To create confident, knowledgeable, and disciplined learners who
              can excel in academics and competitive examinations while
              building a strong foundation for their future success.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide quality education that builds strong academic
              foundations through concept clarity, interactive learning,
              regular assessments, and personalized guidance — helping every
              student reach their highest potential.
            </p>
          </div>
        </div>
      </section>

      {/* 🧑‍🏫 Founder's Message */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
            Founder&rsquo;s Message
          </h2>
          <div className="grid md:grid-cols-3 gap-10 items-start bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#2e358d]/10 bg-slate-100">
                <Image src="/founder.avif" alt="Prof. Sandeep Pawar" fill sizes="192px" className="object-cover" />
              </div>
              <p className="mt-4 font-bold text-slate-900 text-center md:text-left">
                Prof. Sandeep Pawar
              </p>
              <p className="text-sm font-medium text-[#2e358d] text-center md:text-left">
                Founder and Director
              </p>
            </div>
            <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              <p>At Unique Classes, our journey has been guided by a clear mission and vision — to provide quality education that builds strong academic foundations and helps students achieve their highest potential.</p>
              <p>With 27 years of experience in the education field, we have continuously focused on improving the learning experience for our students. Our teaching methodology is based on concept clarity, interactive classroom learning, regular assessments, and personalized guidance.</p>
              <p>Over the years, our institute has achieved significant milestones. Thousands of students have secured top positions and excellent results, reflecting the dedication of our experienced faculty.</p>
              <p>We believe every student has the potential to succeed. We strive to help students turn their dreams into reality and continue our legacy of <span className="italic font-medium text-slate-900">&ldquo;Where Scholars Are Made.&rdquo;</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 📚 What We Offer */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <FaBookOpen />, title: "Foundation & Board Courses", desc: "Structured coaching for Std. 8th, 9th & 10th — SSC, CBSE, and ICSE boards." },
              { icon: <FaGraduationCap />, title: "11th & 12th Science", desc: "Integrated and evening batches with focused Science stream coaching." },
              { icon: <FaBullseye />, title: "Competitive Exam Prep", desc: "Dedicated preparation for JEE (Main & Advanced), NEET, MHT-CET, and NDA." },
              { icon: <FaLaptopCode />, title: "Digital Classrooms", desc: "Modern digital learning paired with interactive offline sessions." },
              { icon: <FaAward />, title: "Intensive Test Series", desc: "Regular assessments to track progress and strengthen exam readiness." },
              { icon: <FaUsers />, title: "Learning App & Tracking", desc: "Course materials, attendance monitoring, PTM meetings, and feedback systems." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#2e358d]/30 hover:shadow-md transition-all">
                <div className="text-[#2e358d] text-2xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 Achievements */}
      <section className="py-20 bg-[#2e358d] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "27+", label: "Years of Excellence" },
              { value: "1000s", label: "Students Guided" },
              { value: "2", label: "Centers in Pune" },
              { value: "100%", label: "Dedicated Faculty" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📍 Our Centers */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Our Centers</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#2e358d] mt-1" />
              <div className="text-left">
                <h3 className="font-bold text-lg text-slate-900">Sangvi Center</h3>
                <p className="text-slate-600 text-sm">Abhinav Nagar, Old Sangvi, Pune – 411027</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#2e358d] mt-1" />
              <div className="text-left">
                <h3 className="font-bold text-lg text-slate-900">Pimple Saudagar Center</h3>
                <p className="text-slate-600 text-sm">Pimple Saudagar, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ Testimonials Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold text-lg text-slate-900">{t.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{t.reviewCount ? `${t.reviewCount} • ` : ""}{t.time}</p>
                <p className="text-slate-700 leading-relaxed mb-4">{t.message}</p>
                {t.ownerReply && (
                  <p className="text-sm"><span className="font-semibold text-[#2e358d]">Owner Reply:</span>{" "}<span className="text-slate-600">{t.ownerReply}</span></p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}