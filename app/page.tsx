import imgDisruptPrize from "@/public/events/conf2025/disrupt_prize.jpg";
import imgKeynote from "@/public/events/conf2025/keynote.jpg";
import imgNetworking from "@/public/events/conf2025/networking.jpg";
import imgPanelAudience from "@/public/events/conf2025/panel_audience.jpg";
import imgPanelSpeakers from "@/public/events/conf2025/panel_speakers.jpg";
import logoWordmark from "@/public/logo-wordmark.png";
import Image from "next/image";
import { EventCard } from "./components/EventCard";
import { teamMembers } from "./data/members";

export default function Home() {
  return (
    <div className="bg-[url('/gradient2.jpg')] bg-cover bg-center px-6 py-12 min-h-screen">
      <div className="space-y-12 mx-auto max-w-2xl border-black relative">
        {/* About */}
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

        {/* Events */}
        <section className="space-y-4 border-t-2">
          <h1 className="mt-4 text-2xl font-semibold uppercase">Events</h1>

          <EventCard
            title="Emergent Conference 2025"
            date="April 19, 2025"
            description={
              <p>
                The inaugural Emergent Conference brought together{" "}
                <b>300 attendees</b> from Brown and other universities across
                the Northeast. We hosted speakers from{" "}
                <b>OpenAI, Nvidia, Anthropic, Google, AWS</b>, and 10 startups
                from the Brown ecosystem and beyond. The day also featured
                Emergent&rsquo;s <b>Disrupt Challenge</b>, where attendees
                competed for <b>$10,000 in prizes</b> by developing and pitching
                AI-enabled startup ideas.
              </p>
            }
            images={[
              imgKeynote,
              imgNetworking,
              imgPanelAudience,
              imgPanelSpeakers,
              imgDisruptPrize,
            ]}
            speakers={[
              { name: "OpenAI", src: "/logos/openai.png" },
              { name: "Google", src: "/logos/google.png" },
              { name: "Nvidia", src: "/logos/nvidia.png" },
              { name: "Anthropic", src: "/logos/anthropic.png" },
              { name: "AWS", src: "/logos/aws.png" },
              { name: "Clay", src: "/logos/clay.png" },
              { name: "Bunkerhill", src: "/logos/bunkerhill.png" },
              { name: "Syncopate", src: "/logos/syncopate.png" },
              { name: "Down Dog", src: "/logos/down_dog.png" },
              { name: "Valo", src: "/logos/valo.png" },
              { name: "Doorstep", src: "/logos/doorstep.png" },
              { name: "Kyron", src: "/logos/kyron.png" },
              { name: "Vapi", src: "/logos/vapi.png" },
              { name: "Volley", src: "/logos/volley.png" },
              { name: "Conway", src: "/logos/conway.png" },
            ]}
            sponsors={[
              { name: "Vapi", src: "/logos/vapi.png" },
              { name: "Wayo", src: "/logos/wayo.png" },
              { name: "Nelson Center", src: "/logos/nelson.png" },
            ]}
            featuredEvent={true}
          />
        </section>

        {/* Team */}
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
                      <div className="shrink-0 w-12 h-12 bg-gray-200 overflow-hidden relative">
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
