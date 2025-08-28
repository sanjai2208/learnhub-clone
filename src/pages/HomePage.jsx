import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer" 
const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <section className="text-center py-20">
          <h1 className='className="text-5xl md:text-7xl font-extrabold leading-tight'>
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
            <img src="/airbnb.png" alt="Airbnb" className="h-8 mx-auto" />
            <img src="/grabyo.png" alt="Grabyo" className="h-8 mx-auto" />
            <img
              src="/lifegroups.png"
              alt="lifegroups"
              className="h-8 mx-auto"
            />
            <img src="/myob.png" alt="Myob" className="h-8 mx-auto" />
            <img src="/tailus.png" alt="Tailus" className="h-8 mx-auto" />
            <img src="/microsoft.png" alt="Microsoft" className="h-8 mx-auto" />
            <img src="/coty.png" alt="Coty" className="h-8 mx-auto" />
            <img src="/lilly.png" alt="Lilly" className="h-8 mx-auto" />
          </div>
          <div className="text-center mt-10">
            <button className="bg-lime-300 text-black font-semibold py-3 px-6 rounded-2xl hover:bg-lime-400 transition-colors">
              and, more companies
            </button>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-cyan-400 font-bold uppercase tracking-wider">
                Open Source Theme and UI Components
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold my-4 leading-tight">
                Geaux Astro helps you craft beautiful websites efficiently
              </h2>
              <div className="space-y-8 mt-8">
                <div className="flext items-start">
                  <img
                    src="/certificate.png"
                    alt="Certificate Distribution"
                    className="w-8 h-8 mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">
                      Certificate Distribution
                    </h3>
                    <p className="mt-1 text-gray-400">
                      {" "}
                      We offer certificates to validate and recognize your
                      achievement.
                    </p>
                  </div>
                </div>
                <div className="flext items-start">
                  <img
                    src="/knowledge.png"
                    alt="Knowledge"
                    className="w-8 h-8 mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">
                      Certificate Distribution
                    </h3>
                    <p className="mt-1 text-gray-400">
                      We deliver transformative knowledge that empowers and
                      inspires.
                    </p>
                  </div>
                </div>
                <div className="flext items-start">
                  <img
                    src="/hands-on.png"
                    alt="Hands-on Experience"
                    className="w-8 h-8 mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">
                      Certificate Distribution
                    </h3>
                    <p className="mt-1 text-gray-400">
                      {" "}
                      We provide hands-on experience for real-world learning.
                      You learn best by doing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/dashboard-graphic.png"
                alt="Dashboard Graphic"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-black text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                <span className="text-green-500">
                  Empower your future <br />
                  with cutting-edge skills
                </span>
                <br />
                <span className="text-blue-500">
                  New, Embrace innovation, master technology, & shape the
                  digital world
                </span>
                <br />
                <span className="text-red-500">
                  Your journey to success starts here.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-gray-300 text-lg mb-8">
                Join our course with a proven track record of success, where
                learning isn’t just about gaining skills; it’s about growing
                them. Join us, learn with confidence, and watch your skills
                soar.
              </p>

              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Total Students
                  </span>
                  <p className="text-5xl font-bold mt-3">11</p>
                </div>

                <div className="text-center">
                  <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Placed Students
                  </span>
                  <p className="text-5xl font-bold mt-3">5</p>
                </div>

                <div className="text-center">
                  <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Unplaced Students
                  </span>
                  <p className="text-5xl font-bold mt-3">6</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
