import { Suspense, use, useState } from "react";

const fetchMessage = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🚀");
        }, 1000);
    });
};

const MessageOutput = ({ messagePromise }) => {
    const messageContent = use(messagePromise);

    return <p className="text-xl">Here is the message: {messageContent}</p>;
};

const MessageContainer = ({ messagePromise }) => (
  <Suspense
    fallback={<p className="text-xl">⌛ Downloading message...</p>}
  >
    <MessageOutput messagePromise={messagePromise} />
  </Suspense>
);

const useHookPromiseOld = () => {
    const [show, setShow] = useState(false);
    const [messagePromise, setMessagePromise] = useState(null);

    const download = () => {
        setMessagePromise(fetchMessage());
        setShow(true);
    };

    return show ? (
        <MessageContainer messagePromise={messagePromise} />
    ) : (
        <button
            onClick={download}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Download message
        </button>
    );
}

export default useHookPromiseOld;