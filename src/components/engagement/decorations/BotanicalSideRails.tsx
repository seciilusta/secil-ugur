type Side = "left" | "right";

const sideRailClass =
  "pointer-events-none absolute inset-y-0 z-0 hidden w-[260px] grid grid-rows-[auto_1fr_auto] lg:grid";

function SideRail({ side }: { side: Side }) {
  const positionClass = side === "left" ? "left-0" : "right-0";

  return (
    <div className={`${sideRailClass} ${positionClass}`} aria-hidden>
      <img
        src={`/botanical-${side}-top.png`}
        alt=""
        className="block w-full opacity-80"
      />
      <div
        className="-my-1 min-h-0 opacity-80"
        style={{
          backgroundImage: `url(/botanical-${side}-middle.png)`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
        }}
      />
      <img
        src={`/botanical-${side}-bottom.png`}
        alt=""
        className="block w-full opacity-80"
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
