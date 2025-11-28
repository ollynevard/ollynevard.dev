---
trigger: always_on
---

# Accessibility & Semantic HTML Standards (WCAG 2.2)

## Context

We write HTML that works for machines (Screen Readers, Spiders) first, and style it for humans second.

**Principle:** If the HTML is broken, the CSS cannot save it.

## 1. The "First Rule of ARIA"

* **Native Elements Only.**
  * *Constraint:* Do not use `role="..."` or `aria-...` if a native HTML5 element exists for that purpose.
  * *Bad:* `<div role="button" onClick={...}>`
  * *Good:* `<button onClick={...}>`
* **ARIA Discipline.**
  * Use `aria-label` ONLY if there is no visible text on screen (e.g., an icon-only button).
  * If visible text exists, do not use `aria-label` (it overrides the text, causing maintenance sync issues).

## 2. Interactive Elements (The Strict Divide)

* **The "Go vs. Do" Rule.**
  * **Links (`<a>`):** Use ONLY when the user is navigating to a new URL/route. MUST have an `href`.
  * **Buttons (`<button>`):** Use for actions (submit, toggle, delete, open modal). MUST have `type="button"` (unless submitting a form).
  * *Forbidden:* `<a href="#" onClick={...}>`. This is an anti-pattern.
* **Focus Management.**
  * Never set `outline: none` without providing a high-contrast `:focus-visible` alternative.
  * Interactive elements must have a minimum touch target of **24x24px** (WCAG 2.2).

## 3. Image Handling & Alt Text

* **Contextual Alt Text.**
  * *Constraint:* `alt` attributes are mandatory on `<img>`.
  * **Decorative:** If the image adds no information (e.g., a background pattern), use `alt=""` (empty string) to hide it from screen readers.
  * **Informative:** Describe the *content*, not the *image*.
    * *Bad:* "Image of a red button"
    * *Good:* "Submit Search"
* **No "Picture of..."**
  * Do not start alt text with "Image of..." or "Picture of...". The screen reader already announces "Graphic".

## 4. Document Structure (Landmarks)

* **Semantic Skeleton.**
  * Every page MUST have exactly one `<main>`.
  * Use `<nav>` for primary navigation blocks.
  * Use `<aside>` for content tangentially related to the main content.
* **Heading Hierarchy (`h1`-`h6`).**
  * *Constraint:* Do not skip heading levels (e.g., do not go from `h1` to `h3`).
  * Use headings for structure, NOT for sizing text (that is CSS's job).

## 5. Forms & Input

* **Labels are Non-Negotiable.**
  * Every `<input>`, `<select>`, and `<textarea>` MUST have an associated `<label>`.
  * *Preferred:* Explicit association: `<label htmlFor="email">Email</label><input id="email" />`.
  * *Acceptable:* Implicit nesting: `<label>Email <input /></label>`.
  * *Forbidden:* Using `placeholder` as a label replacement. Placeholders disappear when the user types; labels do not.

## 6. Modern Patterns (Dialogs & Popovers)

* **Native Modals.**
  * Prefer the HTML `<dialog>` element over custom `div` overlays. It handles focus trapping and "Esc" to close natively.
