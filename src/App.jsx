import {useState} from "react";
import UseHookDataFetchingOld from "./components/useHookDataFetching/New";
import UseHookDataFetchingNew from "./components/useHookDataFetching/New";
import UseHookPromiseOld from "./components/useHookPromise/Old";
import UseHookPromiseNew from "./components/useHookPromise/New";
import UseHookContextOld from "./components/useHookContext/Old";
import UseHookContextNew from "./components/useHookContext/New";
import FormActionOld from "./components/formAction/Old";
import FormActionNew from "./components/formAction/New";
import UseFormStatusOld from "./components/useFormStatus/Final";
import UseFormStatusNew from "./components/useFormStatus/Final";
import UseFormStateOld from "./components/useFormState/Final";
import UseFormStateNew from "./components/useFormState/Final";
import UseOptimisticOld from "./components/useOptimistic/Final";
import UseOptimisticNew from "./components/useOptimistic/Final";
import Counter from "./components/autoMemoization/Counter";
import InputContainer from "./components/forwardRef/ForwardRef";

export default function App() {
  const [example, setExample] = useState("");

  const handleChange = (e) => {
    setExample(e.target.value);
  };

  // choose which example to render
  let content;

  if (example === "useHookDataFetching-Old") {
    content = <UseHookDataFetchingOld />;
  }
  if (example === "useHookDataFetching-New") {
    content = <UseHookDataFetchingNew />;
  }
  if (example === "useHookPromise-Old") {
    content = <UseHookPromiseOld />;
  }
  if (example === "useHookPromise-New") {
    content = <UseHookPromiseNew />;
  }
  if (example === "useHookContext-Old") {
    content = <UseHookContextOld />;
  }
  if (example === "useHookContext-New") {
    content = <UseHookContextNew />;
  }
  if (example === "formAction-Old") {
    content = <FormActionOld />;
  }
  if (example === "formAction-New") {
    content = <FormActionNew />;
  }
  if (example === "useFormStatus-Old") {
    content = <UseFormStatusOld />;
  }
  if (example === "useFormStatus-New") {
    content = <UseFormStatusNew />;
  }
  if (example === "useFormState-Old") {
    content = (
      <>
        <UseFormStateOld itemID="1" title="Product 1" />
        <UseFormStateOld itemID="2" title="Product 2" />
      </>
    );
  }
  if (example === "useFormState-New") {
    content = (
      <>
        <UseFormStateNew itemID="1" title="Product 1" />
        <UseFormStateNew itemID="2" title="Product 2" />
      </>
    );
  }
  if (example === "useOptimistic-Old") {
    content = <UseOptimisticOld />;
  }
  if (example === "useOptimistic-New") {
    content = <UseOptimisticNew />;
  }
  if (example === "autoMemoization-Old") {
    content = <Counter />;
  }
  if (example === "autoMemoization-New") {
    content = <Counter />;
  }
  if (example === "forwardRef") {
    content = <InputContainer />;
  }

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto my-20 p-10 shadow-2xl border min-h-[35rem] text-center">
        <h1 className="font-bold text-3xl">What&apos;s coming in React 19</h1>

        <div className="mt-5">
          I have created some examples to explore the new features. You can
          explore the examples below:
        </div>

        <div className="mt-10">
          <select
            onChange={handleChange}
            className="bg-black bg-opacity-5 py-2 px-4 focus:outline-none"
          >
            <option value="">Select example</option>
            <option value="useHookDataFetching-Old">
              useHookDataFetching-Old
            </option>
            <option value="useHookDataFetching-New">
              useHookDataFetching-New
            </option>
            <option value="useHookPromise-Old">useHookPromise-Old</option>
            <option value="useHookPromise-New">useHookPromise-New</option>
            <option value="useHookContext-Old">useHookContext-Old</option>
            <option value="useHookContext-New">useHookContext-New</option>
            <option value="formAction-Old">formAction-Old</option>
            <option value="formAction-New">formAction-New</option>
            <option value="useFormStatus-Old">useFormStatus-Old</option>
            <option value="useFormStatus-New">useFormStatus-New</option>
            <option value="useFormState-Old">useFormState-Old</option>
            <option value="useFormState-New">useFormState-New</option>
            <option value="useOptimistic-Old">useOptimistic-Old</option>
            <option value="useOptimistic-New">useOptimistic-New</option>
            <option value="autoMemoization-Old">autoMemoization-Old</option>
            <option value="autoMemoization-New">autoMemoization-New</option>
            <option value="forwardRef-Old">forwardRef-Old</option>
            <option value="forwardRef-New">forwardRef-New</option>
          </select>
        </div>
        <div className="my-10">{content}</div>
      </div>
    </section>
  );
}
