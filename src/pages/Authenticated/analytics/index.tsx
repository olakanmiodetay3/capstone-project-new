import { Sidebar } from "../../../components/sidebar";
import { TopNav } from "../../../components/top-nav";

function Analytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      <div className="md:col-span-1  lg:col-span-1hidden md:block lg:block">
        <Sidebar />
      </div>
      <div className="md:col-span-2 lg:col-span-4">
        <TopNav />
        <div className="bg-white mx-4 py-4 px-8 my-6">
          <div className="my-2">
            <h2 className="text-2xl font-semibold mb-6">Posts analytics</h2>
            <div className="flex space-x-2">
              <p className="font-semibold text-lg">May 2023,</p>
              <span className="text-gray-600">25days so far</span>
            </div>
            <div className="border-b my-2 border-4 border-purple"></div>
          </div>
          <h2 className="font-semibold text-2xl my-4">Posts highlights</h2>
          <div className="flex space-x-2">
            <h4 className="text-2xl font-semibold">Top posts</h4>
            <span className="text-lg">earned 2980 impressions</span>
          </div>
          <div className="my-4">
            <div className="flex gap-2 mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/assets/dashboaed-pngs/unsplash_jzz_3jWMzHA.png`}
                alt="lady"
                className="rounded-full"
              />
              <div className="my-auto">
                <h3 className="text-xl font-semibold my-2">Grace Ikpang</h3>
                <div className="flex text-lg text-gray-400">
                  <h5 className="font-semibold">Product designer</h5>
                  <h5 className="font-semibold">.May 25th, 2023</h5>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">
                Starting out as a Product designer
              </h2>
              <div className="flex gap-2">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/Vector.svg`}
                  alt="book"
                />
                <h6 className="text-lg text-gray-600">10 mins read</h6>
              </div>
              <h4 className="text-gray-600 text-lg">
                Embarking on a journey as a product designer can be an
                exhilarating and fulfilling experience. As a profession that
                bridges the realms of art, technology, and problem-solving,
                product design offers an opportunity to shape the way people
                interact with the world around them.
              </h4>
              <div className="flex justify-between">
                <div className="flex  gap-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/chat.svg`}
                    alt="chat-icon"
                  />
                  <span className="text-gray-600 text-lg">200</span>
                </div>
                <div className="flex  gap-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/like.svg`}
                    alt="like-icon"
                  />
                  <span className="text-gray-600 text-lg">120</span>
                </div>
                <div className="flex gap-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/views.svg`}
                    alt="views-icon"
                  />
                  <span className="text-gray-600 text-lg">2980 views</span>
                </div>
              </div>
              <button className="bg-blue px-4 py-3 text-white rounded">
                View post activity
              </button>
            </div>
          </div>
          <div className="my-2">
            <h2 className="text-2xl font-semibold mb-6">Posts summary</h2>
            <span className="text-gray-600 text-xl">May 2023 summary</span>
            <div className="border-b my-2 border-4 border-purple"></div>
          </div>
          <div className="">
            <div className="flex gap-12">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-600">Posts</h3>
                <span className="text-xl font-semibold">3</span>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold text-gray-600">Posts Impressions</h3>
                <span className="text-xl font-semibold">2.98k views</span>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="">
                <h3 className="text-xl font-semibold text-gray-600">Profile visits</h3>
                <span className="text-xl font-semibold">300</span>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold text-gray-600">New followers</h3>
                <span className="text-xl font-semibold">300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Analytics;
