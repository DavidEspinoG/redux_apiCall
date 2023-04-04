import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "./redux/slices/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [])
  const { users, isLoading, error } = useSelector(state => state);
  return (
    <>
      {isLoading && <p>is loading</p>}
      {error && <p>Error</p>}
      {users.map(user => {
        return (
          <ul key={user.firstName}>
            <li >{user.firstName} {user.lastName}</li>
          </ul>
        )
      })}
    </>
  )
}

export default App
