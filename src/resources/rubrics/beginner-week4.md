# AI Evaluation Rubric

## Assignment Information

**Level:** Beginner
**Week:** 4
**Lessons:** 23–37

Evaluate the student's submission ONLY according to the following requirements.
Do not infer additional requirements.
Ignore folder structure.
Review every submitted HTML file before generating feedback.

---

# Task 1 (Lessons 19–23) — Semantic HTML Elements

## Requirement 1
The student correctly identifies which of the following are valid HTML elements:
- Header: Expected `<header>`
- Nav: Expected `<nav>`
- Main: Expected `<main>`
- Aside: Expected `<aside>`
- Picture: Expected `<picture>`
- Figure: Expected `<figure>`
- Footer: Expected `<footer>`
- Figcaption: Expected `<figcaption>`
- Section: Expected `<section>`
- Ruby: Expected `<ruby>`
- Data: Expected `<data>`
- Article: Expected `<article>`

The following must be identified as invalid HTML elements:
- Command
- Install
- Text

---

# Task 2 (Lessons 19–23) — Semantic Page Layout

Verify that the page contains semantic HTML elements.
The page must include:
- Header: Expected `<header>`
- Navigation: Expected `<nav>`
- Main content: Expected `<main>`
- Sidebar: Expected `<aside>`
- Footer: Expected `<footer>`

### Header
Expected HTML:
- A page title exists.
- At least five navigation links exist: Expected `<a>` inside the header.

### Navigation
Expected HTML:
- A navigation bar exists: Expected `<nav>`.
- It contains at least six links: Expected six `<a>` tags.

### Main Content
Expected HTML:
- Three articles exist: Expected three `<article>` elements.
- Each article contains:
  - Heading: Expected `<h1>` to `<h6>`
  - Paragraph: Expected `<p>`
  - Image: Expected `<img>`
  - "Read More" link: Expected `<a>`
- Articles are separated using `<hr>`.

### Sidebar
Expected HTML:
- Sidebar contains the title "Categories".
- Sidebar contains an unordered list: Expected `<ul>`.
- The unordered list contains five categories: Expected five `<li>` items.

### Footer
Expected HTML:
- Footer exists: Expected `<footer>`.
- Footer contains the text "Copyright 2021 ©" where the copyright symbol is created using a valid HTML entity: Expected `&copy;` or `&#169;`.

---

# Task 3 (Lessons 19–23) — Audio Element

Expected HTML:
- The page contains one audio element: Expected `<audio autoplay loop>`.
- At least three source elements exist: Expected three `<source>` elements inside `<audio>`.
- Each source uses a different audio format.
- Fallback text exists inside `<audio>`.

---

# Task 4 (Lessons 19–23) — Video Element

Expected HTML:
- The page contains one video element: Expected `<video autoplay muted poster="...">`.
- At least three video sources exist: Expected three `<source>` elements inside `<video>`.
- A poster image is specified.
- Two subtitle tracks exist: Expected two `<track kind="subtitles">` elements.
- Each subtitle uses a different language (e.g., `srclang` attribute).
- Fallback text exists inside `<video>`.

---

# Task 5 (Lessons 24–27) — Form

Verify that the form contains the following inputs:
- Username
- Password
- Mobile
- Email
- Subject

Every input must have its own `<label>`.

### Input Types
Expected HTML:
- Username input type: Expected `<input type="text">`
- Password input type: Expected `<input type="password">`
- Mobile input type: Expected `<input type="tel">`
- Email input type: Expected `<input type="email">`
- Subject input type: Expected `<input type="text">`

### Validation
Expected HTML:
- Username is required: Expected `required` attribute.
- Email is required: Expected `required` attribute.

### Placeholder
Every input contains a placeholder: Expected `placeholder` attribute.

### Layout
Expected HTML:
- Label appears above its input.
- Label and input pair is separated from the next pair using `<hr>`.

### Form Action and Method
Expected HTML:
- Form configuration: Expected `<form action="test.py" method="post">`

### Hidden Input
Verify that one hidden input exists: Expected `<input type="hidden">`

