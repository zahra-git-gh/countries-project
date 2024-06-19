import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
    const navigate=useNavigate()
    function clickHandler(){
        navigate('/')
    }
  return (
    <section className="w-full h-screen">
      <div 
        style={{ backgroundImage: "url(/231.jpg)" }}
        className="w-full h-screen bg-cover bg-center flex justify-center items-end"
      >
       <button onClick={clickHandler} className="bg-yellow-400 text-white w-96 h-24 rounded-3xl font-extrabold text-xl mb-36">Back to home</button>
      </div>
    </section>
  );
}
