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
===== html24.html =====

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html24</title>
</head>

<body>
    <form action="test,py" method="get">
        <div class="user"> <label for="user-name">Username</label><br>
            <input type="text" name="username" placeholder="enter username" id="user-name"></div>
        <hr>
        <div class="pass"><label for="password">password</label><br>
            <input type="password" name="pass" placeholder="enter password" id="password"></div>
        <hr>
        <div class="Email"><label for="email">email</label><br>
            <input required type="email" name="emaill" placeholder="enter your email" id="email"></div>
        <hr>
        <div class="Sub"><label for="subject">subject</label><br>
            <input type="text" name="sub" placeholder="enter subject" id="subject"></div>
        <hR>
        <div class="mbl">
            <LABel for="MOBILEE">MOBILE</LABel><br>
            <input type="tel" NAME="NUM" placeholder="enter your MOBILE NUM" id="MOBILEE">
        </div>
        <input type="number" value="256523837" hidden>
        <hr>
        <input type="submit" value="send data">
        <input type="reset" value="empty form">


    </form>
</body>

</html>

</html>
```

===== html25.html =====

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html25</title>
</head>

<body>
    <form action="g.php" method="get">
        <input type="range" step="50" min="100" max="500" value="400">
    </form>
</body>

</html>
```

===== html26.html =====

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html26form</title>
</head>

<body>
    <form action="p.php" method="get ">
        <h2>skills</h2>
        <div class="ski1">
            <input type="checkbox" checked id="Problem-solving" name="skill" value="Problem solving">
            <label for="Problem-solving">Problem-solving </label>
        </div>
        <div class="ski2">
            <input type="checkbox" id="logical-thinking" name="skill" value="logical-thinking">
            <label for="logical-thinking">logical thinking </label>
        </div>
        <div class="ski3">
            <input type="checkbox" id="advanced-saerch" name="skill" value="advanced-saerch">
            <label for="advanced-saerch">advanced saerching </label>
        </div>
        <div class="ski4">
            <input type="checkbox" id="analysis" name="skill" value="analysis">
            <label for="analysis">Analysis </label>
        </div>
        <div class="ski5">
            <input type="checkbox" id="plan" name="skill" value="planning">
            <label for="plan">planning </label>
        </div>
        <br>
        <hr>
        <h2>jobs</h2>
        <div class="job1">
            <input type="radio" checked id="front-end" name="job" value="front-end">
            <label for="front-end">front-end </label>
        </div>
        <div class="job2">
            <input type="radio" id="back-end" name="job" value="back-end">
            <label for="back-end">back-end </label>
        </div>
        <div class="job3">
            <input type="radio" id="project-manager" name="job" value="project-manager">
            <label for="project-manager">project-manager</label>
        </div>
        <div class="job4">
            <input type="radio" id="business-analyst" name="job" value="business-analyst">
            <label for="business-analyst">business-analyst</label>
        </div>
        <div class="job5">
            <input type="radio" id="srcum-master" name="job" value="srcum-master">
            <label for="srcum-master">srcum-master</label>
        </div>
        <br>

        <input type="submit">
    </form>
</body>

</html>
```

===== html27.html =====

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>task27 selct text area</title>
</head>

<body>
    <form action="p.php" method="get">
        <label for="ver">Choose Book:</label><select name="version" id="ver">
        <optgroup label="php">
            <option value="v5">v5.0</option>
            <option value="v7">v7.0</option>
            <option value="v8">v8.0</option>
        </optgroup><hr>
          <optgroup label="python">
            <option value="v2">v2.0</option>
            <option value="v3">v3.0</option>
            <option value="v3.9">v3.9</option>
        </optgroup>
    </select>
        <hr>
        <textarea name="breif" id="text" rows="10" cols="50" placeholder="why you want to learn programming?"></textarea>
    </form>


</body>

</html>
```

===== html28,29.html =====

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html28/29</title>
</head>

<body>
    <form action="p.php" method="post" TARGET="_BLANK">
        <div>
            <label for="se">Search</label><br><br>
            <input id="se" autofocus type="search" name="search-val" placeholder="Enter a search word"></div>
        <div><br>
            <label for="up">upload</label><br><br>
            <input id="up" type="file" name="uploadl" value="choose file">
        </div><br>
        <div>
            <label for="url">Url</label><br><br>
            <input id="url" formnovalidate required type="url" name="url" value="">
        </div><br>
        <div>
            <label for="dat">Date</label>
            <input id="dat" type="date" name="date">
        </div><br><br>
        <div>
            <label for="mont">month</label>
            <input id="mont" type="month" name="month">
        </div><br><br>
        <input type="reset" value="empty">
        <input type="submit" value="save">
    </form>
</body>


</html>

```

===== html30.html =====

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML30</title>
</head>

<body>
    <PRE>
         HELLO LINE ONE
         HELLO LINE TWO
         HELLO LINE THREE
             HELLO LINE FOUR
    </PRE>
</body>

</html>
```

===== HTML31.HTML =====

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=HTML31, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <IFRAme src="HTTPS://ELZERO.ORG/" width="100%" height="400PX">

    </IFRAme>
</body>

</html>
```

===== html33last.html =====

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
   
    <title>doc
    </title>
</head>

<body>
    <div class="choose-skill">
  <div class="skill">Python</div>
  <label>Skill One</label>
  <div class="skill">PHP</div>
  <label>Skill Two</label>
  <div class="skill">JavaScript</div>
  <label>Skill Three</label>
</div>

<div class="choose-skill">
  <div role="checkbox" aria-checked="True" class="skill" aria-labeledby="skill1" tabindex="0">Python</div>
  <label for="skill1">Skill One</label>
  <div role="checkbox" aria-checked="False" class="skill" aria-labeledby="skill2" tabindex="0">PHP</div>
  <label for="skill2">Skill Two</label>
  <div role="checkbox" aria-checked="False" class="skill" aria-labeledby="skill3" tabindex="0">JavaScript</div>
  <label for="skill3">Skill Three</label>
</div>

</body>

</html>
```

===== task23/html23.html =====

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>task23 video</title>
</head>

<body>
    <video poster="photo_2026-02-12_16-11-27.jpg" muted autoplay controls width="300px " height="300px">
<source src="video_2026-02-14_13-15-01.mp4" type="video/mp4">
<source src="video_2026-02-14_13-15-01.webm" type="video/webm">
<source src="video_2026-02-14_13-15-01.ogg" type="video/ogg">
this video is not supported 
<track src="arabic.vtt" kind="captions" srclang="arabic" label="arabic" >
<track src="english.vtt" kind="captions" srclang="english" label="english">
    </video>
</body>

</html>
```
