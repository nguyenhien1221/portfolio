import ContactHeader from './components/ContactHeader';
import SocialLinks from './components/SocialLinks';
import SystemLogTerminal from './components/SystemLogTerminal';
import TransmitForm from './components/TransmitForm';

const Contact = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <ContactHeader />
          <SystemLogTerminal />
          <SocialLinks />
        </div>

        <TransmitForm />
      </div>
    </main>
  );
}

export default Contact;
