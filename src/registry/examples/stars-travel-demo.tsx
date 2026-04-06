import { StarsTravel } from "@/registry/components/stars-travel";

export default function StarsTravelDemo() {
  return (
    <div className="relative flex min-h-72 w-full flex-col items-center justify-center overflow-hidden">
      <StarsTravel
        className="pointer-events-none absolute inset-0"
        svgOptions={{ duration: 2 }}
      />
      <h1 className="relative z-10 text-3xl">Stars Travel</h1>
    </div>
  );
}
