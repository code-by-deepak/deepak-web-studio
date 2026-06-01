import { useMemo } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 10 + 8,
        opacity: Math.random() * 0.5 + 0.2,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
      {/* mesh gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.22 255 / 0.35), transparent 70%)" }} />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.18 200 / 0.3), transparent 70%)" }} />
    </div>
  );
}
