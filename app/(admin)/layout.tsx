import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noor Panjabi Ghar",
  description:
    "Your premier destination for authentic Panjabi dresses and traditional wear. Discover elegance and culture in every piece.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
