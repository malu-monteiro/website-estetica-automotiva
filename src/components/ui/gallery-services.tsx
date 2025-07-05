"use client";

import { Ref, forwardRef, useState, useEffect } from "react";

import Image, { ImageProps } from "next/image";

import { motion, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";
import { ABOUT_CONTENT } from "@/lib/constants/about";

import { WhatsappButton } from "./whatsapp-button";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    const animationTimer = setTimeout(() => {
      setIsLoaded(true);
    }, (animationDelay + 0.4) * 1000);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: { x: any; y: any; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  // Desktop photos configuration
  const desktopPhotos = [
    {
      id: 1,
      order: 0,
      x: "-320px",
      y: "15px",
      zIndex: 50,
      direction: "left" as Direction,
      src: "/photo-gallery/image1.jpg",
    },
    {
      id: 2,
      order: 1,
      x: "-160px",
      y: "32px",
      zIndex: 40,
      direction: "left" as Direction,
      src: "/photo-gallery/image2.jpg",
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: "8px",
      zIndex: 30,
      direction: "right" as Direction,
      src: "/photo-gallery/image3.jpg",
    },
    {
      id: 4,
      order: 3,
      x: "160px",
      y: "22px",
      zIndex: 20,
      direction: "right" as Direction,
      src: "/photo-gallery/image4.jpg",
    },
    {
      id: 5,
      order: 4,
      x: "320px",
      y: "44px",
      zIndex: 10,
      direction: "left" as Direction,
      src: "/photo-gallery/image5.jpg",
    },
  ];

  // Mobile photos configuration (simplified positions)
  const mobilePhotos = [
    {
      id: 1,
      order: 0,
      x: "-120px",
      y: "10px",
      zIndex: 50,
      direction: "left" as Direction,
      src: "/photo-gallery/image1.jpg",
    },
    {
      id: 2,
      order: 1,
      x: "-60px",
      y: "20px",
      zIndex: 40,
      direction: "left" as Direction,
      src: "/photo-gallery/image2.jpg",
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: "5px",
      zIndex: 30,
      direction: "right" as Direction,
      src: "/photo-gallery/image3.jpg",
    },
    {
      id: 4,
      order: 3,
      x: "60px",
      y: "15px",
      zIndex: 20,
      direction: "right" as Direction,
      src: "/photo-gallery/image4.jpg",
    },
    {
      id: 5,
      order: 4,
      x: "120px",
      y: "25px",
      zIndex: 10,
      direction: "left" as Direction,
      src: "/photo-gallery/image5.jpg",
    },
  ];

  return (
    <div className="container-layout">
      {/* Background grid pattern - hidden on mobile */}
      <div className="absolute inset-0 hidden md:block top-[100px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]" />

      {/* Title and Subtitle */}
      <div className="text-center mb-12 md:mb-20">
        <h2 className="font-syne uppercase text-3xl md:text-4xl font-bold mb-4 md:mb-6">
          Entre em Contato
        </h2>
        <p className="text-lg md:text-xl xl:text-2xl font-light text-gray-300 leading-relaxed max-w-2xl mx-auto px-4">
          Solicite um orçamento personalizado em poucos cliques
        </p>
      </div>

      {/* Photos Gallery */}
      <div className="relative mb-8 md:mb-12 h-[250px] md:h-[350px] w-full flex items-center justify-center">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            {/* Desktop Gallery */}
            <div className="relative hidden md:block h-[220px] w-[220px]">
              {[...desktopPhotos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }}
                  variants={photoVariants}
                  custom={{
                    x: photo.x,
                    y: photo.y,
                    order: photo.order,
                  }}
                >
                  <Photo
                    width={220}
                    height={220}
                    src={photo.src}
                    alt="Galeria de fotos"
                    direction={photo.direction}
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile Gallery */}
            <div className="relative md:hidden h-[160px] w-[160px]">
              {[...mobilePhotos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }}
                  variants={photoVariants}
                  custom={{
                    x: photo.x,
                    y: photo.y,
                    order: photo.order,
                  }}
                >
                  <Photo
                    width={160}
                    height={160}
                    src={photo.src}
                    alt="Galeria de fotos"
                    direction={photo.direction}
                    isMobile
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* WhatsApp Button */}
      <div className="flex justify-center">
        <WhatsappButton
          text={ABOUT_CONTENT.contact.text}
          whatsappMessage={ABOUT_CONTENT.contact.whatsappMessage}
          className="border-transparent bg-green-600 hover:shadow-green-800"
        />
      </div>
    </div>
  );
};

function getRandomNumberInRange(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

const MotionImage = motion(
  forwardRef(function MotionImage(
    props: ImageProps,
    ref: Ref<HTMLImageElement>
  ) {
    return <Image ref={ref} {...props} />;
  })
);

type Direction = "left" | "right";

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  isMobile = false,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
  isMobile?: boolean;
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  function handleMouse(event: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag={!isMobile} // Disable drag on mobile for better touch experience
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: isMobile ? 1.05 : 1.2, zIndex: 9999 }}
      whileHover={
        !isMobile
          ? {
              scale: 1.1,
              rotateZ: 2 * (direction === "left" ? -1 : 1),
              zIndex: 9999,
            }
          : {}
      }
      whileDrag={
        !isMobile
          ? {
              scale: 1.1,
              zIndex: 9999,
            }
          : {}
      }
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: isMobile ? "manipulation" : "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0",
        !isMobile && "cursor-grab active:cursor-grabbing"
      )}
      onMouseMove={!isMobile ? handleMouse : undefined}
      onMouseLeave={!isMobile ? resetMouse : undefined}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
        <MotionImage
          className="rounded-2xl md:rounded-3xl object-cover"
          fill
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};
