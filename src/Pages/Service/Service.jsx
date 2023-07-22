
const Service = ({services}) => {
    const {name,icon, description} = services
    return (
        <div className="mx-auto my-5 group">
            <div className="card w-96 bg-base-100 shadow-xl group-hover:scale-110 duration-300">
  <figure><img className="" src={icon} alt="icons" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p> {description}</p>
   
  </div>
</div>
        </div>
    );
};

export default Service;