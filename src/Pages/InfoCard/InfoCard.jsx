
const InfoCard = ({info}) => {

    const {name,icon,description,gradient,email} = info;

    return (
        <div className="m-4 my-6 group">
            <div className={`p-4 card card-side ${gradient} shadow-xl group-hover:scale-110 duration-300`}>
                <figure><img className="text-black m-3" src={icon} alt="icon" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{email && email}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default InfoCard;