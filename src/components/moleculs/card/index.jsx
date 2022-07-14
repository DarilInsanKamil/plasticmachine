import './style.css'
import { Button, Gap } from '../../atom'

export const Card = ({ img, title }) => {
  return (
    <div className="card-container">
      <img src={img} alt="card-img" className="card-img" />
      <h4 className="card-title">{title}</h4>
      <Gap height="16px" />
      <div className="card-button-container">
        <Button
          value="Detail"
          style={{
            width: "100%",
          }}
        />
        <Gap width="16px" />
        <Button
          style={{
            backgroundColor: "transparent",
            color: "#3B82F6",
            border: "1px solid #3B82F6",
            width: "100%",
          }}
          value="Hubungi saya"
        />
      </div>
    </div>
  )
}
