import clock from '../../assets/icons/clock.svg'
import hotel from '../../assets/icons/423483-200.png'
import airplane from '../../assets/icons/Airplane-Icon-SVG-04mfdf.png'
import InfoCard from './InfoCard';


const InfoCards = () => {

    const info =[
        {id:1,name:'24 Hours Service', icon: clock,description:'Our Services are Available in 24 Hours', gradient:'bg-gradient-to-r from-primary to-secondary'},
        {id:2,name:'Hotel Advantages', icon: hotel,description:'We Provide 5 star Hotel to Our customers' ,gradient:'bg-gradient-to-r from-primary to-secondary'},
        {id:3,name:'Visit Everywhere', icon: airplane,description:'You Can Visit Everywhere of the World With Our Services',gradient:'bg-gradient-to-r from-primary to-secondary'},
    ]

    return (
        <div className='m-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {info.map(card =><InfoCard key={card.id} info={card}></InfoCard>)}
        </div>
    );
};

export default InfoCards;