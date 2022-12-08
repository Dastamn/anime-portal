import Test from "./components/Test";

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Test />
    </div>
  );
}
