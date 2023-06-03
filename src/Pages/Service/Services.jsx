import hotel from '../../assets/icons/423483-200.png'
import car from '../../assets/icons/car-1.png'
import airplane from '../../assets/icons/r-Airplane-Icon-SVG-04mfdf.png'
import Service from './Service';


const Services = () => {

    const serviceInfo = [
        {id:3, name:'Round Trip', description:'If Our Customers Want to Return With Our Service They Could Get Round Trip',icon:airplane},

        {id:1, name:'Hotel', description:'We Provide to Our Customers 5 Star Hotel. Nothing to think about Hotel',icon:hotel},
        {id:2, name:'Car', description:'Our Customer Will Get Car Convenience to Ride Everywhere',icon:car},
    ]

    return (
        <div>
            <div className='m-6'>
            <h2 className="text-3xl text-secondary font-bold text-center">Our Services</h2>
            <h3 className="text-xl text-center">Customer satisfaction is our main goal</h3>
            </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-3'>
        {
                serviceInfo.map(service => <Service services = {service} key={service.id}></Service>)
            }
        </div>

        </div>
    );
};

export default Services;