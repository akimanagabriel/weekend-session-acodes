import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function CreateBook() {
  const redirect = useNavigate();
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState("");

  const handleSaveBook = async () => {
    const response = await axios.post("http://localhost:5000/book/", {
      title,
      pages,
    });
    toast.success(response.data);
    redirect("/");
  };

  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="grid gap-3 w-1/3">
        <label htmlFor="">Book title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border bg-amber-50 border-amber-400 p-2"
        />
        <label htmlFor="">Number of pages</label>
        <input
          onChange={(e) => setPages(e.target.value)}
          value={pages}
          type="number"
          className="border bg-amber-50 border-amber-400 p-2"
        />
        <button
          className="bg-indigo-950 text-white p-2 rounded"
          onClick={handleSaveBook}
        >
          Save book
        </button>
      </div>
    </div>
  );
}

export default CreateBook;
