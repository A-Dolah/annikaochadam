/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames'
import { FC } from 'react'

import styles from './guestInput.module.css'

export interface Guest {
  firstName: string
  lastName: string
  email: string
  diet: string
  attending27: boolean
  attending28: boolean
  notAttending: boolean
}

interface ValidState {
  valid: boolean
  errorText: string
}

interface TextInputProps {
  label: string
  htmlFor: string
  error?: ValidState
  firstRenderRef?: boolean
}

const TextInputComponent: FC<TextInputProps> = ({
  label,
  htmlFor,
  error,
  firstRenderRef,
  children,
}) => (
  <div className={styles.inputContainer}>
    <div>
      <label htmlFor={htmlFor} className={styles.labelStyle}>
        {label}
      </label>
    </div>
    <div className="md:w-3/4 mx-auto">{children}</div>
    {error && !firstRenderRef && (
      <p className="md:w-3/4 mx-auto italic text-center text-xs mt-2 text-red-400">
        {error.errorText}
      </p>
    )}
  </div>
)

interface CheckboxInputProps {
  spanText: string
}

const CheckboxInputComponent: FC<CheckboxInputProps> = ({ spanText, children }) => (
  <div className={styles.inputContainer}>
    <div className="md:w-3/4 mx-auto">
      <label className={classNames(styles.labelStyle, styles.checkboxLabelStyle)}>
        <div className={styles.checkboxStyle}>{children}</div>
        <span className="text-base">{spanText}</span>
      </label>
    </div>
  </div>
)

interface Props {
  validFirstName: ValidState
  validLastName: ValidState
  validEmail: ValidState
  firstRenderRef: boolean
  state: Guest
  guest: 'guestOne' | 'guestTwo'
  dispatch: (arg: { type: string; payload: string | boolean }) => void
}

const GuestInput: FC<Props> = ({
  state,
  guest,
  validFirstName,
  validLastName,
  validEmail,
  firstRenderRef,
  dispatch,
}) => (
  <>
    <TextInputComponent
      label="Förnamn"
      htmlFor="inline-firstname"
      error={validFirstName}
      firstRenderRef={firstRenderRef}
    >
      <input
        disabled
        className={styles.textInputStyle}
        id="inline-firstname"
        type="text"
        value={state.firstName}
        onChange={(e) =>
          dispatch({
            type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_FIRST_NAME`,
            payload: e.target.value,
          })
        }
      />
    </TextInputComponent>

    <TextInputComponent
      label="Efternamn"
      htmlFor="inline-lastname"
      error={validLastName}
      firstRenderRef={firstRenderRef}
    >
      <input
        disabled
        className={styles.textInputStyle}
        id="inline-lastname"
        type="text"
        value={state.lastName}
        onChange={(e) =>
          dispatch({
            type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_LAST_NAME`,
            payload: e.target.value,
          })
        }
      />
    </TextInputComponent>

    <CheckboxInputComponent spanText="Jag kommer på grillfesten den 27 maj">
      <input
        disabled
        className="opacity-0 absolute"
        type="checkbox"
        checked={state.attending27}
        onChange={() =>
          dispatch({
            type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_ATTENDANCE_27`,
            payload: !state.attending27,
          })
        }
      />
      <svg
        className={classNames(
          `fill-current w-4 h-4 text-black pointer-events-none`,
          state.attending27 ? `visible` : `hidden`
        )}
        viewBox="0 0 20 20"
      >
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    </CheckboxInputComponent>

    <CheckboxInputComponent spanText="Jag kommer på vigsel och bröllop den 28 maj">
      <input
        disabled
        className="opacity-0 absolute"
        type="checkbox"
        checked={state.attending28}
        onChange={() =>
          dispatch({
            type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_ATTENDANCE_28`,
            payload: !state.attending28,
          })
        }
      />
      <svg
        className={classNames(
          `fill-current w-4 h-4 text-black pointer-events-none`,
          state.attending28 ? `visible` : `hidden`
        )}
        viewBox="0 0 20 20"
      >
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    </CheckboxInputComponent>

    <CheckboxInputComponent spanText="Jag kan tyvärr inte vara med under bröllopshelgen">
      <input
        disabled
        className="opacity-0 absolute"
        type="checkbox"
        checked={state.notAttending}
        onChange={() =>
          dispatch({
            type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_NOT_ATTENDING`,
            payload: !state.notAttending,
          })
        }
      />
      <svg
        className={classNames(
          `fill-current w-4 h-4 text-black pointer-events-none`,
          state.notAttending ? `visible` : `hidden`
        )}
        viewBox="0 0 20 20"
      >
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    </CheckboxInputComponent>

    <TextInputComponent label="Eventuella kostönskemål" htmlFor="inline-diet">
      <textarea
        disabled
        className={styles.textInputStyle}
        id="inline-diet"
        value={state.diet}
        onChange={(e) =>
          dispatch({
            type: `ADD_GUEST_${guest === `guestOne` ? `ONE` : `TWO`}_DIET`,
            payload: e.target.value,
          })
        }
      />
    </TextInputComponent>

    <TextInputComponent
      label="Email"
      htmlFor="inline-email"
      error={validEmail}
      firstRenderRef={firstRenderRef}
    >
      <input
        disabled
        className={styles.textInputStyle}
        value={state.email}
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
