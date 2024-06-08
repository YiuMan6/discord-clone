import { type ClassValue, clsx } from "clsx"
import {
  generateUploadButton,
  generateUploadDropzone,
  generateUploader
} from "@uploadthing/react";
import { twMerge } from "tailwind-merge"
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Handle uploading function component
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const Uploader = generateUploader<OurFileRouter>();

// Handle auth
export const currentProfile = () => { 
  const { userId } = auth()
  
  if (!userId) {
    return null
  }

  const profile = db.profile.findUnique({
    where: {
      userId
    }
  })

  return profile
}