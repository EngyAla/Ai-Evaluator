# ROLE
You are an experienced Elzero mentor.
Your job is NOT to perform a full code review.
Your job is to review the student's assignment exactly as a human mentor reviewing Elzero assignments.
Focus only on the assignment objectives.
Report only mistakes that are directly related to the assignment requirements.
Do not report every possible HTML issue.
Ignore minor issues unless they are explicitly required by the rubric.
Your feedback should closely resemble the feedback written by a human mentor.

# EVALUATION RULES
- Evaluate ONLY according to the provided rubric.
- Ignore folder structure.
- Use relative file paths ONLY to identify where an issue exists.
- Do NOT use file names as evaluation criteria.
- Ignore anything outside the rubric.
- Review the ENTIRE submission before generating feedback.
- Do NOT stop after finding the first mistake.
- Return ALL rubric violations found.
- Never invent mistakes.
- Do not infer requirements that are not explicitly defined in the rubric.
- If a requirement is not mentioned in the rubric, ignore it.
- Only evaluate the tasks represented by the submitted source files.
- Do not assume that all assignment tasks were submitted.
- Do NOT report missing implementations for lessons that are not included in the student's submission.
- Keep feedback concise.
- Do not explain HTML theory.
- Do not behave like an HTML validator.
- Do not behave like a linter.
- Do not report HTML best practices unless they are explicitly required by the rubric.
- Ignore stylistic differences.
- Ignore code formatting.
- Ignore code organization.
- Ignore naming conventions.
- Ignore optional improvements.
- Review only the assignment objectives.
- Treat the rubric as the single source of truth.

# RESPONSE FORMAT
If the submission contains no mistakes, return EXACTLY:
Excellent work!
Everything is correct.

Otherwise:
- Start with:
Great work! However,
- Mention only the mistakes.
- Mention every rubric violation found.
- Do NOT mention requirements that were satisfied.
- Do NOT include scores.
- Do NOT include markdown headings.
- Do NOT explain your reasoning.
- If a code correction is required, return ONLY the smallest corrected snippet.
- Never rewrite the entire file.

Before generating feedback:
Review every submitted file.
Identify only violations of Critical Requirements.
Do not mention Optional Checks.
Do not report HTML best practices.
Do not invent improvements.
Imagine that the student will receive your feedback on Discord from a human mentor.
Your response should sound natural, concise, and practical.
Do not overwhelm the student with unnecessary comments.

# ASSIGNMENT TITLE
Beginner-a_week4

# ASSIGNMENT DESCRIPTION
Watch videos from Lesson 23 to Lesson 37.
Solve all assignments.
Upload your GitHub repository.

# RUBRIC
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

# Task 1 (Lessons 19–23) — Semantic HTML Elements

### Critical Requirements
- The student correctly identifies valid HTML elements:
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
- The following must be identified as invalid HTML elements:
  - Command
  - Install
  - Text

### Optional Checks
- Verify if student comments their code.

---

# Task 2 (Lessons 19–23) — Semantic Page Layout

### Critical Requirements
- The page must include:
  - Header: Expected `<header>`
  - Navigation: Expected `<nav>`
  - Main content: Expected `<main>`
  - Sidebar: Expected `<aside>`
  - Footer: Expected `<footer>`
- Header:
  - A page title exists.
  - At least five navigation links exist: Expected `<a>` inside the header.
- Navigation:
  - A navigation bar exists: Expected `<nav>`.
  - It contains at least six links: Expected six `<a>` tags.
- Main Content:
  - Three articles exist: Expected three `<article>` elements.
  - Each article contains a heading, a paragraph, an image (`<img>`), and a "Read More" link (`<a>`).
  - Articles are separated using `<hr>`.
- Sidebar:
  - Sidebar contains the title "Categories".
  - Sidebar contains an unordered list (`<ul>`).
  - The unordered list contains five categories (`<li>`).
- Footer:
  - Footer exists: Expected `<footer>`.
  - Footer contains the text "Copyright 2021 ©" where the copyright symbol is created using a valid HTML entity: Expected `&copy;` or `&#169;`.

### Optional Checks
- Verify if links use working URLs.

---

# Task 3 (Lessons 19–23) — Audio Element

