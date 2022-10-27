import { component$ } from "@builder.io/qwik";

const ArtistDurationIcon = component$(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 16l-2.414-2.414A2 2 0 0 1 12 12.172V6" />
      </g>
    </svg>
  );
});

export default ArtistDurationIcon;
