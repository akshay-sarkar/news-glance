# NewsCarousel Component

A full-width carousel component that displays the top 5 news articles with auto-play functionality, touch/swipe support, and responsive design.

## Features

### 🎠 **Carousel Functionality**
- Displays first 5 articles from the news feed
- Auto-play with 5-second intervals
- Smooth transitions between slides
- Pause auto-play on hover

### 📱 **Mobile Support**
- Touch/swipe gestures for navigation
- Responsive design for all screen sizes
- Mobile-optimized text sizes and layouts
- Hidden navigation arrows on very small screens

### 🎨 **Visual Design**
- Full-width display with 400px height
- Gradient overlay for text readability
- Smooth hover effects and transitions
- Dark/light mode support
- Professional shadow effects

### 🧭 **Navigation**
- Left/right arrow buttons
- Dot indicators at the bottom
- Touch/swipe support for mobile
- Keyboard navigation (future enhancement)

### 📤 **Sharing**
- Share button on each slide
- Native sharing API for mobile devices
- Social media sharing options (Twitter, Facebook)
- Copy link functionality

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `articles` | Array | Yes | Array of article objects to display |
| `classes` | Object | Yes | Material-UI styles object |

## Article Object Structure

Each article in the `articles` array should have:

```javascript
{
  title: string,           // Article headline
  description: string,     // Article summary
  url: string,            // Article URL
  urlToImage: string,     // Image URL (optional)
  author: string,         // Author name (optional)
  publishedAt: string,    // Publication date (ISO format)
}
```

## Usage

```jsx
import NewsCarousel from './NewsCarousel';

// In your component
<NewsCarousel articles={topFiveArticles} />
```

## Responsive Breakpoints

- **Desktop (md+)**: Full features, large text
- **Tablet (sm)**: Reduced text sizes, closer navigation buttons
- **Mobile (xs)**: Hidden description, no navigation arrows, touch-only

## Auto-play Behavior

- Starts automatically when component mounts
- Pauses on mouse hover (desktop)
- Resumes when mouse leaves
- Stops when component unmounts
- 5-second interval between slides

## Touch Gestures

- **Swipe Left**: Next slide
- **Swipe Right**: Previous slide
- **Minimum swipe distance**: 50px
- **Touch feedback**: Immediate response

## Accessibility Features

- Alt text for images
- Semantic HTML structure
- Keyboard navigation support (planned)
- Screen reader friendly
- High contrast text overlays

## Performance Considerations

- Lazy loading for images (future enhancement)
- Optimized re-renders
- Efficient touch event handling
- Memory cleanup on unmount

## Browser Support

- Modern browsers with ES6+ support
- Touch events for mobile devices
- CSS transforms for animations
- Flexbox layout support

## Future Enhancements

1. **Keyboard Navigation**
   - Arrow keys for slide navigation
   - Space bar to pause/resume auto-play

2. **Advanced Features**
   - Lazy loading for images
   - Video support
   - Custom transition effects
   - Thumbnail navigation

3. **Accessibility**
   - ARIA labels and roles
   - Focus management
   - Screen reader announcements

4. **Performance**
   - Virtual scrolling for large datasets
   - Image optimization
   - Preloading next/previous slides

## Styling Customization

The component uses Material-UI's `withStyles` HOC. You can customize:

- Colors and themes
- Transition timing
- Breakpoint behavior
- Overlay gradients
- Button styles

## Integration with Headlines Component

The carousel is integrated into the Headlines component:

1. First 5 articles → NewsCarousel
2. Remaining articles → Regular NewsCard grid
3. "More Stories" section header
4. Responsive grid layout below carousel

This creates a modern news website layout with featured stories at the top and additional content below.
