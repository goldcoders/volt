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
    @apply text-teal-500 italic;
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
    <h2
        class="text-4xl font-extrabold tracking-tight text-gray-900 leading-10 sm:text-5xl sm:leading-none md:text-6xl">
      {introduction}
      <br class="xl:hidden" />
      <span class="text-red-600">{app.title}</span>
    </h2>
    <div
        class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      <h1 class="p-4 m-4 border rounded border-current">
        <span class="intro">Elegant UI Using TailwindCSS</span>
      </h1>
    </div>
  </div>
</main>
