#!/bin/bash

# Video conversion script for better browser compatibility
# This script converts MP4 files to WebM format for better Chromium support

echo "Converting videos to WebM format for better browser compatibility..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "ffmpeg is not installed. Please install it first:"
    echo "brew install ffmpeg"
    exit 1
fi

# Function to convert a single video
convert_video() {
    local input_file="$1"
    local output_file="${input_file%.*}.webm"
    
    echo "Converting $input_file to $output_file..."
    
    # Convert with web-optimized settings
    ffmpeg -i "$input_file" \
        -c:v libvpx-vp9 \
        -crf 30 \
        -b:v 0 \
        -b:a 128k \
        -c:a libopus \
        -movflags +faststart \
        "$output_file"
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully converted $input_file"
    else
        echo "❌ Failed to convert $input_file"
    fi
}

# Convert videos in public/assets
echo "Converting videos in public/assets..."
find public/assets -name "*.mp4" -o -name "*.MP4" | while read -r video; do
    convert_video "$video"
done

# Convert videos in build/assets if they exist
if [ -d "build/assets" ]; then
    echo "Converting videos in build/assets..."
    find build/assets -name "*.mp4" -o -name "*.MP4" | while read -r video; do
        convert_video "$video"
    done
fi

echo "Video conversion complete!"
echo "Note: You may want to update your App.jsx to include both MP4 and WebM sources for maximum compatibility."
