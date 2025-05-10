import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { toast } from "sonner";
import AllBooks from "./screens/AllBooks";
import CreateBook from "./screens/CreateBook";
import EditScreen from "./screens/EditScreen";

export default function App() {
  return (
    <div>
      {/* header */}
      <div className="bg-slate-900 text-white text-center py-5">
        <h1>WELCOME TO OUR SESSION</h1>
      </div>
      <div className="flex min-h-screen">
        <div className="bg-slate-800 w-1/5 p-5 text-white">
          <ul>
            <li>
              <Link to={"/"}>All Books</Link>
            </li>
            <li>
              <Link to={"/create"}>Register book</Link>
            </li>
          </ul>
        </div>
        <div className="bg-slate-300 w-full p-5">
          <Routes>
            <Route
              index
              element={<AllBooks />}
            />
            <Route
              path="/create"
              element={<CreateBook />}
            />

            <Route
              path="/edit/:id"
              element={<EditScreen />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
