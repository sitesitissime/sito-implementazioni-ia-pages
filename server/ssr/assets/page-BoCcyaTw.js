import { n as require_jsx_runtime, o as require_react, s as __toESM, t as require_react_dom } from "../index.js";
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/context.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = (0, import_react.createContext)({});
var useLucideContext = () => (0, import_react.useContext)(LucideContext);
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
	const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
	return (0, import_react.createElement)("svg", {
		ref,
		...defaultAttributes,
		width: size ?? contextSize ?? defaultAttributes.width,
		height: size ?? contextSize ?? defaultAttributes.height,
		stroke: color ?? contextColor,
		strokeWidth: calculatedStrokeWidth,
		className: mergeClasses("lucide", contextClass, className),
		...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUpRight = createLucideIcon("arrow-up-right", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Bot = createLucideIcon("bot", [
	["path", {
		d: "M12 8V4H8",
		key: "hb8ula"
	}],
	["rect", {
		width: "16",
		height: "12",
		x: "4",
		y: "8",
		rx: "2",
		key: "enze0r"
	}],
	["path", {
		d: "M2 14h2",
		key: "vft8re"
	}],
	["path", {
		d: "M20 14h2",
		key: "4cs60a"
	}],
	["path", {
		d: "M15 13v2",
		key: "1xurst"
	}],
	["path", {
		d: "M9 13v2",
		key: "rq6x2g"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var BookOpen = createLucideIcon("book-open", [["path", {
	d: "M12 5v16",
	key: "1f6ucr"
}], ["path", {
	d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
	key: "1fyvmf"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Boxes = createLucideIcon("boxes", [
	["path", {
		d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
		key: "lc1i9w"
	}],
	["path", {
		d: "m7 16.5-4.74-2.85",
		key: "1o9zyk"
	}],
	["path", {
		d: "m7 16.5 5-3",
		key: "va8pkn"
	}],
	["path", {
		d: "M7 16.5v5.17",
		key: "jnp8gn"
	}],
	["path", {
		d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
		key: "8zsnat"
	}],
	["path", {
		d: "m17 16.5-5-3",
		key: "8arw3v"
	}],
	["path", {
		d: "m17 16.5 4.74-2.85",
		key: "8rfmw"
	}],
	["path", {
		d: "M17 16.5v5.17",
		key: "k6z78m"
	}],
	["path", {
		d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
		key: "1xygjf"
	}],
	["path", {
		d: "M12 8 7.26 5.15",
		key: "1vbdud"
	}],
	["path", {
		d: "m12 8 4.74-2.85",
		key: "3rx089"
	}],
	["path", {
		d: "M12 13.5V8",
		key: "1io7kd"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ClipboardList = createLucideIcon("clipboard-list", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "M12 11h4",
		key: "1jrz19"
	}],
	["path", {
		d: "M12 16h4",
		key: "n85exb"
	}],
	["path", {
		d: "M8 11h.01",
		key: "1dfujw"
	}],
	["path", {
		d: "M8 16h.01",
		key: "18s6g9"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Eye = createLucideIcon("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var EyeOff = createLucideIcon("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileCheckCorner = createLucideIcon("file-check-corner", [
	["path", {
		d: "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",
		key: "g5mvt7"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m14 20 2 2 4-4",
		key: "15kota"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileText = createLucideIcon("file-text", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var GripVertical = createLucideIcon("grip-vertical", [
	["circle", {
		cx: "9",
		cy: "12",
		r: "1",
		key: "1vctgf"
	}],
	["circle", {
		cx: "9",
		cy: "5",
		r: "1",
		key: "hp0tcf"
	}],
	["circle", {
		cx: "9",
		cy: "19",
		r: "1",
		key: "fkjjf6"
	}],
	["circle", {
		cx: "15",
		cy: "12",
		r: "1",
		key: "1tmaij"
	}],
	["circle", {
		cx: "15",
		cy: "5",
		r: "1",
		key: "19l28e"
	}],
	["circle", {
		cx: "15",
		cy: "19",
		r: "1",
		key: "f4zoj3"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Image = createLucideIcon("image", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MessageCircle = createLucideIcon("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Move = createLucideIcon("move", [
	["path", {
		d: "M12 2v20",
		key: "t6zp3m"
	}],
	["path", {
		d: "m15 19-3 3-3-3",
		key: "11eu04"
	}],
	["path", {
		d: "m19 9 3 3-3 3",
		key: "1mg7y2"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}],
	["path", {
		d: "m5 9-3 3 3 3",
		key: "j64kie"
	}],
	["path", {
		d: "m9 5 3-3 3 3",
		key: "l8vdw6"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Pencil = createLucideIcon("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Radar = createLucideIcon("radar", [
	["path", {
		d: "M19.07 4.93A10 10 0 0 0 6.99 3.34",
		key: "z3du51"
	}],
	["path", {
		d: "M4 6h.01",
		key: "oypzma"
	}],
	["path", {
		d: "M2.29 9.62A10 10 0 1 0 21.31 8.35",
		key: "qzzz0"
	}],
	["path", {
		d: "M16.24 7.76A6 6 0 1 0 8.23 16.67",
		key: "1yjesh"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M17.99 11.66A6 6 0 0 1 15.77 16.67",
		key: "1u2y91"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}],
	["path", {
		d: "m13.41 10.59 5.66-5.66",
		key: "mhq4k0"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RotateCcw = createLucideIcon("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Send = createLucideIcon("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Trash2 = createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region node_modules/@radix-ui/primitive/dist/index.mjs
var __defProp$33 = Object.defineProperty;
var __name$33 = (target, value) => __defProp$33(target, "name", {
	value,
	configurable: true
});
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
	return /* @__PURE__ */ __name$33(function handleEvent(event) {
		originalEventHandler?.(event);
		if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) return ourEventHandler?.(event);
	}, "handleEvent");
}
__name$33(composeEventHandlers, "composeEventHandlers");
function getOwnerWindow(element) {
	if (!canUseDOM) throw new Error("Cannot access window outside of the DOM");
	return element?.ownerDocument?.defaultView ?? window;
}
__name$33(getOwnerWindow, "getOwnerWindow");
function getOwnerDocument(element) {
	if (!canUseDOM) throw new Error("Cannot access document outside of the DOM");
	return element?.ownerDocument ?? document;
}
__name$33(getOwnerDocument, "getOwnerDocument");
function getActiveElement(node, activeDescendant = false) {
	const { activeElement } = getOwnerDocument(node);
	if (!activeElement?.nodeName) return null;
	if (isFrame(activeElement) && activeElement.contentDocument) return getActiveElement(activeElement.contentDocument.body, activeDescendant);
	if (activeDescendant) {
		const id = activeElement.getAttribute("aria-activedescendant");
		if (id) {
			const element = getOwnerDocument(activeElement).getElementById(id);
			if (element) return element;
		}
	}
	return activeElement;
}
__name$33(getActiveElement, "getActiveElement");
function isFrame(element) {
	return element.tagName === "IFRAME";
}
__name$33(isFrame, "isFrame");
//#endregion
//#region node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$32 = Object.defineProperty;
var __name$32 = (target, value) => __defProp$32(target, "name", {
	value,
	configurable: true
});
function setRef$9(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$32(setRef$9, "setRef");
function composeRefs$8(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$9(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$9(refs[i], null);
			}
		};
	};
}
__name$32(composeRefs$8, "composeRefs");
function useComposedRefs$8(...refs) {
	return import_react.useCallback(composeRefs$8(...refs), refs);
}
__name$32(useComposedRefs$8, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
var import_jsx_runtime = require_jsx_runtime();
var __defProp$31 = Object.defineProperty;
var __name$31 = (target, value) => __defProp$31(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createContext2(rootComponentName, defaultContext) {
	const Context = import_react.createContext(defaultContext);
	Context.displayName = rootComponentName + "Context";
	const Provider = /* @__PURE__ */ __name$31((props) => {
		const { children, ...context } = props;
		const value = import_react.useMemo(() => context, Object.values(context));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
			value,
			children
		});
	}, "Provider");
	Provider.displayName = rootComponentName + "Provider";
	function useContext2(consumerName, options = {}) {
		const { optional = false } = options;
		const context = import_react.useContext(Context);
		if (context) return context;
		if (defaultContext !== void 0) return defaultContext;
		if (optional) return void 0;
		throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
	}
	__name$31(useContext2, "useContext");
	return [Provider, useContext2];
}
__name$31(createContext2, "createContext");
/* @__NO_SIDE_EFFECTS__ */
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react.createContext(defaultContext);
		BaseContext.displayName = rootComponentName + "Context";
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = /* @__PURE__ */ __name$31((props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = import_react.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
				value,
				children
			});
		}, "Provider");
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope, options = {}) {
			const { optional = false } = options;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = import_react.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			if (optional) return void 0;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		__name$31(useContext2, "useContext");
		return [Provider, useContext2];
	}
	__name$31(createContext3, "createContext");
	const createScope = /* @__PURE__ */ __name$31(() => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react.createContext(defaultContext);
		});
		return /* @__PURE__ */ __name$31(function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		}, "useScope");
	}, "createScope");
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name$31(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = /* @__PURE__ */ __name$31(() => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return /* @__PURE__ */ __name$31(function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		}, "useComposedScopes");
	}, "createScope");
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
__name$31(composeContextScopes, "composeContextScopes");
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var useLayoutEffect2 = globalThis?.document ? import_react.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@radix-ui/react-id/dist/index.mjs
var __defProp$30 = Object.defineProperty;
var __name$30 = (target, value) => __defProp$30(target, "name", {
	value,
	configurable: true
});
var useReactId = import_react[" useId ".trim().toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
	const [id, setId] = import_react.useState(useReactId());
	useLayoutEffect2(() => {
		if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
	}, [deterministicId]);
	return deterministicId || (id ? `radix-${id}` : "");
}
__name$30(useId, "useId");
//#endregion
//#region node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var __defProp$29 = Object.defineProperty;
var __name$29 = (target, value) => __defProp$29(target, "name", {
	value,
	configurable: true
});
var useReactEffectEvent = import_react[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = import_react[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
	if (typeof useReactEffectEvent === "function") return useReactEffectEvent(callback);
	const ref = import_react.useRef(() => {
		throw new Error("Cannot call an event handler while rendering.");
	});
	if (typeof useReactInsertionEffect === "function") useReactInsertionEffect(() => {
		ref.current = callback;
	});
	else useLayoutEffect2(() => {
		ref.current = callback;
	});
	return import_react.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
__name$29(useEffectEvent, "useEffectEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var __defProp$28 = Object.defineProperty;
var __name$28 = (target, value) => __defProp$28(target, "name", {
	value,
	configurable: true
});
var useInsertionEffect = import_react[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({ prop, defaultProp, onChange = /* @__PURE__ */ __name$28(() => {}, "onChange"), caller }) {
	const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
		defaultProp,
		onChange
	});
	const isControlled = prop !== void 0;
	return [isControlled ? prop : uncontrolledProp, import_react.useCallback((nextValue) => {
		if (isControlled) {
			const value2 = isFunction$2(nextValue) ? nextValue(prop) : nextValue;
			if (value2 !== prop) onChangeRef.current?.(value2);
		} else setUncontrolledProp(nextValue);
	}, [
		isControlled,
		prop,
		setUncontrolledProp,
		onChangeRef
	])];
}
__name$28(useControllableState, "useControllableState");
function useUncontrolledState({ defaultProp, onChange }) {
	const [value, setValue] = import_react.useState(defaultProp);
	const prevValueRef = import_react.useRef(value);
	const onChangeRef = import_react.useRef(onChange);
	useInsertionEffect(() => {
		onChangeRef.current = onChange;
	}, [onChange]);
	import_react.useEffect(() => {
		if (prevValueRef.current !== value) {
			onChangeRef.current?.(value);
			prevValueRef.current = value;
		}
	}, [value, prevValueRef]);
	return [
		value,
		setValue,
		onChangeRef
	];
}
__name$28(useUncontrolledState, "useUncontrolledState");
function isFunction$2(value) {
	return typeof value === "function";
}
__name$28(isFunction$2, "isFunction");
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
	const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
	const isControlled = controlledState !== void 0;
	const onChange = useEffectEvent(onChangeProp);
	const args = [{
		...initialArg,
		state: defaultProp
	}];
	if (init) args.push(init);
	const [internalState, dispatch] = import_react.useReducer((state2, action) => {
		if (action.type === SYNC_STATE) return {
			...state2,
			state: action.state
		};
		const next = reducer(state2, action);
		if (isControlled && !Object.is(next.state, state2.state)) onChange(next.state);
		return next;
	}, ...args);
	const uncontrolledState = internalState.state;
	const prevValueRef = import_react.useRef(uncontrolledState);
	import_react.useEffect(() => {
		if (prevValueRef.current !== uncontrolledState) {
			prevValueRef.current = uncontrolledState;
			if (!isControlled) onChange(uncontrolledState);
		}
	}, [
		uncontrolledState,
		prevValueRef,
		isControlled
	]);
	const state = import_react.useMemo(() => {
		if (controlledState !== void 0) return {
			...internalState,
			state: controlledState
		};
		return internalState;
	}, [internalState, controlledState]);
	import_react.useEffect(() => {
		if (isControlled && !Object.is(controlledState, internalState.state)) dispatch({
			type: SYNC_STATE,
			state: controlledState
		});
	}, [
		controlledState,
		internalState.state,
		isControlled
	]);
	return [state, dispatch];
}
__name$28(useControllableStateReducer, "useControllableStateReducer");
//#endregion
//#region node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var __defProp$27 = Object.defineProperty;
var __name$27 = (target, value) => __defProp$27(target, "name", {
	value,
	configurable: true
});
function setRef$8(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$27(setRef$8, "setRef");
function composeRefs$7(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$8(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$8(refs[i], null);
			}
		};
	};
}
__name$27(composeRefs$7, "composeRefs");
function useComposedRefs$7(...refs) {
	return import_react.useCallback(composeRefs$7(...refs), refs);
}
__name$27(useComposedRefs$7, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.mjs
var __defProp$26 = Object.defineProperty;
var __name$26 = (target, value) => __defProp$26(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createSlot$2(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent$2(children) && typeof use$2 === "function") children = use$2(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable$2(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent$2(child) && typeof use$2 === "function") child = use$2(child._payload);
				slottableElement = getSlottableElementFromSlottable$2(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$3(slottableElement) : void 0;
		const composedRef = useComposedRefs$7(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError$2(ownerName) : createSlotError$2(ownerName));
			return children;
		}
		const mergedProps = mergeProps$2(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$26(createSlot$2, "createSlot");
var SLOTTABLE_IDENTIFIER$2 = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable$2(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$26((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER$2;
	return Slottable2;
}
__name$26(createSlottable$2, "createSlottable");
var getSlottableElementFromSlottable$2 = /* @__PURE__ */ __name$26((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps$2(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$26(mergeProps$2, "mergeProps");
function getElementRef$3(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$26(getElementRef$3, "getElementRef");
function isSlottable$2(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
__name$26(isSlottable$2, "isSlottable");
var REACT_LAZY_TYPE$2 = Symbol.for("react.lazy");
function isLazyComponent$2(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE$2 && "_payload" in element && isPromiseLike$2(element._payload);
}
__name$26(isLazyComponent$2, "isLazyComponent");
function isPromiseLike$2(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$26(isPromiseLike$2, "isPromiseLike");
var createSlotError$2 = /* @__PURE__ */ __name$26((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError$2 = /* @__PURE__ */ __name$26((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use$2 = import_react[" use ".trim().toString()];
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var __defProp$25 = Object.defineProperty;
var __name$25 = (target, value) => __defProp$25(target, "name", {
	value,
	configurable: true
});
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((primitive, node) => {
	const Slot = /* @__PURE__ */ createSlot$2(`Primitive.${node}`);
	const Node = import_react.forwardRef((props, forwardedRef) => {
		const { asChild, ...primitiveProps } = props;
		const Comp = asChild ? Slot : node;
		if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
			...primitiveProps,
			ref: forwardedRef
		});
	});
	Node.displayName = `Primitive.${node}`;
	return {
		...primitive,
		[node]: Node
	};
}, {});
function dispatchDiscreteCustomEvent(target, event) {
	if (target) import_react_dom.flushSync(() => target.dispatchEvent(event));
}
__name$25(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$24 = Object.defineProperty;
var __name$24 = (target, value) => __defProp$24(target, "name", {
	value,
	configurable: true
});
function setRef$7(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$24(setRef$7, "setRef");
function composeRefs$6(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$7(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$7(refs[i], null);
			}
		};
	};
}
__name$24(composeRefs$6, "composeRefs");
function useComposedRefs$6(...refs) {
	return import_react.useCallback(composeRefs$6(...refs), refs);
}
__name$24(useComposedRefs$6, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var __defProp$23 = Object.defineProperty;
var __name$23 = (target, value) => __defProp$23(target, "name", {
	value,
	configurable: true
});
function useCallbackRef$1(callback) {
	const callbackRef = import_react.useRef(callback);
	import_react.useEffect(() => {
		callbackRef.current = callback;
	});
	return import_react.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
__name$23(useCallbackRef$1, "useCallbackRef");
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var __defProp$22 = Object.defineProperty;
var __name$22 = (target, value) => __defProp$22(target, "name", {
	value,
	configurable: true
});
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = import_react.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
});
var DismissableLayer = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$22(function DismissableLayer2(props, forwardedRef) {
	const { disableOutsidePointerEvents = false, deferPointerDownOutside = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	const ownerDocument = node?.ownerDocument ?? globalThis?.document;
	const [, force] = import_react.useState({});
	const composedRefs = useComposedRefs$6(forwardedRef, setNode);
	const layers = Array.from(context.layers);
	const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
	const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
	const index = node ? layers.indexOf(node) : -1;
	const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
	const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
	const isDeferredPointerDownOutsideRef = import_react.useRef(false);
	const pointerDownOutside = usePointerDownOutside((event) => {
		onPointerDownOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, {
		ownerDocument,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces: context.dismissableSurfaces,
		shouldHandlePointerDownOutside: import_react.useCallback((target) => {
			if (!(target instanceof Node)) return false;
			const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
			return isPointerEventsEnabled && !isPointerDownOnBranch;
		}, [context.branches, isPointerEventsEnabled])
	});
	const focusOutside = useFocusOutside((event) => {
		if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) return;
		const target = event.target;
		if ([...context.branches].some((branch) => branch.contains(target))) return;
		onFocusOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, ownerDocument);
	const isHighestLayer = node ? index === layers.length - 1 : false;
	const handleKeyDown = useCallbackRef$1((event) => {
		if (event.key !== "Escape") return;
		onEscapeKeyDown?.(event);
		if (!event.defaultPrevented && onDismiss) {
			event.preventDefault();
			onDismiss();
		}
	});
	import_react.useEffect(() => {
		if (!isHighestLayer) return;
		ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
		return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
	}, [
		ownerDocument,
		isHighestLayer,
		handleKeyDown
	]);
	import_react.useEffect(() => {
		if (!node) return;
		if (disableOutsidePointerEvents) {
			if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
				originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
				ownerDocument.body.style.pointerEvents = "none";
			}
			context.layersWithOutsidePointerEventsDisabled.add(node);
		}
		context.layers.add(node);
		dispatchUpdate();
		return () => {
			if (disableOutsidePointerEvents) {
				context.layersWithOutsidePointerEventsDisabled.delete(node);
				if (context.layersWithOutsidePointerEventsDisabled.size === 0) ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
			}
		};
	}, [
		node,
		ownerDocument,
		disableOutsidePointerEvents,
		context
	]);
	import_react.useEffect(() => {
		return () => {
			if (!node) return;
			context.layers.delete(node);
			context.layersWithOutsidePointerEventsDisabled.delete(node);
			dispatchUpdate();
		};
	}, [node, context]);
	import_react.useEffect(() => {
		const handleUpdate = /* @__PURE__ */ __name$22(() => force({}), "handleUpdate");
		document.addEventListener(CONTEXT_UPDATE, handleUpdate);
		return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...layerProps,
		ref: composedRefs,
		style: {
			pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
			...props.style
		},
		onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
		onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
	});
}, "DismissableLayer"));
function useDismissableLayerSurface() {
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	import_react.useEffect(() => {
		if (!node) return;
		context.dismissableSurfaces.add(node);
		return () => {
			context.dismissableSurfaces.delete(node);
		};
	}, [node, context.dismissableSurfaces]);
	return setNode;
}
__name$22(useDismissableLayerSurface, "useDismissableLayerSurface");
var IS_TRUE = /* @__PURE__ */ __name$22(() => true, "IS_TRUE");
function usePointerDownOutside(onPointerDownOutside, args) {
	const { ownerDocument = globalThis?.document, deferPointerDownOutside = false, isDeferredPointerDownOutsideRef, dismissableSurfaces, shouldHandlePointerDownOutside = IS_TRUE } = args;
	const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
	const isPointerInsideReactTreeRef = import_react.useRef(false);
	const isPointerDownOutsideRef = import_react.useRef(false);
	const interceptedOutsideInteractionEventsRef = import_react.useRef(/* @__PURE__ */ new Map());
	const handleClickRef = import_react.useRef(() => {});
	import_react.useEffect(() => {
		function resetOutsideInteraction() {
			isPointerDownOutsideRef.current = false;
			isDeferredPointerDownOutsideRef.current = false;
			interceptedOutsideInteractionEventsRef.current.clear();
		}
		__name$22(resetOutsideInteraction, "resetOutsideInteraction");
		function isOutsideInteractionIntercepted() {
			return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
		}
		__name$22(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
		function handleInteractionCapture(event) {
			if (!isPointerDownOutsideRef.current) return;
			const target = event.target;
			if (!(target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target)))) interceptedOutsideInteractionEventsRef.current.set(event.type, true);
			if (event.type === "click") window.setTimeout(() => {
				if (isPointerDownOutsideRef.current) handleClickRef.current();
			}, 0);
		}
		__name$22(handleInteractionCapture, "handleInteractionCapture");
		function handleInteractionBubble(event) {
			if (isPointerDownOutsideRef.current) interceptedOutsideInteractionEventsRef.current.set(event.type, false);
		}
		__name$22(handleInteractionBubble, "handleInteractionBubble");
		const handlePointerDown = /* @__PURE__ */ __name$22((event) => {
			if (event.target && !isPointerInsideReactTreeRef.current) {
				let handleAndDispatchPointerDownOutsideEvent2 = function() {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
					resetOutsideInteraction();
					if (!wasOutsideInteractionIntercepted) handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, { discrete: true });
				};
				__name$22(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
				if (!shouldHandlePointerDownOutside(event.target)) {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					resetOutsideInteraction();
					isPointerInsideReactTreeRef.current = false;
					return;
				}
				const eventDetail = { originalEvent: event };
				isPointerDownOutsideRef.current = true;
				isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
				interceptedOutsideInteractionEventsRef.current.clear();
				if (!deferPointerDownOutside || event.button !== 0) handleAndDispatchPointerDownOutsideEvent2();
				else {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
					ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
				}
			} else {
				ownerDocument.removeEventListener("click", handleClickRef.current);
				resetOutsideInteraction();
			}
			isPointerInsideReactTreeRef.current = false;
		}, "handlePointerDown");
		const outsideInteractionEvents = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (const eventName of outsideInteractionEvents) {
			ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
			ownerDocument.addEventListener(eventName, handleInteractionBubble);
		}
		const timerId = window.setTimeout(() => {
			ownerDocument.addEventListener("pointerdown", handlePointerDown);
		}, 0);
		return () => {
			window.clearTimeout(timerId);
			ownerDocument.removeEventListener("pointerdown", handlePointerDown);
			ownerDocument.removeEventListener("click", handleClickRef.current);
			for (const eventName of outsideInteractionEvents) {
				ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
				ownerDocument.removeEventListener(eventName, handleInteractionBubble);
			}
		};
	}, [
		ownerDocument,
		handlePointerDownOutside,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces,
		shouldHandlePointerDownOutside
	]);
	return { onPointerDownCapture: /* @__PURE__ */ __name$22(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture") };
}
__name$22(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
	const handleFocusOutside = useCallbackRef$1(onFocusOutside);
	const isFocusInsideReactTreeRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const handleFocus = /* @__PURE__ */ __name$22((event) => {
			if (event.target && !isFocusInsideReactTreeRef.current) handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, { originalEvent: event }, { discrete: false });
		}, "handleFocus");
		ownerDocument.addEventListener("focusin", handleFocus);
		return () => ownerDocument.removeEventListener("focusin", handleFocus);
	}, [ownerDocument, handleFocusOutside]);
	return {
		onFocusCapture: /* @__PURE__ */ __name$22(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ __name$22(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
	};
}
__name$22(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
	const event = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(event);
}
__name$22(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
	const target = detail.originalEvent.target;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) target.addEventListener(name, handler, { once: true });
	if (discrete) dispatchDiscreteCustomEvent(target, event);
	else target.dispatchEvent(event);
}
__name$22(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$21 = Object.defineProperty;
var __name$21 = (target, value) => __defProp$21(target, "name", {
	value,
	configurable: true
});
function setRef$6(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$21(setRef$6, "setRef");
function composeRefs$5(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$6(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$6(refs[i], null);
			}
		};
	};
}
__name$21(composeRefs$5, "composeRefs");
function useComposedRefs$5(...refs) {
	return import_react.useCallback(composeRefs$5(...refs), refs);
}
__name$21(useComposedRefs$5, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var __defProp$20 = Object.defineProperty;
var __name$20 = (target, value) => __defProp$20(target, "name", {
	value,
	configurable: true
});
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var FocusScope = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$20(function FocusScope2(props, forwardedRef) {
	const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
	const [container, setContainer] = import_react.useState(null);
	const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
	const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
	const lastFocusedElementRef = import_react.useRef(null);
	const composedRefs = useComposedRefs$5(forwardedRef, setContainer);
	const focusScope = import_react.useRef({
		paused: false,
		pause() {
			this.paused = true;
		},
		resume() {
			this.paused = false;
		}
	}).current;
	import_react.useEffect(() => {
		if (trapped) {
			let handleFocusIn2 = function(event) {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.current = target;
				else focus(lastFocusedElementRef.current, { select: true });
			}, handleFocusOut2 = function(event) {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.current, { select: true });
			}, handleMutations2 = function(mutations) {
				if (document.activeElement !== document.body) return;
				for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus(container);
			};
			__name$20(handleFocusIn2, "handleFocusIn");
			__name$20(handleFocusOut2, "handleFocusOut");
			__name$20(handleMutations2, "handleMutations");
			document.addEventListener("focusin", handleFocusIn2);
			document.addEventListener("focusout", handleFocusOut2);
			const mutationObserver = new MutationObserver(handleMutations2);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			return () => {
				document.removeEventListener("focusin", handleFocusIn2);
				document.removeEventListener("focusout", handleFocusOut2);
				mutationObserver.disconnect();
			};
		}
	}, [
		trapped,
		container,
		focusScope.paused
	]);
	import_react.useEffect(() => {
		if (container) {
			focusScopesStack.add(focusScope);
			const previouslyFocusedElement = document.activeElement;
			if (!container.contains(previouslyFocusedElement)) {
				const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				container.dispatchEvent(mountEvent);
				if (!mountEvent.defaultPrevented) {
					focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
					if (document.activeElement === previouslyFocusedElement) focus(container);
				}
			}
			return () => {
				container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				setTimeout(() => {
					const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					container.dispatchEvent(unmountEvent);
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					focusScopesStack.remove(focusScope);
				}, 0);
			};
		}
	}, [
		container,
		onMountAutoFocus,
		onUnmountAutoFocus,
		focusScope
	]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (!loop && !trapped) return;
		if (focusScope.paused) return;
		const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
		const focusedElement = document.activeElement;
		if (isTabKey && focusedElement) {
			const container2 = event.currentTarget;
			const [first, last] = getTabbableEdges(container2);
			if (!(first && last)) {
				if (focusedElement === container2) event.preventDefault();
			} else if (!event.shiftKey && focusedElement === last) {
				event.preventDefault();
				if (loop) focus(first, { select: true });
			} else if (event.shiftKey && focusedElement === first) {
				event.preventDefault();
				if (loop) focus(last, { select: true });
			}
		}
	}, [
		loop,
		trapped,
		focusScope.paused
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		tabIndex: -1,
		...scopeProps,
		ref: composedRefs,
		onKeyDown: handleKeyDown
	});
}, "FocusScope"));
function focusFirst(candidates, { select = false } = {}) {
	const previouslyFocusedElement = document.activeElement;
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (document.activeElement !== previouslyFocusedElement) return;
	}
}
__name$20(focusFirst, "focusFirst");
function getTabbableEdges(container) {
	const candidates = getTabbableCandidates(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
}
__name$20(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ __name$20((node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
__name$20(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
	const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
	for (const element of elements) if (!(canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container }))) return element;
}
__name$20(findVisible, "findVisible");
function isHidden(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
__name$20(isHidden, "isHidden");
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
__name$20(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
__name$20(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let stack = [];
	return {
		add(focusScope) {
			const activeFocusScope = stack[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack = arrayRemove(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = arrayRemove(stack, focusScope);
			stack[0]?.resume();
		}
	};
}
__name$20(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
__name$20(arrayRemove, "arrayRemove");
function removeLinks(items) {
	return items.filter((item) => item.tagName !== "A");
}
__name$20(removeLinks, "removeLinks");
//#endregion
//#region node_modules/@radix-ui/react-portal/dist/index.mjs
var __defProp$19 = Object.defineProperty;
var __name$19 = (target, value) => __defProp$19(target, "name", {
	value,
	configurable: true
});
var Portal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$19(function Portal2(props, forwardedRef) {
	const { container: containerProp, ...portalProps } = props;
	const [mounted, setMounted] = import_react.useState(false);
	useLayoutEffect2(() => setMounted(true), []);
	const container = containerProp || mounted && globalThis?.document?.body;
	return container ? import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...portalProps,
		ref: forwardedRef
	}), container) : null;
}, "Portal"));
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
var __defProp$18 = Object.defineProperty;
var __name$18 = (target, value) => __defProp$18(target, "name", {
	value,
	configurable: true
});
function useStateMachine(initialState, machine) {
	return import_react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
__name$18(useStateMachine, "useStateMachine");
var Presence = /* @__PURE__ */ __name$18((props) => {
	const { present, children } = props;
	const presence = usePresence(present);
	const child = typeof children === "function" ? children({ present: presence.isPresent }) : import_react.Children.only(children);
	const ref = useStableComposedRefs(presence.ref, getElementRef$2(child));
	return typeof children === "function" || presence.isPresent ? import_react.cloneElement(child, { ref }) : null;
}, "Presence");
function usePresence(present) {
	const [node, setNode] = import_react.useState();
	const stylesRef = import_react.useRef(null);
	const prevPresentRef = import_react.useRef(present);
	const prevAnimationNameRef = import_react.useRef("none");
	const mountAnimationNameRef = import_react.useRef(void 0);
	const [state, send] = useStateMachine(present ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	import_react.useEffect(() => {
		if (state === "mounted") {
			prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
			mountAnimationNameRef.current = void 0;
		} else prevAnimationNameRef.current = "none";
	}, [state]);
	useLayoutEffect2(() => {
		const styles = stylesRef.current;
		const wasPresent = prevPresentRef.current;
		if (wasPresent !== present) {
			const prevAnimationName = prevAnimationNameRef.current;
			const currentAnimationName = getAnimationName(styles);
			if (present) {
				mountAnimationNameRef.current = currentAnimationName;
				send("MOUNT");
			} else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
			else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
			else send("UNMOUNT");
			prevPresentRef.current = present;
		}
	}, [present, send]);
	useLayoutEffect2(() => {
		if (node) {
			let timeoutId;
			const ownerWindow = node.ownerDocument.defaultView ?? window;
			const handleAnimationEnd = /* @__PURE__ */ __name$18((event) => {
				const isCurrentAnimation = getAnimationName(stylesRef.current).includes(CSS.escape(event.animationName));
				if (event.target === node && isCurrentAnimation) {
					send("ANIMATION_END");
					if (!prevPresentRef.current) {
						const currentFillMode = node.style.animationFillMode;
						node.style.animationFillMode = "forwards";
						timeoutId = ownerWindow.setTimeout(() => {
							if (node.style.animationFillMode === "forwards") node.style.animationFillMode = currentFillMode;
						});
					}
				}
			}, "handleAnimationEnd");
			const handleAnimationStart = /* @__PURE__ */ __name$18((event) => {
				if (event.target === node) prevAnimationNameRef.current = getAnimationName(stylesRef.current);
			}, "handleAnimationStart");
			node.addEventListener("animationstart", handleAnimationStart);
			node.addEventListener("animationcancel", handleAnimationEnd);
			node.addEventListener("animationend", handleAnimationEnd);
			return () => {
				ownerWindow.clearTimeout(timeoutId);
				node.removeEventListener("animationstart", handleAnimationStart);
				node.removeEventListener("animationcancel", handleAnimationEnd);
				node.removeEventListener("animationend", handleAnimationEnd);
			};
		} else send("ANIMATION_END");
	}, [node, send]);
	return {
		isPresent: ["mounted", "unmountSuspended"].includes(state),
		ref: import_react.useCallback((node2) => {
			if (node2) {
				const styles = getComputedStyle(node2);
				stylesRef.current = styles;
				mountAnimationNameRef.current = getAnimationName(styles);
			} else stylesRef.current = null;
			setNode(node2);
		}, [])
	};
}
__name$18(usePresence, "usePresence");
function setRef$5(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$18(setRef$5, "setRef");
function useStableComposedRefs(...refs) {
	const refsRef = import_react.useRef(refs);
	refsRef.current = refs;
	return import_react.useCallback((node) => {
		const currentRefs = refsRef.current;
		let hasCleanup = false;
		const cleanups = currentRefs.map((ref) => {
			const cleanup = setRef$5(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef$5(currentRefs[i], null);
			}
		};
	}, []);
}
__name$18(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
	return styles?.animationName || "none";
}
__name$18(getAnimationName, "getAnimationName");
function getElementRef$2(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$18(getElementRef$2, "getElementRef");
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var __defProp$17 = Object.defineProperty;
var __name$17 = (target, value) => __defProp$17(target, "name", {
	value,
	configurable: true
});
var count = 0;
var guards = null;
function FocusGuards(props) {
	useFocusGuards();
	return props.children;
}
__name$17(FocusGuards, "FocusGuards");
function useFocusGuards() {
	import_react.useEffect(() => {
		if (!guards) guards = {
			start: createFocusGuard(),
			end: createFocusGuard()
		};
		const { start, end } = guards;
		if (document.body.firstElementChild !== start) document.body.insertAdjacentElement("afterbegin", start);
		if (document.body.lastElementChild !== end) document.body.insertAdjacentElement("beforeend", end);
		count++;
		return () => {
			if (count === 1) {
				guards?.start.remove();
				guards?.end.remove();
				guards = null;
			}
			count = Math.max(0, count - 1);
		};
	}, []);
}
__name$17(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
	const element = document.createElement("span");
	element.setAttribute("data-radix-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
__name$17(createFocusGuard, "createFocusGuard");
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
var __assign = function() {
	__assign = Object.assign || function __assign(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
/**
* Name of a CSS variable containing the amount of "hidden" scrollbar
* ! might be undefined ! use will fallback!
*/
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
/**
* Assigns a value for a given ref, no matter of the ref format
* @param {RefObject} ref - a callback function or ref object
* @param value - a new value
*
* @see https://github.com/theKashey/use-callback-ref#assignref
* @example
* const refObject = useRef();
* const refFn = (ref) => {....}
*
* assignRef(refObject, "refValue");
* assignRef(refFn, "refValue");
*/
function assignRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
	return ref;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
/**
* creates a MutableRef with ref change callback
* @param initialValue - initial ref value
* @param {Function} callback - a callback to run when value changes
*
* @example
* const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
* ref.current = 1;
* // prints 0 -> 1
*
* @see https://reactjs.org/docs/hooks-reference.html#useref
* @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
* @returns {MutableRefObject}
*/
function useCallbackRef(initialValue, callback) {
	var ref = (0, import_react.useState)(function() {
		return {
			value: initialValue,
			callback,
			facade: {
				get current() {
					return ref.value;
				},
				set current(value) {
					var last = ref.value;
					if (last !== value) {
						ref.value = value;
						ref.callback(value, last);
					}
				}
			}
		};
	})[0];
	ref.callback = callback;
	return ref.facade;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
/**
* Merges two or more refs together providing a single interface to set their value
* @param {RefObject|Ref} refs
* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
*
* @see {@link mergeRefs} a version without buit-in memoization
* @see https://github.com/theKashey/use-callback-ref#usemergerefs
* @example
* const Component = React.forwardRef((props, ref) => {
*   const ownRef = useRef();
*   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
*   return <div ref={domRef}>...</div>
* }
*/
function useMergeRefs(refs, defaultValue) {
	var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
		return refs.forEach(function(ref) {
			return assignRef(ref, newValue);
		});
	});
	useIsomorphicLayoutEffect(function() {
		var oldValue = currentValues.get(callbackRef);
		if (oldValue) {
			var prevRefs_1 = new Set(oldValue);
			var nextRefs_1 = new Set(refs);
			var current_1 = callbackRef.current;
			prevRefs_1.forEach(function(ref) {
				if (!nextRefs_1.has(ref)) assignRef(ref, null);
			});
			nextRefs_1.forEach(function(ref) {
				if (!prevRefs_1.has(ref)) assignRef(ref, current_1);
			});
		}
		currentValues.set(callbackRef, refs);
	}, [refs]);
	return callbackRef;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
	return a;
}
function innerCreateMedium(defaults, middleware) {
	if (middleware === void 0) middleware = ItoI;
	var buffer = [];
	var assigned = false;
	return {
		read: function() {
			if (assigned) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			if (buffer.length) return buffer[buffer.length - 1];
			return defaults;
		},
		useMedium: function(data) {
			var item = middleware(data, assigned);
			buffer.push(item);
			return function() {
				buffer = buffer.filter(function(x) {
					return x !== item;
				});
			};
		},
		assignSyncMedium: function(cb) {
			assigned = true;
			while (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
			}
			buffer = {
				push: function(x) {
					return cb(x);
				},
				filter: function() {
					return buffer;
				}
			};
		},
		assignMedium: function(cb) {
			assigned = true;
			var pendingQueue = [];
			if (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
				pendingQueue = buffer;
			}
			var executeQueue = function() {
				var cbs = pendingQueue;
				pendingQueue = [];
				cbs.forEach(cb);
			};
			var cycle = function() {
				return Promise.resolve().then(executeQueue);
			};
			cycle();
			buffer = {
				push: function(x) {
					pendingQueue.push(x);
					cycle();
				},
				filter: function(filter) {
					pendingQueue = pendingQueue.filter(filter);
					return buffer;
				}
			};
		}
	};
}
function createSidecarMedium(options) {
	if (options === void 0) options = {};
	var medium = innerCreateMedium(null);
	medium.options = __assign({
		async: true,
		ssr: false
	}, options);
	return medium;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var SideCar = function(_a) {
	var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
	if (!sideCar) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
	var Target = sideCar.read();
	if (!Target) throw new Error("Sidecar medium not found");
	return import_react.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
	medium.useMedium(exported);
	return SideCar;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {};
/**
* Removes scrollbar from the page and contain the scroll within the Lock
*/
var RemoveScroll = import_react.forwardRef(function(props, parentRef) {
	var ref = import_react.useRef(null);
	var _a = import_react.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), callbacks = _a[0], setCallbacks = _a[1];
	var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]);
	var SideCar = sideCar;
	var containerRef = useMergeRefs([ref, parentRef]);
	var containerProps = __assign(__assign({}, rest), callbacks);
	return import_react.createElement(import_react.Fragment, null, enabled && import_react.createElement(SideCar, {
		sideCar: effectCar,
		removeScrollBar,
		shards,
		noRelative,
		noIsolation,
		inert,
		setCallbacks,
		allowPinchZoom: !!allowPinchZoom,
		lockRef: ref,
		gapMode
	}), forwardProps ? import_react.cloneElement(import_react.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : import_react.createElement(Container, __assign({}, containerProps, {
		className,
		ref: containerRef
	}), children));
});
RemoveScroll.defaultProps = {
	enabled: true,
	removeScrollBar: true,
	inert: false
};
RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
	if (currentNonce) return currentNonce;
	if (typeof __webpack_nonce__ !== "undefined") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
	if (!document) return null;
	var tag = document.createElement("style");
	tag.type = "text/css";
	var nonce = getNonce();
	if (nonce) tag.setAttribute("nonce", nonce);
	return tag;
}
function injectStyles(tag, css) {
	if (tag.styleSheet) tag.styleSheet.cssText = css;
	else tag.appendChild(document.createTextNode(css));
}
function insertStyleTag(tag) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(tag);
}
var stylesheetSingleton = function() {
	var counter = 0;
	var stylesheet = null;
	return {
		add: function(style) {
			if (counter == 0) {
				if (stylesheet = makeStyleTag()) {
					injectStyles(stylesheet, style);
					insertStyleTag(stylesheet);
				}
			}
			counter++;
		},
		remove: function() {
			counter--;
			if (!counter && stylesheet) {
				stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
				stylesheet = null;
			}
		}
	};
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/hook.js
/**
* creates a hook to control style singleton
* @see {@link styleSingleton} for a safer component version
* @example
* ```tsx
* const useStyle = styleHookSingleton();
* ///
* useStyle('body { overflow: hidden}');
*/
var styleHookSingleton = function() {
	var sheet = stylesheetSingleton();
	return function(styles, isDynamic) {
		import_react.useEffect(function() {
			sheet.add(styles);
			return function() {
				sheet.remove();
			};
		}, [styles && isDynamic]);
	};
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/component.js
/**
* create a Component to add styles on demand
* - styles are added when first instance is mounted
* - styles are removed when the last instance is unmounted
* - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
*/
var styleSingleton = function() {
	var useStyle = styleHookSingleton();
	var Sheet = function(_a) {
		var styles = _a.styles, dynamic = _a.dynamic;
		useStyle(styles, dynamic);
		return null;
	};
	return Sheet;
};
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
};
var parse = function(x) {
	return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
	var cs = window.getComputedStyle(document.body);
	var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
	var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
	var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(left),
		parse(top),
		parse(right)
	];
};
var getGapWidth = function(gapMode) {
	if (gapMode === void 0) gapMode = "margin";
	if (typeof window === "undefined") return zeroGap;
	var offsets = getOffset(gapMode);
	var documentWidth = document.documentElement.clientWidth;
	var windowWidth = window.innerWidth;
	return {
		left: offsets[0],
		top: offsets[1],
		right: offsets[2],
		gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
	};
};
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
	var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
	if (gapMode === void 0) gapMode = "margin";
	return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
		allowRelative && "position: relative ".concat(important, ";"),
		gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
		gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
	].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
	var counter = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
	import_react.useEffect(function() {
		document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
		return function() {
			var newCounter = getCurrentUseCounter() - 1;
			if (newCounter <= 0) document.body.removeAttribute(lockAttribute);
			else document.body.setAttribute(lockAttribute, newCounter.toString());
		};
	}, []);
};
/**
* Removes page scrollbar and blocks page scroll when mounted
*/
var RemoveScrollBar = function(_a) {
	var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
	useLockAttribute();
	var gap = import_react.useMemo(function() {
		return getGapWidth(gapMode);
	}, [gapMode]);
	return import_react.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		passiveSupported = true;
		return true;
	} });
	window.addEventListener("test", options, options);
	window.removeEventListener("test", options, options);
} catch (err) {
	passiveSupported = false;
}
var nonPassive = passiveSupported ? { passive: false } : false;
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
	return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
	if (!(node instanceof Element)) return false;
	var styles = window.getComputedStyle(node);
	return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
};
var elementCouldBeVScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
	var ownerDocument = node.ownerDocument;
	var current = node;
	do {
		if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) current = current.host;
		if (elementCouldBeScrolled(axis, current)) {
			var _a = getScrollVariables(axis, current);
			if (_a[1] > _a[2]) return true;
		}
		current = current.parentNode;
	} while (current && current !== ownerDocument.body);
	return false;
};
var getVScrollVariables = function(_a) {
	return [
		_a.scrollTop,
		_a.scrollHeight,
		_a.clientHeight
	];
};
var getHScrollVariables = function(_a) {
	return [
		_a.scrollLeft,
		_a.scrollWidth,
		_a.clientWidth
	];
};
var elementCouldBeScrolled = function(axis, node) {
	return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
	return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
	/**
	* If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
	* and then increasingly negative as you scroll towards the end of the content.
	* @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
	*/
	return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
	var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
	var delta = directionFactor * sourceDelta;
	var target = event.target;
	var targetInLock = endTarget.contains(target);
	var shouldCancelScroll = false;
	var isDeltaPositive = delta > 0;
	var availableScroll = 0;
	var availableScrollTop = 0;
	do {
		if (!target) break;
		var _a = getScrollVariables(axis, target), position = _a[0];
		var elementScroll = _a[1] - _a[2] - directionFactor * position;
		if (position || elementScroll) {
			if (elementCouldBeScrolled(axis, target)) {
				availableScroll += elementScroll;
				availableScrollTop += position;
			}
		}
		var parent_1 = target.parentNode;
		target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
	} while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
	if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) shouldCancelScroll = true;
	else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) shouldCancelScroll = true;
	return shouldCancelScroll;
};
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
	return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
	return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
	return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
	return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
	return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
	var shouldPreventQueue = import_react.useRef([]);
	var touchStartRef = import_react.useRef([0, 0]);
	var activeAxis = import_react.useRef();
	var id = import_react.useState(idCounter++)[0];
	var Style = import_react.useState(styleSingleton)[0];
	var lastProps = import_react.useRef(props);
	import_react.useEffect(function() {
		lastProps.current = props;
	}, [props]);
	import_react.useEffect(function() {
		if (props.inert) {
			document.body.classList.add("block-interactivity-".concat(id));
			var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
			allow_1.forEach(function(el) {
				return el.classList.add("allow-interactivity-".concat(id));
			});
			return function() {
				document.body.classList.remove("block-interactivity-".concat(id));
				allow_1.forEach(function(el) {
					return el.classList.remove("allow-interactivity-".concat(id));
				});
			};
		}
	}, [
		props.inert,
		props.lockRef.current,
		props.shards
	]);
	var shouldCancelEvent = import_react.useCallback(function(event, parent) {
		if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) return !lastProps.current.allowPinchZoom;
		var touch = getTouchXY(event);
		var touchStart = touchStartRef.current;
		var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
		var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
		var currentAxis;
		var target = event.target;
		var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
		if ("touches" in event && moveDirection === "h" && target.type === "range") return false;
		var selection = window.getSelection();
		var anchorNode = selection && selection.anchorNode;
		if (anchorNode ? anchorNode === target || anchorNode.contains(target) : false) return false;
		var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		if (!canBeScrolledInMainDirection) return true;
		if (canBeScrolledInMainDirection) currentAxis = moveDirection;
		else {
			currentAxis = moveDirection === "v" ? "h" : "v";
			canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		}
		if (!canBeScrolledInMainDirection) return false;
		if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) activeAxis.current = currentAxis;
		if (!currentAxis) return true;
		var cancelingAxis = activeAxis.current || currentAxis;
		return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
	}, []);
	var shouldPrevent = import_react.useCallback(function(_event) {
		var event = _event;
		if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) return;
		var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
		var sourceEvent = shouldPreventQueue.current.filter(function(e) {
			return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
		})[0];
		if (sourceEvent && sourceEvent.should) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!sourceEvent) {
			var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
				return node.contains(event.target);
			});
			if (shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation) {
				if (event.cancelable) event.preventDefault();
			}
		}
	}, []);
	var shouldCancel = import_react.useCallback(function(name, delta, target, should) {
		var event = {
			name,
			delta,
			target,
			should,
			shadowParent: getOutermostShadowParent(target)
		};
		shouldPreventQueue.current.push(event);
		setTimeout(function() {
			shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
				return e !== event;
			});
		}, 1);
	}, []);
	var scrollTouchStart = import_react.useCallback(function(event) {
		touchStartRef.current = getTouchXY(event);
		activeAxis.current = void 0;
	}, []);
	var scrollWheel = import_react.useCallback(function(event) {
		shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	var scrollTouchMove = import_react.useCallback(function(event) {
		shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	import_react.useEffect(function() {
		lockStack.push(Style);
		props.setCallbacks({
			onScrollCapture: scrollWheel,
			onWheelCapture: scrollWheel,
			onTouchMoveCapture: scrollTouchMove
		});
		document.addEventListener("wheel", shouldPrevent, nonPassive);
		document.addEventListener("touchmove", shouldPrevent, nonPassive);
		document.addEventListener("touchstart", scrollTouchStart, nonPassive);
		return function() {
			lockStack = lockStack.filter(function(inst) {
				return inst !== Style;
			});
			document.removeEventListener("wheel", shouldPrevent, nonPassive);
			document.removeEventListener("touchmove", shouldPrevent, nonPassive);
			document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
		};
	}, []);
	var removeScrollBar = props.removeScrollBar, inert = props.inert;
	return import_react.createElement(import_react.Fragment, null, inert ? import_react.createElement(Style, { styles: generateStyle(id) }) : null, removeScrollBar ? import_react.createElement(RemoveScrollBar, {
		noRelative: props.noRelative,
		gapMode: props.gapMode
	}) : null);
}
function getOutermostShadowParent(node) {
	var shadowParent = null;
	while (node !== null) {
		if (node instanceof ShadowRoot) {
			shadowParent = node.host;
			node = node.host;
		}
		node = node.parentNode;
	}
	return shadowParent;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = import_react.forwardRef(function(props, ref) {
	return import_react.createElement(RemoveScroll, __assign({}, props, {
		ref,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
//#endregion
//#region node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
	if (typeof document === "undefined") return null;
	return (Array.isArray(originalTarget) ? originalTarget[0] : originalTarget).ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
	return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
	return targets.map(function(target) {
		if (parent.contains(target)) return target;
		var correctedTarget = unwrapHost(target);
		if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
		console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
		return null;
	}).filter(function(x) {
		return Boolean(x);
	});
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @param {String} [controlAttribute] - html Attribute to control
* @return {Undo} undo command
*/
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
	var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	if (!markerMap[markerName]) markerMap[markerName] = /* @__PURE__ */ new WeakMap();
	var markerCounter = markerMap[markerName];
	var hiddenNodes = [];
	var elementsToKeep = /* @__PURE__ */ new Set();
	var elementsToStop = new Set(targets);
	var keep = function(el) {
		if (!el || elementsToKeep.has(el)) return;
		elementsToKeep.add(el);
		keep(el.parentNode);
	};
	targets.forEach(keep);
	var deep = function(parent) {
		if (!parent || elementsToStop.has(parent)) return;
		Array.prototype.forEach.call(parent.children, function(node) {
			if (elementsToKeep.has(node)) deep(node);
			else try {
				var attr = node.getAttribute(controlAttribute);
				var alreadyHidden = attr !== null && attr !== "false";
				var counterValue = (counterMap.get(node) || 0) + 1;
				var markerValue = (markerCounter.get(node) || 0) + 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				hiddenNodes.push(node);
				if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
				if (markerValue === 1) node.setAttribute(markerName, "true");
				if (!alreadyHidden) node.setAttribute(controlAttribute, "true");
			} catch (e) {
				console.error("aria-hidden: cannot operate on ", node, e);
			}
		});
	};
	deep(parentNode);
	elementsToKeep.clear();
	lockCount++;
	return function() {
		hiddenNodes.forEach(function(node) {
			var counterValue = counterMap.get(node) - 1;
			var markerValue = markerCounter.get(node) - 1;
			counterMap.set(node, counterValue);
			markerCounter.set(node, markerValue);
			if (!counterValue) {
				if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
				uncontrolledNodes.delete(node);
			}
			if (!markerValue) node.removeAttribute(markerName);
		});
		lockCount--;
		if (!lockCount) {
			counterMap = /* @__PURE__ */ new WeakMap();
			counterMap = /* @__PURE__ */ new WeakMap();
			uncontrolledNodes = /* @__PURE__ */ new WeakMap();
			markerMap = {};
		}
	};
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @return {Undo} undo command
*/
var hideOthers = function(originalTarget, parentNode, markerName) {
	if (markerName === void 0) markerName = "data-aria-hidden";
	var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	var activeParentNode = parentNode || getDefaultParent(originalTarget);
	if (!activeParentNode) return function() {
		return null;
	};
	targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
	return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
//#endregion
//#region node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-slot/dist/index.mjs
var __defProp$16 = Object.defineProperty;
var __name$16 = (target, value) => __defProp$16(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createSlot$1(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent$1(children) && typeof use$1 === "function") children = use$1(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable$1(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent$1(child) && typeof use$1 === "function") child = use$1(child._payload);
				slottableElement = getSlottableElementFromSlottable$1(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$1(slottableElement) : void 0;
		const composedRef = useComposedRefs$8(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError$1(ownerName) : createSlotError$1(ownerName));
			return children;
		}
		const mergedProps = mergeProps$1(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$16(createSlot$1, "createSlot");
var SLOTTABLE_IDENTIFIER$1 = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable$1(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$16((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER$1;
	return Slottable2;
}
__name$16(createSlottable$1, "createSlottable");
var getSlottableElementFromSlottable$1 = /* @__PURE__ */ __name$16((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps$1(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$16(mergeProps$1, "mergeProps");
function getElementRef$1(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$16(getElementRef$1, "getElementRef");
function isSlottable$1(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
__name$16(isSlottable$1, "isSlottable");
var REACT_LAZY_TYPE$1 = Symbol.for("react.lazy");
function isLazyComponent$1(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE$1 && "_payload" in element && isPromiseLike$1(element._payload);
}
__name$16(isLazyComponent$1, "isLazyComponent");
function isPromiseLike$1(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$16(isPromiseLike$1, "isPromiseLike");
var createSlotError$1 = /* @__PURE__ */ __name$16((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError$1 = /* @__PURE__ */ __name$16((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use$1 = import_react[" use ".trim().toString()];
//#endregion
//#region node_modules/@radix-ui/react-dialog/dist/index.mjs
var __defProp$15 = Object.defineProperty;
var __name$15 = (target, value) => __defProp$15(target, "name", {
	value,
	configurable: true
});
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = /* @__PURE__ */ createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog$1 = /* @__PURE__ */ __name$15((props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = import_react.useRef(null);
	const contentRef = import_react.useRef(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	const [titleCount, setTitleCount] = import_react.useState(0);
	const [descriptionCount, setDescriptionCount] = import_react.useState(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		titlePresent: titleCount > 0,
		descriptionPresent: descriptionCount > 0,
		setTitleCount,
		setDescriptionCount,
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		children
	});
}, "Dialog");
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 });
var DialogPortal$1 = /* @__PURE__ */ __name$15((props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopeDialog,
		forceMount,
		children: import_react.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children: child
			})
		}))
	});
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogOverlay2(props, forwardedRef) {
	const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
}, "DialogOverlay"));
var Slot = /* @__PURE__ */ createSlot$1("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogOverlayImpl2(props, forwardedRef) {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
	const composedRefs = useComposedRefs$8(forwardedRef, useDismissableLayerSurface());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
		as: Slot,
		allowPinchZoom: true,
		shards: [context.contentRef],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState$3(context.open),
			...overlayProps,
			ref: composedRefs,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
}, "DialogOverlayImpl"));
var CONTENT_NAME$2 = "DialogContent";
var DialogContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogContent2(props, forwardedRef) {
	const portalContext = usePortalContext(CONTENT_NAME$2, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$2, props.__scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
}, "DialogContent"));
var DialogContentModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogContentModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME$2, props.__scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs$8(forwardedRef, context.contentRef, contentRef);
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: context.open,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			event.preventDefault();
			context.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
	});
}, "DialogContentModal"));
var DialogContentNonModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogContentNonModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME$2, props.__scopeDialog);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
}, "DialogContentNonModal"));
var DialogContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogContentImpl2(props, forwardedRef) {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME$2, __scopeDialog);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: true,
		loop: true,
		trapped: trapFocus,
		onMountAutoFocus: onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			role: "dialog",
			id: context.contentId,
			"aria-describedby": context.descriptionPresent ? context.descriptionId : void 0,
			"aria-labelledby": context.titlePresent ? context.titleId : void 0,
			"data-state": getState$3(context.open),
			...contentProps,
			ref: forwardedRef,
			deferPointerDownOutside: true,
			onDismiss: () => context.onOpenChange(false)
		})
	}) });
}, "DialogContentImpl"));
var TITLE_NAME = "DialogTitle";
var DialogTitle$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogTitle2(props, forwardedRef) {
	const { __scopeDialog, ...titleProps } = props;
	const context = useDialogContext(TITLE_NAME, __scopeDialog);
	const { setTitleCount } = context;
	useLayoutEffect2(() => {
		setTitleCount((count) => count + 1);
		return () => setTitleCount((count) => count - 1);
	}, [setTitleCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: context.titleId,
		...titleProps,
		ref: forwardedRef
	});
}, "DialogTitle"));
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogDescription2(props, forwardedRef) {
	const { __scopeDialog, ...descriptionProps } = props;
	const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
	const { setDescriptionCount } = context;
	useLayoutEffect2(() => {
		setDescriptionCount((count) => count + 1);
		return () => setDescriptionCount((count) => count - 1);
	}, [setDescriptionCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: context.descriptionId,
		...descriptionProps,
		ref: forwardedRef
	});
}, "DialogDescription"));
var CLOSE_NAME = "DialogClose";
var DialogClose = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$15(function DialogClose2(props, forwardedRef) {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
}, "DialogClose"));
function getState$3(open) {
	return open ? "open" : "closed";
}
__name$15(getState$3, "getState");
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function r(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
/**
* Concatenates two arrays faster than the array spread operator.
*/
var concatArrays = (array1, array2) => {
	const combinedArray = new Array(array1.length + array2.length);
	for (let i = 0; i < array1.length; i++) combinedArray[i] = array1[i];
	for (let i = 0; i < array2.length; i++) combinedArray[array1.length + i] = array2[i];
	return combinedArray;
};
var createClassValidatorObject = (classGroupId, validator) => ({
	classGroupId,
	validator
});
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
	nextPart,
	validators,
	classGroupId
});
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config) => {
	const classMap = createClassMap(config);
	const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
	const getClassGroupId = (className) => {
		if (className.startsWith("[") && className.endsWith("]")) return getGroupIdForArbitraryProperty(className);
		const classParts = className.split(CLASS_PART_SEPARATOR);
		return getGroupRecursive(classParts, classParts[0] === "" && classParts.length > 1 ? 1 : 0, classMap);
	};
	const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
		if (hasPostfixModifier) {
			const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
			const baseConflicts = conflictingClassGroups[classGroupId];
			if (modifierConflicts) {
				if (baseConflicts) return concatArrays(baseConflicts, modifierConflicts);
				return modifierConflicts;
			}
			return baseConflicts || EMPTY_CONFLICTS;
		}
		return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
	};
	return {
		getClassGroupId,
		getConflictingClassGroupIds
	};
};
var getGroupRecursive = (classParts, startIndex, classPartObject) => {
	if (classParts.length - startIndex === 0) return classPartObject.classGroupId;
	const currentClassPart = classParts[startIndex];
	const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
	if (nextClassPartObject) {
		const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
		if (result) return result;
	}
	const validators = classPartObject.validators;
	if (validators === null) return;
	const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
	const validatorsLength = validators.length;
	for (let i = 0; i < validatorsLength; i++) {
		const validatorObj = validators[i];
		if (validatorObj.validator(classRest)) return validatorObj.classGroupId;
	}
};
/**
* Get the class group ID for an arbitrary property.
*
* @param className - The class name to get the group ID for. Is expected to be string starting with `[` and ending with `]`.
*/
var getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	const content = className.slice(1, -1);
	const colonIndex = content.indexOf(":");
	const property = content.slice(0, colonIndex);
	return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
})();
/**
* Exported for testing only
*/
var createClassMap = (config) => {
	const { theme, classGroups } = config;
	return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme) => {
	const classMap = createClassPartObject();
	for (const classGroupId in classGroups) {
		const group = classGroups[classGroupId];
		processClassesRecursively(group, classMap, classGroupId, theme);
	}
	return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
	const len = classGroup.length;
	for (let i = 0; i < len; i++) {
		const classDefinition = classGroup[i];
		processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
	}
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (typeof classDefinition === "string") {
		processStringDefinition(classDefinition, classPartObject, classGroupId);
		return;
	}
	if (typeof classDefinition === "function") {
		processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
		return;
	}
	processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
	const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
	classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (isThemeGetter(classDefinition)) {
		processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
		return;
	}
	if (classPartObject.validators === null) classPartObject.validators = [];
	classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	const entries = Object.entries(classDefinition);
	const len = entries.length;
	for (let i = 0; i < len; i++) {
		const [key, value] = entries[i];
		processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
	}
};
var getPart = (classPartObject, path) => {
	let current = classPartObject;
	const parts = path.split(CLASS_PART_SEPARATOR);
	const len = parts.length;
	for (let i = 0; i < len; i++) {
		const part = parts[i];
		let next = current.nextPart.get(part);
		if (!next) {
			next = createClassPartObject();
			current.nextPart.set(part, next);
		}
		current = next;
	}
	return current;
};
var isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
var createLruCache = (maxCacheSize) => {
	if (maxCacheSize < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let cacheSize = 0;
	let cache = Object.create(null);
	let previousCache = Object.create(null);
	const update = (key, value) => {
		cache[key] = value;
		cacheSize++;
		if (cacheSize > maxCacheSize) {
			cacheSize = 0;
			previousCache = cache;
			cache = Object.create(null);
		}
	};
	return {
		get(key) {
			let value = cache[key];
			if (value !== void 0) return value;
			if ((value = previousCache[key]) !== void 0) {
				update(key, value);
				return value;
			}
		},
		set(key, value) {
			if (key in cache) cache[key] = value;
			else update(key, value);
		}
	};
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var EMPTY_MODIFIERS = [];
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
	modifiers,
	hasImportantModifier,
	baseClassName,
	maybePostfixModifierPosition,
	isExternal
});
var createParseClassName = (config) => {
	const { prefix, experimentalParseClassName } = config;
	/**
	* Parse class name into parts.
	*
	* Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
	* @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
	*/
	let parseClassName = (className) => {
		const modifiers = [];
		let bracketDepth = 0;
		let parenDepth = 0;
		let modifierStart = 0;
		let postfixModifierPosition;
		const len = className.length;
		for (let index = 0; index < len; index++) {
			const currentCharacter = className[index];
			if (bracketDepth === 0 && parenDepth === 0) {
				if (currentCharacter === MODIFIER_SEPARATOR) {
					modifiers.push(className.slice(modifierStart, index));
					modifierStart = index + 1;
					continue;
				}
				if (currentCharacter === "/") {
					postfixModifierPosition = index;
					continue;
				}
			}
			if (currentCharacter === "[") bracketDepth++;
			else if (currentCharacter === "]") bracketDepth--;
			else if (currentCharacter === "(") parenDepth++;
			else if (currentCharacter === ")") parenDepth--;
		}
		const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
		let baseClassName = baseClassNameWithImportantModifier;
		let hasImportantModifier = false;
		if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
			hasImportantModifier = true;
		} else if (baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(1);
			hasImportantModifier = true;
		}
		const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
		return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
	};
	if (prefix) {
		const fullPrefix = prefix + MODIFIER_SEPARATOR;
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
	}
	if (experimentalParseClassName) {
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => experimentalParseClassName({
			className,
			parseClassName: parseClassNameOriginal
		});
	}
	return parseClassName;
};
/**
* Sorts modifiers according to following schema:
* - Predefined modifiers are sorted alphabetically
* - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
*/
var createSortModifiers = (config) => {
	const modifierWeights = /* @__PURE__ */ new Map();
	config.orderSensitiveModifiers.forEach((mod, index) => {
		modifierWeights.set(mod, 1e6 + index);
	});
	return (modifiers) => {
		const result = [];
		let currentSegment = [];
		for (let i = 0; i < modifiers.length; i++) {
			const modifier = modifiers[i];
			const isArbitrary = modifier[0] === "[";
			const isOrderSensitive = modifierWeights.has(modifier);
			if (isArbitrary || isOrderSensitive) {
				if (currentSegment.length > 0) {
					currentSegment.sort();
					result.push(...currentSegment);
					currentSegment = [];
				}
				result.push(modifier);
			} else currentSegment.push(modifier);
		}
		if (currentSegment.length > 0) {
			currentSegment.sort();
			result.push(...currentSegment);
		}
		return result;
	};
};
var createConfigUtils = (config) => ({
	cache: createLruCache(config.cacheSize),
	parseClassName: createParseClassName(config),
	sortModifiers: createSortModifiers(config),
	postfixLookupClassGroupIds: createPostfixLookupClassGroupIds(config),
	...createClassGroupUtils(config)
});
var createPostfixLookupClassGroupIds = (config) => {
	const lookup = Object.create(null);
	const classGroupIds = config.postfixLookupClassGroups;
	if (classGroupIds) for (let i = 0; i < classGroupIds.length; i++) lookup[classGroupIds[i]] = true;
	return lookup;
};
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
	const { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers, postfixLookupClassGroupIds } = configUtils;
	/**
	* Set of classGroupIds in following format:
	* `{importantModifier}{variantModifiers}{classGroupId}`
	* @example 'float'
	* @example 'hover:focus:bg-color'
	* @example 'md:!pr'
	*/
	const classGroupsInConflict = [];
	const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
	let result = "";
	for (let index = classNames.length - 1; index >= 0; index -= 1) {
		const originalClassName = classNames[index];
		const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
		if (isExternal) {
			result = originalClassName + (result.length > 0 ? " " + result : result);
			continue;
		}
		let hasPostfixModifier = !!maybePostfixModifierPosition;
		let classGroupId;
		if (hasPostfixModifier) {
			classGroupId = getClassGroupId(baseClassName.substring(0, maybePostfixModifierPosition));
			const classGroupIdWithPostfix = classGroupId && postfixLookupClassGroupIds[classGroupId] ? getClassGroupId(baseClassName) : void 0;
			if (classGroupIdWithPostfix && classGroupIdWithPostfix !== classGroupId) {
				classGroupId = classGroupIdWithPostfix;
				hasPostfixModifier = false;
			}
		} else classGroupId = getClassGroupId(baseClassName);
		if (!classGroupId) {
			if (!hasPostfixModifier) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			classGroupId = getClassGroupId(baseClassName);
			if (!classGroupId) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			hasPostfixModifier = false;
		}
		const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
		const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
		const classId = modifierId + classGroupId;
		if (classGroupsInConflict.indexOf(classId) > -1) continue;
		classGroupsInConflict.push(classId);
		const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
		for (let i = 0; i < conflictGroups.length; ++i) {
			const group = conflictGroups[i];
			classGroupsInConflict.push(modifierId + group);
		}
		result = originalClassName + (result.length > 0 ? " " + result : result);
	}
	return result;
};
/**
* The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
*
* Specifically:
* - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
* - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
*
* Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
*/
var twJoin = (...classLists) => {
	let index = 0;
	let argument;
	let resolvedValue;
	let string = "";
	while (index < classLists.length) if (argument = classLists[index++]) {
		if (resolvedValue = toValue(argument)) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var toValue = (mix) => {
	if (typeof mix === "string") return mix;
	let resolvedValue;
	let string = "";
	for (let k = 0; k < mix.length; k++) if (mix[k]) {
		if (resolvedValue = toValue(mix[k])) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
	let configUtils;
	let cacheGet;
	let cacheSet;
	let functionToCall;
	const initTailwindMerge = (classList) => {
		configUtils = createConfigUtils(createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst()));
		cacheGet = configUtils.cache.get;
		cacheSet = configUtils.cache.set;
		functionToCall = tailwindMerge;
		return tailwindMerge(classList);
	};
	const tailwindMerge = (classList) => {
		const cachedResult = cacheGet(classList);
		if (cachedResult) return cachedResult;
		const result = mergeClassList(classList, configUtils);
		cacheSet(classList, result);
		return result;
	};
	functionToCall = initTailwindMerge;
	return (...args) => functionToCall(twJoin(...args));
};
var fallbackThemeArr = [];
var fromTheme = (key) => {
	const themeGetter = (theme) => theme[key] || fallbackThemeArr;
	themeGetter.isThemeGetter = true;
	return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex.test(value);
var isNumber = (value) => !!value && !Number.isNaN(Number(value));
var isInteger = (value) => !!value && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isNamedContainerQuery = (value) => value.startsWith("@container") && (value[10] === "/" && value[11] !== void 0 || value[11] === "s" && value[16] !== void 0 && value.startsWith("-size/", 10) || value[11] === "n" && value[18] !== void 0 && value.startsWith("-normal/", 10));
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
	const result = arbitraryValueRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return testValue(result[2]);
	}
	return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
	const result = arbitraryVariableRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return shouldMatchNoLabel;
	}
	return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelWeight = (label) => label === "number" || label === "weight";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
	/**
	* Theme getters for theme variable namespaces
	* @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
	*/
	const themeColor = fromTheme("color");
	const themeFont = fromTheme("font");
	const themeText = fromTheme("text");
	const themeFontWeight = fromTheme("font-weight");
	const themeTracking = fromTheme("tracking");
	const themeLeading = fromTheme("leading");
	const themeBreakpoint = fromTheme("breakpoint");
	const themeContainer = fromTheme("container");
	const themeSpacing = fromTheme("spacing");
	const themeRadius = fromTheme("radius");
	const themeShadow = fromTheme("shadow");
	const themeInsetShadow = fromTheme("inset-shadow");
	const themeTextShadow = fromTheme("text-shadow");
	const themeDropShadow = fromTheme("drop-shadow");
	const themeBlur = fromTheme("blur");
	const themePerspective = fromTheme("perspective");
	const themeAspect = fromTheme("aspect");
	const themeEase = fromTheme("ease");
	const themeAnimate = fromTheme("animate");
	/**
	* Helpers to avoid repeating the same scales
	*
	* We use functions that create a new array every time they're called instead of static arrays.
	* This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
	*/
	const scaleBreak = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	];
	const scalePosition = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	];
	const scalePositionWithArbitrary = () => [
		...scalePosition(),
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleOverflow = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	];
	const scaleOverscroll = () => [
		"auto",
		"contain",
		"none"
	];
	const scaleUnambiguousSpacing = () => [
		isArbitraryVariable,
		isArbitraryValue,
		themeSpacing
	];
	const scaleInset = () => [
		isFraction,
		"full",
		"auto",
		...scaleUnambiguousSpacing()
	];
	const scaleGridTemplateColsRows = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartAndEnd = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartOrEnd = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridAutoColsRows = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleAlignPrimaryAxis = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	];
	const scaleAlignSecondaryAxis = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	];
	const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
	const scaleSizing = () => [
		isFraction,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingInline = () => [
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingBlock = () => [
		isFraction,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleColor = () => [
		themeColor,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBgPosition = () => [
		...scalePosition(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleBgRepeat = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }];
	const scaleBgSize = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleGradientStopPosition = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleRadius = () => [
		"",
		"none",
		"full",
		themeRadius,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBorderWidth = () => [
		"",
		isNumber,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleLineStyle = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	];
	const scaleBlendMode = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	];
	const scaleMaskImagePosition = () => [
		isNumber,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	];
	const scaleBlur = () => [
		"",
		"none",
		themeBlur,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleRotate = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleScale = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleSkew = () => [
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleTranslate = () => [
		isFraction,
		"full",
		...scaleUnambiguousSpacing()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [isTshirtSize],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			/**
			* Aspect Ratio
			* @see https://tailwindcss.com/docs/aspect-ratio
			*/
			aspect: [{ aspect: [
				"auto",
				"square",
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				themeAspect
			] }],
			/**
			* Container
			* @see https://tailwindcss.com/docs/container
			* @deprecated since Tailwind CSS v4.0.0
			*/
			container: ["container"],
			/**
			* Container Type
			* @see https://tailwindcss.com/docs/responsive-design#container-queries
			*/
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Container Name
			* @see https://tailwindcss.com/docs/responsive-design#named-containers
			*/
			"container-named": [isNamedContainerQuery],
			/**
			* Columns
			* @see https://tailwindcss.com/docs/columns
			*/
			columns: [{ columns: [
				isNumber,
				isArbitraryValue,
				isArbitraryVariable,
				themeContainer
			] }],
			/**
			* Break After
			* @see https://tailwindcss.com/docs/break-after
			*/
			"break-after": [{ "break-after": scaleBreak() }],
			/**
			* Break Before
			* @see https://tailwindcss.com/docs/break-before
			*/
			"break-before": [{ "break-before": scaleBreak() }],
			/**
			* Break Inside
			* @see https://tailwindcss.com/docs/break-inside
			*/
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			/**
			* Box Decoration Break
			* @see https://tailwindcss.com/docs/box-decoration-break
			*/
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			/**
			* Box Sizing
			* @see https://tailwindcss.com/docs/box-sizing
			*/
			box: [{ box: ["border", "content"] }],
			/**
			* Display
			* @see https://tailwindcss.com/docs/display
			*/
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			/**
			* Screen Reader Only
			* @see https://tailwindcss.com/docs/display#screen-reader-only
			*/
			sr: ["sr-only", "not-sr-only"],
			/**
			* Floats
			* @see https://tailwindcss.com/docs/float
			*/
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			/**
			* Clear
			* @see https://tailwindcss.com/docs/clear
			*/
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			/**
			* Isolation
			* @see https://tailwindcss.com/docs/isolation
			*/
			isolation: ["isolate", "isolation-auto"],
			/**
			* Object Fit
			* @see https://tailwindcss.com/docs/object-fit
			*/
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			/**
			* Object Position
			* @see https://tailwindcss.com/docs/object-position
			*/
			"object-position": [{ object: scalePositionWithArbitrary() }],
			/**
			* Overflow
			* @see https://tailwindcss.com/docs/overflow
			*/
			overflow: [{ overflow: scaleOverflow() }],
			/**
			* Overflow X
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-x": [{ "overflow-x": scaleOverflow() }],
			/**
			* Overflow Y
			* @see https://tailwindcss.com/docs/overflow
			*/
			"overflow-y": [{ "overflow-y": scaleOverflow() }],
			/**
			* Overscroll Behavior
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			overscroll: [{ overscroll: scaleOverscroll() }],
			/**
			* Overscroll Behavior X
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-x": [{ "overscroll-x": scaleOverscroll() }],
			/**
			* Overscroll Behavior Y
			* @see https://tailwindcss.com/docs/overscroll-behavior
			*/
			"overscroll-y": [{ "overscroll-y": scaleOverscroll() }],
			/**
			* Position
			* @see https://tailwindcss.com/docs/position
			*/
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			/**
			* Inset
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			inset: [{ inset: scaleInset() }],
			/**
			* Inset Inline
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-x": [{ "inset-x": scaleInset() }],
			/**
			* Inset Block
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-y": [{ "inset-y": scaleInset() }],
			/**
			* Inset Inline Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-s` in next major release
			*/
			start: [{
				"inset-s": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				start: scaleInset()
			}],
			/**
			* Inset Inline End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			* @todo class group will be renamed to `inset-e` in next major release
			*/
			end: [{
				"inset-e": scaleInset(),
				/**
				* @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
				* @see https://github.com/tailwindlabs/tailwindcss/pull/19613
				*/
				end: scaleInset()
			}],
			/**
			* Inset Block Start
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-bs": [{ "inset-bs": scaleInset() }],
			/**
			* Inset Block End
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			"inset-be": [{ "inset-be": scaleInset() }],
			/**
			* Top
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			top: [{ top: scaleInset() }],
			/**
			* Right
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			right: [{ right: scaleInset() }],
			/**
			* Bottom
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			bottom: [{ bottom: scaleInset() }],
			/**
			* Left
			* @see https://tailwindcss.com/docs/top-right-bottom-left
			*/
			left: [{ left: scaleInset() }],
			/**
			* Visibility
			* @see https://tailwindcss.com/docs/visibility
			*/
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			/**
			* Z-Index
			* @see https://tailwindcss.com/docs/z-index
			*/
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Basis
			* @see https://tailwindcss.com/docs/flex-basis
			*/
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				themeContainer,
				...scaleUnambiguousSpacing()
			] }],
			/**
			* Flex Direction
			* @see https://tailwindcss.com/docs/flex-direction
			*/
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			/**
			* Flex Wrap
			* @see https://tailwindcss.com/docs/flex-wrap
			*/
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			/**
			* Flex
			* @see https://tailwindcss.com/docs/flex
			*/
			flex: [{ flex: [
				isNumber,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			/**
			* Flex Grow
			* @see https://tailwindcss.com/docs/flex-grow
			*/
			grow: [{ grow: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Flex Shrink
			* @see https://tailwindcss.com/docs/flex-shrink
			*/
			shrink: [{ shrink: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Order
			* @see https://tailwindcss.com/docs/order
			*/
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Grid Template Columns
			* @see https://tailwindcss.com/docs/grid-template-columns
			*/
			"grid-cols": [{ "grid-cols": scaleGridTemplateColsRows() }],
			/**
			* Grid Column Start / End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start-end": [{ col: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Column Start
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-start": [{ "col-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Column End
			* @see https://tailwindcss.com/docs/grid-column
			*/
			"col-end": [{ "col-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Template Rows
			* @see https://tailwindcss.com/docs/grid-template-rows
			*/
			"grid-rows": [{ "grid-rows": scaleGridTemplateColsRows() }],
			/**
			* Grid Row Start / End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start-end": [{ row: scaleGridColRowStartAndEnd() }],
			/**
			* Grid Row Start
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-start": [{ "row-start": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Row End
			* @see https://tailwindcss.com/docs/grid-row
			*/
			"row-end": [{ "row-end": scaleGridColRowStartOrEnd() }],
			/**
			* Grid Auto Flow
			* @see https://tailwindcss.com/docs/grid-auto-flow
			*/
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			/**
			* Grid Auto Columns
			* @see https://tailwindcss.com/docs/grid-auto-columns
			*/
			"auto-cols": [{ "auto-cols": scaleGridAutoColsRows() }],
			/**
			* Grid Auto Rows
			* @see https://tailwindcss.com/docs/grid-auto-rows
			*/
			"auto-rows": [{ "auto-rows": scaleGridAutoColsRows() }],
			/**
			* Gap
			* @see https://tailwindcss.com/docs/gap
			*/
			gap: [{ gap: scaleUnambiguousSpacing() }],
			/**
			* Gap X
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-x": [{ "gap-x": scaleUnambiguousSpacing() }],
			/**
			* Gap Y
			* @see https://tailwindcss.com/docs/gap
			*/
			"gap-y": [{ "gap-y": scaleUnambiguousSpacing() }],
			/**
			* Justify Content
			* @see https://tailwindcss.com/docs/justify-content
			*/
			"justify-content": [{ justify: [...scaleAlignPrimaryAxis(), "normal"] }],
			/**
			* Justify Items
			* @see https://tailwindcss.com/docs/justify-items
			*/
			"justify-items": [{ "justify-items": [...scaleAlignSecondaryAxis(), "normal"] }],
			/**
			* Justify Self
			* @see https://tailwindcss.com/docs/justify-self
			*/
			"justify-self": [{ "justify-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Align Content
			* @see https://tailwindcss.com/docs/align-content
			*/
			"align-content": [{ content: ["normal", ...scaleAlignPrimaryAxis()] }],
			/**
			* Align Items
			* @see https://tailwindcss.com/docs/align-items
			*/
			"align-items": [{ items: [...scaleAlignSecondaryAxis(), { baseline: ["", "last"] }] }],
			/**
			* Align Self
			* @see https://tailwindcss.com/docs/align-self
			*/
			"align-self": [{ self: [
				"auto",
				...scaleAlignSecondaryAxis(),
				{ baseline: ["", "last"] }
			] }],
			/**
			* Place Content
			* @see https://tailwindcss.com/docs/place-content
			*/
			"place-content": [{ "place-content": scaleAlignPrimaryAxis() }],
			/**
			* Place Items
			* @see https://tailwindcss.com/docs/place-items
			*/
			"place-items": [{ "place-items": [...scaleAlignSecondaryAxis(), "baseline"] }],
			/**
			* Place Self
			* @see https://tailwindcss.com/docs/place-self
			*/
			"place-self": [{ "place-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			/**
			* Padding
			* @see https://tailwindcss.com/docs/padding
			*/
			p: [{ p: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline
			* @see https://tailwindcss.com/docs/padding
			*/
			px: [{ px: scaleUnambiguousSpacing() }],
			/**
			* Padding Block
			* @see https://tailwindcss.com/docs/padding
			*/
			py: [{ py: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline Start
			* @see https://tailwindcss.com/docs/padding
			*/
			ps: [{ ps: scaleUnambiguousSpacing() }],
			/**
			* Padding Inline End
			* @see https://tailwindcss.com/docs/padding
			*/
			pe: [{ pe: scaleUnambiguousSpacing() }],
			/**
			* Padding Block Start
			* @see https://tailwindcss.com/docs/padding
			*/
			pbs: [{ pbs: scaleUnambiguousSpacing() }],
			/**
			* Padding Block End
			* @see https://tailwindcss.com/docs/padding
			*/
			pbe: [{ pbe: scaleUnambiguousSpacing() }],
			/**
			* Padding Top
			* @see https://tailwindcss.com/docs/padding
			*/
			pt: [{ pt: scaleUnambiguousSpacing() }],
			/**
			* Padding Right
			* @see https://tailwindcss.com/docs/padding
			*/
			pr: [{ pr: scaleUnambiguousSpacing() }],
			/**
			* Padding Bottom
			* @see https://tailwindcss.com/docs/padding
			*/
			pb: [{ pb: scaleUnambiguousSpacing() }],
			/**
			* Padding Left
			* @see https://tailwindcss.com/docs/padding
			*/
			pl: [{ pl: scaleUnambiguousSpacing() }],
			/**
			* Margin
			* @see https://tailwindcss.com/docs/margin
			*/
			m: [{ m: scaleMargin() }],
			/**
			* Margin Inline
			* @see https://tailwindcss.com/docs/margin
			*/
			mx: [{ mx: scaleMargin() }],
			/**
			* Margin Block
			* @see https://tailwindcss.com/docs/margin
			*/
			my: [{ my: scaleMargin() }],
			/**
			* Margin Inline Start
			* @see https://tailwindcss.com/docs/margin
			*/
			ms: [{ ms: scaleMargin() }],
			/**
			* Margin Inline End
			* @see https://tailwindcss.com/docs/margin
			*/
			me: [{ me: scaleMargin() }],
			/**
			* Margin Block Start
			* @see https://tailwindcss.com/docs/margin
			*/
			mbs: [{ mbs: scaleMargin() }],
			/**
			* Margin Block End
			* @see https://tailwindcss.com/docs/margin
			*/
			mbe: [{ mbe: scaleMargin() }],
			/**
			* Margin Top
			* @see https://tailwindcss.com/docs/margin
			*/
			mt: [{ mt: scaleMargin() }],
			/**
			* Margin Right
			* @see https://tailwindcss.com/docs/margin
			*/
			mr: [{ mr: scaleMargin() }],
			/**
			* Margin Bottom
			* @see https://tailwindcss.com/docs/margin
			*/
			mb: [{ mb: scaleMargin() }],
			/**
			* Margin Left
			* @see https://tailwindcss.com/docs/margin
			*/
			ml: [{ ml: scaleMargin() }],
			/**
			* Space Between X
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x": [{ "space-x": scaleUnambiguousSpacing() }],
			/**
			* Space Between X Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-x-reverse": ["space-x-reverse"],
			/**
			* Space Between Y
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y": [{ "space-y": scaleUnambiguousSpacing() }],
			/**
			* Space Between Y Reverse
			* @see https://tailwindcss.com/docs/margin#adding-space-between-children
			*/
			"space-y-reverse": ["space-y-reverse"],
			/**
			* Size
			* @see https://tailwindcss.com/docs/width#setting-both-width-and-height
			*/
			size: [{ size: scaleSizing() }],
			/**
			* Inline Size
			* @see https://tailwindcss.com/docs/width
			*/
			"inline-size": [{ inline: ["auto", ...scaleSizingInline()] }],
			/**
			* Min-Inline Size
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-inline-size": [{ "min-inline": ["auto", ...scaleSizingInline()] }],
			/**
			* Max-Inline Size
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-inline-size": [{ "max-inline": ["none", ...scaleSizingInline()] }],
			/**
			* Block Size
			* @see https://tailwindcss.com/docs/height
			*/
			"block-size": [{ block: ["auto", ...scaleSizingBlock()] }],
			/**
			* Min-Block Size
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-block-size": [{ "min-block": ["auto", ...scaleSizingBlock()] }],
			/**
			* Max-Block Size
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-block-size": [{ "max-block": ["none", ...scaleSizingBlock()] }],
			/**
			* Width
			* @see https://tailwindcss.com/docs/width
			*/
			w: [{ w: [
				themeContainer,
				"screen",
				...scaleSizing()
			] }],
			/**
			* Min-Width
			* @see https://tailwindcss.com/docs/min-width
			*/
			"min-w": [{ "min-w": [
				themeContainer,
				"screen",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Width
			* @see https://tailwindcss.com/docs/max-width
			*/
			"max-w": [{ "max-w": [
				themeContainer,
				"screen",
				"none",
				"prose",
				{ screen: [themeBreakpoint] },
				...scaleSizing()
			] }],
			/**
			* Height
			* @see https://tailwindcss.com/docs/height
			*/
			h: [{ h: [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Min-Height
			* @see https://tailwindcss.com/docs/min-height
			*/
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...scaleSizing()
			] }],
			/**
			* Max-Height
			* @see https://tailwindcss.com/docs/max-height
			*/
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			/**
			* Font Size
			* @see https://tailwindcss.com/docs/font-size
			*/
			"font-size": [{ text: [
				"base",
				themeText,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Font Smoothing
			* @see https://tailwindcss.com/docs/font-smoothing
			*/
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			/**
			* Font Style
			* @see https://tailwindcss.com/docs/font-style
			*/
			"font-style": ["italic", "not-italic"],
			/**
			* Font Weight
			* @see https://tailwindcss.com/docs/font-weight
			*/
			"font-weight": [{ font: [
				themeFontWeight,
				isArbitraryVariableWeight,
				isArbitraryWeight
			] }],
			/**
			* Font Stretch
			* @see https://tailwindcss.com/docs/font-stretch
			*/
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				isPercent,
				isArbitraryValue
			] }],
			/**
			* Font Family
			* @see https://tailwindcss.com/docs/font-family
			*/
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryFamilyName,
				themeFont
			] }],
			/**
			* Font Feature Settings
			* @see https://tailwindcss.com/docs/font-feature-settings
			*/
			"font-features": [{ "font-features": [isArbitraryValue] }],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-normal": ["normal-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-ordinal": ["ordinal"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-slashed-zero": ["slashed-zero"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			/**
			* Font Variant Numeric
			* @see https://tailwindcss.com/docs/font-variant-numeric
			*/
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			/**
			* Letter Spacing
			* @see https://tailwindcss.com/docs/letter-spacing
			*/
			tracking: [{ tracking: [
				themeTracking,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Line Clamp
			* @see https://tailwindcss.com/docs/line-clamp
			*/
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			/**
			* Line Height
			* @see https://tailwindcss.com/docs/line-height
			*/
			leading: [{ leading: [themeLeading, ...scaleUnambiguousSpacing()] }],
			/**
			* List Style Image
			* @see https://tailwindcss.com/docs/list-style-image
			*/
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* List Style Position
			* @see https://tailwindcss.com/docs/list-style-position
			*/
			"list-style-position": [{ list: ["inside", "outside"] }],
			/**
			* List Style Type
			* @see https://tailwindcss.com/docs/list-style-type
			*/
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Alignment
			* @see https://tailwindcss.com/docs/text-align
			*/
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			/**
			* Placeholder Color
			* @deprecated since Tailwind CSS v3.0.0
			* @see https://v3.tailwindcss.com/docs/placeholder-color
			*/
			"placeholder-color": [{ placeholder: scaleColor() }],
			/**
			* Text Color
			* @see https://tailwindcss.com/docs/text-color
			*/
			"text-color": [{ text: scaleColor() }],
			/**
			* Text Decoration
			* @see https://tailwindcss.com/docs/text-decoration
			*/
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			/**
			* Text Decoration Style
			* @see https://tailwindcss.com/docs/text-decoration-style
			*/
			"text-decoration-style": [{ decoration: [...scaleLineStyle(), "wavy"] }],
			/**
			* Text Decoration Thickness
			* @see https://tailwindcss.com/docs/text-decoration-thickness
			*/
			"text-decoration-thickness": [{ decoration: [
				isNumber,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			/**
			* Text Decoration Color
			* @see https://tailwindcss.com/docs/text-decoration-color
			*/
			"text-decoration-color": [{ decoration: scaleColor() }],
			/**
			* Text Underline Offset
			* @see https://tailwindcss.com/docs/text-underline-offset
			*/
			"underline-offset": [{ "underline-offset": [
				isNumber,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Text Transform
			* @see https://tailwindcss.com/docs/text-transform
			*/
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			/**
			* Text Overflow
			* @see https://tailwindcss.com/docs/text-overflow
			*/
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			/**
			* Text Wrap
			* @see https://tailwindcss.com/docs/text-wrap
			*/
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			/**
			* Text Indent
			* @see https://tailwindcss.com/docs/text-indent
			*/
			indent: [{ indent: scaleUnambiguousSpacing() }],
			/**
			* Tab Size
			* @see https://tailwindcss.com/docs/tab-size
			*/
			"tab-size": [{ tab: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Vertical Alignment
			* @see https://tailwindcss.com/docs/vertical-align
			*/
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Whitespace
			* @see https://tailwindcss.com/docs/whitespace
			*/
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			/**
			* Word Break
			* @see https://tailwindcss.com/docs/word-break
			*/
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			/**
			* Overflow Wrap
			* @see https://tailwindcss.com/docs/overflow-wrap
			*/
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			/**
			* Hyphens
			* @see https://tailwindcss.com/docs/hyphens
			*/
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			/**
			* Content
			* @see https://tailwindcss.com/docs/content
			*/
			content: [{ content: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Background Attachment
			* @see https://tailwindcss.com/docs/background-attachment
			*/
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			/**
			* Background Clip
			* @see https://tailwindcss.com/docs/background-clip
			*/
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			/**
			* Background Origin
			* @see https://tailwindcss.com/docs/background-origin
			*/
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			/**
			* Background Position
			* @see https://tailwindcss.com/docs/background-position
			*/
			"bg-position": [{ bg: scaleBgPosition() }],
			/**
			* Background Repeat
			* @see https://tailwindcss.com/docs/background-repeat
			*/
			"bg-repeat": [{ bg: scaleBgRepeat() }],
			/**
			* Background Size
			* @see https://tailwindcss.com/docs/background-size
			*/
			"bg-size": [{ bg: scaleBgSize() }],
			/**
			* Background Image
			* @see https://tailwindcss.com/docs/background-image
			*/
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			/**
			* Background Color
			* @see https://tailwindcss.com/docs/background-color
			*/
			"bg-color": [{ bg: scaleColor() }],
			/**
			* Gradient Color Stops From Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from-pos": [{ from: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops Via Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via-pos": [{ via: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops To Position
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to-pos": [{ to: scaleGradientStopPosition() }],
			/**
			* Gradient Color Stops From
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-from": [{ from: scaleColor() }],
			/**
			* Gradient Color Stops Via
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-via": [{ via: scaleColor() }],
			/**
			* Gradient Color Stops To
			* @see https://tailwindcss.com/docs/gradient-color-stops
			*/
			"gradient-to": [{ to: scaleColor() }],
			/**
			* Border Radius
			* @see https://tailwindcss.com/docs/border-radius
			*/
			rounded: [{ rounded: scaleRadius() }],
			/**
			* Border Radius Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-s": [{ "rounded-s": scaleRadius() }],
			/**
			* Border Radius End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-e": [{ "rounded-e": scaleRadius() }],
			/**
			* Border Radius Top
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-t": [{ "rounded-t": scaleRadius() }],
			/**
			* Border Radius Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-r": [{ "rounded-r": scaleRadius() }],
			/**
			* Border Radius Bottom
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-b": [{ "rounded-b": scaleRadius() }],
			/**
			* Border Radius Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-l": [{ "rounded-l": scaleRadius() }],
			/**
			* Border Radius Start Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ss": [{ "rounded-ss": scaleRadius() }],
			/**
			* Border Radius Start End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-se": [{ "rounded-se": scaleRadius() }],
			/**
			* Border Radius End End
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-ee": [{ "rounded-ee": scaleRadius() }],
			/**
			* Border Radius End Start
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-es": [{ "rounded-es": scaleRadius() }],
			/**
			* Border Radius Top Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tl": [{ "rounded-tl": scaleRadius() }],
			/**
			* Border Radius Top Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-tr": [{ "rounded-tr": scaleRadius() }],
			/**
			* Border Radius Bottom Right
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-br": [{ "rounded-br": scaleRadius() }],
			/**
			* Border Radius Bottom Left
			* @see https://tailwindcss.com/docs/border-radius
			*/
			"rounded-bl": [{ "rounded-bl": scaleRadius() }],
			/**
			* Border Width
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w": [{ border: scaleBorderWidth() }],
			/**
			* Border Width Inline
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-x": [{ "border-x": scaleBorderWidth() }],
			/**
			* Border Width Block
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-y": [{ "border-y": scaleBorderWidth() }],
			/**
			* Border Width Inline Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-s": [{ "border-s": scaleBorderWidth() }],
			/**
			* Border Width Inline End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-e": [{ "border-e": scaleBorderWidth() }],
			/**
			* Border Width Block Start
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-bs": [{ "border-bs": scaleBorderWidth() }],
			/**
			* Border Width Block End
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-be": [{ "border-be": scaleBorderWidth() }],
			/**
			* Border Width Top
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-t": [{ "border-t": scaleBorderWidth() }],
			/**
			* Border Width Right
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-r": [{ "border-r": scaleBorderWidth() }],
			/**
			* Border Width Bottom
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-b": [{ "border-b": scaleBorderWidth() }],
			/**
			* Border Width Left
			* @see https://tailwindcss.com/docs/border-width
			*/
			"border-w-l": [{ "border-l": scaleBorderWidth() }],
			/**
			* Divide Width X
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x": [{ "divide-x": scaleBorderWidth() }],
			/**
			* Divide Width X Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-x-reverse": ["divide-x-reverse"],
			/**
			* Divide Width Y
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y": [{ "divide-y": scaleBorderWidth() }],
			/**
			* Divide Width Y Reverse
			* @see https://tailwindcss.com/docs/border-width#between-children
			*/
			"divide-y-reverse": ["divide-y-reverse"],
			/**
			* Border Style
			* @see https://tailwindcss.com/docs/border-style
			*/
			"border-style": [{ border: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Divide Style
			* @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
			*/
			"divide-style": [{ divide: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			/**
			* Border Color
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color": [{ border: scaleColor() }],
			/**
			* Border Color Inline
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-x": [{ "border-x": scaleColor() }],
			/**
			* Border Color Block
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-y": [{ "border-y": scaleColor() }],
			/**
			* Border Color Inline Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-s": [{ "border-s": scaleColor() }],
			/**
			* Border Color Inline End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-e": [{ "border-e": scaleColor() }],
			/**
			* Border Color Block Start
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-bs": [{ "border-bs": scaleColor() }],
			/**
			* Border Color Block End
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-be": [{ "border-be": scaleColor() }],
			/**
			* Border Color Top
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-t": [{ "border-t": scaleColor() }],
			/**
			* Border Color Right
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-r": [{ "border-r": scaleColor() }],
			/**
			* Border Color Bottom
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-b": [{ "border-b": scaleColor() }],
			/**
			* Border Color Left
			* @see https://tailwindcss.com/docs/border-color
			*/
			"border-color-l": [{ "border-l": scaleColor() }],
			/**
			* Divide Color
			* @see https://tailwindcss.com/docs/divide-color
			*/
			"divide-color": [{ divide: scaleColor() }],
			/**
			* Outline Style
			* @see https://tailwindcss.com/docs/outline-style
			*/
			"outline-style": [{ outline: [
				...scaleLineStyle(),
				"none",
				"hidden"
			] }],
			/**
			* Outline Offset
			* @see https://tailwindcss.com/docs/outline-offset
			*/
			"outline-offset": [{ "outline-offset": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Outline Width
			* @see https://tailwindcss.com/docs/outline-width
			*/
			"outline-w": [{ outline: [
				"",
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			/**
			* Outline Color
			* @see https://tailwindcss.com/docs/outline-color
			*/
			"outline-color": [{ outline: scaleColor() }],
			/**
			* Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow
			*/
			shadow: [{ shadow: [
				"",
				"none",
				themeShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
			*/
			"shadow-color": [{ shadow: scaleColor() }],
			/**
			* Inset Box Shadow
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
			*/
			"inset-shadow": [{ "inset-shadow": [
				"none",
				themeInsetShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Inset Box Shadow Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
			*/
			"inset-shadow-color": [{ "inset-shadow": scaleColor() }],
			/**
			* Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
			*/
			"ring-w": [{ ring: scaleBorderWidth() }],
			/**
			* Ring Width Inset
			* @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-w-inset": ["ring-inset"],
			/**
			* Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
			*/
			"ring-color": [{ ring: scaleColor() }],
			/**
			* Ring Offset Width
			* @see https://v3.tailwindcss.com/docs/ring-offset-width
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
			/**
			* Ring Offset Color
			* @see https://v3.tailwindcss.com/docs/ring-offset-color
			* @deprecated since Tailwind CSS v4.0.0
			* @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
			*/
			"ring-offset-color": [{ "ring-offset": scaleColor() }],
			/**
			* Inset Ring Width
			* @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
			*/
			"inset-ring-w": [{ "inset-ring": scaleBorderWidth() }],
			/**
			* Inset Ring Color
			* @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
			*/
			"inset-ring-color": [{ "inset-ring": scaleColor() }],
			/**
			* Text Shadow
			* @see https://tailwindcss.com/docs/text-shadow
			*/
			"text-shadow": [{ "text-shadow": [
				"none",
				themeTextShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Text Shadow Color
			* @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
			*/
			"text-shadow-color": [{ "text-shadow": scaleColor() }],
			/**
			* Opacity
			* @see https://tailwindcss.com/docs/opacity
			*/
			opacity: [{ opacity: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Mix Blend Mode
			* @see https://tailwindcss.com/docs/mix-blend-mode
			*/
			"mix-blend": [{ "mix-blend": [
				...scaleBlendMode(),
				"plus-darker",
				"plus-lighter"
			] }],
			/**
			* Background Blend Mode
			* @see https://tailwindcss.com/docs/background-blend-mode
			*/
			"bg-blend": [{ "bg-blend": scaleBlendMode() }],
			/**
			* Mask Clip
			* @see https://tailwindcss.com/docs/mask-clip
			*/
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			/**
			* Mask Composite
			* @see https://tailwindcss.com/docs/mask-composite
			*/
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": scaleMaskImagePosition() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": scaleMaskImagePosition() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": scaleColor() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": scaleColor() }],
			"mask-image-t-from-pos": [{ "mask-t-from": scaleMaskImagePosition() }],
			"mask-image-t-to-pos": [{ "mask-t-to": scaleMaskImagePosition() }],
			"mask-image-t-from-color": [{ "mask-t-from": scaleColor() }],
			"mask-image-t-to-color": [{ "mask-t-to": scaleColor() }],
			"mask-image-r-from-pos": [{ "mask-r-from": scaleMaskImagePosition() }],
			"mask-image-r-to-pos": [{ "mask-r-to": scaleMaskImagePosition() }],
			"mask-image-r-from-color": [{ "mask-r-from": scaleColor() }],
			"mask-image-r-to-color": [{ "mask-r-to": scaleColor() }],
			"mask-image-b-from-pos": [{ "mask-b-from": scaleMaskImagePosition() }],
			"mask-image-b-to-pos": [{ "mask-b-to": scaleMaskImagePosition() }],
			"mask-image-b-from-color": [{ "mask-b-from": scaleColor() }],
			"mask-image-b-to-color": [{ "mask-b-to": scaleColor() }],
			"mask-image-l-from-pos": [{ "mask-l-from": scaleMaskImagePosition() }],
			"mask-image-l-to-pos": [{ "mask-l-to": scaleMaskImagePosition() }],
			"mask-image-l-from-color": [{ "mask-l-from": scaleColor() }],
			"mask-image-l-to-color": [{ "mask-l-to": scaleColor() }],
			"mask-image-x-from-pos": [{ "mask-x-from": scaleMaskImagePosition() }],
			"mask-image-x-to-pos": [{ "mask-x-to": scaleMaskImagePosition() }],
			"mask-image-x-from-color": [{ "mask-x-from": scaleColor() }],
			"mask-image-x-to-color": [{ "mask-x-to": scaleColor() }],
			"mask-image-y-from-pos": [{ "mask-y-from": scaleMaskImagePosition() }],
			"mask-image-y-to-pos": [{ "mask-y-to": scaleMaskImagePosition() }],
			"mask-image-y-from-color": [{ "mask-y-from": scaleColor() }],
			"mask-image-y-to-color": [{ "mask-y-to": scaleColor() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": scaleMaskImagePosition() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": scaleMaskImagePosition() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": scaleColor() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": scaleColor() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": scalePosition() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": scaleMaskImagePosition() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": scaleMaskImagePosition() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": scaleColor() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": scaleColor() }],
			/**
			* Mask Mode
			* @see https://tailwindcss.com/docs/mask-mode
			*/
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			/**
			* Mask Origin
			* @see https://tailwindcss.com/docs/mask-origin
			*/
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			/**
			* Mask Position
			* @see https://tailwindcss.com/docs/mask-position
			*/
			"mask-position": [{ mask: scaleBgPosition() }],
			/**
			* Mask Repeat
			* @see https://tailwindcss.com/docs/mask-repeat
			*/
			"mask-repeat": [{ mask: scaleBgRepeat() }],
			/**
			* Mask Size
			* @see https://tailwindcss.com/docs/mask-size
			*/
			"mask-size": [{ mask: scaleBgSize() }],
			/**
			* Mask Type
			* @see https://tailwindcss.com/docs/mask-type
			*/
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			/**
			* Mask Image
			* @see https://tailwindcss.com/docs/mask-image
			*/
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Filter
			* @see https://tailwindcss.com/docs/filter
			*/
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Blur
			* @see https://tailwindcss.com/docs/blur
			*/
			blur: [{ blur: scaleBlur() }],
			/**
			* Brightness
			* @see https://tailwindcss.com/docs/brightness
			*/
			brightness: [{ brightness: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Contrast
			* @see https://tailwindcss.com/docs/contrast
			*/
			contrast: [{ contrast: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Drop Shadow
			* @see https://tailwindcss.com/docs/drop-shadow
			*/
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				themeDropShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			/**
			* Drop Shadow Color
			* @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
			*/
			"drop-shadow-color": [{ "drop-shadow": scaleColor() }],
			/**
			* Grayscale
			* @see https://tailwindcss.com/docs/grayscale
			*/
			grayscale: [{ grayscale: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Hue Rotate
			* @see https://tailwindcss.com/docs/hue-rotate
			*/
			"hue-rotate": [{ "hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Invert
			* @see https://tailwindcss.com/docs/invert
			*/
			invert: [{ invert: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Saturate
			* @see https://tailwindcss.com/docs/saturate
			*/
			saturate: [{ saturate: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Sepia
			* @see https://tailwindcss.com/docs/sepia
			*/
			sepia: [{ sepia: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Filter
			* @see https://tailwindcss.com/docs/backdrop-filter
			*/
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Blur
			* @see https://tailwindcss.com/docs/backdrop-blur
			*/
			"backdrop-blur": [{ "backdrop-blur": scaleBlur() }],
			/**
			* Backdrop Brightness
			* @see https://tailwindcss.com/docs/backdrop-brightness
			*/
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Contrast
			* @see https://tailwindcss.com/docs/backdrop-contrast
			*/
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Grayscale
			* @see https://tailwindcss.com/docs/backdrop-grayscale
			*/
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Hue Rotate
			* @see https://tailwindcss.com/docs/backdrop-hue-rotate
			*/
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Invert
			* @see https://tailwindcss.com/docs/backdrop-invert
			*/
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Opacity
			* @see https://tailwindcss.com/docs/backdrop-opacity
			*/
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Saturate
			* @see https://tailwindcss.com/docs/backdrop-saturate
			*/
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backdrop Sepia
			* @see https://tailwindcss.com/docs/backdrop-sepia
			*/
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Border Collapse
			* @see https://tailwindcss.com/docs/border-collapse
			*/
			"border-collapse": [{ border: ["collapse", "separate"] }],
			/**
			* Border Spacing
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing": [{ "border-spacing": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing X
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-x": [{ "border-spacing-x": scaleUnambiguousSpacing() }],
			/**
			* Border Spacing Y
			* @see https://tailwindcss.com/docs/border-spacing
			*/
			"border-spacing-y": [{ "border-spacing-y": scaleUnambiguousSpacing() }],
			/**
			* Table Layout
			* @see https://tailwindcss.com/docs/table-layout
			*/
			"table-layout": [{ table: ["auto", "fixed"] }],
			/**
			* Caption Side
			* @see https://tailwindcss.com/docs/caption-side
			*/
			caption: [{ caption: ["top", "bottom"] }],
			/**
			* Transition Property
			* @see https://tailwindcss.com/docs/transition-property
			*/
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Behavior
			* @see https://tailwindcss.com/docs/transition-behavior
			*/
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			/**
			* Transition Duration
			* @see https://tailwindcss.com/docs/transition-duration
			*/
			duration: [{ duration: [
				isNumber,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Timing Function
			* @see https://tailwindcss.com/docs/transition-timing-function
			*/
			ease: [{ ease: [
				"linear",
				"initial",
				themeEase,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Transition Delay
			* @see https://tailwindcss.com/docs/transition-delay
			*/
			delay: [{ delay: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Animation
			* @see https://tailwindcss.com/docs/animation
			*/
			animate: [{ animate: [
				"none",
				themeAnimate,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Backface Visibility
			* @see https://tailwindcss.com/docs/backface-visibility
			*/
			backface: [{ backface: ["hidden", "visible"] }],
			/**
			* Perspective
			* @see https://tailwindcss.com/docs/perspective
			*/
			perspective: [{ perspective: [
				themePerspective,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Perspective Origin
			* @see https://tailwindcss.com/docs/perspective-origin
			*/
			"perspective-origin": [{ "perspective-origin": scalePositionWithArbitrary() }],
			/**
			* Rotate
			* @see https://tailwindcss.com/docs/rotate
			*/
			rotate: [{ rotate: scaleRotate() }],
			/**
			* Rotate X
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-x": [{ "rotate-x": scaleRotate() }],
			/**
			* Rotate Y
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-y": [{ "rotate-y": scaleRotate() }],
			/**
			* Rotate Z
			* @see https://tailwindcss.com/docs/rotate
			*/
			"rotate-z": [{ "rotate-z": scaleRotate() }],
			/**
			* Scale
			* @see https://tailwindcss.com/docs/scale
			*/
			scale: [{ scale: scaleScale() }],
			/**
			* Scale X
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-x": [{ "scale-x": scaleScale() }],
			/**
			* Scale Y
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-y": [{ "scale-y": scaleScale() }],
			/**
			* Scale Z
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-z": [{ "scale-z": scaleScale() }],
			/**
			* Scale 3D
			* @see https://tailwindcss.com/docs/scale
			*/
			"scale-3d": ["scale-3d"],
			/**
			* Skew
			* @see https://tailwindcss.com/docs/skew
			*/
			skew: [{ skew: scaleSkew() }],
			/**
			* Skew X
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-x": [{ "skew-x": scaleSkew() }],
			/**
			* Skew Y
			* @see https://tailwindcss.com/docs/skew
			*/
			"skew-y": [{ "skew-y": scaleSkew() }],
			/**
			* Transform
			* @see https://tailwindcss.com/docs/transform
			*/
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			/**
			* Transform Origin
			* @see https://tailwindcss.com/docs/transform-origin
			*/
			"transform-origin": [{ origin: scalePositionWithArbitrary() }],
			/**
			* Transform Style
			* @see https://tailwindcss.com/docs/transform-style
			*/
			"transform-style": [{ transform: ["3d", "flat"] }],
			/**
			* Translate
			* @see https://tailwindcss.com/docs/translate
			*/
			translate: [{ translate: scaleTranslate() }],
			/**
			* Translate X
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-x": [{ "translate-x": scaleTranslate() }],
			/**
			* Translate Y
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-y": [{ "translate-y": scaleTranslate() }],
			/**
			* Translate Z
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-z": [{ "translate-z": scaleTranslate() }],
			/**
			* Translate None
			* @see https://tailwindcss.com/docs/translate
			*/
			"translate-none": ["translate-none"],
			/**
			* Zoom
			* @see https://tailwindcss.com/docs/zoom
			*/
			zoom: [{ zoom: [
				isInteger,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Accent Color
			* @see https://tailwindcss.com/docs/accent-color
			*/
			accent: [{ accent: scaleColor() }],
			/**
			* Appearance
			* @see https://tailwindcss.com/docs/appearance
			*/
			appearance: [{ appearance: ["none", "auto"] }],
			/**
			* Caret Color
			* @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
			*/
			"caret-color": [{ caret: scaleColor() }],
			/**
			* Color Scheme
			* @see https://tailwindcss.com/docs/color-scheme
			*/
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			/**
			* Cursor
			* @see https://tailwindcss.com/docs/cursor
			*/
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Field Sizing
			* @see https://tailwindcss.com/docs/field-sizing
			*/
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			/**
			* Pointer Events
			* @see https://tailwindcss.com/docs/pointer-events
			*/
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			/**
			* Resize
			* @see https://tailwindcss.com/docs/resize
			*/
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			/**
			* Scroll Behavior
			* @see https://tailwindcss.com/docs/scroll-behavior
			*/
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			/**
			* Scrollbar Thumb Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-thumb-color": [{ "scrollbar-thumb": scaleColor() }],
			/**
			* Scrollbar Track Color
			* @see https://tailwindcss.com/docs/scrollbar-color
			*/
			"scrollbar-track-color": [{ "scrollbar-track": scaleColor() }],
			/**
			* Scrollbar Gutter
			* @see https://tailwindcss.com/docs/scrollbar-gutter
			*/
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			/**
			* Scrollbar Width
			* @see https://tailwindcss.com/docs/scrollbar-width
			*/
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			/**
			* Scroll Margin
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-m": [{ "scroll-m": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mx": [{ "scroll-mx": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-my": [{ "scroll-my": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ms": [{ "scroll-ms": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Inline End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-me": [{ "scroll-me": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block Start
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbs": [{ "scroll-mbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Block End
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mbe": [{ "scroll-mbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Top
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mt": [{ "scroll-mt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Right
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mr": [{ "scroll-mr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Bottom
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-mb": [{ "scroll-mb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Margin Left
			* @see https://tailwindcss.com/docs/scroll-margin
			*/
			"scroll-ml": [{ "scroll-ml": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-p": [{ "scroll-p": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-px": [{ "scroll-px": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-py": [{ "scroll-py": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-ps": [{ "scroll-ps": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Inline End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pe": [{ "scroll-pe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block Start
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbs": [{ "scroll-pbs": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Block End
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pbe": [{ "scroll-pbe": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Top
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pt": [{ "scroll-pt": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Right
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pr": [{ "scroll-pr": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Bottom
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pb": [{ "scroll-pb": scaleUnambiguousSpacing() }],
			/**
			* Scroll Padding Left
			* @see https://tailwindcss.com/docs/scroll-padding
			*/
			"scroll-pl": [{ "scroll-pl": scaleUnambiguousSpacing() }],
			/**
			* Scroll Snap Align
			* @see https://tailwindcss.com/docs/scroll-snap-align
			*/
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			/**
			* Scroll Snap Stop
			* @see https://tailwindcss.com/docs/scroll-snap-stop
			*/
			"snap-stop": [{ snap: ["normal", "always"] }],
			/**
			* Scroll Snap Type
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			/**
			* Scroll Snap Type Strictness
			* @see https://tailwindcss.com/docs/scroll-snap-type
			*/
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			/**
			* Touch Action
			* @see https://tailwindcss.com/docs/touch-action
			*/
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			/**
			* Touch Action X
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			/**
			* Touch Action Y
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			/**
			* Touch Action Pinch Zoom
			* @see https://tailwindcss.com/docs/touch-action
			*/
			"touch-pz": ["touch-pinch-zoom"],
			/**
			* User Select
			* @see https://tailwindcss.com/docs/user-select
			*/
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			/**
			* Will Change
			* @see https://tailwindcss.com/docs/will-change
			*/
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			/**
			* Fill
			* @see https://tailwindcss.com/docs/fill
			*/
			fill: [{ fill: ["none", ...scaleColor()] }],
			/**
			* Stroke Width
			* @see https://tailwindcss.com/docs/stroke-width
			*/
			"stroke-w": [{ stroke: [
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			/**
			* Stroke
			* @see https://tailwindcss.com/docs/stroke
			*/
			stroke: [{ stroke: ["none", ...scaleColor()] }],
			/**
			* Forced Color Adjust
			* @see https://tailwindcss.com/docs/forced-color-adjust
			*/
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
};
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
//#endregion
//#region lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region components/ui/dialog.tsx
function Dialog({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		"data-slot": "dialog",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		"data-slot": "dialog-overlay",
		className: cn("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
			"data-slot": "dialog-content",
			className: cn("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", className),
			...props,
			children: [children, showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-2 text-center sm:text-left", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		"data-slot": "dialog-title",
		className: cn("text-lg leading-none font-semibold", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		"data-slot": "dialog-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
var __defProp$14 = Object.defineProperty;
var __name$14 = (target, value) => __defProp$14(target, "name", {
	value,
	configurable: true
});
function clamp(value, [min, max]) {
	return Math.min(max, Math.max(min, value));
}
__name$14(clamp, "clamp");
//#endregion
//#region node_modules/@radix-ui/react-slider/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$13 = Object.defineProperty;
var __name$13 = (target, value) => __defProp$13(target, "name", {
	value,
	configurable: true
});
function setRef$4(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$13(setRef$4, "setRef");
function composeRefs$4(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$4(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$4(refs[i], null);
			}
		};
	};
}
__name$13(composeRefs$4, "composeRefs");
function useComposedRefs$4(...refs) {
	return import_react.useCallback(composeRefs$4(...refs), refs);
}
__name$13(useComposedRefs$4, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-direction/dist/index.mjs
var __defProp$12 = Object.defineProperty;
var __name$12 = (target, value) => __defProp$12(target, "name", {
	value,
	configurable: true
});
var DirectionContext = import_react.createContext(void 0);
function useDirection(localDir) {
	const globalDir = import_react.useContext(DirectionContext);
	return localDir || globalDir || "ltr";
}
__name$12(useDirection, "useDirection");
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
var __defProp$11 = Object.defineProperty;
var __name$11 = (target, value) => __defProp$11(target, "name", {
	value,
	configurable: true
});
function usePrevious(value) {
	const ref = import_react.useRef({
		value,
		previous: value
	});
	return import_react.useMemo(() => {
		if (ref.current.value !== value) {
			ref.current.previous = ref.current.value;
			ref.current.value = value;
		}
		return ref.current.previous;
	}, [value]);
}
__name$11(usePrevious, "usePrevious");
//#endregion
//#region node_modules/@radix-ui/react-use-size/dist/index.mjs
var __defProp$10 = Object.defineProperty;
var __name$10 = (target, value) => __defProp$10(target, "name", {
	value,
	configurable: true
});
function useSize(element) {
	const [size, setSize] = import_react.useState(void 0);
	useLayoutEffect2(() => {
		if (element) {
			setSize({
				width: element.offsetWidth,
				height: element.offsetHeight
			});
			const resizeObserver = new ResizeObserver((entries) => {
				if (!Array.isArray(entries)) return;
				if (!entries.length) return;
				const entry = entries[0];
				let width;
				let height;
				if ("borderBoxSize" in entry) {
					const borderSizeEntry = entry["borderBoxSize"];
					const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
					width = borderSize["inlineSize"];
					height = borderSize["blockSize"];
				} else {
					width = element.offsetWidth;
					height = element.offsetHeight;
				}
				setSize({
					width,
					height
				});
			});
			resizeObserver.observe(element, { box: "border-box" });
			return () => resizeObserver.unobserve(element);
		} else setSize(void 0);
	}, [element]);
	return size;
}
__name$10(useSize, "useSize");
//#endregion
//#region node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$9 = Object.defineProperty;
var __name$9 = (target, value) => __defProp$9(target, "name", {
	value,
	configurable: true
});
function setRef$3(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$9(setRef$3, "setRef");
function composeRefs$3(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$3(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$3(refs[i], null);
			}
		};
	};
}
__name$9(composeRefs$3, "composeRefs");
function useComposedRefs$3(...refs) {
	return import_react.useCallback(composeRefs$3(...refs), refs);
}
__name$9(useComposedRefs$3, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot/dist/index.mjs
var __defProp$8 = Object.defineProperty;
var __name$8 = (target, value) => __defProp$8(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createSlot(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent(children) && typeof use === "function") children = use(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent(child) && typeof use === "function") child = use(child._payload);
				slottableElement = getSlottableElementFromSlottable(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef(slottableElement) : void 0;
		const composedRef = useComposedRefs$3(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
			return children;
		}
		const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$8(createSlot, "createSlot");
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$8((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
	return Slottable2;
}
__name$8(createSlottable, "createSlottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name$8((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$8(mergeProps, "mergeProps");
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$8(getElementRef, "getElementRef");
function isSlottable(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name$8(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name$8(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$8(isPromiseLike, "isPromiseLike");
var createSlotError = /* @__PURE__ */ __name$8((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name$8((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = import_react[" use ".trim().toString()];
//#endregion
//#region node_modules/@radix-ui/react-collection/dist/index.mjs
var __defProp$7 = Object.defineProperty;
var __name$7 = (target, value) => __defProp$7(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createCollection(name) {
	const PROVIDER_NAME = name + "CollectionProvider";
	const [createCollectionContext, createCollectionScope] = /* @__PURE__ */ createContextScope(PROVIDER_NAME);
	const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	});
	const CollectionProvider = /* @__PURE__ */ __name$7((props) => {
		const { scope, children } = props;
		const ref = import_react.useRef(null);
		const itemMap = import_react.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			scope,
			itemMap,
			collectionRef: ref,
			children
		});
	}, "CollectionProvider");
	CollectionProvider.displayName = PROVIDER_NAME;
	const COLLECTION_SLOT_NAME = name + "CollectionSlot";
	const CollectionSlotImpl = /* @__PURE__ */ createSlot(COLLECTION_SLOT_NAME);
	const CollectionSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionSlotImpl, {
			ref: useComposedRefs$3(forwardedRef, useCollectionContext(COLLECTION_SLOT_NAME, scope).collectionRef),
			children
		});
	});
	CollectionSlot.displayName = COLLECTION_SLOT_NAME;
	const ITEM_SLOT_NAME = name + "CollectionItemSlot";
	const ITEM_DATA_ATTR = "data-radix-collection-item";
	const CollectionItemSlotImpl = /* @__PURE__ */ createSlot(ITEM_SLOT_NAME);
	const CollectionItemSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children, ...itemData } = props;
		const ref = import_react.useRef(null);
		const composedRefs = useComposedRefs$3(forwardedRef, ref);
		const context = useCollectionContext(ITEM_SLOT_NAME, scope);
		import_react.useEffect(() => {
			context.itemMap.set(ref, {
				ref,
				...itemData
			});
			return () => void context.itemMap.delete(ref);
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionItemSlotImpl, {
			[ITEM_DATA_ATTR]: "",
			ref: composedRefs,
			children
		});
	});
	CollectionItemSlot.displayName = ITEM_SLOT_NAME;
	function useCollection(scope) {
		const context = useCollectionContext(name + "CollectionConsumer", scope);
		return import_react.useCallback(() => {
			const collectionNode = context.collectionRef.current;
			if (!collectionNode) return [];
			const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
			return Array.from(context.itemMap.values()).sort((a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
		}, [context.collectionRef, context.itemMap]);
	}
	__name$7(useCollection, "useCollection");
	return [
		{
			Provider: CollectionProvider,
			Slot: CollectionSlot,
			ItemSlot: CollectionItemSlot
		},
		useCollection,
		createCollectionScope
	];
}
__name$7(createCollection, "createCollection");
var __instanciated = /* @__PURE__ */ new WeakMap();
var OrderedDict = class _OrderedDict extends Map {
	static {
		__name$7(this, "OrderedDict");
	}
	#keys;
	constructor(entries) {
		super(entries);
		this.#keys = [...super.keys()];
		__instanciated.set(this, true);
	}
	set(key, value) {
		if (__instanciated.get(this)) if (this.has(key)) this.#keys[this.#keys.indexOf(key)] = key;
		else this.#keys.push(key);
		super.set(key, value);
		return this;
	}
	insert(index, key, value) {
		const has = this.has(key);
		const length = this.#keys.length;
		const relativeIndex = toSafeInteger(index);
		let actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
		const safeIndex = actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
		if (safeIndex === this.size || has && safeIndex === this.size - 1 || safeIndex === -1) {
			this.set(key, value);
			return this;
		}
		const size = this.size + (has ? 0 : 1);
		if (relativeIndex < 0) actualIndex++;
		const keys = [...this.#keys];
		let nextValue;
		let shouldSkip = false;
		for (let i = actualIndex; i < size; i++) if (actualIndex === i) {
			let nextKey = keys[i];
			if (keys[i] === key) nextKey = keys[i + 1];
			if (has) this.delete(key);
			nextValue = this.get(nextKey);
			this.set(key, value);
		} else {
			if (!shouldSkip && keys[i - 1] === key) shouldSkip = true;
			const currentKey = keys[shouldSkip ? i : i - 1];
			const currentValue = nextValue;
			nextValue = this.get(currentKey);
			this.delete(currentKey);
			this.set(currentKey, currentValue);
		}
		return this;
	}
	with(index, key, value) {
		const copy = new _OrderedDict(this);
		copy.insert(index, key, value);
		return copy;
	}
	before(key) {
		const index = this.#keys.indexOf(key) - 1;
		if (index < 0) return;
		return this.entryAt(index);
	}
	/**
	* Sets a new key-value pair at the position before the given key.
	*/
	setBefore(key, newKey, value) {
		const index = this.#keys.indexOf(key);
		if (index === -1) return this;
		return this.insert(index, newKey, value);
	}
	after(key) {
		let index = this.#keys.indexOf(key);
		index = index === -1 || index === this.size - 1 ? -1 : index + 1;
		if (index === -1) return;
		return this.entryAt(index);
	}
	/**
	* Sets a new key-value pair at the position after the given key.
	*/
	setAfter(key, newKey, value) {
		const index = this.#keys.indexOf(key);
		if (index === -1) return this;
		return this.insert(index + 1, newKey, value);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		this.#keys = [];
		return super.clear();
	}
	delete(key) {
		const deleted = super.delete(key);
		if (deleted) this.#keys.splice(this.#keys.indexOf(key), 1);
		return deleted;
	}
	deleteAt(index) {
		const key = this.keyAt(index);
		if (key !== void 0) return this.delete(key);
		return false;
	}
	at(index) {
		const key = at(this.#keys, index);
		if (key !== void 0) return this.get(key);
	}
	entryAt(index) {
		const key = at(this.#keys, index);
		if (key !== void 0) return [key, this.get(key)];
	}
	indexOf(key) {
		return this.#keys.indexOf(key);
	}
	keyAt(index) {
		return at(this.#keys, index);
	}
	from(key, offset) {
		const index = this.indexOf(key);
		if (index === -1) return;
		let dest = index + offset;
		if (dest < 0) dest = 0;
		if (dest >= this.size) dest = this.size - 1;
		return this.at(dest);
	}
	keyFrom(key, offset) {
		const index = this.indexOf(key);
		if (index === -1) return;
		let dest = index + offset;
		if (dest < 0) dest = 0;
		if (dest >= this.size) dest = this.size - 1;
		return this.keyAt(dest);
	}
	find(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return entry;
			index++;
		}
	}
	findIndex(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return index;
			index++;
		}
		return -1;
	}
	filter(predicate, thisArg) {
		const entries = [];
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) entries.push(entry);
			index++;
		}
		return new _OrderedDict(entries);
	}
	map(callbackfn, thisArg) {
		const entries = [];
		let index = 0;
		for (const entry of this) {
			entries.push([entry[0], Reflect.apply(callbackfn, thisArg, [
				entry,
				index,
				this
			])]);
			index++;
		}
		return new _OrderedDict(entries);
	}
	reduce(...args) {
		const [callbackfn, initialValue] = args;
		let index = 0;
		let accumulator = initialValue ?? this.at(0);
		for (const entry of this) {
			if (index === 0 && args.length === 1) accumulator = entry;
			else accumulator = Reflect.apply(callbackfn, this, [
				accumulator,
				entry,
				index,
				this
			]);
			index++;
		}
		return accumulator;
	}
	reduceRight(...args) {
		const [callbackfn, initialValue] = args;
		let accumulator = initialValue ?? this.at(-1);
		for (let index = this.size - 1; index >= 0; index--) {
			const entry = this.at(index);
			if (index === this.size - 1 && args.length === 1) accumulator = entry;
			else accumulator = Reflect.apply(callbackfn, this, [
				accumulator,
				entry,
				index,
				this
			]);
		}
		return accumulator;
	}
	toSorted(compareFn) {
		return new _OrderedDict([...this.entries()].sort(compareFn));
	}
	toReversed() {
		const reversed = new _OrderedDict();
		for (let index = this.size - 1; index >= 0; index--) {
			const key = this.keyAt(index);
			const element = this.get(key);
			reversed.set(key, element);
		}
		return reversed;
	}
	toSpliced(...args) {
		const entries = [...this.entries()];
		entries.splice(...args);
		return new _OrderedDict(entries);
	}
	slice(start, end) {
		const result = new _OrderedDict();
		let stop = this.size - 1;
		if (start === void 0) return result;
		if (start < 0) start = start + this.size;
		if (end !== void 0 && end > 0) stop = end - 1;
		for (let index = start; index <= stop; index++) {
			const key = this.keyAt(index);
			const element = this.get(key);
			result.set(key, element);
		}
		return result;
	}
	every(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (!Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return false;
			index++;
		}
		return true;
	}
	some(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return true;
			index++;
		}
		return false;
	}
};
function at(array, index) {
	if ("at" in Array.prototype) return Array.prototype.at.call(array, index);
	const actualIndex = toSafeIndex(array, index);
	return actualIndex === -1 ? void 0 : array[actualIndex];
}
__name$7(at, "at");
function toSafeIndex(array, index) {
	const length = array.length;
	const relativeIndex = toSafeInteger(index);
	const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
	return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
__name$7(toSafeIndex, "toSafeIndex");
function toSafeInteger(number) {
	return number !== number || number === 0 ? 0 : Math.trunc(number);
}
__name$7(toSafeInteger, "toSafeInteger");
/* @__NO_SIDE_EFFECTS__ */
function createCollection2(name) {
	const PROVIDER_NAME = name + "CollectionProvider";
	const [createCollectionContext, createCollectionScope] = /* @__PURE__ */ createContextScope(PROVIDER_NAME);
	const [CollectionContextProvider, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new OrderedDict(),
		setItemMap: /* @__PURE__ */ __name$7(() => void 0, "setItemMap")
	});
	const CollectionProvider = /* @__PURE__ */ __name$7(({ state, ...props }) => {
		return state ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			...props,
			state
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionInit, { ...props });
	}, "CollectionProvider");
	CollectionProvider.displayName = PROVIDER_NAME;
	const CollectionInit = /* @__PURE__ */ __name$7((props) => {
		const state = useInitCollection();
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			...props,
			state
		});
	}, "CollectionInit");
	CollectionInit.displayName = PROVIDER_NAME + "Init";
	const CollectionProviderImpl = /* @__PURE__ */ __name$7((props) => {
		const { scope, children, state } = props;
		const ref = import_react.useRef(null);
		const [collectionElement, setCollectionElement] = import_react.useState(null);
		const composeRefs = useComposedRefs$3(ref, setCollectionElement);
		const [itemMap, setItemMap] = state;
		import_react.useEffect(() => {
			if (!collectionElement) return;
			const observer = getChildListObserver(() => {});
			observer.observe(collectionElement, {
				childList: true,
				subtree: true
			});
			return () => {
				observer.disconnect();
			};
		}, [collectionElement]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionContextProvider, {
			scope,
			itemMap,
			setItemMap,
			collectionRef: composeRefs,
			collectionRefObject: ref,
			collectionElement,
			children
		});
	}, "CollectionProviderImpl");
	CollectionProviderImpl.displayName = PROVIDER_NAME + "Impl";
	const COLLECTION_SLOT_NAME = name + "CollectionSlot";
	const CollectionSlotImpl = /* @__PURE__ */ createSlot(COLLECTION_SLOT_NAME);
	const CollectionSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionSlotImpl, {
			ref: useComposedRefs$3(forwardedRef, useCollectionContext(COLLECTION_SLOT_NAME, scope).collectionRef),
			children
		});
	});
	CollectionSlot.displayName = COLLECTION_SLOT_NAME;
	const ITEM_SLOT_NAME = name + "CollectionItemSlot";
	const ITEM_DATA_ATTR = "data-radix-collection-item";
	const CollectionItemSlotImpl = /* @__PURE__ */ createSlot(ITEM_SLOT_NAME);
	const CollectionItemSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children, ...itemData } = props;
		const ref = import_react.useRef(null);
		const [element, setElement] = import_react.useState(null);
		const composedRefs = useComposedRefs$3(forwardedRef, ref, setElement);
		const { setItemMap } = useCollectionContext(ITEM_SLOT_NAME, scope);
		const itemDataRef = import_react.useRef(itemData);
		if (!shallowEqual(itemDataRef.current, itemData)) itemDataRef.current = itemData;
		const memoizedItemData = itemDataRef.current;
		import_react.useEffect(() => {
			const itemData2 = memoizedItemData;
			setItemMap((map) => {
				if (!element) return map;
				if (!map.has(element)) {
					map.set(element, {
						...itemData2,
						element
					});
					return map.toSorted(sortByDocumentPosition);
				}
				return map.set(element, {
					...itemData2,
					element
				}).toSorted(sortByDocumentPosition);
			});
			return () => {
				setItemMap((map) => {
					if (!element || !map.has(element)) return map;
					map.delete(element);
					return new OrderedDict(map);
				});
			};
		}, [
			element,
			memoizedItemData,
			setItemMap
		]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionItemSlotImpl, {
			[ITEM_DATA_ATTR]: "",
			ref: composedRefs,
			children
		});
	});
	CollectionItemSlot.displayName = ITEM_SLOT_NAME;
	function useInitCollection() {
		return import_react.useState(new OrderedDict());
	}
	__name$7(useInitCollection, "useInitCollection");
	function useCollection(scope) {
		const { itemMap } = useCollectionContext(name + "CollectionConsumer", scope);
		return itemMap;
	}
	__name$7(useCollection, "useCollection");
	return [{
		Provider: CollectionProvider,
		Slot: CollectionSlot,
		ItemSlot: CollectionItemSlot
	}, {
		createCollectionScope,
		useCollection,
		useInitCollection
	}];
}
__name$7(createCollection2, "createCollection");
function shallowEqual(a, b) {
	if (a === b) return true;
	if (typeof a !== "object" || typeof b !== "object") return false;
	if (a == null || b == null) return false;
	const keysA = Object.keys(a);
	const keysB = Object.keys(b);
	if (keysA.length !== keysB.length) return false;
	for (const key of keysA) {
		if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
		if (a[key] !== b[key]) return false;
	}
	return true;
}
__name$7(shallowEqual, "shallowEqual");
function isElementPreceding(a, b) {
	return !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
__name$7(isElementPreceding, "isElementPreceding");
function sortByDocumentPosition(a, b) {
	return !a[1].element || !b[1].element ? 0 : isElementPreceding(a[1].element, b[1].element) ? -1 : 1;
}
__name$7(sortByDocumentPosition, "sortByDocumentPosition");
function getChildListObserver(callback) {
	return new MutationObserver((mutationsList) => {
		for (const mutation of mutationsList) if (mutation.type === "childList") {
			callback();
			return;
		}
	});
}
__name$7(getChildListObserver, "getChildListObserver");
//#endregion
//#region node_modules/@radix-ui/react-slider/dist/index.mjs
var __defProp$6 = Object.defineProperty;
var __name$6 = (target, value) => __defProp$6(target, "name", {
	value,
	configurable: true
});
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
var BACK_KEYS = {
	"from-left": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-right": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowRight"
	],
	"from-bottom": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-top": [
		"Home",
		"PageDown",
		"ArrowUp",
		"ArrowLeft"
	]
};
var SLIDER_NAME = "Slider";
var [Collection$1, useCollection$1, createCollectionScope$1] = /* @__PURE__ */ createCollection(SLIDER_NAME);
var [createSliderContext, createSliderScope] = /* @__PURE__ */ createContextScope(SLIDER_NAME, [createCollectionScope$1]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function Slider2(props, forwardedRef) {
	const { name, min = 0, max = 100, step = 1, orientation = "horizontal", disabled = false, minStepsBetweenThumbs = 0, defaultValue = [min], value, onValueChange = /* @__PURE__ */ __name$6(() => {}, "onValueChange"), onValueCommit = /* @__PURE__ */ __name$6(() => {}, "onValueCommit"), inverted = false, form, ...sliderProps } = props;
	const thumbRefs = import_react.useRef(/* @__PURE__ */ new Set());
	const valueIndexToChangeRef = import_react.useRef(0);
	const isKeyboardInteractionRef = import_react.useRef(false);
	const SliderOrientation = orientation === "horizontal" ? SliderHorizontal : SliderVertical;
	const [control, setControl] = import_react.useState(null);
	const composedRefs = useComposedRefs$4(forwardedRef, setControl);
	const [values = [], setValues] = useControllableState({
		prop: value,
		defaultProp: defaultValue,
		onChange: /* @__PURE__ */ __name$6((value2) => {
			[...thumbRefs.current][valueIndexToChangeRef.current]?.focus({
				preventScroll: true,
				focusVisible: isKeyboardInteractionRef.current
			});
			isKeyboardInteractionRef.current = false;
			onValueChange(value2);
		}, "onChange")
	});
	const valuesBeforeSlideStartRef = import_react.useRef(values);
	const initialValuesRef = import_react.useRef(values);
	import_react.useEffect(() => {
		const associatedForm = form ? control?.ownerDocument.getElementById(form) : control?.closest("form");
		if (associatedForm instanceof HTMLFormElement) {
			const reset = /* @__PURE__ */ __name$6(() => setValues(initialValuesRef.current), "reset");
			associatedForm.addEventListener("reset", reset);
			return () => associatedForm.removeEventListener("reset", reset);
		}
	}, [
		control,
		form,
		setValues
	]);
	function handleSlideStart(value2) {
		updateValues(value2, getClosestValueIndex(values, value2));
	}
	__name$6(handleSlideStart, "handleSlideStart");
	function handleSlideMove(value2) {
		updateValues(value2, valueIndexToChangeRef.current);
	}
	__name$6(handleSlideMove, "handleSlideMove");
	function handleSlideEnd() {
		if (String(values) !== String(valuesBeforeSlideStartRef.current)) onValueCommit(values);
	}
	__name$6(handleSlideEnd, "handleSlideEnd");
	function updateValues(value2, atIndex, { commit } = { commit: false }) {
		const decimalCount = getDecimalCount(step);
		const nextValue = clamp(roundValue(Math.round((value2 - min) / step) * step + min, decimalCount), [min, max]);
		setValues((prevValues = []) => {
			const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
			if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
				valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
				const hasChanged = String(nextValues) !== String(prevValues);
				if (hasChanged && commit) onValueCommit(nextValues);
				return hasChanged ? nextValues : prevValues;
			} else return prevValues;
		});
	}
	__name$6(updateValues, "updateValues");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderProvider, {
		scope: props.__scopeSlider,
		name,
		disabled,
		min,
		max,
		valueIndexToChangeRef,
		thumbs: thumbRefs.current,
		values,
		orientation,
		form,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$1.Provider, {
			scope: props.__scopeSlider,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$1.Slot, {
				scope: props.__scopeSlider,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientation, {
					"aria-disabled": disabled,
					"data-disabled": disabled ? "" : void 0,
					...sliderProps,
					ref: composedRefs,
					onPointerDown: composeEventHandlers(sliderProps.onPointerDown, () => {
						if (!disabled) {
							valuesBeforeSlideStartRef.current = values;
							isKeyboardInteractionRef.current = false;
						}
					}),
					min,
					max,
					inverted,
					onSlideStart: disabled ? void 0 : handleSlideStart,
					onSlideMove: disabled ? void 0 : handleSlideMove,
					onSlideEnd: disabled ? void 0 : handleSlideEnd,
					onHomeKeyDown: () => {
						if (!disabled) {
							isKeyboardInteractionRef.current = true;
							updateValues(min, 0, { commit: true });
						}
					},
					onEndKeyDown: () => {
						if (!disabled) {
							isKeyboardInteractionRef.current = true;
							updateValues(max, values.length - 1, { commit: true });
						}
					},
					onStepKeyDown: ({ event, direction: stepDirection }) => {
						if (!disabled) {
							isKeyboardInteractionRef.current = true;
							const multiplier = PAGE_KEYS.includes(event.key) || event.shiftKey && ARROW_KEYS.includes(event.key) ? 10 : 1;
							const atIndex = valueIndexToChangeRef.current;
							const value2 = values[atIndex];
							updateValues(getNextStepValue(value2, {
								min,
								step,
								direction: stepDirection,
								multiplier
							}), atIndex, { commit: true });
						}
					}
				})
			})
		})
	});
}, "Slider"));
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
});
var SliderHorizontal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function SliderHorizontal2(props, forwardedRef) {
	const { min, max, dir, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
	const [slider, setSlider] = import_react.useState(null);
	const composedRefs = useComposedRefs$4(forwardedRef, setSlider);
	const rectRef = import_react.useRef(void 0);
	const direction = useDirection(dir);
	const isDirectionLTR = direction === "ltr";
	const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
	function getValueFromPointer(pointerPosition) {
		const rect = rectRef.current || slider.getBoundingClientRect();
		const value = linearScale([0, rect.width], isSlidingFromLeft ? [min, max] : [max, min]);
		rectRef.current = rect;
		return value(pointerPosition - rect.left);
	}
	__name$6(getValueFromPointer, "getValueFromPointer");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: props.__scopeSlider,
		startEdge: isSlidingFromLeft ? "left" : "right",
		endEdge: isSlidingFromLeft ? "right" : "left",
		direction: isSlidingFromLeft ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			dir: direction,
			"data-orientation": "horizontal",
			...sliderProps,
			ref: composedRefs,
			style: {
				...sliderProps.style,
				"--radix-slider-thumb-transform": "translateX(-50%)"
			},
			onSlideStart: (event) => {
				const value = getValueFromPointer(event.clientX);
				onSlideStart?.(value);
			},
			onSlideMove: (event) => {
				const value = getValueFromPointer(event.clientX);
				onSlideMove?.(value);
			},
			onSlideEnd: () => {
				rectRef.current = void 0;
				onSlideEnd?.();
			},
			onStepKeyDown: (event) => {
				const isBackKey = BACK_KEYS[isSlidingFromLeft ? "from-left" : "from-right"].includes(event.key);
				onStepKeyDown?.({
					event,
					direction: isBackKey ? -1 : 1
				});
			}
		})
	});
}, "SliderHorizontal"));
var SliderVertical = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function SliderVertical2(props, forwardedRef) {
	const { min, max, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
	const sliderRef = import_react.useRef(null);
	const ref = useComposedRefs$4(forwardedRef, sliderRef);
	const rectRef = import_react.useRef(void 0);
	const isSlidingFromBottom = !inverted;
	function getValueFromPointer(pointerPosition) {
		const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
		const value = linearScale([0, rect.height], isSlidingFromBottom ? [max, min] : [min, max]);
		rectRef.current = rect;
		return value(pointerPosition - rect.top);
	}
	__name$6(getValueFromPointer, "getValueFromPointer");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: props.__scopeSlider,
		startEdge: isSlidingFromBottom ? "bottom" : "top",
		endEdge: isSlidingFromBottom ? "top" : "bottom",
		size: "height",
		direction: isSlidingFromBottom ? 1 : -1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			"data-orientation": "vertical",
			...sliderProps,
			ref,
			style: {
				...sliderProps.style,
				"--radix-slider-thumb-transform": "translateY(50%)"
			},
			onSlideStart: (event) => {
				const value = getValueFromPointer(event.clientY);
				onSlideStart?.(value);
			},
			onSlideMove: (event) => {
				const value = getValueFromPointer(event.clientY);
				onSlideMove?.(value);
			},
			onSlideEnd: () => {
				rectRef.current = void 0;
				onSlideEnd?.();
			},
			onStepKeyDown: (event) => {
				const isBackKey = BACK_KEYS[isSlidingFromBottom ? "from-bottom" : "from-top"].includes(event.key);
				onStepKeyDown?.({
					event,
					direction: isBackKey ? -1 : 1
				});
			}
		})
	});
}, "SliderVertical"));
var SliderImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function SliderImpl2(props, forwardedRef) {
	const { __scopeSlider, onSlideStart, onSlideMove, onSlideEnd, onHomeKeyDown, onEndKeyDown, onStepKeyDown, ...sliderProps } = props;
	const context = useSliderContext(SLIDER_NAME, __scopeSlider);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...sliderProps,
		ref: forwardedRef,
		onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
			if (event.key === "Home") {
				onHomeKeyDown(event);
				event.preventDefault();
			} else if (event.key === "End") {
				onEndKeyDown(event);
				event.preventDefault();
			} else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
				onStepKeyDown(event);
				event.preventDefault();
			}
		}),
		onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
			const target = event.target;
			target.setPointerCapture(event.pointerId);
			event.preventDefault();
			if (context.thumbs.has(target)) target.focus({
				preventScroll: true,
				focusVisible: false
			});
			else onSlideStart(event);
		}),
		onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
			if (event.target.hasPointerCapture(event.pointerId)) onSlideMove(event);
		}),
		onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
			const target = event.target;
			if (target.hasPointerCapture(event.pointerId)) {
				target.releasePointerCapture(event.pointerId);
				onSlideEnd(event);
			}
		})
	});
}, "SliderImpl"));
var TRACK_NAME = "SliderTrack";
var SliderTrack = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function SliderTrack2(props, forwardedRef) {
	const { __scopeSlider, ...trackProps } = props;
	const context = useSliderContext(TRACK_NAME, __scopeSlider);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-disabled": context.disabled ? "" : void 0,
		"data-orientation": context.orientation,
		...trackProps,
		ref: forwardedRef
	});
}, "SliderTrack"));
var RANGE_NAME = "SliderRange";
var SliderRange = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function SliderRange2(props, forwardedRef) {
	const { __scopeSlider, ...rangeProps } = props;
	const context = useSliderContext(RANGE_NAME, __scopeSlider);
	const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
	const composedRefs = useComposedRefs$4(forwardedRef, import_react.useRef(null));
	const valuesCount = context.values.length;
	const percentages = context.values.map((value) => convertValueToPercentage(value, context.min, context.max));
	const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
	const offsetEnd = 100 - Math.max(...percentages);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-orientation": context.orientation,
		"data-disabled": context.disabled ? "" : void 0,
		...rangeProps,
		ref: composedRefs,
		style: {
			...props.style,
			[orientation.startEdge]: offsetStart + "%",
			[orientation.endEdge]: offsetEnd + "%"
		}
	});
}, "SliderRange"));
var [SliderThumbContextProvider, useSliderThumbContext] = createSliderContext("SliderThumb");
var THUMB_PROVIDER_NAME = "SliderThumbProvider";
function SliderThumbProvider(props) {
	const { __scopeSlider, name, children, internal_do_not_use_render } = props;
	const context = useSliderContext(THUMB_PROVIDER_NAME, __scopeSlider);
	const getItems = useCollection$1(__scopeSlider);
	const [thumb, setThumb] = import_react.useState(null);
	const index = import_react.useMemo(() => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1, [getItems, thumb]);
	const size = useSize(thumb);
	const isFormControl = thumb ? !!context.form || !!thumb.closest("form") : true;
	const value = context.values[index];
	const resolvedName = name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0);
	const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
	import_react.useEffect(() => {
		if (thumb) {
			context.thumbs.add(thumb);
			return () => {
				context.thumbs.delete(thumb);
			};
		}
	}, [thumb, context.thumbs]);
	const thumbContext = {
		value,
		name: resolvedName,
		form: context.form,
		isFormControl,
		index,
		thumb,
		onThumbChange: setThumb,
		percent,
		size
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbContextProvider, {
		scope: __scopeSlider,
		...thumbContext,
		children: isFunction$1(internal_do_not_use_render) ? internal_do_not_use_render(thumbContext) : children
	});
}
__name$6(SliderThumbProvider, "SliderThumbProvider");
var THUMB_TRIGGER_NAME = "SliderThumbTrigger";
var SliderThumbTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function SliderThumbTrigger2(props, forwardedRef) {
	const { __scopeSlider, ...thumbProps } = props;
	const context = useSliderContext(THUMB_TRIGGER_NAME, __scopeSlider);
	const orientation = useSliderOrientationContext(THUMB_TRIGGER_NAME, __scopeSlider);
	const { index, value, percent, size, onThumbChange } = useSliderThumbContext(THUMB_TRIGGER_NAME, __scopeSlider);
	const composedRefs = useComposedRefs$4(forwardedRef, onThumbChange);
	const label = getLabel(index, context.values.length);
	const orientationSize = size?.[orientation.size];
	const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection$1.ItemSlot, {
			scope: __scopeSlider,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
				role: "slider",
				"aria-label": props["aria-label"] || label,
				"aria-valuemin": context.min,
				"aria-valuenow": value,
				"aria-valuemax": context.max,
				"aria-orientation": context.orientation,
				"data-orientation": context.orientation,
				"data-disabled": context.disabled ? "" : void 0,
				tabIndex: context.disabled ? void 0 : 0,
				...thumbProps,
				ref: composedRefs,
				style: value === void 0 ? { display: "none" } : props.style,
				onFocus: composeEventHandlers(props.onFocus, () => {
					context.valueIndexToChangeRef.current = index;
				})
			})
		})
	});
}, "SliderThumbTrigger"));
var SliderThumb = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function SliderThumb2(props, forwardedRef) {
	const { __scopeSlider, name, ...thumbProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbProvider, {
		__scopeSlider,
		name,
		internal_do_not_use_render: ({ index, isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbTrigger, {
			...thumbProps,
			ref: forwardedRef,
			__scopeSlider
		}), isFormControl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderBubbleInput, { __scopeSlider }, index) : null] })
	});
}, "SliderThumb"));
var BUBBLE_INPUT_NAME$1 = "SliderBubbleInput";
var SliderBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$6(function SliderBubbleInput2({ __scopeSlider, ...props }, forwardedRef) {
	const { value, name, form } = useSliderThumbContext(BUBBLE_INPUT_NAME$1, __scopeSlider);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs$4(ref, forwardedRef);
	const prevValue = usePrevious(value);
	import_react.useEffect(() => {
		const input = ref.current;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setValue = Object.getOwnPropertyDescriptor(inputProto, "value").set;
		if (prevValue !== value && setValue) {
			const event = new Event("input", { bubbles: true });
			setValue.call(input, value);
			input.dispatchEvent(event);
		}
	}, [prevValue, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		style: { display: "none" },
		name,
		form,
		...props,
		ref: composedRefs,
		defaultValue: value
	});
}, "SliderBubbleInput"));
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
	const nextValues = [...prevValues];
	nextValues[atIndex] = nextValue;
	return nextValues.sort((a, b) => a - b);
}
__name$6(getNextSortedValues, "getNextSortedValues");
function convertValueToPercentage(value, min, max) {
	return clamp(100 / (max - min) * (value - min), [0, 100]);
}
__name$6(convertValueToPercentage, "convertValueToPercentage");
function getLabel(index, totalValues) {
	if (totalValues > 2) return `Value ${index + 1} of ${totalValues}`;
	else if (totalValues === 2) return ["Minimum", "Maximum"][index];
	else return;
}
__name$6(getLabel, "getLabel");
function getClosestValueIndex(values, nextValue) {
	if (values.length === 1) return 0;
	const distances = values.map((value) => Math.abs(value - nextValue));
	const closestDistance = Math.min(...distances);
	return distances.indexOf(closestDistance);
}
__name$6(getClosestValueIndex, "getClosestValueIndex");
function getThumbInBoundsOffset(width, left, direction) {
	const halfWidth = width / 2;
	return (halfWidth - linearScale([0, 50], [0, halfWidth])(left) * direction) * direction;
}
__name$6(getThumbInBoundsOffset, "getThumbInBoundsOffset");
function getStepsBetweenValues(values) {
	return values.slice(0, -1).map((value, index) => values[index + 1] - value);
}
__name$6(getStepsBetweenValues, "getStepsBetweenValues");
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
	if (minStepsBetweenValues > 0) {
		const stepsBetweenValues = getStepsBetweenValues(values);
		return Math.min(...stepsBetweenValues) >= minStepsBetweenValues;
	}
	return true;
}
__name$6(hasMinStepsBetweenValues, "hasMinStepsBetweenValues");
function linearScale(input, output) {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
}
__name$6(linearScale, "linearScale");
function getDecimalCount(value) {
	if (!Number.isFinite(value)) return 0;
	const str = value.toString();
	if (str.includes("e")) {
		const [coefficient, exponent] = str.split("e");
		const decimalPart2 = coefficient.split(".")[1] || "";
		const exponentNum = Number(exponent);
		return Math.max(0, decimalPart2.length - exponentNum);
	}
	const decimalPart = str.split(".")[1];
	return decimalPart ? decimalPart.length : 0;
}
__name$6(getDecimalCount, "getDecimalCount");
function roundValue(value, decimalCount) {
	const rounder = Math.pow(10, decimalCount);
	return Math.round(value * rounder) / rounder;
}
__name$6(roundValue, "roundValue");
function getNextStepValue(value, { min, step, direction, multiplier }) {
	const decimalCount = getDecimalCount(step);
	const stepsFromMin = (value - min) / step;
	const nearestSteps = Math.round(stepsFromMin);
	const isAligned = roundValue(nearestSteps * step + min, decimalCount) === roundValue(value, decimalCount);
	let nextSteps;
	if (isAligned) nextSteps = nearestSteps + multiplier * direction;
	else if (direction > 0) nextSteps = Math.ceil(stepsFromMin);
	else nextSteps = Math.floor(stepsFromMin);
	return roundValue(nextSteps * step + min, decimalCount);
}
__name$6(getNextStepValue, "getNextStepValue");
function isFunction$1(value) {
	return typeof value === "function";
}
__name$6(isFunction$1, "isFunction");
//#endregion
//#region components/ui/slider.tsx
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
	const _values = import_react.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max], [
		value,
		defaultValue,
		min,
		max
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		"data-slot": "slider",
		defaultValue,
		value,
		min,
		max,
		className: cn("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			"data-slot": "slider-track",
			className: cn("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, {
				"data-slot": "slider-range",
				className: cn("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
			})
		}), Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, {
			"data-slot": "slider-thumb",
			className: "block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
		}, index))]
	});
}
var site_config_default = {
	version: 2,
	savedAt: "2026-09-05T17:19:27.519Z",
	services: [
		{
			"id": "customer-service",
			"title": "Customer service e prenotazioni, gestione automatica ordini, Follow-up automatico e recupero clienti",
			"price": "€2.500–6.500 + €250–700/mese",
			"summary": "Raccoglie i dati forniti dal cliente e genera preventivi e proposte personalizzate. Gestisce prenotazioni, conferme, cancellazioni, promemoria e lista d'attesa, trasforma le richieste dei clienti in ordini strutturati e segnala incongruenze o errori. Aggiorna automaticamente clienti, trattative, stati progetto e prossime azioni da fare. Predispone automaticamente follow-up a clienti inattivi da molto e a preventivi ignorati. Raccoglie i dati forniti per il miglioramento di mese in mese come le richieste più frequenti e il target che rende di più.",
			"detailIntro": "Centralizza le richieste provenienti da telefono, email, chat, sito web e moduli online, riconoscendo automaticamente il tipo di richiesta e raccogliendo le informazioni necessarie.",
			"bullets": [
				"Risponde usando informazioni reali dell’azienda: servizi, prezzi, disponibilità, orari, zone servite e condizioni.",
				"Raccoglie i dati necessari per un preventivo e prepara una bozza di proposta commerciale secondo listini e regole definite.",
				"Classifica email e richieste in categorie personalizzate e le inoltra al reparto o alla persona corretta.",
				"Gestisce prenotazioni, disponibilità, conferme, cancellazioni, spostamenti, promemoria e liste d’attesa.",
				"Trasforma messaggi con prodotti e quantità in ordini strutturati e segnala eventuali discordanze.",
				"Aggiorna il CRM quando un cliente risponde, accetta un preventivo, chiede modifiche o passa a una nuova fase.",
				"Prepara follow-up dopo un numero prestabilito di giorni e individua clienti abituali che non acquistano più da un periodo anomalo.",
				"Distingue le richieste semplici da quelle che richiedono l’intervento umano, fornendo all’operatore un riepilogo completo."
			],
			"closing": "Nel tempo evidenzia quali servizi vengono richiesti più spesso, quali categorie convertono meglio e quali passaggi causano l’abbandono."
		},
		{
			"id": "content-catalogues",
			"title": "Creazione contenuti e post social, automazione cataloghi, schede prodotto e immagini commerciali",
			"price": "€900–2.500 + €200–600/mese",
			"summary": "Prepara post, caption, immagini e contenuti per i social. Crea descrizioni, schede prodotto, tag, traduzioni e varianti grafiche promozionali basate sulle fotografie e sui prodotti dell'azienda.",
			"detailIntro": "Trasforma informazioni grezze su prodotti, servizi, promozioni ed eventi aziendali in contenuti pronti per diversi canali.",
			"bullets": [
				"Parte da nome, fotografie, caratteristiche, prezzo, materiali, dimensioni, target e promozione.",
				"Genera titoli, descrizioni, caption, caratteristiche principali, schede tecniche, tag e keyword.",
				"Prepara testi promozionali per il sito, newsletter, descrizioni SEO, ecommerce e marketplace.",
				"Crea post Facebook, post Instagram, storie e traduzioni.",
				"Adatta le fotografie a formati verticali, orizzontali e quadrati, con fondi neutri, banner e materiali promozionali.",
				"Genera varianti dello stesso messaggio o della stessa immagine per confrontare quali producono più interazioni o vendite.",
				"Elabora cataloghi ampi partendo da un database, mantenendo una struttura coerente e organizzata."
			],
			"closing": ""
		},
		{
			"id": "sales-conversations",
			"title": "Analisi delle conversazioni commerciali per personale addetto alle vendite",
			"price": "€1.500–3.500 + €150–450/mese",
			"summary": "Analizza conversazioni commerciali registrate o trascritte secondo le modalità e informative applicabili e identifica interesse, obiezioni, richieste e prossimi passi da fare. Analizza le conversazioni commerciali e suggerisce come migliorare il processo di vendita, individuando su base aggregata gli errori più comuni e i passi che funzionano più spesso, usando i pattern per analizzare cosa fa più spesso concludere positivamente o negativamente una vendita.",
			"detailIntro": "Analizza conversazioni commerciali registrate o trascritte secondo modalità e informative applicabili, trasformandole in informazioni utilizzabili.",
			"bullets": [
				"Identifica prodotto o servizio richiesto, necessità, segnali di interesse, obiezioni, budget e tempistiche.",
				"Rileva competitor citati, domande senza risposta e prossimo passo consigliato.",
				"Genera un riepilogo da inserire nel CRM evitando la compilazione manuale dopo ogni telefonata.",
				"Analizza domande fatte, obiezioni approfondite, argomentazioni utilizzate, chiusure tentate e motivazioni del rifiuto.",
				"Su base aggregata individua quali argomentazioni, domande e passaggi compaiono più spesso nelle vendite concluse.",
				"Evidenzia quali obiezioni precedono più frequentemente la perdita del cliente e quali prodotti generano più difficoltà."
			],
			"closing": "Non produce ranking dei venditori, score individuali o inferenze automatiche sulle emozioni dei lavoratori dalla voce."
		},
		{
			"id": "document-compliance",
			"title": "Pre-verifica di documenti, pratiche e conformità",
			"price": "€1.500–3.500 + €150–400/mese",
			"summary": "Esegue controlli preliminari rispetto alle direttive, checklist, regole e fonti configurate dall'azienda e segnala possibili discrepanze da verificare.",
			"detailIntro": "Controlla automaticamente la presenza e la completezza dei documenti e segnala incoerenze e possibili requisiti non soddisfatti.",
			"bullets": [
				"Verifica documenti presenti o mancanti, campi incompleti, firme, date, scadenze, codici, allegati e formati.",
				"Individua valori incoerenti, dati discordanti o informazioni frammentate tra più documenti.",
				"Confronta informazioni presenti nelle fonti autorizzate dall’azienda secondo le relative regole di accesso.",
				"Segnala anomalie prima che una pratica venga approvata o archiviata.",
				"Può confrontare i dati con le problematiche in corso in azienda o nella fornitura, quando previsto dal flusso."
			],
			"closing": "È uno strumento di pre-verifica: non sostituisce certificazioni legali, professionisti o le responsabilità previste dal processo aziendale."
		},
		{
			"id": "meetings-operations",
			"title": "Trascrizione riunioni, report e assegnazione attività, reportistica e assistente operativo per titolare e manager",
			"price": "€2.000–5.500 + €200–650/mese",
			"summary": "Trasforma riunioni in riassunti, decisioni, compiti e scadenze. Analizza dati aziendali e genera report con trend, problemi e indicatori chiave. Riassume la situazione aziendale dai report inoltrati, chat testuali e note vocali inviate ai fini dell'attività e segnala priorità, anomalie, problemi e attività urgenti o in scadenza.",
			"detailIntro": "Raccoglie informazioni da più fonti aziendali e le trasforma in una visione operativa unica per titolare e manager.",
			"bullets": [
				"Da una riunione estrae argomenti, decisioni, problemi, persone coinvolte, attività, responsabili e scadenze.",
				"Prepara task nei sistemi usati dall’azienda oppure una lista da approvare.",
				"Raccoglie dati da CRM, preventivi, ordini, assistenza, progetti, magazzino, file, report, chat e note vocali abilitate.",
				"Analizza l’andamento nel tempo e segnala trend, anomalie, attività bloccate, problemi ripetuti e scadenze dimenticate.",
				"Permette ai dipendenti di inviare brevi aggiornamenti, anche con note vocali, trasformandoli in informazioni operative.",
				"Crea una situation room digitale per il titolare e i manager."
			],
			"closing": "Il sistema evidenzia criticità relative ad attività e processi senza attribuire automaticamente punteggi di produttività ai singoli lavoratori."
		},
		{
			"id": "commercial-radar",
			"title": "Scansione continua del web di potenziali clienti, analisi recensioni e monitoraggio automatico dei concorrenti",
			"price": "€1.500–4.000 + €250–700/mese",
			"summary": "Scansiona costantemente i canali web pubblicamente accessibili alla ricerca di post e annunci che stanno già manifestando interesse o bisogno per i tuoi servizi e segnala quelli con maggiore probabilità di conversione, evitando l'utilizzo di dati personali non necessari o sensibili. In contemporanea, monitora costantemente i prezzi pubblici, servizi, novità e avanzamenti dei concorrenti, aggiornando i report in tempo reale appena un cambiamento viene pubblicato e presentandolo nel rapporto di analisi settimanale o mensile. Scansiona automaticamente le recensioni ricevute su ogni piattaforma abilitata e individua punti di forza e i commenti negativi, identifica i pattern di problemi e lamentele ricorrenti.",
			"detailIntro": "Uno strumento di commercial intelligence che raccoglie informazioni da fonti pubblicamente accessibili e le trasforma in segnali utili per vendite, marketing e strategia.",
			"bullets": [
				"Individua richieste pubbliche, discussioni in cui emerge un problema, nuove sedi, espansioni, assunzioni e cambi di gestione.",
				"Monitora bandi, gare, appalti, aziende appena aperte e nuove esigenze commerciali rilevabili pubblicamente.",
				"Classifica le opportunità in base a posizione, compatibilità con i servizi, tipo di richiesta e probabilità stimata di conversione.",
				"Crea una lista di lead prioritari e mostra quali segnali hanno determinato la priorità.",
				"Controlla prezzi, servizi, prodotti, siti, campagne, annunci e promozioni dei concorrenti.",
				"Raccoglie recensioni, distingue il tono generale e individua problemi e punti di forza citati più spesso.",
				"Confronta periodi diversi e segnala aumenti improvvisi di determinate lamentele.",
				"Registra le modifiche significative e le inserisce nei report o genera un avviso immediato."
			],
			"closing": "Il risultato viene condensato in un report settimanale o mensile con lead, movimenti dei concorrenti, problemi emergenti e possibili azioni."
		},
		{
			"id": "inventory-scorte",
			"title": "Gestione intelligente di magazzino e scorte",
			"price": "€2.000–5.000 + €200–500/mese",
			"summary": "Monitora stock, consumi e vendite per stimare e prevedere possibili carenze o eccessi di scorte.",
			"detailIntro": "Raccoglie e analizza i dati necessari per rendere il magazzino più prevedibile e ridurre le decisioni basate solo sull’intuito.",
			"bullets": [
				"Analizza quantità presenti, vendite, consumi, ordini ricevuti e ordini ai fornitori.",
				"Considera tempi medi di consegna, stagionalità, prodotti in scadenza e andamento storico.",
				"Confronta andamento storico e attuale dei prodotti.",
				"Stima quando effettuare un nuovo ordine e segnala i prodotti fermi da troppo tempo.",
				"Genera report automatici sullo stato del magazzino.",
				"Quando autorizzato, incrocia trend sul web, stagionalità, eventi aziendali e problemi dei fornitori rilevati nei report."
			],
			"closing": ""
		},
		{
			"id": "knowledge-base",
			"title": "Assistente su documenti di knowledge base aziendale e formazione dipendenti",
			"price": "€1.500–4.000 + €150–450/mese",
			"summary": "Permette di fare domande a manuali, PDF, procedure e documenti interni. Estrae dati da documenti e li inserisce automaticamente in database e gestionali. Aiuta i dipendenti a imparare procedure per automatizzare e snellire il lavoro man mano che si presenta, e trovare rapidamente risposte operative ai problemi ricorrenti.",
			"detailIntro": "Crea una knowledge base interrogabile a partire dai documenti dell’azienda, con accessi configurati in base ai permessi applicabili.",
			"bullets": [
				"Utilizza manuali, PDF, materiale formativo, procedure, documentazione tecnica, regolamenti, listini e FAQ.",
				"Risponde alle domande operative indicando anche il documento e il paragrafo da cui è stata ricavata l’informazione.",
				"Estrae dati da PDF, moduli, scansioni e documenti e li trasforma in informazioni strutturate.",
				"Inserisce dati in database, fogli di calcolo o gestionali quando il flusso è autorizzato.",
				"Riassume documenti lunghi, confronta più file e cerca informazioni distribuite in archivi differenti.",
				"Trasforma le spiegazioni dei dipendenti esperti in nuove procedure strutturate, conservando il know-how interno.",
				"Crea percorsi di onboarding, spiegazioni passo passo, quiz, simulazioni e checklist operative."
			],
			"closing": "Risultati di quiz e interazioni non vengono usati automaticamente per ranking o decisioni sul rapporto di lavoro."
		}
	],
	copy: {
		"brandName": "Sito implementazioni IA",
		"brandCaption": "sistemi IA per PMI",
		"eyebrow": "Sistemi connessi · operazioni più lucide",
		"headingPrimary": "L’IA entra nei processi.",
		"headingSecondary": "Il lavoro resta umano.",
		"introCopy": "Soluzioni concrete per ridurre il lavoro ripetitivo, leggere meglio i segnali e trasformare le informazioni aziendali in azioni.",
		"boardNote": "Passa sopra una tessera per esplorarla.",
		"editButtonLabel": "Modifica testo",
		"reorderButtonLabel": "Sposta tessere",
		"lightModeLabel": "Scura",
		"darkModeLabel": "Chiara",
		"moreButtonLabel": "Dimmi di più",
		"contactButtonLabel": "Parliamo di questo servizio",
		"swapButtonLabel": "Scambia",
		"selectedButtonLabel": "Selezionata",
		"editHint": "Modifica i campi direttamente nelle tessere; per il testo completo apri “Dimmi di più”.",
		"reorderHint": "Trascina le tessere per scambiarle o selezionane due in successione.",
		"swapHint": "Seleziona un’altra tessera per scambiarle, oppure trascina una tessera sopra un’altra.",
		"saveLabel": "Salva",
		"cancelLabel": "Annulla",
		"restoreLabel": "Ripristina tutti",
		"editorTitle": "Testi della pagina",
		"editorHint": "Lascia vuoto un campo per rimuovere quel testo.",
		"backgroundButtonLabel": "Sfondi",
		"backgroundPanelTitle": "Scegli lo sfondo",
		"backgroundPreviousLabel": "Precedente",
		"backgroundNextLabel": "Successivo",
		"backgroundRemoveLabel": "Rimuovi",
		"backgroundHideLabel": "Spegni",
		"backgroundShowLabel": "Riattiva",
		"backgroundRestoreLabel": "Ripristina sfondi",
		"backgroundOriginalLabel": "Originale",
		"backgroundPastelLabel": "Pastello",
		"backgroundAvailableLabel": "sfondi disponibili",
		"backgroundNoImageLabel": "Nessuno sfondo",
		"backgroundHint": "Clicca una miniatura o usa i pulsanti per confrontarli.",
		"backgroundOffHint": "Lo sfondo è spento.",
		"backgroundKeyboardHint": "Clicca “Sfondi” per attivare la tastiera · ←/→ cambia sfondo · Canc/Backspace rimuove quello attivo · Esc disattiva.",
		"backgroundLightModeLabel": "Modalità chiara",
		"backgroundDarkModeLabel": "Modalità scura",
		"backgroundNames": {
			"galaxy-gold": "Oro orbitale",
			"galaxy-purple": "Polvere viola",
			"nebula-ruby-blue": "Ruby blu",
			"galaxy-barred": "Spirale dorata",
			"galaxy-lilac": "Galassia lilla",
			"nebula-blue-red": "Nebulosa rosso blu",
			"nebula-deep-teal": "Nebulosa profonda",
			"galaxy-magenta": "Vortice magenta",
			"cosmic-portal": "Portale cosmico",
			"star-field-vertical": "Cielo stellato verticale",
			"smm-deserto-dorato": "SMM · Deserto dorato",
			"smm-orizzonte-marziano": "SMM · Orizzonte marziano",
			"smm-mare-di-nuvole": "SMM · Mare di nuvole",
			"smm-lago-rosa": "SMM · Lago rosa",
			"smm-mare-bioluminescente": "SMM · Mare bioluminescente",
			"smm-prato-viola": "SMM · Prato viola",
			"pastel-gold-lilac": "Pastello oro e lilla",
			"pastel-galaxy-blue-pink": "Pastello blu e rosa",
			"pastel-nebula-aqua-peach": "Pastello acquamarina e pesca",
			"pastel-galaxy-peach": "Pastello pesca",
			"pastel-lilac-cloud": "Pastello nuvola lilla",
			"pastel-nebula-coral": "Pastello corallo",
			"pastel-nebula-pink-blue": "Pastello rosa e azzurro",
			"pastel-nebula-mint": "Pastello menta",
			"pastel-cosmic-portal": "Pastello portale cosmico",
			"pastel-gold-mint": "Pastello oro e menta"
		},
		"swappedNotice": "Tessere scambiate. Premi Salva per confermare.",
		"selectedNotice": "Seleziona un’altra tessera per scambiarle.",
		"savedNotice": "Modifiche salvate in questo browser.",
		"cancelledNotice": "Modifiche annullate.",
		"restoredNotice": "Versione iniziale caricata. Premi Salva per confermare."
	},
	contact: {
		"url": "",
		"channels": [
			{
				"id": "whatsapp",
				"label": "WhatsApp",
				"url": "https://wa.me/393505821003"
			},
			{
				"id": "telegram",
				"label": "Telegram",
				"url": "https://t.me/nomad_echx"
			},
			{
				"id": "email",
				"label": "Email",
				"url": "mailto:nomadecho.existing650@passmail.net"
			}
		]
	},
	appearance: {
		"cardBlur": 0,
		"glassMode": "opaque",
		"backgrounds": {
			"selected": { "dark": "smm-orizzonte-marziano" },
			"hiddenIds": { "dark": [
				"galaxy-gold",
				"galaxy-purple",
				"nebula-ruby-blue",
				"galaxy-barred",
				"nebula-blue-red",
				"nebula-deep-teal",
				"galaxy-magenta",
				"cosmic-portal",
				"star-field-vertical",
				"smm-deserto-dorato",
				"smm-mare-di-nuvole",
				"smm-lago-rosa",
				"smm-mare-bioluminescente",
				"smm-prato-viola"
			] },
			"enabled": { "dark": true }
		}
	}
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowLeft = createLucideIcon("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Clipboard = createLucideIcon("clipboard", [["rect", {
	width: "8",
	height: "4",
	x: "8",
	y: "2",
	rx: "1",
	ry: "1",
	key: "tgr4d6"
}], ["path", {
	d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
	key: "116196"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileQuestionMark = createLucideIcon("file-question-mark", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}],
	["path", {
		d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",
		key: "mhlwft"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Upload = createLucideIcon("upload", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m17 8-5-5-5 5",
		key: "7q97r8"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}]
]);
//#endregion
//#region node_modules/@radix-ui/react-checkbox/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$5 = Object.defineProperty;
var __name$5 = (target, value) => __defProp$5(target, "name", {
	value,
	configurable: true
});
function setRef$2(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$5(setRef$2, "setRef");
function composeRefs$2(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$2(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$2(refs[i], null);
			}
		};
	};
}
__name$5(composeRefs$2, "composeRefs");
function useComposedRefs$2(...refs) {
	return import_react.useCallback(composeRefs$2(...refs), refs);
}
__name$5(useComposedRefs$2, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-checkbox/dist/index.mjs
var __defProp$4 = Object.defineProperty;
var __name$4 = (target, value) => __defProp$4(target, "name", {
	value,
	configurable: true
});
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = /* @__PURE__ */ createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
	const { __scopeCheckbox, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required, value = "on", internal_do_not_use_render } = props;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: CHECKBOX_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const [userInteractionCount, onUserInteraction] = import_react.useReducer((count) => count + 1, 0);
	const isFormControl = control ? !!form || !!control.closest("form") : true;
	const context = {
		checked,
		disabled,
		setChecked,
		control,
		setControl,
		name,
		form,
		value,
		hasConsumerStoppedPropagationRef,
		userInteractionCount,
		onUserInteraction,
		required,
		defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
		isFormControl,
		bubbleInput,
		setBubbleInput
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProviderImpl, {
		scope: __scopeCheckbox,
		...context,
		children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
__name$4(CheckboxProvider, "CheckboxProvider");
var TRIGGER_NAME$2 = "CheckboxTrigger";
var CheckboxTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function CheckboxTrigger2({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) {
	const { control, value, disabled, checked, required, setControl, setChecked, hasConsumerStoppedPropagationRef, onUserInteraction, isFormControl, bubbleInput } = useCheckboxContext(TRIGGER_NAME$2, __scopeCheckbox);
	const composedRefs = useComposedRefs$2(forwardedRef, setControl);
	const initialCheckedStateRef = import_react.useRef(checked);
	import_react.useEffect(() => {
		const form = control?.form;
		if (form) {
			const reset = /* @__PURE__ */ __name$4(() => setChecked(initialCheckedStateRef.current), "reset");
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [control, setChecked]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": isIndeterminate(checked) ? "mixed" : checked,
		"aria-required": required,
		"data-state": getState$2(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...checkboxProps,
		ref: composedRefs,
		onKeyDown: composeEventHandlers(onKeyDown, (event) => {
			if (event.key === "Enter") event.preventDefault();
		}),
		onClick: composeEventHandlers(onClick, (event) => {
			onUserInteraction();
			setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
}, "CheckboxTrigger"));
var Checkbox$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function Checkbox2(props, forwardedRef) {
	const { __scopeCheckbox, name, checked, defaultChecked, required, disabled, value, onCheckedChange, form, ...checkboxProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProvider, {
		__scopeCheckbox,
		checked,
		defaultChecked,
		disabled,
		required,
		onCheckedChange,
		name,
		form,
		value,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxTrigger, {
			...checkboxProps,
			ref: forwardedRef,
			__scopeCheckbox
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxBubbleInput, { __scopeCheckbox })] })
	});
}, "Checkbox"));
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function CheckboxIndicator2(props, forwardedRef) {
	const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
	const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isIndeterminate(context.checked) || context.checked === true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState$2(context.checked),
			"data-disabled": context.disabled ? "" : void 0,
			...indicatorProps,
			ref: forwardedRef,
			style: {
				pointerEvents: "none",
				...props.style
			}
		})
	});
}, "CheckboxIndicator"));
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$4(function CheckboxBubbleInput2({ __scopeCheckbox, onClick, ...props }, forwardedRef) {
	const { control, hasConsumerStoppedPropagationRef, userInteractionCount, checked, defaultChecked, required, disabled, name, value, form, bubbleInput, setBubbleInput } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
	const composedRefs = useComposedRefs$2(forwardedRef, setBubbleInput);
	const controlSize = useSize(control);
	const shouldStopClickPropagationRef = import_react.useRef(false);
	const prevCheckedRef = import_react.useRef(checked);
	const prevUserInteractionCountRef = import_react.useRef(userInteractionCount);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
		prevUserInteractionCountRef.current = userInteractionCount;
		const checkedChanged = prevCheckedRef.current !== checked;
		prevCheckedRef.current = checked;
		const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
		if (checkedChanged && setChecked) {
			shouldStopClickPropagationRef.current = !isUserInteraction;
			const event = new Event("click", { bubbles });
			input.indeterminate = isIndeterminate(checked);
			setChecked.call(input, isIndeterminate(checked) ? false : checked);
			input.dispatchEvent(event);
			shouldStopClickPropagationRef.current = false;
		}
	}, [
		bubbleInput,
		checked,
		hasConsumerStoppedPropagationRef,
		userInteractionCount
	]);
	const defaultCheckedRef = import_react.useRef(isIndeterminate(checked) ? false : checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: defaultChecked ?? defaultCheckedRef.current,
		required,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			if (shouldStopClickPropagationRef.current) event.stopPropagation();
		}),
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "CheckboxBubbleInput"));
function isFunction(value) {
	return typeof value === "function";
}
__name$4(isFunction, "isFunction");
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
__name$4(isIndeterminate, "isIndeterminate");
function getState$2(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name$4(getState$2, "getState");
//#endregion
//#region components/ui/checkbox.tsx
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
		"data-slot": "checkbox",
		className: cn("peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region node_modules/@radix-ui/react-accordion/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$3 = Object.defineProperty;
var __name$3 = (target, value) => __defProp$3(target, "name", {
	value,
	configurable: true
});
function setRef$1(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$3(setRef$1, "setRef");
function composeRefs$1(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$1(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$1(refs[i], null);
			}
		};
	};
}
__name$3(composeRefs$1, "composeRefs");
function useComposedRefs$1(...refs) {
	return import_react.useCallback(composeRefs$1(...refs), refs);
}
__name$3(useComposedRefs$1, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-collapsible/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", {
	value,
	configurable: true
});
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$2(setRef, "setRef");
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef(refs[i], null);
			}
		};
	};
}
__name$2(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
	return import_react.useCallback(composeRefs(...refs), refs);
}
__name$2(useComposedRefs, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-collapsible/dist/index.mjs
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = /* @__PURE__ */ createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function Collapsible2(props, forwardedRef) {
	const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: COLLAPSIBLE_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleProvider, {
		scope: __scopeCollapsible,
		disabled,
		contentId: useId(),
		open,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState$1(open),
			"data-disabled": disabled ? "" : void 0,
			...collapsibleProps,
			ref: forwardedRef
		})
	});
}, "Collapsible"));
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function CollapsibleTrigger2(props, forwardedRef) {
	const { __scopeCollapsible, ...triggerProps } = props;
	const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-controls": context.open ? context.contentId : void 0,
		"aria-expanded": context.open || false,
		"data-state": getState$1(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		disabled: context.disabled,
		...triggerProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
	});
}, "CollapsibleTrigger"));
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function CollapsibleContent2(props, forwardedRef) {
	const { forceMount, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContentImpl, {
			...contentProps,
			ref: forwardedRef,
			present
		})
	});
}, "CollapsibleContent"));
var CollapsibleContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$1(function CollapsibleContentImpl2(props, forwardedRef) {
	const { __scopeCollapsible, present, children, ...contentProps } = props;
	const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
	const [isPresent, setIsPresent] = import_react.useState(present);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, ref);
	const heightRef = import_react.useRef(0);
	const height = heightRef.current;
	const widthRef = import_react.useRef(0);
	const width = widthRef.current;
	const isOpen = context.open || isPresent;
	const isMountAnimationPreventedRef = import_react.useRef(isOpen);
	const originalStylesRef = import_react.useRef(void 0);
	import_react.useEffect(() => {
		const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
		return () => cancelAnimationFrame(rAF);
	}, []);
	useLayoutEffect2(() => {
		const node = ref.current;
		if (node) {
			originalStylesRef.current = originalStylesRef.current || {
				transitionDuration: node.style.transitionDuration,
				animationName: node.style.animationName
			};
			node.style.transitionDuration = "0s";
			node.style.animationName = "none";
			const rect = node.getBoundingClientRect();
			heightRef.current = rect.height;
			widthRef.current = rect.width;
			if (!isMountAnimationPreventedRef.current) {
				node.style.transitionDuration = originalStylesRef.current.transitionDuration;
				node.style.animationName = originalStylesRef.current.animationName;
			}
			setIsPresent(present);
		}
	}, [context.open, present]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getState$1(context.open),
		"data-disabled": context.disabled ? "" : void 0,
		id: context.contentId,
		hidden: !isOpen,
		...contentProps,
		ref: composedRefs,
		style: {
			[`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
			[`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
			...props.style
		},
		children: isOpen && children
	});
}, "CollapsibleContentImpl"));
function getState$1(open) {
	return open ? "open" : "closed";
}
__name$1(getState$1, "getState");
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
//#endregion
//#region node_modules/@radix-ui/react-accordion/dist/index.mjs
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = [
	"Home",
	"End",
	"ArrowDown",
	"ArrowUp",
	"ArrowLeft",
	"ArrowRight"
];
var [Collection, useCollection, createCollectionScope] = /* @__PURE__ */ createCollection(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = /* @__PURE__ */ createContextScope(ACCORDION_NAME, [createCollectionScope, createCollapsibleScope]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function Accordion2(props, forwardedRef) {
	const { type, ...accordionProps } = props;
	const singleProps = accordionProps;
	const multipleProps = accordionProps;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
		scope: props.__scopeAccordion,
		children: type === "multiple" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImplMultiple, {
			...multipleProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImplSingle, {
			...singleProps,
			ref: forwardedRef
		})
	});
}, "Accordion"));
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(ACCORDION_NAME, { collapsible: false });
var AccordionImplSingle = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionImplSingle2(props, forwardedRef) {
	const { value: valueProp, defaultValue, onValueChange = /* @__PURE__ */ __name(() => {}, "onValueChange"), collapsible = false, ...accordionSingleProps } = props;
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? "",
		onChange: onValueChange,
		caller: ACCORDION_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionValueProvider, {
		scope: props.__scopeAccordion,
		value: import_react.useMemo(() => value ? [value] : [], [value]),
		onItemOpen: setValue,
		onItemClose: import_react.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionCollapsibleProvider, {
			scope: props.__scopeAccordion,
			collapsible,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImpl, {
				...accordionSingleProps,
				ref: forwardedRef
			})
		})
	});
}, "AccordionImplSingle"));
var AccordionImplMultiple = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionImplMultiple2(props, forwardedRef) {
	const { value: valueProp, defaultValue, onValueChange = /* @__PURE__ */ __name(() => {}, "onValueChange"), ...accordionMultipleProps } = props;
	const [value, setValue] = useControllableState({
		prop: valueProp,
		defaultProp: defaultValue ?? [],
		onChange: onValueChange,
		caller: ACCORDION_NAME
	});
	const handleItemOpen = import_react.useCallback((itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]), [setValue]);
	const handleItemClose = import_react.useCallback((itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)), [setValue]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionValueProvider, {
		scope: props.__scopeAccordion,
		value,
		onItemOpen: handleItemOpen,
		onItemClose: handleItemClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionCollapsibleProvider, {
			scope: props.__scopeAccordion,
			collapsible: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImpl, {
				...accordionMultipleProps,
				ref: forwardedRef
			})
		})
	});
}, "AccordionImplMultiple"));
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionImpl2(props, forwardedRef) {
	const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
	const composedRefs = useComposedRefs$1(import_react.useRef(null), forwardedRef);
	const getItems = useCollection(__scopeAccordion);
	const isDirectionLTR = useDirection(dir) === "ltr";
	const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
		if (!ACCORDION_KEYS.includes(event.key)) return;
		const target = event.target;
		const triggerCollection = getItems().filter((item) => !item.ref.current?.disabled);
		const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
		const triggerCount = triggerCollection.length;
		if (triggerIndex === -1) return;
		event.preventDefault();
		let nextIndex = triggerIndex;
		const homeIndex = 0;
		const endIndex = triggerCount - 1;
		const moveNext = /* @__PURE__ */ __name(() => {
			nextIndex = triggerIndex + 1;
			if (nextIndex > endIndex) nextIndex = homeIndex;
		}, "moveNext");
		const movePrev = /* @__PURE__ */ __name(() => {
			nextIndex = triggerIndex - 1;
			if (nextIndex < homeIndex) nextIndex = endIndex;
		}, "movePrev");
		switch (event.key) {
			case "Home":
				nextIndex = homeIndex;
				break;
			case "End":
				nextIndex = endIndex;
				break;
			case "ArrowRight":
				if (orientation === "horizontal") if (isDirectionLTR) moveNext();
				else movePrev();
				break;
			case "ArrowDown":
				if (orientation === "vertical") moveNext();
				break;
			case "ArrowLeft":
				if (orientation === "horizontal") if (isDirectionLTR) movePrev();
				else moveNext();
				break;
			case "ArrowUp":
				if (orientation === "vertical") movePrev();
				break;
		}
		triggerCollection[nextIndex % triggerCount].ref.current?.focus();
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionImplProvider, {
		scope: __scopeAccordion,
		disabled,
		direction: dir,
		orientation,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
			scope: __scopeAccordion,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				...accordionProps,
				"data-orientation": orientation,
				ref: composedRefs,
				onKeyDown: disabled ? void 0 : handleKeyDown
			})
		})
	});
}, "AccordionImpl"));
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionItem2(props, forwardedRef) {
	const { __scopeAccordion, value, ...accordionItemProps } = props;
	const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
	const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
	const collapsibleScope = useCollapsibleScope(__scopeAccordion);
	const triggerId = useId();
	const open = value && valueContext.value.includes(value) || false;
	const disabled = accordionContext.disabled || props.disabled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItemProvider, {
		scope: __scopeAccordion,
		open,
		disabled,
		triggerId,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
			"data-orientation": accordionContext.orientation,
			"data-state": getState(open),
			...collapsibleScope,
			...accordionItemProps,
			ref: forwardedRef,
			disabled,
			open,
			onOpenChange: (open2) => {
				if (open2) valueContext.onItemOpen(value);
				else valueContext.onItemClose(value);
			}
		})
	});
}, "AccordionItem"));
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionHeader2(props, forwardedRef) {
	const { __scopeAccordion, ...headerProps } = props;
	const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
	const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h3, {
		"data-orientation": accordionContext.orientation,
		"data-state": getState(itemContext.open),
		"data-disabled": itemContext.disabled ? "" : void 0,
		...headerProps,
		ref: forwardedRef
	});
}, "AccordionHeader"));
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionTrigger2(props, forwardedRef) {
	const { __scopeAccordion, ...triggerProps } = props;
	const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
	const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
	const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
	const collapsibleScope = useCollapsibleScope(__scopeAccordion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
		scope: __scopeAccordion,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
			"aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
			"data-orientation": accordionContext.orientation,
			id: itemContext.triggerId,
			...collapsibleScope,
			...triggerProps,
			ref: forwardedRef
		})
	});
}, "AccordionTrigger"));
var CONTENT_NAME = "AccordionContent";
var AccordionContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function AccordionContent2(props, forwardedRef) {
	const { __scopeAccordion, ...contentProps } = props;
	const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
	const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
	const collapsibleScope = useCollapsibleScope(__scopeAccordion);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
		role: "region",
		"aria-labelledby": itemContext.triggerId,
		"data-orientation": accordionContext.orientation,
		...collapsibleScope,
		...contentProps,
		ref: forwardedRef,
		style: {
			"--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
			"--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
			...props.style
		}
	});
}, "AccordionContent"));
function getState(open) {
	return open ? "open" : "closed";
}
__name(getState, "getState");
var Root2 = Accordion$1;
var Item = AccordionItem$1;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger$1;
var Content2 = AccordionContent$1;
//#endregion
//#region components/ui/accordion.tsx
function Accordion({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "accordion",
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		"data-slot": "accordion-item",
		className: cn("border-b last:border-b-0", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			"data-slot": "accordion-trigger",
			className: cn("flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" })]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("pt-0 pb-4", className),
			children
		})
	});
}
var offer_content_default = {
	version: 1,
	catalogVersion: "2026-09-06.1",
	savedAt: "2026-09-06T00:00:00.000Z",
	home: {
		"configuratorLabel": "Personalizza il tuo pacchetto",
		"configuratorHint": "Scegli solo ciò che ti serve",
		"faqLabel": "Domande frequenti",
		"reviewsLabel": "Recensioni"
	},
	configurator: {
		"title": "La tua soluzione, su misura",
		"intro": "Seleziona un pacchetto completo oppure combina i singoli servizi più adatti alla tua attività.",
		"instruction": "Seleziona un pacchetto per includere tutti i suoi servizi. Apri i dettagli per personalizzare la selezione.",
		"pricingExplanation": "Le fasce mostrate nella homepage coprono progetti con perimetri diversi. Qui ogni voce usa una stima puntuale per una configurazione standard; la proposta finale viene definita dopo la verifica tecnica.",
		"pricingNote": "Gli importi sono indicativi. La proposta definitiva viene definita dopo la verifica di integrazioni, volumi e requisiti. Eventuali costi di piattaforme e consumi esterni sono indicati separatamente."
	},
	chat: {
		"title": "Parliamone direttamente",
		"description": "Hai una domanda o vuoi capire quali servizi scegliere? Scrivimi qui.",
		"notice": "Il testo viene aperto su Telegram e l’invio viene completato da te nell’app. Non stai parlando con un assistente IA.",
		"primaryChannel": "telegram",
		"alternateChannel": "whatsapp",
		"backendUrl": "https://sito-implementazione-ia-chat.cloudfaredominio-reshoot713.workers.dev"
	},
	packages: [
		{
			"id": "customer-service",
			"completeSetupCents": 5e5,
			"completeMonthlyCents": 5e4,
			"modules": [
				{
					"id": "customer-chat-email",
					"name": "Assistenza clienti su chat, sito ed email",
					"description": "Risponde usando informazioni aziendali approvate e passa i casi non risolvibili a una persona.",
					"setupCents": 9e4,
					"monthlyCents": 9e3,
					"visible": true,
					"prerequisite": "Contenuti aziendali aggiornati, regole di risposta e accesso ai canali scelti.",
					"scope": "Canali, volumi, lingue, fonti informative e modalità di passaggio all’operatore."
				},
				{
					"id": "customer-phone",
					"name": "Assistenza telefonica e passaggio all’operatore",
					"description": "Gestisce richieste telefoniche nel perimetro concordato e trasferisce all’operatore quando necessario.",
					"setupCents": 11e4,
					"monthlyCents": 11e3,
					"visible": true,
					"prerequisite": "Telefonia collegabile, numerazione disponibile e regole di escalation.",
					"scope": "Numero di chiamate, durata, lingue, orari concordati e integrazione telefonica."
				},
				{
					"id": "customer-quotes",
					"name": "Preparazione di preventivi e proposte commerciali",
					"description": "Raccoglie i dati necessari e prepara bozze secondo listini e regole definite.",
					"setupCents": 45e3,
					"monthlyCents": 4e3,
					"visible": true,
					"prerequisite": "Listini, condizioni e regole commerciali aggiornate.",
					"scope": "Tipi di preventivo, eccezioni, approvazioni e collegamenti ai sistemi aziendali."
				},
				{
					"id": "customer-routing",
					"name": "Classificazione e smistamento delle richieste",
					"description": "Riconosce la categoria della richiesta e la inoltra al reparto o alla persona corretta.",
					"setupCents": 35e3,
					"monthlyCents": 3e3,
					"visible": true,
					"prerequisite": "Categorie, destinatari e regole di instradamento definite.",
					"scope": "Canali, categorie, volumi ed eccezioni da gestire."
				},
				{
					"id": "customer-bookings",
					"name": "Prenotazioni, disponibilità, conferme e promemoria",
					"description": "Gestisce disponibilità, prenotazioni, spostamenti, cancellazioni e liste d’attesa.",
					"setupCents": 55e3,
					"monthlyCents": 5e3,
					"visible": true,
					"prerequisite": "Calendario o gestionale collegabile e regole di disponibilità.",
					"scope": "Sedi, risorse, calendari, promemoria, volumi e politiche di modifica."
				},
				{
					"id": "customer-orders",
					"name": "Gestione ordini e controllo delle incongruenze",
					"description": "Trasforma le richieste in ordini strutturati e segnala dati discordanti prima della conferma.",
					"setupCents": 5e4,
					"monthlyCents": 5e3,
					"visible": true,
					"prerequisite": "Catalogo, codici prodotto, regole ordine e sistema di destinazione.",
					"scope": "Formati in ingresso, righe d’ordine, controlli, volumi e approvazioni."
				},
				{
					"id": "customer-crm",
					"name": "Aggiornamento CRM, trattative e prossime azioni",
					"description": "Aggiorna clienti, fasi e attività nel CRM quando avvengono eventi concordati.",
					"setupCents": 35e3,
					"monthlyCents": 3e3,
					"visible": true,
					"prerequisite": "CRM con accesso autorizzato, campi e fasi definiti.",
					"scope": "CRM, oggetti, campi, eventi, permessi e frequenza degli aggiornamenti."
				},
				{
					"id": "customer-followup",
					"name": "Follow-up e recupero dei clienti inattivi",
					"description": "Prepara ricontatti secondo tempi e criteri concordati, senza invii indiscriminati.",
					"setupCents": 4e4,
					"monthlyCents": 6e3,
					"visible": true,
					"prerequisite": "Consensi applicabili, storico clienti e regole di ricontatto.",
					"scope": "Criteri di inattività, canali, frequenza, contenuti e approvazioni."
				},
				{
					"id": "customer-reports",
					"name": "Report su richieste, conversioni e abbandoni",
					"description": "Evidenzia richieste frequenti, passaggi critici e risultati aggregati del processo.",
					"setupCents": 4e4,
					"monthlyCents": 4e3,
					"visible": true,
					"prerequisite": "Dati storici e definizioni condivise degli indicatori.",
					"scope": "Fonti, qualità dei dati, periodicità, indicatori e destinatari."
				}
			]
		},
		{
			"id": "content-catalogues",
			"completeSetupCents": 2e5,
			"completeMonthlyCents": 35e3,
			"modules": [
				{
					"id": "content-social",
					"name": "Creazione di post, caption e storie social",
					"description": "Prepara testi e materiali social partendo da prodotti, servizi, promozioni ed eventi forniti.",
					"setupCents": 35e3,
					"monthlyCents": 7e3,
					"visible": true,
					"prerequisite": "Materiali di marca, informazioni corrette e canali di destinazione definiti.",
					"scope": "Numero di contenuti, formati, lingue, revisioni e approvazione prima dell’uso."
				},
				{
					"id": "content-web-seo",
					"name": "Testi promozionali per sito, newsletter e SEO",
					"description": "Crea testi promozionali e descrizioni SEO coerenti con informazioni e tono del brand.",
					"setupCents": 25e3,
					"monthlyCents": 4e3,
					"visible": true,
					"prerequisite": "Brief, tono di voce, offerta e parole chiave disponibili.",
					"scope": "Tipi di pagina, lunghezza, lingue, volumi e ciclo di revisione."
				},
				{
					"id": "content-products",
					"name": "Schede prodotto, descrizioni, tag e caratteristiche",
					"description": "Trasforma dati di prodotto in schede strutturate, descrizioni e metadati coerenti.",
					"setupCents": 35e3,
					"monthlyCents": 6e3,
					"visible": true,
					"prerequisite": "Dati prodotto affidabili, campi richiesti e struttura del catalogo.",
					"scope": "Numero di prodotti, qualità delle fonti, campi, varianti e destinazioni."
				},
				{
					"id": "content-images",
					"name": "Immagini commerciali, formati e varianti grafiche",
					"description": "Adatta fotografie a formati concordati e prepara varianti grafiche promozionali.",
					"setupCents": 4e4,
					"monthlyCents": 7e3,
					"visible": true,
					"prerequisite": "Fotografie utilizzabili, linee grafiche e diritti sui materiali.",
					"scope": "Numero di immagini, formati, interventi richiesti e revisioni."
				},
				{
					"id": "content-translations",
					"name": "Traduzioni e varianti dei testi",
					"description": "Prepara traduzioni e varianti mantenendo significato, struttura e tono approvati.",
					"setupCents": 2e4,
					"monthlyCents": 4e3,
					"visible": true,
					"prerequisite": "Testi sorgente approvati e lingue di destinazione definite.",
					"scope": "Lingue, quantità, terminologia, revisione umana e frequenza."
				},
				{
					"id": "content-catalog-db",
					"name": "Elaborazione di cataloghi a partire da database",
					"description": "Genera cataloghi coerenti a partire da dati strutturati e campi concordati.",
					"setupCents": 45e3,
					"monthlyCents": 7e3,
					"visible": true,
					"prerequisite": "Database o esportazione accessibile con dati sufficientemente completi.",
					"scope": "Schema dati, quantità, frequenza, formato di uscita e controlli qualità."
				}
			]
		},
		{
			"id": "sales-conversations",
			"completeSetupCents": 25e4,
			"completeMonthlyCents": 28e3,
			"modules": [
				{
					"id": "sales-signals",
					"name": "Analisi di esigenze, obiezioni, budget e prossimi passi",
					"description": "Estrae dalle conversazioni informazioni commerciali concrete e azioni successive.",
					"setupCents": 8e4,
					"monthlyCents": 9e3,
					"visible": true,
					"prerequisite": "Registrazioni o trascrizioni raccolte con modalità e informative applicabili.",
					"scope": "Fonti, lingue, volumi, categorie da rilevare e qualità delle trascrizioni."
				},
				{
					"id": "sales-crm-summary",
					"name": "Riepiloghi delle conversazioni e inserimento nel CRM",
					"description": "Prepara riepiloghi strutturati e li inserisce nel CRM quando il flusso è autorizzato.",
					"setupCents": 5e4,
					"monthlyCents": 5e3,
					"visible": true,
					"prerequisite": "CRM collegabile, campi di destinazione e permessi definiti.",
					"scope": "CRM, campi, formati, volumi, approvazioni ed eccezioni."
				},
				{
					"id": "sales-aggregate",
					"name": "Analisi aggregata delle vendite concluse e perse",
					"description": "Confronta pattern ricorrenti su gruppi di conversazioni senza classifiche individuali.",
					"setupCents": 8e4,
					"monthlyCents": 9e3,
					"visible": true,
					"prerequisite": "Esiti commerciali affidabili collegabili alle conversazioni.",
					"scope": "Periodo, segmenti, indicatori, qualità dati e soglie minime di aggregazione."
				},
				{
					"id": "sales-process-report",
					"name": "Report delle criticità e suggerimenti sul processo commerciale",
					"description": "Evidenzia criticità ricorrenti e passaggi del processo da approfondire.",
					"setupCents": 4e4,
					"monthlyCents": 5e3,
					"visible": true,
					"prerequisite": "Obiettivi del processo e dati aggregati disponibili.",
					"scope": "Periodicità, destinatari, indicatori e processo di revisione."
				}
			]
		},
		{
			"id": "document-compliance",
			"completeSetupCents": 25e4,
			"completeMonthlyCents": 25e3,
			"modules": [
				{
					"id": "docs-completeness",
					"name": "Controllo di completezza, campi, firme presenti, date e scadenze",
					"description": "Verifica presenza e completezza formale; la presenza di una firma non ne certifica l’autenticità.",
					"setupCents": 6e4,
					"monthlyCents": 6e3,
					"visible": true,
					"prerequisite": "Documenti campione, campi attesi e regole di completezza.",
					"scope": "Tipi di file, campi, volumi, qualità scansioni e tolleranze."
				},
				{
					"id": "docs-consistency",
					"name": "Individuazione di incoerenze tra più documenti",
					"description": "Confronta dati fra file e segnala valori discordanti da verificare.",
					"setupCents": 7e4,
					"monthlyCents": 7e3,
					"visible": true,
					"prerequisite": "Documenti correlabili e criteri di confronto definiti.",
					"scope": "Famiglie documentali, chiavi di collegamento, volumi e soglie."
				},
				{
					"id": "docs-rules",
					"name": "Confronto con checklist, regole e fonti autorizzate",
					"description": "Applica checklist e regole configurate usando esclusivamente fonti autorizzate.",
					"setupCents": 8e4,
					"monthlyCents": 8e3,
					"visible": true,
					"prerequisite": "Checklist aggiornate, fonti disponibili e responsabilità di revisione.",
					"scope": "Numero e complessità delle regole, aggiornamenti e tracciabilità."
				},
				{
					"id": "docs-anomalies",
					"name": "Segnalazione delle anomalie e riepilogo della pratica",
					"description": "Raccoglie le possibili anomalie in un riepilogo per la verifica umana.",
					"setupCents": 4e4,
					"monthlyCents": 4e3,
					"visible": true,
					"prerequisite": "Criteri di priorità e destinatari delle segnalazioni.",
					"scope": "Formato del riepilogo, severità, volumi, notifiche e integrazioni."
				}
			]
		},
		{
			"id": "meetings-operations",
			"completeSetupCents": 36e4,
			"completeMonthlyCents": 4e4,
			"modules": [
				{
					"id": "meetings-transcription",
					"name": "Trascrizione delle riunioni, riepiloghi e decisioni",
					"description": "Trasforma riunioni autorizzate in trascrizioni, riepiloghi e decisioni verificabili.",
					"setupCents": 65e3,
					"monthlyCents": 7e3,
					"visible": true,
					"prerequisite": "Registrazioni o piattaforma riunioni accessibile e informative applicabili.",
					"scope": "Durata, numero di riunioni, lingue, qualità audio e formato dei risultati."
				},
				{
					"id": "meetings-tasks",
					"name": "Creazione di attività, assegnazioni e scadenze",
					"description": "Estrae attività e scadenze e le prepara nel sistema concordato o per approvazione.",
					"setupCents": 45e3,
					"monthlyCents": 4e3,
					"visible": true,
					"prerequisite": "Sistema attività collegabile e regole di assegnazione.",
					"scope": "Strumento, campi, responsabili, approvazioni, volumi ed eccezioni."
				},
				{
					"id": "operations-data",
					"name": "Raccolta e consolidamento dei dati operativi",
					"description": "Unisce dati autorizzati da più fonti in una vista operativa coerente.",
					"setupCents": 65e3,
					"monthlyCents": 7e3,
					"visible": true,
					"prerequisite": "Fonti identificabili, accessi autorizzati e definizioni condivise.",
					"scope": "Numero di fonti, qualità, frequenza, trasformazioni e volume."
				},
				{
					"id": "operations-reports",
					"name": "Report su andamento, anomalie e attività bloccate",
					"description": "Evidenzia trend, anomalie e blocchi relativi a processi e attività.",
					"setupCents": 5e4,
					"monthlyCents": 6e3,
					"visible": true,
					"prerequisite": "Indicatori, soglie e fonti operative definiti.",
					"scope": "Indicatori, frequenza, destinatari, fonti e profondità storica."
				},
				{
					"id": "operations-updates",
					"name": "Raccolta di aggiornamenti e note vocali",
					"description": "Trasforma aggiornamenti autorizzati e note vocali in informazioni operative strutturate.",
					"setupCents": 45e3,
					"monthlyCents": 5e3,
					"visible": true,
					"prerequisite": "Canali abilitati, informative e struttura degli aggiornamenti.",
					"scope": "Canali, utenti, volumi, lingue, conservazione e approvazioni."
				},
				{
					"id": "operations-assistant",
					"name": "Assistente per titolare e manager con priorità operative",
					"description": "Riassume la situazione e segnala priorità senza valutare automaticamente i singoli lavoratori.",
					"setupCents": 9e4,
					"monthlyCents": 11e3,
					"visible": true,
					"prerequisite": "Fonti consolidate, priorità aziendali e destinatari autorizzati.",
					"scope": "Fonti, indicatori, frequenza, ruoli, accessi e modalità di allerta."
				}
			]
		},
		{
			"id": "commercial-radar",
			"completeSetupCents": 275e3,
			"completeMonthlyCents": 45e3,
			"modules": [
				{
					"id": "radar-interest",
					"name": "Ricerca di segnali pubblici di interesse e potenziali clienti",
					"description": "Raccoglie segnali pertinenti da fonti pubblicamente accessibili senza promettere conversioni.",
					"setupCents": 65e3,
					"monthlyCents": 11e3,
					"visible": true,
					"prerequisite": "Target, territori, servizi e fonti consentite definiti.",
					"scope": "Fonti, frequenza, territorio, lingue, volume e criteri di pertinenza."
				},
				{
					"id": "radar-opportunities",
					"name": "Monitoraggio di bandi, aperture e nuove opportunità",
					"description": "Monitora fonti pubbliche concordate per bandi, aperture e segnali commerciali.",
					"setupCents": 5e4,
					"monthlyCents": 8e3,
					"visible": true,
					"prerequisite": "Tipi di opportunità, territorio e fonti individuati.",
					"scope": "Copertura delle fonti, frequenza, filtri, territori e notifiche."
				},
				{
					"id": "radar-priority",
					"name": "Classificazione e priorità dei lead con motivazione",
					"description": "Ordina opportunità con criteri trasparenti e mostra i segnali che sostengono la priorità.",
					"setupCents": 4e4,
					"monthlyCents": 6e3,
					"visible": true,
					"prerequisite": "Criteri commerciali, esclusioni e dati minimi concordati.",
					"scope": "Criteri, pesi, soglie, revisione umana e integrazione CRM."
				},
				{
					"id": "radar-competitors",
					"name": "Monitoraggio dei concorrenti e dei cambiamenti pubblici",
					"description": "Rileva cambiamenti pubblici su siti, servizi, prezzi e comunicazioni selezionate.",
					"setupCents": 55e3,
					"monthlyCents": 9e3,
					"visible": true,
					"prerequisite": "Elenco concorrenti e fonti pubbliche pertinenti.",
					"scope": "Numero di soggetti, fonti, frequenza, cambiamenti e profondità storica."
				},
				{
					"id": "radar-reviews",
					"name": "Analisi delle recensioni e dei problemi ricorrenti",
					"description": "Analizza recensioni accessibili e individua temi ricorrenti senza inventare dati mancanti.",
					"setupCents": 4e4,
					"monthlyCents": 6e3,
					"visible": true,
					"prerequisite": "Piattaforme accessibili, perimetro e periodo definiti.",
					"scope": "Piattaforme, volumi, lingue, frequenza e categorie di analisi."
				},
				{
					"id": "radar-alerts",
					"name": "Report periodici e avvisi sulle variazioni significative",
					"description": "Produce report e avvisi sulle variazioni rilevanti secondo soglie concordate.",
					"setupCents": 25e3,
					"monthlyCents": 5e3,
					"visible": true,
					"prerequisite": "Destinatari, frequenza e soglie di rilevanza definiti.",
					"scope": "Formato, periodicità, canali, soglie e destinatari."
				}
			]
		},
		{
			"id": "inventory-scorte",
			"completeSetupCents": 35e4,
			"completeMonthlyCents": 35e3,
			"modules": [
				{
					"id": "inventory-monitoring",
					"name": "Monitoraggio di giacenze, vendite e consumi",
					"description": "Raccoglie stock, vendite, consumi e movimenti per una vista aggiornata del magazzino.",
					"setupCents": 7e4,
					"monthlyCents": 7e3,
					"visible": true,
					"prerequisite": "Dati di magazzino accessibili e codici prodotto coerenti.",
					"scope": "Sedi, prodotti, fonti, frequenza, qualità dati e volumi."
				},
				{
					"id": "inventory-forecast",
					"name": "Previsione di carenze ed eccessi con storico e stagionalità",
					"description": "Stima possibili carenze ed eccessi; le previsioni dipendono dalla qualità dei dati.",
					"setupCents": 1e5,
					"monthlyCents": 1e4,
					"visible": true,
					"prerequisite": "Storico sufficiente, stagionalità e tempi di consegna disponibili.",
					"scope": "Orizzonte, granularità, storico, prodotti, stagionalità e metriche di verifica."
				},
				{
					"id": "inventory-alerts",
					"name": "Segnalazioni di riordino, scadenze e prodotti fermi",
					"description": "Suggerisce quando verificare un riordino e segnala scadenze o immobilizzi; non invia ordini non autorizzati.",
					"setupCents": 65e3,
					"monthlyCents": 6e3,
					"visible": true,
					"prerequisite": "Soglie, scadenze, lead time e responsabilità decisionali definite.",
					"scope": "Prodotti, soglie, canali, frequenza, destinatari e approvazioni."
				},
				{
					"id": "inventory-reports",
					"name": "Report automatici sullo stato del magazzino",
					"description": "Genera report periodici su stock, movimenti, rischi e anomalie concordate.",
					"setupCents": 45e3,
					"monthlyCents": 4e3,
					"visible": true,
					"prerequisite": "Indicatori e fonti dati del magazzino disponibili.",
					"scope": "Indicatori, frequenza, sedi, formati e destinatari."
				},
				{
					"id": "inventory-external",
					"name": "Integrazione di segnali esterni e criticità dei fornitori",
					"description": "Incrocia segnali esterni autorizzati con i dati di magazzino per evidenziare rischi da verificare.",
					"setupCents": 7e4,
					"monthlyCents": 8e3,
					"visible": true,
					"prerequisite": "Fonti esterne selezionate e dati fornitori correlabili.",
					"scope": "Fonti, fornitori, frequenza, criteri di rilevanza e copertura."
				}
			]
		},
		{
			"id": "knowledge-base",
			"completeSetupCents": 275e3,
			"completeMonthlyCents": 3e4,
			"modules": [
				{
					"id": "knowledge-assistant",
					"name": "Assistente sui documenti aziendali con riferimenti alle fonti",
					"description": "Risponde sui documenti autorizzati indicando la fonte usata.",
					"setupCents": 9e4,
					"monthlyCents": 1e4,
					"visible": true,
					"prerequisite": "Documenti organizzati e regole di accesso per ruolo.",
					"scope": "Numero e formato dei documenti, utenti, permessi, lingue e aggiornamenti."
				},
				{
					"id": "knowledge-extraction",
					"name": "Estrazione di dati da PDF, moduli e scansioni",
					"description": "Estrae campi concordati da documenti e scansioni con controlli sui casi incerti.",
					"setupCents": 5e4,
					"monthlyCents": 5e3,
					"visible": true,
					"prerequisite": "Campioni rappresentativi e campi da estrarre definiti.",
					"scope": "Formati, qualità scansioni, campi, volumi e soglie di revisione."
				},
				{
					"id": "knowledge-entry",
					"name": "Inserimento dei dati in database, fogli e gestionali",
					"description": "Inserisce dati strutturati nei sistemi autorizzati secondo regole concordate.",
					"setupCents": 4e4,
					"monthlyCents": 4e3,
					"visible": true,
					"prerequisite": "Sistema di destinazione collegabile, schema e permessi disponibili.",
					"scope": "Destinazioni, campi, volumi, validazioni, autorizzazioni ed errori."
				},
				{
					"id": "knowledge-summary",
					"name": "Riassunto e confronto di documenti e archivi",
					"description": "Riassume documenti lunghi e confronta informazioni distribuite in archivi autorizzati.",
					"setupCents": 35e3,
					"monthlyCents": 3e3,
					"visible": true,
					"prerequisite": "Documenti accessibili e criteri di confronto definiti.",
					"scope": "Formati, quantità, lingue, lunghezza, frequenza e tipo di confronto."
				},
				{
					"id": "knowledge-procedures",
					"name": "Formalizzazione delle procedure e del know-how interno",
					"description": "Trasforma spiegazioni ed esempi aziendali in procedure strutturate da approvare.",
					"setupCents": 25e3,
					"monthlyCents": 3e3,
					"visible": true,
					"prerequisite": "Esperti disponibili, materiali esistenti e responsabile di approvazione.",
					"scope": "Numero di procedure, profondità, revisioni e frequenza di aggiornamento."
				},
				{
					"id": "knowledge-training",
					"name": "Onboarding, spiegazioni, quiz e checklist formative",
					"description": "Crea percorsi e strumenti formativi senza usare i risultati per classifiche automatiche dei dipendenti.",
					"setupCents": 35e3,
					"monthlyCents": 5e3,
					"visible": true,
					"prerequisite": "Contenuti approvati, destinatari e obiettivi formativi definiti.",
					"scope": "Percorsi, ruoli, lingue, quiz, aggiornamenti e modalità di verifica."
				}
			]
		}
	],
	faqCategories: [
		{
			"id": "general",
			"label": "Informazioni generali"
		},
		{
			"id": "pricing",
			"label": "Configurazione e prezzi"
		},
		{
			"id": "customer-service",
			"label": "Customer service"
		},
		{
			"id": "content-catalogues",
			"label": "Contenuti e cataloghi"
		},
		{
			"id": "sales-conversations",
			"label": "Conversazioni commerciali"
		},
		{
			"id": "document-compliance",
			"label": "Documenti e conformità"
		},
		{
			"id": "meetings-operations",
			"label": "Riunioni e operatività"
		},
		{
			"id": "commercial-radar",
			"label": "Radar commerciale"
		},
		{
			"id": "inventory-scorte",
			"label": "Magazzino e scorte"
		},
		{
			"id": "knowledge-base",
			"label": "Knowledge base e formazione"
		},
		{
			"id": "data-operations",
			"label": "Dati, integrazioni e gestione"
		}
	],
	faqs: [
		{
			"id": "destinatari",
			"categoryId": "general",
			"question": "A chi sono rivolti i servizi?",
			"answer": "Sono pensati soprattutto per PMI e organizzazioni che vogliono ridurre attività ripetitive, rendere più leggibili i dati e collegare meglio i processi esistenti. Il perimetro viene adattato alle dimensioni, agli strumenti e alle responsabilità dell’azienda.",
			"serviceId": ""
		},
		{
			"id": "ia-esistente",
			"categoryId": "general",
			"question": "Serve avere già un sistema IA?",
			"answer": "No. Si parte dai processi, dai dati e dagli strumenti disponibili; durante la valutazione si decide se usare servizi cloud, componenti locali o integrazioni già presenti.",
			"serviceId": ""
		},
		{
			"id": "soluzione-fuori-catalogo",
			"categoryId": "general",
			"question": "Posso richiedere una soluzione che non compare nel configuratore?",
			"answer": "Sì. Il configuratore copre i moduli già definiti, ma puoi descrivere un’esigenza diversa nella richiesta: verrà valutata senza aggiungere automaticamente costi o funzioni non concordate.",
			"serviceId": ""
		},
		{
			"id": "perimetro-ridotto",
			"categoryId": "general",
			"question": "Posso iniziare con un perimetro ridotto?",
			"answer": "Sì. È possibile partire da un singolo flusso o da pochi moduli, verificare risultati e affidabilità, quindi ampliare il progetto solo dopo una decisione esplicita.",
			"serviceId": ""
		},
		{
			"id": "intervento-persona",
			"categoryId": "general",
			"question": "Dove interviene una persona?",
			"answer": "Nei passaggi di approvazione, nelle eccezioni, nelle decisioni sensibili e ogni volta che le regole concordate richiedono un controllo. L’automazione non elimina le responsabilità del processo.",
			"serviceId": ""
		},
		{
			"id": "errore-ia",
			"categoryId": "general",
			"question": "Che cosa succede se l’IA produce un risultato errato?",
			"answer": "Si definiscono controlli, soglie, tracciabilità e passaggi di revisione proporzionati al rischio. I risultati incerti possono essere segnalati o fermati prima di produrre effetti operativi.",
			"serviceId": ""
		},
		{
			"id": "locale-cloud",
			"categoryId": "general",
			"question": "È possibile valutare installazioni locali o in cloud?",
			"answer": "Sì. La scelta dipende da dati, integrazioni, prestazioni, sicurezza, manutenzione e infrastruttura disponibile; viene definita nella proposta tecnica.",
			"serviceId": ""
		},
		{
			"id": "assistenza-manutenzione",
			"categoryId": "general",
			"question": "Che cosa viene concordato per assistenza, aggiornamenti e manutenzione?",
			"answer": "La proposta specifica perimetro del canone, canali di assistenza, attività incluse, aggiornamenti e condizioni operative. Non vengono presunti livelli di servizio non ancora concordati.",
			"serviceId": ""
		},
		{
			"id": "singolo-modulo",
			"categoryId": "pricing",
			"question": "Posso scegliere un singolo sottoservizio?",
			"answer": "Sì. Ogni modulo è selezionabile singolarmente, salvo dipendenze tecniche reali che vengono indicate come da verificare e discusse prima della proposta.",
			"serviceId": ""
		},
		{
			"id": "moduli-pacchetti-diversi",
			"categoryId": "pricing",
			"question": "Posso combinare servizi di pacchetti diversi?",
			"answer": "Sì. Il configuratore permette una selezione mista e mantiene separati moduli, subtotali e prerequisiti di ciascun gruppo.",
			"serviceId": ""
		},
		{
			"id": "costo-iniziale-canone",
			"categoryId": "pricing",
			"question": "Qual è la differenza fra costo iniziale e canone mensile?",
			"answer": "Il costo iniziale stima analisi, configurazione, collegamenti e avvio. Il canone mensile stima esercizio, manutenzione e attività ricorrenti previste dal modulo; il perimetro preciso viene indicato nella proposta.",
			"serviceId": ""
		},
		{
			"id": "totale-definitivo",
			"categoryId": "pricing",
			"question": "Il totale del configuratore è un preventivo definitivo?",
			"answer": "No. È una stima per una configurazione standard. Integrazioni, volumi, qualità dei dati, requisiti e costi esterni devono essere verificati prima della proposta definitiva.",
			"serviceId": ""
		},
		{
			"id": "fasce-homepage",
			"categoryId": "pricing",
			"question": "Perché alcuni servizi nella homepage hanno una fascia di prezzo?",
			"answer": "La fascia rappresenta progetti con perimetri diversi. Il configuratore usa valori puntuali per i singoli moduli standard, così puoi comporre una base confrontabile senza trasformarla in un preventivo vincolante.",
			"serviceId": ""
		},
		{
			"id": "costi-esterni",
			"categoryId": "pricing",
			"question": "Esistono costi di piattaforme o consumi esterni?",
			"answer": "Possono esistere, per esempio per telefonia, modelli, messaggistica o piattaforme collegate. Quando necessari vengono indicati separatamente: non sono inseriti silenziosamente nei totali.",
			"serviceId": ""
		},
		{
			"id": "informazioni-valutazione",
			"categoryId": "pricing",
			"question": "Quali informazioni servono per valutare il progetto?",
			"answer": "Servono obiettivo, processo attuale, strumenti utilizzati, dati disponibili, volumi, utenti coinvolti, eccezioni, vincoli e risultato atteso. Non tutto deve essere pronto al primo contatto.",
			"serviceId": ""
		},
		{
			"id": "tempi-realizzazione",
			"categoryId": "pricing",
			"question": "Quali aspetti incidono sui tempi di realizzazione?",
			"answer": "Incidono numero e qualità delle fonti, disponibilità delle integrazioni, volumi, regole, autorizzazioni, test, migrazioni e tempi di approvazione. La tempistica viene definita dopo la verifica.",
			"serviceId": ""
		},
		{
			"id": "customer-canali",
			"categoryId": "customer-service",
			"question": "Quali canali può gestire il customer service?",
			"answer": "Può lavorare su chat, sito, email e, quando l’infrastruttura è collegabile, telefono. Canali, volumi e regole di passaggio all’operatore vengono concordati.",
			"serviceId": "customer-service"
		},
		{
			"id": "customer-fonti",
			"categoryId": "customer-service",
			"question": "Da dove ricava prezzi, orari e disponibilità?",
			"answer": "Da listini, calendari, gestionali e contenuti aziendali autorizzati. Le fonti devono essere aggiornate e vanno definite le regole da usare in caso di dati discordanti.",
			"serviceId": "customer-service"
		},
		{
			"id": "customer-prenotazioni",
			"categoryId": "customer-service",
			"question": "Come gestisce prenotazioni e cancellazioni?",
			"answer": "Applica disponibilità e politiche concordate, registra conferme, spostamenti, cancellazioni, promemoria e liste d’attesa nel sistema collegato.",
			"serviceId": "customer-service"
		},
		{
			"id": "customer-preventivi-ordini",
			"categoryId": "customer-service",
			"question": "Può preparare preventivi e strutturare ordini?",
			"answer": "Può raccogliere i dati, preparare una bozza secondo listini e trasformare richieste in righe d’ordine, segnalando incongruenze prima dei passaggi che richiedono approvazione.",
			"serviceId": "customer-service"
		},
		{
			"id": "customer-followup-faq",
			"categoryId": "customer-service",
			"question": "Come funzionano follow-up e recupero clienti?",
			"answer": "Si definiscono criteri, tempi, canali e contenuti. I ricontatti usano dati e consensi applicabili e possono essere sottoposti ad approvazione.",
			"serviceId": "customer-service"
		},
		{
			"id": "customer-operatore",
			"categoryId": "customer-service",
			"question": "Quando passa la richiesta a un operatore?",
			"answer": "Quando mancano informazioni affidabili, la richiesta è fuori perimetro, presenta un’eccezione o rientra nelle regole di escalation concordate.",
			"serviceId": "customer-service"
		},
		{
			"id": "content-materiali",
			"categoryId": "content-catalogues",
			"question": "Quali materiali devo fornire?",
			"answer": "Informazioni corrette su prodotti o servizi, immagini utilizzabili, prezzi, tono di voce, linee grafiche, pubblico e obiettivo del contenuto.",
			"serviceId": "content-catalogues"
		},
		{
			"id": "content-output",
			"categoryId": "content-catalogues",
			"question": "Che cosa può produrre per social, sito e cataloghi?",
			"answer": "Può preparare post, caption, storie, testi promozionali, descrizioni SEO, schede prodotto, tag e cataloghi strutturati nel perimetro concordato.",
			"serviceId": "content-catalogues"
		},
		{
			"id": "content-foto",
			"categoryId": "content-catalogues",
			"question": "Può adattare fotografie e formati?",
			"answer": "Sì, può preparare varianti verticali, orizzontali e quadrate, fondi e materiali promozionali, partendo da immagini su cui l’azienda dispone dei diritti necessari.",
			"serviceId": "content-catalogues"
		},
		{
			"id": "content-lingue",
			"categoryId": "content-catalogues",
			"question": "Può preparare traduzioni e varianti?",
			"answer": "Sì. Lingue, terminologia, numero di varianti e revisione umana vengono definiti in base al contesto e al rischio di errore.",
			"serviceId": "content-catalogues"
		},
		{
			"id": "content-pubblicazione",
			"categoryId": "content-catalogues",
			"question": "Creare un contenuto significa anche pubblicarlo?",
			"answer": "No, non automaticamente. La pubblicazione richiede una funzione e autorizzazioni specifiche; in assenza di queste il sistema prepara materiali da verificare e utilizzare.",
			"serviceId": "content-catalogues"
		},
		{
			"id": "content-revisione",
			"categoryId": "content-catalogues",
			"question": "È possibile rivedere i materiali prima dell’utilizzo?",
			"answer": "Sì. Il flusso può prevedere bozza, revisione e approvazione prima della pubblicazione o dell’invio.",
			"serviceId": "content-catalogues"
		},
		{
			"id": "sales-fonti",
			"categoryId": "sales-conversations",
			"question": "Quali registrazioni o trascrizioni può analizzare?",
			"answer": "Quelle raccolte e rese disponibili secondo modalità, informative e permessi applicabili, nei formati e nelle lingue verificati durante il progetto.",
			"serviceId": "sales-conversations"
		},
		{
			"id": "sales-informazioni",
			"categoryId": "sales-conversations",
			"question": "Quali informazioni individua?",
			"answer": "Può estrarre esigenze, interesse, obiezioni, budget, tempi, concorrenti citati, domande senza risposta e prossimi passi.",
			"serviceId": "sales-conversations"
		},
		{
			"id": "sales-crm",
			"categoryId": "sales-conversations",
			"question": "Può preparare riepiloghi per il CRM?",
			"answer": "Sì. Può creare riepiloghi nei campi concordati e inserirli nel CRM quando accessi, validazioni e responsabilità sono definiti.",
			"serviceId": "sales-conversations"
		},
		{
			"id": "sales-aggregata",
			"categoryId": "sales-conversations",
			"question": "Che cosa significa analisi aggregata?",
			"answer": "Significa cercare pattern su gruppi di conversazioni e risultati commerciali, evitando di trasformare l’analisi in una classifica individuale dei venditori.",
			"serviceId": "sales-conversations"
		},
		{
			"id": "sales-no-ranking",
			"categoryId": "sales-conversations",
			"question": "Crea classifiche dei venditori o deduce emozioni dalla voce?",
			"answer": "No. Non produce ranking o punteggi individuali e non deduce automaticamente emozioni dei lavoratori dalla voce.",
			"serviceId": "sales-conversations"
		},
		{
			"id": "docs-controlli",
			"categoryId": "document-compliance",
			"question": "Quali controlli preliminari esegue?",
			"answer": "Può verificare documenti presenti, campi, firme presenti, date, scadenze, codici, allegati, formati e regole configurate.",
			"serviceId": "document-compliance"
		},
		{
			"id": "docs-incoerenze",
			"categoryId": "document-compliance",
			"question": "Individua campi mancanti e incoerenze fra file?",
			"answer": "Sì, quando documenti e criteri di confronto sono definiti. Le segnalazioni indicano casi da verificare, non decisioni automatiche definitive.",
			"serviceId": "document-compliance"
		},
		{
			"id": "docs-fonti",
			"categoryId": "document-compliance",
			"question": "Quali regole e fonti utilizza?",
			"answer": "Usa checklist, regole e fonti autorizzate dall’azienda, con versioni e responsabilità di aggiornamento concordate.",
			"serviceId": "document-compliance"
		},
		{
			"id": "docs-anomalia",
			"categoryId": "document-compliance",
			"question": "Segnalare una possibile anomalia significa confermare un errore?",
			"answer": "No. Una segnalazione indica una discrepanza o un requisito da controllare. Anche la presenza di una firma non certifica la sua autenticità.",
			"serviceId": "document-compliance"
		},
		{
			"id": "docs-professionista",
			"categoryId": "document-compliance",
			"question": "Sostituisce certificazioni, consulenti o professionisti?",
			"answer": "No. È una pre-verifica operativa e non sostituisce certificazioni legali, valutazioni professionali o responsabilità previste dal processo.",
			"serviceId": "document-compliance"
		},
		{
			"id": "meetings-output",
			"categoryId": "meetings-operations",
			"question": "Che cosa ricava da una riunione?",
			"answer": "Può ricavare trascrizione, argomenti, decisioni, problemi, persone coinvolte, attività e scadenze, nei limiti della qualità audio e delle informazioni disponibili.",
			"serviceId": "meetings-operations"
		},
		{
			"id": "meetings-task",
			"categoryId": "meetings-operations",
			"question": "Può preparare attività, responsabili e scadenze?",
			"answer": "Sì. Può creare una lista da approvare o registrarla nel sistema collegato quando regole e autorizzazioni lo consentono.",
			"serviceId": "meetings-operations"
		},
		{
			"id": "meetings-fonti",
			"categoryId": "meetings-operations",
			"question": "Può raccogliere report, chat autorizzate e note vocali?",
			"answer": "Sì, dalle fonti espressamente abilitate e con accessi coerenti con ruoli, informative e finalità operative.",
			"serviceId": "meetings-operations"
		},
		{
			"id": "meetings-priorita",
			"categoryId": "meetings-operations",
			"question": "Come evidenzia priorità e anomalie?",
			"answer": "Applica indicatori, soglie e scadenze concordate, mostrando le fonti e i motivi utili alla verifica del titolare o del manager.",
			"serviceId": "meetings-operations"
		},
		{
			"id": "meetings-no-productivity",
			"categoryId": "meetings-operations",
			"question": "Valuta automaticamente la produttività dei singoli dipendenti?",
			"answer": "No. Evidenzia criticità di processi e attività senza attribuire automaticamente punteggi individuali di produttività.",
			"serviceId": "meetings-operations"
		},
		{
			"id": "radar-fonti",
			"categoryId": "commercial-radar",
			"question": "Quali fonti pubbliche può monitorare?",
			"answer": "Fonti pubblicamente accessibili selezionate per il progetto, come siti, pagine, portali e sezioni informative compatibili con modalità di accesso e regole applicabili.",
			"serviceId": "commercial-radar"
		},
		{
			"id": "radar-ordine",
			"categoryId": "commercial-radar",
			"question": "Come vengono individuate e ordinate le opportunità?",
			"answer": "Si usano criteri concordati come territorio, compatibilità e tipo di richiesta. La priorità è motivata da segnali osservabili e non garantisce una conversione.",
			"serviceId": "commercial-radar"
		},
		{
			"id": "radar-concorrenti",
			"categoryId": "commercial-radar",
			"question": "Che cosa può rilevare sui concorrenti?",
			"answer": "Cambiamenti pubblici relativi a siti, servizi, prodotti, prezzi, annunci o promozioni nelle fonti effettivamente monitorabili.",
			"serviceId": "commercial-radar"
		},
		{
			"id": "radar-recensioni",
			"categoryId": "commercial-radar",
			"question": "Come analizza recensioni e problemi ricorrenti?",
			"answer": "Raggruppa temi e variazioni ricorrenti nelle recensioni accessibili, distinguendo osservazioni aggregate da singoli casi da leggere nel contesto.",
			"serviceId": "commercial-radar"
		},
		{
			"id": "radar-frequenza",
			"categoryId": "commercial-radar",
			"question": "Quanto sono frequenti i controlli?",
			"answer": "La frequenza dipende dalle fonti, dai limiti tecnici, dalla rilevanza del cambiamento e dal perimetro concordato; non è universale né necessariamente istantanea.",
			"serviceId": "commercial-radar"
		},
		{
			"id": "radar-no-garanzie",
			"categoryId": "commercial-radar",
			"question": "Garantisce clienti, vendite o copertura di tutte le piattaforme?",
			"answer": "No. Non garantisce clienti o vendite e non presume accesso a ogni piattaforma o dato privato.",
			"serviceId": "commercial-radar"
		},
		{
			"id": "inventory-dati",
			"categoryId": "inventory-scorte",
			"question": "Quali dati servono?",
			"answer": "Giacenze, movimenti, vendite, consumi, ordini, tempi di consegna, stagionalità e, quando rilevanti, scadenze e dati fornitori.",
			"serviceId": "inventory-scorte"
		},
		{
			"id": "inventory-segnali",
			"categoryId": "inventory-scorte",
			"question": "Può segnalare carenze, eccessi e prodotti fermi?",
			"answer": "Sì. Usa dati e soglie concordate per evidenziare situazioni da verificare e prodotti con movimenti anomali.",
			"serviceId": "inventory-scorte"
		},
		{
			"id": "inventory-stagionalita",
			"categoryId": "inventory-scorte",
			"question": "Considera stagionalità e tempi di consegna?",
			"answer": "Sì, quando i dati sono disponibili e sufficientemente affidabili per il livello di dettaglio richiesto.",
			"serviceId": "inventory-scorte"
		},
		{
			"id": "inventory-qualita",
			"categoryId": "inventory-scorte",
			"question": "Quanto dipendono le previsioni dalla qualità dei dati?",
			"answer": "Molto. Storico incompleto, codici incoerenti o eventi non registrati riducono l’affidabilità; per questo qualità e copertura vengono verificate.",
			"serviceId": "inventory-scorte"
		},
		{
			"id": "inventory-riordino",
			"categoryId": "inventory-scorte",
			"question": "Suggerisce riordini oppure li invia automaticamente?",
			"answer": "Può suggerire e segnalare. Un ordine al fornitore viene inviato soltanto se esiste un flusso esplicitamente autorizzato con controlli adeguati.",
			"serviceId": "inventory-scorte"
		},
		{
			"id": "inventory-esterni",
			"categoryId": "inventory-scorte",
			"question": "Può considerare eventi esterni e criticità dei fornitori?",
			"answer": "Sì, quando le fonti sono selezionate e i segnali possono essere collegati ai prodotti o ai fornitori interessati.",
			"serviceId": "inventory-scorte"
		},
		{
			"id": "knowledge-documenti",
			"categoryId": "knowledge-base",
			"question": "Quali documenti si possono utilizzare?",
			"answer": "Manuali, PDF, procedure, documentazione tecnica, regolamenti, listini, FAQ e altri contenuti autorizzati e pertinenti.",
			"serviceId": "knowledge-base"
		},
		{
			"id": "knowledge-fonti",
			"categoryId": "knowledge-base",
			"question": "Le risposte indicano le fonti?",
			"answer": "Possono indicare documento e passaggio di origine, se i contenuti sono stati organizzati per mantenere riferimenti verificabili.",
			"serviceId": "knowledge-base"
		},
		{
			"id": "knowledge-permessi",
			"categoryId": "knowledge-base",
			"question": "Come vengono gestiti i permessi?",
			"answer": "Gli accessi seguono ruoli e autorizzazioni definiti dall’azienda; una persona non deve ricevere tramite l’assistente documenti che non potrebbe consultare direttamente.",
			"serviceId": "knowledge-base"
		},
		{
			"id": "knowledge-pdf",
			"categoryId": "knowledge-base",
			"question": "Può estrarre dati da PDF e scansioni?",
			"answer": "Sì, con risultati dipendenti dalla qualità dei file, dalla struttura e dai campi richiesti. I casi incerti possono essere inviati a revisione.",
			"serviceId": "knowledge-base"
		},
		{
			"id": "knowledge-update",
			"categoryId": "knowledge-base",
			"question": "Può aggiornare database e gestionali?",
			"answer": "Sì, quando il sistema è collegabile e il flusso specifica campi, validazioni, autorizzazioni ed errori da gestire.",
			"serviceId": "knowledge-base"
		},
		{
			"id": "knowledge-procedure",
			"categoryId": "knowledge-base",
			"question": "Può trasformare il know-how in procedure?",
			"answer": "Può strutturare spiegazioni ed esempi degli esperti in bozze di procedura da rivedere e approvare.",
			"serviceId": "knowledge-base"
		},
		{
			"id": "knowledge-training-faq",
			"categoryId": "knowledge-base",
			"question": "Come supporta onboarding, quiz e checklist?",
			"answer": "Prepara percorsi, spiegazioni, simulazioni e checklist basati su contenuti approvati. I risultati non vengono usati automaticamente per classifiche o decisioni lavorative.",
			"serviceId": "knowledge-base"
		},
		{
			"id": "data-strumenti",
			"categoryId": "data-operations",
			"question": "I sistemi possono collegarsi agli strumenti già utilizzati?",
			"answer": "Spesso sì, tramite API, esportazioni o connettori disponibili. Compatibilità, permessi e limiti vengono verificati per ogni strumento.",
			"serviceId": ""
		},
		{
			"id": "data-fattibilita",
			"categoryId": "data-operations",
			"question": "Come viene verificata la fattibilità di un’integrazione?",
			"answer": "Si controllano documentazione, accessi, qualità dei dati, limiti tecnici, volumi, sicurezza, casi di errore e disponibilità di un ambiente di prova.",
			"serviceId": ""
		},
		{
			"id": "data-permessi",
			"categoryId": "data-operations",
			"question": "Come vengono separati dati e permessi?",
			"answer": "Il progetto definisce ruoli, fonti, finalità e accessi minimi necessari. Le integrazioni non devono ampliare implicitamente i permessi degli utenti.",
			"serviceId": ""
		},
		{
			"id": "data-volumi",
			"categoryId": "data-operations",
			"question": "Perché volumi e frequenza devono essere verificati?",
			"answer": "Incidono su capacità, tempi di risposta, costi esterni, controlli e manutenzione. Le stime standard non implicano consumi illimitati.",
			"serviceId": ""
		},
		{
			"id": "data-monitoraggio",
			"categoryId": "data-operations",
			"question": "Come si controlla il funzionamento dopo l’avvio?",
			"answer": "Si concordano log essenziali, controlli, indicatori, gestione degli errori, responsabilità e procedure di aggiornamento senza raccogliere dati superflui.",
			"serviceId": ""
		}
	],
	reviews: []
};
//#endregion
//#region app/offer-logic.ts
function visibleModules(packages) {
	return packages.flatMap((group) => group.modules.filter((module) => module.visible));
}
function calculateTotals(packages, selectedIds) {
	const selected = new Set(selectedIds);
	return visibleModules(packages).reduce((totals, module) => {
		if (!selected.has(module.id)) return totals;
		return {
			setupCents: totals.setupCents + module.setupCents,
			monthlyCents: totals.monthlyCents + module.monthlyCents,
			count: totals.count + 1
		};
	}, {
		setupCents: 0,
		monthlyCents: 0,
		count: 0
	});
}
function groupSelectionState(group, selectedIds) {
	const selected = new Set(selectedIds);
	const modules = group.modules.filter((module) => module.visible);
	const count = modules.filter((module) => selected.has(module.id)).length;
	return {
		count,
		total: modules.length,
		checked: modules.length > 0 && count === modules.length,
		indeterminate: count > 0 && count < modules.length
	};
}
function toggleWholePackage(group, selectedIds, select) {
	const next = new Set(selectedIds);
	for (const module of group.modules.filter((item) => item.visible)) if (select) next.add(module.id);
	else next.delete(module.id);
	return next;
}
function sanitizeSelection(packages, selectedIds) {
	const valid = new Set(visibleModules(packages).map((module) => module.id));
	if (!Array.isArray(selectedIds)) return /* @__PURE__ */ new Set();
	return new Set(selectedIds.filter((id) => typeof id === "string" && valid.has(id)));
}
function priceSnapshot(packages) {
	return Object.fromEntries(visibleModules(packages).map((module) => [module.id, {
		setupCents: module.setupCents,
		monthlyCents: module.monthlyCents
	}]));
}
function selectionPriceChanged(packages, selectedIds, previousPrices) {
	if (!previousPrices || typeof previousPrices !== "object") return false;
	const current = priceSnapshot(packages);
	return [...selectedIds].some((id) => {
		const previous = previousPrices[id];
		return previous?.setupCents !== current[id]?.setupCents || previous?.monthlyCents !== current[id]?.monthlyCents;
	});
}
//#endregion
//#region app/extended-pages.tsx
var initialOfferContent = offer_content_default;
var initialSiteConfig = site_config_default;
var SELECTION_KEY = "sito-implementazioni-ia-offer-selection-v1";
var CHAT_DRAFT_KEY = "sito-implementazioni-ia-chat-draft-v1";
var CHAT_SESSION_KEY = "sito-implementazioni-ia-chat-session-v1";
var telegramUrl = initialSiteConfig.contact.channels.find((item) => item.id === "telegram")?.url ?? "";
var whatsappUrl = initialSiteConfig.contact.channels.find((item) => item.id === "whatsapp")?.url ?? "";
function euro(cents) {
	return new Intl.NumberFormat("it-IT", {
		style: "currency",
		currency: "EUR",
		maximumFractionDigits: 0
	}).format(cents / 100);
}
function isLocalManagement() {
	if (typeof window === "undefined") return false;
	return (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") && new URLSearchParams(window.location.search).get("manage") === "1";
}
function siteBase() {
	if (typeof window === "undefined") return "./";
	return window.location.pathname.includes("/sito-implementazioni-ia-pages/") ? "/sito-implementazioni-ia-pages/" : "/";
}
function routeHref(file, manage = false) {
	const query = manage ? "?manage=1" : "";
	return `${siteBase()}${file}${query}`;
}
function serviceHref(serviceId, manage = false) {
	const params = new URLSearchParams({ service: serviceId });
	if (manage) params.set("manage", "1");
	return `${siteBase()}?${params.toString()}`;
}
function serviceById(id) {
	return initialSiteConfig.services.find((service) => service.id === id);
}
function selectedGroups(content, selected) {
	return content.packages.flatMap((group) => {
		const modules = group.modules.filter((module) => module.visible && selected.has(module.id));
		return modules.length ? [{
			group,
			modules,
			service: serviceById(group.id)
		}] : [];
	});
}
function readableSummary(content, selected, available) {
	const totals = calculateTotals(content.packages, selected);
	const lines = selectedGroups(content, selected).flatMap(({ service, modules }) => [`\n${service?.title ?? "Pacchetto"}`, ...modules.map((module) => `- ${module.name}: ${euro(module.setupCents)} iniziali / ${euro(module.monthlyCents)} al mese${module.prerequisite && !available.has(module.id) ? ` · Da verificare: ${module.prerequisite}` : ""}`)]);
	return [
		`Listino ${content.catalogVersion}`,
		...lines,
		`\nImplementazione iniziale stimata: ${euro(totals.setupCents)}`,
		`Canone mensile stimato: ${euro(totals.monthlyCents)}`,
		content.configurator.pricingNote
	].join("\n");
}
function useManagedContent() {
	const [content, setContent] = (0, import_react.useState)(initialOfferContent);
	const [management, setManagement] = (0, import_react.useState)(false);
	const [notice, setNotice] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const canManage = isLocalManagement();
		setManagement(canManage);
		if (!canManage) return;
		fetch("/api/offer-content").then((response) => response.ok ? response.json() : Promise.reject()).then((value) => setContent(value)).catch(() => setNotice("Impossibile caricare la configurazione locale: uso la versione pubblicata."));
	}, []);
	const save = async (publish = false) => {
		setBusy(true);
		setNotice(publish ? "Salvataggio e pubblicazione in corso…" : "Salvataggio nel progetto…");
		try {
			const next = {
				...content,
				savedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			const response = await fetch("/api/offer-content", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(next)
			});
			const result = await response.json();
			if (!response.ok) throw new Error(result.error || "Salvataggio non riuscito.");
			setContent(next);
			if (publish) {
				const publishResponse = await fetch("/api/publish-site", { method: "POST" });
				const publishResult = await publishResponse.json();
				if (!publishResponse.ok) throw new Error(publishResult.error || "Pubblicazione non riuscita.");
			}
			setNotice(publish ? "Contenuti salvati e pubblicati." : "Contenuti salvati nel progetto.");
		} catch (error) {
			setNotice(error instanceof Error ? error.message : "Operazione non riuscita.");
		} finally {
			setBusy(false);
		}
	};
	return {
		content,
		setContent,
		management,
		notice,
		busy,
		save
	};
}
function GlassPage({ children, management = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "site-shell glass-opaque extended-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "site-background",
			style: {
				backgroundImage: "url(\"./backgrounds/smm-orizzonte-marziano.webp\")",
				backgroundPosition: "center top",
				backgroundSize: "100% auto",
				backgroundRepeat: "no-repeat",
				backgroundColor: "#080b18"
			},
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "extended-frame",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "extended-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "extended-brand",
						href: routeHref("", management),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sito implementazioni IA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "sistemi IA per PMI" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Navigazione principale",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: routeHref("", management),
								children: "Servizi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: routeHref("configuratore.html", management),
								children: "Configuratore"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: routeHref("faq.html", management),
								children: "FAQ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: routeHref("recensioni.html", management),
								children: "Recensioni"
							})
						]
					})]
				}),
				children,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "extended-footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sito implementazioni IA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: routeHref("", management),
						children: "Torna ai servizi"
					})]
				})
			]
		})]
	});
}
function ManagerBar({ notice, busy, onSave }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "offer-manager",
		"aria-label": "Gestione locale dei nuovi contenuti",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: notice || "Bozza locale: le modifiche diventano pubbliche solo dopo la pubblicazione." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			disabled: busy,
			onClick: () => onSave(false),
			children: "Salva nel progetto"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			disabled: busy,
			onClick: () => {
				if (window.confirm("Salvare e pubblicare le modifiche su tutte le destinazioni?")) onSave(true);
			},
			children: busy ? "Attendi…" : "Salva modifiche"
		})] })]
	});
}
function ChatFallback({ content, compact = false }) {
	const [message, setMessage] = (0, import_react.useState)("");
	const [contact, setContact] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("");
	const [session, setSession] = (0, import_react.useState)(null);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const backendUrl = content.chat.backendUrl.trim().replace(/\/$/, "");
	(0, import_react.useEffect)(() => {
		try {
			const saved = JSON.parse(window.localStorage.getItem(CHAT_DRAFT_KEY) || "null");
			if (saved && typeof saved.message === "string") setMessage(saved.message);
			if (saved && typeof saved.contact === "string") setContact(saved.contact);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			window.localStorage.setItem(CHAT_DRAFT_KEY, JSON.stringify({
				message,
				contact
			}));
		} catch {}
	}, [message, contact]);
	(0, import_react.useEffect)(() => {
		if (!backendUrl) return;
		let cancelled = false;
		const connect = async () => {
			try {
				const stored = JSON.parse(window.localStorage.getItem(CHAT_SESSION_KEY) || "null");
				if (stored?.token && stored?.conversationId) {
					if (!cancelled) setSession(stored);
					return;
				}
				const response = await fetch(`${backendUrl}/api/chat/session`, { method: "POST" });
				if (!response.ok) throw new Error();
				const created = await response.json();
				window.localStorage.setItem(CHAT_SESSION_KEY, JSON.stringify(created));
				if (!cancelled) setSession(created);
			} catch {
				if (!cancelled) setStatus("La chat integrata non è disponibile: puoi continuare su Telegram o WhatsApp.");
			}
		};
		connect();
		return () => {
			cancelled = true;
		};
	}, [backendUrl]);
	(0, import_react.useEffect)(() => {
		if (!backendUrl || !session) return;
		let cancelled = false;
		const receive = async () => {
			try {
				const since = messages.at(-1)?.sequence ?? 0;
				const response = await fetch(`${backendUrl}/api/chat/messages?since=${since}`, { headers: { authorization: `Bearer ${session.token}` } });
				if (response.status === 401) {
					window.localStorage.removeItem(CHAT_SESSION_KEY);
					if (!cancelled) setSession(null);
					return;
				}
				if (!response.ok) return;
				const value = await response.json();
				if (!cancelled && Array.isArray(value.messages) && value.messages.length) setMessages((current) => [...current, ...value.messages.filter((item) => !current.some((known) => known.sequence === item.sequence))]);
			} catch {}
		};
		receive();
		const timer = window.setInterval(() => void receive(), 7e3);
		return () => {
			cancelled = true;
			window.clearInterval(timer);
		};
	}, [
		backendUrl,
		session,
		messages
	]);
	const submitMessage = async (event) => {
		event.preventDefault();
		if (!message.trim()) return;
		if (backendUrl && session) {
			setBusy(true);
			try {
				if (!(await fetch(`${backendUrl}/api/chat/message`, {
					method: "POST",
					headers: {
						authorization: `Bearer ${session.token}`,
						"content-type": "application/json"
					},
					body: JSON.stringify({
						text: message,
						contact,
						idempotencyKey: crypto.randomUUID()
					})
				})).ok) throw new Error();
				setMessage("");
				setStatus("Messaggio inviato. Le risposte compariranno qui.");
			} catch {
				setStatus("Invio non riuscito. Il testo è rimasto salvato: usa Telegram o WhatsApp.");
			} finally {
				setBusy(false);
			}
			return;
		}
		const text = [
			`Messaggio dal sito`,
			contact.trim() ? `Recapito: ${contact.trim()}` : "",
			message.trim()
		].filter(Boolean).join("\n");
		window.open(`${telegramUrl}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
		setStatus("Telegram è stato aperto con il testo preparato. Completa l’invio nell’app.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `home-chat glass-panel${compact ? " is-compact" : ""}`,
		"aria-labelledby": "chat-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-kicker",
				children: "Contatto diretto"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "chat-title",
				children: content.chat.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.chat.description })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submitMessage,
			children: [
				backendUrl && messages.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "chat-thread",
					"aria-live": "polite",
					children: messages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: `chat-message is-${item.role}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.role === "owner" ? "Risposta" : "Tu" }), item.text]
					}, item.sequence))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Il tuo messaggio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: message,
					onChange: (event) => setMessage(event.currentTarget.value),
					maxLength: 2e3,
					required: true,
					rows: 4
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Recapito facoltativo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: contact,
					onChange: (event) => setContact(event.currentTarget.value),
					maxLength: 160,
					placeholder: "Email o telefono"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "form-note",
					children: backendUrl ? "Conversazione diretta con il titolare, non con un assistente IA. La sessione resta separata da quelle degli altri visitatori." : content.chat.notice
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "chat-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "primary-action",
						type: "submit",
						disabled: busy,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
								size: 16,
								"aria-hidden": "true"
							}),
							" ",
							backendUrl && session ? busy ? "Invio…" : "Invia messaggio" : "Continua su Telegram"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "secondary-action",
						href: `${whatsappUrl}?text=${encodeURIComponent(message)}`,
						target: "_blank",
						rel: "noreferrer",
						children: "Apri WhatsApp"
					})]
				}),
				status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "form-status",
					role: "status",
					children: status
				}) : null
			]
		})]
	});
}
function HomepageExtensions({ management }) {
	const content = initialOfferContent;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "home-paths",
		"aria-label": "Approfondisci e personalizza",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			className: "package-cta",
			href: routeHref("configuratore.html", management),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: content.home.configuratorLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: content.home.configuratorHint })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "home-secondary-links",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: routeHref("faq.html", management),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileQuestionMark, {
					size: 16,
					"aria-hidden": "true"
				}), content.home.faqLabel]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: routeHref("recensioni.html", management),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					size: 16,
					"aria-hidden": "true"
				}), content.home.reviewsLabel]
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatFallback, { content })] });
}
function ConfiguratorAdmin({ content, setContent }) {
	const updateModule = (packageIndex, moduleIndex, patch) => {
		const packages = content.packages.map((group, groupIndex) => groupIndex === packageIndex ? {
			...group,
			modules: group.modules.map((module, index) => index === moduleIndex ? {
				...module,
				...patch
			} : module)
		} : group);
		setContent({
			...content,
			packages
		});
	};
	const moveModule = (packageIndex, moduleIndex, direction) => {
		const target = moduleIndex + direction;
		const group = content.packages[packageIndex];
		if (!group || target < 0 || target >= group.modules.length) return;
		const modules = [...group.modules];
		[modules[moduleIndex], modules[target]] = [modules[target], modules[moduleIndex]];
		setContent({
			...content,
			packages: content.packages.map((item, index) => index === packageIndex ? {
				...item,
				modules
			} : item)
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		className: "catalog-admin glass-panel",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: "Modifica testi, listino, ordine e canali" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-copy-grid",
				children: [
					[
						"title",
						"intro",
						"instruction",
						"pricingExplanation",
						"pricingNote"
					].map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [key, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 2,
						value: content.configurator[key],
						onChange: (event) => setContent({
							...content,
							configurator: {
								...content.configurator,
								[key]: event.currentTarget.value
							}
						})
					})] }, key)),
					[
						"title",
						"description",
						"notice"
					].map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
						"Chat: ",
						key,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 2,
							value: content.chat[key],
							onChange: (event) => setContent({
								...content,
								chat: {
									...content.chat,
									[key]: event.currentTarget.value
								}
							})
						})
					] }, `chat-${key}`)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["URL backend chat", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "url",
						value: content.chat.backendUrl,
						placeholder: "https://chat.example.workers.dev",
						onChange: (event) => setContent({
							...content,
							chat: {
								...content.chat,
								backendUrl: event.currentTarget.value
							}
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Canale principale", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: content.chat.primaryChannel,
						onChange: (event) => setContent({
							...content,
							chat: {
								...content.chat,
								primaryChannel: event.currentTarget.value
							}
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "telegram",
							children: "Telegram"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "whatsapp",
							children: "WhatsApp"
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Canale alternativo", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: content.chat.alternateChannel,
						onChange: (event) => setContent({
							...content,
							chat: {
								...content.chat,
								alternateChannel: event.currentTarget.value
							}
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "whatsapp",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "telegram",
							children: "Telegram"
						})]
					})] })
				]
			}),
			content.packages.map((group, packageIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "admin-package",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: serviceById(group.id)?.title }), group.modules.map((module, moduleIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "admin-module",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Nome", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: module.name,
							onChange: (event) => updateModule(packageIndex, moduleIndex, { name: event.currentTarget.value })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Descrizione", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: module.description,
							onChange: (event) => updateModule(packageIndex, moduleIndex, { description: event.currentTarget.value })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Prezzo iniziale in centesimi", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: "0",
							value: module.setupCents,
							onChange: (event) => updateModule(packageIndex, moduleIndex, { setupCents: Number(event.currentTarget.value) })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Canone mensile in centesimi", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: "0",
							value: module.monthlyCents,
							onChange: (event) => updateModule(packageIndex, moduleIndex, { monthlyCents: Number(event.currentTarget.value) })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Prerequisito", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: module.prerequisite,
							onChange: (event) => updateModule(packageIndex, moduleIndex, { prerequisite: event.currentTarget.value })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Perimetro", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: module.scope,
							onChange: (event) => updateModule(packageIndex, moduleIndex, { scope: event.currentTarget.value })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "admin-inline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: module.visible,
								onChange: (event) => updateModule(packageIndex, moduleIndex, { visible: event.currentTarget.checked })
							}), " Visibile"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => moveModule(packageIndex, moduleIndex, -1),
							children: "Sposta su"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => moveModule(packageIndex, moduleIndex, 1),
							children: "Sposta giù"
						})] })
					]
				}, module.id))]
			}, group.id))
		]
	});
}
function ProposalDialog({ open, onOpenChange, content, selected, available }) {
	const [name, setName] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [need, setNeed] = (0, import_react.useState)("");
	const [contact, setContact] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)("");
	const summary = readableSummary(content, selected, available);
	const submit = (event) => {
		event.preventDefault();
		if (submitting) return;
		setSubmitting(true);
		const message = [
			`Richiesta ${crypto.randomUUID()}`,
			`Data: ${(/* @__PURE__ */ new Date()).toLocaleString("it-IT")}`,
			`Nome: ${name.trim()}`,
			company.trim() ? `Azienda: ${company.trim()}` : "",
			`Recapito: ${contact.trim()}`,
			need.trim() ? `Esigenza: ${need.trim()}` : "",
			"",
			summary
		].filter((line) => line !== "").join("\n");
		window.open(`${telegramUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
		setStatus("Telegram è stato aperto con la richiesta preparata. Completa l’invio nell’app: la selezione resta salvata.");
		window.setTimeout(() => setSubmitting(false), 800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "proposal-dialog",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Richiedi una proposta su misura" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "L’invio è una richiesta di valutazione, non un ordine o un’accettazione automatica." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Nome", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (event) => setName(event.currentTarget.value),
						required: true,
						maxLength: 120
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
						"Azienda ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "facoltativa" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: company,
							onChange: (event) => setCompany(event.currentTarget.value),
							maxLength: 160
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Breve descrizione dell’esigenza", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: need,
						onChange: (event) => setNeed(event.currentTarget.value),
						maxLength: 1200,
						rows: 3
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Recapito o canale per ricevere risposta", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: contact,
						onChange: (event) => setContact(event.currentTarget.value),
						required: true,
						maxLength: 160
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "request-summary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: [
							"Rivedi i servizi selezionati (",
							selected.size,
							")"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: summary })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "form-note",
						children: "La configurazione verrà inoltrata alla titolare tramite Telegram. L’invio viene completato da te nell’app."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "primary-action",
						type: "submit",
						disabled: submitting,
						children: submitting ? "Apertura…" : "Continua su Telegram"
					}),
					status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "form-status",
						role: "status",
						children: status
					}) : null
				]
			})]
		})
	});
}
function ConfiguratorPage() {
	const { content, setContent, management, notice, busy, save } = useManagedContent();
	const [selected, setSelected] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [available, setAvailable] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [openGroups, setOpenGroups] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [onlySelected, setOnlySelected] = (0, import_react.useState)(false);
	const [priceNotice, setPriceNotice] = (0, import_react.useState)(false);
	const [proposalOpen, setProposalOpen] = (0, import_react.useState)(false);
	const [actionNotice, setActionNotice] = (0, import_react.useState)("");
	const importRef = (0, import_react.useRef)(null);
	const totals = (0, import_react.useMemo)(() => calculateTotals(content.packages, selected), [content.packages, selected]);
	const groups = (0, import_react.useMemo)(() => selectedGroups(content, selected), [content, selected]);
	(0, import_react.useEffect)(() => {
		try {
			const stored = JSON.parse(window.localStorage.getItem(SELECTION_KEY) || "null");
			const restored = sanitizeSelection(initialOfferContent.packages, stored?.selectedIds);
			setSelected(restored);
			setAvailable(sanitizeSelection(initialOfferContent.packages, stored?.availableIds));
			setPriceNotice(Boolean(stored && (stored.catalogVersion !== initialOfferContent.catalogVersion || selectionPriceChanged(initialOfferContent.packages, restored, stored.prices))));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			window.localStorage.setItem(SELECTION_KEY, JSON.stringify({
				catalogVersion: content.catalogVersion,
				selectedIds: [...selected],
				availableIds: [...available],
				prices: priceSnapshot(content.packages)
			}));
		} catch {}
	}, [
		available,
		content.catalogVersion,
		content.packages,
		selected
	]);
	const toggleModule = (id, checked) => {
		setSelected((current) => {
			const next = new Set(current);
			checked ? next.add(id) : next.delete(id);
			return next;
		});
	};
	const removeGroup = (group) => setSelected((current) => toggleWholePackage(group, current, false));
	const reset = () => {
		if (!selected.size || window.confirm("Azzera tutta la selezione?")) {
			setSelected(/* @__PURE__ */ new Set());
			setAvailable(/* @__PURE__ */ new Set());
			setActionNotice("Selezione azzerata.");
		}
	};
	const exportSelection = () => {
		const data = JSON.stringify({
			type: "sito-ia-configurazione",
			catalogVersion: content.catalogVersion,
			selectedIds: [...selected],
			availableIds: [...available]
		}, null, 2);
		const link = document.createElement("a");
		link.href = URL.createObjectURL(new Blob([data], { type: "application/json" }));
		link.download = "configurazione-servizi-ia.json";
		link.click();
		window.setTimeout(() => URL.revokeObjectURL(link.href), 1e3);
	};
	const importSelection = async (event) => {
		const file = event.currentTarget.files?.[0];
		event.currentTarget.value = "";
		if (!file) return;
		try {
			const value = JSON.parse(await file.text());
			if (value.type !== "sito-ia-configurazione") throw new Error();
			setSelected(sanitizeSelection(content.packages, value.selectedIds));
			setAvailable(sanitizeSelection(content.packages, value.availableIds));
			setPriceNotice(value.catalogVersion !== content.catalogVersion);
			setActionNotice("Configurazione importata e ricalcolata con il listino attuale.");
		} catch {
			setActionNotice("Il file non contiene una configurazione valida.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassPage, {
		management,
		children: [
			management ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManagerBar, {
				notice,
				busy,
				onSave: save
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "extended-intro",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "back-link",
						href: routeHref("", management),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							size: 16,
							"aria-hidden": "true"
						}), " Torna ai servizi"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "Configuratore"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: content.configurator.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.configurator.intro }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "instruction",
						children: content.configurator.instruction
					})
				]
			}),
			management ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfiguratorAdmin, {
				content,
				setContent
			}) : null,
			priceNotice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "catalog-change",
				role: "status",
				children: "Il listino è cambiato: la selezione salvata è stata ricalcolata con i prezzi attuali."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "mobile-summary-jump",
				href: "#configuration-summary",
				children: ["Vedi riepilogo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selected.size })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "configurator-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "package-list",
					"aria-label": "Servizi configurabili",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "selected-filter",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: onlySelected,
							onChange: (event) => setOnlySelected(event.currentTarget.checked)
						}), " Mostra solo i servizi selezionati"]
					}), content.packages.map((group) => {
						const service = serviceById(group.id);
						const state = groupSelectionState(group, selected);
						if (onlySelected && state.count === 0) return null;
						const expanded = openGroups.has(group.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "package-card glass-panel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "package-card-head",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										checked: state.indeterminate ? "indeterminate" : state.checked,
										onCheckedChange: () => setSelected((current) => toggleWholePackage(group, current, !state.checked)),
										"aria-label": `Seleziona tutto: ${service?.title}`
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: service?.title }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service?.summary }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
											euro(group.completeSetupCents),
											" iniziali · ",
											euro(group.completeMonthlyCents),
											"/mese"
										] })
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "package-card-actions",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											state.count,
											" di ",
											state.total,
											" servizi selezionati"
										] }),
										state.count ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => removeGroup(group),
											children: "Deseleziona gruppo"
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-expanded": expanded,
											onClick: () => setOpenGroups((current) => {
												const next = new Set(current);
												next.has(group.id) ? next.delete(group.id) : next.add(group.id);
												return next;
											}),
											children: [expanded ? "Nascondi dettagli" : "Apri dettagli", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
												size: 15,
												"aria-hidden": "true"
											})]
										})
									]
								}),
								expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "module-list",
									children: group.modules.filter((module) => module.visible && (!onlySelected || selected.has(module.id))).map((module) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "module-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
											checked: selected.has(module.id),
											onCheckedChange: (checked) => toggleModule(module.id, checked === true),
											"aria-label": `Seleziona: ${module.name}`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: module.name }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: module.description }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												euro(module.setupCents),
												" iniziali · ",
												euro(module.monthlyCents),
												"/mese"
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: "Perimetro e prerequisiti" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Da verificare:" }),
													" ",
													module.prerequisite
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Perimetro:" }),
													" ",
													module.scope
												] })
											] }),
											module.prerequisite ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "dependency-check",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: available.has(module.id),
													onChange: (event) => setAvailable((current) => {
														const next = new Set(current);
														event.currentTarget.checked ? next.add(module.id) : next.delete(module.id);
														return next;
													})
												}), " Dispongo già della componente o dei dati richiesti"]
											}) : null
										] })]
									}, module.id))
								}) : null
							]
						}, group.id);
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					id: "configuration-summary",
					className: "configuration-summary glass-panel",
					"aria-labelledby": "summary-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Riepilogo dinamico"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "summary-title",
							children: "La tua configurazione"
						}),
						!groups.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "La tua configurazione è ancora da definire. Seleziona i servizi che ti interessano." }) : groups.map(({ group, service, modules }) => {
							const subtotal = calculateTotals([group], selected);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "summary-group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: service?.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => removeGroup(group),
										children: "Rimuovi gruppo"
									})] }),
									modules.map((module) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "summary-line",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: module.name }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
												euro(module.setupCents),
												" · ",
												euro(module.monthlyCents),
												"/mese"
											] }),
											module.prerequisite && !available.has(module.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Da verificare" }) : null
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => toggleModule(module.id, false),
											"aria-label": `Rimuovi ${module.name}`,
											children: "Rimuovi"
										})]
									}, module.id)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "subtotal",
										children: [
											"Subtotale: ",
											euro(subtotal.setupCents),
											" · ",
											euro(subtotal.monthlyCents),
											"/mese"
										]
									})
								]
							}, group.id);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "final-totals",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Implementazione iniziale stimata" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: euro(totals.setupCents) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Canone mensile stimato" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: euro(totals.monthlyCents) })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pricing-note",
							children: content.configurator.pricingNote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "summary-tools",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										navigator.clipboard.writeText(readableSummary(content, selected, available));
										setActionNotice("Riepilogo copiato.");
									},
									disabled: !selected.size,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, {
										size: 15,
										"aria-hidden": "true"
									}), " Copia riepilogo"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: exportSelection,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										size: 15,
										"aria-hidden": "true"
									}), " Salva configurazione"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => importRef.current?.click(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
										size: 15,
										"aria-hidden": "true"
									}), " Importa"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: importRef,
									className: "visually-hidden",
									type: "file",
									accept: "application/json,.json",
									onChange: importSelection
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: reset,
									disabled: !selected.size,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
										size: 15,
										"aria-hidden": "true"
									}), " Azzera selezione"]
								})
							]
						}),
						actionNotice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "form-status",
							role: "status",
							children: actionNotice
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "primary-action proposal-action",
							type: "button",
							disabled: !selected.size,
							onClick: () => setProposalOpen(true),
							children: "Richiedi una proposta su misura"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Invia la tua selezione: verificheremo insieme la soluzione più adatta alla tua attività." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pricing-explanation glass-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Come leggere le stime" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: content.configurator.pricingExplanation })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProposalDialog, {
				open: proposalOpen,
				onOpenChange: setProposalOpen,
				content,
				selected,
				available
			})
		]
	});
}
function FaqAdmin({ content, setContent }) {
	const updateFaq = (index, patch) => setContent({
		...content,
		faqs: content.faqs.map((faq, faqIndex) => faqIndex === index ? {
			...faq,
			...patch
		} : faq)
	});
	const moveFaq = (index, direction) => {
		const target = index + direction;
		if (target < 0 || target >= content.faqs.length) return;
		const faqs = [...content.faqs];
		[faqs[index], faqs[target]] = [faqs[target], faqs[index]];
		setContent({
			...content,
			faqs
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		className: "catalog-admin glass-panel",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: "Modifica FAQ e categorie" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "admin-warning",
				children: "Ricontrolla le FAQ collegate dopo ogni modifica alle descrizioni o alle condizioni dei servizi."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "admin-copy-grid",
				children: content.faqCategories.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
					"Categoria ",
					category.id,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: category.label,
						onChange: (event) => setContent({
							...content,
							faqCategories: content.faqCategories.map((item, itemIndex) => itemIndex === index ? {
								...item,
								label: event.currentTarget.value
							} : item)
						})
					})
				] }, category.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setContent({
					...content,
					faqs: [...content.faqs, {
						id: `faq-${Date.now()}`,
						categoryId: content.faqCategories[0]?.id ?? "general",
						question: "Nuova domanda",
						answer: "Nuova risposta da completare",
						serviceId: ""
					}]
				}),
				children: "Aggiungi FAQ"
			}),
			content.faqs.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-module",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Domanda", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: faq.question,
						onChange: (event) => updateFaq(index, { question: event.currentTarget.value })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Risposta", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: faq.answer,
						onChange: (event) => updateFaq(index, { answer: event.currentTarget.value })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Categoria", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: faq.categoryId,
						onChange: (event) => updateFaq(index, { categoryId: event.currentTarget.value }),
						children: content.faqCategories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: category.id,
							children: category.label
						}, category.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Servizio collegato", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: faq.serviceId,
						onChange: (event) => updateFaq(index, { serviceId: event.currentTarget.value }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Generale"
						}), initialSiteConfig.services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: service.id,
							children: service.title
						}, service.id))]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => moveFaq(index, -1),
							children: "Sposta su"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => moveFaq(index, 1),
							children: "Sposta giù"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setContent({
								...content,
								faqs: content.faqs.filter((_, faqIndex) => faqIndex !== index)
							}),
							children: "Rimuovi"
						})
					] })
				]
			}, faq.id))
		]
	});
}
function FaqPage() {
	const { content, setContent, management, notice, busy, save } = useManagedContent();
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("all");
	const filtered = content.faqs.filter((faq) => (category === "all" || faq.categoryId === category) && `${faq.question} ${faq.answer}`.toLocaleLowerCase("it").includes(query.trim().toLocaleLowerCase("it")));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassPage, {
		management,
		children: [
			management ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManagerBar, {
				notice,
				busy,
				onSave: save
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "extended-intro",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "back-link",
						href: routeHref("", management),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							size: 16,
							"aria-hidden": "true"
						}), " Torna ai servizi"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "FAQ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Le risposte, prima di iniziare" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Servizi, funzionamento, personalizzazione e costi: chiarisci i dubbi e individua la soluzione adatta alla tua attività." })
				]
			}),
			management ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqAdmin, {
				content,
				setContent
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "faq-tools glass-panel",
				"aria-label": "Ricerca e filtri FAQ",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Cerca nelle domande e risposte", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "search",
					value: query,
					onChange: (event) => setQuery(event.currentTarget.value),
					placeholder: "Es. costi, CRM, documenti…"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "group",
					"aria-label": "Filtra per categoria",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: category === "all" ? "is-active" : "",
						onClick: () => setCategory("all"),
						children: "Tutte"
					}), content.faqCategories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: category === item.id ? "is-active" : "",
						onClick: () => setCategory(item.id),
						children: item.label
					}, item.id))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "faq-count",
				role: "status",
				children: [filtered.length, " risposte"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "multiple",
				className: "faq-list",
				children: filtered.map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: faq.id,
					id: faq.id,
					className: "faq-item glass-panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: faq.question }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: faq.answer }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faq-links",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${faq.id}`,
							children: "Link diretto"
						}), faq.serviceId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: serviceHref(faq.serviceId, management),
							children: ["Vedi il servizio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 13,
								"aria-hidden": "true"
							})]
						}) : null]
					})] })]
				}, faq.id))
			}),
			!filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "no-results",
				children: "Nessuna risposta corrisponde alla ricerca."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "primary-action faq-contact",
				href: `${telegramUrl}?text=${encodeURIComponent("Ho un’altra domanda sui servizi IA:")}`,
				target: "_blank",
				rel: "noreferrer",
				children: "Hai un’altra domanda? Scrivimi"
			})
		]
	});
}
function ReviewsAdmin({ content, setContent }) {
	const add = () => setContent({
		...content,
		reviews: [...content.reviews, {
			id: `review-${Date.now()}`,
			quote: "",
			author: "",
			company: "",
			visible: false
		}]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "catalog-admin glass-panel",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Gestione futura recensioni reali" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Le nuove recensioni restano bozze finché non attivi “Pubblica”." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: add,
				children: "Aggiungi bozza"
			}),
			content.reviews.map((review, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "admin-module",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Testo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: review.quote,
						onChange: (event) => setContent({
							...content,
							reviews: content.reviews.map((item, itemIndex) => itemIndex === index ? {
								...item,
								quote: event.currentTarget.value
							} : item)
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Nome autorizzato", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: review.author,
						onChange: (event) => setContent({
							...content,
							reviews: content.reviews.map((item, itemIndex) => itemIndex === index ? {
								...item,
								author: event.currentTarget.value
							} : item)
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Azienda", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: review.company,
						onChange: (event) => setContent({
							...content,
							reviews: content.reviews.map((item, itemIndex) => itemIndex === index ? {
								...item,
								company: event.currentTarget.value
							} : item)
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "admin-inline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: review.visible,
							onChange: (event) => setContent({
								...content,
								reviews: content.reviews.map((item, itemIndex) => itemIndex === index ? {
									...item,
									visible: event.currentTarget.checked
								} : item)
							})
						}), " Pubblica"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setContent({
							...content,
							reviews: content.reviews.filter((_, itemIndex) => itemIndex !== index)
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
							size: 14,
							"aria-hidden": "true"
						}), " Rimuovi bozza"]
					})
				]
			}, review.id))
		]
	});
}
function ReviewsPage() {
	const { content, setContent, management, notice, busy, save } = useManagedContent();
	const visible = content.reviews.filter((review) => review.visible && review.quote.trim() && review.author.trim());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassPage, {
		management,
		children: [
			management ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManagerBar, {
				notice,
				busy,
				onSave: save
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "extended-intro",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "back-link",
						href: routeHref("", management),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							size: 16,
							"aria-hidden": "true"
						}), " Torna ai servizi"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "Esperienze reali"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Recensioni" })
				]
			}),
			management ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsAdmin, {
				content,
				setContent
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "reviews-area",
				"aria-label": "Area recensioni",
				children: visible.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "glass-panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: review.quote }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [review.author, review.company ? ` · ${review.company}` : ""] })]
				}, review.id))
			})
		]
	});
}
function RoutedSite({ home }) {
	if (typeof window === "undefined") return home;
	const page = window.location.pathname.split("/").pop()?.toLowerCase();
	if (page === "configuratore.html") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfiguratorPage, {});
	if (page === "faq.html") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqPage, {});
	if (page === "recensioni.html") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsPage, {});
	return home;
}
//#endregion
//#region app/page.tsx
var emptyContactChannels = [
	{
		id: "whatsapp",
		label: "WhatsApp",
		url: ""
	},
	{
		id: "telegram",
		label: "Telegram",
		url: ""
	},
	{
		id: "email",
		label: "Email",
		url: ""
	}
];
function normalizeContactChannels(channels) {
	return emptyContactChannels.map((fallback) => channels.find((channel) => channel.id === fallback.id) ?? fallback);
}
var publishedConfig = site_config_default;
var approvedContactChannels = normalizeContactChannels(publishedConfig.contact?.channels ?? []);
var services = [
	{
		id: "customer-service",
		title: "Customer service e prenotazioni, gestione automatica ordini, Follow-up automatico e recupero clienti",
		price: "€2.500–6.500 + €250–700/mese",
		summary: "Raccoglie i dati forniti dal cliente e genera preventivi e proposte personalizzate. Gestisce prenotazioni, conferme, cancellazioni, promemoria e lista d'attesa, trasforma le richieste dei clienti in ordini strutturati e segnala incongruenze o errori. Aggiorna automaticamente clienti, trattative, stati progetto e prossime azioni da fare. Predispone automaticamente follow-up a clienti inattivi da molto e a preventivi ignorati. Raccoglie i dati forniti per il miglioramento di mese in mese come le richieste più frequenti e il target che rende di più.",
		detailIntro: "Centralizza le richieste provenienti da telefono, email, chat, sito web e moduli online, riconoscendo automaticamente il tipo di richiesta e raccogliendo le informazioni necessarie.",
		bullets: [
			"Risponde usando informazioni reali dell’azienda: servizi, prezzi, disponibilità, orari, zone servite e condizioni.",
			"Raccoglie i dati necessari per un preventivo e prepara una bozza di proposta commerciale secondo listini e regole definite.",
			"Classifica email e richieste in categorie personalizzate e le inoltra al reparto o alla persona corretta.",
			"Gestisce prenotazioni, disponibilità, conferme, cancellazioni, spostamenti, promemoria e liste d’attesa.",
			"Trasforma messaggi con prodotti e quantità in ordini strutturati e segnala eventuali discordanze.",
			"Aggiorna il CRM quando un cliente risponde, accetta un preventivo, chiede modifiche o passa a una nuova fase.",
			"Prepara follow-up dopo un numero prestabilito di giorni e individua clienti abituali che non acquistano più da un periodo anomalo.",
			"Distingue le richieste semplici da quelle che richiedono l’intervento umano, fornendo all’operatore un riepilogo completo."
		],
		closing: "Nel tempo evidenzia quali servizi vengono richiesti più spesso, quali categorie convertono meglio e quali passaggi causano l’abbandono.",
		icon: Bot,
		accent: "violet"
	},
	{
		id: "commercial-radar",
		title: "Scansione continua del web di potenziali clienti, analisi recensioni e monitoraggio automatico dei concorrenti",
		price: "€1.500–4.000 + €250–700/mese",
		summary: "Scansiona costantemente i canali web pubblicamente accessibili alla ricerca di post e annunci che stanno già manifestando interesse o bisogno per i tuoi servizi e segnala quelli con maggiore probabilità di conversione, evitando l'utilizzo di dati personali non necessari o sensibili. In contemporanea, monitora costantemente i prezzi pubblici, servizi, novità e avanzamenti dei concorrenti, aggiornando i report in tempo reale appena un cambiamento viene pubblicato e presentandolo nel rapporto di analisi settimanale o mensile. Scansiona automaticamente le recensioni ricevute su ogni piattaforma abilitata e individua punti di forza e i commenti negativi, identifica i pattern di problemi e lamentele ricorrenti.",
		detailIntro: "Uno strumento di commercial intelligence che raccoglie informazioni da fonti pubblicamente accessibili e le trasforma in segnali utili per vendite, marketing e strategia.",
		bullets: [
			"Individua richieste pubbliche, discussioni in cui emerge un problema, nuove sedi, espansioni, assunzioni e cambi di gestione.",
			"Monitora bandi, gare, appalti, aziende appena aperte e nuove esigenze commerciali rilevabili pubblicamente.",
			"Classifica le opportunità in base a posizione, compatibilità con i servizi, tipo di richiesta e probabilità stimata di conversione.",
			"Crea una lista di lead prioritari e mostra quali segnali hanno determinato la priorità.",
			"Controlla prezzi, servizi, prodotti, siti, campagne, annunci e promozioni dei concorrenti.",
			"Raccoglie recensioni, distingue il tono generale e individua problemi e punti di forza citati più spesso.",
			"Confronta periodi diversi e segnala aumenti improvvisi di determinate lamentele.",
			"Registra le modifiche significative e le inserisce nei report o genera un avviso immediato."
		],
		closing: "Il risultato viene condensato in un report settimanale o mensile con lead, movimenti dei concorrenti, problemi emergenti e possibili azioni.",
		icon: Radar,
		accent: "cyan"
	},
	{
		id: "content-catalogues",
		title: "Creazione contenuti e post social, automazione cataloghi, schede prodotto e immagini commerciali",
		price: "€900–2.500 + €200–600/mese",
		summary: "Prepara post, caption, immagini e contenuti per i social. Crea descrizioni, schede prodotto, tag, traduzioni e varianti grafiche promozionali basate sulle fotografie e sui prodotti dell'azienda.",
		detailIntro: "Trasforma informazioni grezze su prodotti, servizi, promozioni ed eventi aziendali in contenuti pronti per diversi canali.",
		bullets: [
			"Parte da nome, fotografie, caratteristiche, prezzo, materiali, dimensioni, target e promozione.",
			"Genera titoli, descrizioni, caption, caratteristiche principali, schede tecniche, tag e keyword.",
			"Prepara testi promozionali per il sito, newsletter, descrizioni SEO, ecommerce e marketplace.",
			"Crea post Facebook, post Instagram, storie e traduzioni.",
			"Adatta le fotografie a formati verticali, orizzontali e quadrati, con fondi neutri, banner e materiali promozionali.",
			"Genera varianti dello stesso messaggio o della stessa immagine per confrontare quali producono più interazioni o vendite.",
			"Elabora cataloghi ampi partendo da un database, mantenendo una struttura coerente e organizzata."
		],
		icon: FileText,
		accent: "pink"
	},
	{
		id: "knowledge-base",
		title: "Assistente su documenti di knowledge base aziendale e formazione dipendenti",
		price: "€1.500–4.000 + €150–450/mese",
		summary: "Permette di fare domande a manuali, PDF, procedure e documenti interni. Estrae dati da documenti e li inserisce automaticamente in database e gestionali. Aiuta i dipendenti a imparare procedure per automatizzare e snellire il lavoro man mano che si presenta, e trovare rapidamente risposte operative ai problemi ricorrenti.",
		detailIntro: "Crea una knowledge base interrogabile a partire dai documenti dell’azienda, con accessi configurati in base ai permessi applicabili.",
		bullets: [
			"Utilizza manuali, PDF, materiale formativo, procedure, documentazione tecnica, regolamenti, listini e FAQ.",
			"Risponde alle domande operative indicando anche il documento e il paragrafo da cui è stata ricavata l’informazione.",
			"Estrae dati da PDF, moduli, scansioni e documenti e li trasforma in informazioni strutturate.",
			"Inserisce dati in database, fogli di calcolo o gestionali quando il flusso è autorizzato.",
			"Riassume documenti lunghi, confronta più file e cerca informazioni distribuite in archivi differenti.",
			"Trasforma le spiegazioni dei dipendenti esperti in nuove procedure strutturate, conservando il know-how interno.",
			"Crea percorsi di onboarding, spiegazioni passo passo, quiz, simulazioni e checklist operative."
		],
		closing: "Risultati di quiz e interazioni non vengono usati automaticamente per ranking o decisioni sul rapporto di lavoro.",
		icon: BookOpen,
		accent: "blue"
	},
	{
		id: "meetings-operations",
		title: "Trascrizione riunioni, report e assegnazione attività, reportistica e assistente operativo per titolare e manager",
		price: "€2.000–5.500 + €200–650/mese",
		summary: "Trasforma riunioni in riassunti, decisioni, compiti e scadenze. Analizza dati aziendali e genera report con trend, problemi e indicatori chiave. Riassume la situazione aziendale dai report inoltrati, chat testuali e note vocali inviate ai fini dell'attività e segnala priorità, anomalie, problemi e attività urgenti o in scadenza.",
		detailIntro: "Raccoglie informazioni da più fonti aziendali e le trasforma in una visione operativa unica per titolare e manager.",
		bullets: [
			"Da una riunione estrae argomenti, decisioni, problemi, persone coinvolte, attività, responsabili e scadenze.",
			"Prepara task nei sistemi usati dall’azienda oppure una lista da approvare.",
			"Raccoglie dati da CRM, preventivi, ordini, assistenza, progetti, magazzino, file, report, chat e note vocali abilitate.",
			"Analizza l’andamento nel tempo e segnala trend, anomalie, attività bloccate, problemi ripetuti e scadenze dimenticate.",
			"Permette ai dipendenti di inviare brevi aggiornamenti, anche con note vocali, trasformandoli in informazioni operative.",
			"Crea una situation room digitale per il titolare e i manager."
		],
		closing: "Il sistema evidenzia criticità relative ad attività e processi senza attribuire automaticamente punteggi di produttività ai singoli lavoratori.",
		icon: ClipboardList,
		accent: "amber"
	},
	{
		id: "inventory-scorte",
		title: "Gestione intelligente di magazzino e scorte",
		price: "€2.000–5.000 + €200–500/mese",
		summary: "Monitora stock, consumi e vendite per stimare e prevedere possibili carenze o eccessi di scorte.",
		detailIntro: "Raccoglie e analizza i dati necessari per rendere il magazzino più prevedibile e ridurre le decisioni basate solo sull’intuito.",
		bullets: [
			"Analizza quantità presenti, vendite, consumi, ordini ricevuti e ordini ai fornitori.",
			"Considera tempi medi di consegna, stagionalità, prodotti in scadenza e andamento storico.",
			"Confronta andamento storico e attuale dei prodotti.",
			"Stima quando effettuare un nuovo ordine e segnala i prodotti fermi da troppo tempo.",
			"Genera report automatici sullo stato del magazzino.",
			"Quando autorizzato, incrocia trend sul web, stagionalità, eventi aziendali e problemi dei fornitori rilevati nei report."
		],
		icon: Boxes,
		accent: "green"
	},
	{
		id: "sales-conversations",
		title: "Analisi delle conversazioni commerciali per personale addetto alle vendite",
		price: "€1.500–3.500 + €150–450/mese",
		summary: "Analizza conversazioni commerciali registrate o trascritte secondo le modalità e informative applicabili e identifica interesse, obiezioni, richieste e prossimi passi da fare. Analizza le conversazioni commerciali e suggerisce come migliorare il processo di vendita, individuando su base aggregata gli errori più comuni e i passi che funzionano più spesso, usando i pattern per analizzare cosa fa più spesso concludere positivamente o negativamente una vendita.",
		detailIntro: "Analizza conversazioni commerciali registrate o trascritte secondo modalità e informative applicabili, trasformandole in informazioni utilizzabili.",
		bullets: [
			"Identifica prodotto o servizio richiesto, necessità, segnali di interesse, obiezioni, budget e tempistiche.",
			"Rileva competitor citati, domande senza risposta e prossimo passo consigliato.",
			"Genera un riepilogo da inserire nel CRM evitando la compilazione manuale dopo ogni telefonata.",
			"Analizza domande fatte, obiezioni approfondite, argomentazioni utilizzate, chiusure tentate e motivazioni del rifiuto.",
			"Su base aggregata individua quali argomentazioni, domande e passaggi compaiono più spesso nelle vendite concluse.",
			"Evidenzia quali obiezioni precedono più frequentemente la perdita del cliente e quali prodotti generano più difficoltà."
		],
		closing: "Non produce ranking dei venditori, score individuali o inferenze automatiche sulle emozioni dei lavoratori dalla voce.",
		icon: MessageCircle,
		accent: "orange"
	},
	{
		id: "document-compliance",
		title: "Pre-verifica di documenti, pratiche e conformità",
		price: "€1.500–3.500 + €150–400/mese",
		summary: "Esegue controlli preliminari rispetto alle direttive, checklist, regole e fonti configurate dall'azienda e segnala possibili discrepanze da verificare.",
		detailIntro: "Controlla automaticamente la presenza e la completezza dei documenti e segnala incoerenze e possibili requisiti non soddisfatti.",
		bullets: [
			"Verifica documenti presenti o mancanti, campi incompleti, firme, date, scadenze, codici, allegati e formati.",
			"Individua valori incoerenti, dati discordanti o informazioni frammentate tra più documenti.",
			"Confronta informazioni presenti nelle fonti autorizzate dall’azienda secondo le relative regole di accesso.",
			"Segnala anomalie prima che una pratica venga approvata o archiviata.",
			"Può confrontare i dati con le problematiche in corso in azienda o nella fornitura, quando previsto dal flusso."
		],
		closing: "È uno strumento di pre-verifica: non sostituisce certificazioni legali, professionisti o le responsabilità previste dal processo aziendale.",
		icon: FileCheckCorner,
		accent: "teal"
	}
];
var savedServiceOrder = [
	"customer-service",
	"content-catalogues",
	"sales-conversations",
	"document-compliance",
	"meetings-operations",
	"commercial-radar",
	"inventory-scorte",
	"knowledge-base"
];
services.sort((first, second) => savedServiceOrder.indexOf(first.id) - savedServiceOrder.indexOf(second.id));
var SERVICE_STORAGE_KEY = "sito-implementazioni-ia-services-v2";
var COPY_STORAGE_KEY = "sito-implementazioni-ia-copy-v1";
var BLUR_STORAGE_KEY = "sito-implementazioni-ia-card-blur-v1";
var MAX_CARD_BLUR_PX = 100;
var GLASS_MODE_STORAGE_KEY = "sito-implementazioni-ia-glass-mode-v1";
var GLASS_MODE_VERSION_KEY = "sito-implementazioni-ia-glass-mode-version";
var GLASS_MODE_VERSION = "opaque-default-v2";
function getStoredCardBlur() {
	if (typeof window === "undefined") return publishedConfig.appearance.cardBlur;
	const stored = Number(window.localStorage.getItem(BLUR_STORAGE_KEY));
	return Number.isFinite(stored) ? Math.min(100, Math.max(0, stored)) : publishedConfig.appearance.cardBlur;
}
function getStoredGlassMode() {
	if (typeof window === "undefined") return publishedConfig.appearance.glassMode;
	if (window.localStorage.getItem(GLASS_MODE_VERSION_KEY) !== GLASS_MODE_VERSION) {
		window.localStorage.setItem(GLASS_MODE_VERSION_KEY, GLASS_MODE_VERSION);
		return publishedConfig.appearance.glassMode;
	}
	const stored = window.localStorage.getItem(GLASS_MODE_STORAGE_KEY);
	return stored === "normal" || stored === "opaque" || stored === "liquid" ? stored : publishedConfig.appearance.glassMode;
}
var glassModeLabels = {
	normal: "Glass normale",
	liquid: "Liquid glass",
	opaque: "Matte glass"
};
function roundedRectPath({ x, y, width, height, radius }) {
	const right = x + width;
	const bottom = y + height;
	const corner = Math.min(radius, width / 2, height / 2);
	return [
		`M ${x + corner} ${y}`,
		`H ${right - corner}`,
		`Q ${right} ${y} ${right} ${y + corner}`,
		`V ${bottom - corner}`,
		`Q ${right} ${bottom} ${right - corner} ${bottom}`,
		`H ${x + corner}`,
		`Q ${x} ${bottom} ${x} ${bottom - corner}`,
		`V ${y + corner}`,
		`Q ${x} ${y} ${x + corner} ${y}`,
		"Z"
	].join(" ");
}
function blurWindowsMatch(current, next) {
	if (current.length !== next.length) return false;
	return current.every((window, index) => {
		const candidate = next[index];
		return Math.abs(window.x - candidate.x) < .25 && Math.abs(window.y - candidate.y) < .25 && Math.abs(window.width - candidate.width) < .25 && Math.abs(window.height - candidate.height) < .25 && Math.abs(window.radius - candidate.radius) < .25;
	});
}
var defaultSiteCopy = {
	brandName: "Sito implementazioni IA",
	brandCaption: "sistemi IA per PMI",
	eyebrow: "Sistemi connessi · operazioni più lucide",
	headingPrimary: "L’IA entra nei processi.",
	headingSecondary: "Il lavoro resta umano.",
	introCopy: "Soluzioni concrete per ridurre il lavoro ripetitivo, leggere meglio i segnali e trasformare le informazioni aziendali in azioni.",
	boardNote: "Passa sopra una tessera per esplorarla.",
	editButtonLabel: "Modifica testo",
	reorderButtonLabel: "Sposta tessere",
	lightModeLabel: "Scura",
	darkModeLabel: "Chiara",
	moreButtonLabel: "Dimmi di più",
	contactButtonLabel: "Parliamo di questo servizio",
	swapButtonLabel: "Scambia",
	selectedButtonLabel: "Selezionata",
	editHint: "Modifica i campi direttamente nelle tessere; per il testo completo apri “Dimmi di più”.",
	reorderHint: "Trascina le tessere per scambiarle o selezionane due in successione.",
	swapHint: "Seleziona un’altra tessera per scambiarle, oppure trascina una tessera sopra un’altra.",
	saveLabel: "Salva",
	cancelLabel: "Annulla",
	restoreLabel: "Ripristina tutti",
	editorTitle: "Testi della pagina",
	editorHint: "Lascia vuoto un campo per rimuovere quel testo.",
	backgroundButtonLabel: "Sfondi",
	backgroundPanelTitle: "Scegli lo sfondo",
	backgroundPreviousLabel: "Precedente",
	backgroundNextLabel: "Successivo",
	backgroundRemoveLabel: "Rimuovi",
	backgroundHideLabel: "Spegni",
	backgroundShowLabel: "Riattiva",
	backgroundRestoreLabel: "Ripristina sfondi",
	backgroundOriginalLabel: "Originale",
	backgroundPastelLabel: "Pastello",
	backgroundAvailableLabel: "sfondi disponibili",
	backgroundNoImageLabel: "Nessuno sfondo",
	backgroundHint: "Clicca una miniatura o usa i pulsanti per confrontarli.",
	backgroundOffHint: "Lo sfondo è spento.",
	backgroundKeyboardHint: "Clicca “Sfondi” per attivare la tastiera · ←/→ cambia sfondo · Canc/Backspace rimuove quello attivo · Esc disattiva.",
	backgroundLightModeLabel: "Modalità chiara",
	backgroundDarkModeLabel: "Modalità scura",
	backgroundNames: {
		"galaxy-gold": "Oro orbitale",
		"galaxy-purple": "Polvere viola",
		"nebula-ruby-blue": "Ruby blu",
		"galaxy-barred": "Spirale dorata",
		"galaxy-lilac": "Galassia lilla",
		"nebula-blue-red": "Nebulosa rosso blu",
		"nebula-deep-teal": "Nebulosa profonda",
		"galaxy-magenta": "Vortice magenta",
		"cosmic-portal": "Portale cosmico",
		"star-field-vertical": "Cielo stellato verticale",
		"smm-deserto-dorato": "SMM · Deserto dorato",
		"smm-orizzonte-marziano": "SMM · Orizzonte marziano",
		"smm-mare-di-nuvole": "SMM · Mare di nuvole",
		"smm-lago-rosa": "SMM · Lago rosa",
		"smm-mare-bioluminescente": "SMM · Mare bioluminescente",
		"smm-prato-viola": "SMM · Prato viola",
		"pastel-gold-lilac": "Pastello oro e lilla",
		"pastel-galaxy-blue-pink": "Pastello blu e rosa",
		"pastel-nebula-aqua-peach": "Pastello acquamarina e pesca",
		"pastel-galaxy-peach": "Pastello pesca",
		"pastel-lilac-cloud": "Pastello nuvola lilla",
		"pastel-nebula-coral": "Pastello corallo",
		"pastel-nebula-pink-blue": "Pastello rosa e azzurro",
		"pastel-nebula-mint": "Pastello menta",
		"pastel-cosmic-portal": "Pastello portale cosmico",
		"pastel-gold-mint": "Pastello oro e menta"
	},
	swappedNotice: "Tessere scambiate. Premi Salva per confermare.",
	selectedNotice: "Seleziona un’altra tessera per scambiarle.",
	savedNotice: "Modifiche salvate in questo browser.",
	cancelledNotice: "Modifiche annullate.",
	restoredNotice: "Versione iniziale caricata. Premi Salva per confermare."
};
var backgroundCatalog = [
	{
		id: "galaxy-gold",
		name: "Oro orbitale",
		src: "./backgrounds/galaxy-gold.jpg",
		kind: "original"
	},
	{
		id: "galaxy-purple",
		name: "Polvere viola",
		src: "./backgrounds/galaxy-purple.jpg",
		kind: "original"
	},
	{
		id: "nebula-ruby-blue",
		name: "Ruby blu",
		src: "./backgrounds/nebula-ruby-blue.jpg",
		kind: "original"
	},
	{
		id: "galaxy-barred",
		name: "Spirale dorata",
		src: "./backgrounds/galaxy-barred.jpg",
		kind: "original"
	},
	{
		id: "galaxy-lilac",
		name: "Galassia lilla",
		src: "./backgrounds/galaxy-lilac.jpg",
		kind: "original"
	},
	{
		id: "nebula-blue-red",
		name: "Nebulosa rosso blu",
		src: "./backgrounds/nebula-blue-red.jpg",
		kind: "original"
	},
	{
		id: "nebula-deep-teal",
		name: "Nebulosa profonda",
		src: "./backgrounds/nebula-deep-teal.jpg",
		kind: "original"
	},
	{
		id: "galaxy-magenta",
		name: "Vortice magenta",
		src: "./backgrounds/galaxy-magenta.jpg",
		kind: "original"
	},
	{
		id: "cosmic-portal",
		name: "Portale cosmico",
		src: "./backgrounds/cosmic-portal.jpg",
		kind: "original"
	},
	{
		id: "star-field-vertical",
		name: "Cielo stellato verticale",
		src: "./backgrounds/star-field-vertical.jpg",
		kind: "original",
		scrollWithPage: true
	},
	{
		id: "smm-deserto-dorato",
		name: "SMM · Deserto dorato",
		src: "./backgrounds/smm-deserto-dorato.webp",
		kind: "original"
	},
	{
		id: "smm-orizzonte-marziano",
		name: "SMM · Orizzonte marziano",
		src: "./backgrounds/smm-orizzonte-marziano.webp",
		kind: "original"
	},
	{
		id: "smm-mare-di-nuvole",
		name: "SMM · Mare di nuvole",
		src: "./backgrounds/smm-mare-di-nuvole.webp",
		kind: "original"
	},
	{
		id: "smm-lago-rosa",
		name: "SMM · Lago rosa",
		src: "./backgrounds/smm-lago-rosa.webp",
		kind: "original"
	},
	{
		id: "smm-mare-bioluminescente",
		name: "SMM · Mare bioluminescente",
		src: "./backgrounds/smm-mare-bioluminescente.webp",
		kind: "original"
	},
	{
		id: "smm-prato-viola",
		name: "SMM · Prato viola",
		src: "./backgrounds/smm-prato-viola.webp",
		kind: "original"
	},
	{
		id: "pastel-gold-lilac",
		name: "Pastello oro e lilla",
		src: "./backgrounds/pastel-gold-lilac.png",
		kind: "pastel"
	},
	{
		id: "pastel-galaxy-blue-pink",
		name: "Pastello blu e rosa",
		src: "./backgrounds/pastel-galaxy-blue-pink.png",
		kind: "pastel"
	},
	{
		id: "pastel-nebula-aqua-peach",
		name: "Pastello acquamarina e pesca",
		src: "./backgrounds/pastel-nebula-aqua-peach.png",
		kind: "pastel"
	},
	{
		id: "pastel-galaxy-peach",
		name: "Pastello pesca",
		src: "./backgrounds/pastel-galaxy-peach.png",
		kind: "pastel"
	},
	{
		id: "pastel-lilac-cloud",
		name: "Pastello nuvola lilla",
		src: "./backgrounds/pastel-lilac-cloud.png",
		kind: "pastel"
	},
	{
		id: "pastel-nebula-coral",
		name: "Pastello corallo",
		src: "./backgrounds/pastel-nebula-coral.png",
		kind: "pastel"
	},
	{
		id: "pastel-nebula-pink-blue",
		name: "Pastello rosa e azzurro",
		src: "./backgrounds/pastel-nebula-pink-blue.png",
		kind: "pastel"
	},
	{
		id: "pastel-nebula-mint",
		name: "Pastello menta",
		src: "./backgrounds/pastel-nebula-mint.png",
		kind: "pastel"
	},
	{
		id: "pastel-cosmic-portal",
		name: "Pastello portale cosmico",
		src: "./backgrounds/pastel-cosmic-portal.png",
		kind: "pastel"
	},
	{
		id: "pastel-gold-mint",
		name: "Pastello oro e menta",
		src: "./backgrounds/pastel-gold-mint.png",
		kind: "pastel"
	}
];
var defaultBackgroundPreferences = {
	selected: { dark: "smm-orizzonte-marziano" },
	hiddenIds: { dark: [
		"galaxy-gold",
		"galaxy-purple",
		"nebula-ruby-blue",
		"galaxy-barred",
		"nebula-blue-red",
		"nebula-deep-teal",
		"galaxy-magenta",
		"cosmic-portal",
		"star-field-vertical",
		"smm-deserto-dorato",
		"smm-mare-di-nuvole",
		"smm-lago-rosa",
		"smm-mare-bioluminescente",
		"smm-prato-viola"
	] },
	enabled: { dark: true }
};
var BACKGROUND_STORAGE_KEY = "sito-implementazioni-ia-backgrounds-v1";
var IMPORT_BACKUP_STORAGE_KEY = "sito-implementazioni-ia-before-import-v2";
function serializeServices(items) {
	return items.map(({ id, title, price, summary, detailIntro, bullets, closing }) => ({
		id,
		title,
		price,
		summary,
		detailIntro,
		bullets,
		closing
	}));
}
function serviceSnapshot(items) {
	return JSON.stringify(serializeServices(items));
}
function copySnapshot(copy) {
	return JSON.stringify(copy);
}
function restoreSavedServices(raw) {
	if (!raw) return null;
	try {
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return null;
		const records = parsed.filter((item) => Boolean(item) && typeof item === "object" && !Array.isArray(item));
		if (records.length !== services.length) return null;
		const baseById = new Map(services.map((service) => [service.id, service]));
		const ids = records.map((record) => typeof record.id === "string" ? record.id : "");
		if (new Set(ids).size !== services.length || ids.some((id) => !baseById.has(id))) return null;
		return records.map((record) => {
			const base = baseById.get(record.id);
			if (!base) return null;
			const bullets = Array.isArray(record.bullets) && record.bullets.every((bullet) => typeof bullet === "string") ? record.bullets : base.bullets;
			return {
				...base,
				title: typeof record.title === "string" ? record.title : base.title,
				price: typeof record.price === "string" ? record.price : base.price,
				summary: typeof record.summary === "string" ? record.summary : base.summary,
				detailIntro: typeof record.detailIntro === "string" ? record.detailIntro : base.detailIntro,
				bullets,
				closing: typeof record.closing === "string" ? record.closing : base.closing
			};
		}).filter((service) => Boolean(service));
	} catch {
		return null;
	}
}
var approvedServices = restoreSavedServices(JSON.stringify(publishedConfig.services)) ?? services;
function getStoredServices() {
	if (typeof window === "undefined") return approvedServices;
	try {
		return restoreSavedServices(window.localStorage.getItem(SERVICE_STORAGE_KEY)) ?? approvedServices;
	} catch {
		return approvedServices;
	}
}
function restoreSavedCopy(raw) {
	if (!raw) return null;
	try {
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
		const record = parsed;
		const copy = {
			...defaultSiteCopy,
			backgroundNames: { ...defaultSiteCopy.backgroundNames }
		};
		for (const key of Object.keys(defaultSiteCopy)) {
			if (key === "backgroundNames") continue;
			const value = record[key];
			if (typeof value === "string") copy[key] = value;
		}
		const savedNames = record.backgroundNames;
		if (savedNames && typeof savedNames === "object" && !Array.isArray(savedNames)) {
			const names = savedNames;
			for (const id of Object.keys(defaultSiteCopy.backgroundNames)) if (typeof names[id] === "string") copy.backgroundNames[id] = names[id];
		}
		return copy;
	} catch {
		return null;
	}
}
var approvedSiteCopy = restoreSavedCopy(JSON.stringify(publishedConfig.copy)) ?? defaultSiteCopy;
function getStoredCopy() {
	if (typeof window === "undefined") return approvedSiteCopy;
	try {
		return restoreSavedCopy(window.localStorage.getItem(COPY_STORAGE_KEY)) ?? approvedSiteCopy;
	} catch {
		return approvedSiteCopy;
	}
}
function getBackgroundsForTheme(_theme, hiddenIds) {
	return backgroundCatalog.filter((background) => !hiddenIds.includes(background.id));
}
function restoreSavedBackgroundPreferences(raw) {
	if (!raw) return null;
	try {
		const parsed = JSON.parse(raw);
		if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
		const record = parsed;
		const selectedRecord = record.selected && typeof record.selected === "object" && !Array.isArray(record.selected) ? record.selected : {};
		const enabledRecord = record.enabled && typeof record.enabled === "object" && !Array.isArray(record.enabled) ? record.enabled : {};
		const validateHiddenIds = (value) => Array.isArray(value) ? value.filter((id) => typeof id === "string" && backgroundCatalog.some((background) => background.id === id)) : [];
		const legacyHiddenIds = validateHiddenIds(record.hiddenIds);
		const hiddenRecord = record.hiddenIds && typeof record.hiddenIds === "object" && !Array.isArray(record.hiddenIds) ? record.hiddenIds : null;
		const hiddenIds = { dark: hiddenRecord ? validateHiddenIds(hiddenRecord.dark) : legacyHiddenIds };
		const selected = { dark: typeof selectedRecord.dark === "string" && backgroundCatalog.some((background) => background.id === selectedRecord.dark) ? selectedRecord.dark : defaultBackgroundPreferences.selected.dark };
		for (const theme of ["dark"]) {
			const available = getBackgroundsForTheme(theme, hiddenIds[theme]);
			if (!available.some((background) => background.id === selected[theme])) selected[theme] = available[0]?.id ?? "";
		}
		return {
			selected,
			hiddenIds: { dark: [...new Set(hiddenIds.dark)] },
			enabled: { dark: typeof enabledRecord.dark === "boolean" ? enabledRecord.dark : defaultBackgroundPreferences.enabled.dark }
		};
	} catch {
		return null;
	}
}
function getStoredBackgroundPreferences() {
	if (typeof window === "undefined") return approvedBackgroundPreferences;
	try {
		return restoreSavedBackgroundPreferences(window.localStorage.getItem(BACKGROUND_STORAGE_KEY)) ?? approvedBackgroundPreferences;
	} catch {
		return approvedBackgroundPreferences;
	}
}
var approvedBackgroundPreferences = restoreSavedBackgroundPreferences(JSON.stringify(publishedConfig.appearance.backgrounds)) ?? defaultBackgroundPreferences;
async function loadRemoteBackgroundPreferences() {
	return getStoredBackgroundPreferences();
}
async function saveRemoteBackgroundPreferences(preferences) {
	try {
		window.localStorage.setItem(BACKGROUND_STORAGE_KEY, JSON.stringify(preferences));
	} catch {}
}
function createPublishedConfig(items, copy, contactChannels, cardBlur, glassMode, backgrounds) {
	return {
		version: 2,
		savedAt: (/* @__PURE__ */ new Date()).toISOString(),
		services: serializeServices(items),
		copy,
		contact: {
			url: "",
			channels: contactChannels
		},
		appearance: {
			cardBlur,
			glassMode,
			backgrounds
		}
	};
}
function parseImportedConfig(raw) {
	const parsed = JSON.parse(raw);
	if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Il file non contiene una configurazione valida.");
	const record = parsed;
	const contactRecord = record.contact && typeof record.contact === "object" && !Array.isArray(record.contact) ? record.contact : {};
	const appearance = record.appearance && typeof record.appearance === "object" && !Array.isArray(record.appearance) ? record.appearance : record;
	const importedServices = restoreSavedServices(JSON.stringify(record.services ?? record.serviceItems ?? null));
	const importedCopy = restoreSavedCopy(JSON.stringify(record.copy ?? record.siteCopy ?? null));
	const importedBackgrounds = restoreSavedBackgroundPreferences(JSON.stringify(appearance.backgrounds ?? record.backgroundPreferences ?? null));
	const blur = Number(appearance.cardBlur ?? record.blur);
	const mode = appearance.glassMode ?? record.material;
	const importedMode = mode === "normal" || mode === "liquid" || mode === "opaque" ? mode : mode === "matte" ? "opaque" : null;
	if (!importedServices || !importedCopy || !importedBackgrounds || !Number.isFinite(blur) || blur < 0 || blur > 100 || !importedMode) throw new Error("Configurazione incompleta o non compatibile: il sito attuale non è stato modificato.");
	const importedChannels = Array.isArray(contactRecord.channels) ? contactRecord.channels.flatMap((candidate) => {
		if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) return [];
		const channel = candidate;
		if (channel.id !== "whatsapp" && channel.id !== "telegram" && channel.id !== "email" || typeof channel.label !== "string" || typeof channel.url !== "string") return [];
		return [{
			id: channel.id,
			label: channel.label,
			url: channel.url
		}];
	}) : [];
	const legacyContactUrl = typeof contactRecord.url === "string" ? contactRecord.url : "";
	return {
		services: importedServices,
		copy: importedCopy,
		contactChannels: normalizeContactChannels(importedChannels.length > 0 ? importedChannels : legacyContactUrl ? [{
			id: "email",
			label: "Email",
			url: legacyContactUrl
		}] : []),
		backgrounds: importedBackgrounds,
		cardBlur: blur,
		glassMode: importedMode
	};
}
function isLocalManagementLocation() {
	if (typeof window === "undefined") return false;
	const host = window.location.hostname;
	return (host === "127.0.0.1" || host === "localhost" || host === "::1") && new URLSearchParams(window.location.search).get("manage") === "1";
}
function buildContactHref(rawUrl, service) {
	const value = rawUrl.trim();
	if (!value) return null;
	try {
		const url = new URL(value);
		if (url.protocol === "mailto:") {
			if (!url.searchParams.has("subject")) url.searchParams.set("subject", `Richiesta: ${service.title}`);
			if (!url.searchParams.has("body")) url.searchParams.set("body", `Vorrei informazioni sul servizio: ${service.title}`);
			return url.toString();
		}
		if (url.protocol === "tel:") return url.toString();
		if (url.protocol === "https:") {
			if (url.hostname === "wa.me" || url.hostname.endsWith("whatsapp.com")) url.searchParams.set("text", `Vorrei informazioni sul servizio: ${service.title}`);
			else if (url.hostname === "t.me" || url.hostname.endsWith("telegram.me")) url.searchParams.set("text", `Vorrei informazioni sul servizio: ${service.title}`);
			else url.searchParams.set("servizio", service.id);
			return url.toString();
		}
	} catch {
		return null;
	}
	return null;
}
function InlineText({ value, onChange, editing, ariaLabel, multiline = false, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-text${editing ? " is-editing" : ""}${multiline ? " is-multiline" : ""} ${className}`,
		contentEditable: editing,
		suppressContentEditableWarning: true,
		role: editing ? "textbox" : void 0,
		"aria-label": editing ? ariaLabel : void 0,
		"aria-multiline": editing && multiline ? true : void 0,
		tabIndex: editing ? 0 : void 0,
		onClick: (event) => {
			if (editing) event.stopPropagation();
		},
		onKeyDown: (event) => {
			if (!multiline && event.key === "Enter") {
				event.preventDefault();
				event.currentTarget.blur();
			}
		},
		onInput: (event) => onChange(event.currentTarget.textContent ?? ""),
		onBlur: (event) => onChange(event.currentTarget.textContent ?? ""),
		children: value
	});
}
function BackgroundPicker({ backgrounds, activeBackground, isEnabled, hasHiddenBackgrounds, copy, onSelect, onCycle, onToggleVisibility, onHide, onRestore, onActivateKeyboard, isEditMode, onCopyChange }) {
	const getBackgroundName = (background) => copy.backgroundNames[background.id] ?? background.name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "background-panel",
		"aria-label": copy.backgroundPanelTitle,
		"aria-keyshortcuts": "ArrowLeft ArrowRight Delete Backspace",
		onPointerDown: onActivateKeyboard,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "background-panel-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "background-panel-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "background-kicker",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
								value: copy.backgroundPanelTitle,
								onChange: (value) => onCopyChange({ backgroundPanelTitle: value }),
								editing: isEditMode,
								ariaLabel: "Titolo pannello sfondi"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: activeBackground ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
							value: getBackgroundName(activeBackground),
							onChange: (value) => onCopyChange({ backgroundNames: {
								...copy.backgroundNames,
								[activeBackground.id]: value
							} }),
							editing: isEditMode,
							ariaLabel: "Nome dello sfondo attivo"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
							value: copy.backgroundNoImageLabel,
							onChange: (value) => onCopyChange({ backgroundNoImageLabel: value }),
							editing: isEditMode,
							ariaLabel: "Testo nessuno sfondo"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "background-count",
							children: [
								copy.backgroundDarkModeLabel,
								" · ",
								backgrounds.length,
								" ",
								copy.backgroundAvailableLabel
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "background-panel-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "background-control",
							onClick: () => onCycle(-1),
							disabled: !backgrounds.length,
							"aria-label": copy.backgroundPreviousLabel,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
								size: 15,
								strokeWidth: 1.8,
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy.backgroundPreviousLabel })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "background-control",
							onClick: () => onCycle(1),
							disabled: !backgrounds.length,
							"aria-label": copy.backgroundNextLabel,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy.backgroundNextLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
								size: 15,
								strokeWidth: 1.8,
								"aria-hidden": "true"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "background-control",
							onClick: onToggleVisibility,
							disabled: !activeBackground,
							"aria-pressed": isEnabled,
							children: [isEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, {
								size: 15,
								strokeWidth: 1.8,
								"aria-hidden": "true"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
								size: 15,
								strokeWidth: 1.8,
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isEnabled ? copy.backgroundHideLabel : copy.backgroundShowLabel })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "background-control",
							onClick: onRestore,
							disabled: !hasHiddenBackgrounds,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
								size: 15,
								strokeWidth: 1.8,
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy.backgroundRestoreLabel })]
						})
					]
				})]
			}),
			backgrounds.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "background-grid",
				children: backgrounds.map((background) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `background-option-wrap${activeBackground?.id === background.id ? " is-current" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "background-option",
						onClick: () => onSelect(background.id),
						"aria-pressed": activeBackground?.id === background.id,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: background.src,
							alt: "",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "background-option-caption",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
								value: getBackgroundName(background),
								onChange: (value) => onCopyChange({ backgroundNames: {
									...copy.backgroundNames,
									[background.id]: value
								} }),
								editing: isEditMode,
								ariaLabel: `Nome sfondo ${background.name}`
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: background.kind === "pastel" ? copy.backgroundPastelLabel : copy.backgroundOriginalLabel })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "background-remove",
						onClick: (event) => {
							event.stopPropagation();
							onHide(background.id);
						},
						"aria-label": `${copy.backgroundRemoveLabel}: ${getBackgroundName(background)}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
							size: 13,
							strokeWidth: 1.8,
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy.backgroundRemoveLabel })]
					})]
				}, background.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "background-empty",
				children: copy.backgroundNoImageLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "background-hint",
				children: [
					isEnabled ? copy.backgroundHint : copy.backgroundOffHint,
					" ",
					copy.backgroundKeyboardHint
				]
			})
		]
	});
}
function ServiceCard({ service, copy, onMore, slot, isEditMode, isReorderMode, isSelectedForSwap, onChange, onCopyChange, onSwapSelect, onDragStart, onDragOver, onDrop, onDragEnd }) {
	const Icon = service.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `service-card ${slot} accent-${service.accent}${isSelectedForSwap ? " is-swap-selected" : ""}`,
		draggable: isReorderMode,
		onDragStart: () => {
			if (isReorderMode) onDragStart(service.id);
		},
		onDragOver,
		onDrop: () => {
			if (isReorderMode) onDrop(service.id);
		},
		onDragEnd,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "service-card-top",
			children: [
				isReorderMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `swap-control${isSelectedForSwap ? " is-selected" : ""}`,
					onClick: (event) => {
						event.stopPropagation();
						onSwapSelect(service.id);
					},
					"aria-pressed": isSelectedForSwap,
					"aria-label": isSelectedForSwap ? "Tessera selezionata per lo scambio" : "Seleziona questa tessera per scambiarla",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, {
						size: 15,
						strokeWidth: 1.7,
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isSelectedForSwap ? copy.selectedButtonLabel : copy.swapButtonLabel })]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "service-icon",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						size: 18,
						strokeWidth: 1.7
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "service-heading",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "service-title-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
							value: service.title,
							onChange: (value) => onChange(service.id, { title: value }),
							editing: isEditMode,
							ariaLabel: "Nome della tessera",
							multiline: true
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "service-price",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
								value: service.price,
								onChange: (value) => onChange(service.id, { price: value }),
								editing: isEditMode,
								ariaLabel: "Prezzo della tessera",
								multiline: true
							})
						})]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "service-reveal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "service-reveal-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "service-summary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
						value: service.summary,
						onChange: (value) => onChange(service.id, { summary: value }),
						editing: isEditMode,
						ariaLabel: "Descrizione breve della tessera",
						multiline: true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "more-button",
					onClick: (event) => onMore(service, event.currentTarget),
					"aria-label": `Apri i dettagli: ${service.title}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
						value: copy.moreButtonLabel,
						onChange: (value) => onCopyChange({ moreButtonLabel: value }),
						editing: isEditMode,
						ariaLabel: "Etichetta pulsante dettagli"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						size: 15,
						strokeWidth: 1.8,
						"aria-hidden": "true"
					})]
				})]
			})
		})]
	});
}
function HomePage() {
	const theme = "dark";
	const [serviceItems, setServiceItems] = (0, import_react.useState)(approvedServices);
	const [savedServices, setSavedServices] = (0, import_react.useState)(approvedServices);
	const [siteCopy, setSiteCopy] = (0, import_react.useState)(approvedSiteCopy);
	const [savedCopy, setSavedCopy] = (0, import_react.useState)(approvedSiteCopy);
	const [backgroundPreferences, setBackgroundPreferences] = (0, import_react.useState)(approvedBackgroundPreferences);
	const [isBackgroundPanelOpen, setIsBackgroundPanelOpen] = (0, import_react.useState)(false);
	const [isBackgroundKeyboardActive, setIsBackgroundKeyboardActive] = (0, import_react.useState)(false);
	const [cardBlur, setCardBlur] = (0, import_react.useState)(publishedConfig.appearance.cardBlur);
	const [glassMode, setGlassMode] = (0, import_react.useState)(publishedConfig.appearance.glassMode);
	const [contactChannels, setContactChannels] = (0, import_react.useState)(approvedContactChannels);
	const [isManagementMode, setIsManagementMode] = (0, import_react.useState)(false);
	const [isClientStateLoaded, setIsClientStateLoaded] = (0, import_react.useState)(false);
	const [selectedServiceId, setSelectedServiceId] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return null;
		const requestedService = new URLSearchParams(window.location.search).get("service");
		return requestedService && approvedServices.some((service) => service.id === requestedService) ? requestedService : null;
	});
	const [isEditMode, setIsEditMode] = (0, import_react.useState)(false);
	const [isReorderMode, setIsReorderMode] = (0, import_react.useState)(false);
	const [selectedSwapId, setSelectedSwapId] = (0, import_react.useState)(null);
	const [draggingId, setDraggingId] = (0, import_react.useState)(null);
	const [editorNotice, setEditorNotice] = (0, import_react.useState)("");
	const [managementNotice, setManagementNotice] = (0, import_react.useState)("Bozza locale · la versione pubblicata non cambia finché non esegui il deploy.");
	const [isSavingProject, setIsSavingProject] = (0, import_react.useState)(false);
	const [isPublishingProject, setIsPublishingProject] = (0, import_react.useState)(false);
	const [cardBlurWindows, setCardBlurWindows] = (0, import_react.useState)([]);
	const siteShellRef = (0, import_react.useRef)(null);
	const servicesBoardRef = (0, import_react.useRef)(null);
	const backgroundSyncQueue = (0, import_react.useRef)(Promise.resolve());
	const backgroundPreferencesRef = (0, import_react.useRef)(backgroundPreferences);
	const backgroundLocalChanged = (0, import_react.useRef)(false);
	const importInputRef = (0, import_react.useRef)(null);
	const lastDetailTriggerRef = (0, import_react.useRef)(null);
	const selectedService = serviceItems.find((service) => service.id === selectedServiceId) ?? null;
	const themeHiddenIds = backgroundPreferences.hiddenIds[theme];
	const themeBackgrounds = (0, import_react.useMemo)(() => getBackgroundsForTheme(theme, themeHiddenIds), [theme, themeHiddenIds]);
	const activeBackground = themeBackgrounds.find((background) => background.id === backgroundPreferences.selected[theme]) ?? themeBackgrounds[0] ?? null;
	const isBackgroundEnabled = backgroundPreferences.enabled[theme];
	const hasHiddenBackgrounds = themeHiddenIds.length > 0;
	const hasChanges = serviceSnapshot(serviceItems) !== serviceSnapshot(savedServices) || copySnapshot(siteCopy) !== copySnapshot(savedCopy);
	const editorActive = isEditMode || isReorderMode;
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset.theme = "dark";
		window.localStorage.setItem("sito-implementazioni-ia-theme", "dark");
	}, []);
	(0, import_react.useEffect)(() => {
		const animationFrame = window.requestAnimationFrame(() => {
			const canManage = isLocalManagementLocation();
			const storedServices = canManage ? getStoredServices() : approvedServices;
			const storedCopy = canManage ? getStoredCopy() : approvedSiteCopy;
			setServiceItems(storedServices);
			setSavedServices(storedServices);
			setSiteCopy(storedCopy);
			setSavedCopy(storedCopy);
			setBackgroundPreferences(canManage ? getStoredBackgroundPreferences() : approvedBackgroundPreferences);
			setCardBlur(canManage ? getStoredCardBlur() : publishedConfig.appearance.cardBlur);
			setGlassMode(canManage ? getStoredGlassMode() : publishedConfig.appearance.glassMode);
			setContactChannels(approvedContactChannels);
			setIsManagementMode(canManage);
			setIsClientStateLoaded(true);
		});
		return () => window.cancelAnimationFrame(animationFrame);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isClientStateLoaded || !isManagementMode) return;
		window.localStorage.setItem(BLUR_STORAGE_KEY, String(cardBlur));
	}, [
		cardBlur,
		isClientStateLoaded,
		isManagementMode
	]);
	(0, import_react.useEffect)(() => {
		if (!isClientStateLoaded || !isManagementMode) return;
		window.localStorage.setItem(GLASS_MODE_STORAGE_KEY, glassMode);
	}, [
		glassMode,
		isClientStateLoaded,
		isManagementMode
	]);
	(0, import_react.useEffect)(() => {
		const shell = siteShellRef.current;
		const board = servicesBoardRef.current;
		if (!shell || !board) return;
		let animationFrame = 0;
		const cards = Array.from(board.querySelectorAll(".service-card"));
		const updateBlurWindows = () => {
			window.cancelAnimationFrame(animationFrame);
			animationFrame = window.requestAnimationFrame(() => {
				const shellRect = shell.getBoundingClientRect();
				const followsDocument = Boolean(activeBackground?.scrollWithPage);
				const next = cards.map((card) => {
					const rect = card.getBoundingClientRect();
					const radius = Number.parseFloat(window.getComputedStyle(card).borderTopLeftRadius);
					return {
						x: followsDocument ? rect.left - shellRect.left : rect.left,
						y: followsDocument ? rect.top - shellRect.top : rect.top,
						width: rect.width,
						height: rect.height,
						radius: Number.isFinite(radius) ? radius : 20
					};
				});
				setCardBlurWindows((current) => blurWindowsMatch(current, next) ? current : next);
			});
		};
		const resizeObserver = new ResizeObserver(updateBlurWindows);
		resizeObserver.observe(shell);
		resizeObserver.observe(board);
		cards.forEach((card) => resizeObserver.observe(card));
		window.addEventListener("resize", updateBlurWindows);
		window.addEventListener("scroll", updateBlurWindows, { passive: true });
		updateBlurWindows();
		return () => {
			window.cancelAnimationFrame(animationFrame);
			resizeObserver.disconnect();
			window.removeEventListener("resize", updateBlurWindows);
			window.removeEventListener("scroll", updateBlurWindows);
		};
	}, [
		activeBackground?.scrollWithPage,
		isEditMode,
		isReorderMode,
		serviceItems
	]);
	(0, import_react.useEffect)(() => {
		backgroundPreferencesRef.current = backgroundPreferences;
	}, [backgroundPreferences]);
	(0, import_react.useEffect)(() => {
		if (!isClientStateLoaded || !isManagementMode) return;
		let cancelled = false;
		const synchronizeInitialBackgroundPreferences = async () => {
			const remotePreferences = await loadRemoteBackgroundPreferences();
			if (cancelled) return;
			if (remotePreferences && !backgroundLocalChanged.current) {
				setBackgroundPreferences(remotePreferences);
				try {
					window.localStorage.setItem(BACKGROUND_STORAGE_KEY, JSON.stringify(remotePreferences));
				} catch {}
				return;
			}
			const currentPreferences = backgroundPreferencesRef.current;
			backgroundSyncQueue.current = backgroundSyncQueue.current.then(() => saveRemoteBackgroundPreferences(currentPreferences));
		};
		synchronizeInitialBackgroundPreferences();
		return () => {
			cancelled = true;
		};
	}, [isClientStateLoaded, isManagementMode]);
	const cycleGlassMode = () => {
		setGlassMode((current) => current === "normal" ? "liquid" : current === "liquid" ? "opaque" : "normal");
	};
	const updateService = (id, patch) => {
		setServiceItems((current) => current.map((service) => service.id === id ? {
			...service,
			...patch
		} : service));
		setEditorNotice("");
	};
	const updateCopy = (patch) => {
		setSiteCopy((current) => ({
			...current,
			...patch
		}));
		setEditorNotice("");
	};
	const persistBackgroundPreferences = (0, import_react.useCallback)((next) => {
		backgroundLocalChanged.current = true;
		setBackgroundPreferences(next);
		try {
			window.localStorage.setItem(BACKGROUND_STORAGE_KEY, JSON.stringify(next));
		} catch {}
		backgroundSyncQueue.current = backgroundSyncQueue.current.then(() => saveRemoteBackgroundPreferences(next));
	}, []);
	const selectBackground = (0, import_react.useCallback)((id) => {
		if (!themeBackgrounds.some((background) => background.id === id)) return;
		persistBackgroundPreferences({
			...backgroundPreferences,
			selected: {
				...backgroundPreferences.selected,
				[theme]: id
			}
		});
	}, [
		backgroundPreferences,
		persistBackgroundPreferences,
		theme,
		themeBackgrounds
	]);
	const cycleBackground = (0, import_react.useCallback)((direction) => {
		if (!themeBackgrounds.length) return;
		selectBackground(themeBackgrounds[((activeBackground ? themeBackgrounds.findIndex((background) => background.id === activeBackground.id) : 0) + direction + themeBackgrounds.length) % themeBackgrounds.length].id);
	}, [
		activeBackground,
		selectBackground,
		themeBackgrounds
	]);
	const toggleBackgroundVisibility = () => {
		if (!activeBackground) return;
		persistBackgroundPreferences({
			...backgroundPreferences,
			enabled: {
				...backgroundPreferences.enabled,
				[theme]: !isBackgroundEnabled
			}
		});
	};
	const hideBackground = (0, import_react.useCallback)((id) => {
		const hiddenIdsForTheme = [...new Set([...backgroundPreferences.hiddenIds[theme], id])];
		const hiddenIds = {
			...backgroundPreferences.hiddenIds,
			[theme]: hiddenIdsForTheme
		};
		const selected = { ...backgroundPreferences.selected };
		for (const mode of ["dark"]) {
			const available = getBackgroundsForTheme(mode, hiddenIds[mode]);
			if (!available.some((background) => background.id === selected[mode])) selected[mode] = available[0]?.id ?? "";
		}
		persistBackgroundPreferences({
			...backgroundPreferences,
			selected,
			hiddenIds
		});
	}, [
		backgroundPreferences,
		persistBackgroundPreferences,
		theme
	]);
	const restoreBackgrounds = () => {
		const selected = { ...backgroundPreferences.selected };
		const hiddenIds = {
			...backgroundPreferences.hiddenIds,
			[theme]: []
		};
		if (!getBackgroundsForTheme(theme, []).some((background) => background.id === selected[theme])) selected[theme] = defaultBackgroundPreferences.selected[theme];
		persistBackgroundPreferences({
			...backgroundPreferences,
			selected,
			hiddenIds
		});
	};
	const handleBackgroundButtonClick = () => {
		setIsBackgroundPanelOpen((current) => {
			const next = !current;
			setIsBackgroundKeyboardActive(next);
			return next;
		});
	};
	(0, import_react.useEffect)(() => {
		if (!isBackgroundPanelOpen || !isBackgroundKeyboardActive) return;
		const handleBackgroundKeyDown = (event) => {
			const target = event.target;
			if (target instanceof HTMLElement && target.closest("input, textarea, select, [contenteditable=\"true\"]")) return;
			if (event.key === "Escape") {
				setIsBackgroundKeyboardActive(false);
				setIsBackgroundPanelOpen(false);
				return;
			}
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				cycleBackground(-1);
				return;
			}
			if (event.key === "ArrowRight") {
				event.preventDefault();
				cycleBackground(1);
				return;
			}
			if ((event.key === "Delete" || event.key === "Backspace") && activeBackground) {
				event.preventDefault();
				hideBackground(activeBackground.id);
			}
		};
		window.addEventListener("keydown", handleBackgroundKeyDown);
		return () => {
			window.removeEventListener("keydown", handleBackgroundKeyDown);
		};
	}, [
		activeBackground,
		cycleBackground,
		hideBackground,
		isBackgroundPanelOpen,
		isBackgroundKeyboardActive
	]);
	const cardSurfaceOpacity = glassMode === "opaque" ? .72 : glassMode === "liquid" ? .14 : .16;
	const cardBlurPx = cardBlur / 100 * MAX_CARD_BLUR_PX;
	const cardBlurClipPath = cardBlurWindows.length ? `path("${cardBlurWindows.map(roundedRectPath).join(" ")}")` : "inset(0 100% 100% 0)";
	const backgroundStyle = {
		backgroundImage: activeBackground && isBackgroundEnabled ? `url("${activeBackground.src}")` : "linear-gradient(145deg, #080b18 0%, #10142b 55%, #180f28 100%)",
		backgroundPosition: activeBackground?.scrollWithPage ? "center top" : "center",
		backgroundSize: activeBackground?.scrollWithPage ? "100% auto" : "cover",
		backgroundRepeat: "no-repeat",
		backgroundColor: "#080b18"
	};
	const shellStyle = {
		"--service-card-blur": `${cardBlurPx}px`,
		"--service-card-opacity": String(cardSurfaceOpacity)
	};
	const blurredBackgroundStyle = {
		...backgroundStyle,
		clipPath: cardBlurClipPath,
		WebkitClipPath: cardBlurClipPath
	};
	const swapServices = (firstId, secondId) => {
		setServiceItems((current) => {
			const firstIndex = current.findIndex((service) => service.id === firstId);
			const secondIndex = current.findIndex((service) => service.id === secondId);
			if (firstIndex < 0 || secondIndex < 0 || firstIndex === secondIndex) return current;
			const next = [...current];
			[next[firstIndex], next[secondIndex]] = [next[secondIndex], next[firstIndex]];
			return next;
		});
	};
	const selectForSwap = (id) => {
		if (!isReorderMode) return;
		if (!selectedSwapId) {
			setSelectedSwapId(id);
			setEditorNotice(siteCopy.selectedNotice);
			return;
		}
		if (selectedSwapId === id) {
			setSelectedSwapId(null);
			setEditorNotice("");
			return;
		}
		swapServices(selectedSwapId, id);
		setSelectedSwapId(null);
		setEditorNotice(siteCopy.swappedNotice);
	};
	const handleDrop = (id) => {
		if (draggingId && draggingId !== id) {
			swapServices(draggingId, id);
			setEditorNotice(siteCopy.swappedNotice);
		}
		setDraggingId(null);
	};
	(0, import_react.useEffect)(() => {
		if (!isClientStateLoaded || !isManagementMode) return;
		try {
			window.localStorage.setItem(SERVICE_STORAGE_KEY, JSON.stringify(serializeServices(serviceItems)));
			window.localStorage.setItem(COPY_STORAGE_KEY, JSON.stringify(siteCopy));
		} catch {}
	}, [
		serviceItems,
		siteCopy,
		isClientStateLoaded,
		isManagementMode
	]);
	const handleSave = () => {
		window.localStorage.setItem(SERVICE_STORAGE_KEY, JSON.stringify(serializeServices(serviceItems)));
		setSavedServices(serviceItems);
		window.localStorage.setItem(COPY_STORAGE_KEY, JSON.stringify(siteCopy));
		setSavedCopy(siteCopy);
		setIsEditMode(false);
		setIsReorderMode(false);
		setSelectedSwapId(null);
		setEditorNotice("Bozza salvata in questo browser.");
		setManagementNotice("Bozza locale salvata · la configurazione del progetto non è ancora cambiata.");
	};
	const handleCancel = () => {
		setServiceItems(savedServices);
		setSiteCopy(savedCopy);
		setIsEditMode(false);
		setIsReorderMode(false);
		setSelectedSwapId(null);
		setEditorNotice(savedCopy.cancelledNotice);
	};
	const handleRestore = () => {
		setServiceItems(approvedServices);
		setSiteCopy(approvedSiteCopy);
		setSelectedSwapId(null);
		setEditorNotice(approvedSiteCopy.restoredNotice);
	};
	const toggleEditMode = () => {
		setEditorNotice("");
		setIsEditMode((current) => {
			const next = !current;
			if (next) {
				setIsReorderMode(false);
				setSelectedSwapId(null);
			}
			return next;
		});
	};
	const toggleReorderMode = () => {
		setEditorNotice("");
		setIsReorderMode((current) => {
			const next = !current;
			if (next) setIsEditMode(false);
			setSelectedSwapId(null);
			return next;
		});
	};
	const currentPublishedConfig = () => createPublishedConfig(serviceItems, siteCopy, contactChannels, cardBlur, glassMode, backgroundPreferences);
	const handleExport = async () => {
		const serialized = `${JSON.stringify(currentPublishedConfig(), null, 2)}\n`;
		let exportNotice = "Download JSON richiesto al browser; verifica il file scaricato.";
		try {
			const response = await fetch("./api/export-config", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: serialized
			});
			const result = await response.json();
			if (response.ok && result.exported && typeof result.path === "string") exportNotice = `Copia JSON salvata nel progetto: ${result.path}. Download richiesto anche al browser.`;
			else exportNotice += " Copia locale non salvata: controlla il server di gestione.";
		} catch {
			exportNotice += " Copia locale non salvata: controlla il server di gestione.";
		}
		const blob = new Blob([serialized], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "Liquid-Galaxy-personalizzazioni.json";
		document.body.append(link);
		link.click();
		link.remove();
		window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
		setManagementNotice(exportNotice);
	};
	const handleImport = async (event) => {
		const file = event.target.files?.[0];
		event.target.value = "";
		if (!file) return;
		try {
			window.localStorage.setItem(IMPORT_BACKUP_STORAGE_KEY, JSON.stringify(currentPublishedConfig()));
			const imported = parseImportedConfig(await file.text());
			setServiceItems(imported.services);
			setSiteCopy(imported.copy);
			setContactChannels(imported.contactChannels);
			setBackgroundPreferences(imported.backgrounds);
			setCardBlur(imported.cardBlur);
			setGlassMode(imported.glassMode);
			setSelectedSwapId(null);
			setManagementNotice("Importazione caricata come bozza. Controllala prima di salvarla nel progetto.");
		} catch (error) {
			setManagementNotice(error instanceof Error ? error.message : "Importazione non riuscita: la configurazione attuale è intatta.");
		}
	};
	const handleRestorePreImport = () => {
		const backup = window.localStorage.getItem(IMPORT_BACKUP_STORAGE_KEY);
		if (!backup) {
			setManagementNotice("Nessuna copia pre-importazione disponibile.");
			return;
		}
		try {
			const restored = parseImportedConfig(backup);
			setServiceItems(restored.services);
			setSiteCopy(restored.copy);
			setContactChannels(restored.contactChannels);
			setBackgroundPreferences(restored.backgrounds);
			setCardBlur(restored.cardBlur);
			setGlassMode(restored.glassMode);
			setManagementNotice("Copia precedente all’importazione ripristinata come bozza.");
		} catch {
			setManagementNotice("La copia pre-importazione non è valida.");
		}
	};
	const handleSaveProject = async () => {
		setIsSavingProject(true);
		setManagementNotice("Salvataggio della configurazione nel progetto…");
		try {
			const response = await fetch("./api/site-config", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(currentPublishedConfig())
			});
			if (!response.ok) throw new Error(`Salvataggio non riuscito (${response.status}).`);
			setSavedServices(serviceItems);
			setSavedCopy(siteCopy);
			setManagementNotice("Configurazione salvata nel progetto. Per renderla pubblica esegui il deploy completo.");
		} catch (error) {
			setManagementNotice(error instanceof Error ? error.message : "Salvataggio nel progetto non riuscito.");
		} finally {
			setIsSavingProject(false);
		}
	};
	const handlePublishProject = async () => {
		if (!window.confirm("Salvare e pubblicare le modifiche su GitHub Pages, GitLab e Pinata?")) return;
		setIsPublishingProject(true);
		setManagementNotice("Salvataggio e pubblicazione completa in corso…");
		try {
			const saveResponse = await fetch("./api/site-config", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(currentPublishedConfig())
			});
			if (!saveResponse.ok) throw new Error(`Salvataggio non riuscito (${saveResponse.status}).`);
			const publishResponse = await fetch("./api/publish-site", { method: "POST" });
			const result = await publishResponse.json();
			if (!publishResponse.ok || !result.published) throw new Error(result.error || `Pubblicazione non riuscita (${publishResponse.status}).`);
			setSavedServices(serviceItems);
			setSavedCopy(siteCopy);
			setManagementNotice("Modifiche salvate e pubblicate su GitHub Pages, GitLab e Pinata.");
		} catch (error) {
			setManagementNotice(error instanceof Error ? error.message : "Pubblicazione non riuscita.");
		} finally {
			setIsPublishingProject(false);
		}
	};
	const updateContactChannel = (id, url) => {
		setContactChannels((current) => current.map((channel) => channel.id === id ? {
			...channel,
			url
		} : channel));
	};
	const SelectedIcon = selectedService?.icon;
	const selectedContactLinks = selectedService ? contactChannels.flatMap((channel) => {
		const href = buildContactHref(channel.url, selectedService);
		return href ? [{
			...channel,
			href
		}] : [];
	}) : [];
	const renderServiceCard = (service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
		service,
		copy: siteCopy,
		onMore: (item, trigger) => {
			lastDetailTriggerRef.current = trigger;
			setSelectedServiceId(item.id);
		},
		slot: `service-slot-${index + 1}`,
		isEditMode,
		isReorderMode,
		isSelectedForSwap: selectedSwapId === service.id,
		onChange: updateService,
		onCopyChange: updateCopy,
		onSwapSelect: selectForSwap,
		onDragStart: setDraggingId,
		onDragOver: (event) => {
			if (isReorderMode) event.preventDefault();
		},
		onDrop: handleDrop,
		onDragEnd: () => setDraggingId(null)
	}, service.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		ref: siteShellRef,
		className: `site-shell glass-${glassMode}${isEditMode ? " edit-mode" : ""}${isReorderMode ? " reorder-mode" : ""}`,
		style: shellStyle,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `site-background${activeBackground?.scrollWithPage ? " is-scrolling" : ""}`,
				style: backgroundStyle,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `site-background site-background-blurred${activeBackground?.scrollWithPage ? " is-scrolling" : ""}`,
				style: blurredBackgroundStyle,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-frame",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "site-header",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "brand-lockup",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "brand-mark",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "brand-name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
									value: siteCopy.brandName,
									onChange: (value) => updateCopy({ brandName: value }),
									editing: isEditMode,
									ariaLabel: "Nome del brand"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "brand-caption",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
									value: siteCopy.brandCaption,
									onChange: (value) => updateCopy({ brandCaption: value }),
									editing: isEditMode,
									ariaLabel: "Sottotitolo del brand"
								})
							})] })]
						}), isManagementMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "header-actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: `editor-mode-button${isEditMode ? " is-active" : ""}`,
									onClick: toggleEditMode,
									"aria-pressed": isEditMode,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
										size: 15,
										strokeWidth: 1.7,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
										value: siteCopy.editButtonLabel,
										onChange: (value) => updateCopy({ editButtonLabel: value }),
										editing: isEditMode,
										ariaLabel: "Etichetta pulsante modifica testo"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: `editor-mode-button${isReorderMode ? " is-active" : ""}`,
									onClick: toggleReorderMode,
									"aria-pressed": isReorderMode,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Move, {
										size: 15,
										strokeWidth: 1.7,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
										value: siteCopy.reorderButtonLabel,
										onChange: (value) => updateCopy({ reorderButtonLabel: value }),
										editing: isEditMode,
										ariaLabel: "Etichetta pulsante sposta tessere"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: `editor-mode-button${isBackgroundPanelOpen || isBackgroundKeyboardActive ? " is-active" : ""}`,
									onClick: handleBackgroundButtonClick,
									"aria-pressed": isBackgroundKeyboardActive,
									title: isBackgroundKeyboardActive ? "Scorciatoie sfondi attive · premi Esc per disattivarle" : "Clicca per attivare le scorciatoie degli sfondi",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
										size: 15,
										strokeWidth: 1.7,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
										value: siteCopy.backgroundButtonLabel,
										onChange: (value) => updateCopy({ backgroundButtonLabel: value }),
										editing: isEditMode,
										ariaLabel: "Etichetta pulsante sfondi"
									})]
								})
							]
						}) : null]
					}),
					isManagementMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "management-bar",
						"aria-label": "Gestione locale del sito",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "management-bar-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									role: "status",
									"aria-live": "polite",
									children: managementNotice
								}),
								contactChannels.map((channel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [channel.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									inputMode: "url",
									value: channel.url,
									onChange: (event) => updateContactChannel(channel.id, event.currentTarget.value),
									placeholder: channel.id === "email" ? "mailto:nome@esempio.it" : "https://…",
									spellCheck: false
								})] }, channel.id)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Etichetta contatto", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: siteCopy.contactButtonLabel,
									onChange: (event) => updateCopy({ contactButtonLabel: event.currentTarget.value })
								})] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "management-bar-actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleExport,
									children: "Esporta JSON"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => importInputRef.current?.click(),
									children: "Importa JSON"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleRestorePreImport,
									children: "Recupera pre-import"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: importInputRef,
									className: "visually-hidden",
									type: "file",
									accept: "application/json,.json",
									onChange: handleImport,
									tabIndex: -1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "save-project-button",
									onClick: handleSaveProject,
									disabled: isSavingProject || isPublishingProject,
									children: isSavingProject ? "Salvataggio…" : "Salva nel progetto"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "save-project-button",
									onClick: handlePublishProject,
									disabled: isSavingProject || isPublishingProject,
									children: isPublishingProject ? "Pubblicazione…" : "Salva modifiche"
								})
							]
						})]
					}) : null,
					isManagementMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "blur-control",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "card-blur-slider",
								children: "Sfocatura tessere"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								id: "card-blur-slider",
								orientation: "vertical",
								min: 0,
								max: 100,
								step: 1,
								value: [cardBlur],
								onValueChange: (value) => setCardBlur(value[0] ?? 0),
								"aria-label": "Sfocatura delle tessere"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("output", {
								htmlFor: "card-blur-slider",
								children: [cardBlur, "px"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "glass-mode-button",
								onClick: cycleGlassMode,
								"aria-label": `Cambia stile delle tessere. Attuale: ${glassModeLabels[glassMode]}`,
								children: glassModeLabels[glassMode]
							})
						]
					}) : null,
					isManagementMode && isBackgroundPanelOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundPicker, {
						backgrounds: themeBackgrounds,
						activeBackground,
						isEnabled: isBackgroundEnabled,
						hasHiddenBackgrounds,
						copy: siteCopy,
						onSelect: selectBackground,
						onCycle: cycleBackground,
						onToggleVisibility: toggleBackgroundVisibility,
						onHide: hideBackground,
						onRestore: restoreBackgrounds,
						onActivateKeyboard: () => setIsBackgroundKeyboardActive(true),
						isEditMode,
						onCopyChange: updateCopy
					}) : null,
					isManagementMode && (editorActive || hasChanges) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `editor-panel${isEditMode ? " copy-editing" : ""}`,
						role: "status",
						"aria-live": "polite",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: isEditMode ? siteCopy.editHint : isReorderMode ? selectedSwapId ? siteCopy.swapHint : siteCopy.reorderHint : editorNotice }),
							null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "editor-panel-actions",
								children: [editorActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "restore-button",
									onClick: handleRestore,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
										size: 14,
										strokeWidth: 1.8,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: siteCopy.restoreLabel })]
								}) : null, hasChanges ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "cancel-button",
									onClick: handleCancel,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
										size: 14,
										strokeWidth: 1.8,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: siteCopy.cancelLabel })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "save-button",
									onClick: handleSave,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 14,
										strokeWidth: 1.9,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: siteCopy.saveLabel })]
								})] }) : null]
							})
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "intro",
						"aria-labelledby": "page-title",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
									value: siteCopy.eyebrow,
									onChange: (value) => updateCopy({ eyebrow: value }),
									editing: isEditMode,
									ariaLabel: "Testo sopra il titolo"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								id: "page-title",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
									value: siteCopy.headingPrimary,
									onChange: (value) => updateCopy({ headingPrimary: value }),
									editing: isEditMode,
									ariaLabel: "Prima riga del titolo",
									multiline: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [" ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
									value: siteCopy.headingSecondary,
									onChange: (value) => updateCopy({ headingSecondary: value }),
									editing: isEditMode,
									ariaLabel: "Seconda riga del titolo",
									multiline: true
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "intro-copy",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
									value: siteCopy.introCopy,
									onChange: (value) => updateCopy({ introCopy: value }),
									editing: isEditMode,
									ariaLabel: "Testo introduttivo",
									multiline: true
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						ref: servicesBoardRef,
						className: "services-board",
						"aria-label": "Servizi di intelligenza artificiale",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "services-column",
							children: serviceItems.slice(0, 4).map(renderServiceCard)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "services-column",
							children: serviceItems.slice(4).map((service, index) => renderServiceCard(service, index + 4))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "board-note",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
							value: siteCopy.boardNote,
							onChange: (value) => updateCopy({ boardNote: value }),
							editing: isEditMode,
							ariaLabel: "Nota sotto le tessere"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomepageExtensions, { management: isManagementMode })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: Boolean(selectedService),
				onOpenChange: (open) => {
					if (!open) {
						setSelectedServiceId(null);
						window.requestAnimationFrame(() => lastDetailTriggerRef.current?.focus());
					}
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "detail-dialog",
					children: selectedService ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `dialog-icon accent-${selectedService.accent}`,
								children: SelectedIcon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedIcon, {
									size: 20,
									strokeWidth: 1.7,
									"aria-hidden": "true"
								}) : null
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
								value: selectedService.title,
								onChange: (value) => updateService(selectedService.id, { title: value }),
								editing: isEditMode,
								ariaLabel: "Nome della tessera",
								multiline: true
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
								value: selectedService.detailIntro,
								onChange: (value) => updateService(selectedService.id, { detailIntro: value }),
								editing: isEditMode,
								ariaLabel: "Testo introduttivo",
								multiline: true
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "dialog-price",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
									value: selectedService.price,
									onChange: (value) => updateService(selectedService.id, { price: value }),
									editing: isEditMode,
									ariaLabel: "Prezzo della tessera",
									multiline: true
								})
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "detail-scroll",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "detail-list",
								children: selectedService.bullets.map((bullet, bulletIndex) => ({
									bullet,
									bulletIndex
								})).filter(({ bullet }) => isEditMode || bullet.trim().length > 0).map(({ bullet, bulletIndex }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										size: 13,
										strokeWidth: 1.8
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
									value: bullet,
									onChange: (value) => updateService(selectedService.id, { bullets: selectedService.bullets.map((item, index) => index === bulletIndex ? value : item) }),
									editing: isEditMode,
									ariaLabel: `Voce ${bulletIndex + 1}`,
									multiline: true
								})] }, `${selectedService.id}-${bulletIndex}`))
							}), selectedService.closing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "detail-closing",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineText, {
									value: selectedService.closing,
									onChange: (value) => updateService(selectedService.id, { closing: value }),
									editing: isEditMode,
									ariaLabel: "Nota finale",
									multiline: true
								})
							}) : null]
						}),
						selectedContactLinks.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "detail-contact-group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: siteCopy.contactButtonLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: selectedContactLinks.map((channel) => {
								const ContactIcon = channel.id === "email" ? Mail : channel.id === "telegram" ? Send : MessageCircle;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "detail-contact",
									href: channel.href,
									target: channel.href.startsWith("https:") ? "_blank" : void 0,
									rel: channel.href.startsWith("https:") ? "noreferrer" : void 0,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactIcon, {
											size: 16,
											strokeWidth: 1.8,
											"aria-hidden": "true"
										}),
										channel.label,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											size: 14,
											strokeWidth: 1.8,
											"aria-hidden": "true"
										})
									]
								}, channel.id);
							}) })]
						}) : null
					] }) : null
				})
			})
		]
	});
}
function Site() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoutedSite, { home: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {}) });
}
//#endregion
export { Site as default, defaultBackgroundPreferences, defaultSiteCopy, services };
