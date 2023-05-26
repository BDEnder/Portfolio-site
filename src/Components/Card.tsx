interface ICard {
  name: string;
  description: string;
  picture?: string;
  link: string;
}

import bg from "../Assets/Default_BG.jpg";

const Card = ({ description, name, picture, link }: ICard) => {
  return (
    <div className="relative bg-primary rounded text-center h-full max-w-md py-4">
      <div className="flex flex-col items-center">
        <img
          className="w-3/4"
          src={picture ? picture : bg}
          alt="Something went wrong"
        ></img>
        <h3 className="mt-4 text-2xl font-bold">{name}</h3>
      </div>
      <p className="break-all pb-10 mx-4 text-center text-sm font-semibold my-4">
        {description}
      </p>
      <div className="flex w-full absolute bottom-0 justify-center mb-4">
        <a
          className="bg-blue-500 rounded px-4 py-1"
          href={link}
          target="_blank"
        >
          Go to project github
        </a>
      </div>
    </div>
  );
};

export default Card;
