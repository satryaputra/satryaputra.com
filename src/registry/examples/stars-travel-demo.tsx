import { StarsTravel } from "@/registry/components/stars-travel/stars-travel";

export default function StarsTravelDemo() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border">
      <StarsTravel
        className="pointer-events-none absolute inset-0 h-full"
        svgOptions={{ duration: 2 }}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 p-6 text-center">
        <h1 className="font-geist-pixel-square text-3xl tracking-tight">
          Stars Travel
        </h1>
      </div>
    </div>
  );
}
