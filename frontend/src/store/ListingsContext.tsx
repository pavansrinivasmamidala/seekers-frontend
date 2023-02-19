import React, { createContext, useState } from "react";

export interface Listing {
    id: number;
    name: string;
    image: string;
    description: string;
    location: string;
    rating: number;
}

interface ListingsContextProps {
    listings: Listing[];
    addListing: (listing: Listing) => void;
    removeListing: (id: number) => void;
}

export const ListingsContext = createContext<ListingsContextProps>({
    listings: [
        {
          id: 1,
          name: "Luxury Suite in NYC",
          image: "https://picsum.photos/800/600",
          description: "Gorgeous suite in heart of NYC",
          location: "New York",
          rating: 4.9,
        },
        {
          id: 2,
          name: "Beach House in Miami",
          image: "https://picsum.photos/300/200",
          description: "Relaxing beachfront property",
          location: "Miami",
          rating: 4.8,
        },
        {
          id: 3,
          name: "Mountain Cabin in Aspen",
          image: "https://picsum.photos/300/200",
          description: "Cozy cabin with scenic views",
          location: "Aspen",
          rating: 4.7,
        },
        {
          id: 4,
          name: "City Loft in Chicago",
          image: "https://picsum.photos/300/200",
          description: "Stylish loft in bustling Chicago",
          location: "Chicago",
          rating: 4.6,
        },
        {
          id: 5,
          name: "Lakeside Retreat in Toronto",
          image: "https://picsum.photos/300/200",
          description: "Peaceful retreat by the lake",
          location: "Toronto",
          rating: 4.5,
        },
        {
          id: 6,
          name: "Luxury Villa in Los Angeles",
          image: "https://picsum.photos/300/200",
          description: "Luxurious villa in LA",
          location: "Los Angeles",
          rating: 4.9,
        },
        {
          id: 7,
          name: "Rustic Cottage in Seattle",
          image: "https://picsum.photos/300/200",
          description: "Charming cottage in Seattle",
          location: "Seattle",
          rating: 4.8,
        },
        {
          id: 8,
          name: "Beachfront Condo in San Diego",
          image: "https://picsum.photos/300/200",
          description: "Stunning beachfront condo",
          location: "San Diego",
          rating: 4.7,
        },
        {
          id: 9,
          name: "Contemporary Home in Dallas",
          image: "https://picsum.photos/300/200",
          description: "Modern home in bustling Dallas",
          location: "Dallas",
          rating: 4.6,
        },
        {
          id: 10,
          name: "Chic Apartment in Montreal",
          image: "https://picsum.photos/300/200",
          description: "Elegant apartment in Montreal",
          location: "Montreal",
          rating: 4.5,
        },
      ],
    addListing: () => {},
    removeListing: () => {},
});

const ListingsContextProvider: React.FC<{children: any}> = ({children}) => {
    const [listings, setListings] = useState<Listing[]>([]);

    const addListing = (listing: Listing) => {
        setListings([...listings, listing]);
    };

    const removeListing = (id: number) => {
        setListings(listings.filter((listing) => listing.id !== id));
    };

    return (
        <ListingsContext.Provider
            value={{ listings, addListing, removeListing }}
        >
            {children}
        </ListingsContext.Provider>
    );
};

export default ListingsContextProvider;
