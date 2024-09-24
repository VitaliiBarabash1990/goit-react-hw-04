import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos, setModalData, onClick }) => {
	return (
		<ul className={s.list}>
			{photos.map((photo) => (
				<li key={photo.id} onClick={onClick}>
					<ImageCard
						alt={photo.alt_description}
						src={photo.urls}
						setModalData={setModalData}
					/>
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
