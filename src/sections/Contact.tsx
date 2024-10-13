import { useState, useRef, ChangeEvent, FormEvent } from "react";

import emailjs from "@emailjs/browser";
import Terminal from "../components/Terminal";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_75v45ha",
        "template_8qywcbh",
        {
          from_name: form.name,
          to_name: "Togrul",
          from_email: form.email,
          to_email: "togrull1508@gmail.com",
          message: form.message,
        },
        "D5Zgqrq1O0OFSeeW1"
      );

      setLoading(false);
      alert("Your message has been sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setLoading(false);
      // console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="h-fit flex items-center justify-center flex-col rounded-3xl">
        <Terminal>
          <div className="contact-container">
            <h3 className="head-text">Let's talk</h3>
            <p className="text-lg text-white-600 mt-3">
              Whether you’re looking to build a new website, improve your
              existing project, or bring unique ideas to life, I’m here to
              help.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col space-y-7"
            >
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., John Doe"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., johndoe@gmail.com"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="ex., Congrats! You're hired!"
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}

                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="field-btn_arrow"
                />
              </button>
            </form>
          </div>
        </Terminal>
      </div>
    </section>
  );
};

export default Contact;
