./../assets/img/powersports/

<template>
  <div>
    <Header />
    <div class="max-w-[1440px] mx-auto mb-[252px]">
      <div class="grid grid-cols-2 w-full">
        <div class="col-span-1 py-[121px] pl-[80px]">
          <div class="bg-[gray] h-[5px] rounded-[5px] w-[100px] relative">
            <p
              class="bg-[#B51D1D] h-full transition-all rounded-[5px] progress-animation"
              :key="progressUpdate"
            ></p>
          </div>
          <h1
            class="text-[64px] font-normal text-[#272A31] leading-[67px] font-bebas mt-[56px]"
          >
            POWERING
            <h1
              :class="{ 'fade-out': titleChanging }"
              class="text-[#B51D1D] inline-block"
            >
              {{ pageTitle }}
            </h1>
            IN<br />
            THE POWERSPORTS WORLD
          </h1>
          <p class="text-[18px] leading-[32px] text-[#61646B] mt-[32px]">
            Are you a powersports company looking to expand your<br />
            dealership network or a dealership seeking industry updates<br />
            and incentives? PowerSports Connection bridges the gap.
          </p>
          <div class="mt-[56px] space-x-[16px]">
            <button
              class="px-[36px] py-[16px] border-[1px] bg-[#B51D1D] text-white font-bebas text-[20px] rounded-[8px]"
            >
              GET STARTED
            </button>
            <button
              class="px-[36px] py-[16px] border-[1px] border-[#45484F] text-[#45484F] font-bebas text-[20px] rounded-[8px]"
            >
              BOOK A DEMO
            </button>
          </div>
        </div>
        <div
          class="col-span-1 bg-[#F1F2F4] relative"
          v-if="currentTitleIndex == 0"
          :key="currentTitleIndex"
        >
          <img
            src="./../static/main2.png"
            class="absolute top-[40px] lg:w-[450px] xl:w-auto right-[80px] fade-in-image"
            alt=""
          />

          <img
            src="./../static/New Product Launch.png"
            alt=""
            class="left-0 mt-[99px] movingImage"
          />
          <img
            src="./../static/Communication.png"
            alt=""
            class="bottom-[-200px] ml-[256px] motionImage"
          />
        </div>
        <div
          class="col-span-1 bg-[#F1F2F4] relative"
          v-if="currentTitleIndex == 1"
          :key="currentTitleIndex"
        >
          <img
            src="./../static/main2.png"
            class="absolute top-[40px] lg:w-[450px] xl:w-auto right-[80px] fade-in-image"
            alt=""
          />
          <img
            src="./../static/New Product Launch.png"
            alt=""
            class="left-0 mt-[99px] movingImage"
          />
          <img
            src="./../static/Communication.png"
            alt=""
            class="bottom-[-200px] ml-[256px] motionImage"
          />
        </div>
        <div
          class="col-span-1 bg-[#F1F2F4] relative"
          v-if="currentTitleIndex == 2"
          :key="currentTitleIndex"
        >
          <img
            src="./../static/main2.png"
            class="absolute top-[40px] lg:w-[450px] xl:w-auto right-[80px] fade-in-image"
            alt=""
          />
          <img
            src="./../static/New Product Launch.png"
            alt=""
            class="left-0 mt-[99px] movingImage"
          />
          <img
            src="./../static/Communication.png"
            alt=""
            class="bottom-[-200px] ml-[256px] motionImage"
          />
        </div>
      </div>
      <div class="px-[80px] py-[96px] flex justify-between">
        <div>
          <p class="text-[#B51D1D] text-[16px] leading-[28px] font-medium">
            Number
          </p>
          <h2
            class="font-bebas font-normal text-[48px] mt-[12px] text-[#0D1017]"
          >
            OUR IMPACT IN NUMBERS
          </h2>
        </div>
        <div class="flex justify-between space-x-[65px]">
          <div class="pr-[41px]">
            <h1 class="text-[#B51D1D] text-[56px] font-bebas font-normal">
              15,000+
            </h1>
            <p class="text-[18px] font-semibold text-[#45484F]">Users</p>
          </div>
          <div class="pr-[41px]">
            <h1 class="text-[#B51D1D] text-[56px] font-bebas font-normal">
              10,000+
            </h1>
            <p class="text-[18px] font-semibold text-[#45484F]">Dealerships</p>
          </div>
          <div class="pr-[41px]">
            <h1 class="text-[#B51D1D] text-[56px] font-bebas font-normal">
              1500+
            </h1>
            <p class="text-[18px] font-semibold text-[#45484F]">
              Connections Made
            </p>
          </div>
        </div>
      </div>
      <div class="px-[80px] py-[120px] grid grid-cols-10 relative">
        <div class="col-span-4 pr-[64px]" >
          <!-- <div :class="{'featureFixed': isFixed}"> -->
          <div style="position: sticky; top: 100px">
          <p class="text-[#B51D1D] font-medium text-[16px] mt-[16px]">
            Features
          </p>
          <h3 class="font-normal text-[#272A31] font-bebas text-[48px]">
            POWERFUL FEATURES TO HELP<br />
            STREAMLINE OPERATIONS
          </h3>
          <p class="text-[18px] leading-[32px] text-[#61646B] mt-[32px]">
            We prioritize accessibility features and best practices<br />
            throughout our system to make sure that everyone can<br />
            benefit from the power of the web.
          </p>
          <button
            class="px-[24px] py-[12px] border-[1px] bg-[#B51D1D] text-white font-bebas font-normal text-[18px] rounded-[8px] mt-[32px]"
          >
            GET STARTED
          </button>
        </div>
      </div>
        <div class="col-span-6">
          <div
            class="px-[48px] py-[40px] flex justify-center items-center border-[1px] border-[#C9CDD2] rounded-[8px]"
          >
            <img
              src="../static/feature1.png"
              class="mt-[12px] w-[120px] h-[120px]"
              alt=""
            />
            <div class="ml-[40px]">
              <h3 class="text-[32px] text-[#272a31] font-bebas font-normal">
                TRAINING
              </h3>
              <p
                class="text-[16px] text-[#61646b] font-normal leading-[28px] mt-[16px]"
              >
                The powersports industry is constantly evolving, with new
                technologies and products emerging regularly. To succeed, it's
                crucial to keep your team's expertise up-to-date.
              </p>
            </div>
          </div>
          <div
            class="px-[48px] py-[40px] flex justify-center items-center border-[1px] border-[#C9CDD2] rounded-[8px] mt-[40px]"
          >
            <img
              src="../static/feature2.png"
              class="mt-[12px] w-[120px] h-[120px]"
              alt=""
            />
            <div class="ml-[40px]">
              <h3 class="text-[32px] text-[#272a31] font-bebas font-normal">
                COMMUNICATION
              </h3>
              <p
                class="text-[16px] text-[#61646b] font-normal leading-[28px] mt-[16px]"
              >
                Effortlessly exchange messages, updates, and vital information,
                fostering a dynamic and interconnected ecosystem for efficient
                communication and collaboration between brands and dealers.
              </p>
            </div>
          </div>
          <div
            class="px-[48px] py-[40px] flex justify-center items-center border-[1px] border-[#C9CDD2] rounded-[8px] mt-[40px]"
          >
            <img
              src="../static/feature3.png"
              class="mt-[12px] w-[120px] h-[120px]"
              alt=""
            />
            <div class="ml-[40px]">
              <h3 class="text-[32px] text-[#272a31] font-bebas font-normal">
                SPIFF & INCENTIVE TRACKER
              </h3>
              <p
                class="text-[16px] text-[#61646b] font-normal leading-[28px] mt-[16px]"
              >
                Easily track and manage sales (spiffs) with our streamlined
                feature, connecting dealerships and brands for transparent and
                motivating performance monitoring in the Powersports industry.
              </p>
            </div>
          </div>
          <div
            class="px-[48px] py-[40px] flex justify-center items-center border-[1px] border-[#C9CDD2] rounded-[8px] mt-[40px]"
          >
            <img
              src="../static/feature4.png"
              class="mt-[12px] w-[120px] h-[120px]"
              alt=""
            />
            <div class="ml-[40px]">
              <h3 class="text-[32px] text-[#272a31] font-bebas font-normal">
                DIGITAL ASSET MANAGEMENT
              </h3>
              <p
                class="text-[16px] text-[#61646b] font-normal leading-[28px] mt-[16px]"
              >
                Digital assets such as product images, marketing materials, and
                documentation are the lifeblood of your business. With our DAM
                system, you can manage, share, and access these assets with
                ease.
              </p>
            </div>
          </div>
          <div
            class="px-[48px] py-[40px] flex justify-center items-center border-[1px] border-[#C9CDD2] rounded-[8px] mt-[40px]"
          >
            <img
              src="../static/feature5.png"
              class="mt-[12px] w-[120px] h-[120px]"
              alt=""
            />
            <div class="ml-[40px]">
              <h3 class="text-[32px] text-[#272a31] font-bebas font-normal">
                REBATE CENTER
              </h3>
              <p
                class="text-[16px] text-[#61646b] font-normal leading-[28px] mt-[16px]"
              >
                Efficiently control rebate programs with our intuitive feature,
                offering brands a centralized platform to effortlessly manage
                and customize rebate initiatives. streamlining the process for
                optimizing incentives.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2">
        <div class="col-span-1">
          <img src="../static/background2.png" alt="" />
        </div>
        <div class="col-span-1 bg-[#F1F2F4] py-[102px] px-[96px]">
          <p class="text-[16px] text-[#B51D1D] font-medium">For Dealers</p>
          <h3
            class="font-bebas text-[40px] font-normal mt-[12px] text-[#21272A]"
          >
            STAY AHEAD OF THE CURVE
          </h3>
          <p class="text-[16px] leading-[28px] text-[#61646B] mt-[16px]">
            Access a wealth of industry knowledge, discover cutting-edge
            products, and keep your team motivated with a streamlined Spiffs &
            Incentive Tracker. PowerSports Connection is your gateway to a
            brighter future in the Powersports world.
          </p>
          <div class="mt-[48px] space-x-[24px]">
            <button
              class="px-[24px] py-[12px] border-[1px] bg-[#B51D1D] text-white font-bebas text-[20px] rounded-[8px]"
            >
              GET STARTED
            </button>
            <button
              class="px-[24px] py-[12px] border-[1px] border-[#45484F] text-[#45484F] font-bebas text-[20px] rounded-[8px]"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div class="col-span-1 bg-[#F1F2F4] py-[122px] px-[96px]">
          <p class="text-[16px] text-[#B51D1D] font-medium">For Brands</p>
          <h3
            class="font-bebas text-[40px] font-normal mt-[12px] text-[#21272A]"
          >
            UNLOCK YOUR DEALERSHIP NETWORK
          </h3>
          <p class="text-[16px] leading-[28px] text-[#61646B] mt-[16px]">
            PowerSports Connection offers a unique opportunity for powersports
            companies to reach a broader audience. Showcase your products,
            create engaging training courses, manage spiffs and incentives
            effortlessly, and simplify your media management.
          </p>
          <div class="mt-[48px] space-x-[24px]">
            <button
              class="px-[24px] py-[12px] border-[1px] bg-[#B51D1D] text-white font-bebas text-[20px] rounded-[8px]"
            >
              BOOK A DEMO
            </button>
            <button
              class="px-[24px] py-[12px] border-[1px] border-[#45484F] text-[#45484F] font-bebas text-[20px] rounded-[8px]"
            >
              LEARN MORE
            </button>
          </div>
        </div>
        <div class="col-span-1">
          <img src="../static/background2.png" alt="" />
        </div>
      </div>

      <div class="px-[80px] py-[157px]">
        <ssr-carousel loop show-arrows>
          <slide :index="1">
            <div class="flex justify-center space-x-[64px]">
              <img src="../static/sliderImg.png" alt="" />
              <div class="max-w-[654px] self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  height="28px"
                  width="34px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 191.029 191.029"
                  xml:space="preserve"
                >
                  <path
                    style="fill: #020202"
                    d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918  C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433  c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474  C152.613,48.759,171.149,48.759,181.107,48.759z"
                  />
                </svg>
                <p class="text-[24px] leading-[32px] text-[#45484F] mt-[32px]">
                  The Powersports Connection platform is simple to implement and
                  allows us to efficiently and effectively turn employees,
                  dealers, and sales staff into true brand ambassadors.!
                </p>
                <div
                  class="border-l-[1px] border-[#C9CDD2] pl-[24px] mt-[40px]"
                >
                  <P class="text-[16px] font-medium text-[#272A31]"
                    >Matt Schumann</P
                  >
                  <P class="text-[14px] font-normal text-[#61646B]"
                    >Vice President of Marketing @stacyc</P
                  >
                </div>
              </div>
            </div>
          </slide>
          <slide :index="2">
            <div class="flex justify-center space-x-[64px]">
              <img src="../static/sliderImg.png" alt="" />
              <div class="max-w-[654px] self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  height="28px"
                  width="34px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 191.029 191.029"
                  xml:space="preserve"
                >
                  <path
                    style="fill: #020202"
                    d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918  C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433  c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474  C152.613,48.759,171.149,48.759,181.107,48.759z"
                  />
                </svg>
                <p class="text-[24px] leading-[32px] text-[#45484F] mt-[32px]">
                  The Powersports Connection platform is simple to implement and
                  allows us to efficiently and effectively turn employees,
                  dealers, and sales staff into true brand ambassadors.!
                </p>
                <div
                  class="border-l-[1px] border-[#C9CDD2] pl-[24px] mt-[40px]"
                >
                  <P class="text-[16px] font-medium text-[#272A31]"
                    >Matt Schumann</P
                  >
                  <P class="text-[14px] font-normal text-[#61646B]"
                    >Vice President of Marketing @stacyc</P
                  >
                </div>
              </div>
            </div>
          </slide>
          <slide :index="3">
            <div class="flex justify-center space-x-[64px]">
              <img src="../static/sliderImg.png" alt="" />
              <div class="max-w-[654px] self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  height="28px"
                  width="34px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 191.029 191.029"
                  xml:space="preserve"
                >
                  <path
                    style="fill: #020202"
                    d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918  C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433  c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474  C152.613,48.759,171.149,48.759,181.107,48.759z"
                  />
                </svg>
                <p class="text-[24px] leading-[32px] text-[#45484F] mt-[32px]">
                  The Powersports Connection platform is simple to implement and
                  allows us to efficiently and effectively turn employees,
                  dealers, and sales staff into true brand ambassadors.!
                </p>
                <div
                  class="border-l-[1px] border-[#C9CDD2] pl-[24px] mt-[40px]"
                >
                  <P class="text-[16px] font-medium text-[#272A31]"
                    >Matt Schumann</P
                  >
                  <P class="text-[14px] font-normal text-[#61646B]"
                    >Vice President of Marketing @stacyc</P
                  >
                </div>
              </div>
            </div>
          </slide>
        </ssr-carousel>
      </div>

      <div class="px-[80px]">
        <div class="flex justify-between rounded-[12px] bg-[#272A31] h-[342px]">
          <div class="py-[56px] px-[80px]">
            <h3
              class="font-bebas text-[40px] font font-normal mt-[12px] text-white"
            >
              UNLOCK YOUR DEALERSHIP NETWORK
            </h3>
            <p
              class="text-[16px] leading-[28px] text-[#F1F2F4] xl:mt-[12px] 2xl:mt-[16px]"
            >
              Experience the ultimate powersports solution! Embrace
              convenience,<br />performance, and excitement all in one place.
            </p>
            <button
              class="px-[32px] py-[16px] border-[1px] font-normal border-white text-white font-bebas text-[20px] xl:mt-[30px] rounded-[8px] 2xl:mt-[48px]"
            >
              GET STARTED
            </button>
          </div>
          <div class="">
            <img src="../static/Image 2.png" class="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import SsrCarousel from "vue-ssr-carousel";
