import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
const StudentCard = ({student }) => {
  const { deleteStudent } = useContext(StudentContext);
  const { id, name, role, email, phone, course, status } = student;
  const initial = name ? name.charAt(0).toUpperCase() : '?';
 
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col">
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 rounded-full bg-lime-300 flex items-center justify-center text-white text-xl font-bold`}
        >
          {initial}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold capitalize">{name}</h3>
        
        </div>
      </div>

      <div className="flex-grow space-y-2 text-gray-700">
        <p>
          <strong>Role:</strong>
          {role}
        </p>
        <p>
          <strong>Email:</strong>
          {email}
        </p>
        <p>
          <strong>Phone Number:</strong> {phone}
        </p>
        <p>
          <strong>Course:</strong> {course}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span
            className={
              status === "Placed"
                ? "text-green-600 font-semibold"
                : "text-red-600 font-semibold"
            }
          >
            {status}
          </span>
        </p>
      </div>

      <button
        onClick={() => deleteStudent(id)} 
        className="mt-4 bg-red-500 text-white p-1.5 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default StudentCard;
