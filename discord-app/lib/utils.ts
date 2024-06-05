import { type ClassValue, clsx } from "clsx"
import {
  generateUploadButton,
  generateUploadDropzone,
  generateUploader
} from "@uploadthing/react";
import { twMerge } from "tailwind-merge"
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Handle uploading function component
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const Uploader = generateUploader<OurFileRouter>();