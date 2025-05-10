import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const EditScreen = () => {
  const redirect = useNavigate();
  // read id from params
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState("");

  //   define update function
  const handleUpdate = async () => {
    const response = await axios.put("http://localhost:5000/book/" + id, {
      title,
      pages,
    });
    toast.success(response.data);
    redirect("/");
  };

  //   define a function for retrieving book data
  const getBookById = async () => {
    const response = await axios.get("http://localhost:5000/book/" + id);
    setPages(response.data.pages);
    setTitle(response.data.title);
  };
  // useeffect
  useEffect(() => {
    getBookById();
  }, []);

  return (
    <div>
      <h1>Edit book</h1>
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
            onClick={handleUpdate}
            className="bg-indigo-950 text-white p-2 rounded"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditScreen;
