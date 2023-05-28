import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const Hero = ():JSX.Element => {
    return (
      <>
        <div className="hero min-h-screen bg-white">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Medical Despenser</h1>
              <p className="py-6">
        
              </p>
              <Link href={"/days"}><button className="btn btn-primary w-32">Set</button></Link>
              <button className="btn btn-primary ml-6 w-32">Status</button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <Hero/>
    </main>
  );
}
