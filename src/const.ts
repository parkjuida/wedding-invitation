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
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/1.jpeg?alt=media&token=28134e58-fe68-4763-83d9-ba1ee49125c2",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/2.jpeg?alt=media&token=b7290e8a-5686-482e-b9ac-822c5d6983fb",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/3.jpeg?alt=media&token=e1d6f758-f674-4ead-ad0a-5258608f62ca",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/4.jpeg?alt=media&token=1fb3db67-ec33-490f-94d2-d9e8f9ce9103",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/5.jpeg?alt=media&token=8afc2dea-7d10-4a33-805e-8d6059fb24db",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/6.jpeg?alt=media&token=5f394412-f8df-4a87-97ed-30c04f3501c8",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/7.jpeg?alt=media&token=27d55cb7-810a-4980-b324-29c13021ff72",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/8.jpeg?alt=media&token=9fd2613c-7677-4de7-8ba6-a06974bd151b",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/9.jpeg?alt=media&token=d0cf733f-5710-4bc3-a515-8bb9d61ea1e5",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/10.jpeg?alt=media&token=c857044a-51ea-470a-b8da-4d82da7b8679",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/11.jpeg?alt=media&token=8be4e049-715a-4e9a-a498-daf5795e1cc6",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/12.jpeg?alt=media&token=aab7b3eb-d71b-411e-89d5-fdacdd879e5f",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/13.jpeg?alt=media&token=6e4c58bc-a6b2-4b8e-a704-f2a4bba5e4b7",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/14.jpeg?alt=media&token=310a6732-c042-4058-bb9c-723d2922f63a",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/15.jpeg?alt=media&token=7d7895f0-3ee4-4e46-886c-e7ec5dd2783e",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/16.jpeg?alt=media&token=6298df9f-1c05-45df-a71e-eda7c12f0c0e",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/17.jpeg?alt=media&token=457823e1-4942-4dcd-8af2-7a611c3cbd18",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/18.jpeg?alt=media&token=a43ab683-d7b3-4d54-b336-4d69f51a5cda",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/20.jpeg?alt=media&token=e31f1f90-e717-4bdd-a4fa-0bb076dae403",
  "https://firebasestorage.googleapis.com/v0/b/mochung-b8899.firebasestorage.app/o/21.jpeg?alt=media&token=0c806107-e156-4b9e-b700-0cf4d3afb96d",
]
