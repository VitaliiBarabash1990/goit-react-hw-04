import s from "./ImageModal.module.css";

const ImageModal = ({ src }) => {
	return (
		<div className={s.wrap}>
			<img className={s.img} src={src} alt="" />
		</div>
	);
};

export default ImageModal;
