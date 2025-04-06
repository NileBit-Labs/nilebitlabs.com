export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
}: {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}) {
  return (
    <section className="bg-dark text-white h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-6">{subtitle}</p>
        <a
          href={ctaLink}
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
