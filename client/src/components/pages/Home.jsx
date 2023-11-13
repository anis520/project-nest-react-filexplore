import React, { useState } from "react";
import {
  FcCrystalOscillator,
  FcFolder,
  FcHome,
  FcNext,
  FcOpenedFolder,
  FcPrevious,
  FcSearch,
} from "react-icons/fc";
import {
  BsFolderPlus,
  BsThreeDots,
  BsToggleOff,
  BsToggleOn,
  BsUpload,
} from "react-icons/bs";
import CreateFolder from "../Modals/CreateFolder";
import { useDispatch, useSelector } from "react-redux";
import { filesDelete } from "../../features/filexplore/FileExploreApiSlice";
import UploadFile from "../Modals/UploadFile";
import { deleteFile } from "../../firebase/services/AllService";
import { getFilesData } from "../../features/filexplore/FileExplore";

const Home = () => {
  const dispatch = useDispatch();
  const { allFiles } = useSelector(getFilesData);
  console.log(allFiles);
  const [view, setview] = useState(false);
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

  return (
    <div className="flex">
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

      {/* sidebar */}
      <div className="w-2/12 p-3 bg-zinc-100 h-screen border-r">
        <div className="">
          <p className="p-2 flex items-center gap-2   duration-300 cursor-pointer rounded-lg">
            <FcFolder className="h-8 w-8 " />{" "}
            <span className="font-bold capitalize">explorer </span>
          </p>
        </div>

        <div className="p-2 mt-5 ">
          <p className="text-sm font-semibold text-zinc-600 flex items-center gap-2 mb-2">
            <span>Pinned</span> <FcCrystalOscillator />
          </p>
          <hr />
        </div>
      </div>
      {/* sidebar  */}

      <div className="w-10/12">
        {/* topbar  */}
        <div className="flex  items-center p-2 gap-3">
          <div className="flex w-20 justify-between px-1">
            <FcPrevious className="hover:bg-zinc-200 h-6 w-6 rounded-md duration-300 cursor-pointer p-1" />
            <FcNext className="hover:bg-zinc-200 h-6 w-6 rounded-md duration-300 cursor-pointer p-1" />
          </div>
          {/* button  */}

          {/* button  */}

          <div className="flex items-center w-full border rounded-full px-3 py-1 gap-1">
            <FcHome className="" />
            <FcNext />
            <p className="font-semibold text-sm">Home</p>
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
            onClick={handleOpenUploadFileMOdel}
            className="flex items-center gap-2 bg-zinc-200 text-zinc-600 px-2 py-1 rounded-md font-semibold text-sm"
          >
            <BsUpload /> Upload File
          </button>
          <button
            onClick={handleOpenCreateModel}
            className="flex items-center gap-2 bg-zinc-200 text-zinc-600 px-2 py-1 rounded-md font-semibold text-sm"
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
        {/* body  */}
        <div
          className={` w-full p-5   ${
            view
              ? "space-y-2"
              : "grid   sm:grid-cols-4  md:grid-cols-6 lg:grid-cols-9 gap-4 "
          }    `}
        >
          {/* single folder */}
          {allFiles?.map((item) => {
            return item.type == "folder" ? (
              <div
                key={item.id}
                className={`relative   bg-zinc-100 hover:bg-zinc-200  duration-75 flex  ${
                  view ? "flex-row border pe-20" : " flex-col"
                }   items-center justify-between h-fit  p-1 rounded-lg    duration-300 `}
              >
                <div
                  className={`absolute   cursor-pointer   ${
                    view ? " top-4 right-10" : "  top-1 right-2"
                  } group`}
                >
                  <BsThreeDots />
                  <div className="bg-white border py-2 px-1 invisible group-hover:visible absolute top-3 left-0 duration-300 rounded-md z-30">
                    <ul className="text-zinc-800 font-semibold text-xs ">
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

                <FcOpenedFolder
                  className={` ${view ? "w-10 h-10" : " w-20 h-20"}`}
                />
                <p className="text-sm font-semibold text-zinc-500">
                  {item.title}
                </p>
              </div>
            ) : (
              <div
                key={item.id}
                className={`relative   bg-zinc-100 hover:bg-zinc-200  duration-75 flex    ${
                  view ? "flex-row border pe-20" : " flex-col"
                }   items-center justify-between h-fit  p-1 rounded-lg    duration-300 `}
              >
                <div
                  className={`absolute   cursor-pointer   ${
                    view ? " top-4 right-10" : "  top-1 right-2"
                  } group`}
                >
                  <BsThreeDots />
                  <div className="bg-white border py-2 px-1 invisible group-hover:visible absolute top-3 left-0 duration-300 rounded-md z-30">
                    <ul className="text-zinc-800 font-semibold text-xs ">
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

                <img
                  src={item.url}
                  className={` ${view ? "w-10 h-10" : " w-24 h-16 mt-4"}`}
                  alt="photo"
                />
                <p className="text-sm font-semibold text-zinc-500">
                  {item.title}
                </p>
              </div>
            );
          })}

          {/* single folder  */}
        </div>

        {/* body  */}
      </div>
    </div>
  );
};

export default Home;
