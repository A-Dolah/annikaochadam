/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios'
import { FC, useState } from 'react'

const AttendForm: FC = () => {
  const [loading, setLoading] = useState(false)

  const [firstName, setFirstName] = useState(``)
  const [lastName, setLastName] = useState(``)
  const [email, setEmail] = useState(``)
  const [attending27, setAttending27] = useState(false)
  const [attending28, setAttending28] = useState(false)
  const [diet, setDiet] = useState(``)

  const submitGuest = async () => {
    try {
      setLoading(true)

      const response = await axios.post(`/api/guests`, {
        firstName,
        lastName,
        email,
        attending27,
        attending28,
        diet,
      })

      const { data } = response

      console.log(`GUEST INSERT RESPONSE:`, data)

      const emailResponse = await axios.post(`/api/email`, {
        firstName,
        lastName,
        email,
        attending27,
        attending28,
        diet,
      })

      console.log(`EMAIL RESPONSE`, emailResponse)

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
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
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
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-firstname"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-lastname"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-lastname"
          >
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3" />
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            checked={attending27}
            onChange={() => setAttending27((prev) => !prev)}
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
            checked={attending28}
            onChange={() => setAttending28((prev) => !prev)}
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
            id="inline-firstname"
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
          />
        </div>
      </div>
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
  )
}

export default AttendForm
