import "./App.css";
import { useEffect, useState } from "react";
import { getPhotos } from "./api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import ImageModal from "./components/ImageModal/ImageModal";

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

const App = () => {
	const [searchValue, setSearchValue] = useState("");
	const [photos, setPhotos] = useState([]);
	const [error, setError] = useState(null);
	// const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(0);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalData, setModalData] = useState("");

	const onSubmit = (value) => {
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

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<SearchBar onSubmit={onSubmit} notify={notify} />
			{!searchValue && <Toaster />}
			{photos.length > 0 && (
				<ImageGallery
					photos={photos}
					setModalData={setModalData}
					onClick={openModal}
				/>
			)}
			{isLoading && <Loader />}
			{error && (
				<ErrorMessage textAlign="center">
					Something went wrong! Try again!
				</ErrorMessage>
			)}
			{searchValue && !error && (
				<button onClick={handleChangePage}>Load more</button>
			)}
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<ImageModal src={modalData} />
			</Modal>
		</>
	);
};

export default App;
