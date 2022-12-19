import MediaList from "./components/media/MediaList";
import TestModal from "./components/TestModal";

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <MediaList title="Test" link="/" />
      <TestModal />
    </>
  );
}
