# Dhritii.ai Website - Technical Documentation

## Project Overview

This is a React + Vite corporate website for Dhritii.ai. The site is structured as a multi-page marketing site with reusable components, shared data, responsive layouts, scroll-triggered reveals, and animated service/product sections.

## Current Stack

- React
- Vite
- React Router
- Plain CSS
- Reusable component-based layout

## Implemented Areas

### 1. Core Site Structure

- Main layout with shared navbar and footer
- Route-based pages for Home, About, Services, Products, Careers, Contact, Privacy Policy, and Terms
- Responsive viewport support

### 2. Home Page

- Hero section
- Services preview section
- Products preview section
- Delivery/process section
- Trust/statistics strip
- Footer integration

### 3. Services Page

- 6 featured service cards
- Separate text, labels, badges, and images for each card
- Animated borders and reveal effects
- Scroll-triggered entry animation

### 4. Products Page

- Product spotlight selector
- Detailed product cards
- Demo/video placeholder block
- Click animation on cards
- CTA section for contact and services

### 5. Shared Data Model

- `companyInfo`
- `services`
- `featuredServices`
- `products`
- `aboutPoints`
- `processSteps`
- `careerPoints`

### 6. Visual Assets

- Service card images
- Product preview images
- Brand imagery

### 7. UX Enhancements

- Scroll reveal hook
- Animated borders
- Hover interactions
- Mobile responsive breakpoints
- Footer social icons and policy links

## Current Completion Estimate

Estimated completion: **85%**

### Completed

- Main site architecture
- Routing
- Home page content
- Services page content
- Products page base + spotlight
- Footer and legal pages
- Responsive styling
- Asset wiring
- Basic motion/animation system

### Remaining

- Real product demo video
- Final Products page content refinement
- Final Contact page form/action behavior
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
- Any backend/email integration if required

### QA

- Mobile testing on small screens
- Browser testing in Chrome, Edge, and Firefox
- Link validation
- Performance review

## Rough Time Estimate

### If only frontend polish remains

- Product video integration: 30 minutes to 1 hour
- Contact form wiring: 2 to 4 hours
- Final UI polish and QA: 3 to 5 hours

### Total remaining effort

Estimated: **1 working day**

If backend integration or real form/email handling is needed, add **another half to full day**.

## Notes

- Build currently passes successfully.
- `frontend/node_modules/` and `frontend/dist/` are ignored in git.
- The repository is set up for ongoing incremental improvements.
