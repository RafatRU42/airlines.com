import airplane from '../../assets/image/airplane-2.png'
import bgairplane from '../../assets/image/airplane.jpg'


const Banner = () => {
    return (
        <div>
            <div className='md:hero' >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={airplane} className="md:max-w-xl max-w-sm" />
    <div>
      <h1 className="text-5xl font-bold">Special Offer Is Going On!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;