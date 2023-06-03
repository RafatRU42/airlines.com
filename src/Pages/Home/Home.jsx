import Banner from "../Banner/Banner";
import InfoCards from "../InfoCard/InfoCards";
import Services from "../Service/Services";
import Ticket from "../Ticket/Ticket";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Ticket></Ticket>
        </div>
    );
};

export default Home;