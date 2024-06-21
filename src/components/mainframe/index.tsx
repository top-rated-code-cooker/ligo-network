import "./mainframe.css";
interface  MainFrameProps {
	htmlContent: string;
	OnSendAsset: () => void;
	OnClickConnectButton: () => void;
}

export default function MainFrame( {} : MainFrameProps) {

	return (
		<main className="bg-darkmode-theme-light px-12 sm:px-4">
			<section className="section pt-14 h-screen">
				<div className="mainContainer">
					<div className="row justify-center">
						<div className="lg:col-10 md:col-9 mb-8 text-center">
							<h1 className="mb-4 xs:text-4xl text-2xl font-normal dark:font-light text-[#4ae52e] font-primary dark:text-[#4ae52e]">
							Ligo Network
							</h1>
							<h3 className="font-light xs:text-5xl text-4xl ">
								Unlock the Potential of a Layer 2 with True Decentralization.
							</h3>
							<a className="btn btn-outline-primary mt-12 border border-solid" target="_self" rel="noopener" href="/staking">Start Staking</a>
							<div className="col-12 mt-12 ">
								<div className="md:w-[35%] m-auto w-[80%] text-black dark:text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 307.217 256.493">
										<path fill="currentColor" fill-rule="evenodd" d="M175.25 17.178c44.989 8.943 80.333 44.648 88.747 89.825h-1.285c-8.383-44.479-43.172-79.63-87.462-88.539zm88.405 133.153c-9 44.332-44.008 79.218-88.405 88.044v-1.286c43.698-8.79 78.15-43.124 87.114-86.758zm-131.732 88.215c-44.818-8.535-80.236-43.587-89.297-88.215h1.292c9.025 43.928 43.885 78.428 88.005 86.929zM42.285 107.003c8.47-45.473 44.225-81.348 89.638-89.996v1.286c-44.714 8.615-79.914 43.935-88.352 88.71z"></path><path fill="currentColor" d="M153.141 75.252c14.504 0 27.635 5.879 37.14 15.385 9.506 9.504 15.384 22.636 15.384 37.14 0 14.504-5.879 27.635-15.383 37.14-9.506 9.505-22.637 15.383-37.14 15.383-14.505 0-27.636-5.878-37.14-15.383-9.506-9.505-15.385-22.636-15.385-37.14 0-14.504 5.88-27.636 15.384-37.14 9.505-9.506 22.636-15.385 37.14-15.385m36.725 15.799c-9.398-9.398-22.383-15.212-36.725-15.212-14.342 0-27.326 5.814-36.725 15.212-9.399 9.399-15.212 22.383-15.212 36.726 0 14.342 5.813 27.326 15.212 36.725 9.4 9.398 22.383 15.212 36.725 15.212 14.342 0 27.327-5.814 36.725-15.212 9.399-9.399 15.213-22.383 15.213-36.725 0-14.343-5.814-27.327-15.213-36.726M37.403 106.709h9.79v43.915H37.109v-43.915zm9.203.587h-8.91v42.741h8.91zM131.629 244.851v-9.79h43.914v10.083h-43.914zm.587-9.204v8.91h42.741v-8.91zM260.274 106.709h9.79v43.915h-10.083v-43.915zm9.203.587h-8.91v42.741h8.91zM131.629 21.979v-9.79h43.914v10.084h-43.914zm.587-9.203v8.91h42.741v-8.91zM153.586 0c.796 0 1.516.323 2.037.844.521.521.844 1.242.844 2.037 0 .795-.323 1.516-.844 2.037a2.871 2.871 0 0 1-2.037.843 2.873 2.873 0 0 1-2.037-.843 2.873 2.873 0 0 1-.843-2.037c0-.795.322-1.516.843-2.037A2.874 2.874 0 0 1 153.586 0m1.623 1.258a2.293 2.293 0 0 0-3.245 0 2.292 2.292 0 0 0 0 3.245c.415.415.989.672 1.622.672a2.29 2.29 0 0 0 2.294-2.294c0-.633-.257-1.207-.671-1.623M281.833 128.246c0 .796-.323 1.516-.844 2.037a2.872 2.872 0 0 1-2.037.844 2.873 2.873 0 0 1-2.037-.844 2.872 2.872 0 0 1-.844-2.037c0-.795.323-1.516.844-2.037a2.873 2.873 0 0 1 2.037-.843 2.87 2.87 0 0 1 2.037.843c.521.521.844 1.242.844 2.037m-1.259 1.623a2.29 2.29 0 0 0 .672-1.623c0-.633-.257-1.207-.672-1.622a2.288 2.288 0 0 0-1.622-.672c-.634 0-1.208.257-1.622.672a2.288 2.288 0 0 0-.672 1.622 2.29 2.29 0 0 0 2.294 2.294 2.29 2.29 0 0 0 1.622-.671M153.586 250.731c.796 0 1.516.323 2.037.844.521.522.844 1.242.844 2.037 0 .796-.323 1.516-.844 2.037a2.872 2.872 0 0 1-2.037.844 2.874 2.874 0 0 1-2.037-.844 2.871 2.871 0 0 1-.843-2.037c0-.795.322-1.515.843-2.037a2.874 2.874 0 0 1 2.037-.844m1.623 1.259a2.29 2.29 0 0 0-1.623-.672c-.633 0-1.207.257-1.622.672a2.288 2.288 0 0 0-.672 1.622c0 .634.257 1.208.672 1.622.415.415.989.672 1.622.672a2.29 2.29 0 0 0 2.294-2.294c0-.633-.257-1.207-.671-1.622M31.101 128.246a2.876 2.876 0 0 1-2.881 2.881 2.877 2.877 0 0 1-2.037-.844 2.872 2.872 0 0 1-.844-2.037 2.876 2.876 0 0 1 2.881-2.88 2.875 2.875 0 0 1 2.881 2.88m-1.259 1.623c.416-.416.673-.989.673-1.623 0-.633-.257-1.207-.673-1.622a2.284 2.284 0 0 0-1.622-.672c-.633 0-1.207.257-1.622.672a2.288 2.288 0 0 0-.672 1.622 2.29 2.29 0 0 0 2.294 2.294c.634 0 1.208-.257 1.622-.671"></path><path fill="currentColor" d="M153.586 147.748c.796 0 1.516.323 2.037.844.521.521.844 1.242.844 2.037 0 .795-.323 1.516-.844 2.037a2.872 2.872 0 0 1-2.037.844 2.874 2.874 0 0 1-2.037-.844 2.873 2.873 0 0 1-.843-2.037c0-.795.322-1.516.843-2.037a2.874 2.874 0 0 1 2.037-.844m1.623 1.259a2.29 2.29 0 0 0-1.623-.672c-.633 0-1.207.257-1.622.672a2.288 2.288 0 0 0-.672 1.622c0 .633.257 1.207.672 1.622.415.415.989.672 1.622.672a2.29 2.29 0 0 0 2.294-2.294c0-.633-.257-1.207-.671-1.622M134.214 128.376c0 .796-.323 1.516-.844 2.037a2.872 2.872 0 0 1-2.037.844 2.87 2.87 0 0 1-2.036-.844 2.869 2.869 0 0 1-.845-2.037c0-.795.323-1.516.845-2.037a2.87 2.87 0 0 1 2.036-.844c.796 0 1.516.323 2.037.844.521.521.844 1.242.844 2.037m-1.259 1.622c.415-.414.672-.988.672-1.622 0-.633-.257-1.207-.672-1.622a2.284 2.284 0 0 0-1.622-.672 2.291 2.291 0 0 0-2.293 2.294c0 .634.257 1.208.671 1.622.415.415.99.672 1.622.672.634 0 1.208-.257 1.622-.672M139.888 114.678c-.562.562-1.3.844-2.037.844a2.874 2.874 0 0 1-2.717-1.926 2.889 2.889 0 0 1-.158-1.127l-12.71-12.711h-19.995c-.523 0-.999-.214-1.343-.558a1.896 1.896 0 0 1 0-2.686c.344-.344.82-.558 1.343-.558h20.875c.35 0 .68.097.964.265.279.166.514.402.678.682l12.863 12.865c.384-.027.773.024 1.142.152a2.873 2.873 0 0 1 1.939 2.721c0 .737-.282 1.475-.844 2.037m-2.037.257c.587 0 1.175-.224 1.622-.672a2.285 2.285 0 0 0 .672-1.622c0-.587-.224-1.174-.672-1.622a2.272 2.272 0 0 0-1.897-.656l-.142.017-13.116-13.116-.021-.039a1.34 1.34 0 0 0-.486-.5 1.308 1.308 0 0 0-.665-.182h-20.875c-.362 0-.69.148-.928.386a1.311 1.311 0 0 0 0 1.856c.238.239.566.387.928.387h20.237l13.078 13.077-.016.141a2.28 2.28 0 0 0 .66 1.873 2.286 2.286 0 0 0 1.621.672M153.586 103.242c.796 0 1.516.323 2.037.844.521.521.844 1.242.844 2.037a2.876 2.876 0 0 1-2.881 2.881 2.877 2.877 0 0 1-2.88-2.881c0-.795.322-1.516.843-2.037a2.874 2.874 0 0 1 2.037-.844m1.623 1.259a2.29 2.29 0 0 0-1.623-.672c-.633 0-1.207.257-1.622.672a2.288 2.288 0 0 0-.672 1.622c0 .634.257 1.208.672 1.622.415.416.989.673 1.622.673.634 0 1.207-.257 1.623-.673.414-.414.671-.988.671-1.622 0-.633-.257-1.207-.671-1.622M172.19 112.384a2.877 2.877 0 0 1-.832 2.293c-.562.564-1.3.845-2.037.845a2.871 2.871 0 0 1-2.037-.844 2.874 2.874 0 0 1-.844-2.037 2.875 2.875 0 0 1 1.895-2.707 2.915 2.915 0 0 1 1.099-.171l12.859-12.86c.164-.28.399-.516.678-.682a1.89 1.89 0 0 1 .964-.265h20.875c.523 0 .999.214 1.343.558a1.897 1.897 0 0 1 0 2.686c-.344.344-.82.558-1.343.558h-19.995zm-.692.986a2.31 2.31 0 0 0 .095-1.053l-.021-.145c4.339-4.327 8.675-8.66 13-13h20.238c.361 0 .69-.148.928-.387a1.309 1.309 0 0 0 0-1.856 1.31 1.31 0 0 0-.928-.386h-20.875c-.243 0-.471.067-.665.182a1.334 1.334 0 0 0-.486.5l-.022.039c-4.341 4.387-8.732 8.745-13.104 13.104l-.136-.012a2.28 2.28 0 0 0-1.823.663 2.287 2.287 0 0 0-.672 1.622c0 .587.224 1.175.672 1.622a2.287 2.287 0 0 0 1.622.672c.587 0 1.175-.224 1.623-.672.26-.26.446-.567.554-.893M178.72 128.376c0 .796-.323 1.516-.844 2.037a2.872 2.872 0 0 1-2.037.844 2.874 2.874 0 0 1-2.037-.844 2.872 2.872 0 0 1-.844-2.037c0-.795.323-1.516.844-2.037a2.874 2.874 0 0 1 2.037-.844c.796 0 1.516.323 2.037.844.521.521.844 1.242.844 2.037m-1.259 1.622c.415-.414.672-.988.672-1.622 0-.633-.257-1.207-.672-1.622a2.288 2.288 0 0 0-1.622-.672c-.633 0-1.207.257-1.622.672a2.288 2.288 0 0 0-.672 1.622c0 .634.257 1.208.672 1.622.415.415.99.672 1.622.672.633 0 1.207-.257 1.622-.672M169.476 146.987a2.873 2.873 0 0 1-2.192-.839 2.874 2.874 0 0 1-.844-2.037c0-.737.282-1.474.844-2.036a2.872 2.872 0 0 1 2.037-.845c.737 0 1.473.282 2.036.844a2.859 2.859 0 0 1 .835 2.253l12.623 12.623h19.995c.523 0 .999.213 1.343.558a1.897 1.897 0 0 1 0 2.685c-.344.345-.82.558-1.343.558h-20.875c-.35 0-.68-.096-.964-.264a1.929 1.929 0 0 1-.678-.683zm-.925-.713c.324.114.67.154 1.007.12l.14-.015 13.064 13.065.022.039a1.325 1.325 0 0 0 1.151.682h20.875c.361 0 .69-.148.928-.386a1.311 1.311 0 0 0-.928-2.242h-20.238c-4.323-4.338-8.66-8.663-12.992-12.993l.018-.143a2.292 2.292 0 0 0-2.277-2.584c-.587 0-1.174.224-1.62.672a2.284 2.284 0 0 0-.674 1.622c0 .587.224 1.175.672 1.622.25.25.542.431.852.541M5.761 69.633c0 .795-.322 1.516-.844 2.036a2.868 2.868 0 0 1-2.036.845 2.87 2.87 0 0 1-2.038-.845 2.88 2.88 0 1 1 4.074-4.074c.522.522.844 1.242.844 2.038m-1.258 1.622c.414-.415.671-.989.671-1.622 0-.634-.257-1.208-.671-1.622a2.285 2.285 0 0 0-1.622-.673c-.634 0-1.208.257-1.623.673a2.284 2.284 0 0 0-.672 1.622 2.292 2.292 0 0 0 2.295 2.293c.633 0 1.207-.257 1.622-.671M5.761 186.398c0 .795-.322 1.515-.844 2.036a2.867 2.867 0 0 1-2.036.844 2.87 2.87 0 0 1-2.038-.844A2.874 2.874 0 0 1 0 186.398a2.877 2.877 0 0 1 2.881-2.881c.795 0 1.515.323 2.036.843a2.87 2.87 0 0 1 .844 2.038m-1.258 1.622c.414-.415.671-.989.671-1.622a2.292 2.292 0 0 0-2.293-2.295c-.634 0-1.208.257-1.623.672a2.288 2.288 0 0 0-.672 1.623 2.292 2.292 0 0 0 2.295 2.293c.633 0 1.207-.257 1.622-.671M307.217 70.152c0 .795-.323 1.516-.844 2.037a2.87 2.87 0 0 1-2.037.844 2.877 2.877 0 0 1-2.88-2.881 2.877 2.877 0 0 1 2.88-2.881 2.87 2.87 0 0 1 2.037.844c.521.521.844 1.242.844 2.037m-1.258 1.622c.414-.415.67-.989.67-1.622a2.291 2.291 0 0 0-2.293-2.294c-.633 0-1.207.257-1.622.672a2.287 2.287 0 0 0-.671 1.622 2.288 2.288 0 0 0 2.293 2.294c.634 0 1.208-.257 1.623-.672M307.09 186.246a2.876 2.876 0 0 1-2.881 2.881 2.877 2.877 0 0 1-2.88-2.881c0-.795.322-1.516.843-2.036a2.87 2.87 0 0 1 2.037-.845c.796 0 1.516.323 2.037.845a2.87 2.87 0 0 1 .844 2.036m-1.259 1.622c.415-.414.672-.988.672-1.622a2.292 2.292 0 1 0-4.588 0c0 .634.257 1.208.672 1.622.414.416.988.673 1.622.673.633 0 1.207-.257 1.622-.673M63.854 97.733c0-.261.107-.5.279-.672a.95.95 0 0 1 .673-.281H76.03a.956.956 0 0 1 .953.953.952.952 0 0 1-.953.953H64.806a.952.952 0 0 1-.952-.953m.586 0a.367.367 0 0 0 .366.367H76.03a.366.366 0 0 0 0-.734H64.806a.367.367 0 0 0-.366.367M63.854 158.55c0-.262.107-.5.279-.672a.95.95 0 0 1 .673-.281H76.03a.95.95 0 0 1 .673 1.626.952.952 0 0 1-.673.28H64.806a.953.953 0 0 1-.952-.953m.586 0a.369.369 0 0 0 .366.367H76.03a.366.366 0 0 0 0-.734H64.806a.367.367 0 0 0-.366.367M228.549 97.73c0-.262.108-.501.28-.673a.95.95 0 0 1 .673-.281h11.224a.951.951 0 0 1 .953.953.952.952 0 0 1-.953.954h-11.224a.953.953 0 0 1-.672-.28.949.949 0 0 1-.281-.673m.587-.001a.365.365 0 0 0 .366.366h11.224a.365.365 0 0 0 .259-.625.37.37 0 0 0-.259-.107h-11.224a.366.366 0 0 0-.366.366M228.549 158.965a.954.954 0 0 1 .953-.954h11.224a.952.952 0 0 1 .953.953.95.95 0 0 1-.28.674.948.948 0 0 1-.673.28h-11.224a.949.949 0 0 1-.672-.28.947.947 0 0 1-.281-.673m.587-.001c0 .101.041.193.108.259a.362.362 0 0 0 .258.108h11.224a.366.366 0 0 0 0-.732h-11.224c-.1 0-.192.04-.259.106a.368.368 0 0 0-.107.259M100.957 158.851c0 .361.148.69.386.928.238.238.566.386.928.386h20.875c.242 0 .47-.067.665-.182.203-.12.372-.294.486-.5l.021-.039c4.38-4.333 8.728-8.715 13.078-13.078l.145.019a2.286 2.286 0 0 0 1.932-.65 2.293 2.293 0 0 0 .001-3.246 2.292 2.292 0 0 0-1.623-.671 2.29 2.29 0 0 0-2.159 1.514c-.115.32-.157.661-.126.996l.013.137c-4.35 4.364-8.714 8.715-13.07 13.072H102.27c-.362 0-.69.148-.928.386a1.31 1.31 0 0 0-.386.928m-.587 0c0-.523.214-.999.558-1.343.344-.345.82-.558 1.343-.558h19.995l12.708-12.709c-.017-.374.04-.75.168-1.106.14-.388.363-.75.672-1.059a2.867 2.867 0 0 1 2.037-.846 2.87 2.87 0 0 1 2.037.845c.563.563.844 1.3.844 2.036a2.874 2.874 0 0 1-1.96 2.729 2.868 2.868 0 0 1-1.16.141l-12.824 12.823a1.929 1.929 0 0 1-.678.683 1.889 1.889 0 0 1-.964.264h-20.875c-.523 0-.999-.213-1.343-.558a1.894 1.894 0 0 1-.558-1.342"></path><path fill="currentColor" d="M211.318 158.54a6.953 6.953 0 0 1-6.947 6.946h-20.874a6.826 6.826 0 0 1-1.823-.248 6.956 6.956 0 0 1-2.761-1.497 7.016 7.016 0 0 1-.886-.94l-14.161-14.161a6.946 6.946 0 0 1-2.033-4.912 6.915 6.915 0 0 1 1.947-4.803v-.19l.192-.002a6.915 6.915 0 0 1 4.805-1.95 6.901 6.901 0 0 1 4.804 1.947h.023l12.862 12.863h17.905a6.928 6.928 0 0 1 4.911 2.036 6.964 6.964 0 0 1 1.508 2.256c.34.819.528 1.716.528 2.655m-1.069 2.43c.311-.748.482-1.57.482-2.43 0-.861-.17-1.682-.482-2.43a6.375 6.375 0 0 0-5.878-3.93h-18.148l-12.862-12.863h-.019l-.086-.086a6.315 6.315 0 0 0-8.957 0l-.019.019a6.36 6.36 0 0 0-1.377 2.057 6.302 6.302 0 0 0-.484 2.421c0 .83.162 1.661.484 2.438a6.317 6.317 0 0 0 1.377 2.058c3.782 3.782 11.23 10.384 14.198 14.201a6.404 6.404 0 0 0 1.791 1.583 6.403 6.403 0 0 0 1.561.666 6.245 6.245 0 0 0 1.667.226h20.874a6.334 6.334 0 0 0 4.496-1.864 6.385 6.385 0 0 0 1.382-2.066M210.731 98.334c0-.861-.171-1.682-.482-2.43a6.385 6.385 0 0 0-3.448-3.448 6.334 6.334 0 0 0-2.43-.482h-20.874a6.286 6.286 0 0 0-3.228.892 6.338 6.338 0 0 0-1.791 1.582c-3.148 3.973-10.295 10.299-14.198 14.201a6.328 6.328 0 0 0-1.861 4.497c0 .823.162 1.647.484 2.421a6.36 6.36 0 0 0 1.377 2.057l.019.019a6.37 6.37 0 0 0 2.057 1.378 6.308 6.308 0 0 0 4.844 0 6.365 6.365 0 0 0 2.056-1.378l.086-.086h.019l12.862-12.863h18.148c.861 0 1.682-.171 2.43-.482a6.375 6.375 0 0 0 3.93-5.878m.059-2.655c.34.819.528 1.717.528 2.655 0 .939-.188 1.836-.528 2.655a6.964 6.964 0 0 1-3.764 3.764 6.91 6.91 0 0 1-2.655.528h-17.905l-12.862 12.863h-.023a6.914 6.914 0 0 1-4.804 1.947 6.9 6.9 0 0 1-4.805-1.95l-.192-.003v-.189a6.915 6.915 0 0 1-1.418-7.464 6.916 6.916 0 0 1 1.504-2.251l14.161-14.161a7.02 7.02 0 0 1 3.647-2.438 6.865 6.865 0 0 1 1.823-.247h20.874a6.938 6.938 0 0 1 4.911 2.036 6.96 6.96 0 0 1 1.508 2.255M95.797 158.54a6.337 6.337 0 0 0 1.864 4.496 6.329 6.329 0 0 0 4.495 1.864h20.875c.576 0 1.136-.079 1.667-.226a6.403 6.403 0 0 0 3.352-2.249c2.738-3.605 10.576-10.579 14.197-14.201a6.34 6.34 0 0 0 1.38-2.058 6.392 6.392 0 0 0 .481-2.438 6.318 6.318 0 0 0-1.86-4.478l-.02-.019a6.31 6.31 0 0 0-6.899-1.378c-.747.31-1.448.77-2.057 1.378l-.086.086h-.019l-12.863 12.863h-18.148a6.31 6.31 0 0 0-2.429.482 6.378 6.378 0 0 0-3.449 3.448 6.333 6.333 0 0 0-.48 2.43m-.06 2.654a6.923 6.923 0 0 1-.527-2.654 6.928 6.928 0 0 1 2.036-4.911 6.927 6.927 0 0 1 4.91-2.036h17.906l12.862-12.863h.023a6.921 6.921 0 0 1 4.803-1.947 6.9 6.9 0 0 1 4.806 1.95l.192.002v.19a6.899 6.899 0 0 1 1.947 4.803 6.94 6.94 0 0 1-2.033 4.912l-14.161 14.161a7.016 7.016 0 0 1-3.647 2.437 6.826 6.826 0 0 1-1.823.248h-20.875a6.927 6.927 0 0 1-4.91-2.036 6.972 6.972 0 0 1-1.509-2.256M95.21 98.334a6.932 6.932 0 0 1 2.036-4.91 6.94 6.94 0 0 1 4.91-2.036h20.875a6.865 6.865 0 0 1 3.526.974 6.976 6.976 0 0 1 1.944 1.711l14.16 14.161a6.935 6.935 0 0 1 1.506 7.558 6.935 6.935 0 0 1-1.42 2.157v.189l-.191.003a6.9 6.9 0 0 1-7.453 1.421 6.922 6.922 0 0 1-2.156-1.418h-.023l-12.862-12.863h-17.906a6.909 6.909 0 0 1-2.654-.528 6.969 6.969 0 0 1-3.765-3.764 6.928 6.928 0 0 1-.527-2.655m1.068-2.43a6.333 6.333 0 0 0-.481 2.43 6.333 6.333 0 0 0 1.864 4.496 6.385 6.385 0 0 0 2.066 1.382 6.31 6.31 0 0 0 2.429.482h18.148l12.863 12.863h.019l.086.086a6.357 6.357 0 0 0 2.057 1.378 6.301 6.301 0 0 0 4.843 0 6.356 6.356 0 0 0 2.056-1.378l.038-.038a6.322 6.322 0 0 0 1.842-4.459 6.4 6.4 0 0 0-.482-2.439 6.35 6.35 0 0 0-1.379-2.058c-3.746-3.746-11.28-10.429-14.197-14.201a6.39 6.39 0 0 0-3.352-2.249 6.286 6.286 0 0 0-1.667-.225h-20.875a6.329 6.329 0 0 0-4.495 1.864 6.389 6.389 0 0 0-1.383 2.066"></path><path fill="currentColor" d="M153.141 105.58c6.13 0 11.68 2.484 15.695 6.501a22.127 22.127 0 0 1 6.502 15.695c0 6.13-2.485 11.679-6.5 15.696a22.127 22.127 0 0 1-15.697 6.501 22.126 22.126 0 0 1-15.695-6.501 22.128 22.128 0 0 1-6.502-15.696 22.127 22.127 0 0 1 6.502-15.695 22.126 22.126 0 0 1 15.695-6.501m15.281 6.916a21.542 21.542 0 0 0-15.28-6.33 21.54 21.54 0 0 0-15.281 6.33 21.54 21.54 0 0 0-6.33 15.28c0 5.968 2.419 11.37 6.33 15.281a21.54 21.54 0 0 0 15.28 6.33c5.967 0 11.37-2.419 15.281-6.33a21.548 21.548 0 0 0 6.33-15.281c0-5.967-2.42-11.37-6.33-15.28M5.468 69.491h37.913l15.655 27.926h42.057v.587h-42.4L43.038 70.078H5.468zM5.468 186.177h37.57l15.655-27.926h42.4v.586H59.036l-15.655 27.927H5.468zM302.031 70.078h-37.57l-15.655 27.926h-42.4v-.587h42.058l15.654-27.926h37.913zM302.031 187.156h-37.913l-15.654-27.927h-42.058v-.587h42.4l15.655 27.927h37.57z"></path><path fill="currentColor" d="M75.599 93.293h26.197l17.014 17.014-1.098 1.098-16.559-16.559H75.599zM117.784 205.778V179.42l17.128-17.128 1.647 1.647-16.446 16.446v25.393zM75.599 161.652h25.554l16.559-16.559 1.098 1.097-17.014 17.015H75.599zM186.144 205.778v-25.393l-16.446-16.446 1.646-1.647 17.128 17.129v26.357zM230.657 94.846h-25.554l-16.559 16.559-1.098-1.098 17.015-17.014h26.196zM120.113 50.719v25.394l16.446 16.445-1.647 1.647-17.128-17.129V50.719zM230.657 163.205h-26.196l-17.015-17.015 1.098-1.097 16.559 16.559h25.554zM188.472 50.719v26.357l-17.128 17.129-1.646-1.647 16.446-16.445V50.719zM30.808 127.953h108.185v.587H30.808zM153.64 5.708v108.184h-.587V5.708zM167.701 127.953h108.185v.587H167.701zM153.64 142.601v108.184h-.587V142.601z">
										</path>
									</svg>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
			<section className="section pt-0 sm:mt-16 md:mt-0 xs:mt-0 ">
				<div className="mainContainer">
					<div className="row">
						<div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-10">
							<h2 className="mb-10 text-5xl font-light">A High-Performance BTC Layer 2 </h2><p className="mb-8  font-light text-white text-2xl"> The first fully-decentralized Layer 2 with fast and cheap transactions</p></div><div className="flex md:justify-between md:flex-row flex-col items-center w-full lg:px-32 xs:px-8 "><div className="w-full m-auto text-center px-8 mb-8"><div className="min-h-32 flex items-end pb-6 justify-center"><span className="sm:w-24 sm:h-24 w-[60%] h-[60%] inline-block sm:inline-flex items-end  text-black dark:text-[#4ae52e] opacity-100"><svg viewBox="0 0 24 20.49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.881 6.42099C14.1615 6.42099 13.4115 6.57099 12.7212 6.84052C12.2407 7.0503 11.7907 7.32102 11.3712 7.62103V6.75148C11.3712 6.57101 11.2211 6.42099 11.0407 6.42099C10.8602 6.42099 10.7102 6.57099 10.7102 6.75148V8.34177C10.7102 8.52225 10.8602 8.67226 11.0407 8.67226H12.631C12.8114 8.67226 12.9614 8.52226 12.9614 8.34177C12.9614 8.1613 12.8114 8.01128 12.631 8.01128H11.9712C12.3017 7.80151 12.631 7.59175 12.9907 7.44174C13.6212 7.2015 14.2505 7.08197 14.9103 7.08197C17.7299 7.08197 20.0105 9.36253 20.0105 12.1821C20.0105 15.0017 17.7299 17.2823 14.9103 17.2823C12.0907 17.2823 9.81014 15.0017 9.81014 12.1821C9.81014 11.4919 9.96014 10.8016 10.2297 10.1723C10.2894 9.99184 10.2297 9.81254 10.0492 9.7223C9.86873 9.66253 9.68943 9.7223 9.59918 9.90277C9.29917 10.6223 9.14917 11.4028 9.14917 12.1833C9.14917 15.364 11.7297 17.9432 14.9091 17.9432C18.0898 17.9432 20.6689 15.3626 20.6689 12.1833C20.6701 9.00172 18.0604 6.42099 14.881 6.42099Z" fill="currentColor"></path><path d="M21.9311 3.18058C21.8116 3.06105 21.5713 3.06105 21.4506 3.18058L20.5506 4.08061C20.431 4.20015 20.431 4.4111 20.5506 4.56111L20.9408 4.95136L20.131 5.76115C18.9615 4.80136 17.5212 4.17086 15.9615 3.96109V2.79153H16.892C17.0725 2.79153 17.2225 2.64153 17.2225 2.46104V0.330491C17.2225 0.150017 17.0725 0 16.892 0L12.9004 0.00117191C12.7199 0.00117191 12.5699 0.151176 12.5699 0.331662V2.46104C12.5699 2.64152 12.7199 2.79153 12.9004 2.79153H13.8004V3.96109C9.71968 4.50135 6.56958 7.98062 6.56958 12.1808C6.56958 16.7712 10.2891 20.4907 14.8796 20.4907C19.47 20.4907 23.1895 16.7712 23.1895 12.1808C23.1895 10.2002 22.4993 8.37094 21.3297 6.93059L22.1395 6.1208L22.5297 6.51105C22.5895 6.57082 22.6797 6.60129 22.77 6.60129C22.8602 6.60129 22.9505 6.57082 23.0102 6.51105L23.9103 5.61103C24.0298 5.49149 24.0298 5.28053 23.9103 5.13053L21.9311 3.18058ZM13.2308 2.13055V0.660981H16.5615V2.13055H13.2308ZM15.3004 2.7915V3.9013C15.1504 3.9013 15.0309 3.87083 14.8809 3.87083C14.7309 3.87083 14.6113 3.87083 14.4613 3.9013V2.7915H15.3004ZM22.5312 12.2112C22.5312 16.4113 19.1105 19.8615 14.881 19.8615C10.6503 19.8615 7.23074 16.4419 7.23074 12.2112C7.23074 8.25138 10.2614 4.98037 14.131 4.59156C14.4005 4.56109 14.6407 4.56109 14.881 4.56109C15.1212 4.56109 15.3615 4.56109 15.631 4.59156C19.5005 4.98064 22.5312 8.25138 22.5312 12.2112ZM20.8812 6.48042C20.791 6.39018 20.7007 6.29995 20.6116 6.21088L21.3922 5.43038L21.6617 5.69992L20.8812 6.48042ZM22.7703 5.82064L22.3812 5.46087L21.2714 4.35107L21.691 3.93154L23.191 5.43159L22.7703 5.82064Z" fill="currentColor"></path><path d="M6.71956 7.56133C6.71956 7.38085 6.56955 7.23083 6.38907 7.23083H2.60954C2.42907 7.23083 2.27905 7.38084 2.27905 7.56133C2.27905 7.74181 2.42906 7.89182 2.60954 7.89182H6.39027C6.56957 7.89182 6.71956 7.74181 6.71956 7.56133Z" fill="currentColor"></path><path d="M0.330491 12.5421H4.11121C4.29169 12.5421 4.44171 12.3921 4.44171 12.2116C4.44171 12.0311 4.2917 11.8811 4.11121 11.8811H0.330491C0.150017 11.8811 0 12.0311 0 12.2116C0 12.3921 0.150005 12.5421 0.330491 12.5421Z" fill="currentColor"></path><path d="M2.60954 17.1922H6.39027C6.57074 17.1922 6.72076 17.0422 6.72076 16.8618C6.72076 16.6813 6.57075 16.5313 6.39027 16.5313H2.60954C2.42907 16.5313 2.27905 16.6813 2.27905 16.8618C2.28022 17.0422 2.43023 17.1922 2.60954 17.1922Z" fill="currentColor"></path><path d="M1.14014 14.5213C1.14014 14.7017 1.29014 14.8517 1.47063 14.8517H5.25135C5.43183 14.8517 5.58184 14.7017 5.58184 14.5213C5.58184 14.3408 5.43184 14.1908 5.25135 14.1908L1.46973 14.1919C1.29042 14.1919 1.14014 14.3419 1.14014 14.5213Z" fill="currentColor"></path><path d="M1.14014 9.87109C1.14014 10.0516 1.29014 10.2016 1.47063 10.2016H5.25135C5.43183 10.2016 5.58184 10.0516 5.58184 9.87109C5.58184 9.69062 5.43184 9.5406 5.25135 9.5406L1.46973 9.54178C1.29042 9.54178 1.14014 9.69178 1.14014 9.87109Z" fill="currentColor"></path></svg></span></div><p className="text-center sm:text-lg text-xl font-light text-black dark:text-white">From Bitcoin 7 TPS to LIGO with up to 30,000 TPS or more</p></div><div className="w-full m-auto text-center px-8 mb-8"><div className="min-h-32 flex items-end pb-6 justify-center"><span className="sm:w-24 sm:h-24 w-[60%] h-[60%] inline-block sm:inline-flex x items-end  text-black dark:text-[#4ae52e] opacity-100"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0911 1.86387C14.2268 1.99309 14.2321 2.20784 14.1029 2.34354C13.9737 2.47923 13.759 2.48463 13.6233 2.35541L12.3399 1.13196V7.19578H11.6598V1.13196L10.3765 2.35541C10.2408 2.48463 10.026 2.47923 9.8968 2.34354C9.76758 2.20784 9.77297 1.99309 9.90867 1.86387L11.7658 0.0935802C11.8959 -0.030518 12.102 -0.0318669 12.2336 0.0935802L14.0911 1.86387ZM12.8201 11.1799H9.23638V14.7633H12.8201V11.1799ZM8.89646 10.4998H13.16C13.3478 10.4998 13.5002 10.6519 13.5002 10.8399V15.1038C13.5002 15.2916 13.3481 15.444 13.16 15.444H8.89646C8.7087 15.444 8.55627 15.2918 8.55627 15.1038V10.8399C8.55627 10.6522 8.70843 10.4998 8.89646 10.4998ZM15.6431 7.87616H9.62028L8.3569 9.13953H14.3797L15.6431 7.87616ZM16.1241 14.3797L14.8607 15.6431V9.62028L16.1241 8.3569V14.3797ZM14.1804 9.81965V16.1241H7.87589V9.81965H14.1804ZM16.3232 7.19578L19.4448 4.07417L17.6724 4.03181C17.4851 4.0275 17.337 3.8721 17.3416 3.68515C17.3459 3.49792 17.5013 3.35008 17.6883 3.3544L20.2533 3.41591C20.4333 3.41995 20.5798 3.56482 20.5841 3.74666L20.6456 6.31171C20.6499 6.49894 20.5018 6.65406 20.3149 6.65838C20.1276 6.66269 19.9725 6.51459 19.9682 6.32763L19.9258 4.55518L16.8042 7.67679V7.53597C16.8039 7.35117 16.655 7.19605 16.464 7.19578H16.3232ZM16.8042 11.6598H22.868L21.6446 10.3765C21.5154 10.2408 21.5208 10.026 21.6565 9.8968C21.7922 9.76758 22.0069 9.77297 22.1361 9.90867L23.9064 11.7658C24.0305 11.8959 24.0319 12.102 23.9064 12.2336L22.1361 14.0911C22.0069 14.2268 21.7922 14.2321 21.6565 14.1029C21.5208 13.9737 21.5154 13.759 21.6446 13.6233L22.868 12.3399H16.8042V11.6598ZM15.9733 15.4923L15.4923 15.9733L19.4448 19.9258L17.6724 19.9682C17.4851 19.9725 17.337 20.1279 17.3416 20.3149C17.3459 20.5021 17.5013 20.6502 17.6883 20.6456L20.2533 20.5841C20.4352 20.5798 20.58 20.4333 20.5841 20.2533L20.6456 17.6883C20.6499 17.5011 20.5018 17.3459 20.3149 17.3416C20.1276 17.3373 19.9725 17.4854 19.9682 17.6724L19.9258 19.4448L15.9733 15.4923ZM12.3402 16.8042V22.868L13.6235 21.6446C13.7592 21.5154 13.974 21.5208 14.1032 21.6565C14.2324 21.7922 14.227 22.0069 14.0913 22.1361L12.2342 23.9064C12.1041 24.0305 11.898 24.0319 11.7664 23.9064L9.90894 22.1361C9.77324 22.0069 9.76785 21.7922 9.89707 21.6565C10.0263 21.5208 10.241 21.5154 10.3767 21.6446L11.6601 22.868V16.8042H12.3402ZM7.67679 16.8042L4.55545 19.9256L6.3279 19.9679C6.51513 19.9722 6.66296 20.1276 6.65865 20.3146C6.65433 20.5018 6.49894 20.6499 6.31198 20.6453L3.74693 20.5838C3.56698 20.5798 3.42049 20.4349 3.41618 20.2531L3.35467 17.688C3.35035 17.5008 3.49846 17.3457 3.68542 17.3414C3.87264 17.337 4.02776 17.4851 4.03208 17.6721L4.07444 19.4445L7.19605 16.3229V16.4638C7.19605 16.6515 7.3482 16.8039 7.53624 16.8039L7.67679 16.8042ZM7.19578 12.3402H1.13196L2.35541 13.6235C2.48463 13.7592 2.47923 13.974 2.34354 14.1032C2.20784 14.2324 1.99309 14.227 1.86387 14.0913L0.0935802 12.2342C-0.030518 12.1041 -0.0318669 11.898 0.0935802 11.7664L1.86387 9.90894C1.99309 9.77324 2.20784 9.76785 2.34354 9.89707C2.47923 10.0263 2.48463 10.241 2.35541 10.3767L1.13196 11.6601H7.19578V12.3402ZM8.0267 8.50771L4.07444 4.55518L4.03208 6.32763C4.02776 6.51486 3.87237 6.66296 3.68542 6.65838C3.49819 6.65406 3.35008 6.49867 3.35467 6.31171L3.41618 3.74666C3.42022 3.56671 3.56509 3.42022 3.74693 3.41591L6.31198 3.3544C6.49921 3.35008 6.65433 3.49819 6.65865 3.68515C6.66296 3.87237 6.51486 4.0275 6.3279 4.03181L4.55545 4.07417L8.50798 8.0267L8.0267 8.50771Z" fill="currentColor"></path></svg></span></div><p className="text-center sm:text-lg text-xl  font-light text-black dark:text-white">Innovative consensus  offering more security and decentralization</p></div><div className="w-full m-auto text-center px-8 mb-8"><div className="min-h-32 flex items-end pb-6 justify-center"><span className="sm:w-24 sm:h-24 w-[60%] h-[60%]  inline-block sm:inline-flex  items-end text-black dark:text-[#4ae52e] opacity-100"><svg viewBox="0 0 49 32.73" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.72874 15.1H10.5201C10.9615 15.1 11.3187 14.7418 11.3187 14.3V11.1C11.3187 10.6582 10.9615 10.3 10.5201 10.3H5.72874C5.28734 10.3 4.93018 10.6582 4.93018 11.1V14.3C4.93018 14.7418 5.28734 15.1 5.72874 15.1ZM6.5273 11.9H9.72154V13.5H6.5273V11.9Z" fill="currentColor"></path><path d="M5.72874 25.5H10.5201C10.9615 25.5 11.3187 25.1418 11.3187 24.7C11.3187 24.2582 10.9615 23.9 10.5201 23.9H5.72874C5.28734 23.9 4.93018 24.2582 4.93018 24.7C4.93018 25.1418 5.28734 25.5 5.72874 25.5Z" fill="currentColor"></path><path d="M13.7143 27.1H5.72874C5.28734 27.1 4.93018 27.4582 4.93018 27.9C4.93018 28.3418 5.28734 28.7 5.72874 28.7H13.7143C14.1557 28.7 14.5129 28.3418 14.5129 27.9C14.5129 27.4582 14.1557 27.1 13.7143 27.1Z" fill="currentColor"></path><path d="M48.0525 0.700012H14.5129C14.0715 0.700012 13.7144 1.05822 13.7144 1.50001V4.80392C13.7144 5.24572 14.0715 5.60392 14.5129 5.60392C14.9543 5.60392 15.3115 5.24572 15.3115 4.80392V2.30001H47.2539V7.10001H18.2343C17.7929 7.10001 17.4358 7.45821 17.4358 7.90001C17.4358 8.34181 17.7929 8.70001 18.2343 8.70001H37.6712V24.7H24.0956C23.6543 24.7 23.2971 25.0582 23.2971 25.5C23.2971 25.9418 23.6543 26.3 24.0956 26.3H48.0525C48.4939 26.3 48.851 25.9418 48.851 25.5V1.50001C48.851 1.05822 48.4939 0.700012 48.0525 0.700012ZM39.2683 24.7V8.70001H47.2539V24.7H39.2683Z" fill="currentColor"></path><path d="M28.0881 5.49999C28.5291 5.49999 28.8867 5.14182 28.8867 4.69999C28.8867 4.25817 28.5291 3.89999 28.0881 3.89999C27.6471 3.89999 27.2896 4.25817 27.2896 4.69999C27.2896 5.14182 27.6471 5.49999 28.0881 5.49999Z" fill="currentColor"></path><path d="M23.2971 5.49999C23.7381 5.49999 24.0957 5.14182 24.0957 4.69999C24.0957 4.25817 23.7381 3.89999 23.2971 3.89999C22.8561 3.89999 22.4985 4.25817 22.4985 4.69999C22.4985 5.14182 22.8561 5.49999 23.2971 5.49999Z" fill="currentColor"></path><path d="M18.5056 5.49999C18.9466 5.49999 19.3042 5.14182 19.3042 4.69999C19.3042 4.25817 18.9466 3.89999 18.5056 3.89999C18.0646 3.89999 17.707 4.25817 17.707 4.69999C17.707 5.14182 18.0646 5.49999 18.5056 5.49999Z" fill="currentColor"></path><path d="M44.8585 11.9H41.6643C41.2229 11.9 40.8657 12.2582 40.8657 12.7C40.8657 13.1418 41.2229 13.5 41.6643 13.5H44.8585C45.2999 13.5 45.6571 13.1418 45.6571 12.7C45.6571 12.2582 45.2999 11.9 44.8585 11.9Z" fill="currentColor"></path><path d="M44.8585 15.1H41.6643C41.2229 15.1 40.8657 15.4582 40.8657 15.9C40.8657 16.3418 41.2229 16.7 41.6643 16.7H44.8585C45.2999 16.7 45.6571 16.3418 45.6571 15.9C45.6571 15.4582 45.2999 15.1 44.8585 15.1Z" fill="currentColor"></path><path d="M44.8585 18.3H41.6643C41.2229 18.3 40.8657 18.6582 40.8657 19.1C40.8657 19.5418 41.2229 19.9 41.6643 19.9H44.8585C45.2999 19.9 45.6571 19.5418 45.6571 19.1C45.6571 18.6582 45.2999 18.3 44.8585 18.3Z" fill="currentColor"></path><path d="M33.4127 17.6602V19.6953C33.4127 19.8992 33.2763 20.0817 33.04 20.186L31.7517 20.7715C31.3501 20.9539 31.1723 21.4281 31.354 21.8305C31.4881 22.1258 31.7782 22.3004 32.0823 22.3004C32.1923 22.3004 32.3046 22.2774 32.4114 22.2285L33.6919 21.6465C34.5045 21.2875 35.0099 20.5399 35.0099 19.6953V18.0164L35.81 17.2946C35.9784 17.143 36.0744 16.9266 36.0744 16.7C36.0744 16.4735 35.9784 16.2571 35.81 16.1055L35.0099 15.3836V13.7047C35.0099 12.8602 34.5045 12.1125 33.6997 11.7571L32.4114 11.1715C32.009 10.9871 31.5364 11.1672 31.354 11.5696C31.1723 11.9719 31.3501 12.4461 31.7517 12.6285L33.0478 13.2176C33.2763 13.3184 33.4127 13.5008 33.4127 13.7047V15.7399C33.4127 15.9664 33.5087 16.1828 33.6771 16.3344L34.0826 16.7L33.6771 17.0656C33.5087 17.2172 33.4127 17.4336 33.4127 17.6602Z" fill="currentColor"></path><path d="M26.7573 15.7399V13.7047C26.7573 13.5008 26.8938 13.3184 27.1301 13.2141L28.4184 12.6285C28.82 12.4461 28.9978 11.9719 28.8161 11.5696C28.6336 11.1672 28.1618 10.9871 27.7586 11.1715L26.4781 11.7535C25.6655 12.1125 25.1602 12.8602 25.1602 13.7047V15.3836L24.3601 16.1055C24.1916 16.2571 24.0957 16.4735 24.0957 16.7C24.0957 16.9266 24.1916 17.143 24.3601 17.2946L25.1602 18.0164V19.6953C25.1602 20.5399 25.6655 21.2875 26.4703 21.643L27.7586 22.2285C27.8655 22.2774 27.9778 22.3004 28.0877 22.3004C28.3919 22.3004 28.682 22.1258 28.8161 21.8305C28.9978 21.4281 28.82 20.9539 28.4184 20.7715L27.1223 20.1824C26.8938 20.0817 26.7573 19.8992 26.7573 19.6953V17.6602C26.7573 17.4336 26.6614 17.2172 26.4929 17.0656L26.0874 16.7L26.4929 16.3344C26.6614 16.1828 26.7573 15.9664 26.7573 15.7399Z" fill="currentColor"></path><path d="M21.6491 14.8433C21.6404 14.818 21.6338 14.7934 21.6227 14.769C21.5838 14.6839 21.5347 14.6031 21.4661 14.5344L14.2791 7.33438C14.2107 7.26583 14.1302 7.2168 14.0456 7.17794C14.0207 7.16651 13.9956 7.15972 13.9696 7.15089C13.9032 7.12823 13.8357 7.11475 13.7656 7.11021C13.748 7.10904 13.7322 7.10001 13.7145 7.10001H1.73606C1.29467 7.10001 0.9375 7.45821 0.9375 7.90001V31.9C0.9375 32.3418 1.29467 32.7 1.73606 32.7H20.9015C21.3429 32.7 21.7001 32.3418 21.7001 31.9V15.1C21.7001 15.083 21.6914 15.0677 21.6903 15.0508C21.6859 14.9795 21.6722 14.9108 21.6491 14.8433ZM18.9738 14.3H14.513V9.83126L18.9738 14.3ZM2.53462 31.1V8.70001H12.9159V15.1C12.9159 15.5418 13.2731 15.9 13.7145 15.9H20.103V31.1H2.53462Z" fill="currentColor"></path></svg></span></div><p className="text-center sm:text-lg text-xl font-light text-black dark:text-white">Solution fully programmable with gaming language LUA</p></div></div></div></div></section>

			<section className="partnership-section py-16"><div className="mainContainer mx-auto px-4"><div className="text-center mb-32"><h2 className="text-5xl font-light">Strategic Partnerships</h2></div><div className="flex flex-wrap justify-center gap-10 md:gap-20"><div className="flex flex-col mb-6 md:mb-0 w-full md:w-1/3"><div className="mb-4 flex justify-center md:justify-center"><img alt="Sinohope Logo" loading="lazy" width="200" height="50" decoding="async" data-nimg="1" style={{color: "transparent", visibility: "visible"}}  src="https://ligo.network/_next/image?url=%2Fimages%2Fsinohope.png&amp;w=640&amp;q=75" data-nsfw-filter-status="sfw"/></div><div className="text-center"><h3 className="text-xl font-light dark:text-[#4ae52e] mb-2">Sinohope</h3><p className="text-xl font-light ">Through partnering with Sinohope, Ligo Network secures an advanced stance in asset protection and management, empowering our technology with leading MPC solutions. This synergy aims to set new standards in blockchain security and trust.</p></div></div><div className="flex flex-col mb-6 md:mb-0 w-full md:w-1/3"><div className="mb-4 flex justify-center md:justify-center"><img alt="Waterdrip Capital Logo" loading="lazy" width="200" height="50" decoding="async" data-nimg="1" style={{color: "transparent", visibility: "visible"}} src="https://ligo.network/_next/image?url=%2Fimages%2Fwaterdrip.png&amp;w=640&amp;q=75" data-nsfw-filter-status="sfw"/></div><div className="text-center"><h3 className="text-xl font-light dark:text-[#4ae52e] mb-2">Waterdrip Capital</h3><p className="text-xl font-light">Waterdrip Capital's early investment has been a driving force, enabling Ligo Network to pioneer innovative BTC Layer 2 solution. Their support highlights our shared commitment to evolving digital asset infrastructure.</p></div></div></div></div></section>

			<section className="section-sm mt-4 "><div className="mainContainer mt-4"><div className="row items-center justify-between"><div className="mb:md-0 mb-6 md:col-5 false"><img alt="Enter the Next Era with Ligo" loading="lazy" width="520" height="480" decoding="async" data-nimg="1" className="brightness-90" style={{color: "transparent", visibility: "visible"}} src="https://ligo.network/_next/image?url=%2Fimages%2Fligo_secure.png&amp;w=1080&amp;q=75" data-nsfw-filter-status="sfw"/></div><div className="md:col-7 lg:col-6 false"><h2 className="mb-4 dark:text-[#4ae52e] font-light">Enter the Next Era with Ligo</h2><p className="mb-8 text-lg">Ligo addresses the limitations of the original Bitcoin network, including scalability and the absence of Turing-complete capabilities. Our state-of-the-art Layer2 solution ushers in a new paradigm where decentralized applications thrive on the bedrock of the most trusted blockchain.</p><ul><li className="relative mb-4 pl-6 text-white "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="absolute left-0 top-1.5 dark:text-[#4ae52e]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg><span>Years of reasearch at the National University of Singapore, Blockchain Lab</span></li><li className="relative mb-4 pl-6 text-white "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="absolute left-0 top-1.5 dark:text-[#4ae52e]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg><span>The most performant layer 2 - Innovative Consensus and fully decentralized</span></li><li className="relative mb-4 pl-6 text-white "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="absolute left-0 top-1.5 dark:text-[#4ae52e]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg><span>Working with listed partner Sinohope, for virtual custody and MPC Wallet mgmt.</span></li></ul></div></div></div></section>

			<section className="mb-28"><div className="mainContainer"><div className="rounded-xl bg-theme-light px-4 py-16 dark:bg-darkmode-theme-light xl:p-20"><div className="row items-center justify-between"><div className="mb-10 md:col-5 lg:col-4 md:order-2 md:mb-0"><img alt="cta-image" loading="lazy" width="392" height="390" decoding="async" data-nimg="1" className="w-full brightness-90" style={{color: "transparent", visibility: "visible"}}  src="https://ligo.network/_next/image?url=%2Fimages%2Fligo_performance.png&amp;w=828&amp;q=75" data-nsfw-filter-status="sfw"/></div><div className="md:col-7 md:order-1"><h2 className="mb-2 dark:text-[#4ae52e] font-light">Ready to try out our Layer 2</h2><p className="mb-6">Build lightning-fast dApps with Ligo Network.</p><a className="btn btn-primary" href="/staking">Soon available for developers</a></div></div></div></div></section>
		</main>
	);
}