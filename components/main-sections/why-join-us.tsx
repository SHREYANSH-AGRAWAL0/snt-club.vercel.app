import React from "react";

function section2() {
  return (
    <section className="h-fit container mx-auto mt-[20px]" id="about">
      <div className="text-[#0A146E] p-4">
        <div>
          <p className="text-2xl md:text-4xl font-extrabold">Why Join Us?</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-fit mx-auto gap-10 mt-[10px] md:mt-[20px]">
          <div>
            <p className="text-sm md:text-base">
              To facilitate students with easy self-learning, here at Science
              and Technology Club we provide a technical exposure to students by
              having them engaged in Conferences, Seminars and Workshops of
              National and International level. Students get thoroughly guided
              regarding research,research journals and in writing research
              papers. You will also be nurtured in a way that will help you
              build several projects and organize events. At the end of the day
              a college club is for your development and here at Science and
              Technology Club we value that aspect by mentoring and providing
              best guidance, resources while also introducing you to a community
              of like minded people looking forward to each other&apos;s progress and
              being there for each other.
            </p>
          </div>
          <div className="flex justify-right xl:justify-center items-center">
            <iframe
              className="w-full md:w-[400px] aspect-video rounded-xl"
              src="https://www.youtube.com/embed/GtLxHohHEJ4?si=JGRX9g7X94UU7Dkm"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section2;
