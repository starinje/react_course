import Button from './components/Button';
import Accordion from './components/Accordion';
import { GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';


function App() {

  const items = [
    {
      id: '1',
      label: 'Can I use react on a project?',
      content: 'You can use react on any project you choose...'
    },
    {
      id: '2',
      label: 'Can I use react on a project?',
      content: 'You can use react on any project you choose...'
    },
    {
      id: '3',
      label: 'Can I use react on a project?',
      content: 'Oh yeah.....'
    }
  ] 

  return <Accordion items={items}/>
  
}

export default App;
