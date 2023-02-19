import { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
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
  space: string;
  notes: string;
  transit: string;
  access: string;
  interaction: string;
  rules: string;
  lastScraped: string;
  listingUrl: string;
  numberOfReviews: number;
  rating: number;
  amenities: string[];
}

const PropertyForm = () => {
  const [formData, setFormData] = useState<FormState>({
    id: 0,
    name: "",
    description: "",
    propertyType: "",
    cancellationPolicy: "",
    accommodates: 0,
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    price: 0,
    guestsIncluded: 0,
    space: "",
    notes: "",
    transit: "",
    access: "",
    interaction: "",
    rules: "",
    lastScraped: "",
    listingUrl: "",
    numberOfReviews: 0,
    rating: 0,
    amenities: [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <div className="overflow-y-scroll w-100vh">
      <form onSubmit={handleSubmit} className="p-8 w-1/3 m-auto">
        <div className="mb-4">
          <label htmlFor="id" className="block font-medium text-gray-700 mb-2">
            ID
          </label>
          <input
            type="number"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="propertyType"
            className="block font-medium text-gray-700 mb-2"
          >
            Property Type
          </label>
          <input
            type="text"
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancellationPolicy"
            className="block font-medium text-gray-700 mb-2"
          >
            Cancellation Policy
          </label>
          <input
            type="text"
            id="cancellationPolicy"
            name="cancellationPolicy"
            value={formData.cancellationPolicy}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="id" className="block font-medium text-gray-700 mb-2">
            Accomodates
          </label>
          <input
            type="number"
            id="accommodates"
            name="accommodates"
            value={formData.accommodates}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="id" className="block font-medium text-gray-700 mb-2">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="id" className="block font-medium text-gray-700 mb-2">
            Beds
          </label>
          <input
            type="number"
            id="beds"
            name="beds"
            value={formData.beds}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="id" className="block font-medium text-gray-700 mb-2">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="id" className="block font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="id" className="block font-medium text-gray-700 mb-2">
            GuestsIncluded
          </label>
          <input
            type="number"
            id="guestsIncluded"
            name="guestsIncluded"
            value={formData.guestsIncluded}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancellationPolicy"
            className="block font-medium text-gray-700 mb-2"
          >
            Space
          </label>
          <input
            type="text"
            id="space"
            name="space"
            value={formData.space}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancellationPolicy"
            className="block font-medium text-gray-700 mb-2"
          >
            Notes
          </label>
          <input
            type="text"
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancellationPolicy"
            className="block font-medium text-gray-700 mb-2"
          >
            Transit
          </label>
          <input
            type="text"
            id="transit"
            name="transit"
            value={formData.transit}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancellationPolicy"
            className="block font-medium text-gray-700 mb-2"
          >
            Access
          </label>
          <input
            type="text"
            id="access"
            name="access"
            value={formData.access}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancellationPolicy"
            className="block font-medium text-gray-700 mb-2"
          >
            Interaction
          </label>
          <input
            type="text"
            id="interaction"
            name="interaction"
            value={formData.interaction}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancellationPolicy"
            className="block font-medium text-gray-700 mb-2"
          >
            Rules
          </label>
          <input
            type="text"
            id="rules"
            name="rules"
            value={formData.rules}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancellationPolicy"
            className="block font-medium text-gray-700 mb-2"
          >
            LastScraped
          </label>
          <input
            type="text"
            id="lastScraped"
            name="lastScraped"
            value={formData.lastScraped}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancellationPolicy"
            className="block font-medium text-gray-700 mb-2"
          >
            ListingUrl
          </label>
          <input
            type="text"
            id="listingUrl"
            name="listingUrl"
            value={formData.listingUrl}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancellationPolicy"
            className="block font-medium text-gray-700 mb-2"
          >
            numberOfReviews
          </label>
          <input
            type="number"
            id="numberOfReviews"
            name="numberOfReviews"
            value={formData.numberOfReviews}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cancellationPolicy"
            className="block font-medium text-gray-700 mb-2"
          >
            rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2"
          />
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
