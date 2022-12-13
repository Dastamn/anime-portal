import MediaList from "./components/media/MediaList";

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <MediaList title="Test" link="/" />
    </>
  );
}
