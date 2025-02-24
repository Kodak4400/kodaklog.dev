export default function Footer() {
  return (
    <footer className="bg-white mt-auto py-6">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <p className="text-sm text-[#666666]">
          © {new Date().getFullYear()} Copyright kodak, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}