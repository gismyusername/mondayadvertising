#!/bin/bash

# Script to update header and footer in all HTML pages to match index.html

# List of HTML files to process (excluding index.html)
files=(
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

echo "Extracting header and footer from index.html..."

# Extract header section (lines 76-185)
sed -n '76,185p' index.html > header-template.tmp

# Extract footer section (lines 3208-3301)
sed -n '3208,3301p' index.html > footer-template.tmp

echo "Starting to update headers and footers..."

for file in "${files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "File $file not found, skipping..."
        continue
    fi
    
    echo "Processing $file..."
    
    # Create a backup
    cp "$file" "${file}.backup"
    
    # Find the header start and end lines
    header_start=$(grep -n '<header class="header">' "$file" | head -1 | cut -d: -f1)
    header_end=$(grep -n '</header>' "$file" | head -1 | cut -d: -f1)
    
    # Find the footer start and end lines
    footer_start=$(grep -n '<footer class="page-footer">' "$file" | head -1 | cut -d: -f1)
    footer_end=$(grep -n '</footer>' "$file" | tail -1 | cut -d: -f1)
    
    if [ -z "$header_start" ] || [ -z "$header_end" ] || [ -z "$footer_start" ] || [ -z "$footer_end" ]; then
        echo "Could not find header or footer in $file, skipping..."
        continue
    fi
    
    # Create the new file with updated header and footer
    {
        # Copy everything before the header
        sed -n "1,$((header_start-1))p" "$file"
        
        # Insert the new header
        cat header-template.tmp
        
        # Copy everything between header and footer
        sed -n "$((header_end+1)),$((footer_start-1))p" "$file"
        
        # Insert the new footer
        cat footer-template.tmp
        
        # Copy everything after the footer
        sed -n "$((footer_end+1)),\$p" "$file"
    } > "${file}.new"
    
    # Replace the original file
    mv "${file}.new" "$file"
    
    # Remove backup if successful
    rm "${file}.backup"
    
    echo "✓ Updated header and footer in $file"
done

# Clean up temporary files
rm -f header-template.tmp footer-template.tmp

echo "All headers and footers updated successfully!"