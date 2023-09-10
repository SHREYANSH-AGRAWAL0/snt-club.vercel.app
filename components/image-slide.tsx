import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface ImageSlideProps {
  imageUrls: (StaticImageData | string)[];
  fullScreen: boolean;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ imageUrls, fullScreen }) => {
  return (
    // <div className="flex space-x-4">
    //   {imageUrls.map((imageUrl, index) => (
    //     <div key={index} className="flex-shrink-0 w-1/4 h-2/4">
    //       {typeof imageUrl === 'string' ? (
    //         <Image src={imageUrl} alt={`Slide ${index + 1}`} className="w-full h-2/4 rounded object-cover aspect-video" />
    //       ) : (
    //         <Image src={imageUrl} alt={`Slide ${index + 1}`} className="w-full h-2/4 rounded object-cover aspect-video" />
    //       )}
    //     </div>
    //   ))}
    // </div>
    <div className={`flex space-x-4 ${fullScreen ? 'flex-col' : ''}`}>
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          className={`flex-shrink-0 ${fullScreen ? 'w-full' : 'w-1/4'}`}
        >
          {typeof imageUrl === 'string' ? (
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className={`w-full h-auto rounded object-cover aspect-video ${fullScreen ? 'mb-2' : ''}`}
            />
          ) : (
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className={`w-full h-auto rounded object-cover aspect-video ${fullScreen ? 'mb-2' : ''}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlide;