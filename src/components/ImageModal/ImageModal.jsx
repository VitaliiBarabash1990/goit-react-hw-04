import s from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

const ImageModal = ({ src, modalIsOpen, closeModal }) => {
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<div className={s.wrap}>
				<img className={s.img} src={src} alt="" />
			</div>
		</Modal>
	);
};

export default ImageModal;
