import React from "react";

const BrandItem = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-52 p-4"
    />
  );
};

const BrandInfo = () => {
  const brands = [
    { src: "/assets/images/spotify.svg", alt: "spotify" },
    { src: "/assets/images/google.svg", alt: "google" },
    { src: "/assets/images/stripe.svg", alt: "stripe" },
    { src: "/assets/images/youtube.svg", alt: "youtube" },
    { src: "/assets/images/microsoft.svg", alt: "microsoft" },
    { src: "/assets/images/medium.svg", alt: "medium" },
    { src: "/assets/images/zoom.svg", alt: "zoom" },
    { src: "/assets/images/uber.svg", alt: "uber" },
    { src: "/assets/images/grab.svg", alt: "grab" },
  ];

  return (
    <div className="px-20 py-12 flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl text-center">
        Join these <span className="text-[#7848F4]">brands</span>
      </h1>
      <p className="text-lg font-bold text-center py-4 max-w-2xl">
        We've had the pleasure of working with industry-defining brands. These
        are just some of them.
      </p>
      <div className="flex flex-row items-center justify-center py-8 flex-wrap gap-4">
        {brands.map((brand, index) => (
          <BrandItem key={index} src={brand.src} alt={brand.alt} />
        ))}
      </div>
    </div>
  );
};

export default BrandInfo;
