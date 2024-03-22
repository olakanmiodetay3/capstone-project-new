import { Sidebar } from "../../../components/sidebar";
import { TopNav } from "../../../components/top-nav";
import { Feed } from "../../../components/feed";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-4">
        <TopNav />
        <div className="bg-white border mx-4 rounded-lg py-4 px-6 my-6">
          <div className="flex justify-between mx-4 my-6">
            <div className="">
              <h2 className="text-2xl font-semibold">FEED</h2>
              <p className="">Explore different content you’d love</p>
            </div>
            <button className="flex space-x-2 bg-blue py-2 px-4 gap-2 rounded-lg text-white font-semibold">
              <span className="">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/write.svg`}
                  alt=""
                />
              </span>
              Post a content
            </button>
          </div>
          <div className="bg-white border mx-4 rounded-lg py-4 px-6">
            <div className="flex justify-between">
              <h4 className="font-semibold text-2xl">For you</h4>
              <h4 className="font-semibold text-2xl">Featured</h4>
              <h4 className="font-semibold text-2xl">Recent</h4>
            </div>
          </div>
          <div className="rounded-lg-t">
            <Feed
              posterImage={`${process.env.PUBLIC_URL}/assets/dashboaed-pngs/unsplash_jzz_3jWMzHA.png`}
              posterName="Grace Ikpang"
              posterRole="Product designer"
              date=".May 25th, 2023"
              postTitle="Starting out as a Product designer"
              postContentTypeIcon={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/Vector.svg`}
              postViewTime="10 mins read"
              contentofThePost="Embarking on a journey as a product designer can be an
            exhilarating and fulfilling experience. As a profession that
            bridges the realms of art, technology, and problem-solving,
            product design offers an opportunity to shape the way people
            interact with the world around them."
              postImage={`${process.env.PUBLIC_URL}/assets/dashboaed-pngs/unsplash_zvmZiw3vdsQ.png`}
            />
            <Feed
              posterImage={`${process.env.PUBLIC_URL}/assets/dashboaed-pngs/unsplash_iEEBWgY_6lA.png`}
              posterName="Oluwatobi Ogunniyi"
              posterRole="Software developer"
              date=".May 22nd, 2023"
              postTitle="Using CSS Selectors"
              postContentTypeIcon={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/Vector.svg`}
              postViewTime="10 mins read"
              contentofThePost="Cascading Style Sheets (CSS) is a fundamental technology that lies at the heart of modern web design. It empowers developers and designers to transform plain HTML into visually captivating and interactive web pages"
              postImage={`${process.env.PUBLIC_URL}/assets/dashboaed-pngs/unsplash_6JVlSdgMacE.png`}
            />
            <Feed
              posterImage={`${process.env.PUBLIC_URL}/assets/dashboaed-pngs/unsplash_fHXpgMd_XhE.png`}
              posterName="Adebobola Muhydeen"
              posterRole="Political analyst"
              date=".May 23rd, 2023"
              postTitle="The Impact of social media on Political discourse"
              postContentTypeIcon={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/Vector.svg`}
              postViewTime="10 mins read"
              contentofThePost="In the era of digital communication, social media platforms have become pervasive in our daily lives, revolutionizing the way we connect, share information, and engage with the world."
              postImage={`${process.env.PUBLIC_URL}/assets/dashboaed-pngs/unsplash_wqLGlhjr6Og.png`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
