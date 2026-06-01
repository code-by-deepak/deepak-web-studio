import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rx = 0, ry = 0, mx = 0, my = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(loop);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,[role=button],input,textarea,select")) {
        ringRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(1.6)");
      } else {
        ringRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(1)");
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    let raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