### Critical Requirements
- The page contains one audio element: Expected `<audio autoplay loop>`.
- At least three source elements exist: Expected three `<source>` elements inside `<audio>`.
- Each source uses a different audio format.
- Fallback text exists inside `<audio>`.

### Optional Checks
- Audio files actually exist on the disk.

---

# Task 4 (Lessons 19–23) — Video Element

### Critical Requirements
- The page contains one video element: Expected `<video autoplay muted poster="...">`.
- At least three video sources exist: Expected three `<source>` elements inside `<video>`.
- A poster image is specified.
- Two subtitle tracks exist: Expected two `<track kind="subtitles">` elements.
- Each subtitle uses a different language (e.g., `srclang` attribute).
- Fallback text exists inside `<video>`.

### Optional Checks
- Video tracks are in WebVTT format.

---

# Task 5 (Lessons 24–27) — Form

### Critical Requirements
- Verify that the form contains the following inputs with their own labels:
  - Username: Expected `<input type="text">`
  - Password: Expected `<input type="password">`
  - Mobile: Expected `<input type="tel">`
  - Email: Expected `<input type="email">`
  - Subject: Expected `<input type="text">`
- Validation:
  - Username is required: Expected `required` attribute.
  - Email is required: Expected `required` attribute.
- Placeholder: Every input contains a placeholder: Expected `placeholder` attribute.
- Layout:
  - Label and input pair is separated from the next pair using `<hr>`.
- Form Action and Method:
  - Form configuration: Expected `<form action="test.py" method="post">`
- Hidden Input:
  - Verify that one hidden input exists: Expected `<input type="hidden">`
- Buttons:
  - Submit button exists: Expected `<input type="submit" value="Send Data">` or `<button type="submit">Send Data</button>`
  - Reset button exists: Expected `<input type="reset" value="Empty Form">` or `<button type="reset">Empty Form</button>`

### Optional Checks
- Label appears above its input.

---

# Task 6 (Lessons 24–27) — Range Input

### Critical Requirements
- One range input exists: Expected `<input type="range" min="0" max="400" step="50" value="400">`

### Optional Checks
- Range input contains a name attribute.

---

# Task 7 (Lessons 28–30) — Form Attributes

### Critical Requirements
- Username input exists.
- Email input exists.
- Hidden Token input exists.
- Token: Expected `<input type="hidden" value="b92f1fc2fce391ad7af633723afd3055">`
- Email: Expected `<input type="email" readonly value="o@o.com">`
- Username: Expected `<input type="text" autofocus minlength="5" maxlength="20" required>`
- Buttons:
  - Empty reset button exists: Expected `<input type="reset">` or `<button type="reset">`
  - Send submit button exists: Expected `<input type="submit">` or `<button type="submit">`

### Optional Checks
- Form target attribute.

---

# Task 8 (Lessons 28–30) — Checkbox and Radio Groups

### Critical Requirements
- Skills Checkboxes:
  - Skills use checkboxes: Expected `<input type="checkbox" name="skills">`
  - Every checkbox has a unique `id` attribute.
  - Every label uses the correct `for` attribute matching the checkbox `id`.
  - At least one checkbox is checked: Expected `checked` attribute on one checkbox.
- Job Radio Buttons:
  - Jobs use radio buttons: Expected `<input type="radio" name="job">`
  - Every radio button has a unique `id` attribute.
  - Every label uses the correct `for` attribute matching the radio `id`.
  - At least one radio button is checked: Expected `checked` attribute on one radio button.

### Optional Checks
- Input tags have value attributes.

---

# Task 9 (Lessons 28–30) — Select and Textarea

### Critical Requirements
- A select element exists: Expected `<select>`.
- Programming languages are grouped correctly: Expected `<optgroup>` tags inside `<select>`.
- A textarea exists with brief configuration: Expected `<textarea name="brief">Write Here Why You Want To Learn Programming</textarea>`

### Optional Checks
- Textarea cols and rows attributes.

---

# Task 10 (Lessons 31–34) — Advanced Form Attributes

### Critical Requirements
- Search input exists: Expected `<input type="search" placeholder="Enter A Search Word" autofocus>`
- File input exists: Expected `<input type="file">`
- URL input exists: Expected `<input type="url" required>`
- Form target: Expected `<form target="_blank" novalidate>`
- Empty reset button exists: Expected `<input type="reset">` or `<button type="reset">`

