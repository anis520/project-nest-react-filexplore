import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filesAdd } from "../../features/filexplore/FileExploreApiSlice";
import { getFilesData } from "../../features/filexplore/FileExplore";

const CreateFolder = ({ showCreateFolder, setShowCreateFolder }) => {
  const dispatch = useDispatch();
  const { root } = useSelector(getFilesData);
  const [input, setInput] = useState("New folder");
  const handleCloseCreateFolderModal = () => {
    setShowCreateFolder(false);
  };

  const handleCreateFolder = () => {
    dispatch(filesAdd({ title: input, type: "folder", parentId: root?.id }));
    setShowCreateFolder(false);
  };

  return (
    showCreateFolder && (
      <div className=" fixed top-0 left-0 w-full h-full bg-zinc-500 bg-opacity-60 z-30 flex items-center justify-center">
        <div
          onClick={handleCloseCreateFolderModal}
          className="absolute top-0 left-0 w-full h-full z-0"
        ></div>

        <div className=" w-8/12  md:w-4/12  bg-white rounded-md z-10 p-4 space-y-2">
          <p className="text-zinc-800 font-semibold">Create new folder</p>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="w-full outline-none rounded-md border  p-1"
          />

          <div className="flex gap-2">
            <button
              onClick={handleCreateFolder}
              className="bg-blue-400 text-white px-2 py-1 w-6/12 rounded-md font-semibold"
            >
              Save
            </button>
            <button
              onClick={handleCloseCreateFolderModal}
              className="border  px-2 py-1 w-6/12 rounded-md font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CreateFolder;
