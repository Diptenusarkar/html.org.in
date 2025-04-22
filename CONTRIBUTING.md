# How can you contribute?

Thank you for your interest in contributing to this project! This guide will help you understand how to contribute effectively to our HTML-based documentation.

## Contribution Guidelines

### 1. What You Can Add
- **New HTML Pages:** Create new pages for topics or features.
- **Enhance Existing Pages:** Improve clarity, fix typos, or add examples.
- **Content Elements:**
  - Headers (`<h1>`, `<h2>`, etc.)
  - Paragraphs (`<p>`)
  - Lists (`<ul>`, `<ol>`, `<li>`)
  - Horizontal lines (`<hr>`)
  - Code examples (`<pre><code>`)
  - Links (`<a href="...">`)
  - Images (`<img>`)
  - Tables (`<table>`, `<tr>`, `<th>`, `<td>`)

### 2. HTML Style and Structure
- Use semantic HTML tags.
- Maintain consistent indentation and formatting.
- Add comments (`<!-- ... -->`) for complex sections.
- Avoid inline styles; use classes and external CSS.
- Test your changes in a browser.

### 3. Example HTML Snippets

```html
<!-- Header -->
<h2>Section Title</h2>

<!-- Paragraph -->
<p>This is a paragraph explaining a concept or example.</p>

<!-- Horizontal line -->
<hr>

<!-- List -->
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>

<!-- Code block -->
<pre><code>&lt;div&gt;Sample code&lt;/div&gt;</code></pre>

<!-- Link -->
<a href="https://example.com">Visit Example</a>

<!-- Image -->
<img src="/images/example.png" alt="Example image">
```

### 4. Adding Links to the Aside Slider (Navigation)
To add a new link to the aside slider:
1. Open the relevant HTML file (e.g., `index.html`) in the `html/` folder.
2. Locate the `<nav>` element for the aside slider.
3. Add a new navigation item:

```html
<sl-tree-item id="unique-id" style="--indent-level: 0" class="leaf">
  <a href="/html/your-new-page/">Your New Page</a>
</sl-tree-item>
```

4. Save the file and verify the link in your browser.

> **Tip:** Use a unique `id` and follow existing conventions.

### 5. Submitting Your Contribution
1. Edit or add HTML files in the `html/` folder.
2. Test your changes in a browser.
3. Ensure your code is clean and well-formatted.
4. Submit your changes for review (via pull request or your team's process).

### 6. Communication & Feedback
- Be respectful and constructive in discussions.
- Respond to feedback and requested changes promptly.

We appreciate your help in improving this project!
