export function productSectionMobile() {
  const section = document.createElement("section");
  section.className = "block md:hidden px-4 pt-20 pb-10";

  section.innerHTML = `
    <!-- PRODUCT IMAGE -->
    <div class="w-full aspect-square border rounded mb-3">
      <img id="mainProductImage" src="./assets/images/m-ing.jpeg" class="w-full h-full object-cover" />
    </div>

    <!-- THUMBNAILS -->
    <div id="thumbnails" class="grid grid-cols-4 gap-2 mb-4">
      <img src="./assets/change/first.jpg" class="w-full aspect-square border-[2px] border-[#00000069] rounded object-cover box-border" />
      <img src="./assets/change/secound.png" class="w-full aspect-square border-[2px] border-[#00000069] rounded object-cover box-border" />
      <img src="./assets/change/third.jpg" class="w-full aspect-square border-[2px] border-[#00000069] rounded object-cover box-border" />
      <img src="./assets/change/four.jpg" class="w-full aspect-square border-[2px] border-[#00000069] rounded object-cover box-border" />
    </div>

    <!-- CATEGORY -->
    <p class="uppercase text-xs text-gray-500 mb-1">Black Friday › BF Women</p>

    <!-- TITLE -->
    <h1 class="text-lg font-semibold leading-snug mb-2">
      VEKTRA Women's Short-Sleeve Trail Running Shirt
    </h1>

    <!-- PRICE -->
    <div class="flex items-center gap-3 mb-3">
      <span class="text-lg font-semibold">$ 215.00</span>
      <span class="text-sm line-through text-gray-400">$ 290.00</span>
    </div>

    <!-- DESCRIPTION -->
    <p class="text-sm text-gray-600 mb-2">
      Discover Vektra, the newest addition to the collection, with the same cut
      as the Falkon, made from breathable and durable Aerek 80 fabric.
    </p>

    <p class="text-sm text-gray-600 mb-4">
      Everything you need for light and comfortable running.
    </p>

    <!-- INFO -->
    <div class="flex justify-between mb-4">
      <div class="flex items-center gap-2">
        <img src="./assets/icons/women.svg" class="w-6 h-6" />
        <div>
          <p class="text-xs uppercase text-gray-400">Sex</p>
          <p class="text-sm">Women</p>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <img src="./assets/icons/poids.svg" class="w-6 h-6" />
        <div>
          <p class="text-xs uppercase text-gray-400">Poids</p>
          <p class="text-sm">105 gr</p>
        </div>
      </div>
    </div>

    <!-- ADD TO CART -->
    <button class="w-full h-[52px] bg-black text-white mb-3">
      ADD TO CART
    </button>

    <!-- QTY + WISHLIST -->
    <div class="flex gap-3 mb-4">
      <div class="flex border h-[52px] flex-1">
        <div class="w-12 flex items-center justify-center">−</div>
        <div class="flex-1 flex items-center justify-center border-x">1</div>
        <div class="w-12 flex items-center justify-center">+</div>
      </div>

      <div class="border border-black flex-1 h-[52px] flex items-center justify-center">
        ADD TO WISHLIST
      </div>
    </div>

    <!-- FREE INFO -->
    <div class="bg-[#F4F4F4] px-3 py-3 mb-4">
      <img src="./assets/icons/free.svg" class="h-4 mb-2" />
      <p class="text-xs text-gray-500">
        Kindly place your order by 6pm on December 22nd for expedited processing
      </p>
    </div>

    <!-- PAYMENT -->
    <p class="text-sm text-gray-500 mb-2">Payment method</p>
    <div class="flex gap-2">
      <img src="./assets/icons/visa.svg" class="h-8" />
      <img src="./assets/icons/mastercard.svg" class="h-8" />
      <img src="./assets/icons/US.svg" class="h-8" />
      <img src="./assets/icons/learnmore.svg" class="h-8" />
    </div>
  `;

  document.getElementById("app").appendChild(section);

  // ====== JS FOR THUMBNAIL CLICK ======
  const mainImage = document.getElementById("mainProductImage");
  const thumbnails = section.querySelectorAll("#thumbnails img");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src; // replace main image with clicked thumbnail
    });
  });
}
