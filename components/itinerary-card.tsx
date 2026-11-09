import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SampleItinerary } from "@/data/sampleItineraries";
import { images, illustrationAlt } from "@/lib/images";
import { Badge } from "./ui";
export function ItineraryCard({ trip }: { trip: SampleItinerary }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-sand bg-white">
      <div className="relative aspect-[16/9]">
        <Image
          src={images[trip.imageKey]}
          alt={illustrationAlt(trip.title)}
          fill
          sizes="(max-width:767px) 100vw, 33vw"
          className="object-cover"
        />
        <Badge className="absolute top-4 left-4 border-0 bg-ivory text-forest">
          {trip.days} days · Sample
        </Badge>
        <span className="absolute right-3 bottom-3 rounded bg-forest px-2 py-1 text-[10px] text-white">
          ILLUSTRATION
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-3xl">{trip.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-earth">
          {trip.description}
        </p>
        <Link
          href={`/plan?sample=${trip.id}`}
          className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-forest"
        >
          Make it your journey <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}
