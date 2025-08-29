import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-8 mt-16 border-t border-gray-700 bg-black text-white">
      <div className="container mx-auto text-center text-gray-400">
        <h2 className="text-3xl font-extrabold text-lime-300 mb-2">LearnHub</h2>
        <p>© 2024 LearnHub Labs Inc. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link to="/form">
            <p className="hover:text-white">Form</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;