### Buttons
Expected HTML:
- Submit button exists: Expected `<input type="submit" value="Send Data">` or `<button type="submit">Send Data</button>`
- Reset button exists: Expected `<input type="reset" value="Empty Form">` or `<button type="reset">Empty Form</button>`

---

# Task 6 (Lessons 24–27) — Range Input

Expected HTML:
- One range input exists: Expected `<input type="range" min="0" max="400" step="50" value="400">`

---

# Task 7 (Lessons 28–30) — Form Attributes

Expected HTML:
- Username input exists.
- Email input exists.
- Hidden Token input exists.

### Token
Expected HTML:
- Token input: Expected `<input type="hidden" value="b92f1fc2fce391ad7af633723afd3055">`

### Email
Expected HTML:
- Email input: Expected `<input type="email" readonly value="o@o.com">`

### Username
Expected HTML:
- Username configuration: Expected `<input type="text" autofocus minlength="5" maxlength="20" required>`

### Buttons
Expected HTML:
- Empty reset button exists: Expected `<input type="reset">` or `<button type="reset">`
- Send submit button exists: Expected `<input type="submit">` or `<button type="submit">`

---

# Task 8 (Lessons 28–30) — Checkbox and Radio Groups

### Skills Checkboxes
Expected HTML:
- Skills use checkboxes: Expected `<input type="checkbox" name="skills">`
- Every checkbox has a unique `id` attribute.
- Every label uses the correct `for` attribute matching the checkbox `id`.
- At least one checkbox is checked: Expected `checked` attribute on one checkbox.

### Job Radio Buttons
Expected HTML:
- Jobs use radio buttons: Expected `<input type="radio" name="job">`
- Every radio button has a unique `id` attribute.
- Every label uses the correct `for` attribute matching the radio `id`.
- At least one radio button is checked: Expected `checked` attribute on one radio button.

---

# Task 9 (Lessons 28–30) — Select and Textarea

Expected HTML:
- A select element exists: Expected `<select>`.
- Programming languages are grouped correctly: Expected `<optgroup>` tags inside `<select>`.
- A textarea exists with brief configuration: Expected `<textarea name="brief">Write Here Why You Want To Learn Programming</textarea>`

---

# Task 10 (Lessons 31–34) — Advanced Form Attributes

Expected HTML:
- Search input exists.
- File input exists.
- URL input exists.

### Search
Verify search input configuration:
- Expected `<input type="search" placeholder="Enter A Search Word" autofocus>`

### URL
Verify URL input configuration:
- Expected `<input type="url" required>`

### Form Action Page target
Verify form target:
- Expected `<form target="_blank" novalidate>`

### Buttons
Verify empty reset button exists:
- Expected `<input type="reset">` or `<button type="reset">`

---

# Task 11 (Lessons 31–34) — Date Inputs

Expected HTML:
- Date input exists: Expected `<input type="date" value="1982-10-25">`
- Month input exists: Expected `<input type="month" value="1982-10">`

---

# Task 12 (Lessons 31–34) — Preformatted Text

Expected HTML:
- The four lines are placed inside a single preformatted element: Expected `<pre>`.

---

# Task 13 (Lessons 31–34) — Iframe

Expected HTML:
- An iframe exists: Expected `<iframe src="https://elzero.org" width="100%" height="400">` (or CSS equivalent for width/height).

---

# Task 14 (Lessons 35–37) — HTML Knowledge Questions

Verify that answers match expected HTML knowledge.
Important expected answers include:
- Accessibility range text should be: "10 to 20" (NOT "10 – 20")
- Keyboard navigation: Expected element uses attribute `tabindex="0"`
- ARIA stands for: "Accessible Rich Internet Applications"

---

# Task 15 (Lessons 35–37) — Accessibility

Expected HTML:
- Every selectable skill is keyboard accessible: Expected `tabindex="0"` or native interactive element.
- ARIA attributes are correctly applied: Expected `aria-checked="..."` and `aria-labelledby="..."`.
- Labels correctly reference their corresponding controls.