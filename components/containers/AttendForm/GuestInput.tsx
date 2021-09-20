/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react'

import style from './guestInput.module.css'

export interface Guest {
  firstName: string
  lastName: string
  email: string
  diet: string
  attending27: boolean
  attending28: boolean
  guestInfoComplete: boolean
}

interface State {
  guestOne: Guest
  guestTwo: Guest
}

interface Props {
  state: State
  guest: 'guestOne' | 'guestTwo'
  dispatch: (arg: { type: string; payload: string | boolean }) => void
}

const GuestInput: FC<Props> = ({ state, guest, dispatch }) => (
  <>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className={style.labelStyle} htmlFor="inline-full-name">
          Förnamn
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          required
          className={style.textInputStyle}
          type="text"
          value={state[guest].firstName}
          onChange={(e) =>
            dispatch({
              type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_FIRST_NAME`,
              payload: e.target.value,
            })
          }
        />
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className={style.labelStyle} htmlFor="inline-lastname">
          Efternamn
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          required
          className={style.textInputStyle}
          type="text"
          value={state[guest].lastName}
          onChange={(e) =>
            dispatch({
              type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_LAST_NAME`,
              payload: e.target.value,
            })
          }
        />
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3" />
      <label className={style.labelStyle}>
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          checked={state[guest].attending27}
          onChange={() =>
            dispatch({
              type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_ATTENDANCE_27`,
              payload: !state[guest].attending27,
            })
          }
        />
        <span className="text-sm">Jag kommer på grillfesten den 27 maj 2022!</span>
      </label>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3" />
      <label className={style.labelStyle}>
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          checked={state[guest].attending28}
          onChange={() =>
            dispatch({
              type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_ATTENDANCE_28`,
              payload: !state[guest].attending28,
            })
          }
        />
        <span className="text-sm">Jag kommer på vigsel och bröllop den 28 maj 2022!</span>
      </label>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className={style.labelStyle} htmlFor="inline-diet">
          Kost- eller dietönskemål
        </label>
      </div>
      <div className="md:w-2/3">
        <textarea
          className={style.textInputStyle}
          id="inline-diet"
          value={state[guest].diet}
          onChange={(e) =>
            dispatch({
              type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_DIET`,
              payload: e.target.value,
            })
          }
        />
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className={style.labelStyle} htmlFor="inline-email">
          Email
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className={style.textInputStyle}
          value={state[guest].email}
          onChange={(e) =>
            dispatch({
              type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_EMAIL`,
              payload: e.target.value,
            })
          }
        />
      </div>
    </div>
  </>
)

export default GuestInput
