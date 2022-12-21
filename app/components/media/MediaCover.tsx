import { BaseMediaFragment } from "#root/types";
import Link from "next/link";
import LazyImage from "../LazyImage";

export default function MediaCover({ data }: { data: BaseMediaFragment }) {
  return data.title && data.coverImage ? (
    <Link href="/" style={{ borderRadius: "8px" }}>
      <div
        className="media-cover"
        style={{ backgroundColor: data.coverImage.color as string }}
      >
        <LazyImage
          src={data.coverImage.large as string}
          alt={data.title.romaji as string}
          loading="lazy"
          sizes="(max-width: 768px) 115px,(max-width: 1024px) 140px, 165px"
          fill={true}
          motionStyle={{
            position: "absolute",
            inset: 0,
          }}
        />
        <div className="overlay">
          <span>{data.title.romaji}</span>
        </div>
      </div>
    </Link>
  ) : null;
}
