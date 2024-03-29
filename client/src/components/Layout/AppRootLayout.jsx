import React, { useState } from "react";
import CreateFolder from "../Modals/CreateFolder";
import UploadFile from "../Modals/UploadFile";
import {
  FcAcceptDatabase,
  FcApproval,
  FcFolder,
  FcLowPriority,
  FcMenu,
} from "react-icons/fc";
import { BsFillStarFill } from "react-icons/bs";
import {
  getFilesData,
  setQuickTab,
  setRoot,
} from "../../features/filexplore/FileExplore";
import { useDispatch, useSelector } from "react-redux";
import Home from "../pages/Home";
import { Outlet, useNavigate } from "react-router-dom";
import { setLogout } from "../../features/user/userSlice";
import Processinggif from "../../../public/Processing.gif";
import cn from "../../utils/cn";

const AppRootLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allFiles, filterData, size, fileUploadLoading } =
    useSelector(getFilesData);

  const [quick, setQuick] = useState(null);
  const [naber, setNavbar] = useState(false);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [showUploadFile, setshowUploadFile] = useState(false);

  const handleQuick = (type) => {
    const item = allFiles.filter((item) => item.type === type);

    dispatch(setQuickTab(item));
    setQuick(type);
  };
  const RootHomeHandler = () => {
    dispatch(setRoot({ parentId: null }));
    setQuick(null);
  };
  const handleLogout = () => {
    RootHomeHandler();
    dispatch(setLogout());
    navigate("/");
    location.reload();
  };
  return (
    <>
      <div className="flex blockCopy">
        {/* sidebar */}

        <div
          onClick={() => setNavbar(!naber)}
          className={cn(
            "fixed md:relative top-0 left-0 duration-300 w-8/12 md:w-2/12 p-3 bg-zinc-100 h-screen border-r z-30",
            { "ml-[100%] md:ml-0 md:block": !naber }
          )}
        >
          <div onClick={RootHomeHandler} className="">
            <p className="p-2 flex items-center gap-2   duration-300 cursor-pointer rounded-lg">
              <FcFolder className="h-8 w-8 " />{" "}
              <span className="font-bold capitalize">explorer </span>
            </p>
          </div>
          <div className="py-2 mt-5 ">
            {/* <p
              className="px-4
           text-sm font-semibold text-zinc-600 flex justify-between items-center gap-2 mb-2"
            >
              <span>Favourite</span>{" "}
              <BsFillStarFill className="text-yellow-400 " />
            </p>
            <hr /> */}
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
            {/* storage  */}
            <div className="w-10/12 mx-auto space-y-2 border-t-2 py-4 text-sm font-semibold">
              <p className=" flex justify-between ">
                Storage <FcAcceptDatabase />
              </p>
              <div className="w-full h-3 bg-slate-300 rounded-md p-[2px]">
                <div
                  style={{ width: `${size}%`, maxWidth: "100%" }}
                  className={cn(
                    `h-full duration-300
                  } bg-green-500 rounded-md`,
                    { "bg-red-400": size > 95 }
                  )}
                ></div>
              </div>
              <p className="font-semibold text-slate-500 text-xs ">
                {size < 95 ? (
                  size + " mb of 100 mb used"
                ) : (
                  <p className="text-red-500">Storage fulled !</p>
                )}
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 rounded-md font-semibold m-4"
          >
            Logout
          </button>
          {fileUploadLoading && (
            // <div className="w-screen h-screen z-30 bg-black bg-opacity-50 fixed top-0 left-0">
            //   <img
            //     src={Processinggif}
            //     className="w-[150px]  absolute bg-white rounded-3xl bottom-3 left-3"
            //   />
            // </div>

            <div className="fixed bottom-5 left-5 z-30 p-5 w-44   shadow-md bg-white border rounded-md">
              <div
                className={cn(
                  "absolute bottom-0 left-0 duration-500 ease-linear w-4/12 p-1 bg-blue-500 border  rounded-md",
                  { "w-full": !fileUploadLoading }
                )}
              ></div>
            </div>
          )}
          <button
            onClick={() => setNavbar(!naber)}
            className={cn(
              " md:hidden fixed text-white rounded-md   bottom-2  right-2 p-2 bg-blue-400  h-fit ",
              {
                // "fixed bottom-0 right-0 ": !naber,
              }
            )}
          >
            <FcMenu size={28} className="border rounded-sm" />
          </button>
        </div>
        {/* sidebar  */}

        <Outlet />
      </div>
    </>
  );
};

export default AppRootLayout;
