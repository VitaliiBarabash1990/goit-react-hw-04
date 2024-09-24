import s from "./ImageCard.module.css";
const ImageCard = ({ alt, src, setModalData }) => {
	const getValueImage = () => {
		const valueImage = src.regular;
		setModalData(valueImage);
	};
	return (
		<div className={s.item} onClick={getValueImage}>
			<img src={src.small} alt={alt} />
		</div>
	);
};

export default ImageCard;
