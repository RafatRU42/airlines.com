
const InfoCard = ({info}) => {

    const {name,icon,description,gradient} = info;

    return (
        <div className={`m-4 my-6 ${gradient}`}>
            <div className="card card-side  shadow-xl">
                <figure><img className="text-info" src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;