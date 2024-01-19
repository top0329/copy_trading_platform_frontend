export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-[20px] text-white">
      <h1 className="mb-[25px] text-4xl font-bold">404</h1>
      <h2 className="mb-[20px] text-2xl font-semibold">Page not found</h2>
      <p className="text-[#ccc] mb-[21px] text-[21px]">
        We&apos;re sorry but the page you were looking for does not exist.
      </p>
    </div>
  );
}
