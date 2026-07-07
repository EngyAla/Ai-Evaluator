Great work! However,

In `24-27task.html`:
*   The Mobile input's `type` attribute is incorrect.
    ```html
    <input type="tel" name="mobile" placeholder="mobile">
    ```
*   The range input's `min`, `max`, and `value` attributes are incorrect (`start` is not a valid attribute for `type="range"`).
    ```html
    <input type="range" min="0" max="400" step="50" value="400">
    ```

In `28-30task.html`:
*   The Username input uses `min` and `max` attributes instead of `minlength` and `maxlength`.
    ```html
    <input type="text" autofocus minlength="5" maxlength="20" name="username" required>
    ```
*   The `name` attribute for the skills checkboxes should be `skills` (plural).
    ```html
    <input type="checkbox" name="skills" id="ps" value="Problem Solving" checked>
    ```
*   The `for` attribute in your labels for both skills checkboxes and job radio buttons incorrectly includes `#`.
    ```html
    <label for="ps">Problem Solving</label>
    ```
*   The `textarea`'s default content should be placed between the opening and closing tags, not in the `placeholder` attribute.
    ```html
    <textarea placeholder="Write here Why you Want To Learn Programming" cols="41" rows="20" name="brief">Write Here Why You Want To Learn Programming</textarea>
    ```

In `31-34task.html`:
*   The `form` element is missing the `target="_blank"` attribute.
    ```html
    <form novalidate target="_blank">
    ```
*   The `iframe`'s `height` attribute should be a unitless number (e.g., `400`), not `400px`.
    ```html
    <iframe src="https://elzero.org/" width="100%" height="400"></iframe>
    ```

In `35-37task.html`:
*   The `tabindex` attribute for the second and third skill `div`s with `role="radio"` should be `0` to make them keyboard accessible as per the assignment.
    ```html
    <div id="skill2" class="skill" role="radio" aria-checked="false" tabindex="0" aria-labelledby="label2">
        PHP
    </div>
    <div id="skill3" class="skill" role="radio" aria-checked="false" tabindex="0" aria-labelledby="label3">
        JavaScript
    </div>
    ```