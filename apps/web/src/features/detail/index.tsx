"use client";

export default function DetailPage() {
  return (
    <div className="mx-auto min-h-screen flex-col justify-between">
      <div className="relative flex h-64 w-full justify-center sm:h-96">
        <div className="absolute inset-0 bg-[url('/kpop3.jpg')] bg-cover bg-center bg-no-repeat blur-sm"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative self-center">
          <img src="/kpop3.jpg" className="max-w-sm sm:max-w-2xl" />
        </div>
      </div>
      <div className="min-h-screen bg-white">
        {/* Sticky Section */}
        <div className="sticky top-0 z-10 bg-white px-6 py-3 shadow-sm">
          <div className="container mx-auto flex flex-col items-center justify-between px-4 py-3 md:flex-row md:px-8">
            <div className="mb-2 flex w-full flex-col space-y-2 text-center text-sm md:mb-0 md:w-auto md:flex-row md:space-x-4 md:space-y-0 md:text-left md:text-base">
              <a href="#pricing" className="text-black">
                Pricing
              </a>
              <a href="#exchange-refund" className="text-black">
                Exchange & Refund Policy
              </a>
              <a href="#admission-policy" className="text-black">
                Admission Policy
              </a>
              <a href="#buy-tickets" className="text-black">
                Ways to Buy Tickets
              </a>
            </div>
            <button className="mt-2 w-full font-bold rounded-full bg-blue3 hover:bg-blue1 px-4 py-2 text-sm text-white md:mt-0 md:w-auto md:text-base">
              BUY TICKETS
            </button>
          </div>
        </div>

        {/* Event Details Section */}
        <section className="container mx-auto px-4 py-12 md:px-8">
          <h2 className="mb-6 text-xl font-bold md:text-2xl">EVENT DETAILS</h2>
          <p className="mb-4 text-sm italic md:text-base">
            "George Harliono is very talented; he's got a phenomenal career
            ahead of him." – Russian pianist Denis Matsuev
          </p>
          <p className="mb-6 text-sm md:text-base">
            George Harliono, a British-Indonesian concert pianist, soared to new
            heights in 2023 when he clinched the Silver Medal at the prestigious
            XVII International Tchaikovsky Competition. ...
          </p>
          <h3 className="mb-4 text-lg font-semibold md:text-xl">
            About the recital
          </h3>
          <p className="mb-6 text-sm md:text-base">
            A perfect symbiosis of music, passion, and piano, the remarkably
            young pianist George Harliono never fails to deliver awe-inspiring
            moments on stage. ...
          </p>
          <p className="mb-6 text-sm md:text-base">
            A perfect symbiosis of music, passion, and piano, the remarkably
            young pianist George Harliono never fails to deliver awe-inspiring
            moments on stage. ...
          </p>
          <p className="mb-6 text-sm md:text-base">
            A perfect symbiosis of music, passion, and piano, the remarkably
            young pianist George Harliono never fails to deliver awe-inspiring
            moments on stage. ...
          </p>
          <p className="mb-6 text-sm md:text-base">
            A perfect symbiosis of music, passion, and piano, the remarkably
            young pianist George Harliono never fails to deliver awe-inspiring
            moments on stage. ...
            A perfect symbiosis of music, passion, and piano, the remarkably
            young pianist George Harliono never fails to deliver awe-inspiring
            moments on stage.
          </p>
          <p className="mb-6 text-sm md:text-base">
            A perfect symbiosis of music, passion, and piano, the remarkably
            young pianist George Harliono never fails to deliver awe-inspiring
            moments on stage. ...
            A perfect symbiosis of music, passion, and piano, the remarkably
            young pianist George Harliono never fails to deliver awe-inspiring
            moments on stage.
          </p>
        </section>
      </div>
    </div>
  );
}
