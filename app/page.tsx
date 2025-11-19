import logoWordmark from "@/public/logo-wordmark.png";
import Image from "next/image";
import { teamMembers } from "./data/members";

export default function Home() {
  return (
    <div className="bg-[url('/gradient2.jpg')] bg-cover bg-center px-6 py-12 min-h-screen">
      <div className="space-y-12 mx-auto max-w-2xl border-black relative">
        <section className="space-y-4 border-t-4">
          <Image
            src={logoWordmark}
            alt="Emergent"
            width={2141}
            height={501}
            className="mt-4 w-80"
          />
          <p>
            Emergent is a student-run collective at Brown University connecting
            the next generation of tech entrepreneurs with industry leaders and
            innovators.
          </p>
          <p>
            We host events such as the annual{" "}
            <strong>Emergent Conference</strong>, where we invite industry
            leaders and innovators to speak to our community about new
            developments in AI, technology, and entrepreneurship.
          </p>
        </section>
        {/* <section className="space-y-4 border-t-2">
          <h1 className="mt-4 text-2xl font-semibold uppercase">Events</h1>
        </section> */}
        <section className="space-y-4 border-t-2">
          <h1 className="mt-4 text-2xl font-semibold uppercase">Our Team</h1>

          {teamMembers.map((yearTeam, index) => (
            <details
              key={`${yearTeam.year}`}
              open={index === 0}
              className="group"
            >
              <summary className="border rounded-sm cursor-pointer text-xl font-medium px-1 py-2 mb-2 flex justify-between items-center">
                <span className="text-xl">{yearTeam.year}</span>
                <span className="text-lg transition-transform group-open:rotate-180">
                  ▲
                </span>
              </summary>

              <div className="space-y-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {yearTeam.members.map((member) => (
                    <div
                      key={member.name}
                      className="flex gap-4 items-center bg-gray-100"
                    >
                      <div className="w-12 h-12 bg-gray-200 overflow-hidden relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={800}
                          height={800}
                          className="object-cover grayscale w-full h-full"
                        />
                      </div>
                      <h3 className="text-md">{member.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </section>
      </div>
    </div>
  );
}
