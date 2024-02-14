import getCurrentUser from "../_feature/actions/getCurrentUser";
import CancelOfferFirstView from "../_components/cancel-job-offer/cancel-offer-firstview";
import CancelOfferContainer from "../_components/cancel-job-offer/cancel-offer-container";

const CancelJobOfferPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <>
      <CancelOfferFirstView currentUser={currentUser} />
      <CancelOfferContainer currentUser={currentUser} />
    </>
  );
};

export default CancelJobOfferPage;
