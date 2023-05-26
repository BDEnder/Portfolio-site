import Avatar from "./Assets/Avatar.svg";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="text-text flex flex-col">
      <div className="flex items-center flex-col">
        <div className="flex items-center justify-center rounded-full p-1 bg-white mt-16">
          <img className="w-32 rounded-full" src={Avatar}></img>
        </div>
        <h2 className="mt-4 text-2xl">Hi I'm BDEnder</h2>
        <p className="transition-all animate-bounce">
          A kid who likes to do programming
        </p>
      </div>

      <div className="flex flex-col items-center mt-8">
        <h2 className="text-3xl text-center">Check out my projects! 😃</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-3/4 place-items-center mt-10 gap-y-12 gap-x-6">
          <Card
            name={"Portfolio site"}
            description={"Just a portfolio site. Are you on it now"}
            link={"https://github.com/"}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
