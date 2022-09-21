import { PlusCircle } from "phosphor-react";

interface Props {
  taskTitle: string;
  setTaskTitle: (taskTitle: string) => void;
  addToTask: () => void;
}

export default function InputTask({
  taskTitle,
  setTaskTitle,
  addToTask,
}: Props) {
  return (
    <div className="w-full max-w-[730px] flex  justify-between gap-4 mt-[-25px] p-2">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="bg-[#262626] p-4 w-[630px] rounded-lg placeholder:text-xs text-xs text-[#808080] placeholder:text-[#808080]"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        className="flex p-4 bg-[#1E6F9F] rounded-lg text-xs items-center justify-center gap-2 text-white font-bold"
        onClick={() => addToTask()}
      >
        Criar <PlusCircle size={18} />
      </button>
    </div>
  );
}
