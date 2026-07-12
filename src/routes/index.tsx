import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
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
      { property: "og:title", content: "Ayuda a Anna y su hija / Help Anna and her daughter" },
      {
        property: "og:description",
        content:
          "Anna y su hija de 4 años lo han perdido todo. Ayúdales a tener un techo con una donación en GoFundMe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

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
    msgCopyError: "No se pudo copiar el enlace. Inténtalo manualmente.",
    shareTitle: "Ayuda a Anna y su hija",
    shareText:
      "Anna y su hija de 4 años lo han perdido todo. Ayúdales a tener un techo.",
    shareModalTitle: "Compartir en",
    shareModalClose: "Cerrar",
    shareCopyLink: "Copiar enlace",
    shareTiktok: "TikTok",
    shareInstagram: "Instagram",
    shareFacebook: "Facebook",
    shareTwitter: "X / Twitter",
    shareWhatsapp: "WhatsApp",
    shareTelegram: "Telegram",
    shareLinkedin: "LinkedIn",
    shareReddit: "Reddit",
    shareEmail: "Email",
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
    msgCopyError: "Could not copy the link. Please try manually.",
    shareTitle: "Help Anna and her daughter",
    shareText:
      "Anna and her 4-year-old daughter lost everything. Help them get a roof.",
    shareModalTitle: "Share on",
    shareModalClose: "Close",
    shareCopyLink: "Copy link",
    shareTiktok: "TikTok",
    shareInstagram: "Instagram",
    shareFacebook: "Facebook",
    shareTwitter: "X / Twitter",
    shareWhatsapp: "WhatsApp",
    shareTelegram: "Telegram",
    shareLinkedin: "LinkedIn",
    shareReddit: "Reddit",
    shareEmail: "Email",
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
  const [showShare, setShowShare] = useState(false);

  const t = i18n[lang];

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  function compartir() {
    setShowShare(true);
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
      const { error } = await supabase
        .from("email_subscribers")
        .insert({ email, nombre: nombre || null, lang });
      if (error) throw error;
      setFormMsg({ text: t.msgThanks, kind: "ok" });
      form.reset();
    } catch {
      setFormMsg({ text: t.msgError, kind: "error" });
    } finally {
      setSending(false);
    }

  }

  function closeShare() {
    setShowShare(false);
  }

  function shareTo(network: string) {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = t.shareText;
    const title = t.shareTitle;
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    const encodedTitle = encodeURIComponent(title);

    let shareUrl = "";
    switch (network) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "reddit":
        shareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`;
        break;
      case "tiktok":
      case "instagram":
        copyLink();
        return;
      default:
        copyLink();
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=500");
    }
    closeShare();
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToast(t.msgLinkCopied);
    } catch {
      setToast(t.msgCopyError);
    }
    closeShare();
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

      {showShare && (
        <ShareModal
          t={t}
          onClose={closeShare}
          onShare={shareTo}
          onCopy={copyLink}
        />
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#16161a] text-white px-5 py-3 rounded-full text-sm z-[100] max-w-[90vw] text-center shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}

type ShareModalProps = {
  t: (typeof i18n)["es"];
  onClose: () => void;
  onShare: (network: string) => void;
  onCopy: () => void;
};

function ShareModal({ t, onClose, onShare, onCopy }: ShareModalProps) {
  const networks = [
    { id: "facebook", label: t.shareFacebook, color: "#1877F2", icon: FacebookIcon },
    { id: "twitter", label: t.shareTwitter, color: "#000000", icon: TwitterIcon },
    { id: "whatsapp", label: t.shareWhatsapp, color: "#25D366", icon: WhatsappIcon },
    { id: "telegram", label: t.shareTelegram, color: "#0088CC", icon: TelegramIcon },
    { id: "tiktok", label: t.shareTiktok, color: "#000000", icon: TiktokIcon },
    { id: "instagram", label: t.shareInstagram, color: "#E4405F", icon: InstagramIcon },
    { id: "linkedin", label: t.shareLinkedin, color: "#0A66C2", icon: LinkedinIcon },
    { id: "reddit", label: t.shareReddit, color: "#FF4500", icon: RedditIcon },
    { id: "email", label: t.shareEmail, color: "#5F6368", icon: EmailIcon },
  ];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#16161a]">{t.shareModalTitle}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label={t.shareModalClose}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {networks.map((n) => (
            <button
              key={n.id}
              onClick={() => onShare(n.id)}
              className="flex flex-col items-center gap-2 rounded-xl p-3 transition-colors hover:bg-gray-50"
              style={{ color: n.color }}
            >
              <n.icon />
              <span className="text-xs font-medium text-[#16161a]">{n.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={onCopy}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-[#16161a] hover:bg-gray-50"
        >
          <LinkIcon />
          {t.shareCopyLink}
        </button>
      </div>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.095 10.125 24v-8.437H7.078v-3.49h3.047V9.36c0-3.018 1.792-4.687 4.533-4.687 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.095 24 18.1 24 12.073z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.931L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 01-3.48-8.413z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.39c-.004.19-.037.35-.057.574-.113 1.014-.353 2.53-.53 3.49-.11.588-.326 1.802-.472 2.452-.08.36-.25.477-.41.486-.35.007-.615-.224-1.957-.87-1.56-.737-2.22-1.073-3.632-1.77-1.52-.755-2.334-1.155-2.61-1.282-.55-.262-.63-.31-.704-.317-.03-.004-.06.002-.085.026a.099.099 0 0 0-.026.064c.002.044.033.09.063.132.2.275 1.33 1.36 2.303 2.388 1.06 1.12 1.826 1.93 2.09 2.17.34.31.68.43.906.365.24-.068.39-.31.51-.59.17-.4.3-1.166.41-2.018.056-.425.115-.874.178-1.32.083-.59.153-1.075.21-1.47.028-.19.006-.37-.067-.51-.07-.13-.196-.21-.326-.224-.09-.01-.18.006-.33.06-.52.2-2.49 1.08-3.59 1.58-.68.31-1.25.57-1.59.73-.57.27-.96.45-1.16.54-.36.17-.65.24-.87.23-.21-.01-.41-.11-.55-.29-.17-.22-.24-.5-.22-.84.01-.2.06-.42.14-.65.18-.52.56-1.12 1.13-1.8.66-.79 1.53-1.36 2.6-1.72 1.06-.35 2.18-.37 3.26-.04.62.19 1.24.48 1.86.86.42.27.83.58 1.24.9.4.32.8.65 1.18.98z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M12.525.02c1.8-.1 3.74.527 5.14 1.78a.864.864 0 01.34.66c.03 1.86.02 3.72.02 5.58 0 .06-.01.13-.02.19-.42 2.28-2.07 3.93-4.35 4.34-.42.07-.85.09-1.28.06-.03-.01-.05-.04-.05-.07V13.5c.02-.01.04-.01.06-.01 1.45-.08 2.55-1.18 2.55-2.64V8.5h-2.1c-.04 0-.07-.03-.07-.07V5.97c0-.04.03-.07.07-.07h2.1c.14 0 .27-.03.39-.1.34-.18.55-.54.55-.94V2.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v.16c0 .05-.01.1-.03.15-.17.46-.55.78-1.03.85-.08.01-.16.02-.24.02h-.65c-.04 0-.07.03-.07.07v1.46c0 .04.03.07.07.07h1.2c.28 0 .5.22.5.5v2.1c0 .28-.22.5-.5.5h-1.2c-.04 0-.07.03-.07.07v.21c0 2.45-1.78 4.5-4.12 4.9-.34.06-.69.08-1.04.05-.04 0-.07-.03-.07-.07v-2.13c0-.04.03-.07.07-.07.23.02.46-.01.68-.09 1.07-.39 1.82-1.42 1.82-2.62V.52c0-.04-.03-.07-.07-.07h-2.13c-.04 0-.07.03-.07.07v11.41c0 .04-.03.07-.07.07-2.63.14-5.01-1.72-5.56-4.3-.1-.48-.14-.97-.12-1.46.01-.22.04-.44.09-.65.06-.27.31-.43.58-.39.27.04.46.3.42.57-.03.16-.05.33-.05.49-.01.36.02.72.1 1.07.4 1.78 2.02 3.05 3.85 3.05.21 0 .42-.02.62-.05.04 0 .07-.03.07-.07V.52c0-.28.22-.5.5-.5h2.13c.28 0 .5.22.5.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.25-1.25-1.25z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
