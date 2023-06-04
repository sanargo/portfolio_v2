import ContactInfo from "./ContactInfo";
import ContactUs from "./ContactUs";

function Contact() {
  return (
    <div
      className="bg-slate-950 h-screen flex flex-col items-center py-10 lg:justify-center lg:flex-row lg:py-20 lg:p-0"
      id="contact"
    >
      <ContactInfo />
      <ContactUs />
    </div>
  );
}

export default Contact;
