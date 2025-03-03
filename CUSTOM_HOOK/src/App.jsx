import useFetch from "./hook/useFetch";
function App() {
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (isPending) {
    console.log(isPending);
    return <h2>Loading ...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      {data &&
        data.map((user) => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
            </div>
          );
        })}
    </>
  );
}

export default App;
