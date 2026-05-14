#!/usr/bin/env bash
set -euo pipefail
ROOT="${1:-.}"

mkdir -p "$ROOT/app/components/pages" "$ROOT/app" "$ROOT/public/partners"

cp -f app/components/pages/HomeContent.tsx "$ROOT/app/components/pages/HomeContent.tsx"
cp -f app/globals.css "$ROOT/app/globals.css"
cp -f public/partners/pomi.webp "$ROOT/public/partners/pomi.webp"
cp -f public/partners/paiton-energy.webp "$ROOT/public/partners/paiton-energy.webp"
cp -f public/partners/cirebon-power.webp "$ROOT/public/partners/cirebon-power.webp"

echo "PT VPE partners marquee + service icons patch applied."
