import { useForm } from "react-hook-form";
import image from "../../../assets/image/airplane-png-27939.jpg";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddOffer = () => {
  const imageHostKey = import.meta.env.VITE_imgbb_api;


  const navigate = useNavigate()



  const { register, handleSubmit,  formState: { errors } } = useForm();

  const onSubmit = (data) => {

    const type= data.type;
    const title = data.title;
    const condition = data.condition;
    const description = data.description;
    

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("formData", data.data.url);
        const offerInfo = {
          type,
          title,
          condition,
          description,
          image:data.data.url

        };

        fetch(' https://airlines-server.vercel.app/addOffer/admin',{
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(offerInfo)
        })
        .then(res => res.json())
        .then(data => {
          toast.success('Offer Is Added To The Database')
          navigate('/offer/allOffers')
        })


      })
      .catch(err =>{
        console.log('err', err);
      })
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-bold mt-10  md:-ml-20">
        Add Getaway Offer
      </h2>
      <div className="flex md:-ml-40  mt-10">
        <div className="w-1/2 hidden md:flex">
          <img src={image} alt="" />
        </div>

        <div className="mx-auto md:w-1/2 md:ml-10">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-8">Add Offer</h1>
            <form
            onSubmit={handleSubmit(onSubmit)}
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-sm">
              
                <select  {...register("type")}
                   className="select select-success w-full "
                   placeholder="Select The Offer Types"
                   >
                    
                  <option>Sessional Offers</option>
                  <option>Vacation Offers</option>
                  <option>Hotel Offers</option>
                  <option>Car Offers</option>
                  <option>Other Offers</option>
                  </select>
              </div>
              <div className="space-y-1 text-sm">
                <input
                  {...register("title", )}
                  type="text"
                  name="title"
                  placeholder="Offer Title"
                  className="w-full px-4 py-3 rounded-md input input-bordered input-success "
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  {...register("image",)}
                  type="file"
                  name="image"
                  placeholder="Insert An Image"
                  className="w-full px-4 py-3 rounded-md input input-bordered input-success "
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  {...register("condition", )}
                  type="text"
                  name="condition"
                  placeholder="Terms & Conditions Of This Offer"
                  className="w-full px-4 py-3 rounded-md input input-bordered input-success "
                />
              </div>

              <textarea
                {...register("description", )}
                type="text"
                className="textarea textarea-success w-full"
                placeholder="Describe About Your Offer"
              ></textarea>

              {/* <button type="submit" className="btn btn-secondary w-full mt-5 text-white">
                Add Offer
              </button> */}
              <input type="submit" value={'Add Offer'} className="btn btn-secondary w-full mt-5 text-white" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOffer;
