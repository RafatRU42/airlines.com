
const Service = ({services}) => {
    const {name,icon, description} = services
    return (
        <div className="mx-auto my-5">
            <div className="card w-96 bg-base-100 shadow-xl">
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