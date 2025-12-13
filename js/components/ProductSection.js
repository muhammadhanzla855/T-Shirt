export function productSection() {
  const section = document.createElement("section");
  section.className = "relative mx-auto px-4 md:px-0";

  section.innerHTML = `
    <!-- Mobile View (md:hidden) -->
    <div class="block md:hidden pt-20 pb-10">
      <!-- PRODUCT IMAGE -->
      <div class="w-full aspect-square border rounded mb-3">
        <img id="mainProductImage" src="./assets/images/m-ing.jpeg" class="w-full h-full object-cover" />
      </div>

      <!-- THUMBNAILS -->
      <div class="grid grid-cols-4 gap-2 mb-4">
        <img src="./assets/change/first.jpg" class="w-full aspect-square border-[2px] border-[#00000069] rounded object-cover box-border thumbnail" />
        <img src="./assets/change/secound.png" class="w-full aspect-square border-[2px] border-[#00000069] rounded object-cover box-border thumbnail" />
        <img src="./assets/change/third.jpg" class="w-full aspect-square border-[2px] border-[#00000069] rounded object-cover box-border thumbnail" />
        <img src="./assets/change/four.jpg" class="w-full aspect-square border-[2px] border-[#00000069] rounded object-cover box-border thumbnail" />
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
    </div>

    <!-- Desktop View (hidden md:block) -->
    <div class="hidden md:block max-w-[1400px] mx-auto">
      <!-- LEFT -->
      <div class="absolute top-[178px] left-[63px] flex gap-[24px]">
        <div class="w-[199px] h-[772px] flex flex-col justify-between">
          <img src="./assets/images/upper.svg" class="w-full h-[233px] border-2 rounded-[4px] object-cover"/>
          <img src="./assets/images/middle.svg" class="w-full h-[249px] border-2 rounded-[4px] object-cover"/>
          <img src="./assets/images/lower.svg" class="w-full h-[248px] border-2 rounded-[4px] object-cover"/>
        </div>

        <img src="./assets/images/m-ing.jpeg" class="w-[600px] h-[773px] object-cover"/>
      </div>

      <!-- RIGHT PANEL -->
      <div class="absolute top-[184px] left-[930px] w-[446px] h-[766px] flex flex-col justify-between">
        <!-- PART 1 : TOP CONTENT -->
        <div class="w-[445px] flex flex-col">
          <p class="uppercase text-xs text-gray-500">
            Black Friday › BF Women
          </p>

          <h1 class="text-3xl font-semibold leading-tight mt-[12px]">
            VEKTRA Women's Short-Sleeve Trail Running Shirt
          </h1>

          <div class="flex gap-[16px] items-center mt-[10px]">
            <span class="text-xl font-semibold">$ 215.00</span>
            <span class="line-through text-gray-400">$ 290.00</span>
          </div>

          <!-- DESCRIPTION -->
          <div class="flex flex-col gap-[10px] px-[8px] py-[14px] mt-[20px]">
            <p class="text-sm text-gray-600">
              Discover Vektra, the newest addition to the collection, with the same cut
              as the Falkon, made from breathable and durable <br /> Aerek 80 fabric.
            </p>
            <p class="text-sm text-gray-600">
              Everything you need for light and comfortable running.
            </p>
          </div>

          <!-- INFO -->
          <div class="flex gap-[90px] mt-[24px]">
            <div class="flex items-center gap-3">
              <img src="./assets/icons/women.svg" class="w-[48px] h-[48px]" />
              <div>
                <p class="text-xs uppercase text-gray-400">Sex</p>
                <p class="text-sm">Women</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <img src="./assets/icons/poids.svg" class="w-[48px] h-[48px]" />
              <div>
                <p class="text-xs uppercase text-gray-400">Poids</p>
                <p class="text-sm">105 gr</p>
              </div>
            </div>
          </div>
        </div>

        <button class="bg-black text-white w-[443px] h-[60px] mt-[24px] flex items-center justify-center">
          ADD TO CART
        </button>

        <div class="flex gap-[28px] w-[443px] h-[60px] mt-[14px]">
          <div class="flex w-[202px] h-[60px]">
            <div class="border w-[60px] h-[60px] flex items-center justify-center">
              <img src="./assets/icons/minus.svg" class="w-[24px] h-[24px]" />
            </div>

            <div class="border-t border-b w-[82px] h-[60px] flex items-center justify-center">
              1
            </div>

            <div class="border w-[60px] h-[60px] flex items-center justify-center">
              <img src="./assets/icons/plus.svg" class="w-[24px] h-[24px]" />
            </div>
          </div>

          <div class="border border-black w-[212px] h-[60px] flex items-center justify-center">
            ADD TO WISHLIST
          </div>
        </div>

        <div class="mt-[14px] flex flex-col gap-[10px] w-[445px] px-[8px] py-[14px] bg-[#F4F4F4]">
          <img src="./assets/icons/free.svg" class="w-[387px] h-[20px]" />

          <p class="text-xs text-gray-500 leading-tight">
            Kindly place your order by 6pm on December 22nd for expedited <br />
            processing
          </p>
        </div>

        <div class="mt-[14px]">
          <p class="text-sm text-gray-500 mb-[8px]">
            Payment method
          </p>

          <div class="flex gap-[9px] h-[36px]">
            <img src="./assets/icons/visa.svg" class="w-[70px] h-[36px]" />
            <img src="./assets/icons/mastercard.svg" class="w-[70px] h-[36px]" />
            <img src="./assets/icons/US.svg" class="w-[70px] h-[36px]" />
            <img src="./assets/icons/learnmore.svg" class="w-[70px] h-[36px]" />
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("app").appendChild(section);

  // Thumbnail click functionality for mobile
  const mainImage = section.querySelector("#mainProductImage");
  const thumbnails = section.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      if (mainImage) {
        mainImage.src = thumb.src;
      }
    });
  });
}