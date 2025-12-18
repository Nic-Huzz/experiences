# Testimonials Showcase Component

A reusable section for displaying product showcases with builder testimonials. Used on the BuildWithAI landing page.

## Preview

The component displays product cards in a 2-column grid with:
- Product screenshot
- Product name & description
- Builder testimonial quote
- Builder avatar (initials), name, and title

---

## Usage

### React/JSX Implementation

```jsx
<section className="py-16 px-4 bg-warm-gray">
  <div className="max-w-5xl mx-auto">
    <h3 className="text-3xl font-extrabold text-dark text-center mb-4">
      Built With This Program
    </h3>
    <p className="text-text-gray text-center mb-12">
      Real products shipped by real builders — none of them had coding experience before starting.
    </p>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {products.map((product, i) => (
        <div key={i} className="card overflow-hidden">
          {/* Screenshot */}
          <div className="aspect-video bg-gray-100 -mx-6 -mt-6 mb-4 overflow-hidden border-b border-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h4 className="font-bold text-dark mb-1">{product.name}</h4>
          <p className="text-text-gray text-sm mb-3">{product.description}</p>
          <div className="border-t border-gray-100 pt-3 mt-3">
            <p className="text-text-gray text-sm italic mb-3">"{product.testimonial}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-primary to-purple-light rounded-full flex items-center justify-center text-white font-bold text-sm">
                {product.builderInitials}
              </div>
              <div>
                <p className="text-sm font-medium text-dark">{product.builderName}</p>
                <p className="text-xs text-purple-primary">{product.builderTitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## Data Structure

```typescript
interface ProductShowcase {
  name: string;           // Product name
  description: string;    // Short description of the product
  builderName: string;    // Name of the person who built it
  builderTitle: string;   // Their role/title (e.g., "Founder", "Small Business Owner")
  builderInitials: string; // Initials for the avatar (e.g., "S", "T")
  testimonial: string;    // Quote from the builder
  image: string;          // Path to product screenshot
}
```

### Example Data

```javascript
const products = [
  {
    name: 'Build Your Bottles',
    description: 'A custom water bottle e-commerce configurator with real-time pricing.',
    builderName: 'Sydney',
    builderTitle: 'Founder',
    builderInitials: 'S',
    testimonial: "It's hard to believe but I legitimately built something in 5 hours that I thought would take over a year.",
    image: '/buildwaterbottle.jpg',
  },
  {
    name: 'Gardening Portal',
    description: "A portal for a landscaping business to track all client's gardens.",
    builderName: 'Tim',
    builderTitle: 'Small Business Owner',
    builderInitials: 'T',
    testimonial: "My mind is exploding with opportunities and possibilities now. What this has made possible is crazy.",
    image: '/Gardeningportal.png',
  },
];
```

---

## Required CSS Classes

These Tailwind classes are used. If not using Tailwind, here are the CSS equivalents:

### `.card` class
```css
.card {
  background: white;
  border-radius: 1rem;        /* rounded-2xl */
  padding: 1.5rem;            /* p-6 */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### Color Variables
```css
:root {
  --purple-primary: #5e17eb;
  --purple-light: #8b5cf6;
  --text-dark: #212529;
  --text-gray: #78716c;
  --warm-gray: #f8f9fa;
}
```

### Gradient Avatar
```css
.avatar {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to bottom right, #5e17eb, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
}
```

---

## Standalone HTML Version

```html
<section style="padding: 4rem 1rem; background: #f8f9fa;">
  <div style="max-width: 64rem; margin: 0 auto;">
    <h3 style="font-size: 1.875rem; font-weight: 800; color: #212529; text-align: center; margin-bottom: 1rem;">
      Built With This Program
    </h3>
    <p style="color: #78716c; text-align: center; margin-bottom: 3rem;">
      Real products shipped by real builders — none of them had coding experience before starting.
    </p>

    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; max-width: 56rem; margin: 0 auto;">

      <!-- Card 1 -->
      <div style="background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); overflow: hidden;">
        <div style="aspect-ratio: 16/9; background: #f3f4f6; margin: -1.5rem -1.5rem 1rem -1.5rem; border-bottom: 1px solid #e5e7eb; overflow: hidden;">
          <img src="/buildwaterbottle.jpg" alt="Build Your Bottles" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
        </div>
        <h4 style="font-weight: bold; color: #212529; margin-bottom: 0.25rem;">Build Your Bottles</h4>
        <p style="color: #78716c; font-size: 0.875rem; margin-bottom: 0.75rem;">A custom water bottle e-commerce configurator with real-time pricing.</p>
        <div style="border-top: 1px solid #e5e7eb; padding-top: 0.75rem; margin-top: 0.75rem;">
          <p style="color: #78716c; font-size: 0.875rem; font-style: italic; margin-bottom: 0.75rem;">"It's hard to believe but I legitimately built something in 5 hours that I thought would take over a year."</p>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 2.5rem; height: 2.5rem; background: linear-gradient(to bottom right, #5e17eb, #8b5cf6); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">S</div>
            <div>
              <p style="font-size: 0.875rem; font-weight: 500; color: #212529;">Sydney</p>
              <p style="font-size: 0.75rem; color: #5e17eb;">Founder</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div style="background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); overflow: hidden;">
        <div style="aspect-ratio: 16/9; background: #f3f4f6; margin: -1.5rem -1.5rem 1rem -1.5rem; border-bottom: 1px solid #e5e7eb; overflow: hidden;">
          <img src="/Gardeningportal.png" alt="Gardening Portal" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
        </div>
        <h4 style="font-weight: bold; color: #212529; margin-bottom: 0.25rem;">Gardening Portal</h4>
        <p style="color: #78716c; font-size: 0.875rem; margin-bottom: 0.75rem;">A portal for a landscaping business to track all client's gardens.</p>
        <div style="border-top: 1px solid #e5e7eb; padding-top: 0.75rem; margin-top: 0.75rem;">
          <p style="color: #78716c; font-size: 0.875rem; font-style: italic; margin-bottom: 0.75rem;">"My mind is exploding with opportunities and possibilities now. What this has made possible is crazy."</p>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 2.5rem; height: 2.5rem; background: linear-gradient(to bottom right, #5e17eb, #8b5cf6); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.875rem;">T</div>
            <div>
              <p style="font-size: 0.875rem; font-weight: 500; color: #212529;">Tim</p>
              <p style="font-size: 0.75rem; color: #5e17eb;">Small Business Owner</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
```

---

## Image Requirements

- **Aspect Ratio:** 16:9 (landscape)
- **Recommended Size:** 800x450px or larger
- **Object Position:** `object-top` (shows top of screenshot)
- **Supported Formats:** JPG, PNG, WebP

---

## Responsive Behavior

- **Desktop (md+):** 2-column grid
- **Mobile:** Single column stack

The grid uses `md:grid-cols-2` which switches from 1 to 2 columns at 768px viewport width.

---

## Customization

### Change Colors
Replace the gradient colors in the avatar:
```jsx
// From purple gradient
bg-gradient-to-br from-purple-primary to-purple-light

// To blue gradient
bg-gradient-to-br from-blue-500 to-blue-400

// To green gradient
bg-gradient-to-br from-emerald-500 to-emerald-400
```

### Add More Cards
Simply add more objects to the `products` array. The grid will automatically accommodate them.

### Change Grid Layout
```jsx
// 3 columns on desktop
<div className="grid md:grid-cols-3 gap-8">

// 2 columns on tablet, 3 on desktop
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
```
