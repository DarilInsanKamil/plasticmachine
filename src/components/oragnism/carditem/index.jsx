import { Card } from '../../moleculs'
import './style.css'

export const CardItem = ({ datas }) => {
  return (
    <>
      {datas.map((val, i) => (
        <Card img={val.image} title={val.title} key={i} />
      ))}
    </>
  )
}
