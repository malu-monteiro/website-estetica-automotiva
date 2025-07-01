interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
}

export const StarIcon = ({ size = "md" }) => {
  const sizeClass =
    size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5";
  return (
    <svg
      className={`${sizeClass} fill-current`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
};

export const StarRating = ({ rating, size = "md" }: StarRatingProps) => (
  <div className="flex items-center gap-1 text-yellow-400">
    {Array.from({ length: rating }).map((_, i) => (
      <StarIcon key={i} size={size} />
    ))}
  </div>
);
