import bgImage from '../../assets/image/airplane.jpg'
import pilot from '../../assets/icons/new-pilot.png'
import airplane from '../../assets/image/airplane-2.png'
const Ticket = () => {
    return (
        <div>
            {/* <h2>Discover the Real Value Of Travel</h2>

            <div className="card card-side  shadow-xl" style={{background:`url(${bgImage})`}}>
  <figure><img className='-mt-32 hidden md:block lg:w-1/2' src={pilot} alt="pilot"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
  
  </div> */}
{/* </div> */}


        <section className='mt-40 flex' style={{background:`url(${bgImage})`}}>
            
            <div className='w-1/3'>
                <img className='-mt-40' src={pilot} alt="" />
            </div>

            <div className='w-1/3'>
                <h2 className='mt-8 text-2xl text-bold text-white'>Discover the Real Value of Travel.</h2>
                <p className='text-white italic mt-5'>Wishing you a safe journey and relaxing holiday when you arrive. May your journey free from stress and bring you some safety. Safe travels.</p>
            </div>
            <div className='w-1/3'>
            <img className='-mt-20  h-full w-full' src={airplane} alt="" />
            </div>

        </section>

        </div>
    );
};

export default Ticket;