import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import { JackInTheBox, Zoom } from "react-awesome-reveal";

const Opinion = ({selectedDate}) => {
    const {user} = useContext(AuthContext)


	const handleOpinion = () => {
		toast.success('Thank You for your significant review.')
	}

   
    return (
        <div>
           <JackInTheBox>
		   <p className="text-center font-bold text-success text-3xl mt-20 ">Say Something About Our Services</p>
		   </JackInTheBox>

            <article className="max-w-2xl px-6 py-10 mx-auto space-y-12 ">
<Zoom>
<div className="w-full mx-auto space-y-4 text-center">
		
		<h1 className="text-3xl font-bold leadi md:text-4xl">We believe that we have given our customers the best flight services. </h1>
        <p>What about you?</p>
		<p className="text-sm dark:text-gray-400">
			<p className="underline dark:text-violet-400">
				<p>{user?.displayName? user.displayName : 'Unknown'}</p>
			</p>
			{/* <p>{format(selectedDate,'PP')}</p> */}
		</p>
	</div>
</Zoom>
	<form onSubmit={handleOpinion}>
	<div className=" text-center my-5">
    <textarea required className="textarea textarea-success w-full" placeholder="Your Opinion"></textarea>
    <button  className="btn btn-outline btn-success mt-4 ">Send</button>
	</div>
	</form>
	<div className="pt-12 border-t dark:border-gray-700">
		
	</div>
</article>
        </div>
    );
};

export default Opinion;