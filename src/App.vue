<template>
  <div class="min-h-screen bg-[#0b0f19] text-slate-100">
    <Header />

    <main class="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>