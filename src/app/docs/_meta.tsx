import { MenuSwitcher } from "@/components/menu-switch";
import type { MetaRecord } from "nextra";

export default {
	"-- Switcher": {
		type: "separator",
		title: <MenuSwitcher />,
	},
	index: {},
	download: {},
	"-- Utilities": {
		type: "separator",
		title: "Utilities",
	},
	cryptography: {},
	"-- Develop": {
		type: "separator",
		title: "Development",
	},
	architecture: {},
	develop: {},
	"-- More": {
		type: "separator",
		title: "More",
	},
	roadmap: {},
	"open-source": {},
	support: {
		href: "/support",
		title: "Support",
	},
} satisfies MetaRecord;
