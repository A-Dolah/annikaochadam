import { FC } from 'react'

const BorderFrame: FC = ({ children }) => (
  <div className="border-black shadow-sm border p-8 w-full">{children}</div>
)
export default BorderFrame
