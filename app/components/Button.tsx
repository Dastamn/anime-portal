import { loadDomAnimation } from "#root/lib/motion";
import { useButton } from "@react-aria/button";
import { LazyMotion, m, useAnimation } from "framer-motion";
import { ReactNode, RefObject, useRef } from "react";
import { FocusRing } from "react-aria";
interface IButton {
  type?: "primary" | "danger" | "warning" | "default";
  look?: "plain" | "gray" | "filled";
  delay?: boolean;
  bold?: boolean;
  onClick: () => void;
  children: ReactNode | string;
}

const transition = { duration: 0.2 };

export function Button({
  type = "default",
  look = "filled",
  bold,
  delay,
  onClick,
  children,
}: IButton) {
  const ref = useRef() as RefObject<Element>;
  const animationControls = useAnimation();
  const variants =
    look === "plain"
      ? {
          start: { opacity: 0.5 },
          end: { opacity: 1 },
        }
      : {
          start: { scale: 0.93 },
          end: { scale: 1 },
        };
  const { buttonProps } = useButton(
    {
      onPressStart: () => {
        animationControls.stop();
        animationControls.set(variants["start"]);
      },
      onPressEnd: () => {
        animationControls.start(variants["end"], transition);
      },
      onPress: onClick,
    },
    ref
  );
  return (
    <FocusRing focusRingClass="">
      <LazyMotion strict features={loadDomAnimation}>
        <m.button
          animate={animationControls}
          className={`btn ${type} ${look}`}
          style={{
            WebkitTapHighlightColor: "transparent",
            fontWeight: bold ? "bold" : "normal",
          }}
          {...(buttonProps as any)}
        >
          {children}
        </m.button>
      </LazyMotion>
    </FocusRing>
  );
}
