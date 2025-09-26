import {
  BRIDE_FIRSTNAME,
  GROOM_FIRSTNAME,
  LOCATION,
  WEDDING_DATE,
} from "../../const"
import orangeBlueFlowerImage from "../../image/orange-blue-flower.png"
import { LazyDiv } from "../lazyDiv"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="wedding-date">
        {WEDDING_DATE.format("YYYY")}
        <div className="divider" />
        {WEDDING_DATE.format("MM")}
        <div className="divider" />
        {WEDDING_DATE.format("DD")}
      </div>
      <div className="wedding-day-of-week">
        {DAY_OF_WEEK[WEDDING_DATE.day()]}
      </div>
      <div className="image-wrapper">
        <img src={orangeBlueFlowerImage} alt="sample" />
      </div>
      <div className="names">
        {GROOM_FIRSTNAME} & {BRIDE_FIRSTNAME}
      </div>
      <div className="info">
        {WEDDING_DATE.format("YYYY년 MMMM D일 dddd A h시 mm분")}
      </div>
      <div className="info">{LOCATION}</div>
    </LazyDiv>
  )
}
