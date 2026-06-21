# Visual Design Guide - CNC Institute Website

## 🎨 Color Palette

### Light Mode
```
Primary Blue:      #0066cc (Professional, Trustworthy)
Secondary Cyan:    #00b4d8 (Modern, Fresh)
Background:        #ffffff (Clean, Professional)
Text Dark:         #333333 (Readable, Accessible)
Text Light:        #666666 (Secondary text)
Card Background:   #f5f7fa (Light, Subtle)
Border:            #e0e0e0 (Soft definition)
Accent Red:        #ff6b6b (Alerts, Emphasis)
```

### Dark Mode
```
Primary Blue:      #0088ff (Bright, Energetic)
Secondary Cyan:    #00d4ff (Vibrant, Modern)
Background:        #0f1419 (Dark Navy, Easy on eyes)
Text Light:        #ffffff (Clear, High contrast)
Text Dark:         #b0b0b0 (Secondary text)
Card Background:   #1a1f26 (Slightly lighter dark)
Border:            #2a3036 (Subtle definition)
Accent Red:        #ff6b6b (Alerts, Emphasis)
```

---

## 📐 Layout & Spacing System

### Base Unit: 8px Grid
```
Micro:    4px   (0.5 units)
Small:    8px   (1 unit)
Default:  16px  (2 units)
Medium:   24px  (3 units)
Large:    32px  (4 units)
XLarge:   48px  (6 units)
XXLarge:  64px  (8 units)
```

### Container Widths
```
Mobile:    100% (with 20px padding)
Tablet:    768px
Laptop:    1024px
Desktop:   1200px
```

### Section Padding
```
Small:     40px top/bottom
Medium:    60px top/bottom
Large:     80px top/bottom
```

---

## 🔤 Typography

### Font Family
```
Primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
Fallback: System fonts for best performance
```

### Font Sizes
```
H1 (Hero):       48px (Mobile: 28px)
H2 (Section):    36px (Mobile: 24px)
H3 (Card):       20px
H4 (Subtitle):   16px
Body:            14px
Small:           13px
Tiny:            12px
```

### Font Weights
```
Regular:  400
Medium:   500
Semibold: 600
Bold:     700
```

### Line Height
```
Default:  1.6
Heading:  1.2
Tight:    1.4
```

---

## 🎯 Component Sizes

### Buttons
```
Height:     48px (default), 40px (small)
Padding:    12px horizontal, 28px vertical
Border-radius: 8px
Font-size:  14px
Font-weight: 600
```

### Cards
```
Border-radius: 12px
Box-shadow:    2px 8px rgba(0,0,0,0.1)
Padding:       30px
Gap between:   30px
```

### Icons
```
Navbar:     18px
Hero:       120px
Section:    30px (cards), 40px (large)
Footer:     14px
```

### Top Bar
```
Height:     48px
Font-size:  13px
Icon:       14px
```

### Navbar
```
Height:     60px
Logo:       24px
Gap:        35px between items
```

---

## 🎬 Animation Effects

### Transition Timing
```
Default:     0.3s ease
Slow:        0.5s ease
Smooth:      0.6s ease-out
```

### Button Hover
```
Color:       Darker shade
Transform:   translateY(-2px) - Lift effect
Shadow:      var(--shadow-lg)
```

### Card Hover
```
Transform:   translateY(-8px)
Shadow:      var(--shadow-lg)
Border:      Changed to primary-color
```

### Image Hover (Gallery)
```
Scale:       1.1 (110%)
Overlay:     Fade in at 80% opacity
Icon:        Appears at center
```

### Scroll Animation
```
Fade-in:     0.6s ease-out
Slide:       translateY(20px) → translateY(0)
Trigger:     When element enters viewport
```

### Modal Animation
```
Entry:       slideIn 0.3s ease-in-out
Overlay:     fadeIn 0.3s ease-in-out
Close:       slideOut 0.3s ease-in-out
```

---

## 📱 Responsive Breakpoints

