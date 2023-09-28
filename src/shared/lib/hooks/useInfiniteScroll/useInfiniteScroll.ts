import { MutableRefObject, useEffect, useRef } from "react";

type UseInfiniteScrollOptions = {
  callback?: () => void;
  wrapperRef: MutableRefObject<HTMLElement>;
  triggerRef: MutableRefObject<HTMLElement>;
};

export const useInfiniteScroll = ({
  callback,
  wrapperRef,
  triggerRef,
}: UseInfiniteScrollOptions) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const triggerEl = triggerRef.current;

    if (callback) {
      const options = {
        root: wrapperEl,
        rootMargin: "0px",
        threshold: 1.0,
      };

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);
    }

    observer.current?.observe(triggerEl);

    return () => observer.current?.unobserve(triggerEl);
  }, [callback, triggerRef, wrapperRef]);
};
