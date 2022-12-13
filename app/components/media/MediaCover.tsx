import { BaseMediaFragment } from "#root/types";
import Image from "next/image";
import Link from "next/link";

export default function MediaCover({ data }: { data: BaseMediaFragment }) {
  return data.title && data.coverImage ? (
    <Link href="/" style={{ borderRadius: "7px" }}>
      <div className="media-cover">
        <Image
          src={data.coverImage.large as string}
          alt={data.title.romaji as string}
          loading="lazy"
          fill={true}
          sizes="(max-width: 1024px) 140px, 165px"
          style={{ backgroundColor: data.coverImage.color as string }}
        />
        <span>{data.title.romaji}</span>
      </div>
    </Link>
  ) : null;
}