import ssrCarouselCss from "vue-ssr-carousel/index.css";

import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

export default {
  components: {
    Header,
    Footer,
    SsrCarousel,
  },
  data() {
    return {
      titles: ["CONNECTIONS", "EDUCATION", "INCENTIVES"],
      currentTitleIndex: 0,
      pageTitle: "CONNECTIONS",
      titleChanging: false,
      progressClass: "w-0 duration-0",
      progressUpdate: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.titleChanging = true;
      setTimeout(() => {
        this.currentTitleIndex =
          (this.currentTitleIndex + 1) % this.titles.length;
        this.pageTitle = this.titles[this.currentTitleIndex];
        this.titleChanging = false;
      }, 300);
      this.progressClass = "w-full duration-[8000ms]";
      this.progressUpdate ++ ;
    }, 8000);

  },
  head() {
    return {
      title: this.pageTitle,
      meta: [],
    };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.fade-in-image {
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.movingImage {
  animation-name: moving;
  animation-duration: 1s;
  position: relative !important;
  animation-fill-mode: forwards;
}
@keyframes moving {
  0% {
    left: 0px;
    top: 0px;
  }
  100% {
    left: 100px;
    top: 0px;
  }
}

.motionImage {
  animation-name: motion;
  animation-duration: 1s;
  position: relative !important;
  animation-fill-mode: forwards;
}

@keyframes motion {
  0% {
    left: 0px;
    top: 100px;
  }
  100% {
    left: 0px;
    top: 30px;
  }
}

.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
.reset-animation {
  animation: none; /* Disable the animation */
  animation: fadeIn 2s ease-in-out; /* Reapply the animation */
}

.featureFixed {
  position: fixed;
  top: 0;
  margin-top: 80px;
}

.progress-animation {
  position: absolute;
  top: 0;
  left: 0;
  animation : customProgress 8s linear;
}

@keyframes customProgress {
  0%   {width: 0%;}
  25%  {width: 25%;}
  50%  {width: 50%;}
  75%  {width: 75%;}
  100% {width: 100%;}
}

.ssr-carousel-back-icon, .ssr-carousel-next-icon {
  border: 1px solid gray;
  background-color: transparent;
  opacity: 1 !important;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.ssr-carousel-back-icon::before {
  background-image: url('../static/back.png');
  background-repeat: no-repeat;
  border: none;
  width: 100%;
  height: 100%;
  background-position: center center;
}
.ssr-carousel-next-icon::before {
  background-image: url('../static/next.png');
  background-repeat: no-repeat;
  border: none;
    width: 100%;
  height: 100%;
  background-position: center center;
}


</style>
