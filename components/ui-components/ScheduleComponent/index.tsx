import cn from 'classnames'

import styles from './scheduleComponent.module.css'

const ScheduleComponent = () => (
  <div className="bg-white w-3/4 xl:w-1/2 p-4 border border-black shadow-sm flex flex-col items-center">
    <div>
      <div className="flex items-center justify-between">
        <div className="border-b w-36 border-gray-600 mr-5 h-0" />
        <div className="text-gray-900 relative uppercase font-medium tracking-widest mx-2">
          Fredag den 28 maj
        </div>
        <div className="border-b w-36 border-gray-600 ml-5 h-0" />
      </div>

      <div className="flex mb-2">
        <div className="w-2/12">
          <span className="text-sm text-gray-600 block">8:00a</span>
          <span className="text-sm text-gray-600 block">8:15a</span>
        </div>
        <div className="w-1/12">
          <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2" />
        </div>
        <div className="w-9/12">
          <span className="text-sm font-semibold block">Morning Standup</span>
          <span className="text-sm">Zoom ID: 1134 11 1134</span>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-2/12">
          <span className="text-sm text-gray-600 block">10:00a</span>
          <span className="text-sm text-gray-600 block">2:00p</span>
        </div>
        <div className="w-1/12">
          <span className="bg-red-400 h-2 w-2 rounded-full block mt-2" />
        </div>
        <div className="w-9/12">
          <span className="text-sm font-semibold block">Core Development</span>
          <span className="text-sm">Joey, Matt, CJ and Vlad</span>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-2/12">
          <span className="text-sm text-gray-600 block">3:00p</span>
          <span className="text-sm text-gray-600 block">3:30p</span>
        </div>
        <div className="w-1/12">
          <span className="bg-indigo-600 h-2 w-2 rounded-full block mt-2" />
        </div>
        <div className="w-9/12">
          <span className="text-sm font-semibold block">Interview with Ed Harris</span>
        </div>
      </div>
    </div>
  </div>
)
export default ScheduleComponent
