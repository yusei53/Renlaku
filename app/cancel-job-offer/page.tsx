import getCurrentUser from "../_feature/actions/getCurrentUser";
import CancelOfferFirstView from "../_components/cancel-job-offer/cancel-offer-firstview";

const CancelJobOfferPage = async () => {
  const currentUser = await getCurrentUser();
  return <CancelOfferFirstView currentUser={currentUser} />;
};

export default CancelJobOfferPage;
