import type { MetaRecord } from "nextra";

export default {
	index: {
		type: "page",
		title: "DevUtility",
		display: "hidden",
		theme: {
			layout: "full",
		},
	},
	docs: {
		type: "page",
		title: "Docs",
	},
	sponsor: {
		type: "page",
		title: "Donate",
	},
	changelog: {
		type: "page",
		title: "Changelog",
		theme: {
			breadcrumb: false,
			sidebar: false,
			timestamp: false,
			toc: false,
		},
	},
	faq: {
		type: "page",
		title: "FAQ",
		// hidden from main menu via overrides.css, nextra display:hidden otherwise breaks type:page
	},
	support: {
		type: "page",
		title: "Support",
		display: "hidden",
	},
	// about: {
	//   title: "About us",
	//   type: "page",
	//   display: "hidden",
	//   theme: {
	//     typesetting: "article",
	//     timestamp: false,
	//   },
	// },
	// "404": {
	//   type: "page",
	//   theme: {
	//     typesetting: "article",
	//     timestamp: false,
	//   },
	// },
} satisfies MetaRecord;
