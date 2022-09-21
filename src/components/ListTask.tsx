import React from "react";
import CardTask from "./CardTask";
import EmptyTask from "./EmptyTask";

interface Tasks {
  id: number;
  title: string;
  isComplete: boolean;
}

interface ListTaskProps {
  tasks: Tasks[];
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function ListTask({ tasks, onEdit, onRemove }: ListTaskProps) {
  return (
    <div className="max-w-[730px] w-full text-xs mt-10 p-2">
      <div className="flex justify-between h-5 items-center ">
        <strong className="flex gap-1 text-[#4EA8DE] font-bold ">
          Tarefas criadas
          <span className="bg-[#333333] rounded-full px-2 text-white">
            {tasks.length}
          </span>
        </strong>
        <strong className="flex gap-1 text-[#8284FA] font-bold">
          Concluidas{" "}
          <span className="bg-[#333333] rounded-full px-2 text-white">
            {tasks.filter((task) => task.isComplete === true).length} de{" "}
            {tasks.length}
          </span>
        </strong>
      </div>
      {!tasks.length && <EmptyTask />}

      <div className="flex h-[400px] mt-6 flex-col gap-3 overflow-auto py-2">
        {tasks.map((task) => (
          <CardTask
            key={task.id}
            task={task}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
