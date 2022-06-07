<template>
  <main text-center mt-10>
    <NuxtPage />
  </main>
  <footer block mr-auto ml-auto>
    <div flex flex-col mt-6 pt-2 pb-2>
      <div flex flex-wrap justify-center>
        <NuxtLink mr-9 to="/">
          Home
        </NuxtLink>
        <NuxtLink mr-9 to="/Store">
          Store
        </NuxtLink>
        <NuxtLink to="/Rest">
          Rest
        </NuxtLink>
      </div>
      <div>
        <span />
      </div>
    </div>
  </footer>
</template>
