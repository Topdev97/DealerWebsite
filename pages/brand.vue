<template>
    <div class="overflow-hidden">
        <Header></Header>
        <div class="max-w-[1440px] mx-auto pt-[126px]">
            <div
                class="flex md:flex-row flex-col xl:gap-[44px] lg:gap-[30px] md:gap-[10px] gap-[56px] md:px-[80px] px-[16px]">
                <div class="md:order-1 order-2">
                    <img src="../assets/img/powersports/Hero Left Side.png" class="" alt="">
                </div>
                <div class="lg:items-start sm:flex sm:flex-col md:order-2 order-1">
                    <div class="xl:mt-[53px] lg:mt-[15px] sm:mt-[10px] flex">
                        <img src="../assets/img/powersports/shop-icon.png" alt="">
                        <h3
                            class=" font-bebas text-[20px] leading-[24px] items-center font-normal pl-[12px] text-[#b51d1d]">
                            FOR DEALERS</h3>
                    </div>
                    <div class="md:max-w-[450px] w-full">
                        <h1
                            class="xl:text-[48px] lg:text-[30px] md:text-[25px] text-[40px] xl:leading-[57px] lg:leading-[40px] md:leading-[35px] leading-[48px] font-normal text-[#272A31] font-bebas xl:mt-[24px] lg:mt-[15px] md:mt-[5px] mt-[24px]">
                            Fuel Your Success: Connect, Learn, and Earn with Powersports Connection</h1>
                        <p
                            class="font-inter text-[18px] xl:text-[18px] lg:text-[15px] md:text-[14px] text-[#61646B] xl:leading-[32px] lg:leading-[25px] md:leading-[23px] leading-[32px] lg:mt-[15px]">
                            Seamlessly connect with top brands, enrich your skills through online courses, and unlock a
                            world of incentives and sales spiffs—all in one intuitive platform.</p>
                    </div>

                    <button
                        class="xl:px-[32px] lg:px-[28px] md:px-[25px] sm:px-[32px] custom:px-[30px] custom:w-[fit-content] w-full py-[16px] font-bebas border-[1px] text-white bg-[#B51D1D] font-normal text-[20px] rounded-[8px] xl:mt-[56px] lg:mt-[50] md:mt-[40] mt-[32px]">
                        START FOR FREE
                    </button>
                </div>
            </div>
            <div
                class="grid md:grid-cols-3 grid-cols-1 justify-between md:mt-[148px] mt-[120px] md:px-[80px] px-[16px] xl:gap-[80px] lg:gap-[40px] md:gap-[20px] gap-[32px]">
                <div class="col-span-1 flex flex-col md:items-start items-center">
                    <img src="../assets/img/powersports/step 1.png" alt="">
                    <h4
                        class=" font-bebas xl:text-[32px] lg:text-[28px] md:text-[24px] text-[24px] font-normal text-[#272a31] xl:mt-[32px] lg:mt-[30px] md:mt-[28px] mt-[24px] ">
                        SIGN UP</h4>
                    <div class=" md:max-w-[373px] w-full md:text-left text-center">
                        <p
                            class=" font-inter font-normal xl:text-[16px] lg:text-[14px] md:[12px] xl:leading-[28px] lg:leading-[24px] md: leading-[20px] text-[#45484F] md:mt-[12px] mt-[4px]">
                            Get started by creating your account. It"s quick easy and free!</p>
                    </div>
                </div>
                <div class="col-span-1 flex flex-col md:items-start items-center">
                    <img src="../assets/img/powersports/step 2.png" alt="">
                    <h4
                        class=" font-bebas xl:text-[32px] lg:text-[28px] md:text-[24px] text-[24px] font-normal text-[#272a31] xl:mt-[32px] lg:mt-[30px] md:mt-[28px] mt-[24px]">
                        CONNECT WITH BRANDS</h4>
                    <div class=" md:max-w-[373px] w-full md:text-left text-center">
                        <p
                            class=" font-inter font-normal xl:text-[16px] lg:text-[14px] md:[12px] xl:leading-[28px] lg:leading-[24px] md: leading-[20px] text-[#45484F] md:mt-[12px] mt-[4px]">
                            Effortlessly connect with leading Powersport brands.</p>
                    </div>
                </div>
                <div class="col-span-1 flex flex-col md:items-start items-center">
                    <img src="../assets/img/powersports/step 3.png" alt="">
                    <h4
                        class="font-bebas xl:text-[32px] lg:text-[28px] md:text-[24px] text-[24px] font-normal text-[#272a31] xl:mt-[32px] lg:mt-[30px] md:mt-[28px] mt-[24px]">
                        LEARN AND EARN</h4>
                    <div class="md:max-w-[373px] w-full md:text-left text-center">
                        <p
                            class="font-inter font-normal xl:text-[16px] lg:text-[14px] md:[12px] xl:leading-[28px] lg:leading-[24px] md: leading-[20px] text-[#45484F] md:mt-[12px] mt-[4px]">
                            Explore courses, earn incentives, spiffs and boost your skills.</p>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="sm:px-[80px] md:mt-[152px] mt-[120px] max-w-[1920px] mx-auto md:bg-[#F1F2F4] bg-white md:pt-[40px] pt-0 md:pb-[80px] pb-[24px]">
            <div
                class="md:bg-[#DCE0E5] bg-white px-[8px] mx-auto py-[8px] max-w-[615px] mt-[40px] rounded-[8px] flex justify-between overflow-auto gap-[16px] no-scrollbar">
                <button
                    class="whitespace-nowrap px-[16px] py-[8px] font-bebas text-black bg-[#DCE0E5] font-normal text-[20px] rounded-[8px]"
                    v-for="(button, index) in buttons"
                    :key="index"
                    :class="{ 'active': button.active }"
                    @click="setActiveButton(index)">
                    {{ button.label }}
                </button>
            </div>
        </div>
        <div class="max-w-[1920px] mx-auto bg-[#F1F2F4]">
            <div class="max-w-[1440px] mx-auto md:px-[80px] px-[16px] md:pb-[96px] pb-[40px]">
                <div
                    class="flex md:flex-row flex-col xl:gap-[95px] lg:gap-[50px] md:gap-[30px] gap-[40px]"
                    v-if="dealerpage == 0"
                >
                    <div class="md:mt-0 mt-10">
                        <img src="../assets/img/powersports/dealer-communicationIcon.png" alt="">
                        <h4
                            class="font-normal text-[40px] font-bebas text-[#272a31] xl:mt-[24px] lg:mt-[20px] md:mt-[16px]">
                            COMMUNICATION</h4>
                        <div class="md:max-w-[580px] w-full">
                            <p class="font-normal text-[18px] xl:leading-[32px] lg:leading-[28px] leading-[32px] md:leading-[24px] font-inter text-[#272A31] xl:mt-[24px] lg:mt-[18px] md:mt-[16px]">
                                Effortlessly connect with the leading Powersports brands in one centralized hub. Streamline
                                communication and collaboration with industry giants right at your fingertips.</p>
                        </div>
                        <div class="flex xl:mt-[40px] lg:mt-[35px] md:mt-[30px] mt-[40px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="" class=" object-contain">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">Centralized Hub - </p> Access a unified platform where
                                you can effortlessly connect with multiple Powersports brands in one place.</p>
                            </div>
                        </div>
                        <div class="flex xl:mt-[32px] lg:mt-[28px] md:mt-[23px] mt-[16px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">Real-time Updates - </p> Receive notifications about
                                upcoming events, product launches, or important updates directly from the brands your
                                connected with.</p>
                            </div>
                        </div>
                        <div class="flex xl:mt-[32px] lg:mt-[28px] md:mt-[23px] mt-[16px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">Interactive Communication - </p> Engage in two-way
                                communication with brand representatives, fostering collaboration and growing your
                                dealership"s relationships.</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <img src="../assets/img/powersports/communication-image.png" class="mt-[44px]" alt="">
                    </div>
                </div>
                <div
                    class="flex md:flex-row flex-col xl:gap-[95px] lg:gap-[50px] md:gap-[30px] gap-[40px]"
                    v-if="dealerpage == 1">
                    <div class="md:mt-0 mt-10">
                        <img src="../assets/img/powersports/dealer-training.png" alt="">
                        <h4
                            class=" font-normal text-[40px] font-bebas text-[#272a31] xl:mt-[24px] lg:mt-[20px] md:mt-[16px]">
                            TRAINING</h4>
                        <div class="md:max-w-[580px] w-full">
                            <p
                                class=" font-normal text-[18px] xl:leading-[32px] lg:leading-[28px] leading-[32px] md:leading-[24px] font-inter text-[#272A31] xl:mt-[24px] lg:mt-[18px] md:mt-[16px]">
                                Elevate your skills and knowledge with our extensive library of online training courses,
                                meticulously crafted by leading Powersports brands.</p>
                        </div>
                        <div class="flex xl:mt-[40px] lg:mt-[35px] md:mt-[30px] mt-[40px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="" class=" object-contain">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">Flexible Learning - </p> Our platform allows you to take
                                courses at your own pace, enabling convenient and flexible learning for you and your team.
                                </p>
                            </div>
                        </div>
                        <div class="flex xl:mt-[32px] lg:mt-[28px] md:mt-[23px] mt-[16px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">Diverse Course Offerings - </p> Access a wide range of
                                courses covering everything from the latest product releases to sales and marketing
                                strategies.</p>
                            </div>
                        </div>
                        <div class="flex xl:mt-[32px] lg:mt-[28px] md:mt-[23px] mt-[16px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">Certificates - </p> Successfully finishing each
                                Curriculum not only expands your knowledge but also earns you official certificate of
                                completion, validating your expertise.</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <img src="../assets/img/powersports/dealer-communication.png" class="mt-[44px]" alt="">
                    </div>
                </div>
                <div
                    class="flex md:flex-row flex-col xl:gap-[95px] lg:gap-[50px] md:gap-[30px] gap-[40px]"
                    v-if="dealerpage == 2"
                >
                    <div class="md:mt-0 mt-10">
                        <img src="../assets/img/powersports/dealer-shiff.png" alt="">
                        <h4
                            class="font-normal text-[40px] font-bebas text-[#272a31] xl:mt-[24px] lg:mt-[20px] md:mt-[16px]">
                            SPIFFS & INCENTIVES</h4>
                        <div class="md:max-w-[580px] w-full">
                            <p
                                class="font-normal text-[18px] xl:leading-[32px] lg:leading-[28px] leading-[32px] md:leading-[24px] font-inter text-[#272A31] xl:mt-[24px] lg:mt-[18px] md:mt-[16px]">
                                Maximize your dealership"s earning potential with our Spiffs and Incentives program. Empower
                                your sales team to go above and beyond by earning enticing rewards for every product sold.
                            </p>
                        </div>
                        <div class="flex xl:mt-[40px] lg:mt-[35px] md:mt-[30px] mt-[40px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="" class=" object-contain">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">Spiffs for Sales Success - </p>Effortlessly earn Spiffs
                                for every available product sold. Our platform ensures that your sales team is rewarded in
                                real-time.</p>
                            </div>
                        </div>
                        <div class="flex xl:mt-[32px] lg:mt-[28px] md:mt-[23px] mt-[16px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">Transparent Spiff Tracking - </p> Gain transparency into
                                Spiff earnings with a user-friendly tracking system. Dealership salespeople can easily
                                monitor their Spiff progress.</p>
                            </div>
                        </div>
                        <div class="flex xl:mt-[32px] lg:mt-[28px] md:mt-[23px] mt-[16px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">IIncentives for Continuous Learning - </p> Beyond
                                monetary rewards, earn exclusive merchandise such as hats, shirts, and more by successfully
                                completing training courses.</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <img src="../assets/img/powersports/dealer-communication.png" class="mt-[44px]" alt="">
                    </div>
                </div>
                <div
                    class="flex md:flex-row flex-col xl:gap-[95px] lg:gap-[50px] md:gap-[30px] gap-[40px]"
                    v-if="dealerpage == 3"
                >
                    <div class="md:mt-0 mt-10">
                        <img src="../assets/img/powersports/dealer-digital.png" alt="">
                        <h4
                            class="font-normal text-[40px] font-bebas text-[#272a31] xl:mt-[24px] lg:mt-[20px] md:mt-[16px]">
                            DIGITAL ASSETS</h4>
                        <div class="md:max-w-[580px] w-full">
                            <p
                                class="font-normal text-[18px] xl:leading-[32px] lg:leading-[28px] leading-[32px] md:leading-[24px] font-inter text-[#272A31] xl:mt-[24px] lg:mt-[18px] md:mt-[16px]">
                                Optimize your dealership"s marketing efforts with our Digital Asset Manager. Easily access
                                and organize a vast array of digital assets provided by Powersports brands.</p>
                        </div>
                        <div class="flex xl:mt-[40px] lg:mt-[35px] md:mt-[30px] mt-[40px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="" class=" object-contain">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">Centralized Access to Brand Resources - </p>Enjoy
                                centralized access to a comprehensive library of digital assets provided by top Powersports
                                brands.</p>
                            </div>
                        </div>
                        <div class="flex xl:mt-[32px] lg:mt-[28px] md:mt-[23px] mt-[16px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">High-Quality Visual Content - </p>Elevate your
                                dealership"s marketing with high-quality visual content. Access professional images and
                                materials directly from brands.</p>
                            </div>
                        </div>
                        <div class="flex xl:mt-[32px] lg:mt-[28px] md:mt-[23px] mt-[16px] max-w-[500px] items-start">
                            <img src="../assets/img/powersports/Check.png" alt="">
                            <div class="pl-[16px]">
                                <p class=" font-medium text-[16px] leading-[28px] font-inter text-[#45484F]">
                                <p class=" font-bold inline-block">Effortless Organization and Search - </p>Stay organized
                                with easy-to-use tools for categorizing and searching digital assets. Quickly locate the
                                right docs, images, and videos.</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <img src="../assets/img/powersports/dealer-communication.png" class="mt-[44px]" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-[1440px] mx-auto md:px-[80px] px-[16px]">
            <div class="md:py-[152px] py-[120px] flex md:flex-row flex-col xl:gap-[250px] lg:gap-[180px] md:gap-[40px]">
                <div class="max-w-[680px] lg:mt-[56px] mt-0 md:text-left text-center">
                    <p
                        class="font-medium font-inter xl:text-[36px] lg:text-[30px] md:text-[25px] text-[24px] xl:leading-[44px] lg:leading-[38px] md:leading-[35px] text-[#45484F]">
                        “Lorem ipsum dolor sit amet moonte consectetur. A leo semper enim sagittis diam pellentesque. Sit
                        ultricies venenatis ultricies iaculis ullamcorper egestas vitae dolor pellentesque.”</p>
                    <div
                        class="border-t-[1px] border-[#C9CDD2] mt-[32px] pt-[32px] flex justify-between md:flex-row flex-col md:items-start items-center">
                        <div class="flex gap-[16px] md:flex-row flex-col items-center ">
                            <img src="../assets/img/powersports/Avatar-base.png" alt="">
                            <p class=" font-normal text-[18px] leading-[44px] font-inter text-[#45484F]"><strong>Shannon Wells, </strong>Dealer Manager</p>
                        </div>
                        <img
                            src="../assets/img/powersports/message-icon.png"
                            class=" w-[48px] h-[48px] object-contain"
                            alt="">
                    </div>
                </div>
                <div class="min-w-[300px] md:block hidden">
                    <img src="../assets/img/powersports/dealer3.png" alt="">
                </div>
            </div>
            <div
                class="grid md:grid-cols-3 grid-cols-1 xl:py-[88px] lg:py-[70px] md:py-[60px] py-[56px] xl:px-[64px] lg:px-[54px] md:px-[44px] bg-[#272A31] rounded-[12px] md:gap-0 gap-[56px]">
                <div class="col-span-1 text-center">
                    <h1 class=" text-[64px] leading-[64px] font-normal text-white font-bebas">100%</h1>
                    <p class=" text-[16px] leading-[24px] font-medium font-inter text-[#C9CDD2]">Real-time Updates</p>
                </div>
                <div class="col-span-1 text-center">
                    <h1 class=" text-[64px] leading-[64px] font-normal text-white font-bebas">80%</h1>
                    <p class=" text-[16px] leading-[24px] font-medium font-inter text-[#C9CDD2]">Reduction in Communication
                        Delays</p>
                </div>
                <div class="col-span-1 text-center">
                    <h1 class="text-[64px] leading-[64px] font-normal text-white font-bebas">96%</h1>
                    <p class="text-[16px] leading-[24px] font-medium font-inter text-[#C9CDD2]">Satisfaction Rate</p>
                </div>
            </div>
            <div class="pt-[192px] md:pb-[160px] pb-[220px] text-center">
                <h3 class="font-bebas font-normal text-[40px] leading-[48px] text-[#272A31]">ACHIEVE YOUR GOALS AS A
                    POWERSPORTS DEALER PROFESSIONAL</h3>
                <p class="font-inter text-[18px] font-normal leading-[28px] text-[#272A31] mt-[16px]">Powersports connection
                    is completely free for dealerships. Get Started Today.</p>
                <button
                    class="px-[32px] py-[16px] font-bebas border-[1px] text-white bg-[#B51D1D] font-normal text-[20px] rounded-[8px] mt-[48px]">
                    START FOR FREE
                </button>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "../components/header.vue";
import Footer from "../components/Footer.vue";
export default {
    name: 'Dealer',
    components: {
        Header: Header,
        Footer: Footer
    },
    data: function () {
        return {
            buttons: [
                {label: 'COMMUNICATION', active: true},
                {label: 'TRAINING', active: false},
                {label: 'SPIFFS & INCENTIVES', active: false},
                {label: 'DIGITAL ASSETS', active: false}
            ],
            dealerpage: 0
        };
    },
    methods: {
        setActiveButton: function (index) {
            this.buttons.forEach((button, i) => {
                button.active = i === index;
                this.dealerpage = index;
            });
        }
    },
    created: function () {
        this.$store.commit('pageLoaded', this.$nuxt);
    },
    mounted: function () {
        this.$store.commit('pageLoaded', this.$nuxt);
    },
    head: function () {
        return {
            title: this.pageTitle,
            meta: []
        };
    }
};
</script>
<style>.active {
    background-color: white;
    box-shadow: 0px 1px 2px 0px #0D10171F;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}</style>
