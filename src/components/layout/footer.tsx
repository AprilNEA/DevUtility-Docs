import Link from "next/link";
import Hits from "./hits";
import { Footer as NextraFooter } from "nextra-theme-docs";

const menuItems: {
	heading: string;
	items: { name: string; href: string; notificationCount?: number }[];
}[] = [
	// {
	// 	heading: "Platform",
	// 	items: [
	// 		{
	// 			name: "LLM Tracing",
	// 			href: "/docs/tracing",
	// 		},
	// 		{
	// 			name: "Prompt Management",
	// 			href: "/docs/prompts/get-started",
	// 		},
	// 		{
	// 			name: "Evaluation",
	// 			href: "/docs/scores/overview",
	// 		},
	// 		{
	// 			name: "Manual Annotation",
	// 			href: "/docs/scores/annotation",
	// 		},
	// 		{
	// 			name: "Datasets",
	// 			href: "/docs/datasets/overview",
	// 		},
	// 		{
	// 			name: "Metrics",
	// 			href: "/docs/analytics",
	// 		},
	// 		{
	// 			name: "Playground",
	// 			href: "/docs/playground",
	// 		},
	// 	],
	// },
	{
		heading: "Resources",
		items: [
			{ name: "App", href: "/docs" },
			// {
			// 	name: "Interactive Demo",
			// 	href: "/demo",
			// },
			// {
			// 	name: "Video demo (10 min)",
			// 	href: "/watch-demo",
			// },
			{
				name: "Changelog",
				href: "/changelog",
			},
			{
				name: "Roadmap",
				href: "/docs/roadmap",
			},
			// {
			// 	name: "Pricing",
			// 	href: "/pricing",
			// },
			// {
			// 	name: "Enterprise",
			// 	href: "/enterprise",
			// },
			// {
			// 	name: "Self-hosting",
			// 	href: "/self-hosting",
			// },
			{
				name: "Open Source",
				href: "/docs/open-source",
			},
		],
	},
	{
		heading: "About",
		items: [
			{ name: "博客", href: "/blog" },
			{
				name: "About us",
				href: "/about",
			},
			{ name: "Support", href: "/support" },
		],
	},

	{
		heading: "Legal",
		items: [
			{ name: "Security", href: "/security" },
			{ name: "Imprint", href: "/imprint" },
			{
				name: "Terms",
				href: "/terms",
			},
			{
				name: "Privacy Policy",
				href: "/privacy",
			},
		],
	},
];

const Footer = () => {
	return (
		<NextraFooter className="flex flex-col">
			<div className="w-full grid grid-cols-2 md:grid-cols-5 text-base gap-y-8 gap-x-2">
				{menuItems.map((menu) => (
					<div key={menu.heading}>
						<p className="pb-4 font-mono font-bold text-primary">
							{menu.heading}
						</p>
						<ul className="flex flex-col gap-3 items-start">
							{menu.items.map((item) => (
								<li key={item.name} className="relative flex gap-1">
									<Link
										href={item.href}
										className="text-sm hover:text-primary/80"
									>
										{item.name}
									</Link>
									{item.notificationCount && item.notificationCount > 0 && (
										<span className="transform -translate-y-1/4 bg-primary text-primary-foreground rounded-full h-3 w-3 text-[0.6rem] flex items-center justify-center">
											{item.notificationCount}
										</span>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
				<div />
			</div>
			<div className="my-8 font-mono text-sm flex flex-row items-center justify-between">
				© 2023-{new Date().getFullYear()} AprilNEA LLC
				<div className="ml-auto">
					<Hits />
				</div>
			</div>
		</NextraFooter>
	);
};

export default Footer;
