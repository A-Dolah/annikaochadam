/* eslint-disable jsx-a11y/label-has-associated-control */
import { css } from '@emotion/react'
import axios from 'axios'
import cn from 'classnames'
import debounce from 'lodash.debounce'
import { useRouter } from 'next/router'
import { FC, useState, useReducer, useCallback, useRef, useEffect } from 'react'

import ClipLoader from 'react-spinners/ClipLoader'

import GuestInput from './GuestInput'

import { nameValidator, emailValidator } from './services/inputValidators'

export interface Guest {
  firstName: string
  lastName: string
  email: string
  diet: string
  attending27: boolean
  attending28: boolean
  notAttending: boolean
}

const initialState: Guest = {
  firstName: ``,
  lastName: ``,
  email: ``,
  diet: ``,
  attending27: false,
  attending28: false,
  notAttending: false,
}

const override = css`
  display: block;
  margin: 0 auto;
  border: 2px solid #ffffff;
  border-bottom-color: transparent;
`

const guestReducer = (state: Guest, action: { type: string; payload: string | boolean }): Guest => {
  switch (action.type) {
    case `ADD_GUEST_ONE_FIRST_NAME`:
      return { ...state, firstName: action.payload as string }

    case `ADD_GUEST_ONE_LAST_NAME`:
      return { ...state, lastName: action.payload as string }

    case `ADD_GUEST_ONE_ATTENDANCE_27`:
      return { ...state, attending27: action.payload as boolean }

    case `ADD_GUEST_ONE_ATTENDANCE_28`:
      return {
        ...state,
        attending28: action.payload as boolean,
        notAttending: false,
      }

    case `ADD_GUEST_ONE_NOT_ATTENDING`:
      return {
        ...state,
        attending27: false,
        attending28: false,
        notAttending: action.payload as boolean,
      }

    case `ADD_GUEST_ONE_DIET`:
      return { ...state, diet: action.payload as string }

    case `ADD_GUEST_ONE_EMAIL`:
      return { ...state, email: action.payload as string }

    default:
      throw new Error()
  }
}

const AttendForm: FC = () => {
  const router = useRouter()
  const [state, dispatch] = useReducer(guestReducer, initialState)

  const firstRender = useRef(true)

  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  // First Name state and validation
  const [validFirstName, setValidFirstName] = useState({
    valid: false,
    errorText: ``,
  })
  const validateFirstName = (input: string) => setValidFirstName(nameValidator(input, `firstName`))
  const debouncedValidateFirstName = useCallback(debounce(validateFirstName, 1000), [])
  useEffect(() => {
    if (firstRender.current) {
      return
    }
    debouncedValidateFirstName(state.firstName)
  }, [state.firstName])

  // Last Name state and validation
  const [validLastName, setValidLastName] = useState({
    valid: false,
    errorText: ``,
  })
  const validateLastName = (input: string) => setValidLastName(nameValidator(input, `lastName`))
  const debouncedValidateLastName = useCallback(debounce(validateLastName, 1000), [])
  useEffect(() => {
    if (firstRender.current) {
      return
    }
    debouncedValidateLastName(state.lastName)
  }, [state.lastName])

  // Email Name state and validation
  const [validEmail, setValidEmail] = useState({
    valid: false,
    errorText: ``,
  })
  const validateEmail = (input: string) => setValidEmail(emailValidator(input))
  const debouncedValidateEmail = useCallback(debounce(validateEmail, 1000), [])
  useEffect(() => {
    if (firstRender.current) {
      return
    }
    debouncedValidateEmail(state.email)
  }, [state.email])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    if (validFirstName.valid && validLastName.valid && validEmail.valid) {
      setDisabled(false)
    }
  }, [validFirstName, validLastName, validEmail])

  const submitGuest = async () => {
    firstRender.current = true
    try {
      setLoading(true)

      await axios.post(`/api/guests`, state)

      axios.post(`/api/email`, { guestEmail: state.email, guest: state })

      router.push(`/bekraftelse`)
    } catch (error) {
      console.log(`ERROR:`, error)
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await submitGuest()
  }

  return (
    <div className="flex items-center justify-center">
      <form className="w-full max-w-md" onSubmit={(e) => handleSubmit(e)}>
        <GuestInput
          validFirstName={validFirstName}
          validLastName={validLastName}
          validEmail={validEmail}
          firstRenderRef={firstRender.current}
          state={state}
          guest="guestOne"
          dispatch={dispatch}
        />

        <div className="flex items-center justify-center">
          <input
            disabled={disabled || loading}
            className={cn(
              `w-3/5 shadow cursor-pointer focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-10`,
              loading ? `bg-gray-600` : `bg-black`,
              disabled ? `bg-gray-600` : `bg-black`
            )}
            type="submit"
            value={!loading ? `OSA` : ``}
          />
          <div className="absolute z-50 pt-10">
            <ClipLoader loading={loading} color="ffffff" css={override} size={25} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AttendForm
