import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Destination } from "@/data/destinations";
import { illustrationAlt } from "@/lib/images";
import { Badge } from "./ui";
export function DestinationCard({
  destination,
  priority = false,
}: {
  destination: Destination;
  priority?: boolean;
}) {
  return (
    <article className="group">
      <Link href={`/destinations/${destination.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
          <Image
            src={destination.image}
            alt={illustrationAlt(destination.name)}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            priority={priority}
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <Badge className="absolute top-4 left-4 border-0 bg-ivory text-forest">
            {destination.category}
          </Badge>
          <span className="absolute right-3 bottom-3 rounded bg-forest/90 px-2 py-1 text-[10px] tracking-wide text-white">
            ILLUSTRATION
          </span>
        </div>
        <div className="pt-5">
          <p className="text-[10px] font-semibold tracking-[.14em] text-earth uppercase">
            {destination.region}
          </p>
          <div className="mt-2 flex items-start justify-between gap-3">
            <h3 className="font-display text-3xl leading-tight group-hover:text-warm-red">
              {destination.name}
            </h3>
            <ArrowUpRight className="mt-1 shrink-0" size={20} />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-earth">
            {destination.summary}
          </p>
        </div>
      </Link>
    </article>
  );
}
