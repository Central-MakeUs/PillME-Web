import { globalStyle } from "@vanilla-extract/css";

globalStyle(
  "*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))",
  {
    all: "unset",
    display: "revert",
  },
);

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("*::before", {
  boxSizing: "border-box",
});

globalStyle("*::after", {
  boxSizing: "border-box",
});

globalStyle("a", {
  cursor: "revert",
});

globalStyle("button", {
  cursor: "revert",
});

globalStyle("ol", {
  listStyle: "none",
});

globalStyle("ul", {
  listStyle: "none",
});

globalStyle("menu", {
  listStyle: "none",
});

globalStyle("img", {
  maxInlineSize: "100%",
  maxBlockSize: "100%",
});

globalStyle("table", {
  borderCollapse: "collapse",
});

globalStyle("input", {
  WebkitUserSelect: "auto",
  all: "revert",
});

globalStyle("textarea", {
  WebkitUserSelect: "auto",
  whiteSpace: "revert",
  all: "revert",
});

globalStyle("select", {
  all: "revert",
});

globalStyle('input[type="checkbox"]', {
  all: "revert",
});

globalStyle('input[type="radio"]', {
  all: "revert",
});

globalStyle("meter", {
  WebkitAppearance: "revert",
  appearance: "revert",
});

globalStyle(":where(pre)", {
  all: "revert",
});

globalStyle("::placeholder", {
  color: "unset",
});

globalStyle("::marker", {
  content: "initial",
});

globalStyle(":where([hidden])", {
  display: "none",
});

globalStyle(':where([contenteditable]:not([contenteditable="false"]))', {
  MozUserModify: "read-write",
  WebkitUserModify: "read-write",
  overflowWrap: "break-word",
  WebkitUserSelect: "auto",
});

globalStyle(':where([draggable="true"])', {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  WebkitUserDrag: "element",
});

globalStyle(":where(dialog:modal)", {
  all: "revert",
});
