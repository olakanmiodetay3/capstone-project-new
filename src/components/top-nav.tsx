export const TopNav = () => {
  return (
    <div className="bg-white border border-b flex justify-center mb-6">
      <div className="my-2 flex justify-between">
        <div className="relative">
          <input
            className="px-10 py-2 rounded-lg pl-16 border border-b w-full"
            placeholder="search chatter"
          />
          <span className="absolute left-0 top-0">
            <img
              src={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/ri_search-line.svg`}
              alt="search"
            />
          </span>
        </div>
        <div className="flex space-x-2">
          <img
            src={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/basil_notification-outline.svg`}
            alt=""
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/dashboaed-svgs/Mask group.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
