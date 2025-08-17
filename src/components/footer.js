const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <h4 className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
  