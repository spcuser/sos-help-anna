import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import foto1 from "../assets/foto-1.jpg.asset.json";
import foto2 from "../assets/foto-2.jpg.asset.json";
import foto3 from "../assets/foto-3.jpg.asset.json";
import foto4 from "../assets/foto-4.jpg.asset.json";
import foto5 from "../assets/foto-5.jpg.asset.json";
import foto6 from "../assets/foto-6.jpg.asset.json";

const fotos = [
  { url: foto2.url, alt: "Anna y su hija en el columpio" },
  { url: foto3.url, alt: "La niña con su peluche" },
  { url: foto4.url, alt: "Anna sonriendo" },
  { url: foto5.url, alt: "La niña recién nacida en el hospital" },
  { url: foto6.url, alt: "Anna en un momento difícil" },
  { url: foto1.url, alt: "Anna abrazando a su hija" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayuda a Anna y su hija / Help Anna and her daughter" },
      {
        name: "description",
        content:
          "Anna y su hija de 4 años lo han perdido todo. Ayúdales a tener un techo con una donación en GoFundMe.",
      },
      { property: "og:title", content: "Ayuda a Anna y su hija" },
      {
        property: "og:description",
        content:
          "Una madre y su hija de 4 años lo han perdido todo. Tu ayuda puede darles un techo hoy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxDy3RpfSVjFOUf2lkaH6c9kULpb01W1ayuaMV7i08YZ3Wh7xF9z1BbFjGG8vmwAwQE/exec";

const GOFUNDME_URL = "https://gofund.me/736624632";

type Lang = "es" | "en";

const i18n = {
  es: {
    urgencia:
      "🚨 Anna y su hija de 4 años necesitan un techo <strong>hoy</strong>, no la semana que viene.",
    heroTitle:
      "Anna solo pide un techo para su hija de 4 años. Tú puedes dárselo.",
    heroSub:
      "Una madre que lo perdió todo intenta reconstruir un hogar para ella y su niña, que vive con una enfermedad que exige cuidados constantes.",
    heroFotoPlaceholder:
      "[ FOTO PRINCIPAL: Anna abrazando a su hija — se incrusta aquí ]",
    btnDonarHero: "Donar ahora en GoFundMe",
    heroNota:
      "100% de tu donación va directo a la campaña verificada de GoFundMe",
    historiaTitle: "Esta es la historia de Anna",
    historiaP1:
      "Hace no mucho, Anna tenía una vida sencilla pero estable. Trabajaba de cajera, hasta que el acoso de su jefe la obligó a dejarlo. Con sus pocos ahorros abrió una pequeña tienda de cosmética: su forma de darle a su hija —una niña de 4 años con esclerosis cerebral congénita, que necesita cuidados constantes por su discapacidad intelectual— un futuro más seguro.",
    historiaP2:
      "Entonces todo se derrumbó. Su expareja incendió la tienda y destruyó cada euro que Anna había invertido. Poco después, vació su cuenta bancaria y desapareció, dejándolas sin nada.",
    historiaP3:
      "Sin recursos para pagar el alquiler, Anna y su hija fueron desalojadas. Hoy no tienen un hogar estable y viven en una situación de extrema vulnerabilidad.",
    historiaP4:
      "Anna no pide lujos. Pide una oportunidad para volver a levantarse: un cuarto donde dormir, cubrir lo básico, y pagar un cuidado para su hija mientras busca trabajo y recupera su independencia.",
    historiaP5:
      "<strong>Cada donación, por pequeña que sea, las acerca un paso más a la seguridad, la estabilidad y la esperanza.</strong> Y si no puedes donar, compartir esta campaña también puede cambiarlo todo.",
    historiaP6: "Gracias de corazón por ayudarlas a creer en un nuevo comienzo.",
    galeriaTitle: "Anna y su hija, antes de que todo se derrumbara",
    foto1: "FOTO: jugando en el columpio",
    foto2: "FOTO: la niña con su peluche",
    foto3: "FOTO: Anna sonriendo",
    foto4: "FOTO: la niña recién nacida en el hospital",
    foto5: "FOTO: Anna, momento difícil",
    foto6: "FOTO adicional",
    ctaMediaTitle: "No necesitas dar mucho. Necesitas dar ahora.",
    ctaMediaP:
      "Cada día sin un techo estable es un día más de riesgo para Anna y su hija. Tu ayuda, sea la que sea, cuenta desde ya.",
    btnDonarMedia: "Quiero donar ahora",
    emailTitle: "Sigue la historia de Anna",
    emailP:
      "Déjanos tu email si quieres recibir noticias sobre cómo evoluciona esta campaña y en qué se está usando cada donación.",
    inputNombrePlaceholder: "Tu nombre (opcional)",
    inputEmailPlaceholder: "Tu email",
    btnEmailSubmit: "Quiero recibir actualizaciones",
    cierreTitle: "Anna y su hija todavía están esperando",
    cierreP:
      "Tú puedes ser la razón por la que hoy duerman un poco más tranquilas.",
    btnDonarCierre: "Donar en GoFundMe",
    footerText:
      'Esta página comparte y apoya la campaña de GoFundMe "Help Anna and her 4-year-old daughter get off the streets". No está afiliada a GoFundMe.',
    msgInvalidEmail: "Por favor, escribe un email válido.",
    msgSending: "Enviando...",
    msgThanks: "¡Gracias! Te mantendremos al tanto.",
    msgError: "Hubo un problema al enviar. Inténtalo de nuevo.",
    btnCompartir: "Compartir",
    msgLinkCopied: "Enlace copiado al portapapeles. ¡Compártelo!",
    shareTitle: "Ayuda a Anna y su hija",
    shareText:
      "Anna y su hija de 4 años lo han perdido todo. Ayúdales a tener un techo.",
  },
  en: {
    urgencia:
      "🚨 Anna and her 4-year-old daughter need a roof <strong>today</strong> — not next week.",
    heroTitle:
      "Anna is only asking for a roof over her 4-year-old daughter's head. You can give her that.",
    heroSub:
      "A mother who lost everything is trying to rebuild a home for herself and her little girl, who lives with a condition that requires constant care.",
    heroFotoPlaceholder:
      "[ MAIN PHOTO: Anna hugging her daughter — will be placed here ]",
    btnDonarHero: "Donate now on GoFundMe",
    heroNota:
      "100% of your donation goes directly to the verified GoFundMe campaign",
    historiaTitle: "This is Anna's story",
    historiaP1:
      "Not long ago, Anna had a simple but stable life. She worked as a cashier until harassment from her boss forced her to quit. With her modest savings, she opened a small cosmetics shop — her way of giving her daughter, a 4-year-old girl with congenital cerebral sclerosis who needs constant care due to her intellectual disability, a more secure future.",
    historiaP2:
      "Then everything fell apart. Her ex-partner set fire to the shop, destroying every euro she had invested. Shortly after, he emptied their bank account and disappeared, leaving them with nothing.",
    historiaP3:
      "With no money to pay rent, Anna and her daughter were evicted. Today they don't have a stable home and live in extreme vulnerability.",
    historiaP4:
      "Anna isn't asking for luxuries. She's asking for a chance to get back on her feet: a room to sleep in, help covering basic needs, and support for childcare so she can find a job and regain her independence.",
    historiaP5:
      "<strong>Every donation, no matter how small, brings them one step closer to safety, stability, and hope.</strong> And if you can't donate, sharing this campaign can make all the difference too.",
    historiaP6:
      "Thank you from the bottom of our hearts for helping them believe in a new beginning.",
    galeriaTitle: "Anna and her daughter, before everything fell apart",
    foto1: "PHOTO: playing on the swing",
    foto2: "PHOTO: the girl with her stuffed toy",
    foto3: "PHOTO: Anna smiling",
    foto4: "PHOTO: the girl as a newborn in hospital",
    foto5: "PHOTO: Anna, a hard moment",
    foto6: "Additional photo",
    ctaMediaTitle: "You don't need to give much. You need to give now.",
    ctaMediaP:
      "Every day without a stable home is one more day of risk for Anna and her daughter. Your help, whatever it looks like, counts starting now.",
    btnDonarMedia: "I want to donate now",
    emailTitle: "Follow Anna's story",
    emailP:
      "Leave us your email if you'd like updates on how this campaign is progressing and how each donation is being used.",
    inputNombrePlaceholder: "Your name (optional)",
    inputEmailPlaceholder: "Your email",
    btnEmailSubmit: "I want updates",
    cierreTitle: "Anna and her daughter are still waiting",
    cierreP: "You could be the reason they sleep a little easier tonight.",
    btnDonarCierre: "Donate on GoFundMe",
    footerText:
      'This page shares and supports the GoFundMe campaign "Help Anna and her 4-year-old daughter get off the streets." It is not affiliated with GoFundMe.',
    msgInvalidEmail: "Please enter a valid email.",
    msgSending: "Sending...",
    msgThanks: "Thank you! We'll keep you posted.",
    msgError: "There was a problem sending it. Please try again.",
    btnCompartir: "Share",
    msgLinkCopied: "Link copied to clipboard. Go spread the word!",
    shareTitle: "Help Anna and her daughter",
    shareText:
      "Anna and her 4-year-old daughter lost everything. Help them get a roof.",
  },
} as const;

function Html({ text, className }: { text: string; className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: text }} />;
}

function LandingPage() {
  const [lang, setLang] = useState<Lang>("es");
  const [toast, setToast] = useState<string | null>(null);
  const [formMsg, setFormMsg] = useState<{ text: string; kind: "ok" | "error" | "info" } | null>(null);
  const [sending, setSending] = useState(false);

  const t = i18n[lang];

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  async function compartir() {
    const shareData = {
      title: t.shareTitle,
      text: t.shareText,
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    try {
      if (typeof navigator !== "undefined" && (navigator as Navigator).share) {
        await (navigator as Navigator).share(shareData);
        return;
      }
      await navigator.clipboard.writeText(shareData.url);
      setToast(t.msgLinkCopied);
    } catch {
      /* usuario canceló */
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const nombre = String(data.get("nombre") ?? "").trim();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setFormMsg({ text: t.msgInvalidEmail, kind: "error" });
      return;
    }
    setSending(true);
    setFormMsg({ text: t.msgSending, kind: "info" });
    try {
      const body = new URLSearchParams();
      body.append("email", email);
      body.append("nombre", nombre);
      body.append("lang", lang);
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });
      setFormMsg({ text: t.msgThanks, kind: "ok" });
      form.reset();
    } catch {
      setFormMsg({ text: t.msgError, kind: "error" });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#16161a] font-sans leading-relaxed">
      {/* Selector de idioma */}
      <div className="fixed top-3 right-3 z-50 flex gap-1.5 bg-black/35 p-1.5 rounded-full backdrop-blur-sm">
        {(["es", "en"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`border-none font-bold text-sm px-3.5 py-1.5 rounded-full cursor-pointer transition-colors ${
              lang === l ? "bg-white text-[#16161a]" : "bg-transparent text-white"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Urgencia */}
      <div className="bg-[#16161a] text-white text-center py-2.5 px-12 text-sm tracking-wide">
        <Html text={t.urgencia.replace(/<strong>/g, '<strong class="text-[#ffb703]">')} />
      </div>

      {/* HERO */}
      <section
        className="relative text-white px-5 pt-14 pb-16 text-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.75), rgba(0,0,0,.85)), radial-gradient(circle at top, #3a1a1e, #16161a)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            {t.heroTitle}
          </h1>
          <p className="text-lg text-gray-100 mb-7">{t.heroSub}</p>

          <img
            src={foto1.url}
            alt="Anna abrazando a su hija"
            className="w-full max-w-md aspect-[4/5] object-cover mx-auto mb-7 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          />

          <div className="flex flex-col gap-3 max-w-md mx-auto">
            <a
              href={GOFUNDME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full font-extrabold text-xl py-5 px-12 rounded-full text-center bg-[#cdf187] text-[#1f3d17] shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-[#bce169] hover:-translate-y-0.5 transition-all"
            >
              {t.btnDonarHero}
            </a>
            <button
              type="button"
              onClick={compartir}
              className="block w-full font-extrabold text-xl py-5 px-12 rounded-full text-center bg-[#2c5530] text-[#cdf187] shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-[#234626] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              {t.btnCompartir}
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-300">{t.heroNota}</div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="max-w-2xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center text-[#d7263d] mb-6">
          {t.historiaTitle}
        </h2>
        <p className="text-lg text-[#4a4a52] mb-5">{t.historiaP1}</p>
        <p className="text-xl text-[#16161a] font-semibold border-l-4 border-[#d7263d] pl-4 mb-5">
          {t.historiaP2}
        </p>
        <p className="text-lg text-[#4a4a52] mb-5">{t.historiaP3}</p>
        <p className="text-lg text-[#4a4a52] mb-5">{t.historiaP4}</p>
        <Html
          text={t.historiaP5}
          className="block text-lg text-[#4a4a52] mb-5"
        />
        <p className="text-lg text-[#4a4a52] mb-5">{t.historiaP6}</p>
      </section>

      {/* GALERIA */}
      <section className="bg-white px-5 py-12">
        <h2 className="text-center text-2xl font-bold mb-8 text-[#16161a]">
          {t.galeriaTitle}
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
          {fotos.map((f, i) => (
            <img
              key={i}
              src={f.url}
              alt={f.alt}
              loading="lazy"
              className="aspect-square w-full object-cover rounded-xl shadow-sm"
            />
          ))}
        </div>
      </section>

      {/* CTA INTERMEDIA */}
      <section className="bg-[#16161a] text-white text-center px-5 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3.5">{t.ctaMediaTitle}</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-7">{t.ctaMediaP}</p>
        <div className="flex flex-col gap-3 max-w-md mx-auto">
          <a
            href={GOFUNDME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full font-extrabold text-lg py-4 px-10 rounded-full text-center bg-[#cdf187] text-[#1f3d17] shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-[#bce169] hover:-translate-y-0.5 transition-all"
          >
            {t.btnDonarMedia}
          </a>
          <button
            type="button"
            onClick={compartir}
            className="block w-full font-extrabold text-lg py-4 px-10 rounded-full text-center bg-[#2c5530] text-[#cdf187] shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-[#234626] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            {t.btnCompartir}
          </button>
        </div>
      </section>

      {/* EMAIL */}
      <section className="max-w-xl mx-auto px-6 py-14 text-center">
        <h2 className="text-2xl font-bold mb-2.5">{t.emailTitle}</h2>
        <p className="text-[#4a4a52] mb-6">{t.emailP}</p>
        <form className="flex flex-col gap-3" onSubmit={onSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder={t.inputNombrePlaceholder}
            className="px-4 py-3.5 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-[#d7263d]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder={t.inputEmailPlaceholder}
            className="px-4 py-3.5 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-[#d7263d]"
          />
          <button
            type="submit"
            disabled={sending}
            className="bg-[#16161a] text-white py-4 rounded-lg text-base font-bold hover:bg-black transition-colors disabled:opacity-70"
          >
            {t.btnEmailSubmit}
          </button>
        </form>
        {formMsg && (
          <div
            className={`mt-3 text-sm ${
              formMsg.kind === "ok"
                ? "text-[#1a7f37]"
                : formMsg.kind === "error"
                  ? "text-[#d7263d]"
                  : "text-[#4a4a52]"
            }`}
          >
            {formMsg.text}
          </div>
        )}
      </section>

      {/* CIERRE */}
      <section
        className="text-white text-center px-5 py-14"
        style={{
          background: "linear-gradient(180deg, #d7263d, #a91d30)",
        }}
      >
        <h2 className="text-3xl font-bold mb-3.5">{t.cierreTitle}</h2>
        <p className="max-w-xl mx-auto mb-7 text-[#ffe8ea]">{t.cierreP}</p>
        <div className="flex flex-col gap-3 max-w-md mx-auto">
          <a
            href={GOFUNDME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full font-extrabold text-xl py-5 px-12 rounded-full text-center bg-[#cdf187] text-[#1f3d17] shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-[#bce169] hover:-translate-y-0.5 transition-all"
          >
            {t.btnDonarCierre}
          </a>
          <button
            type="button"
            onClick={compartir}
            className="block w-full font-extrabold text-xl py-5 px-12 rounded-full text-center bg-[#2c5530] text-[#cdf187] shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-[#234626] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            {t.btnCompartir}
          </button>
        </div>
      </section>

      <footer className="text-center px-6 py-6 text-xs text-gray-500 bg-[#fdfaf6]">
        {t.footerText}
      </footer>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#16161a] text-white px-5 py-3 rounded-full text-sm z-[100] max-w-[90vw] text-center shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}
