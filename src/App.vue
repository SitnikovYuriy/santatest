<template>
  <div class="app">
    <header>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="/">{{ $dict.site }}</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li
              v-for="route in $router.options.routes"
              :key="route.path"
              :class="'nav-item' + ($route.path == route.path ? ' active' : '')"
            >
              <router-link class="nav-link" :to="route.path">
                {{ route.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
