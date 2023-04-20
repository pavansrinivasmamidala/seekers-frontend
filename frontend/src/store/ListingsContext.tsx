/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export interface Listing {
  _id: string;
  id: number;
  name: string;
  description: string;
  propertyType: string;
  cancellationPolicy: string;
  accommodates: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  price: number;
  guestsIncluded: number;
  numberOfReviews: number;
  rating: number;
  amenities: string[];
  images: Image;
  hostInfo: Host;
  location: Location;
  address: Address;
  rules: string;
}

interface Image {
  pictureUrl: string;
  thumbnailUrl: string;
}

interface Address {
  building: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

interface Host {
  name: string;
  id: number;
  address: Address;
  contactNo: string;
  hostIdentityVerified: boolean;
}

interface Location {
  lat: string;
  lng: string;
}

interface ListingsContextProps {
  listings: Listing[];
  displayListings: Listing[];
  addListing: (listing: Listing) => void;
  removeListing: (id: number) => void;
  setListings: Dispatch<SetStateAction<Listing[]>>;
  filterListings: (searchTerm: string) => void;
  getAndSetListings: () => void;
}

export const ListingsContext = createContext<ListingsContextProps>({
  listings: [],
  displayListings: [],
  addListing: () => {},
  removeListing: () => {},
  setListings: () => {},
  filterListings: () => {},
  getAndSetListings: () => {}
});

const ListingsContextProvider: React.FC<{ children: any }> = ({ children }) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [displayListings, setDisplayListings] = useState<Listing[]>([]);
  const {REACT_APP_API_ENDPOINT} = process.env;
  
  const getAndSetListings = () =>{
    axios.get(REACT_APP_API_ENDPOINT + "/api/properties").then((res) => {
      setListings(() => {
        return res.data;
      });
      setDisplayListings(() => {
        return res.data;
      });
      console.log(res.data);
    });
  }
  
  useEffect(() => {
    console.log(REACT_APP_API_ENDPOINT);
    getAndSetListings();
  }, [getAndSetListings]);


  const filterListings = (searchTerm: string) => {
    setDisplayListings(
      listings.filter((item) => {
        const itemName = item.name.toLowerCase();
        const itemDescription = item.description.toLowerCase();
        const search = searchTerm.toLowerCase();
        return (
          itemName.includes(searchTerm) || itemDescription.includes(search)
        );
      })
    );
  };

  const addListing = (listing: Listing) => {
    setListings([...listings, listing]);
  };

  const removeListing = (id: number) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  return (
    <ListingsContext.Provider
      value={{
        listings,
        displayListings,
        addListing,
        removeListing,
        setListings,
        filterListings,
        getAndSetListings
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
};

export default ListingsContextProvider;
