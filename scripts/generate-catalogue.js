const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const QRCode = require('qrcode');

async function main() {
  console.log('Generating Kamal Industries Kota Stone Catalogue PDF...');

  const publicDir = path.join(__dirname, '..', 'public');

  // Helper to convert image file to base64 data URI
  function getImageDataUri(relPath) {
    const fullPath = path.isAbsolute(relPath) ? relPath : path.join(publicDir, relPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`Warning: Image not found at ${fullPath}`);
      return '';
    }
    const ext = path.extname(fullPath).toLowerCase().replace('.', '');
    const mime = ext === 'png' ? 'image/png' : 'image/jpeg';
    const data = fs.readFileSync(fullPath).toString('base64');
    return `data:${mime};base64,${data}`;
  }

  // Generate QR Code as Data URI
  const websiteUrl = 'https://kamalindustries.in';
  const qrDataUri = await QRCode.toDataURL(websiteUrl, {
    margin: 1,
    color: {
      dark: '#0f172a',
      light: '#ffffff'
    },
    width: 300
  });

  console.log('Reading and encoding images...');
  const imgs = {
    logo: getImageDataUri('ki-signage.jpeg'),
    signage: getImageDataUri('ke-signage.jpeg'),
    hero: getImageDataUri('hero-1.jpeg'),
    hero2: getImageDataUri('hero-2.jpeg'),

    kotaBlue1: getImageDataUri('kota-blue-1.jpeg'),
    kotaBlue2: getImageDataUri('kota-blue-2.jpeg'),
    kotaBlue3: getImageDataUri('kota-blue-3.jpeg'),

    kotaBrown1: getImageDataUri('22.jpeg'),
    kotaBrown2: getImageDataUri('222.jpeg'),
    kotaBrown3: getImageDataUri('231.jpeg'),

    mandana1: getImageDataUri('4.jpeg'),
    mandana2: getImageDataUri('44.jpeg'),
    mandana3: getImageDataUri('45263.jpeg'),

    slabs1: getImageDataUri('kota-slab-1.jpeg'),
    slabs2: getImageDataUri('kota-slab-2.jpeg'),
    slabs3: getImageDataUri('kota-slab-3.jpeg'),

    stairs1: getImageDataUri('steps-1.jpeg'),
    stairs2: getImageDataUri('steps-2.jpeg'),
    stairs3: getImageDataUri('steps-3.jpeg'),

    cladding1: getImageDataUri('6.jpeg'),
    cladding2: getImageDataUri('66.jpeg'),
    cladding3: getImageDataUri('666.jpeg'),

    garden1: getImageDataUri('8.jpeg'),
    garden2: getImageDataUri('88.jpeg'),
    garden3: getImageDataUri('9.jpeg'),

    quarry: getImageDataUri('step-1-quarry.png'),
    cutting1: getImageDataUri('cutting-machine-1.jpeg'),
    cutting2: getImageDataUri('cutting-machine-2.jpeg'),
    cutting3: getImageDataUri('cutting-machine-3.jpeg'),
    factoryYard1: getImageDataUri('factory-yard-1.jpeg'),
    factoryYard2: getImageDataUri('factory-yard-2.jpeg'),
    stockYard1: getImageDataUri('stock-yard-1.jpeg'),

    qualityDoc: getImageDataUri('step-4-inspection.png'),
    qualityImg: getImageDataUri('Quality.jpeg'),
    packingDoc: getImageDataUri('step-5-packing.png'),
    packingImg: getImageDataUri('Packing.jpeg'),
    loading1: getImageDataUri('workers-loading-1.jpeg'),
    deliveryDoc: getImageDataUri('step-7-delivery.png'),
    deliveryImg: getImageDataUri('Delivery.jpeg'),

    proj1: getImageDataUri(path.join('images', 'WhatsApp Image 2026-07-09 at 10.00.47 AM.jpeg')),
    proj2: getImageDataUri(path.join('images', 'WhatsApp Image 2026-07-09 at 10.00.56 AM (1).jpeg')),
    proj3: getImageDataUri(path.join('images', 'WhatsApp Image 2026-07-09 at 10.00.59 AM (2).jpeg')),
    proj4: getImageDataUri(path.join('images', 'WhatsApp Image 2026-07-09 at 10.01.00 AM (1).jpeg')),
    proj5: getImageDataUri(path.join('images', 'WhatsApp Image 2026-07-09 at 10.00.49 AM.jpeg')),
    proj6: getImageDataUri(path.join('images', 'WhatsApp Image 2026-07-09 at 10.00.54 AM (2).jpeg')),
  };

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kamal Industries - Kota Stone Product Catalogue</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact;
    }
    body {
      font-family: 'Segoe UI', system-ui, -apple-system, Roboto, sans-serif;
      background: #0b1120;
      color: #f1f5f9;
      font-size: 11px;
      line-height: 1.5;
    }
    .page {
      width: 210mm;
      height: 297mm;
      padding: 14mm 16mm 14mm 16mm;
      position: relative;
      background: #0b1120;
      page-break-after: always;
      break-after: page;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Header & Footer */
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1.5px solid #c5a880;
      padding-bottom: 10px;
      margin-bottom: 14px;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .header-logo {
      height: 34px;
      width: auto;
      border-radius: 4px;
      border: 1px solid #c5a880;
    }
    .brand-name {
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 1.5px;
      color: #ffffff;
    }
    .brand-sub {
      font-size: 9px;
      color: #c5a880;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
    }
    .header-right {
      text-align: right;
      font-size: 8.5px;
      color: #94a3b8;
    }
    .footer-bar {
      border-top: 1px solid rgba(197, 168, 128, 0.3);
      padding-top: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 8.5px;
      color: #64748b;
      margin-top: auto;
    }
    .footer-left span {
      color: #c5a880;
      font-weight: 600;
    }

    /* Titles & Badges */
    .section-header {
      margin-bottom: 12px;
    }
    .tagline-badge {
      display: inline-block;
      font-size: 8px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #c5a880;
      background: rgba(197, 168, 128, 0.12);
      border: 1px solid rgba(197, 168, 128, 0.3);
      padding: 3px 8px;
      border-radius: 4px;
      margin-bottom: 4px;
    }
    .page-title {
      font-family: Georgia, serif;
      font-size: 22px;
      color: #ffffff;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
    .page-title span {
      color: #c5a880;
      font-style: italic;
    }

    /* Cards & Grids */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
    }
    .card {
      background: #162032;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 12px;
    }
    .card-gold {
      background: linear-gradient(135deg, #162032 0%, #1c2a42 100%);
      border: 1px solid rgba(197, 168, 128, 0.3);
      border-radius: 8px;
      padding: 12px;
    }

    /* Image Gallery Components */
    .img-container {
      width: 100%;
      height: 120px;
      border-radius: 6px;
      overflow: hidden;
      position: relative;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .img-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .img-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(11, 17, 32, 0.85);
      padding: 4px 6px;
      font-size: 8px;
      color: #cbd5e1;
      text-align: center;
    }

    /* Specs Tables */
    .spec-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 9.5px;
      margin-top: 8px;
    }
    .spec-table td {
      padding: 5px 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .spec-label {
      color: #94a3b8;
      font-weight: 600;
      width: 32%;
    }
    .spec-val {
      color: #f8fafc;
    }

    /* Feature Pills */
    .pill-group {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .pill {
      font-size: 8px;
      font-weight: 600;
      background: rgba(197, 168, 128, 0.15);
      color: #dfc196;
      padding: 3px 7px;
      border-radius: 4px;
      border: 1px solid rgba(197, 168, 128, 0.25);
    }

    /* Cover Specific */
    .cover-page {
      background: radial-gradient(circle at 50% 20%, #1e2942 0%, #0b1120 70%);
      padding: 16mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .cover-hero-box {
      width: 100%;
      height: 260px;
      border-radius: 12px;
      overflow: hidden;
      position: relative;
      border: 1.5px solid rgba(197, 168, 128, 0.4);
      box-shadow: 0 12px 30px rgba(0,0,0,0.5);
      margin: 15px 0;
    }
    .cover-hero-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .cover-hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgba(11, 17, 32, 0.9) 0%, rgba(11, 17, 32, 0.2) 60%);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 20px;
    }

  </style>
</head>
<body>

  <!-- PAGE 1: COVER PAGE -->
  <div class="page cover-page">
    <div style="text-align: center; margin-top: 10px;">
      <div style="display: flex; justify-content: center; align-items: center; gap: 14px; margin-bottom: 12px;">
        <img src="${imgs.logo}" style="height: 50px; border-radius: 6px; border: 1.5px solid #c5a880;" alt="Kamal Industries Logo">
      </div>
      <div style="font-family: Georgia, serif; font-size: 32px; font-weight: 700; color: #ffffff; letter-spacing: 3px;">
        KAMAL INDUSTRIES
      </div>
      <div style="font-size: 11px; color: #c5a880; text-transform: uppercase; letter-spacing: 4px; font-weight: 700; margin-top: 4px;">
        Direct Quarry Owners & Exporters of Premium Kota Stone
      </div>
      <div style="width: 80px; height: 2px; background: #c5a880; margin: 12px auto 0;"></div>
    </div>

    <div class="cover-hero-box">
      <img src="${imgs.hero}" alt="Hero Image">
      <div class="cover-hero-overlay">
        <span class="tagline-badge">Catalogue Edition 2026</span>
        <div style="font-family: Georgia, serif; font-size: 24px; color: #ffffff; font-weight: 600;">
          Architectural Natural Stone Solutions
        </div>
        <div style="font-size: 10.5px; color: #cbd5e1; margin-top: 4px;">
          Kota Blue Stone · Kota Brown Stone · Mandana Red Quartzite · Jumbo Slabs · Wall Cladding · Custom Stairs
        </div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 10px;">
      <div class="card" style="text-align: center;">
        <div style="color: #c5a880; font-size: 16px; font-weight: 700;">15+ Acres</div>
        <div style="font-size: 8.5px; color: #94a3b8; text-transform: uppercase; margin-top: 2px;">Processing Campus</div>
      </div>
      <div class="card" style="text-align: center;">
        <div style="color: #c5a880; font-size: 16px; font-weight: 700;">300+ Tons</div>
        <div style="font-size: 8.5px; color: #94a3b8; text-transform: uppercase; margin-top: 2px;">Daily Production</div>
      </div>
      <div class="card" style="text-align: center;">
        <div style="color: #c5a880; font-size: 16px; font-weight: 700;">18+ Countries</div>
        <div style="font-size: 8.5px; color: #94a3b8; text-transform: uppercase; margin-top: 2px;">Global Export Reach</div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left">
        <span>KAMAL INDUSTRIES & ENTERPRISES</span> · Ramganjmandi, Kota, Rajasthan
      </div>
      <div>www.kamalindustries.in</div>
    </div>
  </div>

  <!-- PAGE 2: ABOUT US & WHY CHOOSE US -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${imgs.logo}" class="header-logo" alt="Logo">
          <div>
            <div class="brand-name">KAMAL INDUSTRIES</div>
            <div class="brand-sub">About & Company Vision</div>
          </div>
        </div>
        <div class="header-right">
          Export Quality Kota Stone<br>Page 2
        </div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Establishing Benchmark Excellence Since 1985</span>
        <div class="page-title">About <span>Kamal Industries</span></div>
      </div>

      <div class="card-gold" style="margin-bottom: 14px;">
        <div style="font-size: 11px; color: #e2e8f0; leading-height: 1.6;">
          <strong>Kamal Industries & Enterprises</strong> is a premier manufacturer, processor, and exporter of authentic Kota Blue Stone, Kota Brown Stone, and Mandana Red Quartzite. Operating out of a state-of-the-art 15-acre campus in Amarpura, Ramganjmandi (Kota District, Rajasthan), we combine traditional stone craftsmanship with modern high-speed diamond gang saws and automated multi-disc edge cutters.
          Our integrated quarry-to-project supply chain ensures consistent color grading, structural density, and exact dimensional calibration for global architectural projects.
        </div>
      </div>

      <div class="img-container" style="height: 140px; margin-bottom: 14px;">
        <img src="${imgs.factoryYard1}" alt="Factory Yard">
        <div class="img-caption">15-Acre Integrated Stone Processing Yard & Stock Infrastructure in Ramganjmandi</div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">The Direct Manufacturer Advantage</span>
        <div class="page-title">Why <span>Choose Us</span></div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 3px;">1. Wholesale Factory Pricing</div>
          <div style="font-size: 9.5px; color: #cbd5e1;">Quarried and processed in-house. Eliminate intermediary markups and get authentic factory-direct rates.</div>
        </div>
        <div class="card">
          <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 3px;">2. Precision Calibrated Cutting</div>
          <div style="font-size: 9.5px; color: #cbd5e1;">CNC & multi-blade diamond gang saws yield exact right angles with tight ±1mm thickness tolerances.</div>
        </div>
        <div class="card">
          <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 3px;">3. Ultra-Low Porosity & Durability</div>
          <div style="font-size: 9.5px; color: #cbd5e1;">Water absorption as low as 0.02%, making our stones naturally stain-resistant and slip-proof.</div>
        </div>
        <div class="card">
          <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 3px;">4. Seaworthy Wooden Crate Packing</div>
          <div style="font-size: 9.5px; color: #cbd5e1;">ISPM-15 fumigated wooden pallets with foam interleaving and high-tensile steel banding prevent damage.</div>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 2</div>
    </div>
  </div>

  <!-- PAGE 3: MANUFACTURING PROCESS & QUALITY ASSURANCE -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${imgs.logo}" class="header-logo" alt="Logo">
          <div>
            <div class="brand-name">KAMAL INDUSTRIES</div>
            <div class="brand-sub">Manufacturing & Quality Operations</div>
          </div>
        </div>
        <div class="header-right">
          Quality Assurance<br>Page 3
        </div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">End-to-End Processing Workflow</span>
        <div class="page-title">Manufacturing <span>Process</span></div>
      </div>

      <div class="grid-3" style="margin-bottom: 14px;">
        <div class="card">
          <div class="img-container" style="height: 90px; margin-bottom: 8px;">
            <img src="${imgs.quarry}" alt="Quarrying">
          </div>
          <div style="color: #c5a880; font-weight: 700; font-size: 10px;">Step 1: Sustainable Quarrying</div>
          <div style="font-size: 8.5px; color: #94a3b8; margin-top: 2px;">Selective extraction of prime limestone strata in Ramganjmandi belt.</div>
        </div>

        <div class="card">
          <div class="img-container" style="height: 90px; margin-bottom: 8px;">
            <img src="${imgs.cutting1}" alt="Gang Saw Cutting">
          </div>
          <div style="color: #c5a880; font-weight: 700; font-size: 10px;">Step 2: Gang Saw Block Slicing</div>
          <div style="font-size: 8.5px; color: #94a3b8; margin-top: 2px;">Heavy-duty diamond gang saws slice raw stone blocks into uniform slabs.</div>
        </div>

        <div class="card">
          <div class="img-container" style="height: 90px; margin-bottom: 8px;">
            <img src="${imgs.cutting2}" alt="Surface Calibration">
          </div>
          <div style="color: #c5a880; font-weight: 700; font-size: 10px;">Step 3: Surface Processing</div>
          <div style="font-size: 8.5px; color: #94a3b8; margin-top: 2px;">Automated honing, mirror polishing, leathering, or flaming treatments.</div>
        </div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Zero Defect Commitment</span>
        <div class="page-title">Quality <span>Inspection & Testing</span></div>
      </div>

      <div class="grid-2">
        <div class="card-gold">
          <div class="img-container" style="height: 110px; margin-bottom: 8px;">
            <img src="${imgs.qualityImg}" alt="Quality Check">
          </div>
          <div style="color: #ffffff; font-weight: 700; font-size: 11px;">100% Tile-by-Tile Inspection</div>
          <div style="font-size: 9px; color: #cbd5e1; margin-top: 3px;">
            Every single stone slab and tile undergoes manual inspection by trained technicians to check diagonal squareness, edge sharpness, surface smoothness, and absence of micro-fractures.
          </div>
        </div>

        <div class="card">
          <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 6px;">Technical Benchmark Standards</div>
          <table class="spec-table" style="font-size: 8.5px;">
            <tr><td class="spec-label">Water Absorption</td><td class="spec-val">0.02% to 0.04% (ASTM C97)</td></tr>
            <tr><td class="spec-label">Compressive Strength</td><td class="spec-val">210 to 240 MPa (ASTM C170)</td></tr>
            <tr><td class="spec-label">Density</td><td class="spec-val">2.62 to 2.68 g/cm³</td></tr>
            <tr><td class="spec-label">Mohs Hardness</td><td class="spec-val">3.5 to 4.0 Mohs Scale</td></tr>
            <tr><td class="spec-label">Flexural Strength</td><td class="spec-val">28 to 32 MPa (ASTM C99)</td></tr>
          </table>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 3</div>
    </div>
  </div>

  <!-- PAGE 4: PRODUCT CATEGORY 1: KOTA BLUE STONE -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${imgs.logo}" class="header-logo" alt="Logo">
          <div>
            <div class="brand-name">KAMAL INDUSTRIES</div>
            <div class="brand-sub">Product Series 01</div>
          </div>
        </div>
        <div class="header-right">Kota Blue Limestone<br>Page 4</div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Benchmark Natural Limestone</span>
        <div class="page-title">Kota <span>Blue Stone</span></div>
      </div>

      <div class="grid-3" style="margin-bottom: 12px;">
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.kotaBlue1}" alt="Kota Blue 1">
          <div class="img-caption">Natural Split Kota Blue</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.kotaBlue2}" alt="Kota Blue 2">
          <div class="img-caption">Honed & Calibrated Tiles</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.kotaBlue3}" alt="Kota Blue 3">
          <div class="img-caption">Mirror Polished Surface</div>
        </div>
      </div>

      <div class="card-gold" style="margin-bottom: 12px;">
        <div style="font-size: 10.5px; color: #cbd5e1;">
          <strong>Kota Blue Stone</strong> is our flagship natural limestone, prized globally for its rich blue-grey hue, fine grain, and non-porous structure. Exceptionally durable under high foot traffic, it remains cool under direct sunlight and offers natural slip resistance.
        </div>
      </div>

      <div class="card">
        <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 4px;">Technical & Ordering Specifications</div>
        <table class="spec-table">
          <tr><td class="spec-label">Product Name</td><td class="spec-val">Kota Blue Natural Limestone</td></tr>
          <tr><td class="spec-label">Available Sizes</td><td class="spec-val">11x11", 11x23", 23x23", 23x35", 2x2 ft, 2x4 ft (Custom sizes available)</td></tr>
          <tr><td class="spec-label">Thickness Options</td><td class="spec-val">18mm, 20mm, 25mm, 30mm, 40mm (±1mm calibrated)</td></tr>
          <tr><td class="spec-label">Surface Finishes</td><td class="spec-val">Natural Rough Split, Honed Satin, High Gloss Polished, Leathered, Tumbling</td></tr>
          <tr><td class="spec-label">Applications</td><td class="spec-val">Interior Flooring, Exterior Patios, Commercial Corridors, Railway Platforms, Pathways</td></tr>
        </table>

        <div style="margin-top: 10px; font-size: 9.5px; color: #94a3b8; font-weight: 600;">Key Features:</div>
        <div class="pill-group">
          <span class="pill">Extreme Durability</span>
          <span class="pill">Slip Resistant</span>
          <span class="pill">Non-Porous</span>
          <span class="pill">Weather Resistant</span>
          <span class="pill">Low Maintenance</span>
          <span class="pill">Eco Friendly</span>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 4</div>
    </div>
  </div>

  <!-- PAGE 5: PRODUCT CATEGORY 2: KOTA BROWN STONE -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${imgs.logo}" class="header-logo" alt="Logo">
          <div>
            <div class="brand-name">KAMAL INDUSTRIES</div>
            <div class="brand-sub">Product Series 02</div>
          </div>
        </div>
        <div class="header-right">Kota Brown Limestone<br>Page 5</div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Warm Architectural Tones</span>
        <div class="page-title">Kota <span>Brown Stone</span></div>
      </div>

      <div class="grid-3" style="margin-bottom: 12px;">
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.kotaBrown1}" alt="Kota Brown 1">
          <div class="img-caption">Natural Split Texture</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.kotaBrown2}" alt="Kota Brown 2">
          <div class="img-caption">Honed Earthy Finish</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.kotaBrown3}" alt="Kota Brown 3">
          <div class="img-caption">Polished Brown Flooring</div>
        </div>
      </div>

      <div class="card-gold" style="margin-bottom: 12px;">
        <div style="font-size: 10.5px; color: #cbd5e1;">
          <strong>Kota Brown Stone</strong> delivers warm beige, honey, and chocolate brown tones that bring organic beauty and natural warmth to modern and heritage architectural designs.
        </div>
      </div>

      <div class="card">
        <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 4px;">Technical & Ordering Specifications</div>
        <table class="spec-table">
          <tr><td class="spec-label">Product Name</td><td class="spec-val">Kota Brown Limestone</td></tr>
          <tr><td class="spec-label">Available Sizes</td><td class="spec-val">12x12", 12x18", 18x18", 18x24", 24x24", 2x4 ft</td></tr>
          <tr><td class="spec-label">Thickness Options</td><td class="spec-val">18mm, 20mm, 25mm, 30mm</td></tr>
          <tr><td class="spec-label">Surface Finishes</td><td class="spec-val">Natural Split, Machine Sawn, Honed, Sandblasted, Polished</td></tr>
          <tr><td class="spec-label">Applications</td><td class="spec-val">Living Rooms, Courtyards, Hotel Lobbies, Accent Paving, Outdoor Terraces</td></tr>
        </table>

        <div style="margin-top: 10px; font-size: 9.5px; color: #94a3b8; font-weight: 600;">Key Features:</div>
        <div class="pill-group">
          <span class="pill">Earthy Aesthetic</span>
          <span class="pill">High Density</span>
          <span class="pill">Thermal Comfort</span>
          <span class="pill">Stain Resistant</span>
          <span class="pill">Uniform Texture</span>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 5</div>
    </div>
  </div>

  <!-- PAGE 6: PRODUCT CATEGORY 3: MANDANA RED STONE -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${imgs.logo}" class="header-logo" alt="Logo">
          <div>
            <div class="brand-name">KAMAL INDUSTRIES</div>
            <div class="brand-sub">Product Series 03</div>
          </div>
        </div>
        <div class="header-right">Mandana Red Quartzite<br>Page 6</div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Acid-Proof Terracotta Quartzite</span>
        <div class="page-title">Mandana <span>Red Stone</span></div>
      </div>

      <div class="grid-3" style="margin-bottom: 12px;">
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.mandana1}" alt="Mandana Red 1">
          <div class="img-caption">Terracotta Red Natural Split</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.mandana2}" alt="Mandana Red 2">
          <div class="img-caption">Machine Sawn Tiles</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.mandana3}" alt="Mandana Red 3">
          <div class="img-caption">Industrial Grade Slabs</div>
        </div>
      </div>

      <div class="card-gold" style="margin-bottom: 12px;">
        <div style="font-size: 10.5px; color: #cbd5e1;">
          <strong>Mandana Red Quartzite</strong> is an exceptionally hard, acid-resistant red sandstone/quartzite quarried in Rajasthan. Famous for its vibrant terracotta red hue and immunity to harsh chemical environments.
        </div>
      </div>

      <div class="card">
        <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 4px;">Technical & Ordering Specifications</div>
        <table class="spec-table">
          <tr><td class="spec-label">Product Name</td><td class="spec-val">Mandana Red Quartzite / Sandstone</td></tr>
          <tr><td class="spec-label">Available Sizes</td><td class="spec-val">12x12", 12x18", 18x18", 24x24", Custom Cut Slabs</td></tr>
          <tr><td class="spec-label">Thickness Options</td><td class="spec-val">20mm, 25mm, 30mm, 35mm, 50mm</td></tr>
          <tr><td class="spec-label">Surface Finishes</td><td class="spec-val">Natural Split, Flamed, Sandblasted, Shotblasted</td></tr>
          <tr><td class="spec-label">Applications</td><td class="spec-val">Chemical & Acid Plants, Industrial Workshops, Heritage Buildings, Ramps, Outdoor Paving</td></tr>
        </table>

        <div style="margin-top: 10px; font-size: 9.5px; color: #94a3b8; font-weight: 600;">Key Features:</div>
        <div class="pill-group">
          <span class="pill">100% Acid Proof</span>
          <span class="pill">Harder Than Granite</span>
          <span class="pill">Heavy Load Capacity</span>
          <span class="pill">Heritage Red Hue</span>
          <span class="pill">Anti Skid</span>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 6</div>
    </div>
  </div>

  <!-- PAGE 7: PRODUCT CATEGORY 4: LARGE FORMAT SLABS -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${imgs.logo}" class="header-logo" alt="Logo">
          <div>
            <div class="brand-name">KAMAL INDUSTRIES</div>
            <div class="brand-sub">Product Series 04</div>
          </div>
        </div>
        <div class="header-right">Jumbo Gangsaw Slabs<br>Page 7</div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Seamless Grand Scale Coverage</span>
        <div class="page-title">Large Format <span>Kota Slabs</span></div>
      </div>

      <div class="grid-3" style="margin-bottom: 12px;">
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.slabs1}" alt="Kota Slabs 1">
          <div class="img-caption">Jumbo Gangsaw Slabs</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.slabs2}" alt="Kota Slabs 2">
          <div class="img-caption">Polished Blue Slabs</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.slabs3}" alt="Kota Slabs 3">
          <div class="img-caption">Custom Cut Large Formats</div>
        </div>
      </div>

      <div class="card-gold" style="margin-bottom: 12px;">
        <div style="font-size: 10.5px; color: #cbd5e1;">
          Processed on precision diamond gang saws, our **Large Format Jumbo Slabs** provide seamless floor coverage with minimal joint lines, elevating luxury residential villas and commercial complexes.
        </div>
      </div>

      <div class="card">
        <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 4px;">Technical & Ordering Specifications</div>
        <table class="spec-table">
          <tr><td class="spec-label">Product Name</td><td class="spec-val">Kota Stone Large Format Gangsaw Slabs</td></tr>
          <tr><td class="spec-label">Available Sizes</td><td class="spec-val">Up to 4x8 ft, 3x6 ft, 2x5 ft, custom jumbo dimensions</td></tr>
          <tr><td class="spec-label">Thickness Options</td><td class="spec-val">20mm, 25mm, 30mm, 40mm, 50mm</td></tr>
          <tr><td class="spec-label">Surface Finishes</td><td class="spec-val">Machine Sawn, Satin Honed, Mirror Polished, Leather Finish</td></tr>
          <tr><td class="spec-label">Applications</td><td class="spec-val">Luxury Villa Living Rooms, Corporate Boardrooms, Grand Entrance Lobbies, Countertops</td></tr>
        </table>

        <div style="margin-top: 10px; font-size: 9.5px; color: #94a3b8; font-weight: 600;">Key Features:</div>
        <div class="pill-group">
          <span class="pill">Minimal Grout Lines</span>
          <span class="pill">High Flexural Strength</span>
          <span class="pill">Calibrated Thickness</span>
          <span class="pill">Stain Resistant</span>
          <span class="pill">Luxury Aesthetics</span>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 7</div>
    </div>
  </div>

  <!-- PAGE 8: PRODUCT CATEGORY 5: KOTA STONE STAIRS -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${imgs.logo}" class="header-logo" alt="Logo">
          <div>
            <div class="brand-name">KAMAL INDUSTRIES</div>
            <div class="brand-sub">Product Series 05</div>
          </div>
        </div>
        <div class="header-right">Stair Treads & Risers<br>Page 8</div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Safety & High Traffic Durability</span>
        <div class="page-title">Kota Stone <span>Stairs & Treads</span></div>
      </div>

      <div class="grid-3" style="margin-bottom: 12px;">
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.stairs1}" alt="Kota Stairs 1">
          <div class="img-caption">Natural Split Stair Treads</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.stairs2}" alt="Kota Stairs 2">
          <div class="img-caption">Honed Treads & Risers</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.stairs3}" alt="Kota Stairs 3">
          <div class="img-caption">Bullnosed Edge Steps</div>
        </div>
      </div>

      <div class="card-gold" style="margin-bottom: 12px;">
        <div style="font-size: 10.5px; color: #cbd5e1;">
          Custom sawn **Kota Stone Stair Treads & Risers** engineered for high-traffic public, commercial, and residential staircases. Available with anti-slip grooves and custom edge profiles.
        </div>
      </div>

      <div class="card">
        <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 4px;">Technical & Ordering Specifications</div>
        <table class="spec-table">
          <tr><td class="spec-label">Product Name</td><td class="spec-val">Kota Stone Stair Treads & Risers</td></tr>
          <tr><td class="spec-label">Available Sizes</td><td class="spec-val">Width 12" to 15", Length 3 ft to 6 ft, Riser height 6" to 8"</td></tr>
          <tr><td class="spec-label">Thickness Options</td><td class="spec-val">25mm, 30mm, 40mm, 50mm</td></tr>
          <tr><td class="spec-label">Surface Finishes</td><td class="spec-val">Anti-slip Honed, Natural Split, Groove-cut Treads, Polished</td></tr>
          <tr><td class="spec-label">Applications</td><td class="spec-val">Metro Stations, Hospitals, Commercial Complexes, Residential Staircases, Park Steps</td></tr>
        </table>

        <div style="margin-top: 10px; font-size: 9.5px; color: #94a3b8; font-weight: 600;">Key Features:</div>
        <div class="pill-group">
          <span class="pill">Anti-Slip Safety</span>
          <span class="pill">Custom Edge Profiling</span>
          <span class="pill">Zero Edge Chipping</span>
          <span class="pill">Heavy Load Bearing</span>
          <span class="pill">High Abrasion Resistance</span>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 8</div>
    </div>
  </div>

  <!-- PAGE 9: PRODUCT CATEGORY 6: WALL CLADDING -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${imgs.logo}" class="header-logo" alt="Logo">
          <div>
            <div class="brand-name">KAMAL INDUSTRIES</div>
            <div class="brand-sub">Product Series 06</div>
          </div>
        </div>
        <div class="header-right">Wall Cladding Panels<br>Page 9</div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Architectural Facades & Features</span>
        <div class="page-title">Kota Stone <span>Wall Cladding</span></div>
      </div>

      <div class="grid-3" style="margin-bottom: 12px;">
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.cladding1}" alt="Wall Cladding 1">
          <div class="img-caption">Natural Split-Face Strips</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.cladding2}" alt="Wall Cladding 2">
          <div class="img-caption">Honed Facade Panels</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.cladding3}" alt="Wall Cladding 3">
          <div class="img-caption">3D Texture Feature Walls</div>
        </div>
      </div>

      <div class="card-gold" style="margin-bottom: 12px;">
        <div style="font-size: 10.5px; color: #cbd5e1;">
          **Natural Split-Face & Sawn Wall Cladding Tiles** provide impressive thermal insulation, UV protection, and rich tactile depth for exterior building elevations and interior feature walls.
        </div>
      </div>

      <div class="card">
        <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 4px;">Technical & Ordering Specifications</div>
        <table class="spec-table">
          <tr><td class="spec-label">Product Name</td><td class="spec-val">Kota Stone & Mandana Wall Cladding Tiles</td></tr>
          <tr><td class="spec-label">Available Sizes</td><td class="spec-val">6x12", 6x18", 12x24", Z-shape ledger panels</td></tr>
          <tr><td class="spec-label">Thickness Options</td><td class="spec-val">15mm, 20mm, 25mm variable split</td></tr>
          <tr><td class="spec-label">Surface Finishes</td><td class="spec-val">Natural Split-Face, Rock Face, Honed Strips, Grooved Tiles</td></tr>
          <tr><td class="spec-label">Applications</td><td class="spec-val">Exterior Villa Facades, Boundary Walls, Hotel Reception Walls, Water Feature Accents</td></tr>
        </table>

        <div style="margin-top: 10px; font-size: 9.5px; color: #94a3b8; font-weight: 600;">Key Features:</div>
        <div class="pill-group">
          <span class="pill">Thermal Insulation</span>
          <span class="pill">UV & Weather Proof</span>
          <span class="pill">Tactile 3D Depth</span>
          <span class="pill">Zero Maintenance</span>
          <span class="pill">Fade Resistant</span>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 9</div>
    </div>
  </div>

  <!-- PAGE 10: PRODUCT CATEGORY 7: GARDEN & LANDSCAPE STONE -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${imgs.logo}" class="header-logo" alt="Logo">
          <div>
            <div class="brand-name">KAMAL INDUSTRIES</div>
            <div class="brand-sub">Product Series 07</div>
          </div>
        </div>
        <div class="header-right">Landscape & Garden<br>Page 10</div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Outdoor Paving & Pathways</span>
        <div class="page-title">Garden & <span>Landscape Stone</span></div>
      </div>

      <div class="grid-3" style="margin-bottom: 12px;">
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.garden1}" alt="Garden Stone 1">
          <div class="img-caption">Garden Pathway Pavers</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.garden2}" alt="Garden Stone 2">
          <div class="img-caption">Courtyard Flagstones</div>
        </div>
        <div class="img-container" style="height: 125px;">
          <img src="${imgs.garden3}" alt="Garden Stone 3">
          <div class="img-caption">Pool Deck Paving</div>
        </div>
      </div>

      <div class="card-gold" style="margin-bottom: 12px;">
        <div style="font-size: 10.5px; color: #cbd5e1;">
          Weatherproof **Garden Pavers, Stepping Stones, and Flagstones** designed to withstand rain, frost, and high summer heat while delivering organic natural aesthetics for outdoor living.
        </div>
      </div>

      <div class="card">
        <div style="color: #c5a880; font-weight: 700; font-size: 11px; margin-bottom: 4px;">Technical & Ordering Specifications</div>
        <table class="spec-table">
          <tr><td class="spec-label">Product Name</td><td class="spec-val">Kota Stone Landscape Pavers & Flagstones</td></tr>
          <tr><td class="spec-label">Available Sizes</td><td class="spec-val">Stepping stones, 12x12", 18x24", 24x36" pavers, random flagstones</td></tr>
          <tr><td class="spec-label">Thickness Options</td><td class="spec-val">25mm, 30mm, 40mm, 50mm</td></tr>
          <tr><td class="spec-label">Surface Finishes</td><td class="spec-val">Natural Tumbled, Sandblasted, Bush-Hammered, Rough Split</td></tr>
          <tr><td class="spec-label">Applications</td><td class="spec-val">Garden Paths, Swimming Pool Decks, Courtyards, Driveways, Public Parks</td></tr>
        </table>

        <div style="margin-top: 10px; font-size: 9.5px; color: #94a3b8; font-weight: 600;">Key Features:</div>
        <div class="pill-group">
          <span class="pill">Naturally Non-Slip</span>
          <span class="pill">Moss & Algae Resistant</span>
          <span class="pill">Frost & Heat Resistant</span>
          <span class="pill">Organic Aesthetic</span>
          <span class="pill">High Load Paving</span>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 10</div>
    </div>
  </div>

  <!-- PAGE 11: DEDICATED PAGE: FACTORY & PACKING -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${imgs.logo}" class="header-logo" alt="Logo">
          <div>
            <div class="brand-name">KAMAL INDUSTRIES</div>
            <div class="brand-sub">Factory & Logistics Infrastructure</div>
          </div>
        </div>
        <div class="header-right">Infrastructure<br>Page 11</div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">15-Acre Processing Powerhouse</span>
        <div class="page-title">Factory & <span>Manufacturing Operations</span></div>
      </div>

      <div class="grid-3" style="margin-bottom: 12px;">
        <div class="img-container" style="height: 105px;">
          <img src="${imgs.cutting3}" alt="Machine Yard">
          <div class="img-caption">High-Speed Diamond Saws</div>
        </div>
        <div class="img-container" style="height: 105px;">
          <img src="${imgs.factoryYard2}" alt="Stock Yard">
          <div class="img-caption">Raw Block Inventory</div>
        </div>
        <div class="img-container" style="height: 105px;">
          <img src="${imgs.stockYard1}" alt="Stock Slabs">
          <div class="img-caption">Slab Calibration Yard</div>
        </div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Export Security Standard</span>
        <div class="page-title">Packing & <span>Container Loading</span></div>
      </div>

      <div class="grid-3">
        <div class="card">
          <div class="img-container" style="height: 95px; margin-bottom: 6px;">
            <img src="${imgs.packingDoc}" alt="Packing Doc">
          </div>
          <div style="color: #c5a880; font-weight: 700; font-size: 10px;">ISPM-15 Wooden Crates</div>
          <div style="font-size: 8.5px; color: #94a3b8; margin-top: 2px;">Fumigated wooden pallets with inner foam cushioning.</div>
        </div>

        <div class="card">
          <div class="img-container" style="height: 95px; margin-bottom: 6px;">
            <img src="${imgs.packingImg}" alt="Crate Packing">
          </div>
          <div style="color: #c5a880; font-weight: 700; font-size: 10px;">Heavy Steel Banding</div>
          <div style="font-size: 8.5px; color: #94a3b8; margin-top: 2px;">High-tensile steel straps & plastic wrapping for water protection.</div>
        </div>

        <div class="card">
          <div class="img-container" style="height: 95px; margin-bottom: 6px;">
            <img src="${imgs.loading1}" alt="Container Loading">
          </div>
          <div style="color: #c5a880; font-weight: 700; font-size: 10px;">Safe Container Stuffing</div>
          <div style="font-size: 8.5px; color: #94a3b8; margin-top: 2px;">Trained logistics personnel securing crates for zero transit damage.</div>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 11</div>
    </div>
  </div>

  <!-- PAGE 12: DEDICATED PAGE: EXPORT & COMPLETED PROJECTS -->
  <div class="page">
    <div>
      <div class="header-bar">
        <div class="header-left">
          <img src="${imgs.logo}" class="header-logo" alt="Logo">
          <div>
            <div class="brand-name">KAMAL INDUSTRIES</div>
            <div class="brand-sub">Export Reach & Global Portfolio</div>
          </div>
        </div>
        <div class="header-right">Portfolio<br>Page 12</div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Pan-India & International Supply</span>
        <div class="page-title">Export & <span>Logistics Reach</span></div>
      </div>

      <div class="card-gold" style="display: flex; gap: 12px; align-items: center; margin-bottom: 14px;">
        <img src="${imgs.deliveryImg}" style="width: 140px; height: 85px; object-fit: cover; border-radius: 6px;" alt="Delivery Truck">
        <div>
          <div style="color: #ffffff; font-weight: 700; font-size: 11px;">Mundra & Kandla Port Logistics</div>
          <div style="font-size: 9px; color: #cbd5e1; margin-top: 3px;">
            We coordinate full-container dispatches (FCL) directly to major sea ports (Mundra & Kandla) as well as containerized road freight across all Indian states with real-time transit tracking.
          </div>
        </div>
      </div>

      <div class="section-header">
        <span class="tagline-badge">Realized Architectural Spaces</span>
        <div class="page-title">Completed <span>Projects Gallery</span></div>
      </div>

      <div class="grid-3">
        <div class="img-container" style="height: 105px;">
          <img src="${imgs.proj1}" alt="Project 1">
          <div class="img-caption">Polished Kota Interior Paving</div>
        </div>
        <div class="img-container" style="height: 105px;">
          <img src="${imgs.proj2}" alt="Project 2">
          <div class="img-caption">Commercial Plaza Flooring</div>
        </div>
        <div class="img-container" style="height: 105px;">
          <img src="${imgs.proj3}" alt="Project 3">
          <div class="img-caption">Exterior Elevation Cladding</div>
        </div>
        <div class="img-container" style="height: 105px;">
          <img src="${imgs.proj4}" alt="Project 4">
          <div class="img-caption">Heritage Villa Courtyard</div>
        </div>
        <div class="img-container" style="height: 105px;">
          <img src="${imgs.proj5}" alt="Project 5">
          <div class="img-caption">Honed Stone Flooring</div>
        </div>
        <div class="img-container" style="height: 105px;">
          <img src="${imgs.proj6}" alt="Project 6">
          <div class="img-caption">Outdoor Landscape Pathway</div>
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 12</div>
    </div>
  </div>

  <!-- PAGE 13: FINAL CONTACT & QR CODE PAGE -->
  <div class="page" style="background: radial-gradient(circle at 50% 30%, #1e2942 0%, #0b1120 70%);">
    <div>
      <div style="text-align: center; margin-top: 10px; margin-bottom: 20px;">
        <img src="${imgs.logo}" style="height: 48px; border-radius: 6px; border: 1.5px solid #c5a880; margin-bottom: 8px;" alt="Logo">
        <div style="font-family: Georgia, serif; font-size: 26px; font-weight: 700; color: #ffffff;">
          KAMAL INDUSTRIES & ENTERPRISES
        </div>
        <div style="font-size: 10px; color: #c5a880; text-transform: uppercase; letter-spacing: 3px; font-weight: 700; margin-top: 2px;">
          Direct Stone Manufacturer & Exporter
        </div>
        <div style="width: 60px; height: 2px; background: #c5a880; margin: 10px auto;"></div>
      </div>

      <div class="grid-2" style="margin-bottom: 16px;">
        <div class="card-gold">
          <div style="color: #c5a880; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
            Factory & Corporate Address
          </div>
          <div style="font-size: 10px; color: #e2e8f0; line-height: 1.6;">
            <strong>Kamal Industries & Enterprises</strong><br>
            Amarpura, Ramganjmandi,<br>
            Kota District, Rajasthan – 326519, India<br>
            <br>
            <span style="color: #c5a880;">GST / Factory Reg:</span> Certified Direct Processing Campus
          </div>
        </div>

        <div class="card-gold">
          <div style="color: #c5a880; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
            Sales & Enquiry Contacts
          </div>
          <div style="font-size: 10px; color: #e2e8f0; line-height: 1.6;">
            <strong>Phone / Mobile:</strong><br>
            +91 92148 30464 | +91 94142 26966<br><br>
            <strong>WhatsApp Business:</strong> +91 92148 30464<br>
            <strong>Email:</strong> kamalindustriesfactory@gmail.com<br>
            <strong>Website:</strong> www.kamalindustries.in
          </div>
        </div>
      </div>

      <!-- QR CODE CARD -->
      <div class="card-gold" style="text-align: center; padding: 18px; margin-bottom: 16px;">
        <div style="font-size: 12px; font-weight: 700; color: #ffffff; margin-bottom: 4px;">
          Scan QR Code to Visit Official Website
        </div>
        <div style="font-size: 9.5px; color: #94a3b8; margin-bottom: 12px;">
          Access product galleries, technical data sheets, and direct WhatsApp project quotations.
        </div>
        <div style="display: flex; justify-content: center; align-items: center;">
          <img src="${qrDataUri}" style="width: 130px; height: 130px; border-radius: 8px; border: 3px solid #c5a880; padding: 4px; background: #ffffff;" alt="Website QR Code">
        </div>
        <div style="font-size: 10px; font-weight: 700; color: #c5a880; margin-top: 10px;">
          https://kamalindustries.in
        </div>
      </div>

      <div class="card" style="text-align: center;">
        <div style="font-size: 9.5px; color: #cbd5e1;">
          &copy; 2026 Kamal Industries & Enterprises. All Rights Reserved. Specifications subject to standard quarry tolerances.
        </div>
      </div>
    </div>

    <div class="footer-bar">
      <div class="footer-left"><span>KAMAL INDUSTRIES</span> · Ramganjmandi, Kota, Rajasthan</div>
      <div>Page 13 / 13</div>
    </div>
  </div>

</body>
</html>
  `;

  const tempHtmlPath = path.join(__dirname, 'temp-catalogue.html');
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  const pdfPath = path.join(publicDir, 'Kamal_Industries_Kota_Stone_Catalogue.pdf');

  console.log('Launching headless browser via Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });

  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(120000);

  const fileUrl = `file:///${tempHtmlPath.replace(/\\/g, '/')}`;
  console.log(`Navigating to ${fileUrl}...`);
  await page.goto(fileUrl, { waitUntil: 'load', timeout: 120000 });

  console.log('Generating PDF file...');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });

  await browser.close();

  // Clean up temp file
  if (fs.existsSync(tempHtmlPath)) {
    fs.unlinkSync(tempHtmlPath);
  }

  const stats = fs.statSync(pdfPath);
  console.log(`SUCCESS! Catalogue PDF generated: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes) at ${pdfPath}`);
}

main().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
