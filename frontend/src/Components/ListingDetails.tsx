import { SetStateAction, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Listing, ListingsContext } from "../store/ListingsContext";
import { Rating } from "@mui/material";
import { AuthContext } from "../store/AuthContext";
import axios from "axios";

const ListingDetails = () => {
  const { listings, setListings } = useContext(ListingsContext);
  const user = useContext(AuthContext).user;
  const id = useLocation().pathname.split("/").pop();
  let data: Listing | undefined = listings.find(
    (listing) => listing._id.toString() === id
  );
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  let showRatingModifier = false;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

    user ? showRatingModifier = true: showRatingModifier = false;
  }, [])

  const handleRatingChange = async (event: any, newValue: number | null) => {
    if (newValue === null) return;

    setRating(newValue);

    console.log(localStorage.getItem("token"));
    axios
      .put(
        "http://localhost:5500/api/properties/rating",
        {
          id: id,
          rating: newValue,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        modifyListing(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const modifyListing = (updatedProperty: Listing) => {
    const updatedListings = listings.map((property) =>
      property._id === updatedProperty._id ? updatedProperty : property
    );

    setListings(updatedListings);
  };

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
          <div className=" w-[30vw] relative flex border shadow-lg flex-col px-12  rounded-lg my-6 ">
            <div className="mx-2 my-4 flex justify-between">
              <span className="font-semibold text-3xl">
                ${data?.price} CAD night{" "}
              </span>
            </div>
            <div className="flex">
              <span className=" flex align-middle font-medium mx-2">
                {data?.rating.toFixed(1)}
              </span>
              {user ? (
                <Rating
                  name="rating"
                  value={rating}
                  onChange={handleRatingChange}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="28"
                  viewBox="0 0 24 24"
                  className="ml-[-16px]"
                >
                  <path
                    fill="#FFD700"
                    d="M12,16.6L7.1,19.8l1.4-5.4L3.4,9.8l5.9-0.5L12,4.5l2.7,5.8l5.9,0.5l-4.1,3.6l1.4,5.4L12,16.6z"
                  />
                </svg>
              )}
              <span className="text-sm  ml-2 text-gray-600 mt-[2px] underline">
                {" "}
                {data?.numberOfReviews} reviews{" "}
              </span>
            </div>
            <div className="my-3 mx-2">
              <span className="text-gray-600 text-xl">
                {data?.accommodates} guests - {data?.beds} beds
              </span>
            </div>

            <div className="my-4 flex flex-col">
              <span className="text-md ">
                <span className="text-gray-500"> Location:</span>{" "}
                {data?.address.building}, {data?.address.street},
                {data?.address.city}
              </span>

              <span className="text-md">
                <span className="text-gray-500">Country:</span>{" "}
                {data?.address.country}
              </span>
            </div>

            <div className="text-md">
              <span className="text-gray-500">Ameneties:</span>
              <span>
                {" "}
                {data?.amenities[0]}, {data?.amenities[4]}, {data?.amenities[2]}{" "}
              </span>
            </div>

            <div className="flex justify-center align-bottom absolute bottom-0  right-32  ">
              <button className="px-4 py-2 mb-3 rounded-lg bg-red-500 text-white font-semibold">
                Contact Host
              </button>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      <div className="border rounded-lg p-4 mb-4 mt-8 ease-in-out transition-all duration-300">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={handleToggle}
        >
          <h2 className="font-bold text-lg">Additional info</h2>
          <div
            className={`inline-block w-4 h-4   border-b-4 border-gray-400 border-r-4 transform ease-in-out duration-500 transition-all ${
              isOpen ? "rotate-45" : "-rotate-45"
            }`}
          ></div>
        </div>
        {isOpen && (
          <div className="mt-4 ease-in-out duration-500 transition-all">
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
        )}
      </div>
    </div>
  );
};

export default ListingDetails;
