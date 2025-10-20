# Profile Card Multi-Page Application

A responsive, accessible multi-page web application built with vanilla HTML, CSS, and JavaScript as part of the Frontend Wizards internship program (Stage 0 & Stage 1).

![Profile Card Preview](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Overview

This project implements a complete multi-page application featuring a profile card, contact form with validation, and reflective about page. Built with semantic HTML, modern CSS, and accessibility-first design principles. Every element includes `data-testid` attributes for automated testing.

## ✨ Features

### Stage 0 - Profile Card

- **Semantic HTML** - Uses proper HTML5 semantic tags (`<article>`, `<header>`, `<figure>`, `<nav>`, `<section>`)
- **Fully Responsive** - Adapts seamlessly to mobile, tablet, and desktop screens
- **Real-time Clock** - Displays current time in milliseconds using `Date.now()`
- **Social Links** - Opens in new tabs with proper security attributes

### Stage 1 - New Pages

- **Contact Us Page** - Functional contact form with comprehensive validation
  - Real-time validation on field blur
  - Email format validation
  - Minimum character requirements
  - Success/error states
  - Keyboard accessible
- **About Me Page** - Reflective content showcasing personal journey
  - Bio section
  - Program goals
  - Areas of growth
  - Future note
  - Additional thoughts

### Universal Features

- **Navigation System** - Seamless navigation between all pages
- **Accessible** - Keyboard navigable with visible focus states and ARIA labels
- **Test-Ready** - All elements have `data-testid` attributes for automated testing
- **Consistent Design** - Unified dark theme across all pages

## 🎯 Task Requirements Met

### Stage 0 - Profile Card

✅ Profile card root container - `data-testid="test-profile-card"`  
✅ Name (plain text) - `data-testid="test-user-name"`  
✅ Short biography - `data-testid="test-user-bio"`  
✅ Current time (milliseconds) - `data-testid="test-user-time"`  
✅ Avatar image - `data-testid="test-user-avatar"`  
✅ Social links list - `data-testid="test-user-social-links"`  
✅ Individual social links - `data-testid="test-user-social-{network}"`  
✅ Hobbies list - `data-testid="test-user-hobbies"`  
✅ Dislikes list - `data-testid="test-user-dislikes"`

### Stage 1 - Contact Us Page

✅ Full name field - `data-testid="test-contact-name"`  
✅ Email field - `data-testid="test-contact-email"`  
✅ Subject field - `data-testid="test-contact-subject"`  
✅ Message field - `data-testid="test-contact-message"`  
✅ Submit button - `data-testid="test-contact-submit"`  
✅ Error messages - `data-testid="test-contact-error-{field}"`  
✅ Success message - `data-testid="test-contact-success"`  
✅ All fields required validation  
✅ Email format validation  
✅ Message minimum 10 characters  
✅ Labels linked with `for` attribute  
✅ Error messages tied with `aria-describedby`

### Stage 1 - About Me Page

✅ About page container - `data-testid="test-about-page"`  
✅ Bio section - `data-testid="test-about-bio"`  
✅ Goals section - `data-testid="test-about-goals"`  
✅ Low confidence areas - `data-testid="test-about-confidence"`  
✅ Future note section - `data-testid="test-about-future-note"`  
✅ Extra thoughts section - `data-testid="test-about-extra"`  
✅ Semantic HTML structure (`<main>`, `<section>`)  
✅ Proper heading hierarchy

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools or dependencies required!

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Baoku26/profile-card.git
   cd profile-card
   ```

2. **Open the application**

   Start with the profile card page by opening `profile-card.html` in your web browser:

   **Option A: Double-click**

   - Navigate to the project folder
   - Double-click on `profile-card.html`
   - Use the navigation menu to explore other pages

   **Option B: Using command line**

   ```bash
   # On macOS
   open profile-card.html

   # On Linux
   xdg-open profile-card.html

   # On Windows
   start profile-card.html
   ```

   **Option C: Using a local server (recommended)**

   ```bash
   # If you have Python installed
   python -m http.server 8000
   # Then open http://localhost:8000/profile-card.html

   # Or use VS Code Live Server extension
   # Right-click on profile-card.html and select "Open with Live Server"
   ```

3. **Navigate the application**
   - **Profile Page** (`profile-card.html`) - View the main profile card
   - **Contact Page** (`contact.html`) - Send a message via the contact form
   - **About Page** (`about.html`) - Read reflections and personal journey

That's it! No npm install, no build process, no configuration needed. 🎉

## 📁 Project Structure

```
profile-card/
│
├── profile-card.html          # Main profile card page (Stage 0)
├── contact.html               # Contact form page (Stage 1)
├── about.html                 # About me page (Stage 1)
└── README.md                  # Project documentation
```

## 🎨 Pages Overview

### 1. Profile Card (`profile-card.html`)

The main landing page featuring:

- Professional profile photo
- Name with verification badge
- Short bio
- Follower stats
- Social media links
- Hobbies and dislikes lists
- Real-time clock (milliseconds)

### 2. Contact Us (`contact.html`)

Interactive contact form with:

- Full name input
- Email input with format validation
- Subject line
- Message textarea (minimum 10 characters)
- Real-time validation on blur
- Success message on valid submission
- Comprehensive error messages

### 3. About Me (`about.html`)

Reflective content page containing:

- Personal story and background
- Program goals and objectives
- Areas of low confidence
- Note to future self
- Additional thoughts and reflections

## 🎨 Customization

### Change Profile Information

Open `profile-card.html` and modify the following sections:

**Name:**

```html
<h2 data-testid="test-user-name">
  Your Name Here
  <span class="verified-badge" aria-label="Verified">✓</span>
</h2>
```

**Bio:**

```html
<p data-testid="test-user-bio">Your bio description here.</p>
```

**Avatar:**

```html
<img
  src="your-image-url-here.jpg"
  alt="Your name profile photo"
  data-testid="test-user-avatar"
/>
```

**Hobbies:**

```html
<ul data-testid="test-user-hobbies">
  <li>Your Hobby 1</li>
  <li>Your Hobby 2</li>
  <!-- Add more hobbies -->
</ul>
```

**Social Links:**

```html
<a
  href="https://twitter.com/yourhandle"
  target="_blank"
  rel="noopener noreferrer"
  data-testid="test-user-social-twitter"
></a>
```

### Change Colors

Modify the CSS variables in the `<style>` section:

```css
/* Background colors */
body {
  background: #1a1a1a; /* Dark background */
}

article[data-testid="test-profile-card"] {
  background: #2a2a2a; /* Card background */
}

/* Accent color */
.verified-badge {
  background: #00c853; /* Green verified badge */
}
```

## 🧪 Testing

All interactive elements can be tested using the `data-testid` attributes:

### Profile Card Page

```javascript
const card = document.querySelector('[data-testid="test-profile-card"]');
const name = document.querySelector('[data-testid="test-user-name"]');
const bio = document.querySelector('[data-testid="test-user-bio"]');
const time = document.querySelector('[data-testid="test-user-time"]');
const avatar = document.querySelector('[data-testid="test-user-avatar"]');
const socialLinks = document.querySelector(
  '[data-testid="test-user-social-links"]'
);
const hobbies = document.querySelector('[data-testid="test-user-hobbies"]');
const dislikes = document.querySelector('[data-testid="test-user-dislikes"]');
```

### Contact Page

```javascript
const nameInput = document.querySelector('[data-testid="test-contact-name"]');
const emailInput = document.querySelector('[data-testid="test-contact-email"]');
const subjectInput = document.querySelector(
  '[data-testid="test-contact-subject"]'
);
const messageInput = document.querySelector(
  '[data-testid="test-contact-message"]'
);
const submitButton = document.querySelector(
  '[data-testid="test-contact-submit"]'
);
const successMessage = document.querySelector(
  '[data-testid="test-contact-success"]'
);
const emailError = document.querySelector(
  '[data-testid="test-contact-error-email"]'
);
```

### About Page

```javascript
const aboutPage = document.querySelector('[data-testid="test-about-page"]');
const bio = document.querySelector('[data-testid="test-about-bio"]');
const goals = document.querySelector('[data-testid="test-about-goals"]');
const confidence = document.querySelector(
  '[data-testid="test-about-confidence"]'
);
const futureNote = document.querySelector(
  '[data-testid="test-about-future-note"]'
);
const extra = document.querySelector('[data-testid="test-about-extra"]');
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px - Stacked layout with smaller avatar
- **Tablet**: 481px - 767px - Enhanced spacing
- **Desktop**: > 768px - Full layout with maximum width

## ✅ Form Validation Rules

The contact form includes comprehensive client-side validation:

1. **All fields are required** - Cannot submit with empty fields
2. **Email validation** - Must match standard email format (name@example.com)
3. **Message length** - Minimum 10 characters required
4. **Real-time feedback** - Validation occurs on field blur
5. **Error messages** - Clear, specific error messages for each field
6. **Success state** - Confirmation message displayed after valid submission
7. **ARIA integration** - Error messages linked to inputs via `aria-describedby`

## ♿ Accessibility Features

- Semantic HTML5 elements throughout all pages
- ARIA labels for all interactive elements
- Complete keyboard navigation support
- Visible focus indicators on all interactive elements
- Alt text for all images
- Proper heading hierarchy (h1 → h2 → h3)
- Color contrast compliance (WCAG AA)
- Form labels linked to inputs with `for` attribute
- Error messages associated with inputs via `aria-describedby`
- `role="alert"` on dynamic error and success messages
- `aria-live="polite"` for success notifications

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox for layout, custom properties
- **Vanilla JavaScript** - Real-time clock functionality
- **No frameworks or libraries** - Pure web technologies

## 📝 Code Quality

- Clean, readable code structure
- Inline comments for clarity
- Follows HTML5 best practices
- Mobile-first responsive design
- Cross-browser compatible

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Sophie Bennett**

- Role: Product Designer
- Focus: Simplicity & Usability

## 🤝 Contributing

This is an internship project, but suggestions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or issues, please open an issue in the repository.

---

**Note**: This project was created as part of the Frontend Wizards internship program (Stage 0 & Stage 1) to demonstrate proficiency in HTML, CSS, JavaScript, form validation, accessibility, responsive design, and semantic markup.
