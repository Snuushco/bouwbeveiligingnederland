import Link from "next/link";

const sectors = [
  {
    title: "Bouwplaatsbeveiliging",
    description:
      "Beveiliging voor bouwplaatsen en projecten in heel Nederland.",
    url: "/diensten/bouwplaatsbeveiliging",
    current: true,
    features: [
      "Bouwplaatsbeveiliging",
      "Materieelbescherming",
      "Toegangscontrole",
      "Surveillance",
    ],
  },
  {
    title: "Zorgbewaking",
    description:
      "Professionele beveiliging voor zorginstellingen in Limburg en Nederland.",
    url: "https://zorgbewaking.nl",
    current: false,
    features: [
      "Vaste beveiligers",
      "Zorginzicht",
      "Discrete aanpak",
      "24/7 beschikbaarheid",
    ],
  },
  {
    title: "Evenementenbeveiliging",
    description: "Beveiliging voor evenementen, festivals en bijeenkomsten.",
    url: "#",
    current: false,
    features: [
      "Crowd management",
      "Toegangscontrole",
      "Incidentenbeheer",
      "Flexibele inzet",
    ],
  },
  {
    title: "Objectbeveiliging",
    description: "Beveiliging voor kantoren, bedrijfspanden en objecten.",
    url: "#",
    current: false,
    features: ["Receptie", "Toegangscontrole", "Surveillance", "Noodhulp"],
  },
  {
    title: "Industriële beveiliging",
    description: "Beveiliging voor fabrieken en industriële locaties.",
    url: "#",
    current: false,
    features: [
      "Perimetertoegang",
      "Brandpreventie",
      "Veiligheidscontroles",
      "Noodprocedures",
    ],
  },
  {
    title: "Logistieke beveiliging",
    description:
      "Beveiliging voor logistieke centra, magazijnen en distributie.",
    url: "#",
    current: false,
    features: [
      "Magazijnbeveiliging",
      "Transportbegeleiding",
      "Goederencontrole",
      "Perimetertoegang",
    ],
  },
];

export default function DienstenPage() {
  return (
    <div className="bg-navy-950">
      <section className="relative overflow-hidden border-b border-navy-700 pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#253256_0%,#0a0e1a_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Diensten & sectoren
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
            Praesidion Security B.V. levert beveiliging voor elke sector
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-gray-300">
            Bouwbeveiliging Nederland is onze specialisatie voor bouwprojecten. Daarnaast
            ondersteunen we organisaties in zorg, logistiek, industrie en evenementen.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
        {sectors.map((sector, index) => (
          <Link
            key={index}
            href={sector.url}
            target={sector.current ? undefined : "_blank"}
            rel={sector.current ? undefined : "noopener noreferrer"}
            className={`group rounded-2xl border p-6 transition-all duration-300 ${
              sector.current
                ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/10"
                : "border-navy-700 bg-navy-900 hover:-translate-y-1 hover:border-orange-400/60"
            }`}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-white">{sector.title}</h2>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                  sector.current
                    ? "bg-orange-500 text-white"
                    : "bg-navy-700 text-gray-200 group-hover:bg-orange-500 group-hover:text-white"
                }`}
              >
                {sector.current ? "Actief" : "Meer info"}
              </span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-gray-300">{sector.description}</p>
            <ul className="space-y-2">
              {sector.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-200">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </section>

      <section className="border-t border-navy-700 bg-navy-900/70 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Direct weten wat bij uw project past?</h3>
            <p className="mt-2 text-gray-300">We adviseren u vrijblijvend over de beste beveiligingsmix.</p>
          </div>
          <Link
            href="/#contact"
            className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Vraag advies aan
          </Link>
        </div>
      </section>
    </div>
  );
}
