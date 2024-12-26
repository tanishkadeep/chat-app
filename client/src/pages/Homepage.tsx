import { useNavigate } from "react-router-dom";
import { WordRotate } from "../components/WordFlip";
import Header from "../components/Header";
import Underline from "../components/Underline";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col dark:text-neutral-100 text-neutral-800">
      <Header />
      <main className="flex flex-1 justify-center items-center flex-col bg-gradient-to-t from-violet-200 dark:from-neutral-950 dark:to-neutral-900">
        <title className="font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bricolage-grotesque flex flex-col sm:flex-row sm:gap-4 justify-center items-center text-indigo-900 dark:text-indigo-400">
          <h1>Experience</h1>
          <WordRotate
            words={[
              // "Anonymous",
              "Secure",
              "Private",
              "Instant",
              // "Disappearing",
            ]}
          />
          <h1>Chats</h1>
        </title>
        <h3 className="mt-3 px-8 sm:text-lg xl:text-xl max-w-2xl font-medium text-center">
          Chat without a footprint. Anonymous chat rooms for secure, temporary
          conversations.
          <div className="inline-block ml-1">
            No data saved, ever.
            <Underline />
          </div>
        </h3>
        <section className="flex flex-col gap-2 mt-10 xl:mt-12 justify-center items-center font-semibold text-white">
          <button
            onClick={() => {
              navigate("/chat");
            }}
            className="block bg-indigo-700 py-2 w-48 sm:w-96 text-center rounded-md hover:bg-indigo-600 cursor-pointer"
          >
            Create a room
          </button>
          <button
            className="block bg-indigo-500 py-2 w-48 sm:w-96 text-center rounded-md hover:bg-indigo-400 cursor-pointer"
            onClick={() => {
              navigate("/join");
            }}
          >
            Join a room
          </button>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
