export function productSection() {
  const section = document.createElement("section");
  section.className = "relative max-w-[1400px] mx-auto min-h-screen";

  section.innerHTML = `
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
    <div class="absolute top-[184px] left-[930px] w-[446px] h-[766px] flex flex-col">

      <p class="uppercase text-xs text-gray-500 w-[165.96px] h-[16px]">
        Black Friday › BF Women
      </p>

      <h1 class="text-3xl font-semibold leading-tight w-[445px] h-[100px] mt-[19px]">
        VEKTRA Women's Short-Sleeve Trail Running Shirt
      </h1>

      <div class="flex gap-[16px] items-center w-[216px] h-[29px] mt-[17px]">
        <span class="text-xl font-semibold">$ 215.00</span>
        <span class="line-through text-gray-400">$ 290.00</span>
      </div>

      <!-- DESCRIPTION -->
      <div class="flex flex-col gap-[10px] px-[8px] py-[14px] w-[445px] mt-[37px]">
        <p class="text-sm text-gray-600">
          Discover Vektra, the newest addition to the collection, with the same cut
          as the Falkon, made from breathable and durable Aerek 80 fabric.
        </p>
        <p class="text-sm text-gray-600">
          Everything you need for light and comfortable running.
        </p>
      </div>

      <!-- INFO -->
      <div class="flex gap-[90px] mt-[42px]">
        <div class="flex items-center gap-3">
          <img src="./assets/icons/women.svg" class="w-[48px] h-[48px]"/>
          <div>
            <p class="text-xs uppercase text-gray-400 w-[21.94px] h-[16px]">Sex</p>
            <p class="text-sm w-[61.04px] h-[18px]">Women</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <img src="./assets/icons/poids.svg" class="w-[48px] h-[48px]"/>
          <div>
            <p class="text-xs uppercase text-gray-400 w-[36.33px] h-[16px]">Poids</p>
            <p class="text-sm w-[48.75px] h-[18px]">105 gr</p>
          </div>
        </div>
      </div>

      <!-- ADD TO CART -->
      <button class="bg-black text-white w-[443px] h-[60px] mt-[42px] flex items-center justify-center">
        ADD TO CART
      </button>

      <!-- ACTIONS -->
      <div class="flex gap-[8px] mt-[14px]">
        <div class="flex items-center justify-between border w-[202px] h-[60px] px-[21px]">
          <img src="./assets/icons/minus.svg" class="w-[24px] h-[24px]"/>
          <span>1</span>
          <img src="./assets/icons/plus.svg" class="w-[24px] h-[24px]"/>
        </div>

        <div class="border w-[212.13px] h-[60px] flex items-center justify-center">
          <p class="w-[162px] h-[18px]">ADD TO WISHLIST</p>
        </div>
      </div>

      <!-- FREE TEXT -->
      <p class="text-xs text-gray-500 w-[445px] mt-[14px]">
        Enjoy FREE express & Free Returns on orders over £35!<br/>
        Kindly place your order by 6pm on December 22nd for expedited processing
      </p>

      <!-- PAYMENT -->
      <div class="mt-[24px] overflow-visible">
        <p class="text-sm text-gray-500 w-[122px] h-[20px] mb-[9px]">
          Payment method
        </p>

        <div class="flex gap-[9px] h-[36px]">
          <img src="./assets/icons/visa.svg" class="w-[70px] h-[36px]"/>
          <img src="./assets/icons/mastercard.svg" class="w-[70px] h-[36px]"/>
          <img src="./assets/icons/amearican.svg" class="w-[70px] h-[36px]"/>
          <img src="./assets/icons/learnmore.svg" class="w-[70px] h-[36px]"/>
        </div>
      </div>

    </div>
  `;

  document.getElementById("app").appendChild(section);
}
