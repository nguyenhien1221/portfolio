import { useState, type FormEvent } from 'react';

const subjectOptions = [
  'Project Proposal',
  'Freelance Inquiry',
  'Full-time Role',
  'General Inquiry',
];

const inputClassName =
  'w-full rounded border border-white/5 bg-ink px-4 py-3 font-mono text-sm text-fg placeholder:text-muted/50 outline-none transition-colors focus:border-accent/40';

const TransmitForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-panel p-6 shadow-[0_0_40px_rgba(0,245,255,0.04)] sm:p-8">
      <p
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-[4.5rem] font-bold tracking-[0.2em] text-white/[0.03] sm:text-[5.5rem]"
        aria-hidden
      >
        TRANSMIT
      </p>

      <form className="relative space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="identifier"
            className="mb-2 block font-mono text-[11px] tracking-[0.15em] text-accent"
          >
            IDENTIFIER
          </label>
          <input
            id="identifier"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="protocol"
            className="mb-2 block font-mono text-[11px] tracking-[0.15em] text-accent"
          >
            PROTOCOL (EMAIL)
          </label>
          <input
            id="protocol"
            name="email"
            type="email"
            required
            placeholder="j.doe@network.com"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="vector"
            className="mb-2 block font-mono text-[11px] tracking-[0.15em] text-accent"
          >
            VECTOR (SUBJECT)
          </label>
          <div className="relative">
            <select
              id="vector"
              name="subject"
              required
              defaultValue="Project Proposal"
              className={`${inputClassName} appearance-none pr-10`}
            >
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="payload"
            className="mb-2 block font-mono text-[11px] tracking-[0.15em] text-accent"
          >
            PAYLOAD (MESSAGE)
          </label>
          <textarea
            id="payload"
            name="message"
            required
            rows={5}
            placeholder="System description and scope..."
            className={`${inputClassName} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-accent py-4 text-xs font-bold tracking-[0.15em] text-ink transition-opacity hover:opacity-90"
        >
          {isSubmitted ? 'TRANSMISSION SENT ✓' : 'EXECUTE SEND >'}
        </button>
      </form>
    </div>
  );
}

export default TransmitForm;
