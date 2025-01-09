import React from "react";

function Contact() {
  return (
    <>
      <section className="bg-neutral-800 text-neutral-50">
      <div className="mx-6 my-8 flex flex-col items-center justify-between px-6 py-4">
        <div className="text-2xl">Contact</div>
        <div className="container m-8 flex h-full max-h-fit w-full max-w-4xl flex-col items-center justify-between sm:h-96 sm:flex-row sm:justify-evenly">
          <div className="flex h-full w-full flex-col items-stretch justify-center gap-4 bg-indigo-700 px-8 py-36">
            <p>Mail : test@outlook.com</p>
            <p>Address: Anywhere, Earth</p>
            <p>Tel: 123456789</p>
          </div>
          <div className="flex max-h-fit w-full shrink flex-col items-stretch justify-center gap-8 bg-neutral-300 px-8 py-16 text-neutral-900 sm:h-full sm:py-24">
            <div className="">
              <label for="name">Name: </label><br />
              <input type="text" id="name" className="w-full border-2 border-neutral-600 bg-transparent focus:border-transparent focus:outline-transparent" />
            </div>
            <div>
              <label for="email">Email: </label><br />
              <input type="text" id="email" className="w-full border-2 border-neutral-600 bg-transparent focus:border-transparent focus:outline-transparent" />
            </div>
            <div className="flex flex-col">
              <label for="message"> Message: </label>
              <textarea name="" id="message" cols="10" rows="1" minlength="10" className="w-full border-2 border-neutral-600 bg-transparent focus:border-transparent focus:outline-transparent"></textarea>
            </div>
            <div className="flex w-full">
              <button className="mx-auto rounded-lg bg-indigo-700 p-2 text-neutral-100">Send me!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;

