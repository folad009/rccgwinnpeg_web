import React from "react";

const WelcomeNote = () => {
  return (
    <section className="text-gray-600 bg-church-accent/15">
      <div className=" px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row">
            <div className="w-1/3 text-center sm:pr-8 sm:py-8">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1200x500"
              />
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-church-gold sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">I am thrilled to introduce you to Living Seed Church!</p>
              <p className="leading-relaxed text-lg mb-4">
                At Living Seed Church, we welcome people from all backgrounds.
                Lighthouse is a home for all with a vision to be a contemporary
                and multicultural church. You will also notice the bond we share
                as a people and our commitment to excellence in all we do.
              </p>
              <p className="leading-relaxed text-lg mb-4">
                As a church family, we are branded by our generosity, practical
                teachings, awesome worship experience, communal living and
                strong relational ties to one another. In short, we aim to have
                the kind of contagious Christianity that influences an entire
                city, one life at a time.
              </p>
              <p className="leading-relaxed text-lg mb-4">
                We invite you to visit us if you are in the Winnipeg area.
                Please do not hesitate to contact us if you would like to know
                more about Living Seed Church.
              </p>
              <h3>
                Philip Olabisi <br /> Pastor
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeNote;
