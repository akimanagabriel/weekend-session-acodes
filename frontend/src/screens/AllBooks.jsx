import axios from "axios";
import { Edit2Icon, SquarePen, Trash, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

function AllBooks() {
  const [books, setBooks] = useState([]);

  //   define function for reading all books
  const getAllBooks = async () => {
    const response = await axios.get("http://localhost:5000/book/");
    setBooks(response.data);
  };

  //   delete book by id
  const handleDelete = async (id) => {
    const response = await axios.delete("http://localhost:5000/book/" + id);
    toast.success(response.data);
    // TODO: reflesh page
    getAllBooks();
  };

  // invoke func on component mount
  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="m-10 bg-white p-10 rounded-2xl shadow">
      <h1 className="text-2xl uppercase">AllBooks</h1>

      <table>
        <thead>
          <tr>
            <th className="px-4 border py-2">#</th>
            <th className="px-4 border py-2">TITLE</th>
            <th className="px-4 border py-2">NUMBER OF PAGES</th>
            <th className="px-4 border py-2">CREATION DATE</th>
            <th className="px-4 border py-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td className="px-4 border py-2">{index + 1}</td>
              <td className="px-4 border py-2">{book.title}</td>
              <td className="px-4 border py-2">{book.pages}</td>
              <td className="px-4 border py-2">
                {book.created_at.slice(0, 10)}
              </td>
              <td className="px-4 border py-2 ">
                <div className="flex gap-3">
                  <button onClick={() => handleDelete(book.id)}>
                    <Trash2 className="hover:text-red-600" />
                  </button>
                  <Link to={"/edit/" + book.id}>
                    <SquarePen className="hover:text-green-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllBooks;
