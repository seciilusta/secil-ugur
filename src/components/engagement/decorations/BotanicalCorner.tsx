type Corner = "leftTop" | "rightBottom";

const cornerImage: Record<Corner, string> = {
  leftTop: "/left-corner-Photoroom.png",
  rightBottom: "/right-corner-Photoroom.png",
};

const cornerPositionClass: Record<Corner, string> = {
    leftTop: "left-0 top-0",
    rightBottom: "right-0 bottom-0",
  };
  
  const cornerImageClass: Record<Corner, string> = {
    leftTop: "left-0 top-0",
    rightBottom: "right-0 bottom-0",
  };
  
  function BotanicalCorner({ corner }: { corner: Corner }) {
    return (
      <div
        className={[
          "pointer-events-none absolute z-0 overflow-visible",
          "w-[clamp(280px,42vw,720px)]",
          "h-[clamp(260px,40vw,680px)]",
          cornerPositionClass[corner],
        ].join(" ")}
        aria-hidden
      >
        <img
          src={cornerImage[corner]}
          alt=""
          draggable={false}
          className={[
            "absolute max-w-none select-none opacity-95",
            "w-full h-auto",
            cornerImageClass[corner],
          ].join(" ")}
        />
      </div>
    );
  }
  
  export function BotanicalCorners() {
    return (
      <>
        <BotanicalCorner corner="leftTop" />
        <BotanicalCorner corner="rightBottom" />
      </>
    );
  }