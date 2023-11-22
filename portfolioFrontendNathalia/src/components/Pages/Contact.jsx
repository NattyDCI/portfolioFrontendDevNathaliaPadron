import React, { useRef } from "react";
import styles, { layout } from "../../style";
import {
  messageIcon,
  envelopeIcon,
  personIcon,
  behanceLogo,
  linkedInLogo,
  githubLogo,
  paperplaneIcon,
} from "../../assets";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StyledButton from "../StyledButton";
import { navLinks } from "../../constants";


const Contact = () => {
  const form = useRef();
  const buttonText = "Send";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ia1f015",
        "template_aqae50t",
        form.current,
        "VXiwbAKrVA2i6AQZj"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("message has been sent!", {
            progress:undefined,
            autoClose: 5000,
            

          });   
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  };

  return (
    <div className={`flex-col pt-20 w-full items-center justify-center `}>
      <div id="contact" className="pt-5">
        <h1 className="text-white border-t-4 mx-auto border-mainPurple w-fit text-center text-4xl font-opensans font-bold">
          CONTACT
        </h1>
      </div>
      <div
        className={`${layout.section} ${styles.flexCenter} flex-col py-20 w-full items-center justify-center`}
      >
        <div className={`flex flex-col w-[70%] `}>
          <p className="font-opensans text-white text-2lg">
            If you are{" "}
            <span className="font-opensans font-bold italic text-2lg">
              passionate
            </span>{" "}
            about a project or have a bussines of your own, don't hesitate to
            use this form.{" "}
          </p>
          <br />
          <p className="font-opensans text-white text-2lg">
            Write me a request or question! I'm interested in working on
            <span className="font-opensans font-bold italic text-2lg">
              large and creative projects.
            </span>
          </p>
          <br />
          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-4">
            <div className="space-y-12">
              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <label className="font-bitter text-white block text-lg font-bold my-4">
                    <div className="flex items-baseline">
                      <img
                        className="w-[25px] mr-2"
                        src={personIcon}
                        alt="Person icon"
                      />
                      <p>Name</p>
                    </div>
                  </label>
                  <input
                    type="name"
                    name="user_name"
                    className="w-full border border-input-border rounded-xl bg-input px-4 py-4 bg-violet-300"
                    required
                  />
                </div>
                <div>
                  <label className="font-bitter text-white block text-lg font-bold my-4">
                    <div className="flex items-end">
                      <img
                        className="w-[34px] mr-2 items-start"
                        src={envelopeIcon}
                        alt="envelope icon"
                      />
                      <p>E-mail</p>
                    </div>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full border border-input-border bg-input px-4 py-4 rounded-xl bg-violet-300"
                    required
                  />
                </div>
                <div>
                  <label className="font-bitter text-white block text-lg font-bold my-4 ">
                    <div className="flex items-end">
                      <img
                        className="w-[30px] mr-2"
                        src={messageIcon}
                        alt="message icon"
                      />
                      <p>Message</p>
                    </div>
                  </label>
                  <textarea
                    type="message"
                    name="message"
                    className="w-full border border-input-border bg-input px-4 pt-4 h-56 resize-none bg-violet-300 rounded-xl"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center items-center">
                  < StyledButton parragraf={buttonText} width={`fit`} icon={paperplaneIcon} link={`#${navLinks[3].id}`} className="mt-10"/>
                </div>
              </form>
            </div>

            <div className="mt-12">
              <p className="font-opensans font-semibold text-lg text-white mr-2">
                Telefonummer:
                <span className="font-opensans text-lg font-medium">
                  (+49)174 3515 044
                </span>
              </p>
              <div className="flex items-end">
                <p className="font-opensans font-semibold text-lg text-white mr-2">
                  Email:
                </p>
                <a
                  href="mailto:email@mydomain.com"
                  className="font-opensans font-regular text-lg text-sky-500 underline mt-3 block"
                >
                  <span className="text-sky-500">nbavutti@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className={`${layout.section} ${styles.flexCenter} `}></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
