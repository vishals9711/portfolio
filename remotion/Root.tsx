import { Composition } from "remotion";
import { FutureSignalComposition } from "./compositions/FutureSignalComposition";

export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id="FutureSignal"
				component={FutureSignalComposition}
				durationInFrames={180}
				fps={30}
				width={1440}
				height={1080}
			/>
		</>
	);
};
