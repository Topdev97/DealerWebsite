./../assets/img/powersports/
<template>
  <div>
    <Header />
    <div class="max-w-[1440px] mx-auto pt-[86px]">
      <div class="grid grid-cols-1 lg:grid-cols-2 w-full overflow-hidden sm:gap-0 gap-[84px]">
        <div class="lg:pl-[8%] md:text-left col-span-1 md:mt-[121px] mt-[40px] sm:mb-10 px-[16px]">
          <div class="md:ml-[0px] bg-[gray] h-[8px] rounded-[8px] w-[100px] relative">
            <p class="bg-[#B51D1D] h-full transition-all rounded-[8px] progress-animation" :key="progressUpdate"></p>
          </div>
          <h1
            class="xl:text-[64px] lg:text-[50px] text-[42px] font-normal text-[#272A31] lg:leading-[67px] leading-[50px] font-bebas md:mt-[56px] xs:mt-[32px]">
            POWERING
            <h1 :class="{ 'fade-out': titleChanging }" class="text-[#B51D1D] font-bebas inline-block">
              {{ pageTitle }}
            </h1>
            IN<br />
            THE POWERSPORTS WORLD
          </h1>
          <div class=" max-w-[525px]">
          <p class="lg:text-[18px] text-[16px] lg:leading-[32px] leading-[25px] text-[#61646B] sm:mt-[32px] mt-[24px]">
            Are you a powersports company looking to expand your
            dealership network or a dealership seeking industry updates
            and incentives? PowerSports Connection bridges the gap.
          </p></div>
          <div class="sm:mt-[56px] mt-[32px] space-x-[16px]">
            <button class="px-[36px] xs:px-[30px] py-[16px] border-[1px] bg-[#B51D1D] text-white font-bebas text-[20px] rounded-[8px]">
              GET STARTED
            </button>
            <button
              class="px-[36px] xs:px-[30px] py-[16px] border-[1px] border-[#45484F] text-[#45484F] font-bebas text-[20px] rounded-[8px]">
              BOOK A DEMO
            </button>
          </div>
        </div>
        <div class="col-span-1 bg-[#F1F2F4] relative sm:min-h-[700px] overflow-y-hidden min-h-[363px]" v-if="currentTitleIndex == 0"
          :key="currentTitleIndex">
          <div class=" absolute md:bg-[#F1F2F4] w-[50vw] h-full left-0"></div>
          <img src="../assets/img/powersports/Top.png" class="sm:w-[40%] w-[35%] sm:h-[60%] h-[60%] absolute md:right-[80px] right-[43px] sm:top-[40px] top-[-28px]  fade-in-image" alt="" />
          <img src="../assets/img/powersports/Bottom.png" class="sm:w-[50%] w-[45%] sm:h-[40%] h-[45%] absolute sm:left-[-42px] left-[20px] bottom-[40px] sm:bottom-[50px] fade-in-image" alt="" />

          <img src="../assets/img/powersports/New Product Launch.png" alt="" class=" custom:w-[40%] w-[40%] absolute movingImage" />
          <img src="../assets/img/powersports/Communication.png" alt="" class="custom:w-[40%] w-[50%] absolute bottom-[30px] right-[50px] motionImage" />
        </div>
        <div class="col-span-1 bg-[#F1F2F4] relative sm:min-h-[700px] min-h-[363px] overflow-y-hidden"  v-if="currentTitleIndex == 1"
          :key="currentTitleIndex">
          <div class=" absolute md:bg-[#F1F2F4] w-[50vw] h-full left-0"></div>
          <img src="../assets/img/powersports/Top.png" class="sm:w-[40%] w-[35%] sm:h-[60%] h-[60%] absolute md:right-[80px] right-[43px] sm:top-[40px] top-[-30px]  fade-in-image" alt="" />
          <img src="../assets/img/powersports/Bottom.png" class="sm:w-[50%] w-[45%] sm:h-[40%] h-[45%] absolute sm:left-[-42px] left-[20px] bottom-[40px] sm:bottom-[50px] fade-in-image" alt="" />

          <img src="../assets/img/powersports/New Product Launch.png" alt="" class=" custom:w-[40%] w-[40%] absolute movingImage" />
          <img src="../assets/img/powersports/Communication.png" alt="" class="custom:w-[40%] w-[40%] absolute bottom-[30px] right-[50px] motionImage" />
        </div>
        <div class="col-span-1 bg-[#F1F2F4] relative sm:min-h-[700px] min-h-[363px]  overflow-y-hidden " v-if="currentTitleIndex == 2"
          :key="currentTitleIndex">
          <div class=" absolute md:bg-[#F1F2F4] w-[50vw] h-full left-0"></div>
          <img src="../assets/img/powersports/Top.png" class="sm:w-[40%] w-[35%] sm:h-[60%] h-[60%] absolute md:right-[80px] right-[43px] sm:top-[40px] top-[-28px]  fade-in-image" alt="" />
          <img src="../assets/img/powersports/Bottom.png" class="sm:w-[50%] w-[45%] sm:h-[40%] h-[45%] absolute sm:left-[-42px] left-[20px] bottom-[40px] sm:bottom-[50px] fade-in-image" alt="" />

          <img src="../assets/img/powersports/New Product Launch.png" alt="" class=" custom:w-[40%] w-[40%] absolute movingImage" />
          <img src="../assets/img/powersports/Communication.png" alt="" class="custom:w-[40%] w-[40%] absolute bottom-[30px] right-[50px] motionImage" />
        </div>
      </div>
      <div
        class="md:px-[80px] px-[10px] pt-[96px] flex  xl:pt-[96px] custom:pb-[5%] pb-[50px] md: flex-col justify-between lg:flex-row relative m_number_section_line">
        <div class="lg:w-[525px] md: w-full md:text-left text-center">
          <p class="text-[#B51D1D] text-[18px] font-inter leading-[32px] font-medium">
            Number
          </p>
          <h2 class="font-bebas font-normal md:text-[48px] text-[32px] custom:mt-[12px] mt-[2px] text-[#0D1017]">
            OUR IMPACT IN NUMBERS
          </h2>
        </div>
        <div class="lg:w-[691px] md:w-[100vw] flex justify-between">
          <div class="md:text-left text-center md:pr-[60px] pr-[30px]">
            <h1 class="md:text-[56px] text-[#B51D1D] text-[30px] font-bebas font-normal">
              15,000+
            </h1>
            <p class="md:text-[18px] text-[14px] font-semibold text-[#45484F]">Users</p>
          </div>
          <div class="md:text-left text-center md:pr-[60px] pr-[30px]">
            <h1 class="md:text-[56px] text-[#B51D1D] text-[30px] font-bebas font-normal">
              10,000+
            </h1>
            <p class="md:text-[18px] text-[14px] font-semibold text-[#45484F]">Dealerships</p>
          </div>
          <div class="md:text-left text-center md:pr-[60px] pr-[0px]">
            <h1 class="md:text-[56px] text-[#B51D1D] text-[30px] font-bebas font-normal">
              1500+
            </h1>
            <p class="md:text-[18px] text-[14px] font-semibold text-[#45484F]">
              Connections Made
            </p>
          </div>
        </div>
      </div>
      <div class=" lg:px-[80px] py-[6vw] md:flex-row flex-col flex relative justify-between">
        <div class="custom:mt-0 mt-[30px] lg:w-[525px] md:w-[100vw] lg:text-left md:text-start text-center sm:mb-10 md:px-0 px-[20px] ">
          <div class=" custom:px-0 px-[10px] " style="position: sticky; top: 100px ">
            <p class="text-[#B51D1D] text-[18px] font-inter leading-[32px] font-medium lg:self-center mt-[16px]">
              Features
            </p>
            <h3 class="font-normal text-[#0D1017] custom:leading-[57px] leading-[38px] font-bebas custom:text-[48px] text-[32px]">
              POWERFUL FEATURES TO HELP<br />
              STREAMLINE OPERATIONS
            </h3>
            <div class="md:max-w-[525px] w-full text-center">
              <p class="custom:text-[18px] text-[16px] custom:leading-[32px] leading-[24px] text-[#61646B] mt-[32px]">
              We prioritize accessibility features and best practices
              throughout our system to make sure that everyone can
              benefit from the power of the web.
            </p>
            </div>

            <button
              class="px-[24px] py-[12px] border-[1px] bg-[#B51D1D] text-white font-bebas font-normal text-[18px] rounded-[8px] mt-[32px]">
              GET STARTED
            </button>
          </div>
        </div>
        <div class=" lg:w-[691px] md:w-[100vw] md:pt-0 pt-[56px]">
          <div
            class="md:px-[48px] px-[36px] py-[40px] flex justify-center items-center border-[1px] border-[#C9CDD2] rounded-[8px] custom:flex-row flex-col">
            <img src="../assets/img/powersports/feature1.png" class="mt-[12px] w-[28%]" alt="" />
            <div class="custom:ml-[40px] ml-0 custom:text-left text-center custom:mt-0 mt-[10px]">
              <h3 class="custom:text-[32px] text-[24px] text-[#272a31] font-bebas font-normal">
                TRAINING
              </h3>
              <p class="text-[16px] text-[#61646b] font-normal leading-[28px] mt-[16px]">
                The powersports industry is constantly evolving, with new
                technologies and products emerging regularly. To succeed, it's
                crucial to keep your team's expertise up-to-date.
              </p>
            </div>
          </div>
          <div
            class="md:px-[48px] px-[36px] py-[40px] flex justify-center items-center border-[1px] border-[#C9CDD2] rounded-[8px] custom:flex-row flex-col mt-[40px]">
            <img src="../assets/img/powersports/feature2.png" class="mt-[12px] w-[28%]" alt="" />
            <div class="custom:ml-[40px] ml-0 custom:text-left text-center custom:mt-0 mt-[10px]">
              <h3 class="custom:text-[32px] text-[24px] text-[#272a31] font-bebas font-normal">
                COMMUNICATION
              </h3>
              <p class="text-[16px] text-[#61646b] font-normal leading-[28px] mt-[16px]">
                Effortlessly exchange messages, updates, and vital information,
                fostering a dynamic and interconnected ecosystem for efficient
                communication and collaboration between brands and dealers.
              </p>
            </div>
          </div>
          <div
            class="md:px-[48px] px-[36px] py-[40px] flex justify-center items-center border-[1px] border-[#C9CDD2] rounded-[8px] custom:flex-row flex-col mt-[40px]">
            <img src="../assets/img/powersports/feature3.png" class="mt-[12px] w-[28%]" alt="" />
            <div class="custom:ml-[40px] ml-0 custom:text-left text-center custom:mt-0 mt-[10px]">
              <h3 class="custom:text-[32px] text-[24px] text-[#272a31] font-bebas font-normal">
                SPIFF & INCENTIVE TRACKER
              </h3>
              <p class="text-[16px] text-[#61646b] font-normal leading-[28px] mt-[16px]">
                Easily track and manage sales (spiffs) with our streamlined
                feature, connecting dealerships and brands for transparent and
                motivating performance monitoring in the Powersports industry.
              </p>
            </div>
          </div>
          <div
            class="md:px-[48px] px-[36px] py-[40px] flex justify-center items-center border-[1px] border-[#C9CDD2] rounded-[8px] custom:flex-row flex-col mt-[40px]">
            <img src="../assets/img/powersports/feature4.png" class="mt-[12px] w-[28%]" alt="" />
            <div class="custom:ml-[40px] ml-0 custom:text-left text-center custom:mt-0 mt-[10px]">
              <h3 class="custom:text-[32px] text-[24px] text-[#272a31] font-bebas font-normal">
                DIGITAL ASSET MANAGEMENT
              </h3>
              <p class="text-[16px] text-[#61646b] font-normal leading-[28px] mt-[16px]">
                Digital assets such as product images, marketing materials, and
                documentation are the lifeblood of your business. With our DAM
                system, you can manage, share, and access these assets with
                ease.
              </p>
            </div>
          </div>
          <div
            class="md:px-[48px] px-[36px] py-[40px] flex justify-center items-center border-[1px] border-[#C9CDD2] rounded-[8px] custom:flex-row flex-col mt-[40px]">
            <img src="../assets/img/powersports/feature5.png" class="mmt-[12px] w-[28%]" alt="" />
            <div class="custom:ml-[40px] ml-0 custom:text-left text-center custom:mt-0 mt-[10px]">
              <h3 class="custom:text-[32px] text-[24px] text-[#272a31] font-bebas font-normal">
                REBATE CENTER
              </h3>
              <p class="text-[16px] text-[#61646b] font-normal leading-[28px] mt-[16px]">
                Efficiently control rebate programs with our intuitive feature,
                offering brands a centralized platform to effortlessly manage
                and customize rebate initiatives. streamlining the process for
                optimizing incentives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-2 max-w-[1920px] mx-auto grid-cols-1 overflow-x-hidden">
      <div class="col-span-1 order-1 md:w-[50vw] w-[100vw] custom:h-[680px] h-[420px]  max-w-[960px]">
        <img src="../assets/img/powersports/background2.png" class="md:w-[50vw] w-[100vw] object-cover h-[680px] max-w-[960px]" alt="" />
      </div>
      <div class="md:text-left col-span-1 bg-[#F1F2F4] lg:pt-[185px] md:pt-[150px] pt-[40px] lg:px-[96px] px-[16px] order-2 md:w-[50vw] w-[100vw] max-w-[960px] md:pb-0 pb-[50px] ">
        <p class="text-[#B51D1D] text-[18px] font-inter leading-[32px] font-medium">For Dealers</p>
        <h3 class="font-bebas sm:text-[40px] text-[32px] font-normal mt-[12px] text-[#21272A]">
          STAY AHEAD OF THE CURVE
        </h3>
        <div class=" max-w-[544px]">
          <p class="text-[16px] leading-[28px] text-[#61646B] mt-[16px]">
            Access a wealth of industry knowledge, discover cutting-edge
            products, and keep your team motivated with a streamlined Spiffs &
            Incentive Tracker. PowerSports Connection is your gateway to a
            brighter future in the Powersports world.
          </p>
        </div>
        <div class="mt-[48px] sm:space-x-[24px] space-x-[15px]">
          <button class="px-[24px] py-[12px] border-[1px] bg-[#B51D1D] text-white font-bebas text-[20px] rounded-[8px]">
            GET STARTED
          </button>
          <button
            class="px-[24px] py-[12px] border-[1px] border-[#45484F] text-[#45484F] font-bebas text-[20px] rounded-[8px]">
            LEARN MORE
          </button>
        </div>
      </div>
      <div class="md:text-left col-span-1 bg-[#F1F2F4] lg:pt-[185px] md:pt-[150px] pt-[40px] lg:px-[96px] px-[16px] md:order-3 order-4 md:w-[50vw] w-[100vw] max-w-[960px] md:pb-0 pb-[50px]">
        <p class="text-[#B51D1D] text-[18px] font-inter leading-[28px] font-medium">For Brands</p>
        <h3 class="font-bebas sm:text-[40px] text-[32px] font-normal mt-[12px] text-[#21272A]">
          UNLOCK YOUR DEALERSHIP NETWORK
        </h3>
        <div class=" max-w-[544px]">
          <p class="text-[16px] leading-[28px] text-[#61646B] mt-[16px]">
            PowerSports Connection offers a unique opportunity for powersports
            companies to reach a broader audience. Showcase your products,
            create engaging training courses, manage spiffs and incentives
            effortlessly, and simplify your media management.
          </p>
        </div>
        <div class="mt-[48px] sm:space-x-[24px] space-x-[15px] md:mb-0 mb-[30px]">
          <button class="px-[24px] py-[12px] border-[1px] bg-[#B51D1D] text-white font-bebas text-[20px] rounded-[8px]">
            BOOK A DEMO
          </button>
          <button
            class="px-[24px] py-[12px] border-[1px] border-[#45484F] text-[#45484F] font-bebas text-[20px] rounded-[8px]">
            LEARN MORE
          </button>
        </div>
      </div>
      <div class="md:order-4 col-span-1 order-3 md:w-[50vw] w-[100vw] custom:h-[680px] h-[420px] max-w-[960px]">
        <img src="../assets/img/powersports/background3.png" class="md:w-[50vw] w-[100vw] h-[680px] object-cover max-w-[960px]" alt="" />
      </div>
    </div>
    <div class="max-w-[1440px] mx-auto mb-[224px]">
      <div class="px-[4vw] mt-[157px]">
        <ssr-carousel loop show-arrows>
          <slide :index="1">
            <div class="flex md:flex-row flex-col justify-between sm:mx-[16%] mx-[10px] sm:gap-[30px] gap-[24px]">
              <img class="object-contain md:w-[36%] w-[80%] mx-[auto]" src="../assets/img/powersports/sliderImg.png" alt="" />
              <div class="md:text-left max-w-[654px] self-center">
                <svg class="md:ml-[0]" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" height="28px" width="34px" version="1.1" id="Capa_1"
                  viewBox="0 0 191.029 191.029" xml:space="preserve">
                  <path style="fill: #020202"
                    d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918  C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433  c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474  C152.613,48.759,171.149,48.759,181.107,48.759z" />
                </svg>
                <p class="sm:text-[24px] text-[20px] sm:leading-[32px] leading-[30px] text-[#45484F] sm:mt-[32px] mt-[24px]">
                  The Powersports Connection platform is simple to implement and
                  allows us to efficiently and effectively turn employees,
                  dealers, and sales staff into true brand ambassadors.!
                </p>
                <div class="border-l-[1px] border-[#C9CDD2] pl-[24px] sm:mt-[40px] mt-[32px]">
                  <P class="text-[16px] font-medium text-[#272A31]">Matt Schumann</P>
                  <P class="text-[14px] font-normal text-[#61646B]">Vice President of Marketing @stacyc</P>
                </div>
              </div>
            </div>
          </slide>
          <slide :index="2">
            <div class="flex md:flex-row flex-col justify-between md:mx-[8%] mx-[16%] sm:gap-[30px] gap-[24px]">
              <img class="object-contain md:w-[36%] w-[80%] mx-[auto]" src="../assets/img/powersports/sliderImg.png" alt="" />
              <div class="md:text-left text-center max-w-[654px] self-center">
                <svg class="md:ml-[0]" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" height="28px" width="34px" version="1.1" id="Capa_1"
                  viewBox="0 0 191.029 191.029" xml:space="preserve">
                  <path style="fill: #020202"
                    d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918  C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433  c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474  C152.613,48.759,171.149,48.759,181.107,48.759z" />
                </svg>
                <p class="text-[24px] leading-[32px] text-[#45484F] sm:mt-[32px] mt-[24px]">
                  The Powersports Connection platform is simple to implement and
                  allows us to efficiently and effectively turn employees,
                  dealers, and sales staff into true brand ambassadors.!
                </p>
                <div class="border-l-[1px] border-[#C9CDD2] pl-[24px] sm:mt-[40px] mt-[32px]">
                  <P class="text-[16px] font-medium text-[#272A31]">Matt Schumann</P>
                  <P class="text-[14px] font-normal text-[#61646B]">Vice President of Marketing @stacyc</P>
                </div>
              </div>
            </div>
          </slide>
          <slide :index="3">
            <div class="flex md:flex-row flex-col justify-between md:mx-[8%] mx-[16%] sm:gap-[30px] gap-[24px]">
              <img class="object-contain md:w-[36%] w-[80%] mx-[auto]" src="../assets/img/powersports/sliderImg.png" alt="" />
              <div class="md:text-left text-center max-w-[654px] self-center">
                <svg class="md:ml-[0]" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" height="28px" width="34px" version="1.1" id="Capa_1"
                  viewBox="0 0 191.029 191.029" xml:space="preserve">
                  <path style="fill: #020202"
                    d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918  C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433  c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474  C152.613,48.759,171.149,48.759,181.107,48.759z" />
                </svg>
                <p class="md:text-[24px] text-[20px] leading-[32px] text-[#45484F] sm:mt-[32px] mt-[24px]">
                  The Powersports Connection platform is simple to implement and
                  allows us to efficiently and effectively turn employees,
                  dealers, and sales staff into true brand ambassadors.!
                </p>
                <div class="border-l-[1px] border-[#C9CDD2] pl-[24px] sm:mt-[40px] mt-[32px]">
                  <P class="text-[16px] font-medium text-[#272A31]">Matt Schumann</P>
                  <P class="text-[14px] font-normal text-[#61646B]">Vice President of Marketing @stacyc</P>
                </div>
              </div>
            </div>
          </slide>
        </ssr-carousel>
      </div>

      <div class="sm:px-[80px] px-[10px] sm:mt-[70px] mt-[40px]">
        <div class="flex justify-between md:flex-row flex-col rounded-[12px] bg-[#272A31] items-center">
          <div class=" lg:px-[80px] px-[20px] lg:py-[56px] md:py-[40px] py-[30px] max-h-[342px]">
            <h3 class="font-bebas md:text-[40px] text-[30px] leading-[35px] font font-normal mt-[12px] text-white">
              THE ALL-IN-ONE POWERSPORTS SOLUTION
            </h3>
            <p class="text-[16px] leading-[28px] text-[#F1F2F4] xl:mt-[12px] 2xl:mt-[16px]">
              Experience the ultimate powersports solution! Embrace
              convenience,<br />performance, and excitement all in one place.
            </p>
            <button
              class="md:px-[32px] mt-[20px] md:py-[16px] px-[26px] py-[12px] border-[1px] font-normal border-white text-white font-bebas text-[20px] xl:mt-[30px] rounded-[8px] 2xl:mt-[48px]">
              GET STARTED
            </button>
          </div>
          <div class="">
            <img src="../assets/img/powersports/solution.png" class="" alt="" />
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
      this.progressUpdate++;
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
  animation-fill-mode: forwards;
  position: relative;
}

