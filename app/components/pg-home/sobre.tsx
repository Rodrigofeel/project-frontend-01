'use client';

 export default function HomeSection() {
  return (
    <section
// ref={sectionRef}
      className="w-full min-h-[90vh] py-24 bg-[#fff7ef] px-6 relative overflow-hidden ">

 {/* <motion.div
        style={{ y: bgLayer1Y }}
        className="absolute top-10 -left-16 w-72 h-72 rounded-full -z-10"
        aria-hidden="true"
      /> */}

      <div className="max-w-3xl mx-10 ">
        <p className="px-6 md:px-20 text-lg">O que fazemos</p>
        <h1 className="text-4xl md:text-4xl mb-8 text-left force-inter px-6 md:px-20 text-[#211105">
          A Roots oferece chalés integrados à natureza, proporcionando momentos
          de descanso e reconexão com o meio ambiente. Cada detalhe é pensado para
          unir conforto e harmonia natural.
        </h1>
      </div>
    </section>
  );
}
