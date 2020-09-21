<script lang="ts">
  // Props
  export let appName: string;
  // Using Typescript Import Type for interface
  import type { StructTitle } from "./interfaces/title";

  const app: StructTitle = {
    title: "Code Safety With Typescript",
  };

  const introduction: string = "Volt - Blazingly Fast DX for Svelte Apps";
</script>

<style lang="postcss">
  .intro {
    @apply text-red-500 italic font-extrabold text-4xl tracking-wider leading-loose;
  }
</style>

<svelte:head>
  <!-- Import TailwindUI Fonts-->
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <!-- Modify Title using Props -->
  <title>{appName}</title>
</svelte:head>

<main
  class="px-4 mx-auto mt-10 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
  <div class="text-center">
    <h2 class="flex items-center justify-center mb-10 text-4xl font-extrabold tracking-tight">
        <span class="pr-3 text-yellow-500 rounded-r-full bg-gradient-to-bl to-gray-100 from-green-300">{introduction}</span>
    </h2>
    <div class="flex items-center justify-center h-24 rounded-lg">
        <span class="pr-2 text-4xl font-bold tracking-tight text-center rounded-l-full text-yellow-50 bg-gradient-to-l from-green-400 to-blue-400">{app.title}</span>
      </div>
    <div
        class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        <div class="p-4 m-4 border border-none rounded-full bg-gradient-to-r from-blue-50 to-cool-gray-200">
        <span class="intro">Elegant UI Using TailwindCSS</span>
      </div>
    </div>
  </div>
</main>
