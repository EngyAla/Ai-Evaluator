Great work! However,

In `week2-main/Lessons 24To27.html`:
- The `<hr>` element is missing after the mobile input.
- The `<hr>` element is missing after the reset button.
- The range input's `min` attribute should be `0`.
- The range input's `max` attribute should be `400`.
- The range input's `step` attribute should be `50`.

```html
        <div>
        <label> Mobile</label>
        <input type="tel"  placeholder="+20100 (234) 123"  name="phone" >
        </div>
        <hr>
        <div>
        <input type="hidden"  value="welcome fans" name="fan" >
        </div>
        <hr>
        <div>
        <input type="reset" value="Empty Form">
        </div>
        <hr>
        <div>
        <input type="submit" value="Send Data" >
        </div>
        <hr>
        <div>
        <label>range</label>
        <input type="range" min="0" max="400" step="50" value="400">
        </div>
```

In `week2-main/Lessons 28To30.html`:
- The username input is missing the `autofocus` attribute.
- The job selection should use radio buttons instead of checkboxes.
- The `textarea` element has a duplicate `name` attribute and the correct name should be `brief`. The default text should be inside the `textarea` element, not in the `placeholder` attribute.

```html
    <div>
        <label for="username">Username</label>
        <input type="text"  id="username" name="username" minlength="5" maxlength="20" required autofocus>
    </div>
```
```html
   <div>
    <input type="radio" checked id="ScrumMaster" name="job">
    <label for="ScrumMaster">  Scrum Master</label>
   </div>
   
   <div>
    <input type="radio" id="ProjectManager" name="job">
    <label for="ProjectManager">  Project Manager </label>
   </div>
```
```html
   <textarea name="brief" id="" placeholder="" cols="44" rows="22">Write Here Why You Want To Learn Programming</textarea>
```

In `week2-main/Lessons31to34.html`:
- The search input's `placeholder` attribute has a leading space.
- The URL input is missing the `required` attribute.
- The iframe element is commented out and needs to be active.

```html
            <input type="search"  id="Search"  placeholder="Enter A Search Word" autofocus name="Search">
```
```html
            <input type="url" id="url" name="url" required>
```
```html
    <iframe src="https://elzero.org" width="100%" height="400"></iframe>
```

In `week2-main/Lessons35to37.html`:
- The accessibility range text should be "10 to 20".
- The ARIA stands for text should be "Accessible Rich Internet Applications".
- The `tabindex` attribute for the JavaScript skill is `o` (lowercase o) instead of `0` (zero).

```html
    10 to 20
    <div tabindex="0"></div>
    ARIA==>Accessible Rich Internet Applications
```
```html
  <div 
    class="skill" role="radio" tabindex="0" aria-checked="true"  aria-labelledby="skill3-label">
    JavaScript
  </div>
```