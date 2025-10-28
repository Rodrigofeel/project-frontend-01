import Image from "next/image"
import imgprinc from '../../../public/img-home.jpg'

export default function HomeSection() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
        <div>
            <Image
            src={imgprinc}
            alt="Banner do site"
            width={1287}
            height={700}
            priority
            />
        </div>


    </section>
  );
}
