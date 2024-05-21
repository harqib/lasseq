import Image from "next/image";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-10">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> */}
      <div className="top-text">
        <h1>خلّيك على القرص</h1>
      </div>

      <Image
        src="${basePath}/lasseq_logo.gif" 
        alt="Lasseq Tech Logo"
        width={400} 
        height={300} 
        className="logo" 
        unoptimized
      />

      <div className="bottom-text">
        <p>COMING SOON</p>
      </div>

      
    </main>
  );
}
