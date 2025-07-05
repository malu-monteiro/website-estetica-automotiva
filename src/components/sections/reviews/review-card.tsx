import { cn, getInitials } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  source: string;
  body: string;
}

export const ReviewCard = ({ name, body, source }: ReviewCardProps) => (
  <figure
    className={cn(
      "relative h-60 w-64 cursor-pointer overflow-hidden rounded-md border p-4",
      "border-zinc-700 bg-zinc-800 hover:bg-zinc-900 transition-colors"
    )}
  >
    <div className="flex flex-row items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-black text-sm font-semibold">
        {getInitials(name)}
      </div>

      <div className="flex flex-col">
        <figcaption className="text-sm font-medium">{name}</figcaption>

        <p className="text-xs font-medium text-white/60">{source}</p>
      </div>
    </div>

    <blockquote className="mt-2 text-sm text-white/80">{body}</blockquote>
  </figure>
);
