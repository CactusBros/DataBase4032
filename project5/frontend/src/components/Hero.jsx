const Hero = () => {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-center"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm " aria-hidden="true" />

      <div className="relative h-full flex items-center justify-center text-right">
        <h1 className="text-5xl font-iran md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300 p-6 rounded-2xl">
          سامانه غذایی دانشگاه هرمزگان
        </h1>
      </div>
    </section>
  );
};

export default Hero;