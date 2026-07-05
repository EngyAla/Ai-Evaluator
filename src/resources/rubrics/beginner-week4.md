# AI Evaluation Rubric

## Assignment Information

**Level:** Beginner

**Week:** 4

**Lessons:** 23–37

Evaluate the student's submission ONLY according to the following requirements.

Do not infer additional requirements.

Ignore folder structure.

Ignore file names except when referencing where an issue exists.

Review every submitted HTML file before generating feedback.

---

# Task 1 — Semantic HTML Elements

## Requirement 1

The student correctly identifies which of the following are valid HTML elements:

- Header
- Nav
- Main
- Aside
- Picture
- Figure
- Footer
- Figcaption
- Section
- Ruby
- Data
- Article

The following must be identified as invalid HTML elements:

- Command
- Install
- Text

---

# Task 2 — Semantic Page Layout

Verify that the page contains semantic HTML elements.

The page must include:

- Header
- Navigation
- Main content
- Sidebar
- Footer

### Header

Verify that:

- A page title exists.
- At least five navigation links exist.

### Navigation

Verify that:

- A navigation bar exists.
- It contains at least six links.

### Main Content

Verify that:

- Three articles exist.
- Each article contains:
  - Heading
  - Paragraph
  - Image
  - "Read More" link
- Articles are separated using `<hr>`.

### Sidebar

Verify that:

- Sidebar contains the title "Categories".
- Sidebar contains an unordered list.
- The unordered list contains five categories.

### Footer

Verify that:

- Footer exists.
- Footer contains:

Copyright 2021 ©

- The copyright symbol is created using a valid HTML entity.

---

# Task 3 — Audio Element

Verify that:

- The page contains one `<audio>` element.
- At least three `<source>` elements exist.
- Each source uses a different audio format.
- Fallback text exists.
- Audio autoplay is enabled.
- Audio loops automatically.

---

# Task 4 — Video Element

Verify that:

- The page contains one `<video>` element.
- At least three video sources exist.
- A poster image is specified.
- Video autoplay is enabled.
- Video is muted.
- Fallback text exists.
- Two subtitle tracks exist.
- Each subtitle uses a different language.

---

# Task 5 — Form (Lessons 24–27)

Verify that the form contains the following inputs:

- Username
- Password
- Mobile
- Email
- Subject

Every input must have its own `<label>`.

### Input Types

Verify that:

- Username uses `type="text"`
- Password uses `type="password"`
- Mobile uses `type="tel"`
- Email uses `type="email"`
- Subject uses `type="text"`

### Validation

Verify that:

- Username is required.
- Email is required.

### Placeholder

Every input contains a placeholder.

### Layout

Verify that:

- Label appears above its input.
- `<hr>` separates every label/input pair.

### Form

Verify that:

- action points to `test.py`
- method is `post`

### Hidden Input

Verify that one hidden input exists.

### Buttons

Verify that:

- Submit button text is:

Send Data

- Reset button text is:

Empty Form

---

# Task 6 — Range Input

Verify that:

- One range input exists.
- Minimum value is 0.
- Maximum value is 400.
- Step is 50.
- Default value is 400.

---

# Task 7 — Form Attributes (Lessons 28–30)

Verify that:

- Username exists.
- Email exists.
- Hidden Token exists.

### Token

Verify that:

- Token uses `type="hidden"`
- Value equals:

b92f1fc2fce391ad7af633723afd3055

### Email

Verify that:

- Email is readonly.
- Default value equals:

o@o.com

### Username

Verify that:

- autofocus exists.
- minlength="5"
- maxlength="20"
- required exists.

### Buttons

Verify that:

- Empty button exists.
- Send button exists.

---

# Task 8 — Checkbox and Radio Groups

### Skills

Verify that:

- Skills use checkboxes.
- Every checkbox has an id.
- Every label uses the correct `for` attribute.
- All checkboxes use:

name="skills"

- At least one checkbox is checked.

### Job

Verify that:

- Jobs use radio buttons.
- Every radio has an id.
- Every label uses the correct `for` attribute.
- All radios use:

name="job"

- At least one radio button is checked.

---

# Task 9 — Select and Textarea

Verify that:

- A select element exists.
- Programming languages are grouped correctly.
- A textarea exists.
- textarea uses:

name="brief"

- Default textarea content equals:

Write Here Why You Want To Learn Programming

---

# Task 10 — Advanced Form Attributes (Lessons 31–34)

Verify that:

- Search input exists.
- File input exists.
- URL input exists.

### Search

Verify that:

- placeholder equals:

Enter A Search Word

- autofocus exists.

### URL

Verify that:

- URL input is required.

### Form

Verify that:

- Form opens in a new tab.
- novalidate attribute exists.

### Buttons

Verify that:

- Empty button exists.

---

# Task 11 — Date Inputs

Verify that:

- Date input exists.
- Default date equals:

1982-10-25

- Month input exists.
- Default month equals:

1982-10

---

# Task 12 — Preformatted Text

Verify that:

- The four lines are placed inside a single `<pre>` element.

---

# Task 13 — Iframe

Verify that:

- An iframe exists.
- Source is Elzero website.
- Width fills the available space.
- Height equals 400 pixels.

---

# Task 14 — HTML Knowledge Questions (Lessons 35–37)

Verify that answers match the expected HTML knowledge.

Important expected answers include:

- Accessibility range text should be:

10 to 20

NOT

10 – 20

- Keyboard navigation uses:

tabindex="0"

- ARIA stands for:

Accessible Rich Internet Applications

---

# Task 15 — Accessibility

Verify that:

- Every selectable skill is keyboard accessible.
- ARIA roles are correctly applied.
- aria-checked is used.
- aria-labelledby is used.
- Labels correctly reference their corresponding controls.