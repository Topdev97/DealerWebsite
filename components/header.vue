<template>
    <header class="sm:border-b border-[#E0E3E6] bg-white fixed w-full z-50 top-0">
        <div class="max-w-[1440px] custom:mx-auto custom:px-[4vw] px-[10px] py-[16px] flex justify-between items-center m_header_p relative">
            <img class="md:w-[200px] h-[30px] xl:w-[300px] xl:h-[35px]" src="../static/logo.png" alt="">
            <!-- Button to toggle menu on screens less than 1000px -->
            <button v-show="!isLargeScreen" @click="toggleMenu" class="absolute right-[20px] top-[15px] m_header_menu_show">
                <img class="opacity-[0.7] w-[35px]" src="../static/callapse.png" alt="">
            </button>
            <!-- Menu always visible on screens larger than 1000px -->
            <div v-show="isLargeScreen || isMenuVisible" :class="{ 'h-screen border-t border-[#E0E3E6]' : isMenuVisible }" class=" flex justify-between items-center w-[65%] m_header_menu"
                id="m_header_menu">
                <ul :class="{'self-start w-full':isMenuVisible && !isLargeScreen}" class="flex justify-start text-[#272A31] text-[16px] gap-[20px] m_header_list">
                    <li :class=" {'border-b-2': isMenuVisible}">
                        <a href="#" :class="{'border-b-3 border-[red]': isMenuVisible}">For Dealers</a>
                    </li>
                    <li :class=" {'border-b-2': isMenuVisible}">
                        <a href="#">For Brands</a>
                    </li>
                    <li :class=" {'border-b-2': isMenuVisible}">
                        <a href="#">Brand Pricing</a>
                    </li>
                </ul>
                <div class="m_header_btn" :class="{'mb-[20%]' : isMenuVisible}">
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

<style>
@media (max-width: 816px) {
  .m_header_p {
    transition: all .5s;
  }

  .m_header_p {
    display: block;
  }

  .m_header_menu {
    position: absolute;
    right: 0;
    width: 100%;
    background-color: white;
    padding: 22px;
    top: 62px;
    flex-direction: column;
  }

  .m_header_list {
    flex-direction: column;
    justify-content: start;
    text-align: left;
    font-size: 20px;
    gap: 5px;
  }

  .m_header_btn {
    margin-top: 14px;
  }

  .m_header_menu_show {
    display: block !important;
  }
}
.m_header_menu_show {
  display: none;
}
</style>
