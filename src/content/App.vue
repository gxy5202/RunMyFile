<template>
    <div>123123</div>
</template>

<script>
import { defineComponent, ref, onMounted, provide } from "vue";

export default defineComponent({
    name: "App",
    setup() {},
});
</script>

<style lang="less">
body {
    margin: 0;
    --van-primary-color: #a494c6 !important;
    --van-sidebar-width: 65px !important;
    --van-sidebar-padding: 12.5px var(--van-padding-sm) !important;

    ::-webkit-scrollbar {
        width: 0.6em;
        height: 0.6em;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(155, 155, 155, 0.4);
        border-radius: 0.6em;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(155, 155, 155, 0.6);
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        background: rgba(200, 200, 200, 0.2);
    }
}

#app {
    width: 300px;
    background-color: rgb(24, 24, 28);

    .video-roll-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #26262a;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        height: 40px;
        padding: 0 10px;
    }

    main {
        position: relative;
    }

    .video-roll-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        .video-roll-website {
            user-select: none;
            height: 25px;
            font-size: 15px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #a494c6;
            padding: 10px 0;
            overflow: hidden;
        }

        .video-roll-rotate-control {
            width: 120px;
            height: 120px;
            border: 5px solid #2d2e31;
            border-radius: 50%;
            position: relative;

            .rotate-deg-text {
                width: 32px;
                height: 20px;
                color: #fff;
                background-color: #a494c6;
                border-radius: 3px;
                position: absolute;
                left: 50%;
                top: 50%;
                font-weight: bold;
                display: flex;
                justify-content: center;
                align-items: center;
                transform: translate(-50%, -50%);
            }

            .rotate-btn {
                width: 30px;
                height: 30px;
                cursor: pointer;
                position: absolute;

                &:hover {
                    svg {
                        color: #d194c0;
                    }
                }
            }

            .rotate-up-90 {
                left: 50%;
                transform: rotate(90deg) translateY(50%);
            }

            .rotate-left-0 {
                top: 50%;
                transform: translateY(-50%);
            }

            .rotate-down-270 {
                bottom: 0;
                left: 50%;
                transform: rotate(270deg) translateY(-50%);
            }

            .rotate-right-180 {
                right: 0;
                top: 50%;
                transform: rotate(180deg) translateY(50%);
            }
        }
    }

    .video-roll-setting {
        position: absolute;
        overflow: overlay;
        width: 100%;
        height: 100%;
        top: 0;
    }
}
</style>
