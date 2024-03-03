import type { Metadata } from "next";
import AuthContext from "./_components/context/auth-context";
import ToasterContext from "./_components/context/toaster-context";
import getCurrentUser from "./_feature/actions/getCurrentUser";
import { Header } from "./_components/common/header";
import SignupModal from "./_components/common/modals/signup-modal";
import LoginModal from "./_components/common/modals/login-modal";
import { Footer } from "./_components/common/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "./_components/google-analytics/google-analytics";
import { Suspense } from "react";

const siteName = "Renlaku | メール簡単作成ツール";
const description =
  "Renlakuは簡単にメールを作成できるツールです。直感的なインターフェイスでメール作成の手間を削減し、メールを迅速に作成します。面倒なフォーマット作成や文言の悩みから解放され、時間を節約しながらも思いを的確に伝えるメールを作成できます。";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.renlaku.com/"),
  title: {
    default: siteName,
    template: "%s | Renlaku",
  },
  description: description,
  openGraph: {
    title: siteName,
    description: description,
  },
  twitter: {
    title: siteName,
    description: description,
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <Suspense>
        <GoogleAnalytics />
      </Suspense>
      <body style={{ margin: 0 }}>
        <AuthContext>
          <ToasterContext />
          <SignupModal />
          <LoginModal />
          <Header currentUser={currentUser} />
          {children}
          <Footer />
        </AuthContext>
        <SpeedInsights />
      </body>
    </html>
  );
}
