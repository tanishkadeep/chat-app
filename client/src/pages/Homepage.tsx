import { useNavigate } from "react-router-dom";
import Theme from "../components/theme";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center dark:bg-gray-800">
      <Theme />
      <main className="flex justify-center items-center flex-col">
        <h1>Anonymous Chat Room</h1>
        <section>
          <button>Create a room</button>
          <button
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
