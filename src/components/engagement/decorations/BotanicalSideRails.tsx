type Side = "left" | "right";

const sidePositionClass: Record<Side, string> = {
  left: "left-0",
  right: "right-0",
};

const sideMaskClass: Record<Side, string> = {
  left:
    "[mask-image:linear-gradient(to_right,black_0%,black_55%,rgba(0,0,0,0.45)_76%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_55%,rgba(0,0,0,0.45)_76%,transparent_100%)]",
  right:
    "[mask-image:linear-gradient(to_left,black_0%,black_55%,rgba(0,0,0,0.45)_76%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,black_0%,black_55%,rgba(0,0,0,0.45)_76%,transparent_100%)]",
};

const imagePositionClass: Record<Side, string> = {
  left: "left-[-18%] object-left",
  right: "right-[-18%] object-right",
};

function SideRail({ side }: { side: Side }) {
  return (
    <div
      className={[
        "pointer-events-none absolute inset-y-0 z-0 overflow-hidden",
        "w-[clamp(90px,26vw,180px)]",
        "sm:w-[clamp(120px,24vw,240px)]",
        "md:w-[clamp(150px,24vw,340px)]",
        "lg:w-[clamp(220px,28vw,560px)]",
        sidePositionClass[side],
        sideMaskClass[side],
      ].join(" ")}
      aria-hidden
    >
      <img
        src={`/botanical-${side}-rail.png`}
        alt=""
        draggable={false}
        className={[
          "absolute inset-y-0 h-full w-full max-w-none select-none object-cover opacity-90",
          "sm:opacity-95",
          imagePositionClass[side],
        ].join(" ")}
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