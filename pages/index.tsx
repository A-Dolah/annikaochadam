import LandingInitialInfo from '@components/LandingInitialInfo'
import AttendForm from 'components/containers/AttendForm'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="flex flex-col items-center content-center">
      <LandingInitialInfo />
      <AttendForm />
    </div>
  )
}
