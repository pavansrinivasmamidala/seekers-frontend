import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Listing, ListingsContext } from "../store/ListingsContext";

const ListingDetails = () => {
  const listings = useContext(ListingsContext).listings;
  const path = useLocation().pathname;
  let data: Listing | undefined = listings.find(
    (listing) => listing.id.toString() === path[path.length - 1]
  );

  return (
    <div className="container mx-auto my-auto ">
      <div className="mt-6">
        <span className="font-bold text-2xl flex align">{data?.name}</span>
        <div className="flex mt-4 align-middle justify-evenly">
          <div className="flex flex-col">
            <img
              src={data?.image}
              alt="listing"
              className=" rounded-lg mt-4 "
            />
            <div className="flex justify-end">
              <button className="bg-blue-500 px-6 py-2  rounded-md my-8 text-white">
                Delete
              </button>
            </div>
          </div>
          <div className="mt-4 flex-col flex ">
            <span className=" text-xl"> {data?.description}</span>
            <span>{data?.location}</span>
          </div>
        </div>

        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default ListingDetails;
