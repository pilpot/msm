import { c as create_ssr_component, b as compute_rest_props, i as createEventDispatcher, e as escape, o as null_to_empty, d as spread, f as escape_attribute_value, h as escape_object, p as add_attribute, j as setContext, g as getContext, s as subscribe, q as each, v as validate_component } from "../../../../chunks/ssr.js";
import "devalue";
import { L as Label } from "../../../../chunks/label.js";
import { c as classes, B as Button } from "../../../../chunks/button.js";
import { w as writable } from "../../../../chunks/index2.js";
import { S as Slider } from "../../../../chunks/slider.js";
const css$6 = {
  code: `.text-field.svelte-fxvd28 input[type=search].svelte-fxvd28.svelte-fxvd28::-webkit-search-cancel-button{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");background-size:contain;border:0.1875em solid transparent;border-radius:50%;cursor:pointer;height:1.25em;position:relative;top:1px;width:1.25em}.text-field.svelte-fxvd28 input[type=search].svelte-fxvd28.svelte-fxvd28::-webkit-search-cancel-button:hover{background-color:rgba(51, 51, 51, 0.1)}.text-field.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28,.text-field.svelte-fxvd28 textarea.svelte-fxvd28.svelte-fxvd28{background-color:#f5f5f5;border:0 solid rgba(0, 0, 0, 0.42);border-bottom-width:0.0625em;border-top-left-radius:0.375em;border-top-right-radius:0.375em;box-sizing:border-box;padding:0 0.625em 0.0625em;width:100%;font-family:"Ubuntu", sans-serif;font-size:1rem;font-weight:300;height:2.8em;outline:none}.text-field.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28:hover,.text-field.svelte-fxvd28 textarea.svelte-fxvd28.svelte-fxvd28:hover{background-color:#eeeeee}.text-field.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28:focus,.text-field.svelte-fxvd28 textarea.svelte-fxvd28.svelte-fxvd28:focus{background-color:#e1e1e1;border-bottom-width:0.125em;border-color:#4800bd;padding-bottom:0}.text-field.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28:disabled,.text-field.svelte-fxvd28 textarea.svelte-fxvd28.svelte-fxvd28:disabled{background-color:#f7f7f7;border-color:rgba(51, 51, 51, 0.3);color:#888}.text-field.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28:disabled:hover,.text-field.svelte-fxvd28 textarea.svelte-fxvd28.svelte-fxvd28:disabled:hover{background-color:#f7f7f7}.text-field.svelte-fxvd28 textarea.svelte-fxvd28.svelte-fxvd28{height:6em;padding:0.75em 0.625em 0.0625em}.text-field.with-item.svelte-fxvd28.svelte-fxvd28.svelte-fxvd28{position:relative}.text-field.with-item.left.svelte-fxvd28.svelte-fxvd28.svelte-fxvd28{flex-direction:row-reverse}.text-field.with-item.left.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28,.text-field.with-item.left.svelte-fxvd28 textarea.svelte-fxvd28.svelte-fxvd28{padding-left:3rem}.text-field.with-item.left.svelte-fxvd28 input[type=search].svelte-fxvd28.svelte-fxvd28{padding-left:2.2em}.text-field.with-item.left.svelte-fxvd28>.item{font-weight:500;left:0.625em}.text-field.with-item.right.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28,.text-field.with-item.right.svelte-fxvd28 textarea.svelte-fxvd28.svelte-fxvd28{padding-right:1.875em;text-align:right}.text-field.with-item.right.svelte-fxvd28>.item{right:0.625em}.text-field.with-item.svelte-fxvd28>.item{color:#7a7a7a;height:1.1em;position:absolute;top:0.85em}.text-field.with-item.svelte-fxvd28>input.svelte-fxvd28:focus+.item{color:#4300b0;stroke:#4300b0}.text-field.with-item.svelte-fxvd28>input.svelte-fxvd28:focus+.item svg{stroke:#4300b0}.text-field.with-item.right-align.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28{text-align:right}.text-field.with-item.svelte-fxvd28 input[type=number].svelte-fxvd28.svelte-fxvd28{appearance:textfield}.text-field.with-item.svelte-fxvd28 input[type=number].svelte-fxvd28.svelte-fxvd28::-webkit-outer-spin-button,.text-field.with-item.svelte-fxvd28 input[type=number].svelte-fxvd28.svelte-fxvd28::-webkit-inner-spin-button{appearance:none;margin:0}.text-field.with-item.svelte-fxvd28>svg.item{height:1em;top:0.9em}.text-field.with-item.svelte-fxvd28 input.svelte-fxvd28:invalid+svg.item{stroke:#b80000}.text-field.outline.svelte-fxvd28.svelte-fxvd28.svelte-fxvd28{margin-top:0.65em;position:relative}.text-field.outline.svelte-fxvd28 label.svelte-fxvd28.svelte-fxvd28{background-color:#fff;border-radius:0.3125em;color:rgba(0, 0, 0, 0.42);font-family:"Ubuntu", sans-serif;left:1.4em;padding:0 0.25em;position:absolute;top:0;transform:translate(-0.25em, -55%)}.text-field.outline.with-item.left.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28{padding-left:2.2em}.text-field.outline.with-item.left.svelte-fxvd28 label.svelte-fxvd28.svelte-fxvd28{left:2.2em}.text-field.outline.with-item.left.svelte-fxvd28 svg{stroke:#888}.text-field.outline.with-item.left.svelte-fxvd28>input.svelte-fxvd28:focus~.item{color:#4300b0}.text-field.outline.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28{background-color:transparent;border:1px solid rgba(0, 0, 0, 0.42);border-radius:1.5625em;padding:0 1.4em}.text-field.outline.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28:hover{border-color:rgba(0, 0, 0, 0.7)}.text-field.outline.svelte-fxvd28 input.svelte-fxvd28:hover+label.svelte-fxvd28{color:rgba(0, 0, 0, 0.7)}.text-field.outline.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28:focus{border-color:#4300b0}.text-field.outline.svelte-fxvd28 input.svelte-fxvd28:focus+label.svelte-fxvd28{color:#4300b0}.text-field.outline.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28:invalid{border-color:rgba(184, 0, 0, 0.7)}.text-field.outline.svelte-fxvd28 input.svelte-fxvd28:invalid+label.svelte-fxvd28{color:rgba(184, 0, 0, 0.7)}.text-field.outline.svelte-fxvd28 input.svelte-fxvd28:invalid~svg.item{stroke:rgba(184, 0, 0, 0.7)}.text-field.outline.svelte-fxvd28 input.svelte-fxvd28:invalid:focus~svg.item{stroke:rgba(184, 0, 0, 0.7)}.text-field.outline.svelte-fxvd28 input.svelte-fxvd28:focus~svg.item{stroke:#4300b0}.text-field.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28:invalid{background:#fbeeee;border-bottom-color:#b80000;box-shadow:none}.text-field.svelte-fxvd28 input.svelte-fxvd28.svelte-fxvd28:not(.outline):invalid{background-color:#fbeeee}.text-field.svelte-fxvd28 .svelte-fxvd28.svelte-fxvd28:-moz-ui-invalid{box-shadow:none}.text-field.svelte-fxvd28>.error.svelte-fxvd28.svelte-fxvd28{color:rgba(184, 0, 0, 0.7);font-size:0.8rem;font-weight:500}.text-field.no-spinner.svelte-fxvd28>input[type=number].svelte-fxvd28.svelte-fxvd28{appearance:textfield}.text-field.no-spinner.svelte-fxvd28>input[type=number].svelte-fxvd28.svelte-fxvd28::-webkit-inner-spin-button,.text-field.no-spinner.svelte-fxvd28>input[type=number].svelte-fxvd28.svelte-fxvd28::-webkit-outer-spin-button{appearance:none;margin:0}`,
  map: null
};
function toString(value) {
  if (value == null) {
    return "";
  }
  return value.toString();
}
const Text_field = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "class",
    "inputClass",
    "labelClass",
    "errorClass",
    "outline",
    "withItem",
    "itemRight",
    "id",
    "noSpinner",
    "label",
    "error",
    "multiline",
    "autofocus",
    "value",
    "events"
  ]);
  let { class: _class = null } = $$props;
  let { inputClass = null } = $$props;
  let { labelClass = null } = $$props;
  let { errorClass = null } = $$props;
  let { outline = false } = $$props;
  let { withItem = false } = $$props;
  let { itemRight = false } = $$props;
  let { id = null } = $$props;
  let { noSpinner = false } = $$props;
  let { label = null } = $$props;
  let { error = null } = $$props;
  let { multiline = false } = $$props;
  let { autofocus = false } = $$props;
  if (!outline && label != null) {
    console.error("Labels are only available for outlined text fields");
  }
  let { value = null } = $$props;
  let { events = [] } = $$props;
  let inputElement;
  createEventDispatcher();
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  if ($$props.labelClass === void 0 && $$bindings.labelClass && labelClass !== void 0)
    $$bindings.labelClass(labelClass);
  if ($$props.errorClass === void 0 && $$bindings.errorClass && errorClass !== void 0)
    $$bindings.errorClass(errorClass);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.withItem === void 0 && $$bindings.withItem && withItem !== void 0)
    $$bindings.withItem(withItem);
  if ($$props.itemRight === void 0 && $$bindings.itemRight && itemRight !== void 0)
    $$bindings.itemRight(itemRight);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.noSpinner === void 0 && $$bindings.noSpinner && noSpinner !== void 0)
    $$bindings.noSpinner(noSpinner);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.multiline === void 0 && $$bindings.multiline && multiline !== void 0)
    $$bindings.multiline(multiline);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  $$result.css.add(css$6);
  return `<div class="${[
    escape(null_to_empty(classes("text-field", _class)), true) + " svelte-fxvd28",
    (outline ? "outline" : "") + " " + (withItem ? "with-item" : "") + " " + (withItem && !itemRight ? "left" : "") + " " + (withItem && itemRight ? "right" : "") + " " + (noSpinner ? "no-spinner" : "")
  ].join(" ").trim()}">${multiline ? `<textarea${spread(
    [
      { id: escape_attribute_value(id) },
      {
        class: escape_attribute_value(classes(inputClass))
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-fxvd28" }
  )}${add_attribute("this", inputElement, 0)}>${escape(value, false)}</textarea>` : `<input${spread(
    [
      { id: escape_attribute_value(id) },
      {
        value: escape_attribute_value(toString(value))
      },
      {
        class: escape_attribute_value(classes(inputClass))
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-fxvd28" }
  )}${add_attribute("this", inputElement, 0)}> ${outline && label != null ? `<label${add_attribute("for", id, 0)} class="${escape(null_to_empty(classes(labelClass)), true) + " svelte-fxvd28"}">${escape(label)}</label>` : ``} ${withItem ? `${slots.default ? slots.default({}) : ``}` : ``} ${error ? `<span class="${escape(null_to_empty(classes("error", errorClass)), true) + " svelte-fxvd28"}">${slots.error ? slots.error({}) : `${escape(error)}`}</span>` : ``}`} </div>`;
});
const TextField = Text_field;
const getDropdownShellBoundaryKey = {};
const isDropdownOpenKey = {};
const css$5 = {
  code: ".dropdown-shell.svelte-1j957tq{position:relative}.dropdown-shell.svelte-1j957tq:not(.open)>.dropdown{display:none}.dropdown-shell.svelte-1j957tq .dropdown-chevron{margin-bottom:-0.125em;transition:transform 150ms}.dropdown-shell.open.svelte-1j957tq .dropdown-chevron{transform:scaleY(-1)}",
  map: null
};
const Dropdown_shell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: _class = null } = $$props;
  let { open = false } = $$props;
  function toggle() {
    open = !open;
  }
  let self = null;
  function handleKeyPress(evt) {
    if (evt.key === "Escape" && open) {
      evt.preventDefault();
      toggle();
    }
  }
  const dispatch = createEventDispatcher();
  const isDropdownOpen = writable(open);
  const getDropdownShellBoundary = () => self;
  setContext(getDropdownShellBoundaryKey, getDropdownShellBoundary);
  setContext(isDropdownOpenKey, isDropdownOpen);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  $$result.css.add(css$5);
  {
    dispatch("change", { value: open });
  }
  typeof document !== "undefined" && (open ? document.addEventListener("keydown", handleKeyPress) : document.removeEventListener("keydown", handleKeyPress));
  {
    isDropdownOpen.set(open);
  }
  return ` <div class="${[
    escape(null_to_empty(classes("dropdown-shell", _class)), true) + " svelte-1j957tq",
    open ? "open" : ""
  ].join(" ").trim()}"${add_attribute("this", self, 0)}>${slots.default ? slots.default({ toggle }) : ``} </div>`;
});
const DropdownShell = Dropdown_shell;
const HorizontalAlignment = {
  AUTO_START: "auto-start",
  AUTO_END: "auto-end",
  START: "start",
  END: "end"
};
const VerticalAlignment = {
  AUTO_BOTTOM: "auto-bottom",
  AUTO_TOP: "auto-top",
  BOTTOM: "bottom",
  TOP: "top"
};
Object.freeze(HorizontalAlignment);
Object.freeze(VerticalAlignment);
const css$4 = {
  code: ".dropdown.svelte-1fhqrqw{background:#fff;border-radius:1.25em;box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);margin-top:0.3125em;position:absolute;z-index:900}.dropdown.top.svelte-1fhqrqw{margin-top:-0.3125em;top:0;transform:translateY(-100%)}.dropdown.svelte-1fhqrqw:not(.right){left:0}.dropdown.right.svelte-1fhqrqw{right:0}",
  map: null
};
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDropdownOpen, $$unsubscribe_isDropdownOpen;
  let { class: _class = null } = $$props;
  let { right = false } = $$props;
  let { top = false } = $$props;
  let { horizontalAlignment = HorizontalAlignment.AUTO_START } = $$props;
  let { verticalAlignment = VerticalAlignment.AUTO_BOTTOM } = $$props;
  const isDropdownOpen = getContext(isDropdownOpenKey);
  $$unsubscribe_isDropdownOpen = subscribe(isDropdownOpen, (value) => $isDropdownOpen = value);
  const getDropdownShellBoundary = getContext(getDropdownShellBoundaryKey);
  let dropdownElement, isVerticalAlignTop, isHorizontalAlignEnd;
  function getIsVerticalAlignTop(dropdownBound, dropdownShellBound) {
    const { height } = dropdownBound;
    const { top: top2, bottom } = dropdownShellBound;
    switch (verticalAlignment) {
      case VerticalAlignment.TOP:
        return true;
      case VerticalAlignment.BOTTOM:
        return false;
      case VerticalAlignment.AUTO_TOP:
        return height <= top2;
      default:
        return height > window.innerHeight - bottom;
    }
  }
  function getIsHorizontalAlignEnd(dropdownBound, dropdownShellBound) {
    const { width } = dropdownBound;
    const { left, right: right2 } = dropdownShellBound;
    switch (horizontalAlignment) {
      case HorizontalAlignment.END:
        return true;
      case HorizontalAlignment.START:
        return false;
      case HorizontalAlignment.AUTO_END:
        return width <= right2;
      default:
        return width > window.innerWidth - left;
    }
  }
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.horizontalAlignment === void 0 && $$bindings.horizontalAlignment && horizontalAlignment !== void 0)
    $$bindings.horizontalAlignment(horizontalAlignment);
  if ($$props.verticalAlignment === void 0 && $$bindings.verticalAlignment && verticalAlignment !== void 0)
    $$bindings.verticalAlignment(verticalAlignment);
  $$result.css.add(css$4);
  {
    {
      if ($isDropdownOpen) {
        const dropdownBound = dropdownElement.getBoundingClientRect();
        const dropdownShellBound = getDropdownShellBoundary();
        isVerticalAlignTop = top || getIsVerticalAlignTop(dropdownBound, dropdownShellBound);
        isHorizontalAlignEnd = right || getIsHorizontalAlignEnd(dropdownBound, dropdownShellBound);
      }
    }
  }
  $$unsubscribe_isDropdownOpen();
  return `<div class="${[
    escape(null_to_empty(classes("dropdown", _class)), true) + " svelte-1fhqrqw",
    (isHorizontalAlignEnd ? "right" : "") + " " + (isVerticalAlignTop ? "top" : "")
  ].join(" ").trim()}"${add_attribute("this", dropdownElement, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
const Dropdown$1 = Dropdown;
const css$3 = {
  code: "table.svelte-81z2q2.svelte-81z2q2.svelte-81z2q2{border-collapse:separate;border-spacing:0;display:block;margin-bottom:1em;overflow-x:auto}table.svelte-81z2q2 th.svelte-81z2q2.svelte-81z2q2{padding:0.5em 1em;text-align:start}table.svelte-81z2q2 th.center.svelte-81z2q2.svelte-81z2q2{text-align:center}table.svelte-81z2q2 th.end.svelte-81z2q2.svelte-81z2q2{text-align:end}table.svelte-81z2q2 tr.alternating.svelte-81z2q2.svelte-81z2q2:nth-child(even){background:rgba(67, 0, 176, 0.03)}table.svelte-81z2q2 tr.svelte-81z2q2:first-child>td.svelte-81z2q2:first-child{border-top-left-radius:0.5em}table.svelte-81z2q2 tr.svelte-81z2q2:first-child>td.svelte-81z2q2:last-child{border-top-right-radius:0.5em}table.svelte-81z2q2 tr.svelte-81z2q2:last-child>td.svelte-81z2q2{border-bottom-width:1px}table.svelte-81z2q2 tr.svelte-81z2q2:last-child>td.svelte-81z2q2:first-child{border-bottom-left-radius:0.5em}table.svelte-81z2q2 tr.svelte-81z2q2:last-child>td.svelte-81z2q2:last-child{border-bottom-right-radius:0.5em}table.svelte-81z2q2 td.svelte-81z2q2.svelte-81z2q2{border:0 solid rgba(67, 0, 176, 0.25);border-width:1px 0 0 1px;line-height:1.3em;padding:1em;text-align:start}table.svelte-81z2q2 td.center.svelte-81z2q2.svelte-81z2q2{text-align:center}table.svelte-81z2q2 td.end.svelte-81z2q2.svelte-81z2q2{text-align:end}table.svelte-81z2q2 td.svelte-81z2q2.svelte-81z2q2:last-child{border-right-width:1px}",
  map: null
};
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["headers", "items", "alternatingRows"]);
  let { headers = [] } = $$props;
  let { items = [] } = $$props;
  let { alternatingRows = true } = $$props;
  if ($$props.headers === void 0 && $$bindings.headers && headers !== void 0)
    $$bindings.headers(headers);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.alternatingRows === void 0 && $$bindings.alternatingRows && alternatingRows !== void 0)
    $$bindings.alternatingRows(alternatingRows);
  $$result.css.add(css$3);
  return `<table${spread([escape_object($$restProps)], { classes: "svelte-81z2q2" })}><thead><tr>${each(headers, (header) => {
    return `<th class="${[
      "svelte-81z2q2",
      (header.align === "center" ? "center" : "") + " " + (header.align === "end" ? "end" : "")
    ].join(" ").trim()}">${slots["header-item"] ? slots["header-item"]({ header }) : ` ${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(header.text)}`;
      }
    })} `} </th>`;
  })}</tr></thead> <tbody>${each(items, (item) => {
    return `<tr class="${["svelte-81z2q2", alternatingRows ? "alternating" : ""].join(" ").trim()}">${each(headers, (header) => {
      return `<td class="${[
        "svelte-81z2q2",
        (header.align === "center" ? "center" : "") + " " + (header.align === "end" ? "end" : "")
      ].join(" ").trim()}">${slots.item ? slots.item({ header, item }) : ` ${escape(item[header.value])} `} </td>`;
    })} </tr>`;
  })}</tbody> </table>`;
});
const Table$1 = Table;
const Chevron_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`;
});
const ChevronLeft = Chevron_left;
const Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
});
const ChevronRight = Chevron_right;
const daysInWeek = 7;
function formatDateTime(datetime, format) {
  if (datetime == null) {
    return null;
  }
  let hours = datetime.getHours();
  if (/%p/i.test(format)) {
    hours %= 12;
    if (hours === 0) {
      hours = 12;
    }
  }
  return format.replace("%Y", datetime.getFullYear()).replace("%y", (datetime.getFullYear() % 100).toString().padStart(2, "0")).replace("%m", (datetime.getMonth() + 1).toString().padStart(2, "0")).replace("%d", datetime.getDate().toString().padStart(2, "0")).replace("%H", hours.toString().padStart(2, "0")).replace("%M", datetime.getMinutes().toString().padStart(2, "0")).replace("%S", datetime.getSeconds().toString().padStart(2, "0")).replace("%p", datetime.getHours() < 12 ? "am" : "pm").replace("%P", datetime.getHours() < 12 ? "AM" : "PM").replace("%%", "%");
}
function getWeekdays(locale, firstWeekday) {
  const weekdayFormatter = new Intl.DateTimeFormat(locale, {
    weekday: "short"
  });
  const anchor = new Date(1970, 0, 1);
  const mondayOffset = 5;
  const weekdays = [];
  for (let i = 0; i < daysInWeek; ++i) {
    anchor.setDate(mondayOffset + firstWeekday - 1 + i);
    weekdays.push(weekdayFormatter.format(anchor));
  }
  return weekdays;
}
function isDate(date) {
  return date instanceof Date && !isNaN(date.valueOf());
}
function datesEqual(date1, date2) {
  if (date1 == null || date2 == null) {
    return false;
  }
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}
function datesLessEqual(date1, date2) {
  if (date1 == null || date2 == null) {
    return false;
  }
  return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) <= new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
}
function dateIncluded(date, dateRanges) {
  return dateRanges.some((dateOrRange) => {
    if (isDate(dateOrRange)) {
      return datesEqual(dateOrRange, date);
    }
    return (dateOrRange.start == null || datesLessEqual(dateOrRange.start, date)) && (dateOrRange.end == null || datesLessEqual(date, dateOrRange.end));
  });
}
function getCalendar(month, year, firstWeekday, disabledDates = []) {
  const calendar = [];
  const dayCursor = new Date(year, month, 1);
  dayCursor.setDate(
    1 - (daysInWeek + dayCursor.getDay() - firstWeekday) % daysInWeek
  );
  do {
    const week = [];
    for (let i = 0; i < daysInWeek; ++i) {
      week.push({
        value: new Date(dayCursor.valueOf()),
        outside: dayCursor.getMonth() !== month,
        disabled: dateIncluded(dayCursor, disabledDates)
      });
      dayCursor.setDate(dayCursor.getDate() + 1);
    }
    calendar.push(week);
  } while (dayCursor.getMonth() === month);
  return calendar;
}
function copyDate(date) {
  if (date == null) {
    return null;
  }
  return new Date(date.valueOf());
}
const css$2 = {
  code: '.weekdays.svelte-qsvvhr.svelte-qsvvhr{display:flex;font-size:0.85em;padding:0.5em 1em}.weekdays.svelte-qsvvhr>.weekday.svelte-qsvvhr{text-align:center;width:14.2857142857%}.week.svelte-qsvvhr.svelte-qsvvhr{display:flex}.week.svelte-qsvvhr .day.svelte-qsvvhr{align-items:center;display:flex;justify-content:center;position:relative;width:14.2857142857%}.week.svelte-qsvvhr .day.svelte-qsvvhr:last-child{padding-right:1rem}.week.svelte-qsvvhr .day.svelte-qsvvhr:first-child{padding-left:1rem}.week.svelte-qsvvhr .day.svelte-qsvvhr>.btn{color:#333;font-size:0.9em;font-weight:400;height:2.25rem;justify-content:center;margin:0.0625rem;width:2.25rem;z-index:2}.week.svelte-qsvvhr .day.today.svelte-qsvvhr>.btn{color:#4300b0}.week.svelte-qsvvhr .day.selected.svelte-qsvvhr>.btn{background-color:#5b17cb;color:#fff}.week.svelte-qsvvhr .day.outside.svelte-qsvvhr>.btn{color:#888}.week.svelte-qsvvhr .day.disabled.svelte-qsvvhr>.btn{color:#b80000;position:relative}.week.svelte-qsvvhr .day.disabled.svelte-qsvvhr>.btn::before{background:#b80000;content:"";height:1px;left:50%;position:absolute;top:50%;transform:translateX(-50%) rotate(-30deg);width:50%}.week.svelte-qsvvhr .day.in-range.svelte-qsvvhr::before{background-color:rgba(67, 0, 176, 0.25);content:"";height:2.25rem;left:0;position:absolute;right:0;top:0.0625rem;z-index:1}.week.svelte-qsvvhr .day.outside.selected.svelte-qsvvhr>.btn{color:#fff}.week.svelte-qsvvhr .day.start.svelte-qsvvhr::before{left:unset;right:0;width:1.1875rem}.week.svelte-qsvvhr .day.start.svelte-qsvvhr:last-child::before{width:2.1875rem}.week.svelte-qsvvhr .day.end.svelte-qsvvhr::before{left:0;right:unset;width:1.1875rem}.week.svelte-qsvvhr .day.start.svelte-qsvvhr:last-child::before,.week.svelte-qsvvhr .day.end.svelte-qsvvhr:first-child::before{width:2.1875rem}.week.svelte-qsvvhr .day.start.end.svelte-qsvvhr::before{width:0}',
  map: null
};
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { weekdaysClass = null } = $$props;
  let { weekClass = null } = $$props;
  let { dayClass = null } = $$props;
  let { locale = void 0 } = $$props;
  let { firstWeekday = 1 } = $$props;
  let { month } = $$props;
  let { year } = $$props;
  let { selectionStart = null } = $$props;
  let { selectionEnd = null } = $$props;
  let { disabledDates = [] } = $$props;
  const weekdays = getWeekdays(locale, firstWeekday);
  const today = /* @__PURE__ */ new Date();
  function computeTitle(day) {
    if (datesEqual(day.value, today)) {
      if (day.disabled) {
        return "Today, not available";
      } else {
        return "Today";
      }
    }
    if (day.disabled) {
      return "Not available";
    }
    return null;
  }
  const dayNumberFormatter = Intl.DateTimeFormat(locale, { day: "numeric" });
  createEventDispatcher();
  if ($$props.weekdaysClass === void 0 && $$bindings.weekdaysClass && weekdaysClass !== void 0)
    $$bindings.weekdaysClass(weekdaysClass);
  if ($$props.weekClass === void 0 && $$bindings.weekClass && weekClass !== void 0)
    $$bindings.weekClass(weekClass);
  if ($$props.dayClass === void 0 && $$bindings.dayClass && dayClass !== void 0)
    $$bindings.dayClass(dayClass);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.firstWeekday === void 0 && $$bindings.firstWeekday && firstWeekday !== void 0)
    $$bindings.firstWeekday(firstWeekday);
  if ($$props.month === void 0 && $$bindings.month && month !== void 0)
    $$bindings.month(month);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.selectionStart === void 0 && $$bindings.selectionStart && selectionStart !== void 0)
    $$bindings.selectionStart(selectionStart);
  if ($$props.selectionEnd === void 0 && $$bindings.selectionEnd && selectionEnd !== void 0)
    $$bindings.selectionEnd(selectionEnd);
  if ($$props.disabledDates === void 0 && $$bindings.disabledDates && disabledDates !== void 0)
    $$bindings.disabledDates(disabledDates);
  $$result.css.add(css$2);
  return `<div class="${escape(null_to_empty(classes("weekdays", weekdaysClass)), true) + " svelte-qsvvhr"}">${each(weekdays, (dayName) => {
    return `<span class="weekday svelte-qsvvhr">${escape(dayName)}</span>`;
  })}</div> ${each(getCalendar(month, year, firstWeekday, disabledDates), (week) => {
    return `<div class="${escape(null_to_empty(classes("week", weekClass)), true) + " svelte-qsvvhr"}"> ${each(week, (day) => {
      return `<div class="${[
        escape(null_to_empty(classes("day", dayClass)), true) + " svelte-qsvvhr",
        (datesEqual(day.value, today) ? "today" : "") + " " + (day.outside ? "outside" : "") + " " + (datesEqual(day.value, selectionStart) || datesEqual(day.value, selectionEnd) ? "selected" : "") + " " + (datesEqual(day.value, selectionStart) ? "start" : "") + " " + (datesEqual(day.value, selectionEnd) ? "end" : "") + " " + (datesLessEqual(selectionStart, day.value) && datesLessEqual(day.value, selectionEnd) ? "in-range" : "") + " " + (day.disabled ? "disabled" : "")
      ].join(" ").trim()}">${validate_component(Button, "Button").$$render(
        $$result,
        {
          title: computeTitle(day),
          disabled: day.disabled
        },
        {},
        {
          default: () => {
            return `${escape(dayNumberFormatter.format(day.value))} `;
          }
        }
      )} </div>`;
    })} </div>`;
  })}`;
});
const Calendar$1 = Calendar;
const css$1 = {
  code: ".date-picker.svelte-1im6fcv.svelte-1im6fcv{display:inline-block}.date-picker.svelte-1im6fcv .dropdown-shell .handle{align-items:center;display:flex}.date-picker.svelte-1im6fcv .dropdown-shell .handle>span{margin:1em}.date-picker.svelte-1im6fcv .dropdown-shell .handle .text-field.in-focus input{background-color:#e1e1e1;border-bottom-width:0.125em;border-color:#4800bd;padding-bottom:0}.date-picker.svelte-1im6fcv .shown-on-focus.svelte-1im6fcv{display:flex;justify-content:center}.date-picker.svelte-1im6fcv .shown-on-focus.svelte-1im6fcv>.btn{clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;position:absolute;width:1px}.date-picker.svelte-1im6fcv .shown-on-focus.svelte-1im6fcv>.btn:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.date-picker.svelte-1im6fcv .month-header.svelte-1im6fcv{align-items:center;color:#4300b0;display:flex;font-weight:500;justify-content:space-between;padding:0 1rem 0.5em}.date-picker.svelte-1im6fcv .month-header.svelte-1im6fcv .btn{flex:0}.date-picker.svelte-1im6fcv .month-header .month-display.svelte-1im6fcv{min-width:12em;text-align:center}.date-picker.svelte-1im6fcv .calendar{padding:0.5em 0 1em}.date-picker.svelte-1im6fcv .text-field{width:7em}",
  map: null
};
const Date_picker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let readableFormat;
  let { class: _class = null } = $$props;
  let { weekdaysClass = null } = $$props;
  let { weekClass = null } = $$props;
  let { dayClass = null } = $$props;
  let { inputClass = null } = $$props;
  let { range = false } = $$props;
  let { locale = void 0 } = $$props;
  let { firstWeekday = 1 } = $$props;
  let { noCalendar = false } = $$props;
  let { top = false } = $$props;
  let { right = false } = $$props;
  let { value = null } = $$props;
  let { disabledDates = [] } = $$props;
  let { closeOnSelection = false } = $$props;
  let { format = "%d.%m.%Y" } = $$props;
  let startFocus = false;
  let endFocus = false;
  let startValue;
  let endValue;
  let shownCalendar = (range && value != null ? value.start : value) || /* @__PURE__ */ new Date();
  function unpackValue(value2) {
    startValue = copyDate(range ? value2 && value2.start : value2);
    endValue = copyDate(range ? value2 && value2.end : null);
  }
  function registerChange(start, end) {
    if (value == null) {
      if (start == null && end == null) {
        return;
      }
    } else {
      if (range) {
        if (datesEqual(start, value.start) && datesEqual(end, value.end)) {
          return;
        }
      } else {
        if (datesEqual(start, value)) {
          return;
        }
      }
    }
    value = range ? {
      start: copyDate(start),
      end: copyDate(end)
    } : copyDate(start);
    if (!range || start != null && end != null) {
      dispatch("change", { value });
    }
  }
  const headerFormatter = Intl.DateTimeFormat(locale, { month: "long", year: "numeric" });
  const dispatch = createEventDispatcher();
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.weekdaysClass === void 0 && $$bindings.weekdaysClass && weekdaysClass !== void 0)
    $$bindings.weekdaysClass(weekdaysClass);
  if ($$props.weekClass === void 0 && $$bindings.weekClass && weekClass !== void 0)
    $$bindings.weekClass(weekClass);
  if ($$props.dayClass === void 0 && $$bindings.dayClass && dayClass !== void 0)
    $$bindings.dayClass(dayClass);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.firstWeekday === void 0 && $$bindings.firstWeekday && firstWeekday !== void 0)
    $$bindings.firstWeekday(firstWeekday);
  if ($$props.noCalendar === void 0 && $$bindings.noCalendar && noCalendar !== void 0)
    $$bindings.noCalendar(noCalendar);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabledDates === void 0 && $$bindings.disabledDates && disabledDates !== void 0)
    $$bindings.disabledDates(disabledDates);
  if ($$props.closeOnSelection === void 0 && $$bindings.closeOnSelection && closeOnSelection !== void 0)
    $$bindings.closeOnSelection(closeOnSelection);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  $$result.css.add(css$1);
  readableFormat = format.replace("%d", "dd").replace("%m", "mm").replace("%y", "yy").replace("%Y", "yyyy").replace("%%", "%");
  {
    unpackValue(value);
  }
  {
    registerChange(startValue, endValue);
  }
  return `<div class="${escape(null_to_empty(classes("date-picker", _class)), true) + " svelte-1im6fcv"}">${validate_component(DropdownShell, "DropdownShell").$$render($$result, { open: endFocus }, {}, {
    default: () => {
      return `<div class="handle">${validate_component(TextField, "TextField").$$render(
        $$result,
        {
          placeholder: readableFormat,
          value: formatDateTime(startValue, format),
          class: classes(startFocus),
          inputClass
        },
        {},
        {}
      )} ${range ? `${slots["between-inputs"] ? slots["between-inputs"]({}) : `<span data-svelte-h="svelte-ysvgx3">to</span>`} ${validate_component(TextField, "TextField").$$render(
        $$result,
        {
          placeholder: readableFormat,
          value: formatDateTime(endValue, format),
          class: classes(endFocus),
          inputClass
        },
        {},
        {}
      )}` : ``}</div> ${!noCalendar ? `${validate_component(Dropdown$1, "Dropdown").$$render($$result, { class: "calendar", top, right }, {}, {
        default: () => {
          return `<div class="shown-on-focus svelte-1im6fcv">${validate_component(Button, "Button").$$render($$result, { noRipple: true }, {}, {
            default: () => {
              return `close the date picker`;
            }
          })}</div> <div class="month-header svelte-1im6fcv">${validate_component(Button, "Button").$$render(
            $$result,
            {
              round: true,
              small: true,
              title: "Previous month"
            },
            {},
            {
              default: () => {
                return `${slots["chevron-left"] ? slots["chevron-left"]({}) : ` ${validate_component(ChevronLeft, "ChevronLeft").$$render($$result, {}, {}, {})} `}`;
              }
            }
          )} <div class="month-display svelte-1im6fcv">${escape(headerFormatter.format(shownCalendar))}</div> ${validate_component(Button, "Button").$$render(
            $$result,
            {
              round: true,
              small: true,
              title: "Next month"
            },
            {},
            {
              default: () => {
                return `${slots["chevron-right"] ? slots["chevron-right"]({}) : ` ${validate_component(ChevronRight, "ChevronRight").$$render($$result, {}, {}, {})} `}`;
              }
            }
          )}</div> ${validate_component(Calendar$1, "Calendar").$$render(
            $$result,
            {
              locale,
              firstWeekday,
              month: shownCalendar.getMonth(),
              year: shownCalendar.getFullYear(),
              selectionStart: startValue,
              selectionEnd: endValue,
              disabledDates,
              weekdaysClass,
              weekClass,
              dayClass
            },
            {},
            {}
          )}`;
        }
      })}` : ``}`;
    }
  })} </div>`;
});
const DatePicker = Date_picker;
const css = {
  code: ".form-field.svelte-3y9l2h.svelte-3y9l2h{display:flex;flex-direction:column;margin-bottom:2em}.form-field.svelte-3y9l2h .description.svelte-3y9l2h{margin-bottom:0.75em}.form-field.svelte-3y9l2h .description .name.svelte-3y9l2h{display:block;font-size:1.1em;margin-bottom:0.2em}.form-field.svelte-3y9l2h .description .name .required.svelte-3y9l2h{color:#4300b0}.form-field.svelte-3y9l2h .description .help.svelte-3y9l2h{font-size:0.95em;font-weight:300}.form-field.svelte-3y9l2h .field .message.svelte-3y9l2h{font-size:0.85em;margin:0.3em 0.5em}.form-field.svelte-3y9l2h .field .message.info.svelte-3y9l2h{color:#4300b0}.form-field.svelte-3y9l2h .field .message.error.svelte-3y9l2h{color:#b80000}@media screen and (min-width: 800px){.form-field.svelte-3y9l2h.svelte-3y9l2h{flex-direction:row}.form-field.svelte-3y9l2h .description.svelte-3y9l2h{flex-basis:40%}.form-field.svelte-3y9l2h .field.svelte-3y9l2h{flex:1;margin-left:1em}}",
  map: null
};
const Form_field = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: _class = null } = $$props;
  let { nameClass = null } = $$props;
  let { helpClass = null } = $$props;
  let { name = null } = $$props;
  let { help = null } = $$props;
  let { id = null } = $$props;
  let { required = false } = $$props;
  let { optional = false } = $$props;
  let { errors = [] } = $$props;
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.nameClass === void 0 && $$bindings.nameClass && nameClass !== void 0)
    $$bindings.nameClass(nameClass);
  if ($$props.helpClass === void 0 && $$bindings.helpClass && helpClass !== void 0)
    $$bindings.helpClass(helpClass);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.help === void 0 && $$bindings.help && help !== void 0)
    $$bindings.help(help);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.optional === void 0 && $$bindings.optional && optional !== void 0)
    $$bindings.optional(optional);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(classes("form-field", _class)), true) + " svelte-3y9l2h"}"><div class="description svelte-3y9l2h">${name != null ? `<label class="${escape(null_to_empty(classes("name", nameClass)), true) + " svelte-3y9l2h"}"${add_attribute("for", id, 0)}>${escape(name)} ${required ? `<span class="required svelte-3y9l2h" data-svelte-h="svelte-1ttfsis">*</span>` : ``}</label>` : ``} ${help != null ? `<div class="${escape(null_to_empty(classes("help", helpClass)), true) + " svelte-3y9l2h"}">${escape(help)}</div>` : ``} ${slots.description ? slots.description({}) : ``}</div> <div class="field svelte-3y9l2h">${slots.default ? slots.default({}) : ``} ${each(errors, (error) => {
    return `${error ? `<div class="message error svelte-3y9l2h">${escape(error)}</div>` : ``}`;
  })} ${required ? `<div class="message info svelte-3y9l2h" data-svelte-h="svelte-1mulz7l">* Required</div>` : `${optional ? `<div class="message info svelte-3y9l2h" data-svelte-h="svelte-1qz3k62">Optional</div>` : ``}`} ${slots.message ? slots.message({}) : ``}</div> </div>`;
});
const FormField = Form_field;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const headers = [
    { text: "Day", value: "day" },
    { text: "Colors", value: "colors" },
    {
      text: "Columns",
      value: "columns",
      align: "end"
    },
    {
      text: "Allow duplicates",
      value: "allow_duplicates"
    },
    { text: "Answer", value: "answer" }
  ];
  const items = data.settings;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-171lafx">Settings</h1> ${validate_component(Table$1, "Table").$$render($$result, { headers, items }, {}, {})} ${each(items, (item) => {
    return `<div style="display: flex;"><form method="POST" action="?/update" style="display: flex;gap: 1em;"><input type="hidden" name="id"${add_attribute("value", item.id, 0)}> ${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Day`;
      }
    })} ${validate_component(FormField, "FormField").$$render($$result, { name: "day", id: "day" }, {}, {
      default: () => {
        return `${validate_component(DatePicker, "DatePicker").$$render(
          $$result,
          {
            closeOnSelection: true,
            value: item.day,
            id: "day"
          },
          {},
          {}
        )} `;
      }
    })} ${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Colors`;
      }
    })} ${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        value: item.colors,
        min: 4,
        max: 10,
        step: 1,
        tooltips: "active",
        ticks: {
          mode: "values",
          values: [4, 5, 6, 7, 8, 9, 10]
        },
        name: "colors",
        id: "colors"
      },
      {},
      {}
    )} ${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Columns`;
      }
    })} ${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        value: item.columns,
        min: 3,
        max: 8,
        step: 1,
        tooltips: "active",
        ticks: {
          mode: "values",
          values: [3, 4, 5, 6, 7, 8]
        },
        name: "columns",
        id: "columns"
      },
      {},
      {}
    )} ${validate_component(Label, "Label").$$render($$result, {}, {}, {
      default: () => {
        return `Allow duplicates`;
      }
    })} <input type="checkbox" name="allow_duplicates" id="allow_duplicates" ${item.allow_duplicates ? "checked" : ""}> ${validate_component(Button, "Button").$$render($$result, { filled: true, type: "submit" }, {}, {
      default: () => {
        return `Update`;
      }
    })}</form> <form method="POST" action="?/delete"><input type="hidden" name="id"${add_attribute("value", item.id, 0)}> ${validate_component(Button, "Button").$$render($$result, { outline: true, type: "submit" }, {}, {
      default: () => {
        return `Delete`;
      }
    })}</form> </div>`;
  })}`;
});
export {
  Page as default
};
