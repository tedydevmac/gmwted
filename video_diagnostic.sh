#!/bin/bash

# Video Compatibility Diagnostic Script
# This script checks your MP4 files and provides recommendations

echo "🎬 Video Compatibility Diagnostic for Chromium Browsers"
echo "======================================================="

# Check if ffprobe is available (part of ffmpeg)
if ! command -v ffprobe &> /dev/null; then
    echo "⚠️  ffprobe not found. Install ffmpeg to get detailed video information:"
    echo "   brew install ffmpeg"
    echo ""
fi

echo "📹 Analyzing video files in your project..."
echo ""

# Find all video files
find public/assets -name "*.mp4" -o -name "*.MP4" | while read -r video; do
    echo "🔍 Analyzing: $video"
    
    if command -v ffprobe &> /dev/null; then
        # Get codec information
        codec=$(ffprobe -v quiet -select_streams v:0 -show_entries stream=codec_name -of csv=s=x:p=0 "$video" 2>/dev/null)
        profile=$(ffprobe -v quiet -select_streams v:0 -show_entries stream=profile -of csv=s=x:p=0 "$video" 2>/dev/null)
        
        echo "   📊 Video codec: $codec"
        echo "   📊 Profile: $profile"
        
        # Check for Chromium compatibility issues
        if [[ "$codec" == "h264" ]]; then
            if [[ "$profile" == *"High"* ]] || [[ "$profile" == *"Main"* ]]; then
                echo "   ✅ Good compatibility with Chromium browsers"
            else
                echo "   ⚠️  May have compatibility issues with older Chromium versions"
            fi
        else
            echo "   ❌ Codec '$codec' may not be supported in all browsers"
            echo "   💡 Consider converting to H.264 for better compatibility"
        fi
    else
        echo "   ❓ Install ffmpeg to get detailed codec information"
    fi
    
    # Check file size
    size=$(stat -f%z "$video" 2>/dev/null || stat -c%s "$video" 2>/dev/null || echo "unknown")
    if [[ "$size" != "unknown" ]]; then
        size_mb=$((size / 1024 / 1024))
        echo "   📁 File size: ${size_mb}MB"
        
        if [[ $size_mb -gt 50 ]]; then
            echo "   ⚠️  Large file size may cause loading issues"
            echo "   💡 Consider compressing for web use"
        fi
    fi
    
    echo ""
done

echo "🛠️  Recommendations for Chromium compatibility:"
echo ""
echo "1. ✅ Code Changes Applied:"
echo "   - Updated Card components to properly detect video files"
echo "   - Enhanced VideoModal with multiple source formats"
echo "   - Added browser-specific video attributes (muted, playsInline, etc.)"
echo ""
echo "2. 🔧 Optional Video Conversion:"
echo "   Run: ./convert_videos.sh"
echo "   This will create WebM versions for better compatibility"
echo ""
echo "3. 🌐 Test in Different Browsers:"
echo "   - Chrome/Chromium: Test video playback"
echo "   - Firefox: Alternative compatibility"  
echo "   - Safari: Your videos already work here"
echo ""
echo "4. 🚀 If videos still don't work in Chromium:"
echo "   - Check browser console for errors"
echo "   - Verify video files aren't corrupted"
echo "   - Try re-encoding with web-optimized settings"

echo ""
echo "🎯 Your development server is running at: http://localhost:5173"
echo "   Navigate to the projects section and test video playback!"
