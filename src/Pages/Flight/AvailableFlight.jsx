

const AvailableFlight = ({selectedDate,flightData}) => {

   

  return (
<div className="mx-auto">
<div className="my-10 ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-secondary font-bold text-xl text-center">{flightData.name}</h2>
          <p>{flightData.slots.length > 0 ? flightData.slots[0] : 'Try Another Day'}</p>

          <p>{flightData.slots.length && flightData.slots.length} Spaces Abailable</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary w-full text-white font-bold">Book This Flight</button>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default AvailableFlight;
