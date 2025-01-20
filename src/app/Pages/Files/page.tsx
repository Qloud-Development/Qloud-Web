'use client'
import React, { useState } from "react";

// Add interface for file type
interface FileObject {
  id: string;
  name: string;
  url: string;
}

const Files = () => {
  const [files, setFiles] = useState<FileObject[]>([]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(event.target.files || []) as File[];
    const newFiles = uploadedFiles.map((file, index) => ({
      id: `${files.length + index}`,
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-black text-center mb-6">Your Files</h1>

      {/* Upload Button */}
      <label
        htmlFor="file-upload"
        className="bg-black text-white py-2 px-4 rounded-lg cursor-pointer mb-6"
      >
        Upload File
        <input
          id="file-upload"
          type="file"
          className="hidden"
          multiple
          onChange={handleUpload}
        />
      </label>

      {/* File Grid */}
      {files.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex flex-col items-center border border-gray-300 rounded-lg p-4 bg-white shadow-md"
            >
              <img
                src={file.url}
                alt={file.name}
                className="w-24 h-24 object-cover mb-4 rounded"
              />
              <p className="text-sm text-center text-black">{file.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg mt-6">No files uploaded yet.</p>
      )}
    </div>
  );
};

export default Files;
