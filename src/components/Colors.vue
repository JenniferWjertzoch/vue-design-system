<template>
  <!-- code block for gray color variants -->
  <div class="block">
    <span class="text-gray-300">Gray</span>
    <div class="flex gap-9">
      <div
        v-for="color in colors.gray"
        :class="{
          'h-32 w-28 flex flex-col bg-white shadow-color-card': true,
        }"
      >
        <div
          :class="{
            'flex w-full flex-1 items-center justify-center': true,
            [color.bg]: true,
            [color.text]: true,
          }"
        >
          {{ color.label }}
        </div>
        <div class="flex w-full flex-1 bg-white items-center justify-center">
          {{ color.text }}
        </div>
      </div>
    </div>
  </div>
  <!-- code block for basic colors -->
  <div class="block mt-8">
    <span class="text-gray-300">Basic</span>
    <div class="flex gap-9">
      <div
        v-for="color in colors.basic"
        :class="{
          'h-32 w-28 flex flex-col bg-white shadow-color-card': true,
        }"
      >
        <div
          :class="{
            'flex w-full flex-1 items-center justify-center': true,
            [color.bg]: true,
            [color.text]: true,
            [color.class]: true,
          }"
        >
          {{ color.label }}
        </div>
        <div class="flex w-full flex-1 bg-white items-center justify-center">
          {{ color.text }}
        </div>
      </div>
      <div class="h-32 w-28 flex flex-col bg-white shadow-color-card">
        <div
          class="flex w-full flex-1 border-b border-gray-200 bg-white items-center justify-center"
        >
          White
        </div>
        <div class="flex w-full flex-1 bg-white items-center justify-center">
          #ffffff
        </div>
      </div>
      <div class="h-32 w-28 flex flex-col bg-white shadow-color-card">
        <div
          class="flex w-full flex-1 text-white bg-black items-center justify-center"
        >
          Black
        </div>
        <div class="flex w-full flex-1 bg-white items-center justify-center">
          #000000
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-colors",

  data: () => ({
    colors: {
      /** gray colors list */
      gray: [
        {
          label: "50",
          text: "#f9fafb",
          bg: "bg-gray-50",
          text: "text-black",
          class: "",
        },
        {
          label: "100",
          text: "#f3f4f6",
          bg: "bg-gray-100",
          text: "text-black",
          class: "",
        },
        {
          label: "200",
          text: "#e5e7eb",
          bg: "bg-gray-200",
          text: "text-black",
          class: "",
        },
        {
          label: "300",
          text: "#d1d5db",
          bg: "bg-gray-300",
          text: "text-black",
          class: "",
        },
        {
          label: "400",
          text: "#9ca3af",
          bg: "bg-gray-400",
          text: "text-black",
          class: "",
        },
        {
          label: "500",
          text: "#6b7280",
          bg: "bg-gray-500",
          text: "text-gray-50",
          class: "",
        },
        {
          label: "600",
          text: "#4b5563",
          bg: "bg-gray-600",
          text: "text-gray-50",
          class: "",
        },
        {
          label: "700",
          text: "#374151",
          bg: "bg-gray-700",
          text: "text-gray-50",
          class: "",
        },
        {
          label: "800",
          text: "#1f2937",
          bg: "bg-gray-800",
          text: "text-gray-50",
          class: "",
        },
        {
          label: "900",
          text: "#111827",
          bg: "bg-gray-900",
          text: "text-gray-50",
          class: "",
        },
      ],
      /** basic colors list */
      basic: [
        {
          label: "White",
          text: "#ffffff",
          bg: "bg-white",
          text: "text-black",
          class: "border-b border-gray-200",
        },
        {
          label: "Black",
          text: "#000000",
          bg: "bg-black",
          text: "text-white",
          class: "",
        },
      ],
    },
  }),
};
</script>
