const faqData = [
  {
    id: 1,
    question: "What is Tailwind CSS and why should I use it?",
    answer: `Tailwind CSS is a utility-first CSS framework designed to make styling web interfaces faster and more consistent. 
It allows you to build modern and responsive designs directly in your HTML using predefined utility classes like 
'p-4', 'text-center', or 'bg-blue-500'. This approach eliminates the need to write custom CSS for every component. 
Unlike traditional CSS frameworks that offer pre-built components, Tailwind gives you low-level styling utilities 
that you can combine to create unique, custom designs without fighting against pre-defined styles. 
It also integrates seamlessly with frameworks like React, Vue, and Next.js, and supports features like dark mode, 
responsive breakpoints, and JIT compilation for faster builds.`,
  },
  {
    id: 2,
    question: "How does dark mode work in Tailwind CSS?",
    answer: `Tailwind CSS supports dark mode through a simple configuration in your tailwind.config.js file. 
By default, you can enable it using the 'darkMode' property set to 'media' or 'class'. 
When set to 'media', Tailwind automatically detects the user's system preference for dark mode and applies 
the appropriate styles. When set to 'class', you can manually toggle dark mode by adding or removing a 'dark' 
class on a parent element such as <html> or <body>. 
This gives you more control and allows you to build custom theme switchers in JavaScript or React. 
Tailwind also includes built-in variants like 'dark:bg-gray-800' or 'dark:text-white' that make it easy 
to style components differently in dark mode without duplicating your CSS.`,
  },
  {
    id: 3,
    question:
      "What is the difference between focus and focus-visible?",
    answer: `Both 'focus' and 'focus-visible' are pseudo-class variants used to style elements when they receive focus, 
but they behave differently in terms of accessibility and user interaction. The 'focus' variant applies styles 
whenever an element is focused, whether by clicking with a mouse or navigating with a keyboard. 
The 'focus-visible' variant, however, only applies when the browser determines that the focus should be visible — 
typically when using keyboard navigation (like the Tab key). This helps prevent unwanted focus rings from appearing 
when users click elements with a mouse. In practice, this means you can hide the default focus outline 
with 'focus:outline-none' and then reintroduce a custom ring for accessibility using 
'focus-visible:ring-2 focus-visible:ring-blue-500'.`,
  },
  {
    id: 4,
    question: "How can I optimize my Tailwind CSS build for production?",
    answer: `Optimizing your Tailwind CSS build is essential for performance, especially in production environments. 
Tailwind automatically includes all of its utility classes during development, but that can result in a very large CSS file. 
To fix this, Tailwind’s build process includes a “purge” or “content” option that scans your project files 
(HTML, JS, JSX, etc.) and removes any unused classes. This drastically reduces file size — often from several megabytes 
to under 10KB. Additionally, enabling the JIT (Just-In-Time) mode allows Tailwind to generate only the classes 
you actually use in your project, improving both speed and efficiency. 
You can further enhance optimization by using CSS minification tools like PostCSS and gzip compression 
in your build pipeline.`,
  },
  {
    id: 5,
    question: "Can Tailwind CSS be used with frameworks like React or Next.js?",
    answer: `Absolutely! Tailwind CSS integrates seamlessly with modern frameworks like React, Next.js, Vue, and Svelte. 
For React and Next.js, you simply install Tailwind via npm and configure it in your PostCSS setup. 
You can then use Tailwind classes directly inside JSX elements to style components without writing separate CSS files. 
For example, you can write: <button className="px-4 py-2 bg-blue-500 text-white rounded">Click me</button>. 
Tailwind also works great with CSS-in-JS libraries and supports tree-shaking through its content configuration, 
so only the styles you use end up in your final bundle. 
Developers often combine Tailwind with component libraries like Headless UI to build fully accessible, 
themeable UIs with minimal effort.`,
  },
  {
    id: 6,
    question:
      "What are some best practices for using Tailwind CSS?",
    answer: `When working on large-scale applications with Tailwind CSS, organization and maintainability become essential. 
A good practice is to use Tailwind’s @apply directive in combination with component-based architecture to reuse 
common style patterns. For instance, you can define custom utility classes in your global CSS file to standardize 
button styles or input fields across your app. Another best practice is to leverage Tailwind’s configuration file 
to define a consistent design system — including custom colors, fonts, spacing, and breakpoints — so that your 
design remains cohesive as your project grows. Additionally, consider integrating plugins for typography, forms, 
and animations to enhance your workflow. Keeping your component library well-documented and enforcing linting rules 
for class naming can help maintain long-term code quality.`,
  },
  {
    id: 7,
    question:
      "How does Tailwind’s JIT (Just-In-Time) engine improve development?",
    answer: `The Just-In-Time (JIT) engine in Tailwind CSS revolutionizes the way styles are generated. 
Instead of compiling a massive CSS file that includes every possible class, the JIT engine compiles only 
the classes that you actually use in your project — and it does so instantly, as you type. This means faster builds, 
smaller file sizes, and immediate feedback when adding new utility classes. It also unlocks powerful dynamic features 
like arbitrary values (e.g., 'bg-[#1da1f2]' or 'w-[calc(100%-2rem)]') without requiring you to modify your config file. 
Because the JIT engine compiles on-demand, it allows for near-instant design iteration, making it especially 
useful during prototyping or rapid UI development. In short, JIT mode brings both flexibility and performance, 
turning Tailwind into a much more dynamic and efficient framework for modern development.`,
  },
];

export default faqData;
