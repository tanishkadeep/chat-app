import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";

export const Join = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = useState<boolean>(true);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(ref.current?.value);
    if (!ref.current?.value) return;
    navigate(`/chat?roomid=${ref.current.value}`);
  }
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex flex-1 justify-center items-center flex-col bg-gradient-to-t dark:from-neutral-950 dark:to-neutral-800 from:bg-indigo-900 to:bg-white">
        <form onSubmit={onSubmitHandler} className="w-56 md:w-80 flex flex-col">
          <label className="mb-2 text-indigo-900 dark:text-indigo-400 text-lg font-semibold pl-1">
            Enter Room Code <GoArrowRight className="inline ml-1" />
          </label>
          <input
            ref={ref}
            autoFocus
            maxLength={6}
            type="text"
            onChange={() => {
              if (ref.current?.value.length === 6) {
                setDisabled(false);
              } else {
                setDisabled(true);
              }
            }}
            placeholder="######"
            className="rounded-md px-3 py-0.5 bg-neutral-50 dark:bg-neutral-300 outline-none font-medium border-2 border-neutral-300"
          />
          <button
            type="submit"
            disabled={disabled}
            className="text-yellow-100 bg-indigo-600 disabled:bg-indigo-400 hover:bg-indigo-500 font-semibold py-1 rounded-lg mt-3"
          >
            Join
          </button>
        </form>
      </main>
    </div>
  );
};
