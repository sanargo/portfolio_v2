import ContactInfo from "./ContactInfo";
import ContactUs from "./ContactUs";

function Contact() {
  return (
    <div
      className="bg-slate-950 h-screen flex flex-col items-center lg:flex-row lg:justify-center py-20 lg:p-0"
      id="contact"
    >
      <ContactInfo />
      <ContactUs />
    </div>
  );
}

export default Contact;
