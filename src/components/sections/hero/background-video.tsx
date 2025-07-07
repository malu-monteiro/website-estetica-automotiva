import { MEDIA_PATHS } from "@/lib/constants/hero";

export function BackgroundVideo() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={MEDIA_PATHS.videoPoster}
        className="absolute inset-0 h-full w-full object-cover -z-10"
      >
        <source src={MEDIA_PATHS.videoWebm} type="video/webm" />
        <source src={MEDIA_PATHS.videoMp4} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />

      {/* Additional gradient from the left to the middle of the screen */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
    </>
  );
}
