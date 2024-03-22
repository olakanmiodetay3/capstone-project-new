import { Card } from "../../../../components/card";

function Hero() {
  return (
    <div className="mx-10">
    <div className="bg-white my-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 xl:mx-auto max-auto-xl gap-20 mb-8">
        <div className="col-span-3 space-y-6">
          <h1 className="text-3xl font-semibold">About Chatter</h1>
          <p className="">
            Chatter is a multi-functional platform where authors and readers can
            have access to their own content. It aims to be a traditional
            bookworm’s heaven and a blog to get access to more text based
            content. Our vision is to foster an inclusive and vibrant community
            where diversity is celebrated. We encourage open-mindedness and
            respect for all individuals, regardless of their backgrounds or
            beliefs. By promoting dialogue and understanding, we strive{" "}
          </p>
        </div>
        <div className="col-span-2">
          <div className="">
            <img
              className="object-cover"
              src={`${process.env.PUBLIC_URL}/assets/student-img.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6">
          <h3 className="font-semibold text-3xl">
            Why you should join chatter
          </h3>
          <p className="w-9/12">
            Our goal is to make writers and readers see our platform as their
            next heaven for blogging, ensuring ease in interactions, connecting
            with like-minded peers, have access to favorite content based on
            interests and able to communicate your great ideas with people
          </p>
        <div className="flex flex-col lg:flex-row gap-2 ">
          <Card
            image={`${process.env.PUBLIC_URL}/assets/Group-1.svg`}
            title="Analytics"
            content="Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time"
          />
          <Card
            image={`${process.env.PUBLIC_URL}/assets/Group-2.svg`}
            title="Social interactions"
            content="Users on the platform can interact with posts they like, comment and engage in discussions"
          />
          <Card
            image={`${process.env.PUBLIC_URL}/assets/Group-3.svg`}
            title="Content creation"
            content="Write nice and appealing with our in-built markdown, a rich text editor"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
