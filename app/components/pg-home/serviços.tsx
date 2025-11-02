export default function ServicoSection() {

    return(
        <section className="bg-[#fff7ef] w-full relative z-50 mt-[-90px] h-[300vh] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.9)] px-6 py-12">

                <h1 className="text-center text-3xl md:text-4xl font-bold text-[#2a5238] mb-12">Tudo o Que Preparamos Para Você</h1>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto h-[150vh] bg-[#5C5032]">

                 <div className=" rounded-xl p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                     <h2>Refeiçao sob demanda</h2>
                 </div>
                 <div>
                     <h2>Suporte geral</h2>
                </div>
                <div>
                     <h2>Terapias naturais</h2>
                </div>

            </div>
        </section>
    )
}