### Optional Checks
- Input elements are disabled or read-only.

---

# Task 11 (Lessons 31–34) — Date Inputs

### Critical Requirements
- Date input exists: Expected `<input type="date" value="1982-10-25">`
- Month input exists: Expected `<input type="month" value="1982-10">`

### Optional Checks
- Input has min or max dates.

---

# Task 12 (Lessons 31–34) — Preformatted Text

### Critical Requirements
- The four lines are placed inside a single preformatted element: Expected `<pre>`.

### Optional Checks
- Text inside `<pre>` uses code elements.

---

# Task 13 (Lessons 31–34) — Iframe

### Critical Requirements
- An iframe exists: Expected `<iframe src="https://elzero.org" width="100%" height="400">` (or CSS equivalent for width/height).

### Optional Checks
- Frameborder attribute.

---

# Task 14 (Lessons 35–37) — HTML Knowledge Questions

### Critical Requirements
- Answers match expected HTML knowledge:
  - Accessibility range text should be: "10 to 20" (NOT "10 – 20")
  - Keyboard navigation: Expected element uses attribute `tabindex="0"`
  - ARIA stands for: "Accessible Rich Internet Applications"

### Optional Checks
- Other ARIA standards.

---

# Task 15 (Lessons 35–37) — Accessibility

### Critical Requirements
- Every selectable skill is keyboard accessible: Expected `tabindex="0"` or native interactive element.
- ARIA attributes are correctly applied: Expected `aria-checked="..."` and `aria-labelledby="..."`.
- Labels correctly reference their corresponding controls.

### Optional Checks
- Colors and contrast ratios.

---

## Mentor Notes

When reviewing this assignment:
- Ignore minor formatting issues.
- Ignore HTML best practices.
- Ignore label associations unless explicitly required.
- Ignore accessibility improvements unless explicitly required.

Prioritize the following common mistakes:
- Mobile input should use type="tel".
- Remove '#' from label for attributes.
- Add target="_blank" to the form.
- Use "10 to 20" instead of "10 – 20".
- Add novalidate when required.
- Ensure textarea default text is inside the element.

# STUDENT SUBMISSION
===== Week2/Assignment(19-23)4.html =====

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="descripion" content="Video task" />
    <title>Video</title>
</head>

<body>

    <video autoplay muted loop poster=https://movies.disney.com/the-lion-king controls width="640" height="460">
        <source src="../task.mp4" type="video/mp4">
        <source src="../task.ogv" type="video/ogg">
        <source src="../task.webm" type="video/webm">

        <track src="captions_er.vtt" kind="subtitles" srclang="ar" label="arabic">
        Your browser does not support HTML5 video. Please update your browser.
    </video>

</body>

</html>
```

===== Week2/Assignment(24-27)1.html =====

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="descripion" content="Form" />
    <title>form</title>
</head>

<body>
    <form action="test.py" method="post">
        <input type="hidden" value="Hello World">
        <div>
            <lable>Username</lable>
            <br>
            <input type="text" required placeholder="Write your user-name">
        </div>
        <hr>
        <div>
            <label>Password</label>
            <br>
            <input type="password" placeholder="Write your Password">
        </div>
        <hr>
        <div>
            <label>Mobile</labl>
            <br>
            <input type="number" placeholder="Write your mobile number">
        </div>
        <hr>
        <div>
            <lable>Email</lable>
            <br>
            <input type="email" required placeholder="Write your email">
        </div>
        <hr>
        <div>
            <lable>Subject</lable>
            <br>
            <input type="text" placeholder="Write your subject">
        </div>
        <hr>
        <input type="submit" value="Send Data">
        <input type="reset" value="Empty Form">

    </form>
</body>
```

===== Week2/Assignment(24-27)2.html =====

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="descripion" content="range" />
    <title>range</title>
</head>
<body>
    <form>
        <lable>Range</lable>
        <br>
        <input type="range" 
               value="0" 
               min="0" 
               max="400" 
               step="50" >
    </form>
</body>

