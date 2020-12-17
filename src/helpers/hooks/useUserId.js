import { useSelector } from "react-redux";
import { parseJwt } from "../../helpers";

const useUserId = () => {
	const token = useSelector((state) => state.Auth.ACCESS_TOKEN);

	try {
		const parseObj = parseJwt(token);

		if (parseObj && parseObj.id) {
			return parseObj.id;
		}
		return null;
	} catch (error) {
		return null;
	}
};

export default useUserId;