@keyframes moving {
  0% {
    left: -60px;
    top: 20px;
  }

  100% {
    left: 100px;
    top: 20px;
  }
}

@media (min-width: 394px) {
  @keyframes moving {
    0% {
      left: -60px;
      top: 100px;
    }

    100% {
      left: 160px;
      top: 100px;
    }
  }
}

.motionImage {
  animation-name: motion;
  animation-duration: 1s;

  animation-fill-mode: forwards;
}

@keyframes motion {
  0% {
    bottom: -40px;
    right: 70px;
  }

  100% {
    bottom: 20px;
    right: 70px
  }
}
@media (min-width: 394px) {
  @keyframes motion {
  0% {
    bottom: -40px;
    right: 170px;
  }

  100% {
    bottom: 30px;
    right: 170px
  }
}
}

.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.reset-animation {
  animation: none;
  /* Disable the animation */
  animation: fadeIn 2s ease-in-out;
  /* Reapply the animation */
}

.progress-animation {
  position: absolute;
  top: 0;
  left: 0;
  animation: customProgress 8s linear;
}

@keyframes customProgress {
  0% {
    width: 0%;
  }

  25% {
    width: 25%;
  }

  50% {
    width: 50%;
  }

  75% {
    width: 75%;
  }

  100% {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .ssr-carousel-back-icon,
  .ssr-carousel-next-icon {
    display: none;
  }
}

@media (min-width: 768px) {
  .ssr-carousel-back-icon,
  .ssr-carousel-next-icon {
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
}





.m_number_section_line::after {
  content: "";
  position: absolute;
  border-bottom: 1px solid #E0E3E6;
  width: 90%;
  bottom: 0;
  left: 0px;
  transform: translate(6%, 0px);

}
</style>
