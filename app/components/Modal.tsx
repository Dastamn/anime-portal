"use client";

import useWindowSize from "#root/helpers/hooks/useWindowSize";
import { loadDomAnimation } from "#root/lib/motion";
import { IModalRef } from "#root/types";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { createPortal } from "react-dom";

const transition = {
  ease: [0.32, 0.72, 0, 1],
  duration: 0.35,
};

const originalStyles = new Map<HTMLElement, { [x: string]: any }>();

const setStyle = (el: HTMLElement, style: CSSProperties) => {
  let originalStyles_ = {} as { [x: string]: any };
  Object.entries(style).forEach(([key, value]) => {
    originalStyles_[key] = el.style[key];
    el.style[key] = value;
  });
  originalStyles.set(el, originalStyles_);
};

const resetStyle = (el: HTMLElement | HTMLElement[], props?: string[]) => {
  if (!Array.isArray(el)) {
    el = [el];
  }
  for (const e of el) {
    const style = originalStyles.get(e);
    if (!style) {
      continue;
    }
    if (!props) {
      props = Object.keys(style);
    }
    for (const p of props) {
      e.style[p] = style[p];
    }
  }
};

const backdropVariants = {
  open: {
    opacity: 1,
    transition,
  },
  closed: {
    opacity: 0,
    transition,
  },
};

export default forwardRef(function Modal(
  { children }: { children: ReactNode },
  ref: ForwardedRef<IModalRef>
) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflowY =
      (isOpen && "hidden") || "auto";
  }, [isOpen]);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useImperativeHandle(ref, () => ({ ready: mounted, open }));

  const { width } = useWindowSize();

  const isSmallScreen = () => width && width <= 600;

  useEffect(() => {
    console.log(width);
  }, [width]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <LazyMotion features={loadDomAnimation} strict>
          <>
            <m.div
              className="modal-backdrop"
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onAnimationStart={variant => {
                if (!isSmallScreen()) {
                  return;
                }
                const main = document.querySelector("#main") as HTMLElement;
                if (variant === "open") {
                  setStyle(document.body, { backgroundColor: "black" });
                  setStyle(main, {
                    borderRadius: "8px",
                    overflow: "hidden",
                    transform: "scale(0.93)",
                    transitionProperty: "transform",
                    transitionDuration: "200ms",
                    transitionTimingFunction: `cubic-bezier(${transition.ease.join(
                      ","
                    )})`,
                  });
                } else {
                  resetStyle(main, ["transform"]);
                }
              }}
              onAnimationComplete={variant => {
                if (variant === "closed") {
                  resetStyle(document.querySelector("#main") as HTMLElement);
                  resetStyle(document.body);
                }
              }}
              onClick={close}
            />
            <m.div
              className="modal-box"
              initial={{ x: "-50%", y: "100%" }}
              animate={{ x: "-50%", y: "-50%", transition }}
              exit={{ x: "-50%", y: "100%", transition }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </m.div>
          </>
        </LazyMotion>
      ) : null}
    </AnimatePresence>,
    document.getElementById("modal") as HTMLElement
  );
});
