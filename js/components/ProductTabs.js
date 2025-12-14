function relatedProductsHTML() {
  return `
    <div class="space-y-8 mt-20">
      <h3 class="text-xl font-semibold">You may also like</h3>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">

        ${[
          {
            img: "shoe.png",
            name: "AKTIV HIGH KORE",
            price: "10,00 €",
            old: "17,95 €",
            tag: "20g ₱",
            contain: true,
          },
          {
            img: "hat.jpg",
            name: "Cold Hat",
            price: "12,50 €",
            old: "24,50 €",
            review: "☆☆☆☆☆ 1 Review",
            contain: true,
          },
          {
            img: "Orange.png",
            name: "Visor Taktik White/Orange",
            price: "9,00 €",
            old: "19,95 €",
            tag: "25g ₱",
          },
          {
            img: "girl.png",
            name: "Visor Taktik Red",
            price: "8,00 €",
            old: "19,95 €",
            tag: "25g ₱",
          },
        ]
          .map(
            (p) => `
          <div class="group cursor-pointer">
            <div class="relative bg-gray-100 rounded-xl overflow-hidden">
              <img src="./assets/images/${p.img}"
                class="w-full h-[260px] ${p.contain ? "object-contain" : "object-cover"} group-hover:scale-105 transition"
                alt="${p.name}" />
              ${p.tag ? `<span class="absolute bottom-3 left-3 text-xs bg-white px-2 py-1 rounded">${p.tag}</span>` : ""}
            </div>

            <div class="mt-3 text-sm">
              <p class="font-medium">${p.name}</p>
              <p class="text-gray-500">
                <span class="font-semibold text-black">${p.price}</span>
                <span class="line-through ml-1">${p.old}</span>
              </p>
              ${p.review ? `<p class="text-xs text-gray-400 mt-1">${p.review}</p>` : ""}
            </div>
          </div>
        `
          )
          .join("")}

      </div>
    </div>
  `;
}

function productVideoHTML() {
  return `
    <div class="relative rounded-2xl overflow-hidden shadow-lg">
      <img src="./assets/videos/rock.png" class="w-full h-[687px] object-cover" />
      <button class="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30">
        <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center">▶</div>
      </button>
    </div>
  `;
}

export function ProductTabs() {
  const app = document.getElementById("app");

  /* Spacer */
  const spacer = document.createElement("div");
  spacer.className = "hidden md:block h-[1150px]";
  app.appendChild(spacer);

  const section = document.createElement("section");
  section.className = "relative w-full max-w-[1400px] mx-auto px-4 md:px-0";

  section.innerHTML = `
    <!-- Tabs -->
    <div class="border-b border-gray-200">
      <div class="flex gap-8 text-sm font-medium">
        ${["details", "sizes", "colors", "delivery"]
          .map(
            (t, i) => `
          <button data-tab="${t}"
            class="tab-btn pb-3 border-b-2 ${
              i === 0 ? "border-black text-black" : "border-transparent text-gray-500 hover:text-black"
            } transition-all capitalize">
            ${t === "details" ? "Product Details" : t}
          </button>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="mt-10">

      <!-- DETAILS -->
      <div id="details" class="tab-content space-y-16">
        <div class="max-w-[900px]">
          <h2 class="text-xl font-semibold mb-3">
            Product information "Falkon Pro Race Jersey"
          </h2>
          <p class="text-sm text-gray-600 leading-relaxed">
            Engineered with an identical cut to the Falkon model, this jersey delivers a fitted, comfortable silhouette designed for full freedom of movement. Made from 100% Aerek 80 polyester, it offers exceptional breathability and moisture-wicking performance to keep you dry during intense exertion. The durable fabric resists wear while remaining lightweight and flexible, ensuring comfort throughout every race. Perfect for athletes who demand performance without compromise.
          </p>
        </div>

        ${productVideoHTML()}
        ${relatedProductsHTML()}
      </div>

      <!-- SIZES -->
