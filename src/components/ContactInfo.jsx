import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

function ContactInfo() {
  return (
    <div className="bg-creme w-72 rounded-md p-4 lg:pb-6 lg:w-80 lg:h-80">
      <p className="text-black font-bold underline decoration-stone-500 underline-offset-8">
        Contact info
      </p>
      <h2 className="text-4xl font-bold text-slate-800 mt-3">Get in touch</h2>
      <p className="text-slate-800 mt-2">I will get back to you in 24 hours</p>
      <div className="flex flex-col justify-between gap-3 mt-8">
        <div className="flex items-center h-fit leading-none gap-3">
          <AiOutlineMail className="text-3xl" />
          <div>
            <p className="text-stone-500 font-bold text-sm leading-none">
              Email
            </p>
            <p className="text-black font-bold text-sm leading-none">
              sanargo97@gmail.com
            </p>
          </div>
        </div>
        <div className="flex items-center h-fit leading-none gap-3">
          <BsTelephone className="text-3xl" />
          <div>
            <p className="text-stone-500 font-bold text-sm leading-none">Tel</p>
            <p className="text-black font-bold text-sm leading-none">
              +57 318 2190756
            </p>
          </div>
        </div>
        <div className="flex items-center h-fit leading-none gap-3">
          <GoLocation className="text-3xl" />
          <div>
            <p className="text-stone-500 font-bold text-sm leading-none">
              Address
            </p>
            <p className="text-black font-bold text-sm leading-none">
              Cali, Valle del Cauca, Colombia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
