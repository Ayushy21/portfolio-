import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function Github({ size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M9 19c-4.3 1.3-4.3-2-6-2.5M15 22v-3.8c0-1 .1-1.5-.5-2 3.4-.4 7-1.7 7-7.5a5.9 5.9 0 0 0-1.6-4.1A5.5 5.5 0 0 0 19.8.5S18.5.1 15.5 2a15.2 15.2 0 0 0-7 0C5.5.1 4.2.5 4.2.5a5.5 5.5 0 0 0-.1 4.1A5.9 5.9 0 0 0 2.5 8.7c0 5.8 3.6 7.1 7 7.5-.6.5-.6 1.2-.5 2V22"
        transform="translate(1 1) scale(.91)"
      />
    </svg>
  );
}

export function Linkedin({ size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M11 17v-7h3v1a3 3 0 0 1 4 2.8V17M14 17v-4" />
      <circle cx="7" cy="7" r=".5" fill="currentColor" />
    </svg>
  );
}
