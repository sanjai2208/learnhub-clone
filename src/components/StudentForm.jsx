
const StudentForm = () => {
  return (
    <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-lime-400 mb-10">Fill This Form</h2>
        <form className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div>
                <label for="name" className="block text-lime-400 font-semibold mb-2">Name:</label>
                <input type="text" id="name" placeholder="Enter your name" className="w-full bg-white text-black rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"/>
            </div>
            <div>
                <label for="role" className="block text-lime-400 font-semibold mb-2">Role:</label>
                <input type="text" id="role" placeholder="Enter your role"
                className="w-full bg-white text-black rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"/>
            </div>
            <div>
                <label for="email" className="block text-lime-400 font-semibold mb-2">email:</label>
                <input type="email" id="email" placeholder="Enter your email"
                className="w-full bg-white text-black rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"/>
            </div>
            <div>
                <label for="phone" className="block text-lime-400 font-semibold mb-2">Phone Number:</label>
                <input type="tel" id="phone" placeholder="Enter your phone number"
                className="w-full bg-white text-black rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400"/>
            </div>
            <div>
                <label for="course" className="block text-lime-400 font-semibold mb-2">Course:</label>
                <select id="course" className="w-full bg-white text-black rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400">
                    <option value="Select a course">Select a course</option>
                    <option value="React Basics">React Basics</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="JavaScript Fundamentals">JavaScript Fundamentals</option>
                    <option value="Advanced CSS">Advanced CSS</option>
                    <option value="Backend Development">Backend Development</option>
                </select>
            </div>
            <div>
                <label for="status" className="block text-lime-400 font-semibold mb-2">Status:</label>
                <select id="status" className="w-full bg-white text-black rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-lime-400">
                    <option value="Unplaced">Unplaced</option>
                    <option value="Placed">Placed</option>
                </select>
            </div>

            <div className="md:col-span-2 justify-center">
                <button type="submit" className="border border-white text-white font-semibold py-2 px-10 rounded-full hover:bg-white hover:text-black transition">Submit</button>
            </div>
        </form>

    </section>
  )
}

export default StudentForm
