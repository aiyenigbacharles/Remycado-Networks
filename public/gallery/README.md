This folder is for the site's gallery images.

How to add images
- Place up to 12 images here using the following filenames (exact):
  - img-1.jpg
  - img-2.jpg
  - ...
  - img-12.jpg

Supported formats
- .jpg, .jpeg, .png, .webp (use .jpg in the filenames for consistency or update the component if you prefer other extensions).

Recommended image guidance
- Width: 1200–2000px (for good quality in the lightbox).
- File size: aim for under 500 KB to keep pages snappy.
- Orientation: square or landscape works best; the gallery uses square thumbnails and the lightbox preserves aspect ratio.

Behavior
- The site will reference these files at runtime (e.g., `/gallery/img-1.jpg`).
- If a file is missing, the gallery will show `/placeholder.svg` as a fallback.
- In dev (Vite), adding or replacing files in this folder should be picked up automatically; hard-refresh the browser if an image doesn't appear immediately.

If you'd rather keep images under `src/assets` and import them at build time, update `src/components/GallerySection.tsx` to import the assets instead.
