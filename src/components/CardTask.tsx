import React, { useState } from "react";
import { Trash, Check } from "phosphor-react";

interface Tasks {
  id: number;
  title: string;
  isComplete: boolean;
}

interface CardTaskProps {
  task: Tasks;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function CardTask({ task, onEdit, onRemove }: CardTaskProps) {
  return (
    <div className="flex w-full h-20 bg-[#262626] rounded-lg justify-between p-5 ">
      <div className="flex items-start">
        <button
          onClick={() => onEdit(task.id)}
          className={`flex items-center justify-center w-6 h-6 rounded-full border-solid border-[#4EA8DE] border-2 ${
            task.isComplete ? "bg-[#4EA8DE]" : ""
          } `}
        >
          {task.isComplete && (
            <span className="text-white">
              <Check size={15} />
            </span>
          )}
        </button>
      </div>
      <div className="flex flex-1 mx-4 h-8">
        <p
          className={` ${
            task.isComplete ? "line-through text-[#808080]" : "text-white"
          }`}
        >
          {task.title}
        </p>
      </div>
      <button onClick={() => onRemove(task.id)}>
        <Trash size={18} color="#808080" weight="bold" />
      </button>
    </div>
  );
}
