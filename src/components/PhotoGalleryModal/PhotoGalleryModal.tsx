import { useState, useEffect } from "react";
import Image from "next/image";

export const PhotoGalleryModal = ({
  show,
  setShow,
  photos,
}: {
  show: boolean;
  setShow: Function;
  photos: { photo: string }[];
}) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const cleanup = () => {
      setPage(0);
      setShow(false);
    };

    return cleanup;
  }, []);

  interface photoGallery {
    photo: string;
  }

  return (
    <>
      <style jsx>
        {`
          body {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
      {show && (
        <div className="fixed top-0 left-0 w-full h-full  backdrop-blur-sm z-50 ">
          <div
            className="
               bg-[rgba(0, 0, 0, 0.20)]
             duration-1200 ease transition-all  lg:w-[65%] md:w-[65%] h-[90%] w-[70%] h-[auto]  rounded flex flex-col   p-1 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            <button
              className="w-auto rounded self-end text-[white] p-1 hover:scale-110 hover:text-[red] transition ease duration-800"
              onClick={() => setShow(false)}
            >
              Return to screen
            </button>

            <div className="grid lg:grid-cols-5 transition-all ease duration-800 grid-cols-2 w-full gap-y-2 gap-x-2 h-[500px] overflow-scroll">
              {photos.map((photo: photoGallery, index: number) => (
                <Image
                  key={index}
                  src={photo.photo}
                  height={250}
                  width={250}
                  alt="event photo"
                  objectFit="cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
