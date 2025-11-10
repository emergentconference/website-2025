import gradient from "@/public/gradient.jpg";
import logoWordmark from "@/public/logo-wordmark.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-10 opacity-50">
        <Image src={gradient} alt="" fill className="object-cover" />
      </div>
      <div className="items-start px-4 mx-auto my-12 max-w-2xl space-y-4 border-black relative">
        <hr className="border-t-4 border-black" />
        <Image
          src={logoWordmark}
          alt="Emergent"
          width={2141}
          height={501}
          className="w-100"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit ante,
          lacinia ut sollicitudin id, sodales in eros. Mauris non augue
          placerat, ornare magna id, volutpat risus. Curabitur maximus, libero
          sit amet cursus finibus, sem purus pharetra velit, eget pretium risus
          enim et arcu. Nullam consequat, leo id dictum ultricies, libero quam
          semper libero, ac vulputate nunc ante eu ante. Aliquam erat volutpat.
        </p>
        <p>
          Etiam euismod velit faucibus ultricies blandit. Maecenas accumsan
          metus et eros placerat, eget ultricies lectus aliquet. Proin ut tellus
          fermentum, scelerisque erat in, rutrum tellus. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Cras eu magna dui. Vestibulum faucibus tortor sed pretium
          maximus. Donec bibendum elit et mauris posuere feugiat.
        </p>
      </div>
    </>
  );
}
