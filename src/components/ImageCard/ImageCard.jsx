import s from "./ImageCard.module.css";
const ImageCard = ({ alt, src }) => {
	return (
		<div className={s.item}>
			<img src={src.small_s3} alt={alt} />
		</div>
	);
};

export default ImageCard;
