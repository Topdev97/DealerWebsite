<template>
    <header class="border-b border-[#E0E3E6] bg-white fixed w-full z-50 top-0">
        <div class="max-w-[1440px] mx-auto px-[4vw] py-[16px] flex justify-between items-center m_header_p relative">
            <img class="md:w-[200px] h-[30px] xl:w-[300px] xl:h-[35px]" src="../static/logo.png" alt="">
            <!-- Button to toggle menu on screens less than 1000px -->
            <button @click="toggleMenu" class="absolute right-[20px] top-[15px] m_header_menu_show">
                <img class="opacity-[0.7] w-[35px]" src="../static/callapse.png" alt="">
            </button>
            <!-- Menu always visible on screens larger than 1000px -->
            <div v-show="isMenuVisible || isLargeScreen" :class="{ 'h-screen' : !isMenuVisible }" class=" h-screen flex justify-between items-center w-[65%] m_header_menu"
                id="m_header_menu">
                <ul class="flex justify-start items-center text-[#272A31] text-[16px] gap-[20px] m_header_list">
                    <li>
                        <a href="#">For Dealers</a>
                    </li>
                    <li>
                        <a href="#">For Brands</a>
                    </li>
                    <li>
                        <a href="#">Plans</a>
                    </li>
                </ul>
                <div class="m_header_btn">
                    <button
                        class="px-[24px] py-[12px] border-[1px] border-[#45484F] text-[#45484F] text-[18px] rounded-[8px]">
                        Get Started
                    </button>
                    <button class="px-[24px] py-[12px] border-[1px] text-white bg-[#B51D1D] text-[18px] rounded-[8px]">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuVisible: false,
            isLargeScreen: false,
        };
    },
    mounted() {
        // Listen for window resize events
        window.addEventListener('resize', this.handleScreenResize);
        // Initial check for screen size
        this.handleScreenResize();
    },
    beforeDestroy() {
        // Remove the resize event listener when the component is destroyed
        window.removeEventListener('resize', this.handleScreenResize);
    },
    methods: {
        toggleMenu() {
            console.log(this.isMenuVisible)
            this.isMenuVisible = !this.isMenuVisible;
        },
        handleScreenResize() {
            // Check if window and innerWidth are defined
            if (typeof window !== 'undefined') {
                this.isLargeScreen = window.innerWidth > 816;
            }
        },
    },
};
</script>
