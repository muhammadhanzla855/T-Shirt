export function ProductTabs() {
  const app = document.getElementById("app");

  /* --------------------------------------------------
     SPACER (CRITICAL)
  -------------------------------------------------- */
  const spacer = document.createElement("div");
  spacer.className = "hidden md:block h-[1150px]";
  app.appendChild(spacer);

  /* --------------------------------------------------
     TABS SECTION
  -------------------------------------------------- */
  const section = document.createElement("section");
  section.className =
    "relative w-full max-w-[1400px] mx-auto px-4 md:px-0";

  section.innerHTML = `
    <!-- Tabs Header -->
    <div class="border-b border-gray-200">
      <div class="flex gap-8 text-sm font-medium">

        <button data-tab="details"
          class="tab-btn pb-3 border-b-2 border-black text-black transition-all">
          Product Details
        </button>

        <button data-tab="sizes"
          class="tab-btn pb-3 border-b-2 border-transparent text-gray-500 hover:text-black transition-all">
          Sizes
        </button>

        <button data-tab="colors"
          class="tab-btn pb-3 border-b-2 border-transparent text-gray-500 hover:text-black transition-all">
          Colors
        </button>

        <button data-tab="delivery"
          class="tab-btn pb-3 border-b-2 border-transparent text-gray-500 hover:text-black transition-all">
          Delivery Details
        </button>

      </div>
    </div>

    <!-- Tabs Content -->
    <div class="mt-10">

      <!-- DETAILS TAB -->
      <div id="details" class="tab-content space-y-20">

        <!-- Intro Text -->
        <div class="max-w-[900px]">
          <h2 class="text-xl font-semibold mb-3">Product information "Falkon Pro Race Jersey"</h2>
          <p class="text-sm text-gray-600 leading-relaxed">
            Engineered with an identical cut to the Falkon model, this jersey delivers a fitted, comfortable silhouette designed for full freedom of movement. Made from 100% Aerek 80 polyester, it offers exceptional breathability and moisture-wicking performance to keep you dry during intense exertion. The durable fabric resists wear while remaining lightweight and flexible, ensuring comfort throughout every race. Perfect for athletes who demand performance without compromise.
          </p>
        </div>

        <!-- HERO MEDIA -->
        <div class="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="./assets/videos/rock.png"
            class="w-full h-[687px] object-cover"
            alt="Product in action"
          />
          <button
            class="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition">
            <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black">
              ▶
            </div>
          </button>
        </div>

        <!-- YOU MAY ALSO LIKE -->
        <div>
          <h3 class="text-2xl font-semibold mb-8 text-center">
            You May Also Like
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition">
              <img src="./assets/images/related-1.jpg" class="h-48 w-full object-cover" />
              <div class="p-5">
                <h4 class="font-medium">Premium Edition</h4>
                <p class="text-sm text-gray-600">Enhanced durability and finish</p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition">
              <img src="./assets/images/related-2.jpg" class="h-48 w-full object-cover" />
              <div class="p-5">
                <h4 class="font-medium">Compact Version</h4>
                <p class="text-sm text-gray-600">Lightweight & travel-friendly</p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition">
              <img src="./assets/images/related-3.jpg" class="h-48 w-full object-cover" />
              <div class="p-5">
                <h4 class="font-medium">Pro Bundle</h4>
                <p class="text-sm text-gray-600">Accessories included</p>
              </div>
            </div>
          </div>
        </div>

      </div>
  `;

  app.appendChild(section);

  /* --------------------------------------------------
     TAB LOGIC
  -------------------------------------------------- */
  const buttons = section.querySelectorAll(".tab-btn");
  const contents = section.querySelectorAll(".tab-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("text-black", "border-black");
        b.classList.add("text-gray-500", "border-transparent");
      });

      contents.forEach((c) => c.classList.add("hidden"));

      btn.classList.remove("text-gray-500", "border-transparent");
      btn.classList.add("text-black", "border-black");

      section.querySelector(`#${btn.dataset.tab}`).classList.remove("hidden");
    });
  });
}
