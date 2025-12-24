import type { Metadata } from "next";
import { Providers } from "../providers";

export const metadata: Metadata = {
  title: "Noor Panjabi Ghar",
  description:
    "Your premier destination for authentic Panjabi dresses and traditional wear. Discover elegance and culture in every piece.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function FrontLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <div>{children}</div>
    </Providers>
  );
}
