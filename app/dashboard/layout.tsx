import { Metadata } from "next";


export const metadata: Metadata = {
  title: "TuanTran | DASHBOARD",
  description: "Đây là trang DASHBOARD tuantran",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <h1>HEADER</h1>
        <hr/>
            {/* content = childrent */}
            {children}
            {/* content = childrent */}
        <hr/>
        <h1>FOOTER</h1>
      </div>
    );
  }