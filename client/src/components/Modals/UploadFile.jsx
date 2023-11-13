import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadFileWithlink } from "../../firebase/services/AllService";
import {
  filesAdd,
  filesUpdate,
} from "../../features/filexplore/FileExploreApiSlice";

const UploadFile = ({ showUploadFile, setshowUploadFile }) => {
  const [file, setfile] = useState(null);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleCloseCreateFolderModal = () => {
    setshowUploadFile(false);
  };

  const handleCreateFolder = async () => {
    setshowUploadFile(false);
    const fileinfo = await uploadFileWithlink(file);
    dispatch(filesAdd({ title: file.name, type: "photo", url: fileinfo }));
    console.log(fileinfo);
    console.log(file);
  };

  return (
    showUploadFile && (
      <div className=" fixed top-0 left-0 w-full h-full bg-zinc-500 bg-opacity-60 z-30 flex items-center justify-center">
        <div
          onClick={handleCloseCreateFolderModal}
          className="absolute top-0 left-0 w-full h-full z-0"
        ></div>

        <div className=" w-8/12  md:w-4/12  bg-white rounded-md z-10 p-4 space-y-2">
          <p className="text-zinc-800 font-semibold">Create new folder</p>
          <input
            onChange={(e) => setfile(e.target.files[0])}
            type="file"
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

export default UploadFile;
