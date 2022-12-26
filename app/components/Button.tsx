import { loadDomAnimation } from "#root/lib/motion";
import loadingGif from "#root/public/assets/loading.gif";
import { useButton } from "@react-aria/button";
import { LazyMotion, m, useAnimation } from "framer-motion";
import Image from "next/image";
import { ReactNode, RefObject, useRef } from "react";
import { FocusRing } from "react-aria";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sort?: "primary" | "danger" | "warning" | "default";
  look?: "plain" | "gray" | "filled";
  bold?: boolean;
  loading?: boolean;
  children: ReactNode | string;
}

const transition = { duration: 0.2 };

export default function Button(props: IButton) {
  const {
    id,
    type,
    sort,
    look,
    bold,
    loading,
    disabled,
    onClick,
    children,
    ...otherProps
  } = props;

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
    useRef() as RefObject<Element>
  );

  return (
    // TODO: focus class
    <FocusRing focusRingClass="">
      <LazyMotion strict features={loadDomAnimation}>
        <m.button
          id={id}
          disabled={disabled || loading}
          animate={animationControls}
          className={`btn ${sort} ${look} ${disabled ? "disabled" : ""}`}
          style={{
            WebkitTapHighlightColor: "transparent",
            fontWeight: bold ? "bold" : "normal",
          }}
          {...(buttonProps as any)}
          {...otherProps}
        >
          {loading ? (
            <Image src={loadingGif} alt="loading" height={16} />
          ) : (
            children
          )}
        </m.button>
      </LazyMotion>
    </FocusRing>
  );
}
