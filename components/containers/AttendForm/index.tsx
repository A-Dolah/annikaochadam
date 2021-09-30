/* eslint-disable jsx-a11y/label-has-associated-control */
import axios, { AxiosResponse } from 'axios'
import { FC, useState, useReducer } from 'react'

import GuestInput from './GuestInput'

export interface Guest {
  firstName: string
  lastName: string
  email: string
  diet: string
  attending27: boolean
  attending28: boolean
  notAttending: boolean
  guestInfoComplete: boolean
}

const initialState: Guest = {
  firstName: ``,
  lastName: ``,
  email: ``,
  diet: ``,
  attending27: false,
  attending28: false,
  notAttending: false,
  guestInfoComplete: true,
}

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
  const [loading, setLoading] = useState(false)

  const [state, dispatch] = useReducer(guestReducer, initialState)

  const submitGuest = async () => {
    try {
      setLoading(true)

      await axios.post(`/api/guests`, state)

      await axios.post(`/api/email`, { guestEmail: state.email, guest: state })

      setLoading(false)
    } catch (error) {
      console.log(`ERROR:`, error)
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await submitGuest()
  }

  if (loading) {
    return <div>Loading---</div>
  }

  return (
    <div className="flex items-center justify-center">
      <form className="w-full max-w-md" onSubmit={(e) => handleSubmit(e)}>
        <GuestInput state={state} guest="guestOne" dispatch={dispatch} />

        <div className="md:flex md:items-center justify-center">
          <input
            className="md:w-3/5 shadow bg-black cursor-pointer focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-10"
            type="submit"
            value="OSA"
          />
        </div>
      </form>
    </div>
  )
}

export default AttendForm
