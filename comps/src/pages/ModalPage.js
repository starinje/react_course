import Modal from "../components/Modal";
import Button from '../components/Button';
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>I accept</Button>
    </div>
  )

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>Here is an important agreement for you to accept</p>
  </Modal>
  
  return (
    <div>
      <Button primary onClick={handleClick} >
        Open Modal
      </Button>
      {showModal && modal}
      
      
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus sit amet libero auctor tempus vestibulum vitae neque. Nulla facilisi. Praesent consequat hendrerit nisl, a aliquam ex elementum at. Etiam tortor sem, tempor et tristique et, aliquam in nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin et velit vitae eros tristique tristique ut dictum metus. Nam sed metus sapien. Aliquam ullamcorper laoreet ex, at sagittis ligula dignissim et. Nullam dignissim felis id ante lobortis, ac euismod urna pellentesque. Vivamus lacinia suscipit blandit. Nam vehicula sapien at dui dapibus, eu porttitor sapien tincidunt. Donec tempor, quam id commodo consectetur, sem justo finibus nibh, non lobortis urna sem et sem. In pellentesque luctus molestie. Nullam feugiat dapibus faucibus. Nunc sodales in erat vel pellentesque. In hac habitasse platea dictumst.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec faucibus lacinia faucibus. Fusce rutrum vestibulum ligula ac volutpat. Mauris non eros turpis. Maecenas molestie, urna eu efficitur malesuada, tortor sapien posuere turpis, in accumsan diam lacus eu dui. Etiam sem libero, finibus id finibus ut, rutrum et felis. Vestibulum eu dui malesuada, faucibus odio id, blandit neque. Ut euismod ipsum vel purus dictum, sed egestas mi sollicitudin. Aenean cursus risus erat, in consequat ex facilisis sed. Etiam vulputate iaculis tristique. Mauris aliquam turpis eu enim ornare, et accumsan risus ultricies.

Pellentesque vitae mi odio. Mauris varius dapibus nulla, ut mollis lacus laoreet et. Nullam sagittis est nisi, ac lacinia ligula congue efficitur. Donec vulputate bibendum ex, id porta urna fermentum ut. Donec a eleifend lorem, ut iaculis mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque egestas vulputate tellus ac tincidunt.

Nullam pretium erat id lorem ultricies, at lobortis ante laoreet. Integer id mauris tristique, vestibulum massa ac, consequat ligula. Praesent sed metus lorem. Sed non sollicitudin purus. In tellus lacus, consectetur ut malesuada et, scelerisque non enim. In blandit eros vel orci porta, eu luctus ex sodales. Vivamus iaculis venenatis arcu ac hendrerit. Etiam massa eros, faucibus sodales feugiat eu, pretium non leo. Nunc rhoncus cursus tincidunt.

Praesent ac justo elit. Curabitur quis aliquet sapien. Nulla ullamcorper sapien eros, at aliquam risus fringilla rhoncus. Nunc nec fringilla sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vel eros ante. Aenean metus velit, fringilla id justo a, sodales rutrum lorem. Nulla neque sapien, varius sit amet ante elementum, condimentum fringilla purus. Mauris vehicula ipsum viverra lectus finibus, porttitor dapibus nunc pharetra. Ut placerat efficitur tortor, eu pellentesque diam pharetra sit amet. Vivamus luctus, tortor in laoreet tempor, est lectus finibus nisi, non finibus turpis purus vel lectus.


      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus sit amet libero auctor tempus vestibulum vitae neque. Nulla facilisi. Praesent consequat hendrerit nisl, a aliquam ex elementum at. Etiam tortor sem, tempor et tristique et, aliquam in nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin et velit vitae eros tristique tristique ut dictum metus. Nam sed metus sapien. Aliquam ullamcorper laoreet ex, at sagittis ligula dignissim et. Nullam dignissim felis id ante lobortis, ac euismod urna pellentesque. Vivamus lacinia suscipit blandit. Nam vehicula sapien at dui dapibus, eu porttitor sapien tincidunt. Donec tempor, quam id commodo consectetur, sem justo finibus nibh, non lobortis urna sem et sem. In pellentesque luctus molestie. Nullam feugiat dapibus faucibus. Nunc sodales in erat vel pellentesque. In hac habitasse platea dictumst.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec faucibus lacinia faucibus. Fusce rutrum vestibulum ligula ac volutpat. Mauris non eros turpis. Maecenas molestie, urna eu efficitur malesuada, tortor sapien posuere turpis, in accumsan diam lacus eu dui. Etiam sem libero, finibus id finibus ut, rutrum et felis. Vestibulum eu dui malesuada, faucibus odio id, blandit neque. Ut euismod ipsum vel purus dictum, sed egestas mi sollicitudin. Aenean cursus risus erat, in consequat ex facilisis sed. Etiam vulputate iaculis tristique. Mauris aliquam turpis eu enim ornare, et accumsan risus ultricies.

Pellentesque vitae mi odio. Mauris varius dapibus nulla, ut mollis lacus laoreet et. Nullam sagittis est nisi, ac lacinia ligula congue efficitur. Donec vulputate bibendum ex, id porta urna fermentum ut. Donec a eleifend lorem, ut iaculis mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque egestas vulputate tellus ac tincidunt.

Nullam pretium erat id lorem ultricies, at lobortis ante laoreet. Integer id mauris tristique, vestibulum massa ac, consequat ligula. Praesent sed metus lorem. Sed non sollicitudin purus. In tellus lacus, consectetur ut malesuada et, scelerisque non enim. In blandit eros vel orci porta, eu luctus ex sodales. Vivamus iaculis venenatis arcu ac hendrerit. Etiam massa eros, faucibus sodales feugiat eu, pretium non leo. Nunc rhoncus cursus tincidunt.

Praesent ac justo elit. Curabitur quis aliquet sapien. Nulla ullamcorper sapien eros, at aliquam risus fringilla rhoncus. Nunc nec fringilla sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vel eros ante. Aenean metus velit, fringilla id justo a, sodales rutrum lorem. Nulla neque sapien, varius sit amet ante elementum, condimentum fringilla purus. Mauris vehicula ipsum viverra lectus finibus, porttitor dapibus nunc pharetra. Ut placerat efficitur tortor, eu pellentesque diam pharetra sit amet. Vivamus luctus, tortor in laoreet tempor, est lectus finibus nisi, non finibus turpis purus vel lectus.


      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lacus sit amet libero auctor tempus vestibulum vitae neque. Nulla facilisi. Praesent consequat hendrerit nisl, a aliquam ex elementum at. Etiam tortor sem, tempor et tristique et, aliquam in nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin et velit vitae eros tristique tristique ut dictum metus. Nam sed metus sapien. Aliquam ullamcorper laoreet ex, at sagittis ligula dignissim et. Nullam dignissim felis id ante lobortis, ac euismod urna pellentesque. Vivamus lacinia suscipit blandit. Nam vehicula sapien at dui dapibus, eu porttitor sapien tincidunt. Donec tempor, quam id commodo consectetur, sem justo finibus nibh, non lobortis urna sem et sem. In pellentesque luctus molestie. Nullam feugiat dapibus faucibus. Nunc sodales in erat vel pellentesque. In hac habitasse platea dictumst.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec faucibus lacinia faucibus. Fusce rutrum vestibulum ligula ac volutpat. Mauris non eros turpis. Maecenas molestie, urna eu efficitur malesuada, tortor sapien posuere turpis, in accumsan diam lacus eu dui. Etiam sem libero, finibus id finibus ut, rutrum et felis. Vestibulum eu dui malesuada, faucibus odio id, blandit neque. Ut euismod ipsum vel purus dictum, sed egestas mi sollicitudin. Aenean cursus risus erat, in consequat ex facilisis sed. Etiam vulputate iaculis tristique. Mauris aliquam turpis eu enim ornare, et accumsan risus ultricies.

Pellentesque vitae mi odio. Mauris varius dapibus nulla, ut mollis lacus laoreet et. Nullam sagittis est nisi, ac lacinia ligula congue efficitur. Donec vulputate bibendum ex, id porta urna fermentum ut. Donec a eleifend lorem, ut iaculis mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque egestas vulputate tellus ac tincidunt.

Nullam pretium erat id lorem ultricies, at lobortis ante laoreet. Integer id mauris tristique, vestibulum massa ac, consequat ligula. Praesent sed metus lorem. Sed non sollicitudin purus. In tellus lacus, consectetur ut malesuada et, scelerisque non enim. In blandit eros vel orci porta, eu luctus ex sodales. Vivamus iaculis venenatis arcu ac hendrerit. Etiam massa eros, faucibus sodales feugiat eu, pretium non leo. Nunc rhoncus cursus tincidunt.

Praesent ac justo elit. Curabitur quis aliquet sapien. Nulla ullamcorper sapien eros, at aliquam risus fringilla rhoncus. Nunc nec fringilla sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vel eros ante. Aenean metus velit, fringilla id justo a, sodales rutrum lorem. Nulla neque sapien, varius sit amet ante elementum, condimentum fringilla purus. Mauris vehicula ipsum viverra lectus finibus, porttitor dapibus nunc pharetra. Ut placerat efficitur tortor, eu pellentesque diam pharetra sit amet. Vivamus luctus, tortor in laoreet tempor, est lectus finibus nisi, non finibus turpis purus vel lectus.
      

      </p>
      
    </div>
  )
} 

export default ModalPage;