import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section>
      <Navbar/>
      <div className="bg-[url('/images/hero.jpg')] bg-no-repeat w-100% h-[75vh] flex items-center justify-center">
        <h1 className="bg-amber-100/80 text-8xl text-blue-900 p-6 rounded-4xl">
          Project Number One
        </h1>
      </div>
    </section>
  );
};

export default Hero;
