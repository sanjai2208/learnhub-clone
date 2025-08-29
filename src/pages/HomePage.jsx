import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
const HomePage = () => {
  const { students } = useContext(StudentContext);
  const total = students.length;
  const placed = students.filter((s) => s.status === "Placed").length;
  const unplaced = total - placed;
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <section className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Learn from the best, be <br /> your best..
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Give yourself an upgrade with our inspiring online courses and join
            a global community of learners
          </p>
          <button className="mt-8 bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition">
            {" "}
            Get Started
          </button>
        </section>
        <section className="py-20">
          <h2 className="text-center text-3xl font-bold mb-10">
            Our Placement Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center text-gray-400">
            <img src="/airbnb.png" alt="Airbnb" className="h-15 mx-auto" />
            <img src="/grabyo.png" alt="Grabyo" className="h-15 mx-auto" />
            <img
              src="/lifegroups.png"
              alt="lifegroups"
              className="h-15 mx-auto"
            />
            <img src="/myob.png" alt="Myob" className="h-15 mx-auto" />
            <img src="/tailus.png" alt="Tailus" className="h-15 mx-auto" />
            <img src="/microsoft.png" alt="Microsoft" className="h-15 mx-auto" />
            <img src="/coty.png" alt="Coty" className="h-15 mx-auto" />
            <img src="/lilly.png" alt="Lilly" className="h-15 mx-auto" />
          </div>
          <div className="text-center mt-10">
            <button className="bg-lime-300 text-black font-semibold py-3 px-6 rounded-2xl hover:bg-lime-400 transition-colors">
              and, more companies
            </button>
          </div>
        </section>
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <p className="text-cyan-400 font-bold uppercase tracking-wider text-center">
                OPEN SOURCE THEME AND UI COMPONENTS
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-10 text-center max-w-4xl mx-auto leading-tight">
                Geaux Astro helps you craft beautiful websites efficiently
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
              <div className="space-y-12 max-w-xl">
                <div className="flex items-start">
                  <div className="w-12 h-12 mr-4 flex-shrink-0">
                    <img
                      src="/certificate.png"
                      alt="Certificate Distribution"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Certificate Distribution
                    </h3>
                    <p className="mt-2 text-gray-300">
                      We offer certificates to validate and recognize your
                      achievement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 mr-4 flex-shrink-0">
                    <img
                      src="/knowledge.png"
                      alt="Knowledge"
                      className="w-12 h-12 object-contain"
                      
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Knowledge</h3>
                    <p className="mt-2 text-gray-300">
                      We deliver transformative knowledge that empowers and
                      inspires.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 mr-4 flex-shrink-0">
                    <img
                      src="/hands-on.png"
                      alt="Hands-on Experience"
                      className="w-12 h-12 object-contain"
                      
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Hands-on Experience</h3>
                    <p className="mt-2 text-gray-300">
                      We provide hands-on experience for real-world learning.
                      You learn best by doing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 mt-8 lg:mt-0">
                <img
                  src="/dashboard-graphic.png"
                  alt="Dashboard Graphic"
                  className="w-full max-w-xl lg:max-w-2xl h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight space-y-4">
                  <div className="text-green-400 mb-2">
                    Empower your future
                    <br />
                    with cutting-edge skills
                  </div>
                  <div className="text-blue-400 mb-2">
                    New, Embrace innovation,
                    <br />
                    master technology, &<br />
                    shape the digital world
                  </div>
                  <div className="text-red-500 mb-2">
                    Your journey to success
                    <br />
                    starts here.
                  </div>
                </h2>
              </div>

              <div className="space-y-10">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Join our course with a proven track record of success, where
                  learning isn't just about gaining skills; it's about growing
                  them. Join us, learn with confidence, and watch your skills
                  soar.
                </p>

                <div className="flex flex-wrap gap-6">
                  <div className="text-center">
                    <div className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-bold inline-block">
                      Total Students
                    </div>
                    <p className="text-5xl font-bold mt-3">2</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-bold inline-block">
                      Placed Students
                    </div>
                    <p className="text-5xl font-bold mt-3">2</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-bold inline-block">
                      Unplaced Students
                    </div>
                    <p className="text-5xl font-bold mt-3">0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
