import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

import InfoCard from './InfoCard';


const InfoCards = () => {

    const info =[
        {id:1,name:'24 Hours Service', icon: clock,description:'Our Services are Available in 24 Hours', gradient:'bg-gradient-to-r from-primary to-secondary'},
        {id:2,name:'Find Us Everywhere', icon: marker,description:'In the Most Of The Country Of The World Our Service is Available' ,gradient:'bg-gradient-to-r from-cyan-500 to-blue-500'},
        {id:3,name:'Contract With Us', icon: phone,description:'+94554-41254',email:'airelines24@gmail.com',gradient:'bg-gradient-to-r from-cyan-400 to-blue-600'},
    ]

    return (
        <div className='m-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white'>
            {info.map(card =><InfoCard key={card.id} info={card}></InfoCard>)}
        </div>
    );
};

export default InfoCards;