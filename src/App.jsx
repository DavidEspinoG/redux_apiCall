import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "./redux/slices/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { users, isLoading, error, reqStatus } = useSelector(state => state);
  useEffect(() => {
    if(reqStatus === 'idle'){
      dispatch(fetchUsers());
    }
  }, [reqStatus, dispatch])
  return (
    <>
      {reqStatus === 'loading' && <p>is loading</p>}
      {reqStatus === 'rejected' && <p>Something went wrong</p>}
      {users.map(user => {
        return (
          <ul key={user.firstName}>
            <li >{user.name.title}. {user.name.first} {user.name.last}</li>
          </ul>
        )
      })}
    </>
  )
}

export default App
