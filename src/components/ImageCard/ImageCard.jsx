import s from "./ImageCard.module.css";
const ImageCard = ({ alt, src }) => {
	return (
		<div className={s.item}>
			<img src={src.small} alt={alt} />
		</div>
	);
};

export default ImageCard;
