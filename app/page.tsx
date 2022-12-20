import MediaList from "./components/media/MediaList";
import TestModal from "./components/TestModal";

export default function Home() {
  return (
    <>
      <TestModal />
      {/* @ts-expect-error Server Component */}
      <MediaList title="Test" link="/1" />
      {/* @ts-expect-error Server Component */}
      <MediaList title="Test" link="/2" />
      {/* @ts-expect-error Server Component */}
      <MediaList title="Test" link="/3" />
      <TestModal />
    </>
  );
}
