import { Button, Gap, InputText } from '../../atom'
import './style.css'

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <h1>Jual Mesin</h1>
      <InputText placeholder="cari mesin disini..." />
      <ul className="navbar-gruplist">
        <li className="navbar-list">
          <Button value="List Product" />
        </li>
        <Gap width="20px" />
        <li className="navbar-list">
          <Button
            value="Contact"
            onClick={() => console.log('kaksaks')}
            style={{
              backgroundColor: "transparent",
              border: "1px solid #3b82f6",
              color: "#3B82F6",
            }}
          />
        </li>
      </ul>
    </nav>
  )
}
