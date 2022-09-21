import React from "react";
import { ClipboardText } from "phosphor-react";

export default function EmptyTask() {
  return (
    <div className="flex flex-col border-t-2 border-[#333333] rounded-lg min-h-[240px] mt-6 justify-center items-center p-6">
      <ClipboardText size={56} color="#3d3d3d" />
      <strong className="mt-4 text-[#808080] text-base">
        Você ainda não tem tarefas cadastradas
      </strong>
      <p className="text-[#808080] text-sm font-light">
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
