import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSubmit, notify }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const value = e.target.elements.search.value.trim();

		onSubmit(value);
	};

	return (
		<header className={s.header}>
			<form onSubmit={handleSubmit} className={s.form}>
				<button className={s.btn} type="submit" onClick={notify}>
					<FaSearch size="16px" />
				</button>

				<input
					className={s.input}
					placeholder="What do you want to write?"
					name="search"
					// required
					autoFocus
				/>
			</form>
		</header>
	);
};
export default SearchBar;
