import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
	console.log(photos);
	return (
		<ul className={s.list}>
			{photos.map((photo) => (
				<li key={photo.id}>
					<ImageCard alt={photo.alt_description} src={photo.urls} />
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
