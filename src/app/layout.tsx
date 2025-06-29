import "@/globals.css";
import "nextra-theme-docs/style.css";
import "@/overrides.css";

import Image from "next/image";
import { Layout, Link, Navbar } from "nextra-theme-docs";
import Footer from "@/components/layout/footer";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Background } from "@/components/background";
import Telegram from "@/components/icons/telegram";
import { Button } from "@/components/ui/button";
import { GithubMenuBadge } from "@/components/github-badge";
import XformerlyTwitter from "@/components/icons/twitter";

export const metadata = {
	title: {
		default: "DevUtility",
		template: "%s | DevUtility",
	},
	description:
		"⚡ Universal developer toolkit powered by Rust & WebAssembly. Comprehensive tools for software development, hardware engineering, and cybersecurity - delivering native performance across desktop, web, and mobile platforms.",
	icons: {
		icon: "/icon.png",
	},
};

const navbar = (
	<Navbar
		logo={
			<>
				<Image
					src="/icon.png"
					alt="DevUtility Logo"
					width={32}
					height={32}
					className="mr-2"
				/>
				<b>DevUtility</b>
			</>
		}
		chatLink="https://t.me/DevUtility"
		chatIcon={<Telegram width={24} height={24} />}
	>
		<Link href="https://x.com/DevUtilityApp">
			<XformerlyTwitter width={24} height={24}/>
		</Link>
		<GithubMenuBadge />
		<Link href="/app/">
			<Button variant="default" size="sm" className="h-8">
				Try Online
			</Button>
		</Link>
	</Navbar>
);
const footer = <Footer />;
const search = <Search />;

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html
			// Not required, but good for SEO
			lang="en-US"
			// Required to be set
			dir="ltr"
			className="antialiased"
			// Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
			suppressHydrationWarning
		>
			<Head />
			<body>
				<Layout
					// banner={banner}
					navbar={navbar}
					footer={footer}
					search={search}
					pageMap={await getPageMap()}
					docsRepositoryBase="https://github.com/AprilNEA/DevUtility"
				>
					{children}
				</Layout>
				<Background />
			</body>
		</html>
	);
}
