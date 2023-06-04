


const Testimonial = ({info}) => {


    const {name,description,image} = info;
    return (
        <section className="p-3 shadow-lg rounded-lg m-3">
        
                <div className="flex m-3">
                   <div className="m-4">
                   <img src={image} alt="Image of people " />
                    <p className="font-bold text-xl">{name}</p>
                   </div>
                   <div className="m-4">
                   <p>{description}</p>
                   </div>

            </div>
        </section>
    );
};

export default Testimonial;