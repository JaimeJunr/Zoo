import { create } from "@storybook/theming/create";

export default create({
	base: "light",
	// Typography
	fontBase: '"Lato", sans-serif',
	fontCode: "monospace",

	brandTitle: "Zoo UI",
	brandImage: "/zoo.png",
	brandTarget: "_blank",

	//
	colorPrimary: "#3B8091",
	colorSecondary: "#3B8091",

	// UI
	appBg: "#f1f5f9",
	appContentBg: "#f1f5f9",
	appPreviewBg: "#f1f5f9",
	appBorderColor: "#585C6D",
	appBorderRadius: 4,

	// Text colors
	textColor: "#083344",
	textInverseColor: "#f1f5f9",

	// Toolbar default and active colors
	barTextColor: "#A1A1AA",
	barSelectedColor: "#585C6D",
	barHoverColor: "#585C6D",
	barBg: "#18181B",

	// Form colors
	inputBg: "#f1f5f9",
	inputBorder: "#083344",
	inputTextColor: "#083344",
	inputBorderRadius: 2,
});
