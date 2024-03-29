"use client";

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
import { isMobile, isTablet } from "react-device-detect";
import { createPortal } from "react-dom";
import Button from "./Button";

interface IModal {
  title: string;
  cancelLabel?: string;
  submitLabel: string;
  submitAction: () => void;
  children: ReactNode;
}

const transition = {
  ease: [0.32, 0.72, 0, 1],
  duration: 0.5,
};

const originalStyles = new Map<HTMLElement, CSSProperties>();

const setStyle = (el: HTMLElement, style: CSSProperties) => {
  let originalStyles_ = {} as CSSProperties;
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
  { title, cancelLabel = "close", submitLabel, submitAction, children }: IModal,
  ref: ForwardedRef<IModalRef>
) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // TODO: Handle error

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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const [res] = await Promise.allSettled([
      submitAction(),
      new Promise(_ => setTimeout(_, 800)),
    ]);
    setIsSubmitting(false);
    close();
  };

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
                const main = document.querySelector("#main") as HTMLElement;
                if (variant === "open") {
                  const isTop = !window.scrollY;
                  const body = document.body;
                  let bodyStyle = {
                    overflow: "hidden",
                  } as CSSProperties;
                  let mainStyle = {
                    background: "var(--background-2)",
                    transitionProperty: "background",
                    transitionDuration: `${transition.duration}s`,
                    transitionTimingFunction: `cubic-bezier(${transition.ease.join(
                      ","
                    )})`,
                  } as CSSProperties;
                  if (isMobile && !isTablet) {
                    bodyStyle = {
                      ...bodyStyle,
                      backgroundColor: isTop
                        ? "black"
                        : body.style.backgroundColor,
                    };
                    mainStyle = {
                      ...mainStyle,
                      borderRadius: "8px",
                      transform:
                        "scale(0.93) translateY(env(safe-area-inset-top))",
                      transitionProperty:
                        "transform, border-radius, background",
                    };
                  }
                  setStyle(body, bodyStyle);
                  setStyle(main, mainStyle);
                } else {
                  resetStyle(main, [
                    "transform",
                    "border-radius",
                    "background",
                  ]);
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
            >
              <div className="header">
                <Button id="cancel" sort="primary" look="plain" onClick={close}>
                  {cancelLabel}
                </Button>
                <span id="title">{title}</span>
                {submitLabel && (
                  <Button
                    id="submit"
                    type="submit"
                    sort="primary"
                    look="plain"
                    bold
                    loading={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {submitLabel}
                  </Button>
                )}
              </div>
              <div
                className="content"
                style={isSubmitting ? { opacity: 0.5 } : {}}
              >
                {children}
              </div>
              {isSubmitting && <div className="overlay" />}
            </m.div>
          </>
        </LazyMotion>
      ) : null}
    </AnimatePresence>,
    document.getElementById("modal") as HTMLElement
  );
});
