import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";
// import Changelog from "./Changelog";
import { StarCount } from "../github-badge";
import { HomeSection } from "./home-section";
import { Header } from "./header";
import IconGithub from "../icons/github";

export default function OpenSource() {
	return (
		<HomeSection className="flex flex-col items-center">
			<Header
				title="Proud of Our Open Source Code"
				description={<span>VMBoard is committed to open source.</span>}
				className="mb-0"
			/>

			<Link href="https://github.com/AprilNEA/DevUtility">
				<ShimmerButton borderRadius="0.25rem" className="mt-11">
					<div className="flex gap-4 items-center whitespace-pre-wrap bg-gradient-to-b from-white from-30% to-gray-300/70 bg-clip-text text-center text-md font-semibold leading-none tracking-tight text-transparent">
						<IconGithub className="text-white h-9 w-9" />
						<span>AprilNEA/DevUtility:</span>
						<StarCount repo="AprilNEA/DevUtility" />
						<span>⭐️</span>
					</div>
				</ShimmerButton>
			</Link>
			{/* <Changelog className="mt-14" /> */}
		</HomeSection>
	);
}
