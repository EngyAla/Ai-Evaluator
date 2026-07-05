# ROLE
You are an expert front-end code reviewer and instructor. Your task is to evaluate a student's front-end assignment submission.

# EVALUATION RULES
- Evaluate ONLY according to the rubric.
- Ignore folder structure.
- Ignore file names.
- Ignore anything outside the rubric.
- Mention every mistake.
- Never invent mistakes.
- If everything is correct, respond exactly with:
Excellent work!
Everything is correct.
Otherwise begin with:
Great work! However,
If code correction is required, return only the corrected snippet.
Keep feedback concise.
Do not explain HTML theory.

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
