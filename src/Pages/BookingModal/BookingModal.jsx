const BookingModal = ({ bookingData }) => {
  console.log("modal", bookingData);
  return (
    <div>
      {/* Open the modal using ID.showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">{bookingData.name}</h3>
          <p className="py-4">{bookingData.slots}</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default BookingModal;
