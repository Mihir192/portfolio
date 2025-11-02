# How to Add Your Photo

## Steps:

1. **Add your photo file:**
   - Place your portrait photo in the same folder as `index.html`
   - Recommended name: `your-photo.jpg` (or `.png`, `.webp`)
   - Ideal size: At least 600x600 pixels (square/portrait orientation works best)

2. **Update the image path in `index.html`:**
   - Find line 52: `<img src="your-photo.jpg" alt="Tech Professional" class="hero-image" id="heroImage">`
   - Replace `your-photo.jpg` with your actual photo filename
   
   For example, if your photo is named `profile.jpg`:
   ```html
   <img src="profile.jpg" alt="Tech Professional" class="hero-image" id="heroImage">
   ```

3. **Photo Tips:**
   - Square or portrait orientation looks best (not landscape)
   - Make sure the photo is well-lit and professional
   - The photo will be automatically cropped to a circle
   - If the photo doesn't load, a placeholder icon will appear

## What's Included:

Your photo will have:
- ✅ Circular frame with animated rotating border
- ✅ Floating animation effect
- ✅ Glowing background effect
- ✅ Hover zoom effect
- ✅ Dark mode compatible styling

## Example:
```
your-portfolio-folder/
├── index.html
├── styles.css
├── script.js
└── your-photo.jpg  ← Your photo here
```

That's it! Your photo will appear in the hero section with all the cool animations!
