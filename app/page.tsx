import getCurrentUser from "./actions/getCurrentUser";
import T from "./t";

export default async function Test() {
  const currentUser = await getCurrentUser();

  return (
    <>
      <div>未認証</div>
      <T currentUser={currentUser} />
    </>
  );
}
