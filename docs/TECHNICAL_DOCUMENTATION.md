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
- `Why Dhritii.ai` story section with office photo and delivery model content
- Footer integration

### 3. Services Page

- Service category cards
- Category images and summary tags
- Service showcase section
- Compact all-services summary list
- Consultation CTA block
- Scroll reveal motion

### 4. AI Services Page

- Hero section with branded image and motion
- Deep-dive sections for:
  - Data Annotation
  - Medical Data Annotation
  - Data Classification
  - AI Model Support
  - Transcription Services
- Annotation type cards for:
  - Image Annotation
  - Text Annotation
  - Audio Annotation
  - Video Annotation
- Workflow section
- Dedicated visuals for each major service card
- CTA section for next-step content expansion

### 5. Products Page

- Product spotlight selector
- Product stats summary
- Interactive preview panel
- Detailed product cards
- Demo/video placeholder block
- CTA section for contact and services

### 6. Careers Page

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
- Resume upload field
- Custom `Other` role input support
- Brand-style `Why We Stand Out` section with:
  - highlight strip
  - visual card
  - image-based icons
  - featured card treatment
  - hover animation

### 7. Contact Page

- Office/map layout
- Google Maps embed
- Direct contact actions
- Inquiry form UI

### 8. Shared Data Model

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
- leadership image assets for About page

### 9. Remaining Service Pages

- Data Collection service page with detailed track cards and matching images
- Development service page with a distinct hero and 4 focused tracks
- Business & Cloud service page with SaaS, cloud, automation, security, and BI tracks
- Marketing service page with a brand-led hero and campaign-oriented tracks

### 10. Visual Assets

- Service card images
- Product preview images
- Careers hero image
- Role-specific career images
- Brand imagery
- SVG icon assets for careers benefit cards

### 11. UX Enhancements

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
- AI Services detail page
- Products page base + spotlight
- Careers page redesign
- Contact page redesign
- About page redesign with leadership photos, mission/vision/values, culture, and process sections
- Home page story section with office photo
- Data Collection page redesign with detailed image-led tracks
- Development page redesign with 4 focused service tracks
- Business & Cloud page redesign with 5 image-led service tracks
- Marketing page redesign with a brand-focused visual system
- Footer and legal pages
- Responsive styling
- Asset wiring
- Motion/animation system

### Remaining

- Product media polish for video/image sections
- Final Contact form action behavior
- Final Careers form action behavior
- Resume upload handling workflow
- Backend/email integration
- SEO polishing and metadata
- Cross-browser visual QA
- Production cleanup and final deployment check

## Remaining Requirements

### Content

- Final media assets or copy for remaining service pages
- Final video/image support for the Products page
- Final social URLs for footer icons

### Functional

- Contact form submission handling
- Careers form submission handling
- Resume upload support if required
- Any backend/email integration if required

### QA

- Browser testing in Chrome, Edge, and Firefox
- Link validation
- Performance review

## Rough Time Estimate

### If only frontend polish remains

- Remaining service pages: 1 to 2 working days
- Product media polish: 30 minutes to 2 hours
- Contact/Careers form wiring: 2 to 4 hours
- Final UI polish and QA: 3 to 5 hours

### Total remaining effort

Estimated: **1 to 3 working days**

If backend integration or real form/email handling is needed, add **another half to full day**.

## Notes

- Build currently passes successfully.
- `frontend/node_modules/` and `frontend/dist/` are ignored in git.
- The repository is set up for ongoing incremental improvements.
