import { TopNav } from "../../../components/top-nav";
import { Sidebar } from "../../../components/sidebar";

function PostScreen1() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      <div className="md:col-span-1  lg:col-span-1hidden md:block lg:block">
        <Sidebar />
      </div>
      <div className="md:col-span-2 lg:col-span-4">
        <TopNav />
        <div className="bg-white border mx-4 my-6">
          <div className="flex justify-end">
            <button className="text-white bg-light-purple rounded px-6 py-3 my-6 mx-12">
              Publish
            </button>
          </div>
          <div className="relative">
            <input className="h-80 w-full" />
            <div className="absolute top-0 left-0 ml-4 flex gap-8 my-2">
              <div className="rounded-full p-4 border">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/Add.svg`}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl text-gray-300 font-semibold">Title</h3>
                <span className="text-lg text-gray-300">
                  Write a post.............
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostScreen1;
