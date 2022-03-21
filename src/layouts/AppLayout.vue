<template>
    <div>
        <header>
            <NavbarLayout />
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
    import NavbarLayout from '@/components/includes/Navbar.vue';

    export default {
        name: 'AppLayout',
        components: {
            NavbarLayout,
        },
    }
</script>