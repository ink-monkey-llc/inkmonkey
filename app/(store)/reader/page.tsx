import React from 'react'
import Upload from './upload'
import List from './list'

const App: React.FC = () => {
 return (
  <div className='items-center flex flex-col gap-4 max-w-[600px] m-auto py-8'>
   {/* <Upload> */}
   <h2>Survey Results:</h2>
   <List />
   {/* </Upload> */}
  </div>
 )
}

export default App