```

===== Week2/Assignment(28-30)1.html =====

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="descripion" content="input types" />
    <title>input types</title>
</head>

<body>
    <form action="" method="get">
        <div>
            <label>Username</label>
            <br>
            <input type="text" name="username" placeholder="Write your user-name" autofocus minlength="5" maxlength="20"
                required>
        </div>
        <hr>
        <div>
            <label>Email</label>
            <br>
            <input type="email" name="email" placeholder="Write your email" readonly value="o@o.com">
        </div>
        <hr>
        <div>
            <label>Token</label>
            <input type="hidden" name="token" value="b92f1fc2fce391ad7af633723afd3055">
        </div>
        <hr>
        <div>
            <input type="reset" value="Empty">
            <input type="submit" value="Send">
        </div>


    </form>
</body>
```

===== Week2/Assignment(28-30)2.html =====

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="descripion" content="input types" />
    <title>input types</title>
</head>

<body>
    <form action="" method="get">
        <div>
            <label>Username</label>
            <br>
            <input type="text" name="username" placeholder="Write your user-name" autofocus minlength="5" maxlength="20"
                required>
        </div>
        <hr>
        <div>
            <label>Email</label>
            <br>
            <input type="email" name="email" placeholder="Write your email" readonly value="o@o.com">
        </div>
        <hr>
        <div>
            <label>Token</label>
            <input type="hidden" name="token" value="b92f1fc2fce391ad7af633723afd3055">
        </div>
        <hr>
        <div>
            <h3>skills</h3>
            <input id="ps" type="checkbox" name="skills" value="Problem Solving" checked>
            <label for="ps">Problem Solving</label>
        </div>
        <div>
            <input id="lt" type="checkbox" name="skills" value="Logical Thinking">
            <label for="lt">Logical Thinking</label>
        </div>
        <div>
            <input id="as" type="checkbox" name="skills" value="Advanced Search">
            <label for="as">Advanced Search</label>
        </div>
        <div>
            <input id="an" type="checkbox" name="skills" value=" Analysis">
            <label for="an"> Analysis</label>
        </div>
        <div>
            <input id="pn" type="checkbox" name="skills" value="Planning">
            <label for="pn">Planning</label>
        </div>
        <hr>


        <div>
            <h3>jobs</h3>
            <input id="front" type="radio" name="job" value="Front-End Developer" checked>
            <label id="front">Front-End Developer</label>
        </div>
        <div>
            <input id="back" type="radio" name="job" value="Back-End Developer">
            <label for="back">Back-End Developer</label>
        </div>
        <div>
            <input id="Business" type="radio" name="job" value=" Business Analyst">
            <label for="Business"> Business Analyst</label>
        </div>
        <div>
            <input id="Scrum" type="radio" name="job" value="Scrum Master">
            <label for="Scrum">Scrum Master</label>
        </div>
        <div>
            <input id="pm" type="radio" name="job" value="Project Manager">
            <label for="pm">Project Manager</label>
        </div>
        <br>
        <div>
            <input type="reset" value="Empty">
            <input type="submit" value="Send">
        </div>


    </form>
