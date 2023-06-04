import contract from '../../assets/image/contract.jpg'


const Contract = () => {
    return (
        <div className="my-4">
            <h2 className="text-2xl text-secondary text-center text-bold">Contract With Us</h2>
            <div>
                <div>
                    <img src={contract} alt="" />
                </div>
                <div>
                <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default Contract;