import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [updateId, setUpdateId] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (updateId) {
      const updatedData = data.map((d) => {
        if (d.id === updateId) {
          return { ...d, name: name };
        }
        return d;
      });
      setData(updatedData);
    } else {
      const newObj = {
        id: Math.random().toString(),
        name: name,
      };

      setData((prev) => [...prev, newObj]);
    }
    setName("");
    setUpdateId("")
  };

  const newData = data.filter((d) =>
    d.name.toLowerCase().includes(filterInput.toLowerCase())
  );

  const onRemoveHandler = (id) => {
    const filteredDat = data.filter((d) => d.id !== id);
    setData(filteredDat);
  };

  const onUpadateHandler = (data) => {
    setName(data.name);
    setUpdateId(data.id);
  };

  return (
    <div className="App">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
        </div>

        <form
          onSubmit={onSubmitHandler}
          className="mx-auto mt-8 max-w-md space-y-4 flex gap-3 justify-center items-center"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Add data"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Add
            </button>
          </div>
        </form>

        <div className="relative flex justify-center items-center mt-4 w-full gap-3">
          <input
            type="text"
            className="rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="search data"
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
          />
        </div>

        <div className="mt-7 flex justify-center items-center">
          <div className="overflow-x-auto">
            <table className="divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>

                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Delete
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Update
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {newData.map((d) => (
                  <tr key={d.id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {d.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <button
                        onClick={() => onRemoveHandler(d.id)}
                        className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                      >
                        remove
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <button
                        onClick={() => onUpadateHandler(d)}
                        className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                      >
                        update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
