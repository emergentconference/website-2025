import imgDisruptPrize from "@/public/events/conf2025/disrupt_prize.jpg";
import imgKeynote from "@/public/events/conf2025/keynote.jpg";
import imgNetworking from "@/public/events/conf2025/networking.jpg";
import imgPanelAudience from "@/public/events/conf2025/panel_audience.jpg";
import imgPanelSpeakers from "@/public/events/conf2025/panel_speakers.jpg";
import imgEtched from "@/public/events/etched/etched.jpg";
import imgEtchedThankYou from "@/public/events/etched/thank_you.jpg";
import imgPearAudience from "@/public/events/pearvc/audience.jpg";
import imgPearGroup from "@/public/events/pearvc/group.jpg";
import imgPearNetworking from "@/public/events/pearvc/networking.jpg";
import imgPearPres from "@/public/events/pearvc/pres.jpg";
import imgVcAudience from "@/public/events/vcpanel/audience.jpeg";
import imgVcAudience2 from "@/public/events/vcpanel/audience2.jpeg";
import imgVcNetworking from "@/public/events/vcpanel/networking.jpeg";
import imgVcNetworking2 from "@/public/events/vcpanel/networking2.jpeg";
import imgVcPanel from "@/public/events/vcpanel/panel.jpeg";
import logoWordmark from "@/public/logo-wordmark.png";
import Image from "next/image";
import { EventCard } from "./components/EventCard";
import { Separator } from "./components/Separator";
import { teamMembers } from "./data/members";

