import React, { useState } from "react";
import CreateFolder from "../Modals/CreateFolder";
import UploadFile from "../Modals/UploadFile";
import { FcApproval, FcFolder, FcLowPriority } from "react-icons/fc";
import { BsFillStarFill } from "react-icons/bs";
import {
  getFilesData,
  setQuickTab,
} from "../../features/filexplore/FileExplore";
import { useDispatch, useSelector } from "react-redux";
import Home from "../pages/Home";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const dispatch = useDispatch();
  const { allFiles, favourite } = useSelector(getFilesData);

  const [quick, setQuick] = useState(null);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [showUploadFile, setshowUploadFile] = useState(false);

  const handleQuick = (type) => {
    const item = allFiles.filter((item) => item.type === type);

    dispatch(setQuickTab(item));
    setQuick(type);
  };

  const RootHandler = () => {
    dispatch(setQuickTab(allFiles));
    setQuick(null);
  };

  return (
    <>
      <div className="flex">
        {/* sidebar */}
        <div className="w-2/12 p-3 bg-zinc-100 h-screen border-r">
          <div className="">
            <p
              onClick={RootHandler}
              className="p-2 flex items-center gap-2   duration-300 cursor-pointer rounded-lg"
            >
              <FcFolder className="h-8 w-8 " />{" "}
              <span className="font-bold capitalize">explorer </span>
            </p>
          </div>

          <div className="py-2 mt-5 ">
            <p
              className="px-4
           text-sm font-semibold text-zinc-600 flex justify-between items-center gap-2 mb-2"
            >
              <span>Favourite</span>{" "}
              <BsFillStarFill className="text-yellow-400 " />
            </p>
            <hr />
            {favourite?.map((item) => {
              return (
                <p
                  className={`hover:bg-slate-200
             px-4 py-1 cursor-pointer rounded-md`}
                  key={item.id}
                >
                  {item.title.slice(0, 12)}
                </p>
              );
            })}{" "}
            <p className="mt-8 px-4 text-sm font-semibold text-zinc-600 flex items-center justify-between gap-2 mb-2">
              <span>Quick</span> <FcLowPriority />
            </p>{" "}
            <hr className="mb-2" />
            <ul className=" font-semibold text-sm">
              <li
                onClick={() => handleQuick("folder")}
                className={`${
                  quick == "folder" && "bg-slate-200"
                } px-4 py-1 cursor-pointer rounded-md`}
              >
                Folder
              </li>
              <li
                onClick={() => handleQuick("picture")}
                className={`${
                  quick == "picture" && "bg-slate-200"
                } px-4 py-1 cursor-pointer rounded-md`}
              >
                Picture
              </li>
              <li
                onClick={() => handleQuick("document")}
                className={`${
                  quick == "document" && "bg-slate-200"
                } px-4 py-1 cursor-pointer rounded-md`}
              >
                Document
              </li>

              <li
                onClick={() => handleQuick("music")}
                className={`${
                  quick == "music" && "bg-slate-200"
                } px-4 py-1 cursor-pointer rounded-md`}
              >
                Music
              </li>
              <li
                onClick={() => handleQuick("video")}
                className={`${
                  quick == "video" && "bg-slate-200"
                } px-4 py-1 cursor-pointer rounded-md`}
              >
                Video
              </li>
            </ul>
            <p
              className="px-4 mt-2
           text-sm font-semibold text-zinc-600 flex justify-between items-center gap-2 mb-2"
            >
              <span>Resent</span> <FcApproval className="text-yellow-400 " />
            </p>
            <hr />
            {allFiles?.slice(0, 5).map((item) => {
              return (
                <p
                  className={`hover:bg-slate-200
             px-4 py-1 cursor-pointer rounded-md`}
                  key={item.id}
                >
                  {item.title.slice(0, 12)}
                </p>
              );
            })}{" "}
          </div>
        </div>
        {/* sidebar  */}

        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
