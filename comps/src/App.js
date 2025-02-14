import Button from './components/Button';
import Accordion from './components/Accordion';
import { GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';


function App() {

  const items = [
    {
      id: 
      label: 'Can I use react on a project?',
      content: 'You can use react on any project you choose...'
    },
    {
      label: 'Can I use react on a project?',
      content: 'You can use react on any project you choose...'
    },
    {
      label: 'Can I use react on a project?',
      content: 'You can use react on any project you choose...'
    }
  ] 

  return <Accordion items={items}/>
  
}

export default App;
