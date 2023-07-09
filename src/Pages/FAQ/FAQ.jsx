
const FAQ = () => {
  return (
    <div className={`my-20 w-2/3 mx-auto shadow-md p-10 rounded-lg`}>
        <p className="text-center font-bold text-3xl my-10">Read our frequently asked questions</p>
      <div className="collapse bg-base-200 my-5 ">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-base-200 text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
          Can I purchase air and land packages?
        </div>
        <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
          <p className="text-white italic">Yes, there are several options available:

Purchase a vacation package at AAVacations.com including air, hotel, rental car and more.
Make individual bookings for air, car and hotels.</p>
        </div>
      </div>
      <div className="collapse bg-base-200 my-5 ">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-base-200 text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
          Can I use miles to boy my car and hotel booking?
        </div>
        <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
          <p className="text-white italic">Yes. You can use AAdvantage miles to purchase hotel stays and rental cars.</p>
        </div>
      </div>
      
      <div className="collapse bg-base-200 my-5 ">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-base-200 text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
          How can I cancel my car rental reservation?
        </div>
        <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
          <p className="text-white italic">If you need to change your reservation, cancel and book a new car. Cancellation penalties will not apply to car rentals. Tip: Book a new car before cancelling your old reservation in case availability has changed.</p>
        </div>
      </div>

      <div className="collapse bg-base-200 my-5 ">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-base-200 text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
         Can I change my hotel reservation?
        </div>
        <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
          <p className="text-white italic">Yes. You can manage your hotel reservation online.</p>
        </div>
      </div>

      <div className="collapse bg-base-200 my-5 ">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-base-200 text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
         How do I find cruise information?
        </div>
        <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
          <p className="text-white italic">Select "Cruise" under Plan Travel on the top navigation bar.</p>
        </div>
      </div>
    
    </div>
  );
};

export default FAQ;
