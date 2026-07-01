import SectionLabel from '../../../components/SectionLabel';
import { siteConfig } from '../../../data/site';

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 pb-16">
      <SectionLabel index="04" title="Contact" />

      <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
        I&apos;m currently open to selective freelance opportunities and full-time
        engineering roles. Whether you have a question or just want to say hi,
        my inbox is always open — I&apos;ll get back to you as soon as I can.
      </p>

      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-6 inline-block font-mono text-sm text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white sm:text-base"
      >
        {siteConfig.email}
      </a>
    </section>
  );
};

export default ContactSection;