### Mobile (Max: 480px)
```
Grid Columns:     1
Font Sizes:       Reduced 20%
Spacing:          Reduced 15%
Padding:          15px sides
Top Bar:          Hidden
Navbar Height:    48px
Menu:             Hamburger style
```

### Tablet (481px - 768px)
```
Grid Columns:     2
Font Sizes:       Normal
Spacing:          Normal
Padding:          20px sides
Top Bar:          Visible
Navbar Height:    60px
Menu:             Expanded
Mega Menu:        2 columns
```

### Laptop (769px - 1024px)
```
Grid Columns:     3-4
Font Sizes:       Normal
Spacing:          Normal
Padding:          20px sides
Mega Menu:        3 columns
Max Width:        1024px
```

### Desktop (1025px+)
```
Grid Columns:     4
Font Sizes:       Normal
Spacing:          Full
Padding:          20px sides
Mega Menu:        4 columns
Max Width:        1200px
```

---

## 🎨 Section Styling

### Hero Section
```
Background:    Gradient (light gray to white)
Min Height:    600px
Padding:       80px 20px
Text Align:    Left (with visual on right)
Grid:          1fr 1fr
Gap:           60px
```

### Course Cards Section
```
Background:    Light (white/light gray)
Padding:       80px 20px
Grid:          4 columns (auto-fit)
Card Style:    Border + Light background
Hover:         Lift + Border color change
```

### Testimonials Section
```
Background:    Light gray (different shade)
Padding:       80px 20px
Grid:          4 columns responsive
Card Style:    Border + Light background
Border-top:    1px divider before author
```

### Gallery Section
```
Background:    Light (white)
Padding:       80px 20px
Grid:          4 columns, 2 (tablet), 1 (mobile)
Items:         Rounded, with hover overlay
Lightbox:      Enabled
```

### Footer
```
Background:    Light gray
Padding:       60px 20px
Grid:          4 columns, 2 (tablet), 1 (mobile)
Links:         Color change on hover
Bottom:        Border-top + copyright
```

---

## 🔘 Interactive Elements

### Buttons
```
State:      Normal
Background: Primary color
Color:      White
Border:     None
Shadow:     None

State:      Hover
Background: Darker primary
Transform:  translateY(-2px)
Shadow:     Large shadow
Cursor:     Pointer

State:      Active/Pressed
Scale:      0.98
Shadow:     Medium shadow

State:      Disabled
Opacity:    0.6
Cursor:     Not-allowed
```

### Links
```
Normal:     Primary color, no underline
Hover:      Primary color, underline
Visited:    Same as normal
Focus:      Outline + color change
```

### Form Inputs
```
Background:  Light gray (light mode), dark (dark mode)
Border:      1px solid border-color
Border-radius: 6px
Padding:     12px 15px
Font:        14px, inherit family

Focus:       Border color = primary
             Box-shadow = 0 0 0 3px rgba(primary, 0.1)
             Outline: none

Filled:      Border color = primary
             Background: light
```

### Checkboxes/Radio
```
Size:        20px
Border:      2px solid
Color:       Primary when checked
Transition:  0.3s
```

---

## 🌙 Dark Mode Implementation

### Colors Transform
```
Light:    #ffffff  →  Dark: #0f1419
Light:    #f5f7fa  →  Dark: #1a1f26
Light:    #333333  →  Dark: #ffffff
Light:    #e0e0e0  →  Dark: #2a3036
```

### Text Adjustments
```
Light mode: Dark text on light background
Dark mode:  Light text on dark background
Contrast:   Always >= 4.5:1 (WCAG AA)
```

### Box Shadow Adjustment
```
Light:  0 2px 8px rgba(0,0,0,0.1)
Dark:   0 2px 8px rgba(0,0,0,0.3)
        [Stronger shadow to define elements]
```

---

## 📐 Grid System

### Desktop (1200px container)
```
12 Column Grid
Width:       1200px
Gutter:      30px
Column:      ~80px
```

