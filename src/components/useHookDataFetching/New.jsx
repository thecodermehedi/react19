import {use, Suspense} from "react";
import Loading from "../shared/Loading";

const useHookDataFetchingNew = () => {
  const fetchJokes = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    return res.json(); // this returns a promise
  };

  const JokeItem = () => {
    const joke = use(fetchJokes());
    return (
      <h2 className="text-xl font-medium italic text-neutral-900">
        {joke.value}
      </h2>
    );
  };

  return (
    <div className="shadow p-4 my-6 rounded bg-emerald-50">
      <Suspense fallback={<Loading />}>
        <JokeItem />
      </Suspense>
    </div>
  );
};

export default useHookDataFetchingNew;
