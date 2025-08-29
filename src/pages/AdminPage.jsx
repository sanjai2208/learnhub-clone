
import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StudentForm from '../components/StudentForm';
import StudentCard from '../components/StudentCard';

const AdminPage = () => {
  const { students } = useContext(StudentContext);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-6 pt-16">
        <StudentForm/>
        <div className="mt-8 md:mt-[-300px] lg:mt-[-300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
