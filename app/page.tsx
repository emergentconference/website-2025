import gradient from "@/public/gradient.jpg";
import logoWordmark from "@/public/logo-wordmark.png";
import Image from "next/image";
import { teamMembers } from "./data/members";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image src={gradient} alt="" fill className="object-cover" />
      </div>
      <div className="space-y-12 px-4 mx-auto my-12 max-w-2xl border-black relative">
        <section className="space-y-4 border-t-4">
          <Image
            src={logoWordmark}
            alt="Emergent"
            width={2141}
            height={501}
            className="mt-4 w-80"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            ante, lacinia ut sollicitudin id, sodales in eros. Mauris non augue
            placerat, ornare magna id, volutpat risus. Curabitur maximus, libero
            sit amet cursus finibus, sem purus pharetra velit, eget pretium
            risus enim et arcu. Nullam consequat, leo id dictum ultricies,
            libero quam semper libero, ac vulputate nunc ante eu ante. Aliquam
            erat volutpat.
          </p>
          <p>
            Etiam euismod velit faucibus ultricies blandit. Maecenas accumsan
            metus et eros placerat, eget ultricies lectus aliquet. Proin ut
            tellus fermentum, scelerisque erat in, rutrum tellus. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Cras eu magna dui. Vestibulum faucibus tortor sed pretium
            maximus. Donec bibendum elit et mauris posuere feugiat.
          </p>
        </section>
        <section className="space-y-4 border-t-2">
          <h1 className="mt-4 text-2xl font-semibold uppercase">Our Members</h1>

          {teamMembers.map((yearTeam, index) => (
            <details
              key={`${yearTeam.year}`}
              open={index === 0}
              className="group"
            >
              <summary className="border rounded-sm cursor-pointer text-xl font-medium px-1 py-2 mb-2 flex justify-between items-center">
                <span className="text-xl">
                  {yearTeam.year - 1}&ndash;{yearTeam.year.toString().slice(-2)}
                </span>
                <span className="text-lg transition-transform group-open:rotate-180">
                  ▲
                </span>
              </summary>

              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-2">
                  {yearTeam.members.map((member) => (
                    <div
                      key={member.name}
                      className="flex gap-4 items-center bg-gray-100"
                    >
                      <div className="w-16 h-16 bg-gray-200 overflow-hidden relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={800}
                          height={800}
                          className="object-cover grayscale w-full h-full"
                        />
                      </div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </section>
      </div>
    </>
  );
}
