import React, { useState } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Frontend Web Developer",
    issuer: "Nullclass",
    description:
      "During my 5-month internship at NullClass, I worked as a Frontend Developer, where I wassresponsible for building and maintaining interactive, responsive, and user-friendly web interfaces.My role involved collaborating with designers and backend developers to deliver high-qualityfeatures and enhancements aligned with user needs and business goals",
    date: "june 2025",
    imageUrl:
      "https://drive.google.com/file/d/1Lt2eYTH9M_tjtaBM85w75Wxb4Tduw6eC/view?usp=sharing",
  },
  {
    title: "Frontend Web Developer",
    issuer: "CodeTech IT Solution.",
    description:
      "Completed a 1-month intensive internship in Frontend Web Development at CodTech ITSolutions, where I focused on building modern, responsive web interfaces using React.js andTailwind CSS.Developed responsive UI components using React.js, enhancing usability andperformance.",
    date: "Feb 2025",
    imageUrl:
      "https://drive.google.com/file/d/1VWGOdDZZ9P1gkYkYVkBBnlYqciDy5oOr/view?usp=drive_link",
  },
  {
    title: "Latest Trends in IT",
    issuer: "Think Next",
    description:
      "I attended a one-day workshop on Latest Trends in Information Technology which provided valuable insights into the rapidly evolving tech landscape. The workshop covered key emerging technologies such as Artificial Intelligence (AI), Machine Learning (ML), Cloud Computing, Cybersecurity, Internet of Things (IoT).",
    date: "Mar 2025",
    imageUrl:
      "https://drive.google.com/file/d/1VK6xd5Bw3RDn8Ua8JPrwq3EQ-5UUogzF/view?usp=drive_linkg",
  },
  {
    title: "Digital Productivity",
    issuer: "NIIT",
    description:
      "Digital Tools: Introduction to tools like MS Office, Google Workspace, and collaboration platforms like Microsoft Teams or Slack.",
    date: "Aug 2024",
    imageUrl:
      "https://drive.google.com/file/d/1VUQRqceViu_6vvGqVX59vlM0wvTTo-h0/view?usp=sharing",
  },
  {
    title: "Servlet and JSP for Beginners",
    issuer: "Mind luster",
    description:
      "I completed the Servlet and JSP for Beginners course offered by Mind Luster, which provided a foundational understanding of Java EE web development using Servlets and JavaServer Pages (JSP).",
    date: "Mar 2024",
    imageUrl:
      "https://drive.google.com/file/d/1VKr_y-xOjJ1pJlxBNTSdJ8nbkQ5UwGe1/view?usp=sharing",
  },
    {
    title: "Multithreading in Java",
    issuer: "Great Learning",
    description:
      "I completed the Multithreading in Java course offered by Great Learning, which introduced the principles and implementation of concurrent programming in Java. The course covered key concepts such as threads, synchronization, thread lifecycle, inter-thread communication, and the Executor framework. This training improved my understanding of writing efficient and responsive Java applications through parallel execution.",
    date: "Jan 2024",
    imageUrl:
      "https://drive.google.com/file/d/1tdlKVuYSDQOYHw0ucbfdK8pJTdM-1NaE/view?usp=sharing",
  },
   {
    title: "Networking in Java",
    issuer: "Great Learning",
    description:
      "I completed the Networking in Java course offered by Great Learning, which provided a foundational understanding of network programming using Java. The course covered key topics such as sockets, server-client architecture, TCP/IP and UDP communication, datagram sockets, and how to build simple networked applications. This training enhanced my ability to develop and troubleshoot network-enabled Java applications.",
    date: "Feb 2024",
    imageUrl:
      "https://drive.google.com/file/d/1qqBhEysaJmMN_rO4jMHmIx-M0kcUSKzl/view?usp=sharing",
  },
  {
    title: "RMI",
    issuer: "Mind luster",
    description:
      "I completed the RMI (Remote Method Invocation) course offered by Mind Luster, which introduced the core principles and practical implementation of Java RMI technology.",
    date: "Mar 2024",
    imageUrl:
      "https://drive.google.com/file/d/1VQRvzD32Fxi5mgJ_61DR-O3yBPhKtYzH/view?usp=sharing",
  },
  {
    title: "Introduction to Java Spring framework 101",
    issuer: "Simpli learn",
    description:
      "I completed the Introduction to Java Spring Framework 101 course offered by Simplilearn, which provided a foundational understanding of the Spring Framework, a widely used Java-based application development platform.",
    date: "Apr 2024",
    imageUrl:
      "https://drive.google.com/file/d/16u3gy3b5DNMvC2uxVke6P9X9mJRp4mSC/view?usp=drive_link",
  },
];

function getEmbedUrl(url) {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return null;
}

const Certificates = () => {
  const [modalUrl, setModalUrl] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-6 md:px-20 py-24 bg-[#0f172a] text-white"
    >
      <div className="text-center mb-8">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          My <span className="text-blue-400">Certificates</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0, 150, 255, 0.3)" }}
            className="group bg-[#1e293b] rounded-2xl p-8 border border-blue-400/20 transition-all duration-300 ease-in-out cursor-pointer flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-1">{cert.title}</h3>
              <p className="text-blue-300 mb-4">{cert.issuer}</p>
              <p className="text-gray-300 mb-6">{cert.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">{cert.date}</span>
              <button
                onClick={() => {
                  const preview = getEmbedUrl(cert.imageUrl);
                  setModalUrl(preview || cert.imageUrl);
                }}
                className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
              >
                Verify
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {modalUrl && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setModalUrl(null)}
        >
          <div
            className="relative bg-[#1e293b] rounded-lg overflow-hidden max-w-3xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalUrl(null)}
              className="absolute top-2 right-2 text-white text-2xl z-10"
            >
              ×
            </button>

            {modalUrl.includes("drive.google.com") ? (
              <iframe
                src={modalUrl}
                className="w-full h-[80vh]"
                frameBorder="0"
                allowFullScreen
              />
            ) : (
              <img
                src={modalUrl}
                alt="Certificate"
                className="w-full h-auto object-contain max-h-[80vh]"
              />
            )}
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Certificates;
