/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react'

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
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="inline-full-name"
        >
          Förnamn
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          required
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="inline-lastname"
        >
          Efternamn
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          required
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3" />
      <label className="md:w-2/3 block text-gray-500 font-bold">
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
      <label className="md:w-2/3 block text-gray-500 font-bold">
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
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="inline-diet"
        >
          Kost- eller dietönskemål
        </label>
      </div>
      <div className="md:w-2/3">
        <textarea
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="inline-email"
        >
          Email
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-email"
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
