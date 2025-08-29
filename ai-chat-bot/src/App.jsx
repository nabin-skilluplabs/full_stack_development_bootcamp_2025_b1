import { useForm } from "react-hook-form"
import { questionAI } from "./actions/ai";
import { useState } from "react";

function App() {
  const [answer, setAnswer] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: {  isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    const answer = await questionAI(data.question);
    console.log("Answer from AI:", answer);
    setAnswer(answer);
    setValue("question", "");
  };

  const handleKeyDown = (event) => {
    if(event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  }


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 max-auto">
        <textarea disabled={isSubmitting} onKeyDown={handleKeyDown} {...register("question", { required: true })} className="border border-gray-300 shadow-md rounded-md w-full h-[100px] p-4 text-lg bg-white disabled:bg-gray-50" placeholder="Type someting that you want me to write song of...."></textarea>
      </form>
      {
        isSubmitting && (
          <div className="mt-4 text-gray-500">Asking AI...</div>
        )
      }
      {
        !isSubmitting && answer && (
          <div className="p-4 w-1/2" dangerouslySetInnerHTML={{ __html: answer }}></div>
        )
      }
    </div>
  );
}

export default App;
