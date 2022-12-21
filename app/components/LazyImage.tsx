"use client";

import { loadDomAnimation } from "#root/lib/motion";
import { LazyMotion, m, MotionStyle } from "framer-motion";
import { default as Image, ImageProps } from "next/image";
import { useState } from "react";

const variants = {
  false: { opacity: 0 },
  true: { opacity: 1 },
};

export default function LazyImage(
  props: ImageProps & { motionStyle?: MotionStyle }
) {
  const [loaded, setLoaded] = useState(false);
  const { motionStyle, alt, ...imageProps } = props;
  return (
    <LazyMotion features={loadDomAnimation} strict>
      <m.div
        animate={`${loaded}`}
        variants={variants}
        transition={{ duration: 0.2 }}
        style={motionStyle}
      >
        <Image
          {...imageProps}
          alt={alt}
          onLoadingComplete={() => setLoaded(true)}
        />
      </m.div>
    </LazyMotion>
  );
}
