import { useModal } from "../../hooks/use-modal";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
//https://www.youtube.com/watch?v=2ZhZwTOTM48
const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(true);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
      </Modal>
      {/*}<button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores
          eum minima earum atque aut blanditiis, cumque eius! Eius nobis odit
          tempora aperiam quod obcaecati repellendus optio voluptas numquam
          necessitatibus?
        </p>
      </Modal>
      <button onClick={openModalContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>

      </Modal>
      <button onClick={openModalSong}>Modal Canciones</button>
      <Modal isOpen={isOpenSong} closeModal={closeModalSong}>

      </Modal>
      <button onClick={openModalPortal}>Modal en Portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal en Portal</h3>
        <p>
          Este es el contenido de un modal que carga en otro nodo del DOM
          diferente a donde carga nuestra app de React, gracias a un React
          Portal.
        </p>
  </ModalPortal>*/}
    </div>
  );
};

export default Modals;