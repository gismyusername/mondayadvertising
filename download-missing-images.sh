#!/bin/bash

# Base URL for images
BASE_URL="https://ninjapromo.io/wp-content/uploads"

# Array of missing image paths from 2024/10
missing_images=(
    "2024/10/clutch_logo.svg"
    "2024/10/clutch49.svg"
    "2024/10/review5.svg"
    "2024/10/brain_logo.png"
    "2024/10/Airbnb-svg-1.svg"
    "2024/10/Binance-svg-1.svg"
    "2024/10/affynlogot.png"
    "2024/10/innowiselogo.png"
    "2024/10/thnksemail-logo01.png"
    "2024/10/forbes_logo.svg.svg"
    "2024/10/analytics_insight_logo.svg.svg"
    "2024/10/coinpedia_logo.svg"
    "2024/10/cryptopolitan_logo.svg.svg"
    "2024/10/Bitcoin_logo.svg"
    "2024/10/startup_logo.svg"
    "2024/10/ceoweekly_logo.svg"
    "2024/10/process-1.svg"
    "2024/10/process-2.svg"
    "2024/10/process-3.svg"
    "2024/10/process-4.svg"
    "2024/10/process-5.svg"
    "2024/10/contactlogo-1.png"
    "2024/10/contactlogo-2.png"
    "2024/10/contactlogo-3.png"
    "2024/10/contactlogo-4.png"
    "2024/10/contactlogo-5.png"
    "2024/10/contactlogo-6.png"
    "2024/10/contactlogo-1-300x92.png"
    "2024/10/contactlogo-2-300x92.png"
    "2024/10/contactlogo-3-300x92.png"
    "2024/10/contactlogo-4-300x92.png"
    "2024/10/contactlogo-5-300x92.png"
    "2024/10/contactlogo-6-300x92.png"
    "2024/10/SMicon-1.svg"
    "2024/10/SMicon-2.svg"
    "2024/10/SMicon-3.svg"
    "2024/10/SMicon-4.svg"
    "2024/10/SMicon-5.svg"
    "2024/10/SMicon-6.svg"
)

# Download each missing image
for img in "${missing_images[@]}"; do
    filename=$(basename "$img")
    echo "Downloading $filename..."
    curl -L -o "images/$filename" "$BASE_URL/$img"
    sleep 0.3  # Be nice to their server
done

echo "✅ All missing images downloaded to images/ directory"