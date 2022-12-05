import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >{`theme: ${theme}`}</button>
    </div>
  );
}
