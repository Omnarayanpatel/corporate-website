# Dhritii.ai Website - Technical Documentation

## Project Overview

This is a React + Vite corporate website for Dhritii.ai. The site is structured as a multi-page marketing experience with reusable components, shared data, responsive layouts, scroll-triggered reveals, and animated service/product/careers sections.

## Current Stack

- React
- Vite
- React Router
- Plain CSS
- Reusable component-based layout

## Implemented Areas

### 1. Core Site Structure

- Shared navbar and footer across the site
- Route-based pages for Home, About, Services, Products, Careers, Contact, Privacy Policy, and Terms
- Dedicated service sub-routes:
  - AI & ML
  - Data Collection
  - Development
  - Business & Cloud
  - Marketing
- Responsive viewport support

### 2. Home Page

- Hero section
- Services preview section
- Products preview section
- Delivery/process section
- Trust/statistics strip
- Footer integration

### 3. Services Page

- Service category cards
- Category images and summary tags
- Service showcase section
- Compact all-services summary list
- Consultation CTA block
- Scroll reveal motion

### 4. Products Page

- Product spotlight selector
- Product stats summary
- Interactive preview panel
- Detailed product cards
- Demo/video placeholder block
- CTA section for contact and services

### 5. Careers Page

- Premium hero section with image and animated entrance
- Role cards for:
  - Frontend Developer
  - Software Developer
  - Full Stack Developer
  - Senior Software Developer
  - Backend Developer
  - AI / Data Associate
  - Digital Marketing Executive
  - Business Development Intern
- Role-specific image preview panel
- Hiring process section
- Application form UI
- Brand-style `Why We Stand Out` section with:
  - highlight strip
  - visual card
  - image-based icons
  - featured card treatment
  - hover animation

### 6. Contact Page

- Office/map layout
- Google Maps embed
- Direct contact actions
- Inquiry form UI

### 7. Shared Data Model

- `companyInfo`
- `highlights`
- `stats`
- `services`
- `serviceList`
- `featuredServices`
- `products`
- `aboutPoints`
- `processSteps`
- `careerPoints`

### 8. Visual Assets

- Service card images
- Product preview images
- Careers hero image
- Role-specific career images
- Brand imagery
- SVG icon assets for careers benefit cards

### 9. UX Enhancements

- Scroll reveal hook
- Animated borders and glowing panels
- Hover interactions
- Mobile responsive breakpoints
- Improved CTA styles
- Reduced-motion fallback for accessibility

## Current Completion Estimate

Estimated completion: **90%**

### Completed

- Main site architecture
- Routing
- Home page content
- Services page content
- Products page base + spotlight
- Careers page redesign
- Contact page redesign
- Footer and legal pages
- Responsive styling
- Asset wiring
- Motion/animation system

### Remaining

- Real product demo video
- Final Contact form action behavior
- Final Careers form action behavior
- Resume upload handling
- SEO polishing and metadata
- Cross-browser visual QA
- Production cleanup and final deployment check

## Remaining Requirements

### Content

- Final video file for the Products page
- Optional updated copy for product descriptions and CTAs
- Final social URLs for footer icons

### Functional

- Contact form submission handling
- Careers form submission handling
- Resume upload support if required
- Any backend/email integration if required

### QA

- Mobile testing on small screens
- Browser testing in Chrome, Edge, and Firefox
- Link validation
- Performance review

## Rough Time Estimate

### If only frontend polish remains

- Product video integration: 30 minutes to 1 hour
- Contact/Careers form wiring: 2 to 4 hours
- Final UI polish and QA: 3 to 5 hours

### Total remaining effort

Estimated: **1 working day**

If backend integration or real form/email handling is needed, add **another half to full day**.

## Notes

- Build currently passes successfully.
- `frontend/node_modules/` and `frontend/dist/` are ignored in git.
- The repository is set up for ongoing incremental improvements.
