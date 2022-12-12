import MediaList from "./components/media/MediaList";

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <MediaList title="Test" />
    </div>
  );
}
