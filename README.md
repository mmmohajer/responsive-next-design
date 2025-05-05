# 🪝 useDivWidth – A Simple Custom React Hook to Track Div Width

Do you want to make truly responsive React components?  
**100% use this custom hook** to track the width of any container dynamically – no external library required!

<!-- https://user-images.githubusercontent.com/your-video-preview.mp4 _(include demo link if uploading a video later)_ -->

## 🚀 What Is This?

This is a minimal **Next.js** project showcasing a powerful custom React hook: `useDivWidth`.

With this hook, you can:

- Track the width of any div using a `ref`
- Update the width on window resize
- Build responsive layouts with ease

## 📦 Project Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── index.js         # Demo page
│   │   └── hooks/
│   │       └── useDivWidth.js # Custom hook definition
├── package.json
└── .gitignore
```

## 🧠 How It Works

The `useDivWidth` hook uses:

- `useRef` to reference the DOM node
- `useState` to store the width
- `useEffect` to update on mount and on window resize

### Example Usage

```js
import useDivWidth from "./hooks/useDivWidth";

const Page = () => {
  const { containerRef, width } = useDivWidth();
  return <div ref={containerRef}>The container width is {width}px</div>;
};
```

## 🛠 Installation & Running

1. Clone this repo:

```bash
git clone https://github.com/mmmohajer/responsive-next-design.git
```

2. Install dependencies:

```bash
cd client
npm install
```

3. Run the project:

```bash
npm run dev
```

## 💡 Why Use It?

- Perfect for responsive design logic (e.g., switch layout based on container width)
- Avoid relying only on media queries
- Clean, reusable, and lightweight

<!-- ## 📹 Video Explanation

Watch the short 1-minute demo where I explain why **this hook is a must-have** in your toolkit.

_(You can embed a YouTube or Loom link here later)_ -->

---

🎓 Brought to you by [**Tech Tips By Moh**](https://tipsbymoh.tech) — practical coding insights, one tip at a time.
