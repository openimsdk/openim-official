"use client";

import clsx from "clsx";
import React, { useState } from "react";

type ResponseType = {
  success: boolean;
  message: string;
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [toastState, setToastState] = useState({
    success: false,
    error: false,
  });
  let timer: NodeJS.Timer;

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement> & { target: { reset: () => void } },
  ) => {
    setLoading(true);
    event.preventDefault();
    // @ts-ignore
    const formData = {};
    // @ts-ignore
    [...event.target].slice(0, 6).map((el: HTMLInputElement) => {
      // @ts-ignore
      formData[el.id] = el.value;
    });
    try {
      const res = (await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json())) as ResponseType;
      showToast(res.success ? "success" : "error");
    } catch (error) {
      console.log(error);
      showToast("error");
    }
    // @ts-ignore
    event.target.reset();
    setLoading(false);
  };

  const showToast = (key: "success" | "error") => {
    setToastState((state) => {
      state[key] = true;
      return { ...state };
    });
    if (timer) {
      setToastState({ success: false, error: false });
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setToastState((state) => {
        state[key] = false;
        return { ...state };
      });
    }, 3000);
  };

  return (
    <form
      className="my-12 w-full max-w-md rounded-lg bg-[#222222FF] p-6 md:my-24"
      onSubmit={onSubmit as unknown as () => void}
    >
      <p className="pb-6 text-2xl text-white">Contact Us</p>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-light text-white" htmlFor="name">
          Your name<span className="text-red-500">*</span>
        </label>
        <input
          className="w-full rounded-md bg-black px-3 py-2"
          id="name"
          type="text"
          required
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-light text-white" htmlFor="email">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          className="w-full rounded-md bg-black px-3 py-2"
          id="email"
          type="email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-light text-white" htmlFor="company">
          Name of the company you represent
        </label>
        <input
          className="w-full rounded-md bg-black px-3 py-2"
          id="company"
          type="text"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-light text-white" htmlFor="website">
          Company website
        </label>
        <input
          className="w-full rounded-md bg-black px-3 py-2"
          id="website"
          type="url"
          placeholder="https://"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-light text-white" htmlFor="users">
          Expected number of users
        </label>
        <input className="w-full rounded-md bg-black px-3 py-2" id="users" />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-light text-white" htmlFor="comments">
          Questions or comments<span className="text-red-500">*</span>
        </label>
        <textarea
          className="w-full rounded-md   bg-black px-3 py-2"
          id="comments"
          rows={4}
          required
        ></textarea>
      </div>
      <div className="flex">
        <button
          className={clsx(
            "btn flex-grow rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600",
            { loading: loading },
          )}
          type="submit"
        >
          Send
        </button>
      </div>
      <div className="toast toast-top">
        {toastState.error && (
          <div className="alert alert-error">
            <div>
              <span>Submission failed, please contact the administrator.</span>
            </div>
          </div>
        )}
        {toastState.success && (
          <div className="alert alert-success">
            <div>
              <span>Submitted successfully, we will contact you later.</span>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
