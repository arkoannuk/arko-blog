<template>
  <nav class="">
    <div class="p-2 d-flex justify-content-between container-flex bg-dark text-white">
      <RouterLink
        :to="{ name: 'Home' }"
        active-class="text-white"
        class="px-2 text-decoration-none text-white"
        ><h4>Blog Site</h4></RouterLink
      >
      <div class="">
        <RouterLink
          :to="{ name: 'Home' }"
          active-class="text-white"
          class="px-2 text-decoration-none text-primary"
          >Home</RouterLink
        >
        <RouterLink
          :to="{ name: 'Create' }"
          active-class="text-white"
          class="px-2 text-decoration-none text-primary"
          >Create</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
