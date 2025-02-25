"use client";
import { Uppy } from "@uppy/core";
import AWSS3 from "@uppy/aws-s3";
import { useState } from "react";

const useUppyState = (uppy: Uppy, selector: (state: any) => any) => {
  const [state, setState] = useState(selector(uppy.getState()));
  uppy.on("state-update", (oldState, newState) => {
    setState(selector(newState));
  });
  return state;
};

export default function Home() {
  const [uppy] = useState(() => {
    const uppy = new Uppy();
    uppy.use(AWSS3, {
      shouldUseMultipart: false,
      getUploadParameters(file) {
        return {
          url: "",
        };
      },
    });

    return uppy;
  });

  const files = useUppyState(uppy, (s) => Object.values(s.files));

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
