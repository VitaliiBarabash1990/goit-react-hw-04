import axios from "axios";

export const getPhotos = async (page = 0, query = "") => {
	const { data } = await axios.get("https://api.unsplash.com/search/photos", {
		params: {
			client_id: "L5Ia53AUYAj2l8V6VKKnmYTv-N-2mMkTWk45bWBo7Es",
			query: query,
			page: page,
			per_page: 7,
		},
	});
	return data.results;
};
