import { BannerCarousel } from "@/components/sections/BannerCarousal";
import { testimonials } from "@/data/testimonials";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* 🔷 Dark Top Section */}
      <section className="bg-[#2e358d] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            About Us
          </h1>

          <p className="text-white leading-relaxed text-lg md:text-xl">
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
            We are committed to delivering quality education with a focus on
            academic excellence and holistic development. Our mission is to
            guide students towards success in competitive exams and school
            performance through structured learning and expert mentorship.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            With experienced faculty, proven results, and a student-first
            approach, we ensure every learner receives personalized attention
            and the right direction to achieve their goals.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed">
            From foundational classes to advanced coaching, we support students
            at every stage of their academic journey.
          </p>
        </div>
      </section>

      {/* 🎯 Vision & Mission */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* Vision */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To become a leading institute that empowers students with
              knowledge, confidence, and skills to excel in academics and
              competitive exams while building a strong foundation for their
              future success.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To provide high-quality, result-oriented education through
              experienced faculty, structured learning methods, and continuous
              student support that ensures consistent academic improvement.
            </p>
          </div>

        </div>
      </section>

      {/* ⭐ Testimonials Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">
            What Our Students Say
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                {/* Name */}
                <h3 className="font-bold text-lg text-slate-900">
                  {t.name}
                </h3>

                {/* Meta */}
                <p className="text-xs text-slate-500 mb-3">
                  {t.reviewCount ? `${t.reviewCount} • ` : ""}
                  {t.time}
                </p>

                {/* Message */}
                <p className="text-slate-700 leading-relaxed mb-4">
                  {t.message}
                </p>

                {/* Owner Reply */}
                {t.ownerReply && (
                  <p className="text-sm">
                    <span className="font-semibold text-cta">
                      Owner Reply:
                    </span>{" "}
                    <span className="text-slate-600">
                      {t.ownerReply}
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}