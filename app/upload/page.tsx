"use client";
import { Uppy } from "@uppy/core";
import AWSS3 from "@uppy/aws-s3";
import { useState } from "react";
import { trcpPureClient } from "@/utils/api";
import { useUppyState } from "./useUppyState";

export default function Home() {
  const [uppy] = useState(() => {
    const uppy = new Uppy();
    uppy.use(AWSS3, {
      shouldUseMultipart: false,
      getUploadParameters(file) {
        console.log(file);

        debugger;

        return trcpPureClient.file.createPresigneUrl.mutate({
          filename: file.data instanceof File ? file.data.name : "test",
          contentType: file.data.type || "",
          size: file.size as number,
        });
      },
    });

    return uppy;
  });

  const files: any = useUppyState(uppy, (s: any) => Object.values(s.files));

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            Array.from(e.target.files).forEach((file) => {
              uppy.addFile({
                name: file.name,
                type: file.type,
                data: file,
              });
            });
          }
        }}
      />
      {files.map((f: any) => {
        const url = URL.createObjectURL(f.data);
        return <img src={url} key={f.id} />;
      })}
    </div>
  );
}
