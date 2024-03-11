import React, { useEffect, useState } from "react";
import {
  FcCrystalOscillator,
  FcDocument,
  FcFolder,
  FcHome,
  FcLowPriority,
  FcMusic,
  FcNext,
  FcOpenedFolder,
  FcPrevious,
  FcSearch,
  FcVideoFile,
} from "react-icons/fc";
import emptyItemgif from "../../../public/empty.gif";
import { FaFile, FaFolder } from "react-icons/fa";

import {
  BsFolderPlus,
  BsThreeDots,
  BsToggleOff,
  BsToggleOn,
  BsFillStarFill,
  BsUpload,
} from "react-icons/bs";
import CreateFolder from "../Modals/CreateFolder";
import { useDispatch, useSelector } from "react-redux";
import {
  filesDelete,
  getAllFiles,
  getusedStorage,
} from "../../features/filexplore/FileExploreApiSlice";
import UploadFile from "../Modals/UploadFile";
import { deleteFile } from "../../firebase/services/AllService";
import {
  getFilesData,
  setQuickTab,
  setRoot,
} from "../../features/filexplore/FileExplore";
import { toast } from "react-toastify";
import { getUserData } from "../../features/user/userSlice";
import cn from "../../utils/cn";

const Home = () => {
  const { token } = useSelector(getUserData);

  const [fullView, setFullView] = useState(null);
  const dispatch = useDispatch();
  const { allFiles, filterData, loading, root, size } =
    useSelector(getFilesData);

  const [view, setview] = useState(true);
  const [quick, setQuick] = useState(null);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [showUploadFile, setshowUploadFile] = useState(false);
  const handleOpenCreateModel = () => {
    setShowCreateFolder(true);
  };
  const handleOpenUploadFileMOdel = () => {
    setshowUploadFile(true);
  };
  const handleDelete = (data) => {
    dispatch(filesDelete(data.id));
    deleteFile(data.url);
  };

  const handleQuick = (type) => {
    const item = allFiles.filter((item) => item.type === type);

    dispatch(setQuickTab(item));
    setQuick(type);
  };

  const RootHandler = (data) => {
    if (data.type == "picture" || data.type == "video") {
      setFullView(data);
    }
    dispatch(setRoot(data));
  };

  const handleBack = () => {
    let get = allFiles.find((i) => i.id == root.parentId);
    if (get) {
      dispatch(setRoot(get));
    } else {
      dispatch(setRoot({ parentId: null }));
    }
  };
  const handleCloseFullView = () => {
    handleBack();
    setFullView(null);
  };
  useEffect(() => {
    dispatch(getAllFiles(token));
    dispatch(getusedStorage(token));
  }, []);

  return (
    <div className="w-full md:w-10/12 h-screen  overflow-y-auto  ">
      {fullView && (
        <div
          id="view"
          onClick={handleCloseFullView}
          className="fixed flex items-center justify-center z-30 top-0 left-0  w-screen h-screen bg-gray-100 bg-opacity-50 backdrop-blur-sm "
        >
          {fullView.type == "picture" && (
            <img
              src={fullView.url}
              className="w-7/12 border shadow-md  h-4/5 object-cover rounded-lg"
              alt=""
            />
          )}
          {fullView.type == "video" && (
            <video
              width="320"
              height="240"
              controls
              className="w-7/12 border shadow-md  h-4/5 object-cover rounded-lg"
            >
              <source src={fullView.url} type="video/mp4" />
            </video>
          )}
        </div>
      )}
      {/* create folder model  */}
      <CreateFolder
        showCreateFolder={showCreateFolder}
        setShowCreateFolder={setShowCreateFolder}
      />
      {/* upload file model  */}
      <UploadFile
        showUploadFile={showUploadFile}
        setshowUploadFile={setshowUploadFile}
      />

      <div className="sticky top-0 left-0 bg-white z-10">
        {/* topbar  */}
        <div className="flex  items-center p-2 gap-3  ">
          <div className="flex w-20 justify-between px-1">
            <FcPrevious
              onClick={handleBack}
              className="hover:bg-zinc-200 h-6 w-6 rounded-md duration-300 cursor-pointer p-1"
            />
            <FcNext className="hover:bg-zinc-200 h-6 w-6 rounded-md duration-300 cursor-pointer p-1" />
          </div>
          {/* button  */}

          {/* button  */}

          <div className="flex items-center w-full border rounded-full px-3 py-1 gap-1">
            <FcHome className="" />
            <FcNext />
            <p className="font-semibold text-sm">{root?.title}</p>

            <p className="font-semibold text-sm">{quick}</p>
          </div>
          <div className="relative ">
            <input
              type="text"
              placeholder="Search"
              className=" outline-none border rounded-full px-5"
              name=""
              id=""
            />
            <FcSearch className="absolute right-2 top-1" />
          </div>
        </div>
        {/* topbar  */}
        {/* middlebar */}

        <div className="flex items-center px-4 gap-3">
          {/* file upload  and new folder  */}
          <button
            disabled={size > 95}
            onClick={handleOpenUploadFileMOdel}
            className={cn(
              "duration-300 flex items-center gap-2 bg-zinc-200 text-zinc-600 px-2 py-1 rounded-md font-semibold text-sm",
              { "opacity-70 cursor-not-allowed": size > 95 }
            )}
          >
            <BsUpload /> Upload File
          </button>
          <button
            onClick={handleOpenCreateModel}
            className=" flex items-center gap-2 bg-zinc-200 text-zinc-600 px-2 py-1 rounded-md font-semibold text-sm"
          >
            <BsFolderPlus /> New folder
          </button>

          {/* file upload  and new folder  */}
          {/* view  */}
          <div className="unselectable ms-auto  mr-5  flex border px-2 py-1  w-fit items-center justify-between  font-semibold text-sm gap-2 rounded-md border-zinc-300 bg-zinc-200">
            <p>grid</p>

            <span
              className="cursor-pointer hover:scale-110 duration-500 "
              onClick={() => setview(!view)}
            >
              {view ? (
                <BsToggleOn className="h-5 w-5 text-green-400" />
              ) : (
                <BsToggleOff className="h-5 w-5" />
              )}
            </span>
            <p>List</p>
          </div>
          {/* view  */}
        </div>

        {/* middlebar */}
      </div>

      {/* body  */}
      <div
        className={` w-full p-5   ${
          view
            ? "space-y-2"
            : "grid   sm:grid-cols-4  md:grid-cols-6 lg:grid-cols-9 gap-4 "
        }    `}
      >
        {/* single folder */}
        {filterData?.map((item) => {
          return (
            <div
              key={item.id}
              onDoubleClick={() => RootHandler(item)}
              className={`relative    bg-zinc-100 hover:bg-zinc-200  duration-75 flex  ${
                view ? "flex-row border  pe-20 " : " flex-col h-36"
              }   items-center justify-between h-fit  p-1 rounded-lg    duration-300 `}
            >
              <div
                className={`absolute    cursor-pointer   ${
                  view ? " top-4 right-10" : "  top-1 right-2"
                } group`}
              >
                <BsThreeDots />
                <div className="bg-white border py-2 px-1 invisible group-hover:visible absolute top-3 left-0 md:left-[-25px] duration-300 rounded-md z-30">
                  <ul className="text-zinc-800 font-semibold text-sm  ">
                    <li className="hover:bg-zinc-100 px-3 rounded-md">
                      Rename
                    </li>

                    <li
                      onClick={() => handleDelete(item)}
                      className="hover:bg-zinc-100 px-3 rounded-md"
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              </div>

              {item.type == "picture" && (
                <img
                  src={item.url}
                  className={` object-cover ${
                    view ? "w-10 h-10" : " w-20 h-20"
                  }`}
                  alt=""
                />
              )}
              {item.type == "folder" && (
                <FcOpenedFolder
                  className={` ${view ? "w-10 h-10" : " w-20 h-20"}`}
                />
              )}
              {item.type == "document" && (
                <FcDocument
                  className={` ${view ? "w-10 h-10" : " w-20 h-20"}`}
                />
              )}
              {item.type == "music" && (
                <FcMusic className={` ${view ? "w-10 h-10" : " w-20 h-20"}`} />
              )}
              {item.type == "video" && (
                <FcVideoFile
                  className={` ${view ? "w-10 h-10" : " w-20 h-20"}`}
                />
              )}

              <p
                className={cn(
                  "text-[10px] w-full overflow-hidden p-1  font-semibold text-zinc-500",
                  {
                    "text-xs": view,
                  }
                )}
              >
                {item.title}
              </p>
            </div>
          );
        })}
        {filterData?.length <= 0 && (
          <div className="flex items-center justify-center h-full w-full">
            <img src={emptyItemgif} className="w-5/12 mx-auto   " />
          </div>
        )}

        {loading && (
          <div className="flex gap-6 py-5 items-end">
            <FaFolder className="animate-pulse text-amber-500 text-4xl" />
            <FaFile className="animate-pulse text-blue-400 mb-1 text-4xl" />
            <FaFolder className="animate-pulse text-amber-500 text-4xl" />
            <FaFile className="animate-pulse text-blue-400 mb-1 text-4xl" />
            <FaFile className="animate-pulse text-blue-400 mb-1 text-4xl" />
            <FaFolder className="animate-pulse text-amber-500 text-4xl" />
            <FaFolder className="animate-pulse text-amber-500 text-4xl" />
            <FaFolder className="animate-pulse text-amber-500 text-4xl" />
          </div>
        )}

        {/* single folder  */}
      </div>

      {/* body  */}
    </div>
  );
};

export default Home;
