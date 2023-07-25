import { Zoom } from 'react-awesome-reveal';
import image1 from '../../assets/image/people1.png'
import image2 from '../../assets/image/people2.png'
import image3 from '../../assets/image/people3.png'
import Testimonial from './Testimonial';

const Testimonials = () => {

    const testimonial = [
        {id:1,name:'Dawn Mcnerney', description:'Thank you once again for your diligence, customer support and professionalism. In a time when NOBODY is responding to the thousands of requests for refunds lost due coronavirus, you stand alone in integrity. ',image:image1},
        {id:2,name:'John and Family', description:'Just wanted to say thanks for all your efforts. This must be so tough and I really appreciate your efforts. I have been watching your update videos – which I appreciate – and you guys look tired. I am sorry. Sending you good mojo and gratitude! Hang in there.. ',image:image2},
        {id:3,name:'Maria Cherry Coronel ', description:'This portal will help ease some anxiety in tracking our refund… This was our first time using your services & we are so glad we went with you guys! For not disappearing in the face of the earth when tough times come, thank you :)!',image:image3}
    ]

    return (
        <div>
       <Zoom>
       <div className="text-center mt-20">
           
           <h2 className="text-2xl font-bold text-secondary">Testimonial</h2>

           
           <p className="text-xl italic">What Our Customers Says About Us</p>
       </div>
       </Zoom>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-0 md:m-6 md:p-6'>
            {testimonial.map(testimonials => <Testimonial key={testimonials.id} info ={testimonials}></Testimonial>)}

            </div>
        </div>
    );
};

export default Testimonials;