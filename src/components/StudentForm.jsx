import React, { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentForm = () => {
  const { addStudent } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    course: "",
    status: "Unplaced",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return alert("Name is required!");

    addStudent(formData);
  
    setFormData({
      name: "",
      role: "",
      email: "",
      phone: "",
      course: "",
      status: "Unplaced",
    });
  };
  
  return (
    <section className=" bg-black min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full pt-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-lime-300 mb-10">
          Fill This Form
        </h2>
        
        <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-lime-300 font-extrabold mb-2 text-2xl md:text-3xl"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="text-black w-full px-4 py-5 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-lime-400"
            />
          </div>
          
          <div className="w-full">
            <label
              htmlFor="role"
              className="block text-lime-300 font-extrabold mb-2 text-2xl md:text-3xl"
            >
              Role:
            </label>
            <input
              type="text"
              id="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Enter your role"
              className="text-black w-full px-4 py-5 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-lime-300"
            />
          </div>
          
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-lime-300 font-extrabold mb-2 text-2xl md:text-3xl"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="text-black w-full px-4 py-5 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-lime-300"
            />
          </div>
          
          <div className="w-full">
            <label
              htmlFor="phone"
              className="block text-lime-300 font-extrabold mb-2 text-2xl md:text-3xl"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="text-black w-full px-4 py-5 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-lime-400"
            />
          </div>
          
          <div className="w-full">
            <label
              htmlFor="course"
              className="block text-lime-400 font-extrabold mb-2 text-2xl md:text-3xl"
            >
              Course:
            </label>
            <select
              id="course"
              value={formData.course}
              onChange={handleChange}
              className="text-black w-full px-4 py-5 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-lime-400"
            >
              <option value="">Select a course</option>
              <option>React Basics</option>
              <option>UI/UX Design</option>
              <option>JavaScript Fundamentals</option>
              <option>Advanced CSS</option>
              <option>Backend Development</option>
            </select>
          </div>
          
          <div className="w-full">
            <label
              htmlFor="status"
              className="block text-lime-300 font-extrabold mb-2 text-2xl md:text-3xl"
            >
              Status:
            </label>
            <select
              id="status"
              value={formData.status}
              onChange={handleChange}
              className="text-black w-full px-4 py-5 bg-gray-100 border-b border-gray-600 rounded-lg focus:outline-none focus:border-lime-400"
            >
              <option>Unplaced</option>
              <option>Placed</option>
            </select>
          </div>

          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="border border-white text-white font-semibold py-3 px-12 rounded-full hover:bg-lime-300 hover:text-black transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StudentForm;
