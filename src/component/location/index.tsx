import { LOCATION, LOCATION_ADDRESS } from "../../const"
import { ReactComponent as BusIcon } from "../../image/bus-icon.svg"
import { ReactComponent as CarIcon } from "../../image/car-icon.svg"
import { LazyDiv } from "../lazyDiv"
import { Map } from "./map"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">지하철</div>
          <div />
          <div className="content">
            지하철 <span className="line-3">3호선</span>
            <span className="line-shinbundang">신분당선</span> <b>1번 출구</b>
            에서 도보 직진 3분
            <br />
          </div>
          <div />
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">자차</div>
          <div />

          <div className="content">
            <b>[디렉팅웨딩CM]</b> 서울특별시 강남구 도산대로 150
            <br />
            건물 뒤편 주차타워 (발렛지원 / 2시간 무료)
          </div>
          <div />
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">SRT</div>
          <div />
          <div className="content">
            <b>
              수서역 → <span className="line-3">3호선</span> → 신사역
            </b>
          </div>
          <div />
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">KTX</div>
          <div />
          <div className="content">
            <b>
              서울역 → <span className="line-4">4호선</span> → 충무로역 →{" "}
              <span className="line-3">3호선</span> → 신사역
            </b>
          </div>
          <div />
        </div>
      </LazyDiv>
    </>
  )
}
