<template>
    <div class="layout_container">
        <div class="layout_slider">
            <h1>sidebar</h1>

        </div>
        <div class="layout_tabbar"></div>
        <div class="layout_main">
            <div style="height: 1000px"></div>
        </div>
    </div>
</template>
<script setup lang='ts'>
</script>
<style scoped lang="scss">
.layout_container {
    width: 100vw;
    height: 100vh;

    .layout_slider {
        background: $base-menu-background;
        width: $base-menu-width;
        height: 100vh;
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        background: $base-tabbar-background;
        top: 0;
        right: 0;
    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        top: $base-tabbar-height;
        right: 0;
        padding: 20px;
        overflow: auto;
    }
}
</style>