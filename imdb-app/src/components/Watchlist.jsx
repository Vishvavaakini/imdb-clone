import {   useState } from "react";
import genreid from "../Utility/Genre"; // ⚠️ Ensure folder & file casing EXACT

export default function Watchlist({
  watchlist,
  handleRemoveFromWatchlist,
  setWatchlist,
}) {
  const [search, setSearch] = useState("");
   
  const [gen, setGen] = useState("All");

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const sortDescending = () => {
    const sorted = [...watchlist].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setWatchlist(sorted);
  };

  const sortAscending = () => {
    const sorted = [...watchlist].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setWatchlist(sorted);
  };
const genre = [
  "All",
  ...Array.from(
    new Set(
      watchlist
        .map((m) => genreid[m.genre_ids?.[0]])
        .filter(Boolean)
    )
  ),
];



  return (
    <>
      {/* Genre Filter */}
      <div className="flex justify-center items-center flex-wrap">
        {genre.map((g) => (
          <div
            key={g}
            onClick={() => setGen(g)}
            className={`ml-3 mt-2 w-[7rem] h-[2rem] cursor-pointer rounded-xl p-1 text-center text-white ${
              gen === g ? "bg-blue-500/60" : "bg-gray-500/60"
            }`}
          >
            {g}
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="mt-10 flex items-center justify-center">
        <input
          onChange={handleSearch}
          value={search}
          className="bg-gray-500/20 text-center outline-none p-1"
          placeholder="Search For Movies"
        />
      </div>

      {/* Table */}
      <div className="mt-5 border border-gray-200">
        <table className="w-full text-center border">
          <thead>
            <tr className="border-b-2">
              <th>Name</th>
              <th>
                <div className="flex justify-center">
                  <span
                    className="cursor-pointer p-2"
                    onClick={sortDescending}
                  >
                    ↑
                  </span>
                  <span className="p-2">Ratings</span>
                  <span
                    className="cursor-pointer p-2"
                    onClick={sortAscending}
                  >
                    ↓
                  </span>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((m) =>
                m.original_title
                  ?.toLowerCase()
                  .includes(search)
              )
              .filter(
                (m) =>
                  gen === "All" ||
                  genreid[m.genre_ids?.[0]] === gen
              )
              .map((m) => (
                <tr key={m.id} className="border-b-2">
                  <td>
                    <div className="flex items-center">
                      <img
                        className="ml-5 p-2 h-[5em] w-[6rem]"
                        src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                        alt={m.original_title}
                      />
                      <div className="ml-5">
                        {m.original_title}
                      </div>
                    </div>
                  </td>

                  <td>{m.vote_average}</td>
                  <td>{m.popularity}</td>
                  <td>{genreid[m.genre_ids?.[0]]}</td>
                  <td
                    onClick={() => handleRemoveFromWatchlist(m)}
                    className="text-red-400 cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
