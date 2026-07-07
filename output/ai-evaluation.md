Great work! However,

In Week2/Assignment(19-23)4.html:
- The video element contains only one subtitle track, but two are expected.

In Week2/Assignment(24-27)1.html:
- The `lable` element for Username has a typo.
- The `labl` element for Mobile has a typo.
- The input for Mobile should be of type `tel`, not `number`.
- The `lable` element for Email has a typo.
- The `lable` element for Subject has a typo.

In Week2/Assignment(24-27)2.html:
- The `lable` element for Range has a typo.
- The `value` attribute for the range input is `0`, but `400` is expected.
  ```html
  <input type="range" 
         value="400" 
         min="0" 
         max="400" 
         step="50" >
  ```

In Week2/Assignment(28-30)2.html:
- The label for the "Front-End Developer" radio button uses the `id` attribute instead of `for`.
  ```html
  <label for="front">Front-End Developer</label>
  ```

In Week2/Assignment(28-30)3.html:
- The default text for the `textarea` is set using the `placeholder` attribute, but it should be placed inside the `textarea` element.
  ```html
  <textarea name="brief" cols="50" rows="100">Write Here Why You Want To Learn Programming</textarea>
  ```

In Week2/Assignment(31-34)1.html:
- The `lable` element for URL has a typo.
- The `lable` element for Search has a typo.
- The `lable` element for File has a typo.

In Week2/Assignment(31-34)2.html:
- The `lable` element for URL has a typo.
- The `lable` element for Search has a typo.
- The `lable` element for File has a typo.

In Week2/Assignment(31-34)3.html:
- The four lines of text are not placed inside a single `<pre>` element.
  ```html
  <pre>Hello Line One
  Hello Line Two
  Hello Line Three
  Hello Line Four</pre>
  ```

In Week2/Assignment(31-34)4.html:
- The `height` attribute of the `iframe` should be `400`, not `400 px`.
  ```html
  <iframe src="https://elzero.org/" width="100%" height="400"></iframe>
  ```

In Week2/Assignment(35-37)2.html:
- The `tabindex` attribute for "PHP" and "JavaScript" skills is `-1`, but `0` is expected for every selectable skill to be keyboard accessible.
  ```html
  <div class="skill" role="radio" tabindex="0" aria-checked="false" id="skill-php">
      PHP
  </div>
  <div class="skill" role="radio" tabindex="0" aria-checked="false" id="skill-js">
      JavaScript
  </div>
  ```
- The `aria-labelledby` attribute is missing from the `div` elements with `role="radio"`.