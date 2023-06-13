import Banner from "../Banner/Banner";
import Contract from "../Contract/Contract";
import FAQ from "../FAQ/FAQ";
import InfoCards from "../InfoCard/InfoCards";
import Services from "../Service/Services";
import Testimonials from "../Testimonial/Testimonials";
import Ticket from "../Ticket/Ticket";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <FAQ></FAQ>

            <Ticket></Ticket>
            <Testimonials></Testimonials>
            <Contract></Contract>
        </div>
    );
};

export default Home;