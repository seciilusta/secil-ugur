type Side = "left" | "right";

const sideRailClass =
  "pointer-events-none absolute inset-y-0 z-0 flex w-[34vw] max-w-[560px] flex-col overflow-hidden";

const sidePositionClass: Record<Side, string> = {
  left: "left-0",
  right: "right-0",
};

const sideMaskClass: Record<Side, string> = {
  left:
    "[mask-image:linear-gradient(to_right,black_0%,black_45%,rgba(0,0,0,0.55)_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_45%,rgba(0,0,0,0.55)_70%,transparent_100%)]",
  right:
    "[mask-image:linear-gradient(to_left,black_0%,black_45%,rgba(0,0,0,0.55)_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,black_0%,black_45%,rgba(0,0,0,0.55)_70%,transparent_100%)]",
};

function SideRail({ side }: { side: Side }) {
  return (
    <div
      className={`${sideRailClass} ${sidePositionClass[side]} ${sideMaskClass[side]}`}
      style={{ opacity: 0.85 }}
      aria-hidden
    >
      {/* Top cap */}
      <img
        src={`/botanical-${side}-top.png`}
        alt=""
        draggable={false}
        className="block w-full select-none"
      />

      {/* Middle: tiles vertically to fill whatever height remains — no gaps at any size */}
      <div
        className="min-h-0 flex-1"
        style={{
          backgroundImage: `url(/botanical-${side}-middle-1.png)`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPosition: `${side} top`,
        }}
      />

      {/* Bottom cap */}
      <img
        src={`/botanical-${side}-bottom.png`}
        alt=""
        draggable={false}
        className="block w-full select-none"
      />
    </div>
  );
}

export function BotanicalSideRails() {
  return (
    <>
      <SideRail side="left" />
      <SideRail side="right" />
    </>
  );
}
