import Slider from "react-slick";
import Image from "next/image";

export const CarouselPhoto = ({
  photos,
  expand,
}: {
  photos: { photo: string }[];
  expand: boolean;
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    rows: expand ? 2 : 1,
  };

  interface CarouselPhotos {
    photo: string;
  }

  return (
    <>
      <div className="w-full ">
        <Slider className="transition-all ease duration-800" {...settings}>
          {photos.map((event: CarouselPhotos, index: number) => (
            <div key={index} className="px-[10px]">
              <Image
                src={event.photo}
                objectFit="cover"
                alt="Photo"
                className="rounded"
                height={250}
                width={250}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
