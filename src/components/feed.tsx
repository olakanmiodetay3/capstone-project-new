import React from "react";

interface feedProps {
  date: string;
  postTitle: string;
  postImage: string;
  posterName: string;
  posterRole: string;
  posterImage: string;
  postViewTime: string;
  contentofThePost: string;
  postContentTypeIcon: string;
}
export const Feed = ({
  date,
  postTitle,
  postImage,
  posterRole,
  posterName,
  posterImage,
  postViewTime,
  contentofThePost,
  postContentTypeIcon,
}: feedProps) => {
  return (
    <div className="bg-white border mx-4 py-6 px-12">
      <div className="">
        <div className="flex gap-2 mb-4">
          <img src={posterImage} alt="lady" className="rounded-full" />
          <div className="my-auto">
            <h3 className="text-xl font-semibold my-2">{posterName}</h3>
            <div className="flex text-lg text-gray-400">
              <h5 className="font-semibold">{posterRole}</h5>
              <h5 className="font-semibold">{date}</h5>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{postTitle}</h2>
          <div className="flex gap-2">
            <img src={postContentTypeIcon} alt="book" />
            <h6 className="text-lg text-gray-600">{postViewTime}</h6>
          </div>
          <h4 className="text-gray-600 text-lg">{contentofThePost}</h4>
          <img
            src={postImage}
            alt="postImage"
            className="w-full rounded-md object-cover"
          />
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
        </div>
      </div>
    </div>
  );
};
