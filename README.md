# Anil Handicrafts Website

A beautiful, responsive website for Anil Handicrafts - a premium handicraft business based in Agra, Uttar Pradesh, India.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Hero Section**: Eye-catching hero section with Taj Mahal background image
- **About Section**: Information about the business with Taj Mahal image
- **Products Catalog**: Showcase of 6 product categories:
  - Handmade Clothes
  - Designer Clothes
  - Handmade Carpets
  - Antiques
  - Jewelry
  - Custom Orders
- **Customer Reviews**: Display of customer testimonials with star ratings
- **Contact Form**: Functional contact form for customer inquiries
- **Smooth Animations**: Scroll animations and hover effects
- **Mobile Navigation**: Hamburger menu for mobile devices

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive features and form handling
- **Google Fonts**: Playfair Display and Poppins fonts

## Getting Started

1. **Open the website**:
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended for best experience)

2. **Using a local server**:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
   Then open http://localhost:8000 in your browser

## Adding Product Images

1. Navigate to the `images` folder
2. Add the following images with exact names:
   - `tajmahal.jpg` - Taj Mahal image for About section
   - `handmade-clothes.jpg` - Handmade clothes
   - `designer-clothes.jpg` - Designer clothes
   - `carpets.jpg` - Handmade carpets
   - `antiques.jpg` - Antique items
   - `jewelry.jpg` - Handmade jewelry
   - `custom.jpg` - Custom orders

See `images/README.md` for recommended image sizes and sources.

## Customization

### Contact Information
Update the contact details in `index.html`:
- Address
- Phone number
- Email address
- Business hours

### Colors
Modify the color scheme in `styles.css` by changing the CSS variables:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #DAA520;
    --accent-color: #FF6B35;
    /* ... */
}
```

### Form Integration
The contact form currently shows a success message. To integrate with a backend:
1. Use a service like **FormSpree**, **EmailJS**, or **Netlify Forms**
2. Or connect to your own backend API
3. Update the form handling in `script.js`

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Structure

```
anilhandicrafts/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── images/             # Image directory
│   └── README.md       # Image requirements guide
└── README.md           # This file
```

## Future Enhancements

Potential features to add:
- Shopping cart functionality
- Product detail pages
- Image gallery/lightbox
- Social media integration
- Multi-language support
- Blog section
- Newsletter subscription
- WhatsApp integration
- Payment gateway integration

## Support

For questions or support, please contact:
- Email: info@anilhandicrafts.com
- Location: Agra, Uttar Pradesh, India

## License

Copyright © 2026 Anil Handicrafts. All rights reserved.
