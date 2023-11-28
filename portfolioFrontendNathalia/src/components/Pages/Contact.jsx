import React, { useRef, useContext } from "react";
import styles, { layout } from "../../style";
import {
  MessageIcon,
  EnvelopeIcon,
  PersonIcon,
  paperplaneIcon
} from "../../assets";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StyledButton from "../StyledButton";
import { navLinks } from "../../constants";
import { MainContext } from "../../Context";


const Contact = () => {
  
  const { contactRef } = useContext(MainContext);
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
            progress: undefined,
            autoClose: 5000,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      ref={contactRef}
      className={`flex-col w-full items-center justify-center pt-[20rem]`}
    >
      <div id="contact" className=" pt-5">
        <div className="dark:text-white text-offDark text-center mx-auto text-4xl border-t-4  border-mainPurple  w-fit font-opensans font-bold">
          <p>CONTACT</p>
        </div>
      </div>
      <div
        className={`${layout.section} ${styles.flexCenter} flex-col py-20 w-full items-center justify-center`}
      >
        <div className={`flex flex-col w-[70%] `}>
          <p className="font-opensans dark:text-white text-offDark text-2lg">
            If you are{" "}
            <span className="font-opensans font-bold italic text-2lg">
              passionate
            </span>{" "}
            about a project or have a bussines of your own, don't hesitate to
            use this form.{" "}
          </p>
          <br />
          <p className="font-opensans dark:text-white text-offDark text-2lg">
            Write me a request or question! I'm interested in working on 
            <span className="font-opensans ml-1 font-bold italic text-2lg">
              large and creative projects.
            </span>
          </p>
          <br />
          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-4">
            <div className="space-y-12">
              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <label className="font-bitter dark-text-white text-offDark block text-lg font-bold my-4">
                    <div className="flex items-end">
                      <PersonIcon addedStyles="mr-4 dark:fill-offWhite fill-offDark" />
                      <p className="dark:text-white text-offDark">Name</p>
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
                  <label className="font-bitter dark-text-white text-offDark block text-lg font-bold my-4">
                    <div className="flex items-end">
                      <EnvelopeIcon addedStyles="mr-4 dark:fill-offWhite fill-offDark" />
                      <p className="dark:text-white text-offDark">E-mail</p>
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
                  <label className="font-bitter dark-text-white text-offDark block text-lg font-bold my-4 ">
                    <div className="flex items-end">
                      <MessageIcon addedStyles="mr-4 dark:fill-offWhite fill-offDark" />
                      <p className="dark:text-white text-offDark">Message</p>
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
                  <StyledButton
                    parragraf={buttonText}
                    width={`fit`}
                    icon={paperplaneIcon}
                    className="mt-10"
                  />
                </div>
              </form>
            </div>

            <div className="mt-12">
              <p className="font-opensans font-semibold text-lg dark:text-white text-offDark mr-2">
                Telefonummer:
                <span className="font-opensans text-lg font-medium">
                  (+49)174 3515 044
                </span>
              </p>
              <div className="flex items-end">
                <p className="font-opensans font-semibold text-lg dark:text-white text-offDark mr-2">
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