export default function Home() {
  return (
    <div className="bg-[url('/gradient2.jpg')] bg-cover bg-center px-6 py-12 min-h-screen">
      <div className="space-y-12 mx-auto max-w-2xl border-black relative">
        {/* About */}
        <section className="space-y-4 border-t-4">
          <Image src={logoWordmark} alt="Emergent" className="mt-4 w-80" />
          <p>
            Emergent is a student-run collective at Brown University that{" "}
            <b>empowers the next generation of tech entrepreneurs</b> by
            connecting them with the people building today&rsquo;s most
            innovative technologies.
          </p>
          <p>
            We host events such as the annual <b>Emergent Conference</b>, which
            brings together industry leaders and entrepreneurs to speak to our
            community about new developments in AI, technology, and startups.
          </p>
        </section>

        {/* Impact */}
        <section className="space-y-4 border-t-2">
          <h1 className="mt-4 text-2xl font-semibold uppercase">
            Why Emergent?
          </h1>
          {(() => {
            const impactData = [
              {
                number: "500+",
                description: "Attendees from Brown and beyond",
              },
              {
                number: "25+",
                description: "Industry speakers & Startups",
              },
              {
                number: "$10,000",
                description: "Awarded in Disrupt Challenge prizes",
              },
            ];
            return (
              <div className="flex flex-col sm:flex-row justify-between items-stretch gap-2 sm:gap-6 my-6">
                {impactData.map((item, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-white/80 rounded-lg p-2 sm:p-6 flex flex-col items-center shadow"
                  >
                    <span className="text-3xl sm:text-4xl font-bold text-blue-600">
                      {item.number}
                    </span>
                    <span className="mt-2 text-lg text-gray-700 text-center">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            );
          })()}
          <p>
            We believe that the best way to shape the future of technology is to{" "}
            <b>empower students today</b>—not just with knowledge, but with
            direct access to the innovators, resources, and community they need
            to <b>build it themselves</b>.
          </p>
          <p>
            That&rsquo;s why, in just three months from January&ndash;April
            2025, our eight-member team organized a brand-new{" "}
            <b>300-person AI startup conference</b>: the first of its kind at
            Brown. The conference connected students across the Northeast with
            startup founders, venture capitalists, and AI research innovators.
          </p>
          <p>
            The conference was a massive success: one panelist{" "}
            <b>hired several attendees</b> to join her startup, two of whom{" "}
            <b>dropped out of Yale</b> to work there full-time.
          </p>
          <p>
            Since the conference, Emergent&rsquo;s impact has only grown as
            we&rsquo;ve hosted <b>three more events</b> on startups and venture
            capital, which were attended by over 200 students. Now, we&rsquo;re
            gearing up for our biggest event yet:{" "}
            <b>Emergent Conference 2026</b>, which will take place on
            Brown&rsquo;s campus in April.
          </p>

          <Separator />

          <h2 className="text-xl font-semibold tracking-tight">
            Want to get involved?
          </h2>
          <p>
            Speaking at or sponsoring Emergent events can help you reach a
            community of <b>hundreds of students</b> at Brown and across the
            Northeast who are excited about creating the future of technology.
          </p>
          <ul className="list-disc list-outside pl-8 space-y-4">
            <li>
              <b>Founders</b> have hired attendees at Emergent events to join
              their startups
            </li>
            <li>
              <b>VCs</b> have collaborated with us to host office hours, making
              connections within Brown&rsquo;s startup ecosystem before founders
              need to raise their first round
            </li>
            <li>
              <b>Brand sponsors</b> have promoted their products and recruited
              students at Emergent events
            </li>
          </ul>
          <p>
            We&rsquo;d love to collaborate. Drop us a line at{" "}
            <a
              href="mailto:info@emergentaiconference.com"
              className="text-blue-600"
            >
              info@emergentaiconference.com
            </a>
            .
          </p>
        </section>

        {/* Events */}
        <section className="space-y-4 border-t-2">
          <h1 className="mt-4 text-2xl font-semibold uppercase">Past Events</h1>

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

          <Separator />

          <EventCard
            title="Venture Capital Panel & Office Hours"
            date="November 13, 2025"
            description={
              <>
                <p>
                  Emergent hosted a VC panel around <b>careers</b> and the{" "}
                  <b>current state of venture capital</b>, in collaboration with
                  Brown&rsquo;s Nelson Center for Entrepreneurship. The panel
                  also discussed various approaches to leveraging <b>AI</b> in
                  the venture industry, as well as how individual VCs make
                  investments and differentiate themselves.
                </p>
                <p>
                  After the panel, Emergent teamed up with Adam Fikry, partner
                  at <b>Genesis Fund</b>, to host <b>office hours</b> for 10
                  student-run startups at Brown.
                </p>
              </>
            }
            images={[
              imgVcPanel,
              imgVcAudience,
              imgVcNetworking,
              imgVcAudience2,
              imgVcNetworking2,
            ]}
            speakers={[
              {
                name: "Genesis Fund",
                src: "/logos/genesis_fund.png",
              },
              {
                name: "Shakti",
                src: "/logos/shakti.png",
              },
              {
                name: "Cherrystone Angel Group",
                src: "/logos/cherrystone.png",
              },
              {
                name: "Propeller Ventures",
                src: "/logos/propeller_ventures.png",
              },
              {
                name: "Clean Energy Venture Group",
                src: "/logos/cevg.png",
              },
            ]}
            featuredEvent={false}
          />
          <EventCard
            title="Emergent x PearVC Info Session"
            date="September 15, 2025"
            description={
              <>
                <p>
                  Emergent hosted <b>PearVC partner</b> Harris Stolzenberg for a
                  talk, networking session, and 1:1 office hours on the inner
                  workings of <b>venture capital</b> and the current state of AI
                  startups. Harris also gave insights into Pear&rsquo;s startup
                  accelerator program <b>PearX</b>, which provides funding,
                  mentorship, and resources to early-stage startups.
                </p>
                <p>
                  Hosted as a collaboration between Emergent and Pear venture
                  fellow Everest Yang, this event drew over <b>80 attendees</b>:
                  the largest group that PearVC addressed during its East Coast
                  campus visits in 2025.
                </p>
              </>
            }
            images={[
              imgPearGroup,
              imgPearNetworking,
              imgPearPres,
              imgPearAudience,
            ]}
            speakers={[{ name: "Etched", src: "/logos/pearvc.png" }]}
            featuredEvent={false}
          />
          <EventCard
            title="Emergent x Etched Startup Talk"
            date="May 5, 2025"
            description={
              <p>
                Emergent hosted Carter Wilcox and Quinn McIntyre of Series A
                hardware startup <b>Etched</b> for an <b>off-the-record talk</b>{" "}
                on the future of AI, the next order-of-magnitude improvement in
                chip performance, and how students can become involved with the
                startup world.
              </p>
            }
            images={[imgEtched, imgEtchedThankYou]}
            speakers={[{ name: "Etched", src: "/logos/etched.png" }]}
            featuredEvent={false}
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

        {/* Footer */}
        <footer className="space-y-4 border-t-2">
          <h1 className="mt-4 text-xl font-semibold uppercase">
            More of Emergent...
          </h1>
          {(() => {
            const links = [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/emergent-con/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/emergentconference/",
              },
              {
                label: "Email",
                href: "mailto:info@emergentaiconference.com",
              },
            ];
            return (
              <ul className="list-disc list-outside pl-8">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            );
          })()}
        </footer>
      </div>
    </div>
  );
}
