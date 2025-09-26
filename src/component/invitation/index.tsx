import { Fragment } from "react/jsx-runtime"
import { useModal } from "../../component/store"
import {
  BRIDE_FATHER,
  BRIDE_FIRSTNAME,
  BRIDE_INFO,
  BRIDE_MOTHER,
  BRIDE_TITLE,
  GROOM_FATHER,
  GROOM_FIRSTNAME,
  GROOM_INFO,
  GROOM_MOTHER,
  GROOM_TITLE,
} from "../../const"
import blueFlowerImage from "../../image/blue-flower.png"
import { ReactComponent as EnvelopeIcon } from "../../image/envelope-icon.svg"
import { ReactComponent as PhoneIcon } from "../../image/phone-flip-icon.svg"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card invitation">
      {/* <h2 className="english"></h2> */}
      <img src={blueFlowerImage} alt="sample" />
      <div className="break" />

      <div className="content">이 모든 것 위에 사랑을 더하라</div>
      <div className="content">이는 온전하게 매는 띠니라</div>
      <div className="content-small">(골로새서 3:14)</div>
      <div className="content-space">.....</div>
      <div className="break" />
      <div className="content">두 사람이 사랑으로 만나</div>
      <div className="content">서로의 손을 꼭 잡고</div>
      <div className="content">새로운 가정을 꿈꾸고 있습니다.</div>
      <div className="break" />
      <div className="content">따뜻한 마음 가득 안고</div>
      <div className="content">귀한 걸음 하시어 축복해주시면</div>
      <div className="content">감사하겠습니다.</div>
      <div className="content-space">.....</div>
      <div className="break" />
      <div className="name">2025년 12월 6일 (토) 오후 2시 30분</div>
      <div className="name">
        {GROOM_FATHER} · {GROOM_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{GROOM_TITLE}</span>
        </span>{" "}
        {GROOM_FIRSTNAME}
      </div>
      <div className="name">
        {BRIDE_FATHER} · {BRIDE_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{BRIDE_TITLE}</span>
        </span>{" "}
        {BRIDE_FIRSTNAME}
      </div>

      <div className="break" />

      <Button
        onClick={() => {
          openModal({
            className: "contact-modal",
            closeOnClickBackground: true,
            header: (
              <div className="title-group">
                <div className="title">축하 인사 전하기</div>
                <div className="subtitle">
                  전화, 문자메세지로 축하 인사를 전해보세요.
                </div>
              </div>
            ),
            content: (
              <>
                <div className="contact-info">
                  {GROOM_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
                <div className="contact-info">
                  {BRIDE_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
              </>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                닫기
              </Button>
            ),
          })
        }}
      >
        연락하기
      </Button>
    </LazyDiv>
  )
}
