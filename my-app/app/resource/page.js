"use client";

import { useRouter } from "next/navigation";

export default function ResourcesPage() {
  const router = useRouter();

  const resources = [
    {
      title: "National Suicide Prevention Lifeline",
      type: "CRISIS",
      desc: "24/7 crisis support for people in suicidal crisis or emotional distress",
      contact: "988 or visit suicidepreventionlifeline.org",
      available: "24/7",
      color: "bg-red-500/80",
    },
    {
      title: "Crisis Text Line",
      type: "CRISIS",
      desc: "Free, 24/7 support for people in crisis",
      contact: "Text HOME to 741741",
      available: "24/7",
      color: "bg-pink-500/80",
    },
    {
      title: "Campus Counseling Center",
      type: "PROFESSIONAL",
      desc: "Professional counseling services for students",
      contact: "Contact your campus counseling center",
      available: "Business hours",
      color: "bg-blue-600/80",
    },
    {
      title: "NAMI Helpline",
      type: "GENERAL SUPPORT",
      desc: "Information and referral services for mental health",
      contact: "1-800-950-NAMI (6264)",
      available: "M–F 10am–10pm ET",
      color: "bg-green-600/80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push("/")}>
          <img src="/logo.png" alt="MindEase" className="h-6 w-6" />
          <span className="font-bold">MindEase</span>
        </div>
        <div className="space-x-6">
          <button onClick={() => router.push("/")} className="hover:text-gray-300">Home</button>
          <button onClick={() => router.push("/community")} className="hover:text-gray-300">Community</button>
          <button onClick={() => router.push("/about")} className="hover:text-gray-300">About Us</button>
          <button onClick={() => router.push("/profile")} className="hover:text-gray-300">Profile</button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-10 px-6 min-h-screen">
        <h1 className="text-3xl font-bold">Crisis Support & Resources</h1>
        <p className="mt-2 text-lg">
          Immediate help and professional support when you need it most
        </p>

        {/* Resource Cards */}
        <div className="mt-10 max-w-3xl mx-auto space-y-6">
          {resources.map((res, index) => (
            <div
              key={index}
              className={`${res.color} rounded-xl p-6 shadow-lg text-left`}
            >
              <h2 className="text-xl font-bold">{res.title}</h2>
              <p className="uppercase text-sm font-semibold mt-1">{res.type}</p>
              <p className="mt-2">{res.desc}</p>
              <p className="mt-1">
                <span className="font-semibold">Contact:</span> {res.contact}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Available:</span> {res.available}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={() => router.push("/feedback")}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-full shadow-md"
          >
            Feedback Section
          </button>
          <button
            onClick={() => router.push("/library")}
            className="px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800 text-white rounded-full shadow-md"
          >
            Assessments & libraries →
          </button>
        </div>
      </div>
    </div>
  );
}