<div id="sizes" class="tab-content hidden space-y-12">

  <!-- Text + Dropdown -->
  <div class="max-w-[700px] space-y-4">
    <h2 class="text-lg font-semibold">Sizes</h2>

    <p class="text-sm text-gray-600 leading-relaxed">
      Find your perfect fit with our Falkon Pro Race Jersey. Designed for a fitted,
      performance-oriented silhouette, our sizing ensures comfort and freedom of movement:
    </p>

    <select
      class="w-full max-w-[320px] border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-black"
    >
      <option selected disabled>Select Size</option>
      <option>Small (S)</option>
      <option>Medium (M)</option>
      <option>Large (L)</option>
      <option>Extra Large (XL)</option>
    </select>
  </div>

    <!-- Size Images -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-end">

    ${[
      { 
        label: "Small (S)", 
        img: "./assets/size/sm.svg",
        width: "128px",
        height: "110px"
      },
      { 
        label: "Medium (M)", 
        img: "./assets/size/md.svg",
        width: "199px",
        height: "169px"
      },
      { 
        label: "Large (L)", 
        img: "./assets/size/lr.svg",
        width: "263px",
        height: "274px"
      },
      { 
        label: "Extra Large (XL)", 
        img: "./assets/size/xl.svg",
        width: "322px",
        height: "367px"
      },
    ]
      .map(
        (s) => `
      <div class="text-center space-y-3">
        <img
          src="${s.img}"
          alt="${s.label}"
          style="width: ${s.width}; height: ${s.height};"
          class="mx-auto object-contain"
        />
        <p class="text-sm font-medium">${s.label}</p>
      </div>
    `
      )
      .join("")}

  </div>

  ${productVideoHTML()}
  ${relatedProductsHTML()}
</div>
      <!-- COLORS -->
      <div id="colors" class="tab-content hidden space-y-10">
        <!-- Colors Heading -->
        <div class="ml-[17px]">
          <h2 class="text-xl font-semibold w-[500.8050537109375px] h-[32px]">
            Colors
          </h2>
        </div>
        
        <!-- Description Paragraph -->
        <div class="mt-[49px] ml-[17px]">
          <p class="text-sm text-gray-600 leading-relaxed w-[1253px] h-[94px]">
            Choose the look that matches your style and ride with confidence. The Falkon Pro Race Jersey is available in a curated range of high-performance colors, each selected to complement its sleek, athletic silhouette. Our colors are designed to stay vibrant over time, thanks to premium fade-resistant fabrics.
          </p>
        </div>
        
        <!-- Color Images Section -->
        <div class="space-y-8 mt-16">
          <!-- Color: Royal Brown text image -->
          <div class="gap-[370px]">
            <img 
              src="./assets/color/text.svg" 
              alt="Color: Royal Brown" 
              class="w-[520px] h-[24px] object-contain opacity-100"
            />
          </div>
          
          <!-- Two color view images -->
          <div class="flex flex-col space-y-4 gap-[14px]">
            <div>
              <img 
                src="./assets/color/uimg.svg" 
                alt="Royal Brown upper view" 
                class="w-[1294px] h-[44px] object-contain opacity-100"
              />
            </div>
            <div>
              <img 
                src="./assets/color/limg.svg" 
                alt="Royal Brown left view" 
                class="w-[1294px] h-[44px] object-contain opacity-100"
              />
            </div>
          </div>
        </div>

        ${productVideoHTML()}
        ${relatedProductsHTML()}
      </div>
            <!-- DELIVERY -->
      <div id="delivery" class="tab-content hidden space-y-10">
        <!-- Delivery Detail Heading -->
        <div class="ml-[17px]">
          <h2 class="text-xl font-semibold w-[500.8050537109375px] h-[32px]">
            Delivery Detail
          </h2>
        </div>
        
        <!-- Delivery Description -->
        <div class="mt-[49px] ml-[17px]">
          <p class="text-sm text-gray-600 leading-relaxed w-[1222px] h-[144px]">
            Find your perfect fit with the Falkon Pro Race Jersey, designed for a sleek, performance-focused silhouette that moves with you. Choose from our vibrant, fade-resistant color options for a style that stands out on every ride. Enjoy premium quality at a fair, transparent price with fast, reliable delivery and tracking across the country.<br><br>
            Your order is handled with care through our reliable delivery service. We dispatch within 24–48 hours, offer nationwide shipping, and provide tracking for every order. Secure packaging ensures your jersey arrives in perfect condition and ready for your next ride.
          </p>
        </div>
        
        

        ${productVideoHTML()}
        ${relatedProductsHTML()}
      </div>
  `;

  app.appendChild(section);

  /* Tab logic */
  const buttons = section.querySelectorAll(".tab-btn");
  const contents = section.querySelectorAll(".tab-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("text-black", "border-black");
        b.classList.add("text-gray-500", "border-transparent");
      });

      contents.forEach((c) => c.classList.add("hidden"));

      btn.classList.add("text-black", "border-black");
      btn.classList.remove("text-gray-500", "border-transparent");

      section.querySelector(`#${btn.dataset.tab}`).classList.remove("hidden");
    });
  });
}
