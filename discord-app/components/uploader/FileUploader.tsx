import { X } from "lucide-react";
import Image from "next/image";
import { UploadDropzone } from "@/lib/utils";
import "@uploadthing/react/styles.css";

interface FileUploaderProps {
  onChange: (url?: string) => void;
  value?: string;
  endpoint: "serverImage" | "messageFile";
}

const FileUploader = ({ onChange, value, endpoint }: FileUploaderProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className=" relative h-20 w-20">
        <Image fill src={value} alt="upload" className=" rounded-full" />
        <button
          className=" bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          onClick={() => onChange("")}
          type="button">
          <X className=" h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => onChange(res?.[0].url)}
      onUploadError={(res) => {}}
    />
  );
};

export default FileUploader;
