import { Link } from "nextra-theme-docs";
import { Header } from "@/components/landing/header";
import ChangelogIndex from "@/components/changelog";

export default function Page() {
	return (
		<div className="md:container">
			<div className="flex flex-col items-center content-center text-center my-10">
				<Header
					title="Changelog"
					description={
						<>
							Latest version updates from the DevUtility team. View our{" "}
							<Link href="/docs/roadmap" className="underline text-primary">
								Roadmap
							</Link>{" "}
							to see what's next.
						</>
					}
					className="mb-8"
					h="h1"
				/>
				<div className="mb-8">
					{/* <ProductUpdateSignup source="changelog" /> */}
				</div>
			</div>
			<ChangelogIndex />
		</div>
	);
}
