import React from 'react'

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-white">LearnHub</h1>
        <a href="#" className="text-gray-300 hover:text-white border border-gray-600 px-4 py-2 rounded-md transition">
          Admin
        </a>
      </div>
    </header>
    
  )
}

export default Header
