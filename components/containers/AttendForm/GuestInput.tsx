/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react'

import styles from './guestInput.module.css'

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

interface TextInputProps {
  label: string
  htmlFor: string
}

const TextInputComponent: FC<TextInputProps> = ({ label, htmlFor, children }) => (
  <div className={styles.inputContainer}>
    <div>
      <label htmlFor={htmlFor} className={styles.labelStyle}>
        {label}
      </label>
    </div>
    <div className="md:w-3/4 mx-auto">{children}</div>
  </div>
)

interface CheckboxInputProps {
  spanText: string
}

const CheckboxInputComponent: FC<CheckboxInputProps> = ({ spanText, children }) => (
  <div className={styles.inputContainer}>
    <div className="md:w-3/4 mx-auto">
      <label className={styles.labelStyle}>
        {children}
        <span className="text-sm">{spanText}</span>
      </label>
    </div>
  </div>
)

interface Props {
  state: State
  guest: 'guestOne' | 'guestTwo'
  dispatch: (arg: { type: string; payload: string | boolean }) => void
}

const GuestInput: FC<Props> = ({ state, guest, dispatch }) => (
  <>
    <TextInputComponent label="Förnamn" htmlFor="inline-firstname">
      <input
        required
        className={styles.textInputStyle}
        id="inline-firstname"
        type="text"
        value={state[guest].firstName}
        onChange={(e) =>
          dispatch({
            type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_FIRST_NAME`,
            payload: e.target.value,
          })
        }
      />
    </TextInputComponent>

    <TextInputComponent label="Efternamn" htmlFor="inline-lastname">
      <input
        required
        className={styles.textInputStyle}
        id="inline-lastname"
        type="text"
        value={state[guest].lastName}
        onChange={(e) =>
          dispatch({
            type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_LAST_NAME`,
            payload: e.target.value,
          })
        }
      />
    </TextInputComponent>

    <CheckboxInputComponent spanText="Jag kommer på grillfesten den 27 maj 2022!">
      <input
        className="mr-2 leading-tight rounded-none"
        type="checkbox"
        checked={state[guest].attending27}
        onChange={() =>
          dispatch({
            type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_ATTENDANCE_27`,
            payload: !state[guest].attending27,
          })
        }
      />
    </CheckboxInputComponent>

    <CheckboxInputComponent spanText="Jag kommer på vigsel och bröllop den 28 maj 2022!">
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
    </CheckboxInputComponent>

    <TextInputComponent label="Kost-eller dietönskemål" htmlFor="inline-diet">
      <textarea
        className={styles.textInputStyle}
        id="inline-diet"
        value={state[guest].diet}
        onChange={(e) =>
          dispatch({
            type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_DIET`,
            payload: e.target.value,
          })
        }
      />
    </TextInputComponent>

    <TextInputComponent label="Email" htmlFor="inline-email">
      <input
        className={styles.textInputStyle}
        value={state[guest].email}
        id="inline-email"
        onChange={(e) =>
          dispatch({
            type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_EMAIL`,
            payload: e.target.value,
          })
        }
      />
    </TextInputComponent>
  </>
)

export default GuestInput