### Responsive Grids Used
```
1 Column:     For mobile, full width
2 Columns:    For tablet, 50% each
3 Columns:    For medium screens
4 Columns:    For desktop large content
Auto-fit:     Uses minmax(280px, 1fr) etc.
```

---

## ✨ Special Effects

### Gradient Backgrounds
```
Hero:          135deg, light-gray 0%, white 100%
Icons:         135deg, primary 0%, secondary 100%
Buttons:       Solid primary color
```

### Box Shadows
```
Default:  0 2px 8px rgba(0,0,0,0.1)
Large:    0 8px 24px rgba(0,0,0,0.15)
Hover:    0 12px 32px rgba(0,0,0,0.2)
Dark:     Increased opacity for visibility
```

### Borders
```
Default:   1px solid border-color
Thick:     2px solid
Radius:    6px (small), 8px (medium), 12px (large)
```

### Transitions
```
All Properties:  0.3s ease (default)
Color:           0.3s ease
Transform:       0.3s ease
Shadow:          0.3s ease
```

---

## 🎯 Visual Hierarchy

### Size Hierarchy
```
H1: 48px  (Hero title)
H2: 36px  (Section title)
H3: 20px  (Card title)
H4: 16px  (Subtitle)
Body: 14px (Main text)
```

### Color Hierarchy
```
Primary action:    Primary blue (#0066cc)
Secondary action:  Secondary cyan (#00b4d8)
Normal text:       Dark gray (#333333)
Muted text:        Light gray (#666666)
Accent/Alert:      Red (#ff6b6b)
```

### Weight Hierarchy
```
Primary CTAs:      700 (bold)
Section titles:    700 (bold)
Card titles:       600 (semibold)
Subtitles:         500 (medium)
Body text:         400 (regular)
```

---

## 🎪 Examples of Each Component

### Button Styles
```html
<!-- Primary -->
<button class="btn btn-primary">Register Now</button>

<!-- Secondary -->
<button class="btn btn-secondary">Learn More</button>

<!-- Login -->
<a href="#" class="btn btn-login">Login</a>
```

### Card Styles
```html
<!-- Course Card -->
<div class="course-card">
  <div class="course-icon"><i class="fas fa-sitemap"></i></div>
  <h3>CCNA</h3>
  <p>Description</p>
  <ul class="course-features">...</ul>
</div>

<!-- Testimonial Card -->
<div class="testimonial-card">
  <div class="testimonial-content">...</div>
  <div class="testimonial-author">...</div>
</div>
```

### Form Styles
```html
<form>
  <div class="form-group">
    <label>Name</label>
    <input type="text" placeholder="Enter name">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

---

## 📊 Visual Consistency

### Colors Used Consistently
- Primary (#0066cc) - All primary actions
- Secondary (#00b4d8) - Accents and highlights
- Gray (#666666) - Secondary text
- Dark (#333333) - Primary text
- Light (#f5f7fa) - Backgrounds

### Spacing Used Consistently
- 20px - Section padding (sides)
- 30px - Card gaps and padding
- 60px - Section spacing (between)
- 80px - Large sections

### Border Radius Used Consistently
- 6px - Form inputs, small elements
- 8px - Buttons, regular elements
- 12px - Cards and large elements

### Shadows Used Consistently
- Small: 2px 8px (default)
- Large: 8px 24px (hover/important)

---

## 🎯 Design Principles Applied

1. **Consistency**
   - Same colors throughout
   - Unified spacing
   - Standard components

2. **Hierarchy**
   - Clear title → subtitle → body
   - Prominent CTAs
   - Visual weight balance

3. **Accessibility**
   - High contrast (4.5:1+)
   - Large readable text
   - Clear focus states

4. **Responsiveness**
   - Fluid grids
   - Flexible typography
   - Touch-friendly

5. **Modern Aesthetics**
   - Minimal design
   - Smooth animations
   - Clean layouts
   - Professional feel

---

**This visual guide ensures consistency across the entire website and makes future modifications easy and accurate.**
