PT VPE MINI PATCH - PARTNERS MARQUEE + SERVICE ICON RESTORE

Changed files:
- app/components/pages/HomeContent.tsx
- app/globals.css

Added assets:
- public/partners/pomi.webp
- public/partners/paiton-energy.webp
- public/partners/cirebon-power.webp

What this patch does:
1. Restores the service icons in the Services / Kapabilitas utama PT VPE section.
   - Each service now has its own icon again instead of one repeated icon.

2. Replaces the old Process section with a Partners section.
   - Adds an auto-scrolling partner/logo marquee.
   - Uses the attached partner logos:
     * PT POMI
     * PT Paiton Energy
     * Cirebon Power

3. Keeps the rest of the homepage structure intact.
   - Does not change routing
   - Does not change bilingual setup
   - Does not remove good existing homepage features

How to apply:
1. Extract this ZIP into the current project root.
2. Overwrite existing files.
3. Restart dev server.
4. Hard refresh browser cache.
