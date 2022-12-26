import { loadDomAnimation } from "#root/lib/motion";
import { useButton } from "@react-aria/button";
import { LazyMotion, m, useAnimation } from "framer-motion";
import React, { ReactNode, RefObject, useRef } from "react";
import { FocusRing } from "react-aria";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sort?: "primary" | "danger" | "warning" | "default";
  look?: "plain" | "gray" | "filled";
  bold?: boolean;
  children: ReactNode | string;
}

const transition = { duration: 0.2 };

export function Button(props: IButton) {
  const { id, sort, look, bold, disabled, onClick, children, ...otherProps } =
    props;
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
      onPressStart: disabled
        ? undefined
        : () => {
            animationControls.stop();
            animationControls.set(variants["start"]);
          },
      onPressEnd: disabled
        ? undefined
        : () => {
            animationControls.start(variants["end"], transition);
          },
      onPress: disabled ? undefined : (onClick as any),
    },
    ref
  );

  return (
    <FocusRing focusRingClass="">
      <LazyMotion strict features={loadDomAnimation}>
        <m.button
          id={id}
          animate={animationControls}
          className={`btn ${sort} ${look} ${disabled ? "disabled" : ""}`}
          style={{
            WebkitTapHighlightColor: "transparent",
            fontWeight: bold ? "bold" : "normal",
          }}
          {...(buttonProps as any)}
          {...otherProps}
        >
          {children}
        </m.button>
      </LazyMotion>
    </FocusRing>
  );
}
