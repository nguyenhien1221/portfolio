import SectionLabel from '../../../components/SectionLabel';
import { siteConfig } from '../../../data/site';

const contactLinkClass =
  'font-mono text-sm text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white sm:text-base';

const formatVietnamPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, '');

  if (digits.startsWith('84') && digits.length === 11) {
    return `+84 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }

  if (digits.startsWith('0') && digits.length === 10) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }

  return phone;
};

const toTelHref = (phone: string) => {
  const digits = phone.replace(/\D/g, '');

  if (digits.startsWith('0')) {
    return `tel:+84${digits.slice(1)}`;
  }

  if (digits.startsWith('84')) {
    return `tel:+${digits}`;
  }

  return `tel:${phone}`;
};

const EmailIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M22 8l-10 6L2 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PhoneIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 4h3l1.5 5-2 1.5a11 11 0 005.5 5.5L18 14l5 1.5v3a2 2 0 01-2.2 2 17 17 0 01-14.3-14.3A2 2 0 014 6.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 pb-16">
      <SectionLabel index="04" title="Contact" />

      <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
        I&apos;m currently open to selective freelance opportunities and full-time
        engineering roles. Whether you have a question or just want to say hi,
        my inbox is always open — I&apos;ll get back to you as soon as I can.
      </p>

      <ul className="mt-6 space-y-3">
        <li className="flex items-center gap-3 text-sm sm:text-base">
          <span className="text-accent" aria-label="Email">
            <EmailIcon />
          </span>
          <a href={`mailto:${siteConfig.email}`} className={contactLinkClass}>
            {siteConfig.email}
          </a>
        </li>
        <li className="flex items-center gap-3 text-sm sm:text-base">
          <span className="text-accent" aria-label="Phone">
            <PhoneIcon />
          </span>
          <a href={toTelHref(siteConfig.phone)} className={contactLinkClass}>
            {formatVietnamPhone(siteConfig.phone)}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactSection;
