import dayjs from "dayjs"
import "dayjs/locale/ko"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"

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
export const BRIDE_TITLE = "딸"
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
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/KTH_2386.jpeg?alt=media&token=cf7cb22b-f3de-46d9-a67e-faddadbaa84a",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/KTH_3347.jpeg?alt=media&token=1d06feae-8238-4001-977b-f0756ad5d8f6",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/IMG_6840.jpeg?alt=media&token=2a86d759-6d02-4fee-9bc5-2b4ec5a9681e",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/SIN_1596.jpeg?alt=media&token=abddd431-01bf-452b-ae01-10cc4a8b915d",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/SIN_1240.jpeg?alt=media&token=74959018-eb62-4f85-adad-ba8c673a430b",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/KTH_3879.jpeg?alt=media&token=09ad4e12-b987-4bac-bf06-929c0a777d19",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/KTH_4534.jpeg?alt=media&token=7762f310-8409-4c5b-9b34-9eb0cd8a04ab",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/SIN_1175.jpeg?alt=media&token=b9b16a6f-ad2e-40ad-b798-151a4ecd06aa",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/SIN_1000.jpeg?alt=media&token=a526dd04-7f2a-49b3-bb12-aaa51b1a513e",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/SIN_0146.jpeg?alt=media&token=5ca40e21-9056-48e9-b7cd-67f795822df2",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/KTH_4667.jpeg?alt=media&token=fe84e16d-8b32-4d5f-934c-c5ea75ae554f",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/SIN_1685.jpeg?alt=media&token=0a06ea93-0128-4b8c-ad05-5033f49da979",
]
