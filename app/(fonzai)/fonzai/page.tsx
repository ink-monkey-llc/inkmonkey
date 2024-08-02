import Controls from './ui/controls/controls'

import FonzLayout from './components/fonz-layout'
import History from './ui/history/history'
import ImageBox from './ui/image/imagebox'
import RecsModal from './ui/recs/recs-modal'

function Fonz({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
 const { modal } = searchParams
 return (
  <FonzLayout>
   <Controls />
   <ImageBox />
   <History />
   {/* <StyleList /> */}
   {modal === 'recs' && <RecsModal />}
  </FonzLayout>
 )
}

export default Fonz
