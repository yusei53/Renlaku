import type { Metadata } from "next";
import AuthContext from "./_components/context/auth-context";
import ToasterContext from "./_components/context/toaster-context";
import getCurrentUser from "./_feature/actions/getCurrentUser";
import { Header } from "./_components/common/header";
import SignupModal from "./_components/common/modals/signup-modal";
import LoginModal from "./_components/common/modals/login-modal";
import { Footer } from "./_components/common/footer";

const siteName = "Renlaku | メール簡単作成ツール";
const description =
  "Renlakuは簡単にメールを作成できるツールです。大学やアルバイトの欠席メールや、企業の人事に送るメール等で学生は決まりきった文でメールを作成しなければなりません。REnlakuであれば簡単に作成することができます。";
const url = "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: "%s | Renlaku",
  },
  description: description,
  //OGPとTwitterカードの設定後でする
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
      </body>
    </html>
  );
}
