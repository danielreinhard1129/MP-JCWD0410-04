const NotFound = () => {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl px-4 py-8 flex justify-center">
        <img
          src="/404.webp"
          alt="404 Not Found"
          className="w-full max-w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default NotFound;
