import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos, getValueImage }) => {
	return (
		<ul className={s.list}>
			{photos.map((photo) => (
				<li key={photo.id} onClick={() => getValueImage(photo.urls.regular)}>
					<ImageCard alt={photo.alt_description} src={photo.urls} />
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
