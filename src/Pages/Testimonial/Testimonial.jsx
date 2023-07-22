


const Testimonial = ({info}) => {


    const {name,description,image} = info;
    return (
      <div className="group">
          <section className="p-3 shadow-lg rounded-lg m-3 group-hover:scale-110 duration-300">
        
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
      </div>
    );
};

export default Testimonial;