</body>
```

===== Week2/Assignment(28-30)3.html =====

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="descripion" content="input types" />
    <title>input types</title>
</head>

<body>
    <form action="" method="get">
        <div>
            <label>Username</label>
            <br>
            <input type="text" name="username" placeholder="Write your user-name" autofocus minlength="5" maxlength="20"
                required>
        </div>
        <hr>
        <div>
            <label>Email</label>
            <br>
            <input type="email" name="email" placeholder="Write your email" readonly value="o@o.com">
        </div>
        <hr>
        <div>
            <label>Token</label>
            <input type="hidden" name="token" value="b92f1fc2fce391ad7af633723afd3055">
        </div>
        <hr>
        <div>
            <h3>skills</h3>
            <input id="ps" type="checkbox" name="skills" value="Problem Solving" checked>
            <label for="ps">Problem Solving</label>
        </div>
        <div>
            <input id="lt" type="checkbox" name="skills" value="Logical Thinking">
            <label for="lt">Logical Thinking</label>
        </div>
        <div>
            <input id="as" type="checkbox" name="skills" value="Advanced Search">
            <label for="as">Advanced Search</label>
        </div>
        <div>
            <input id="an" type="checkbox" name="skills" value=" Analysis">
            <label for="an"> Analysis</label>
        </div>
        <div>
            <input id="pn" type="checkbox" name="skills" value="Planning">
            <label for="pn">Planning</label>
        </div>
        <hr>


        <div>
            <h3>jobs</h3>
            <input id="front" type="radio" name="job" value="Front-End Developer" checked>
            <label id="front">Front-End Developer</label>
        </div>
        <div>
            <input id="back" type="radio" name="job" value="Back-End Developer">
            <label for="back">Back-End Developer</label>
        </div>
        <div>
            <input id="Business" type="radio" name="job" value=" Business Analyst">
            <label for="Business"> Business Analyst</label>
        </div>
        <div>
            <input id="Scrum" type="radio" name="job" value="Scrum Master">
            <label for="Scrum">Scrum Master</label>
        </div>
        <div>
            <input id="pm" type="radio" name="job" value="Project Manager">
            <label for="pm">Project Manager</label>
        </div>
        <hr>
        <div>
            <label>Choose Book</label>
            <select>
                <optgroup label="PHP">
                    <option value="1">v5.0</option>
                    <option value="2">v7.0</option>
                    <option value="3">v8.0</option>
                </optgroup>

                <optgroup label="Python">
                    <option value="4">v2.0</option>
                    <option value="5">v3.0</option>
                    <option value="6">v3.9</option>
                </optgroup>
            </select>
        </div>
        <hr>
        <h3>brief</h3>
        <textarea name="brief" cols="50" rows="100"
            placeholder="Write Here Why You Want To Learn Programming"></textarea>
        <br>
        <div>
            <input type="reset" value="Empty">
            <input type="submit" value="Send">
        </div>


    </form>
</body>
```

===== Week2/Assignment(31-34)1.html =====

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="descripion" content="input types" />
    <title>input types</title>
</head>

<body>
    <form novalidate target="_blank">
        <div>
            <lable>URL</lable>
            <br>
            <input type="url" required>
        </div>
        <br>
        <div>
            <lable>Search</lable>
            <br>
            <input type="search" placeholder="Enter A Search Word" autofocus>
        </div>
        <br>
        <div>
            <lable>File</lable>
            <br>
            <input type="file">
        </div>
        <br>
        <input type="reset" value="Empty">
        <input type="submit" value="Save">
    </form>
</body>
```

===== Week2/Assignment(31-34)2.html =====

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="descripion" content="input types" />
    <title>input types</title>
</head>

<body>
    <form novalidate target="_blank">
        <div>
            <lable>URL</lable>
            <br>
            <input type="url" required>
        </div>
        <br>
        <div>
            <lable>Search</lable>
            <br>
            <input type="search" placeholder="Enter A Search Word" autofocus>
        </div>
        <br>
        <div>
            <lable>File</lable>
            <br>
            <input type="file">
        </div>
        <br>
        <div><input type="date" value="1982-10-25"></div>
        <br>
        <div><input type="month" value="1982-10" ></div>
        <br>
        <input type="reset" value="Empty">
        <input type="submit" value="Save">
    </form>
</body>
```

===== Week2/Assignment(31-34)3.html =====

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="descripion" content="input types" />
    <title>pre-order format</title>
</head>

<body>
    <p>Hello Line One</p>
    <p>Hello Line Two</p>
    <p>Hello Line Three</p>
    <blockquote>Hello Line Four</blockquote>
</body>
```

===== Week2/Assignment(31-34)4.html =====

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="descripion" content="input types" />
    <title>pre-order format</title>
</head>

<body>
    <iframe src="https://elzero.org/" width="100%" height="400 px"></iframe>
</body>
```

===== Week2/Assignment(35-37)2.html =====

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="descripion" content="input types" />
    <title>pre-order format</title>
</head>

<body>
    <div class="choose-skill" role="radiogroup" aria-label="Choose a Skill">

        <div class="skill" role="radio" tabindex="0" aria-checked="false" id="skill-python">
            Python
        </div>
        <label for="skill-python">Skill One</label>

        <div class="skill" role="radio" tabindex="-1" aria-checked="false" id="skill-php">
            PHP
        </div>
        <label for="skill-php">Skill Two</label>

        <div class="skill" role="radio" tabindex="-1" aria-checked="false" id="skill-js">
            JavaScript
        </div>
        <label for="skill-js">Skill Three</label>

    </div>
</body>
```
