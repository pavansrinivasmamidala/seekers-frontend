export interface CardInterface {
    id: number;
    name: string;
    image: string;
    description: string;
    location: string;
    rating: number;
  }

interface Props {
    data: CardInterface
}

const Card: React.FC<Props> = (props) => {
    const {data} = props;
  return (
    <a
      href={"listing/" + data.id}
      className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg"
    >
      <img src={data.image} alt="property" className="w-full max-w-sm h-60" />
      <div className="px-4 py-2">
        <div className="py-3">
            <span className="font-bold  text-md">{data.name}</span>
        </div>
        <div className=" text-xs mb-2">{data.description}</div>
      </div>
    </a>
  );
};

export default Card;
