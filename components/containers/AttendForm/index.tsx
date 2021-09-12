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
  guestInfoComplete: boolean
}
export interface State {
  guestOne: Guest
  guestTwo: Guest
}

const initialState: State = {
  guestOne: {
    firstName: `X`,
    lastName: `X`,
    email: `adamdolah@gmail.com`,
    diet: `X`,
    attending27: false,
    attending28: false,
    guestInfoComplete: true,
  },
  guestTwo: {
    firstName: `Y`,
    lastName: `Y`,
    email: `a.dolah.dev@gmail.com`,
    diet: `Y`,
    attending27: false,
    attending28: false,
    guestInfoComplete: true,
  },
}

const guestReducer = (state: State, action: { type: string; payload: string | boolean }): State => {
  switch (action.type) {
    case `ADD_GUEST_ONE_FIRST_NAME`:
      return { ...state, guestOne: { ...state.guestOne, firstName: action.payload as string } }
    case `ADD_GUEST_TWO_FIRST_NAME`:
      return { ...state, guestTwo: { ...state.guestTwo, firstName: action.payload as string } }

    case `ADD_GUEST_ONE_LAST_NAME`:
      return { ...state, guestOne: { ...state.guestOne, lastName: action.payload as string } }
    case `ADD_GUEST_TWO_LAST_NAME`:
      return { ...state, guestTwo: { ...state.guestTwo, lastName: action.payload as string } }

    case `ADD_GUEST_ONE_ATTENDANCE_27`:
      return { ...state, guestOne: { ...state.guestOne, attending27: action.payload as boolean } }
    case `ADD_GUEST_TWO_ATTENDANCE_27`:
      return { ...state, guestTwo: { ...state.guestTwo, attending27: action.payload as boolean } }

    case `ADD_GUEST_ONE_ATTENDANCE_28`:
      return { ...state, guestOne: { ...state.guestOne, attending28: action.payload as boolean } }
    case `ADD_GUEST_TWO_ATTENDANCE_28`:
      return { ...state, guestTwo: { ...state.guestTwo, attending28: action.payload as boolean } }

    case `ADD_GUEST_ONE_DIET`:
      return { ...state, guestOne: { ...state.guestOne, diet: action.payload as string } }
    case `ADD_GUEST_TWO_DIET`:
      return { ...state, guestTwo: { ...state.guestTwo, diet: action.payload as string } }

    case `ADD_GUEST_ONE_EMAIL`:
      return { ...state, guestOne: { ...state.guestOne, email: action.payload as string } }
    case `ADD_GUEST_TWO_EMAIL`:
      return { ...state, guestTwo: { ...state.guestTwo, email: action.payload as string } }

    default:
      throw new Error()
  }
}

const AttendForm: FC = () => {
  const [loading, setLoading] = useState(false)
  const [multipleGuests, setMultipleGuests] = useState(false)

  const [state, dispatch] = useReducer(guestReducer, initialState)

  const submitGuest = async () => {
    try {
      setLoading(true)

      await Promise.all(
        Object.values(state).map(async (guest): Promise<AxiosResponse> => {
          const res = await axios.post(`/api/guests`, guest)
          return res
        })
      )

      await Promise.all(
        Object.values(state)
          .filter((guest) => guest.guestInfoComplete)
          .map(async (guest): Promise<AxiosResponse> => {
            const res = await axios.post(`/api/email`, { guestEmail: guest.email, state })
            return res
          })
      )

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
    <div>
      <p className="text-base">Anmäl dig här:</p>
      <form className="w-full max-w-sm" onSubmit={(e) => handleSubmit(e)}>
        <GuestInput state={state} guest="guestOne" dispatch={dispatch} />

        <button type="button" onClick={() => setMultipleGuests(!multipleGuests)}>
          Lägg till ytterligare gäst
        </button>

        {multipleGuests && <GuestInput state={state} guest="guestTwo" dispatch={dispatch} />}

        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <input
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              value="OSA"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AttendForm
