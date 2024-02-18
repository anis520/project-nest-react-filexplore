import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categorizeFileType,
  uploadFileWithlink,
} from "../../firebase/services/AllService";
import {
  filesAdd,
  filesUpdate,
} from "../../features/filexplore/FileExploreApiSlice";
import {
  getFilesData,
  setLoading,
} from "../../features/filexplore/FileExplore";
import { toast } from "react-toastify";

const UploadFile = ({ showUploadFile, setshowUploadFile }) => {
  const [file, setfile] = useState(null);
  const { root, size } = useSelector(getFilesData);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleCloseCreateFolderModal = () => {
    setshowUploadFile(false);
  };

  const handleCreateFolder = async () => {
    dispatch(setLoading());
    if (size > 95) {
      setshowUploadFile(false);
      return toast.warn("Storage almost fulled");
    }
    setshowUploadFile(false);
    const fileinfo = await uploadFileWithlink(file);

    const fileParts = file.name.split(".");
    const fileExtension = fileParts[fileParts.length - 1];
    const fileType = categorizeFileType(fileExtension);

    //get file size
    const fileSizeInKB = file.size / 1024; // Convert bytes to kilobytes
    const fileSizeInMB = fileSizeInKB / 1024; // Convert kilobytes to megabytes

    dispatch(
      filesAdd({
        title: file.name,
        type: fileType,
        ext: fileExtension,
        url: fileinfo,
        parentId: root?.id,
        size: Math.ceil(fileSizeInMB),
      })
    );
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
