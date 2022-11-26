import { component$ } from "@builder.io/qwik";

interface ArtistSortIconProps {
  sortBy: {
    column: "score" | "track" | "release" | "duration";
    direction: "asc" | "desc" | "none";
  };
  type: "score" | "track" | "release" | "duration";
}

const ArtistSortIcon = component$(({ sortBy, type }: ArtistSortIconProps) => {
  return (
    <svg
      style={{
        marginLeft: "6px",
        visibility:
          type !== sortBy.column || sortBy.direction === "none"
            ? "hidden"
            : "visible",
        transform: sortBy.direction === "asc" ? "rotate(0)" : "rotate(180deg)",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="12px"
      height="12px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10.285 3.858c.777-1.294 2.653-1.294 3.43 0l8.468 14.113c.8 1.333-.16 3.029-1.715 3.029H3.532c-1.554 0-2.514-1.696-1.715-3.029l8.468-14.113Z"
      />
    </svg>
  );
});

export default ArtistSortIcon;