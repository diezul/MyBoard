'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Boards() {
  const [boards, setBoards] = useState([]);
  const [newBoardName, setNewBoardName] = useState("");

  const addBoard = () => {
    if (newBoardName.trim()) {
      setBoards([...boards, { id: Date.now(), name: newBoardName }]);
      setNewBoardName("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Boards</h1>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="New Board Name"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          className="flex-1 p-2 bg-gray-800 text-white rounded"
        />
        <Button onClick={addBoard} className="bg-blue-500 hover:bg-blue-600">
          Add Board
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {boards.map((board) => (
          <div key={board.id} className="p-4 bg-gray-800 rounded shadow">
            <h2 className="text-lg font-semibold">{board.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
