import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you`re looking for doesn`t exist.
      </p>
      <Link
        href="/"
        className="bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-700 transition"
      >
        Go Back Home
      </Link>
      <div className="mt-10">
        <img
          src="https://via.placeholder.com/400x300"
          alt="Not Found Illustration"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
