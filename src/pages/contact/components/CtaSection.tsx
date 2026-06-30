const CtaSection = () => {
  return (
    <section id="contact" className="border-t border-white/5 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to build the future?
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          I am currently available for selective partnerships and consulting
          opportunities. Let&apos;s discuss how my engineering approach can
          elevate your product.
        </p>
        <a
          href="mailto:hello@devcore.dev"
          className="mt-10 inline-block rounded bg-accent px-10 py-4 text-xs font-bold tracking-[0.15em] text-ink transition-opacity hover:opacity-90"
        >
          INITIATE CONNECTION
        </a>
      </div>
    </section>
  );
}

export default CtaSection;
