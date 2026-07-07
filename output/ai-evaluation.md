Great work! However,

In Lessons 24To27.html:
*   The layout between the Mobile input and the Hidden input is missing an `<hr>` separator.
*   The layout between the Reset button and the Submit button is missing an `<hr>` separator.
*   The `min` attribute of the range input should be `0`, the `max` attribute should be `400`, and the `step` attribute should be `50`.

In Lessons 28To30.html:
*   The Username input is missing the `autofocus` attribute.
*   The `id` attributes for the "Business Analyst" and "Back-End Develope" skills contain leading spaces. Please ensure `id` attributes are unique and do not contain spaces.
*   The `for` attributes in the labels for the "Business Analyst" and "Back-End Develope" skills contain leading spaces.
*   The "Job" selection uses checkboxes (`<input type="checkbox">`) instead of the required radio buttons (`<input type="radio">`).
*   The `id` attributes for the "Scrum Master" and "Project Manager" jobs contain leading spaces.
*   The `for` attributes in the labels for the "Scrum Master" and "Project Manager" jobs contain leading spaces.
*   The `<textarea>` element has duplicate `name` attributes and the `name` attribute should be `brief` instead of `breif`.
*   The text "Write Here Why You Want To Learn Programming" should be placed directly inside the `<textarea>` element, not as a `placeholder` attribute.

In Lessons31to34.html:
*   The placeholder text for the search input is " Enter A Search Word". It should be "Enter A Search Word" (without the leading space).
*   The URL input is missing the `required` attribute.
*   The `<iframe>` element is commented out and should be present in the document.

In Lessons35to37.html:
*   The accessibility range text is "10 To 20" but should be "10 to 20" (case sensitive).
*   The `tabindex` attribute for the "JavaScript" skill is `tabindex="o"` (lowercase 'o') instead of `tabindex="0"` (zero).
*   In the `radiogroup`, only one `role="radio"` element should have `aria-checked="true"`. Currently, all three are checked.