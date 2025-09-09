#!/bin/bash

# Script to remove specific sections from all HTML pages

# List of HTML files to process
files=(
    "index.html"
    "seo.html"
    "paid-advertising.html"
    "social-media.html"
    "influencer-marketing.html"
    "email-automation.html"
    "design.html"
    "b2b.html"
    "fintech.html"
    "crypto.html"
    "software.html"
    "saas.html"
    "igaming.html"
    "esports.html"
    "ecommerce.html"
)

echo "Starting to remove sections from all pages..."

for file in "${files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "File $file not found, skipping..."
        continue
    fi
    
    echo "Processing $file..."
    
    # Create a temporary file
    temp_file="${file}.tmp"
    
    # Use awk to remove the four sections
    awk '
    # Flag variables
    BEGIN {
        in_media = 0
        in_review = 0
        in_worldwide = 0
        in_blog = 0
    }
    
    # Detect start of media section (We are featured in)
    /<section class="media-section">/ {
        in_media = 1
    }
    
    # Detect start of review section (Our rating based on)
    /<section class="review-section">/ {
        in_review = 1
    }
    
    # Detect start of worldwide section (We work all over the world)
    /<section class="worldwide-section">/ {
        in_worldwide = 1
    }
    
    # Detect start of blog section (What'\''s the Latest?)
    /<section class="blog-section">/ {
        in_blog = 1
    }
    
    # Print lines that are not in any of the sections we want to remove
    {
        if (!in_media && !in_review && !in_worldwide && !in_blog) {
            print
        }
    }
    
    # Detect end of sections
    /<\/section>/ {
        if (in_media || in_review || in_worldwide || in_blog) {
            # Check if this is the closing tag for our section
            if (in_media) in_media = 0
            else if (in_review) in_review = 0
            else if (in_worldwide) in_worldwide = 0
            else if (in_blog) in_blog = 0
        } else {
            # This closing tag belongs to a different section, print it
            print
        }
    }
    ' "$file" > "$temp_file"
    
    # Replace original file with modified version
    mv "$temp_file" "$file"
    echo "✓ Removed sections from $file"
done

echo "All sections removed successfully!"