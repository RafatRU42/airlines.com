import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLoaderData, useParams } from "react-router-dom";

const OfferDetails = () => {
    // const {titile,description,condition,image} = 

    // const data = useLoaderData()
    // console.log('paramsData',data);
    // const id = useParams()
    // console.log('id',id);

   
    // useEffect(() =>{
        
    // fetch(`http://localhost:5000/offer/${id}`)
    // .then(res => res.json())
    // .then(data => {console.log('nw',data)})
    // },[])


  

    // console.log('11',data);

    const data = useLoaderData()
console.log('1data',data);


// const { data1=[]} = useQuery({
//     queryKey:['type'],
//     queryFn:() => fetch(`http://localhost:5000/offerType/type?=${data.type}`)
//     .then(res => res.json())
    
// });


    fetch(`http://localhost:5000/offerType?type=${data.type}`)
    .then(res => res.json())
    .then(result =>{
        console.log('result',result);
    })



    return (
        <div className="mx-6 mb-5">
            <p className="text-3xl font-bold my-4 text-center">{data.type}</p>
            <div className=" flex justify-center">
                <img className="w-1/4 h-1/3 justify-center" src={data.image} alt="" />
            </div>
            <div className="my-3">
                <p className="text-xl font-bold">{data.title}</p>
                <p className="">{data.description}</p>
                <p className="my-2 text-xl font-bold">Conditions:</p>
                <p>{data.condition}</p>
            </div>
        </div>
    );
};

export default OfferDetails;