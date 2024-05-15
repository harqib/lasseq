import Image from "next/image";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-10">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> */}
      <div className="top-text">
        <h1>خلّيك على القرص</h1>
      </div>

      <img
        src="lasseq_logo.gif" // Replace with your logo's path
        alt="Lasseq Tech Logo" // Descriptive alternative text
        width={200} // Adjust width as needed
        height={100} // Adjust height as needed
        className="logo" // Optional class for styling
      />

      <div className="bottom-text">
        <p>COMING SOON</p>
      </div>

      
    </main>
  );
}
