import Image from "next/image"
import imgprinc from '../../public/img-home.jpg'


export default function Hero() {


    return (
        <section className=" min-h-screen relative overflow-hidden ">

            <div className="fixed top-[-10vh] h-[120vh] w-full">
                <div className='relative w-full h-full'>
                <Image
                    src={imgprinc}
                    alt="Banner do site"
                    fill
                    className="object-cover brightness-70"
                    priority
                />
                </div>
            </div>

            <div   className=" text-[#fff7ef] relative flex flex-col items-center justify-center h-full mt-64 z-10 px-4 text-center">
                <h1 className="text-5xl font-bold force-inter mb-4">Bem-vindo à Roots</h1>
                <p className="text-lg mb-8">Chalés e natureza em perfeita harmonia.</p>
                <button className="cursor-pointer bg-[#93804f]  text- px-6 py-3 rounded-xl hover:bg-[#5C5032] transition ">Reservar</button>
            </div>
        </section>
    )
}
