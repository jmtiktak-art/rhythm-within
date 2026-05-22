"use client";

import { useState } from "react";

const TALLY_URL = "https://tally.so/r/wz9qQ1";
const SUBSTACK_URL = "https://substack.com/@withinrhythm";
const EMAIL = "janne@rhythm-within.com";
const INSTAGRAM_URL = "https://www.instagram.com/jannetiktak";

const t = {
  en: {
    nav: { course: "Course", workshop: "Workshop", about: "About", lang: "NL" },
    hero: {
      headline: "Find your rhythm again.",
      sub: "For athletes and perfectionists who are done fighting their body.",
      body: "As a former track cyclist, I know what it's like to push your body to its limits — and then turn that same force against yourself. This is the way back.",
      cta: "Get the course →",
    },
    about: {
      title: "Hi, I'm Janne.",
      p1: "I raced track cycling at sprint level. I also spent years at war with my body — measuring worth in kilograms and performance, not in how I felt.",
      p2: "Athletes aren't supposed to talk about this. I did anyway. Three years in Asia studying yoga, meditation, and neuroscience later, I built Rhythm Within — for people who know what it means to be strong and quietly struggling at the same time.",
      p3: "I only work with people I'm genuinely behind. If this sounds like you, I think we'll be a good fit.",
      location: "Based between Europe and Southeast Asia. Fully remote.",
    },
    course: {
      tag: "Online course",
      title: "Back to Yourself",
      subtitle: "Terug naar jezelf",
      desc: "Three weeks. Yoga, meditation, and neuropsychology — all in your own time. No Zoom calls, no fixed schedule. Just 20–30 minutes a day that slowly shift how you relate to your body.",
      includes: "What's included",
      items: [
        "Weekly email with yoga video, meditation video, and workbook",
        "Insights from neuropsychology on the body–mind connection",
        "Fully self-paced — start the day you sign up",
        "Access to all materials indefinitely",
      ],
      price: "€79",
      cta: "Sign up and pay →",
      note: "Payment handled securely via Stripe.",
      testimonials: [
        {
          quote:
            "The perfect introductory step into meditation and yoga. Clear explanations and a good balance of tasks, video sessions, and content — without being overwhelming.",
          name: "Lisa",
        },
        {
          quote:
            "An oasis of calm, acceptance and love. The focus on building a loving relationship with your body really stayed with me.",
          name: "Fernando",
        },
      ],
    },
    workshop: {
      tag: "Workshop",
      title: "Dance Like Nobody's Watching",
      date: "July 3–5, 2026",
      location: "MadNes Festival",
      desc: "An energetic dance workshop at MadNes Festival. No experience needed — just curiosity. Body activation, group energy, and the kind of freedom that follows you for the rest of the weekend.",
      cta: "More info →",
    },
    substack: {
      tag: "Writing",
      title: "Within Rhythm",
      desc: "Essays on movement, body image, and what it actually takes to feel at home in yourself. Written for people who've been high-performing and quietly struggling.",
      cta: "Read on Substack →",
    },
    contact: {
      title: "Get in touch.",
      desc: "Questions about the course, a workshop, or something else — just send a message.",
    },
    footer: { tagline: "Rhythm Within" },
  },
  nl: {
    nav: { course: "Cursus", workshop: "Workshop", about: "Over mij", lang: "EN" },
    hero: {
      headline: "Kom terug naar jezelf.",
      sub: "Voor sporters en perfectionisten die klaar zijn met vechten tegen hun lichaam.",
      body: "Als voormalig baanwielrenster weet ik hoe het voelt om je lichaam tot het uiterste te drijven — en diezelfde kracht vervolgens tegen jezelf te keren. Dit is de weg terug.",
      cta: "Naar de cursus →",
    },
    about: {
      title: "Hoi, ik ben Janne.",
      p1: "Ik deed aan baanwielrennen op sprintniveau. En ik bracht jaren door in oorlog met mijn eigen lichaam — waarde afmeten aan kilo's en prestaties, niet aan hoe ik me voelde.",
      p2: "Sporters praten hier niet over. Ik deed het toch. Na drie jaar in Azië — yoga, meditatie en neurowetenschappen — bouwde ik Rhythm Within: voor mensen die weten hoe het is om sterk te zijn én stil te worstelen.",
      p3: "Ik werk alleen met mensen waarbij ik echt betrokken ben. Als dit klinkt als jij, denk ik dat we goed bij elkaar passen.",
      location: "Tussen Europa en Zuidoost-Azië. Volledig remote.",
    },
    course: {
      tag: "Online cursus",
      title: "Terug naar jezelf",
      subtitle: "Back to Yourself",
      desc: "Drie weken. Yoga, meditatie en neuropsychologie — in jouw eigen tempo. Geen Zoom-calls, geen vaste tijden. Gewoon 20–30 minuten per dag die langzaam veranderen hoe jij je tot je lichaam verhoudt.",
      includes: "Wat je krijgt",
      items: [
        "Wekelijkse e-mail met yogavideo, meditatie en werkboek",
        "Inzichten uit de neuropsychologie over de verbinding tussen lichaam en geest",
        "Volledig op eigen tempo — start op de dag dat je je inschrijft",
        "Onbeperkt toegang tot alle materialen",
      ],
      price: "€79",
      cta: "Inschrijven en betalen →",
      note: "Betaling via Stripe.",
      testimonials: [
        {
          quote:
            "De perfecte eerste stap in meditatie en yoga. Heldere uitleg en een goede balans tussen opdrachten, video's en inhoud — zonder overweldigend te zijn.",
          name: "Lisa",
        },
        {
          quote:
            "Een oase van rust, acceptatie en liefde. De focus op een liefdevolle relatie met je lichaam bleef echt bij me hangen.",
          name: "Fernando",
        },
      ],
    },
    workshop: {
      tag: "Workshop",
      title: "Dansen alsof niemand kijkt",
      date: "3–5 juli 2026",
      location: "MadNes Festival",
      desc: "Een energieke dansworkshop op MadNes Festival. Geen ervaring nodig — alleen nieuwsgierigheid. Lichaamsactivatie, groepsenergie en de vrijheid die je de rest van het weekend bijblijft.",
      cta: "Meer info →",
    },
    substack: {
      tag: "Schrijven",
      title: "Within Rhythm",
      desc: "Essays over beweging, lichaamsbeeld en wat het werkelijk vraagt om je thuis te voelen in jezelf. Geschreven voor mensen die toppresteerders zijn én stil worstelen.",
      cta: "Lees op Substack →",
    },
    contact: {
      title: "Neem contact op.",
      desc: "Vragen over de cursus, een workshop of iets anders — stuur gewoon een berichtje.",
    },
    footer: { tagline: "Rhythm Within" },
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "nl">("en");
  const copy = t[lang];

  return (
    <main className="bg-background text-foreground font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-foreground/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif italic text-accent text-lg">
            Rhythm Within
          </a>
          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <a href="#course" className="hidden sm:block hover:text-foreground transition-colors">
              {copy.nav.course}
            </a>
            <a href="#workshop" className="hidden sm:block hover:text-foreground transition-colors">
              {copy.nav.workshop}
            </a>
            <a href="#about" className="hidden sm:block hover:text-foreground transition-colors">
              {copy.nav.about}
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "nl" : "en")}
              className="text-xs px-2 py-1 rounded border border-foreground/20 hover:border-foreground/40 transition-colors"
            >
              {copy.nav.lang}
            </button>
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex bg-accent text-white text-sm px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              {copy.nav.course} →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 py-28 text-center">
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-foreground mb-6">
          {copy.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-4">{copy.hero.sub}</p>
        <p className="text-base text-foreground/55 leading-relaxed mb-12 max-w-lg mx-auto">
          {copy.hero.body}
        </p>
        <a
          href={TALLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-white text-base px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          {copy.hero.cta}
        </a>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 max-w-2xl mx-auto border-t border-foreground/10">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">{copy.about.title}</h2>
        <p className="text-lg leading-relaxed text-foreground/80 mb-4">{copy.about.p1}</p>
        <p className="text-lg leading-relaxed text-foreground/80 mb-4">{copy.about.p2}</p>
        <p className="font-serif italic text-foreground/55 text-base leading-relaxed mb-6">
          {copy.about.p3}
        </p>
        <p className="text-sm text-foreground/40">{copy.about.location}</p>
      </section>

      {/* Course */}
      <section id="course" className="px-6 py-24 max-w-5xl mx-auto border-t border-foreground/10">
        <span className="text-accent text-sm font-medium uppercase tracking-wide">
          {copy.course.tag}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-1">{copy.course.title}</h2>
        <p className="text-foreground/40 italic font-serif mb-8">{copy.course.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">{copy.course.desc}</p>
            <p className="text-sm font-medium text-foreground/50 uppercase tracking-wide mb-4">
              {copy.course.includes}
            </p>
            <ul className="space-y-3 mb-10">
              {copy.course.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-foreground/75 text-sm leading-relaxed">
                  <span className="text-accent mt-0.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 flex-wrap">
              <span className="font-serif text-3xl">{copy.course.price}</span>
              <a
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white text-base px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                {copy.course.cta}
              </a>
            </div>
            <p className="text-xs text-foreground/35 mt-3">{copy.course.note}</p>
          </div>
          <div className="space-y-6">
            {copy.course.testimonials.map(({ quote, name }) => (
              <div key={name} className="bg-foreground/4 rounded-2xl p-8">
                <p className="font-serif italic text-foreground/75 leading-relaxed mb-4">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="text-sm text-foreground/40">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section id="workshop" className="px-6 py-24 max-w-5xl mx-auto border-t border-foreground/10">
        <span className="text-accent text-sm font-medium uppercase tracking-wide">
          {copy.workshop.tag}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-2">{copy.workshop.title}</h2>
        <p className="text-foreground/50 text-sm mb-6">
          {copy.workshop.date} · {copy.workshop.location}
        </p>
        <p className="text-lg leading-relaxed text-foreground/80 max-w-xl mb-8">
          {copy.workshop.desc}
        </p>
        <a
          href="https://www.madnesfestival.nl/dance-nobodys-watching"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-accent text-accent text-base px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-colors"
        >
          {copy.workshop.cta}
        </a>
      </section>

      {/* Substack */}
      <section className="px-6 py-24 max-w-5xl mx-auto border-t border-foreground/10">
        <div className="bg-accent/8 rounded-3xl px-10 py-14 md:px-16 max-w-2xl">
          <span className="text-accent text-sm font-medium uppercase tracking-wide">
            {copy.substack.tag}
          </span>
          <h2 className="font-serif text-3xl mt-2 mb-4">{copy.substack.title}</h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">{copy.substack.desc}</p>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-accent text-accent text-base px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-colors"
          >
            {copy.substack.cta}
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 max-w-2xl mx-auto border-t border-foreground/10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">{copy.contact.title}</h2>
        <p className="text-lg text-foreground/70 mb-8">{copy.contact.desc}</p>
        <a href={`mailto:${EMAIL}`} className="text-accent hover:underline text-base">
          {EMAIL}
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-5xl mx-auto border-t border-foreground/10 flex items-center justify-between">
        <span className="font-serif italic text-accent">{copy.footer.tagline}</span>
        <div className="flex items-center gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </a>
          <span className="text-foreground/20">·</span>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/50 hover:text-foreground transition-colors"
          >
            Substack
          </a>
        </div>
      </footer>
    </main>
  );
}
