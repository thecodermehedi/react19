import {use, useState, Suspense} from "react";

const fetchMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🚀");
    }, 1000);
  });
};

const LoadingMessage = () => {
  return <p className="text-xl">⌛ Downloading message...</p>;
};

const MessageContainer = () => {
  const resolvedMessage = use(fetchMessage());
  return <p className="text-xl">Here is the message:{resolvedMessage} </p>;
};

const useHookPromiseNew = () => {
  const [show, setShow] = useState(false);
  const download = () => {
    setShow(true);
  };
  return show ? (
    <Suspense fallback={<LoadingMessage />}>
      <MessageContainer />
    </Suspense>
  ) : (
    <button
      onClick={download}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Download message
    </button>
  );
};

export default useHookPromiseNew;
