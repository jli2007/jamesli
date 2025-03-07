import { useNavigate } from "react-router";

export default function Notes() {
  const navigate = useNavigate();

  const goBackToHome = () => {
    sessionStorage.setItem("fromPage", "true");
    navigate("/home");
  };

  return (
    <div className="bg-black text-white font-playfair h-screen w-screen md:max-h-screen max-w-screen">
      <button
        className="bg-lightBeige text-black p-5 cursor-pointer"
        onClick={goBackToHome}
      >
        {" "}
        back
      </button>
      <h1 className="p-5">notes</h1>
    </div>
  );
}
