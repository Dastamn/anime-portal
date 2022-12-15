import { BaseMediaFragment } from "#root/types";
import Link from "next/link";
import LazyImage from "../LazyImage";

export default function MediaCover({ data }: { data: BaseMediaFragment }) {
  return data.title && data.coverImage ? (
    <Link href="/" style={{ borderRadius: "7px" }}>
      <div
        className="media-cover"
        style={{ backgroundColor: data.coverImage.color as string }}
      >
        <LazyImage
          src={data.coverImage.large as string}
          alt={data.title.romaji as string}
          loading="lazy"
          fill={true}
          sizes="(max-width: 1024px) 140px, 165px"
        />
        <div className="overlay">
          <span>{data.title.romaji}</span>
        </div>
      </div>
    </Link>
  ) : null;
}
