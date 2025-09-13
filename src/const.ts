import dayjs from "dayjs"
import "dayjs/locale/ko"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import image1 from "./image/image1.png"
import image10 from "./image/image10.png"
import image11 from "./image/image11.png"
import image12 from "./image/image12.png"
import image2 from "./image/image2.png"
import image3 from "./image/image3.png"
import image4 from "./image/image4.png"
import image5 from "./image/image5.png"
import image6 from "./image/image6.png"
import image7 from "./image/image7.png"
import image8 from "./image/image8.png"
import image9 from "./image/image9.png"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2025-12-06 14:30", "Asia/Seoul")
export const HOLIDAYS = [15]

export const LOCATION = "디렉팅웨딩CM"
export const LOCATION_ADDRESS = "서울 강남구 도산대로 150, 지하1층 디렉팅웨딩CM"

export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

export const WEDDING_HALL_POSITION_FOR_MAP = [127.023771273, 37.517455143]
export const WEDDING_HALL_POSITION = [127.025179719, 37.517973816]

export const NMAP_PLACE_ID = 1318431665
export const KMAP_PLACE_ID = 834341577

export const BRIDE_FULLNAME = "수연"
export const BRIDE_FIRSTNAME = "수연"
export const BRIDE_TITLE = "딸"
export const BRIDE_FATHER = "박명규"
export const BRIDE_MOTHER = "정자희"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-0000-0000",
    account: "우리은행 0000000000000",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-0000-0000",
    account: "하나은행 00000000000",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-0000-0000",
    account: "하나은행 00000000000000",
  },
]

export const GROOM_FULLNAME = "준형"
export const GROOM_FIRSTNAME = "준형"
export const GROOM_TITLE = "아들"
export const GROOM_FATHER = "박인철"
export const GROOM_MOTHER = "장원주"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-0000-0000",
    account: "하나은행 00000000000000",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-0000-0000",
    account: "신한은행 000000000000",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-0000-0000",
    account: "국민은행 000000000000",
  },
]

export const GALLERY_IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
]
