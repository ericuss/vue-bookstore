<template>
    <span>{{ $t(text, model, number) }}</span>
</template>

<script>
export default {
    props: {
        text: { type: String, default: '', required: true },
        model: { type: Object },
        number: { type: Number, default: 1 },
    },
};
</script>