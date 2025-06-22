#!/bin/bash
# Batch convert and compress images in public/assets/
# Requires: cwebp (install with: brew install webp)

ASSETS_DIR="public/assets"
QUALITY=75

if ! command -v cwebp &> /dev/null; then
  echo "cwebp not found. Please install it with: brew install webp"
  exit 1
fi

count=0
find "$ASSETS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
  webp_file="${img%.*}.webp"
  if [ -f "$webp_file" ]; then
    echo "[SKIP] $webp_file already exists."
    continue
  fi
  echo "[CONVERT] $img -> $webp_file"
  cwebp -q $QUALITY "$img" -o "$webp_file"
  ((count++))
  # Optionally compress original (uncomment below if you want to optimize originals)
  # if [[ "$img" == *.jpg || "$img" == *.jpeg ]]; then
  #   jpegoptim --strip-all "$img"
  # elif [[ "$img" == *.png ]]; then
  #   optipng -o7 "$img"
  # fi

done

echo "Conversion complete. $count images processed."
echo "You can now update your code to use .webp images for best performance." 