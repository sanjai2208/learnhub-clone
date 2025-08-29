
import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const localData = localStorage.getItem('students');
    return localData ? JSON.parse(localData) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (studentData) => {
    setStudents([...students, { id: uuidv4(), ...studentData }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
