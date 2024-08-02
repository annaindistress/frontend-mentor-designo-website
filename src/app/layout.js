import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Designo Agency",
    default: "Designo Agency",
  },
  description: "Designo agency website challenge on Frontend Mentor",
};

export default function Layout({ children }) {
  return <html lang="en">
    <body className={`${jost.className}`}>
      {children}
    </body>
  </html>;
}
