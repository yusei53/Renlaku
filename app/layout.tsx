import type { Metadata } from "next";
import AuthContext from "./_components/context/auth-context";
import ToasterContext from "./_components/context/toaster-context";
import getCurrentUser from "./_feature/actions/getCurrentUser";
import { Header } from "./_components/common/header";
import SignupModal from "./_components/common/modals/signup-modal";
import LoginModal from "./_components/common/modals/login-modal";
import { Footer } from "./_components/common/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_TAG_ID } from "./_lib/gtag";

const siteName = "Renlaku | メール作成ツール";
const description =
  "Renlakuは主に大学生やビジネス向けに最適化された簡単にメールを作成できるツールです。直感的な操作でメール作成の手間を削減かつ迅速に作成します。面倒なフォーマット作成や文言の悩みから解放され、時間を効率的に節約します。";
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
      <GoogleAnalytics gaId={GA_TAG_ID} />
    </html>
  );
}
