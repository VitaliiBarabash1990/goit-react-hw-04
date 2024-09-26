import "./App.css";
import { useEffect, useState } from "react";
import { getPhotos } from "./api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
	const [searchValue, setSearchValue] = useState("");
	const [photos, setPhotos] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalData, setModalData] = useState("");

	const onSubmit = (value) => {
		if (value !== searchValue) {
			setPage(1);
			setPhotos([]);
		}
		setSearchValue(value);
	};
	const notify = () => toast("Please fill out this field!");

	useEffect(() => {
		if (!searchValue) return;

		const getData = async () => {
			try {
				setError(false);
				setIsLoading(true);
				const data = await getPhotos(page, searchValue);
				setPhotos((prev) => [...prev, ...data]);
			} catch {
				setError(true);
			} finally {
				setIsLoading(false);
			}
		};
		getData();
	}, [page, searchValue]);

	const handleChangePage = () => {
		setPage((prev) => prev + 1);
	};

	const getValueImage = (value) => {
		setModalData(value);
		setIsOpen(true);
	};

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<SearchBar onSubmit={onSubmit} notify={notify} />
			{!searchValue && <Toaster />}
			{photos.length > 0 && (
				<ImageGallery photos={photos} getValueImage={getValueImage} />
			)}
			{isLoading && <Loader />}
			{error && (
				<ErrorMessage textAlign="center">
					Something went wrong! Try again!
				</ErrorMessage>
			)}
			{searchValue && !error && (
				<LoadMoreBtn handleChangePage={handleChangePage} />
			)}
			<ImageModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				src={modalData}
			/>
		</>
	);
};

export default App;
