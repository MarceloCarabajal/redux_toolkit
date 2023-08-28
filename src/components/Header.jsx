import { useSelector } from "react-redux"

const Header = () => {
    const user = useSelector((state) => state.user)
  return (
    <header>
        <h1>Redux Toolkit Example</h1>
        <ul>
            <li>Name: </li>
            <li>Email: {user.email} </li>
            <li>Username: </li>
        </ul>
    </header>
  )
}

export default Header