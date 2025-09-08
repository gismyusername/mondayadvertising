#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

# Base URL for images
BASE_URL="https://ninjapromo.io/wp-content/uploads"

# Array of image paths to download
images=(
    # Main content images
    "2025/04/home-img2.png"
    "2025/08/scheme-main.png"
    "2025/07/home-team-scaled.png"
    
    # Partner logos
    "2025/04/partners-white-1.svg"
    "2025/04/partners-white-2.svg"
    "2025/04/partners-white-3.svg"
    "2025/04/partners-white-4.svg"
    "2025/04/partners-white-5.svg"
    "2025/04/partners-white-6.svg"
    "2025/04/partners-white-7.svg"
    
    # Service icons
    "2025/08/Service-icons.svg"
    "2025/08/Service-icons-1.svg"
    "2025/08/Service-icons-2.svg"
    "2025/08/Service-icons-3.svg"
    "2025/08/Service-icons-4.svg"
    
    # CTA images
    "2025/04/clutch-cta2.svg"
    "2025/08/cta-team-mob5.png"
    "2025/08/cta_team2.png"
    
    # Industry images
    "2025/06/industries-all-1.png"
    "2025/06/industries-all-2.png"
    "2025/06/industries-all-3.png"
    "2025/06/industries-all-4.png"
    "2025/06/industries-all-5.png"
    "2025/06/industries-all-6.png"
    "2025/06/industries-all-7.png"
    "2025/06/industries-all-8.png"
    "2025/06/industries-all-9.png"
    "2025/06/industries-all-10.png"
    "2025/06/industries-all-11.png"
    
    # Case study logos
    "2025/08/Betmode-1.svg"
    "2025/08/platoon11-400x400.png"
    "2025/08/Platoon.svg"
    "2025/08/Zoomex.svg"
    "2025/08/zoomex-coin-1-400x400.png"
    "2025/05/udao-logo.png"
    "2025/05/udao03-300x300.png"
    "2025/05/cb-white.png"
    "2025/05/cb02-300x300.png"
    "2025/03/dis1.svg"
    "2025/03/rain-300x300.png"
    "2025/05/fxgt21.png"
    "2025/05/fxgt31-300x300.png"
    "2024/02/htx-logo.svg"
    "2024/03/htx01-300x300.png"
    
    # Favicon
    "2025/08/favicon-np-300x300.png"
)

# Download each image
for img in "${images[@]}"; do
    filename=$(basename "$img")
    echo "Downloading $filename..."
    curl -L -o "images/$filename" "$BASE_URL/$img"
    sleep 0.5  # Be nice to their server
done

echo "✅ All images downloaded to images/ directory"