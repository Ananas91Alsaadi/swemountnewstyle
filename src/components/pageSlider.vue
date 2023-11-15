<template>
    <div>
        <div class="page">
            <h1>Page {{ currentIndex + 1 }}</h1>
            <transition name="fade">
                <div v-html="currentPageContent" :key="currentIndex"></div>
            </transition>
            <button @click="previousPage" :disabled="currentIndex === 0">Previous Page</button>
            <button @click="nextPage" :disabled="currentIndex === pages.length - 1">Next Page</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pages: [

                    { id: 'page1' },
                    { id: 'page2' },
                    { id: 'page3' },
                ],
                currentIndex: 0,
            };
        },
        computed: {
            currentPageContent() {
                // Retrieve the content for the current page by ID
                const currentPage = this.pages[this.currentIndex];
                return this.pageContents[currentPage.id] || '';
            },
            pageContents() {
                // Define the content for each page by ID
                return {
                    page1: `
            <p>This is the content of page 1.</p>
            <!-- Add more content here as needed -->
          `,
                    page2: `
            <p>This is the content of page 2.</p>
            <!-- Add more content here as needed -->
          `,
                    page3: `
            <p>This is the content of page 3.</p>
            <!-- Add more content here as needed -->
          `,
                    // Add more pages and content as needed
                };
            },
        },
        methods: {
            nextPage() {
                if (this.currentIndex < this.pages.length - 1) {
                    this.currentIndex++;
                }
            },
            previousPage() {
                if (this.currentIndex > 0) {
                    this.currentIndex--;
                }
            },
        },
    };
</script>

<style scoped>
    /* Add your CSS styling here */
    .page {
        margin: 20px;
        padding: 10px;
        border: 1px solid #ccc;
    }

    /* Transition animations */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to

    /* .fade-leave-active below version 2.1.8 */
        {
        opacity: 0;
    }
</style>