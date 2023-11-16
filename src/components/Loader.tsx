import Lottie from "lottie-react";
import loader from "../animations/loader.json";
const Loader = () => {
	return (
		<div className='w-full p-20'>
			<Lottie animationData={loader} loop />
		</div>
	);
};

export default Loader;
