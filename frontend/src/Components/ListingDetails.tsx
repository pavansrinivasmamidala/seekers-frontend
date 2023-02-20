import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Listing, ListingsContext } from "../store/ListingsContext";

const ListingDetails = () => {
  const listings = useContext(ListingsContext).listings;
  const id = useLocation().pathname.split("/").pop();
  let data: Listing | undefined = listings.find(
    (listing) => listing._id.toString() === id
  );

  return (
    <div className="container m-auto ">
      <div className="mt-6">
        <span className="font-bold text-2xl flex align">{data?.name}</span>
        <div className="flex mt-4 align-middle justify-evenly">
          <div className="flex flex-col">
            <img
              src={data?.images?.pictureUrl}
              alt="listing"
              className=" rounded-lg mt-4 "
            />
          </div>
          <div className=" w-[30vw] flex border shadow-lg flex-col px-12  rounded-lg my-6 ">
            <div className="mx-2 my-4 flex justify-between">
              <span className="font-semibold">${data?.price} CAD night </span>
              <div className="flex align-middle">
                <span className=" flex align-middle font-medium ml-8">
                  {data?.rating}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="28"
                  viewBox="0 0 24 24"
                  className="ml-[-8px]"
                >
                  <path
                    fill="#FFD700"
                    d="M12,16.6L7.1,19.8l1.4-5.4L3.4,9.8l5.9-0.5L12,4.5l2.7,5.8l5.9,0.5l-4.1,3.6l1.4,5.4L12,16.6z"
                  />
                </svg>
                <span className="text-sm  text-gray-600 underline">
                  {" "}
                  {data?.numberOfReviews} reviews{" "}
                </span>
              </div>
            </div>

            <div className="my-3 mx-2">
              <span className="text-gray-600 ">
                {data?.accommodates} guests - {data?.beds} beds
              </span>
            </div>

            <div className="my-4 flex flex-col">
              <span className="font-semibold">
                Location: {data?.address.building}, {data?.address.street},
                {data?.address.city}
              </span>

              <span className="font-semibold">Country: {data?.address.country}</span>
            </div>

            <div className="flex justify-center align-bottom">
              <button className="px-4 py-2 mb-3 rounded-lg bg-red-500 text-white font-semibold">
                Contact Host
              </button>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <div className=" m-auto mt-8 flex justify-between ">
       <div>

       
        <span className="text-lg m-4 font-semibold ">
          {data?.propertyType} hosted by {data?.hostInfo.name}
        </span>
        <div className="mt-4 flex-col max-h-[300px] overflow-hidden flex max-w-2xl">
          <span className=" text-md "> {data?.description}</span>
       
        </div>
       </div>

        <div className="my-4 max-w-lg ">
          <span className="font-semibold">Ameneties:</span>
          <ul className=" columns-2">
            {data?.amenities.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
